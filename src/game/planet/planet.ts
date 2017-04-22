import { bindable, inject } from "aurelia-framework";
import { PlanetEntity } from "../planet-entity";

export class Planet {
    @bindable public planet: PlanetEntity;
}