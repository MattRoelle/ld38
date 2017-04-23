import { Entity } from "./entity";

export class StaticEntity extends Entity {
    public id: string;
    public type: StaticEntities;
    public metadata: StaticEntityDefinition;
    public positionOnOrbit: number;
    public upgrading: boolean;
    public distanceFromPlanet: number = 40;
    public size: number = 60;
    public level: number = 1;

    constructor(type: StaticEntities) {
        super();
        this.type = type;
        this.metadata = StaticEntityMetadata[type];
    }
}

export enum StaticEntities {
    MiningStation = 1,
    CommandCenter = 2,
    Turret = 3,
    ShieldGenerator = 4,
    ShipYard = 5,
    Stockpile = 6
}

export interface StaticEntityDefinition {
    name: string;
    cost: number;
    health: number;
    buildTime: number;
    maxUpgradeLevel: number;
    upgradeTime: number;
}

const StaticEntityMetadata = {};

StaticEntityMetadata[StaticEntities.MiningStation] = {
    name: "Mining Station",
    cost: 100,
    health: 100,
    maxUpgradeLevel: 3,
    buildTime: 20,
    upgradeTime: 30
};

StaticEntityMetadata[StaticEntities.Stockpile] = {
    name: "Stockpile",
    cost: 100,
    health: 100,
    maxUpgradeLevel: 3,
    buildTime: 20,
    upgradeTime: 30
};

StaticEntityMetadata[StaticEntities.ShipYard] = {
    name: "Ship Yard",
    cost: 100,
    health: 100,
    maxUpgradeLevel: 20,
    buildTime: 4,
    upgradeTime: 30
};

export { StaticEntityMetadata };