import { Entity } from "./entity";
import { PlanetEntity } from "./planet-entity";
import { Utils } from "./utils";
import { Rng } from "./rng"
import * as _ from "lodash";

export class TransientEntity extends Entity {
    public distanceFromOrbitingPlanet: number = 250 + Rng.rnd(-5, 5);
    public distanceFromOrbitingPlanetWhileAttacking: number = 290 + Rng.rnd(-5, 5);
    public type: TransientEntities;
    public definition: TransientEntityDefinition;
    public x: number = 0;
    public y: number = 0;
    public dead: boolean;
    public positionOnObirt: number = Rng.rnd(0, 2 * Math.PI);
    public orbitDirection: number = Rng.rnd(0, 100) < 50 ? 1 : -1;
    public orbitSpeed: number = 1.5 + Rng.rnd(-0.5, 0.5);
    public movementSpeed: number = 300;
    public state: TransientEntityState;
    public orbitingPlanet: PlanetEntity;
    public markedForMovement: boolean = false;
    public faction: TransientEntityFaction;
    public onEnterPlanet: any;
    public lastFireAt: number = Date.now();

    constructor(type: TransientEntities, metadata: TransientEntityDefinition) {
        super();
        this.type = type;
        this.health = metadata.health;
        this.definition = metadata;
    }
    
    public update(deltaT: number, otherEntities: TransientEntity[]) {
        if (this.state == TransientEntityState.Orbiting || this.state == TransientEntityState.Attacking) {
            this.updateOrbit(deltaT, otherEntities);
        }

        if (this.state == TransientEntityState.Moving) {
            this.updateMoving(deltaT, otherEntities);
        }

        if (this.health <= 0) {
            this.dead = true;
        }
    }

    private updateMoving(deltaT: number, otherEntities: TransientEntity[]) {
        const angleToPlanet = Math.atan2(this.y - this.orbitingPlanet.y, this.x - this.orbitingPlanet.x);
        this.x -= Math.cos(angleToPlanet) * this.movementSpeed * deltaT;
        this.y -= Math.sin(angleToPlanet) * this.movementSpeed * deltaT;

        const distToPlanet = Utils.dist(this.x, this.y, this.orbitingPlanet.x, this.orbitingPlanet.y);
        if (!this.isHostileTo(this.orbitingPlanet, otherEntities)) {
            if (distToPlanet <= this.distanceFromOrbitingPlanet + this.orbitingPlanet.radius) {
                this.positionOnObirt = angleToPlanet;
                this.onEnterPlanet && this.onEnterPlanet(this.orbitingPlanet);
                this.state = TransientEntityState.Orbiting;
            }
        } else {
            if (distToPlanet <= this.distanceFromOrbitingPlanetWhileAttacking + this.orbitingPlanet.radius) {
                this.positionOnObirt = angleToPlanet;
                this.state = TransientEntityState.Attacking;
            }
        }
    }

    public isHostileTo(p: PlanetEntity, entities: TransientEntity[]) {
        return _.some(entities, e => e.orbitingPlanet.id == p.id && e.faction != this.faction);
    }

    private updateOrbit(deltaT: number, otherEntities: TransientEntity[]) {
        const t = Date.now();
        this.positionOnObirt += this.orbitDirection * this.orbitSpeed * deltaT;

        const distFromPlanet = this.state == TransientEntityState.Orbiting ? this.distanceFromOrbitingPlanet : this.distanceFromOrbitingPlanetWhileAttacking;
        this.x = this.orbitingPlanet.x + (Math.cos(this.positionOnObirt) * distFromPlanet) + this.orbitingPlanet.radius;
        this.y = this.orbitingPlanet.y + (Math.sin(this.positionOnObirt) * distFromPlanet) + this.orbitingPlanet.radius;

        const enemies = _.orderBy(_.filter(otherEntities, e => e.orbitingPlanet.id == this.orbitingPlanet.id && e.faction != this.faction && e.state != TransientEntityState.Moving), e => Utils.dist(this.x, this.y, e.x, e.y));

        if (this.state == TransientEntityState.Orbiting && enemies.length == 0)
            return;

        if (enemies.length == 0) {
            this.state = TransientEntityState.Moving;
        } else {
            if (t - this.lastFireAt >= this.definition.fireRate) {
                this.lastFireAt = t;
                enemies[0].health -= 10;
            }
        }
    }
}

export enum TransientEntityState {
    Orbiting = 1,
    Moving = 2,
    Attacking = 3
}

export enum TransientEntities {
    SettlementShip = 1,
    Drone = 2,
    EnemyDrone = 3
}

export enum TransientEntityFaction {
    Player = 1,
    Enemy = 2
}

export interface TransientEntityDefinition {
    name: string;
    cost: number;
    health: number;
    buildTime: number;
    fireRate: number;
}

const TransientEntityMetadata = {};

TransientEntityMetadata[TransientEntities.SettlementShip] = {
    name: "Settlement Ship",
    health: 100,
    cost: 50,
    buildTime: 40,
    fireRate: 1700,
};

TransientEntityMetadata[TransientEntities.Drone] = {
    name: "Drone",
    health: 100,
    cost: 50,
    buildTime: 12,
    fireRate: 1000
};

TransientEntityMetadata[TransientEntities.EnemyDrone] = {
    name: "Enemy Drone",
    health: 70,
    cost: 0,
    buildTime: 0,
    fireRate: 1200
};

export { TransientEntityMetadata }