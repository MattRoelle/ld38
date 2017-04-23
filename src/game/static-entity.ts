import { Entity } from "./entity";
import { Factions } from "./factions";

export class StaticEntity extends Entity {
    public id: string;
    public type: StaticEntities;
    public definition: StaticEntityDefinition;
    public positionOnOrbit: number;
    public upgrading: boolean;
    public distanceFromPlanet: number = 40;
    public size: number = 60;
    public level: number = 1;
    public health: number;
    public faction: Factions;
    public x: number;
    public y: number;

    constructor(type: StaticEntities) {
        super();
        this.type = type;
        this.definition = StaticEntityMetadata[type];
        this.health = this.definition.health;
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
    faction: Factions;
}

const StaticEntityMetadata = {};

StaticEntityMetadata[StaticEntities.MiningStation] = {
    name: "Mining Station",
    cost: 100,
    health: 100,
    maxUpgradeLevel: 3,
    buildTime: 20,
    upgradeTime: 30,
    faction: Factions.Player,
};

StaticEntityMetadata[StaticEntities.Stockpile] = {
    name: "Stockpile",
    cost: 100,
    health: 100,
    maxUpgradeLevel: 3,
    buildTime: 20,
    upgradeTime: 30,
    faction: Factions.Player,
};

StaticEntityMetadata[StaticEntities.ShipYard] = {
    name: "Ship Yard",
    cost: 100,
    health: 100,
    maxUpgradeLevel: 20,
    buildTime: 4,
    upgradeTime: 30,
    faction: Factions.Player,
};

export { StaticEntityMetadata };