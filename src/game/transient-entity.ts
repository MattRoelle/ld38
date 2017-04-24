import { Entity } from "./entity";
import { PlanetEntity } from "./planet-entity";
import { Utils } from "./utils";
import { Rng } from "./rng"
import { EventService, EventTypes } from "./event.service";
import { Factions } from "./factions";
import * as _ from "lodash";

export class TransientEntity extends Entity {
    private actualDistanceFromOrbitingPlanet: number = 275;
    public desiredDistanceFromOrbitingPlanet: number = 275;
    public distanceFromOrbitingPlanet: number = 275;
    public distanceFromOrbitingPlanetWhileAttacking: number = 385;
    public type: TransientEntities;
    public definition: TransientEntityDefinition;
    public x: number = 0;
    public y: number = 0;
    public dead: boolean;
    public positionOnObirt: number = Rng.rnd(0, 2 * Math.PI);
    public orbitDirection: number = Rng.rnd(0, 100) < 50 ? 1 : -1;
    public orbitSpeed: number = 0.25 + Rng.rnd(-0.1, 0.1);
    public movementSpeed: number = 300;
    public state: TransientEntityState;
    public orbitingPlanet: PlanetEntity;
    public markedForMovement: boolean = false;
    public faction: Factions;
    public onEnterPlanet: any;
    public lastFireAt: number = Date.now();

    private _eventService: EventService;

    constructor(type: TransientEntities, eventService: EventService) {
        super();
        this.type = type;
        this.definition = TransientEntityMetadata[type];
        this.health = this.definition.health;
        this._eventService = eventService;
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
        this.x -= Math.cos(angleToPlanet) * this.definition.speed * 10 * deltaT;
        this.y -= Math.sin(angleToPlanet) * this.definition.speed * 10 * deltaT;

        const distToPlanet = Utils.dist(this.x, this.y, this.orbitingPlanet.x, this.orbitingPlanet.y);
        if (!this.isHostileTo(this.orbitingPlanet, otherEntities)) {
            if (distToPlanet <= this.distanceFromOrbitingPlanet) {
                this.actualDistanceFromOrbitingPlanet = distToPlanet;
                this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanet;
                this.positionOnObirt = angleToPlanet;
                this.onEnterPlanet && this.onEnterPlanet(this.orbitingPlanet);
                this.state = TransientEntityState.Orbiting;
            }
        } else {
            if (distToPlanet <= this.distanceFromOrbitingPlanetWhileAttacking) {
                this.actualDistanceFromOrbitingPlanet = distToPlanet;
                this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanetWhileAttacking;
                this.positionOnObirt = angleToPlanet;
                this.state = TransientEntityState.Attacking;
            }
        }
    }

    public isHostileTo(p: PlanetEntity, entities: TransientEntity[]) {
        return _.some(entities, e => e.orbitingPlanet.id == p.id && e.faction != this.faction)
            || _.some(this.orbitingPlanet.staticEntities, e => e.faction != this.faction)
            || (this.faction == Factions.Enemy && this.orbitingPlanet.settled);
    }

