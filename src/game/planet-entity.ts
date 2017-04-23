import { Utils } from "./utils";
import { StaticEntity } from "./static-entity";

export class PlanetEntity {
    constructor() {
    }

    public x: number;
    public y: number;
    public id: string = Utils.guid();
    public radius: number;
    public resources: number;
    public selected: boolean;
    public staticEntities: StaticEntity[] = [];
    public settled: boolean;
    public settlementHealth: number = 100;
    public isHostile: boolean = false;
    public hasBeenVisitied: boolean = false;
    public health: number = 1000;

    public distanceTo(e2: PlanetEntity) {
        return Utils.dist(e2.x, e2.y, this.x, this.y);
    }
}