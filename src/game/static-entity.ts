import { Entity } from "./entity";
import { Factions } from "./factions";
import { Utils } from "./utils";
import { EventService, EventTypes } from "./event.service";
import { TransientEntity, TransientEntityState } from "./transient-entity";
import * as _ from "lodash";

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
    public planetId: string;
    public planetX: number;
    public planetY: number;
    public planetRadius: number;

    private _eventService: EventService;
    private _lastShotAt: number = -1000;

    private _fireRateAtLevel: number[] = [
        600,
        450,
        270
    ];

    private _damageAtLevel: number[] = [
        3,
        5,
        7
    ];

    constructor(type: StaticEntities, eventService: EventService) {
        super();
        this.type = type;
        this.definition = StaticEntityMetadata[type];
        this.health = this.definition.health;
        this._eventService = eventService;
    }

    public update(entities: TransientEntity[]) {
        if (this.type == StaticEntities.Turret) {
            const t = Date.now();

            if (t - this._lastShotAt > this._fireRateAtLevel[this.level - 1]) {
                this._lastShotAt = t;

                const enemiesInOrbit = _.filter(entities, e => e.orbitingPlanet.id == this.planetId && e.faction != this.faction && e.state == TransientEntityState.Attacking);

                if (enemiesInOrbit.length == 0)
                    return;

                const target = _.orderBy(enemiesInOrbit, e => Utils.dist(this.x, this.y, e.x, e.y))[0];

                target.health -= this._damageAtLevel[this.level - 1];

                this._eventService.postEvent(EventTypes.ShotFired, {
                    e1: {
                        x: this.x + this.planetX + this.planetRadius,
                        y: this.y + this.planetY + this.planetRadius,
                    },
                    e2: target,
                });
            }
        }
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
    sprite: string;
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
    sprite: "src/assets/base_mining.png",
};

StaticEntityMetadata[StaticEntities.Turret] = {
    name: "Turret",
    cost: 50,
    health: 300,
    maxUpgradeLevel: 3,
    buildTime: 4,
    upgradeTime: 30,
    faction: Factions.Player,
    sprite: "src/assets/base_turret.png",
};

StaticEntityMetadata[StaticEntities.Stockpile] = {
    name: "Stockpile",
    cost: 100,
    health: 100,
    maxUpgradeLevel: 3,
    buildTime: 20,
    upgradeTime: 30,
    faction: Factions.Player,
    sprite: "src/assets/base_storage.png",
};

StaticEntityMetadata[StaticEntities.ShipYard] = {
    name: "Ship Yard",
    cost: 100,
    health: 100,
    maxUpgradeLevel: 20,
    buildTime: 4,
    upgradeTime: 30,
    faction: Factions.Player,
    sprite: "src/assets/base_shipyard.png",
};

export { StaticEntityMetadata };