    private updateOrbit(deltaT: number, otherEntities: TransientEntity[]) {
        const t = Date.now();
        this.positionOnObirt += this.orbitDirection * this.orbitSpeed * deltaT;

        if (this.actualDistanceFromOrbitingPlanet != this.desiredDistanceFromOrbitingPlanet) {
            const dir = this.actualDistanceFromOrbitingPlanet - this.desiredDistanceFromOrbitingPlanet > 0 ? -1 : 1;
            this.actualDistanceFromOrbitingPlanet += dir * 0.6;
            if (Math.abs(this.actualDistanceFromOrbitingPlanet - this.desiredDistanceFromOrbitingPlanet) < 2) {
                this.actualDistanceFromOrbitingPlanet = this.desiredDistanceFromOrbitingPlanet;
            }
        }

        const distFromPlanet = this.actualDistanceFromOrbitingPlanet;

        const desiredX = this.orbitingPlanet.x + (Math.cos(this.positionOnObirt) * distFromPlanet) + (this.orbitingPlanet.radius/2);
        const desiredY = this.orbitingPlanet.y + (Math.sin(this.positionOnObirt) * distFromPlanet) + (this.orbitingPlanet.radius/2);

        const dX = this.x - desiredX;
        const dY = this.y - desiredY;

        this.x -= dX * 2 * deltaT;
        this.y -= dY * 2 * deltaT;

        const enemies = _.orderBy(_.filter(otherEntities, e => e.orbitingPlanet.id == this.orbitingPlanet.id && e.faction != this.faction && e.state != TransientEntityState.Moving), e => Utils.dist(this.x, this.y, e.x, e.y));
        const constructs = _.filter(this.orbitingPlanet.staticEntities, e => e.faction != this.faction);

        let planetTarget = null;
        if (this.definition.faction == Factions.Enemy && this.orbitingPlanet.settled) {
            planetTarget = this.orbitingPlanet;
        }

        if (this.state == TransientEntityState.Orbiting && enemies.length == 0)
            return;

        if (enemies.length == 0 && constructs.length == 0 && planetTarget == null) {
            this.state = TransientEntityState.Orbiting;
            this.onEnterPlanet && this.onEnterPlanet(this.orbitingPlanet);
            this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanet;
        } else {
            if (t - this.lastFireAt >= this.definition.fireRate) {
                this.lastFireAt = t;

                let target;
                if (enemies.length > 0) {
                    target = enemies[0];
                    this._eventService.postEvent(EventTypes.ShotFired, {
                        e1: this,
                        e2: target
                    });
                } else if (constructs.length > 0) {
                    target = constructs[0];
                    this._eventService.postEvent(EventTypes.ShotFired, {
                        e1: this,
                        e2: {
                            x: target.x + this.orbitingPlanet.x + this.orbitingPlanet.radius,
                            y: target.y + this.orbitingPlanet.y + this.orbitingPlanet.radius
                        }
                    });
                } else {
                    target = planetTarget;
                    this._eventService.postEvent(EventTypes.ShotFired, {
                        e1: this,
                        e2: { 
                            x: target.x + target.radius,
                            y: target.y + target.radius
                        }
                    });
                }

                target.health -= this.definition.damage;
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
    Tank = 3,
    Scout = 4,
    EnemyDrone = 5
}

export interface TransientEntityDefinition {
    name: string;
    cost: number;
    health: number;
    sprite: string;
    faction: Factions;
    buildTime: number;
    fireRate: number;
    damage: number;
    speed: number;
}

const TransientEntityMetadata = {};

TransientEntityMetadata[TransientEntities.SettlementShip] = {
    name: "Settlement Ship",
    health: 100,
    cost: 500,
    buildTime: 40,
    fireRate: 1700,
    damage: 5,
    speed: 4,
    sprite: "src/assets/ships_settler.png",
    faction: Factions.Player,
};

TransientEntityMetadata[TransientEntities.Drone] = {
    name: "Drone",
    health: 150,
    cost: 50,
    buildTime: 16,
    damage: 10,
    speed: 12,
    fireRate: 2300,
    faction: Factions.Player,
    sprite: "src/assets/ships_drone.png",
};

TransientEntityMetadata[TransientEntities.Tank] = {
    name: "Tank",
    health: 500,
    cost: 250,
    buildTime: 40,
    fireRate: 5000,
    damage: 60,
    speed: 9,
    faction: Factions.Player,
    sprite: "src/assets/ships_tank.png",
};

TransientEntityMetadata[TransientEntities.Scout] = {
    name: "Scout",
    health: 100,
    cost: 200,
    buildTime: 8,
    fireRate: 350,
    damage: 3,
    speed: 25,
    faction: Factions.Player,
    sprite: "src/assets/ships_frigate.png",
};

TransientEntityMetadata[TransientEntities.EnemyDrone] = {
    name: "Enemy Drone",
    health: 130,
    cost: 0,
    buildTime: 0,
    speed: 11,
    damage: 10,
    fireRate: 2600,
    sprite: "src/assets/ships_enemy.png",
    faction: Factions.Enemy,
};

export { TransientEntityMetadata }