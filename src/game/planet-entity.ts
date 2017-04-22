import { Utils } from "./utils";
import { StaticEntity } from "./static-entity";

export class PlanetEntity {
    constructor() {
    }

    public x: number;
    public y: number;
    public radius: number;
    public resources: number;
    public selected: boolean;
    public staticEntities: StaticEntity[] = [];

    public collidesWith(e2: PlanetEntity) {
        return Utils.dist(e2.x, e2.y, this.x, this.y) <= e2.radius + this.radius;
    }
}