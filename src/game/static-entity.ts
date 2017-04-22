import { Entity } from "./entity";

export class StaticEntity extends Entity {
    public id: string;
    public type: StaticEntities;
    public positionOnOrbit: number;
    public distanceFromPlanet: number = 40;
    public size: number = 60;

    constructor(type: StaticEntities) {
        super();
        this.type = type;
    }
}

export enum StaticEntities {
    MiningStation = 1,
    CommandCenter = 2,
    Turret = 3,
    ShieldGenerator = 4,
    Factory = 5,
    Stockpile = 6
}

export interface StaticEntityDefinition {
    cost: number;
    health: number;
    maxUpgradeLevel: number;
}

const StaticEntityMetadata = {};

StaticEntityMetadata[StaticEntities.MiningStation] = {
    cost: 100,
    health: 100,
    maxUpgradeLevel: 3
};

StaticEntityMetadata[StaticEntities.Stockpile] = {
    cost: 100,
    health: 100,
    maxUpgradeLevel: 3
};

StaticEntityMetadata[StaticEntities.Factory] = {
    cost: 100,
    health: 100,
    maxUpgradeLevel: 3
};

export { StaticEntityMetadata };