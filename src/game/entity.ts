import { Utils } from "./utils";

export class Entity {
    public x: number;
    public y: number;
    public radius: number;

    public collidesWith(e2: Entity) {
        return Utils.dist(e2.x, e2.y, this.x, this.y) <= e2.radius + this.radius;
    }
}