import { Entity } from "./entity";
import { PlanetEntity } from "./planet-entity";
import { Utils } from "./utils";

export class TransientEntity extends Entity {
    public distanceFromOrbitingPlanet: number = 250;
    public type: TransientEntities;
    public x: number = 0;
    public y: number = 0;
    public positionOnObirt: number;
    public orbitDirection: number = -1;
    public orbitSpeed: number = 2;
    public movementSpeed: number = 300;
    public state: TransientEntityState;
    public orbitingPlanet: PlanetEntity;
    public markedForMovement: boolean = false;

    constructor(type: TransientEntities) {
        super();
        this.type = type;
    }
    
    public update(deltaT: number) {
        switch(this.state) {
            case TransientEntityState.Orbiting:
                this.updateOrbit(deltaT);
                break;
            case TransientEntityState.Moving:
                this.updateMoving(deltaT);
                break;
        }
    }

    private updateMoving(deltaT: number) {
        const angleToPlanet = Math.atan2(this.y - this.orbitingPlanet.y, this.x - this.orbitingPlanet.x);
        this.x -= Math.cos(angleToPlanet) * this.movementSpeed * deltaT;
        this.y -= Math.sin(angleToPlanet) * this.movementSpeed * deltaT;
        if (Utils.dist(this.x, this.y, this.orbitingPlanet.x, this.orbitingPlanet.y) <= this.distanceFromOrbitingPlanet + this.orbitingPlanet.radius) {
            this.positionOnObirt = angleToPlanet;
            this.state = TransientEntityState.Orbiting;
        }
    }

    private updateOrbit(deltaT: number) {
        this.positionOnObirt += this.orbitDirection * this.orbitSpeed * deltaT;
        this.x = this.orbitingPlanet.x + (Math.cos(this.positionOnObirt) * this.distanceFromOrbitingPlanet) + this.orbitingPlanet.radius;
        this.y = this.orbitingPlanet.y + (Math.sin(this.positionOnObirt) * this.distanceFromOrbitingPlanet) + this.orbitingPlanet.radius;
    }
}

export enum TransientEntityState {
    Orbiting = 1,
    Moving = 2,
    Attacking = 3
}

export enum TransientEntities {
    Carrier = 1
}

export interface TransientEntityDefinition {
    cost: number;
    health: number;
}

const TransientEntityMetadata = {};
TransientEntityMetadata[TransientEntities.Carrier] = {
    cost: 100
};

export { TransientEntityMetadata }