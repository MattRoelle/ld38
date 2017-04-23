import { Entity } from "./entity";
import { PlanetEntity } from "./planet-entity";
import { Utils } from "./utils";
import { Rng } from "./rng"
import { EventService, EventTypes } from "./event.service";
import { Factions } from "./factions";
import * as _ from "lodash";

export class TransientEntity extends Entity {
    private actualDistanceFromOrbitingPlanet: number = 250;
    private desiredDistanceFromOrbitingPlanet: number = 250;
    public distanceFromOrbitingPlanet: number = 250 + Rng.rnd(-15, 15);
    public distanceFromOrbitingPlanetWhileAttacking: number = 290 + Rng.rnd(-5, 5);
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
        this.x -= Math.cos(angleToPlanet) * this.movementSpeed * deltaT;
        this.y -= Math.sin(angleToPlanet) * this.movementSpeed * deltaT;

        const distToPlanet = Utils.dist(this.x, this.y, this.orbitingPlanet.x, this.orbitingPlanet.y);
        if (!this.isHostileTo(this.orbitingPlanet, otherEntities)) {
            if (distToPlanet <= this.distanceFromOrbitingPlanet + this.orbitingPlanet.radius) {
                this.actualDistanceFromOrbitingPlanet = distToPlanet;
                this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanetWhileAttacking;
                this.positionOnObirt = angleToPlanet;
                this.onEnterPlanet && this.onEnterPlanet(this.orbitingPlanet);
                this.state = TransientEntityState.Orbiting;
            }
        } else {
            if (distToPlanet <= this.distanceFromOrbitingPlanetWhileAttacking + this.orbitingPlanet.radius) {
                this.actualDistanceFromOrbitingPlanet = distToPlanet;
                this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanet;
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

        const desiredX = this.orbitingPlanet.x + (Math.cos(this.positionOnObirt) * distFromPlanet) + this.orbitingPlanet.radius;
        const desiredY = this.orbitingPlanet.y + (Math.sin(this.positionOnObirt) * distFromPlanet) + this.orbitingPlanet.radius;

        const dX = this.x - desiredX;
        const dY = this.y - desiredY;

        this.x -= dX * 2 * deltaT;
        this.y -= dY * 2 * deltaT;

        const enemies = _.orderBy(_.filter(otherEntities, e => e.orbitingPlanet.id == this.orbitingPlanet.id && e.faction != this.faction && e.state != TransientEntityState.Moving), e => Utils.dist(this.x, this.y, e.x, e.y));
        const constructs = this.orbitingPlanet.staticEntities;

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

                target.health -= 10;
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

export interface TransientEntityDefinition {
    name: string;
    cost: number;
    health: number;
    buildTime: number;
    fireRate: number;
    sprite: string;
    faction: Factions;
}

const TransientEntityMetadata = {};

TransientEntityMetadata[TransientEntities.SettlementShip] = {
    name: "Settlement Ship",
    health: 100,
    cost: 50,
    buildTime: 40,
    fireRate: 1700,
    sprite: "src/assets/friendly.png",
    faction: Factions.Player,
};

TransientEntityMetadata[TransientEntities.Drone] = {
    name: "Drone",
    health: 100,
    cost: 50,
    buildTime: 12,
    fireRate: 2300,
    faction: Factions.Player,
    sprite: "src/assets/friendly.png",
};

TransientEntityMetadata[TransientEntities.EnemyDrone] = {
    name: "Enemy Drone",
    health: 100,
    cost: 0,
    buildTime: 0,
    fireRate: 2600,
    sprite: "src/assets/enemy.png",
    faction: Factions.Enemy,
};

export { TransientEntityMetadata }