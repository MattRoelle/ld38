import { bindable, inject } from "aurelia-framework";
import { PlanetEntity } from "../planet-entity";
import { UiService } from "../ui.service";
import { StaticEntity } from "../static-entity";
import { Utils } from "../utils";

@inject(UiService)
export class Planet {
    @bindable public planet: PlanetEntity;

    constructor(private _uiService: UiService) {
    }

    public selectPlanet() {
        this._uiService.selectPlanet(this.planet);
    }

    public selectStaticEntity(e: StaticEntity) {
        this._uiService.selectStaticEntity(e);
    }

    public getStaticEntityX(entity: StaticEntity) {
        return (entity.distanceFromPlanet + (entity.size/2)) * Math.cos(entity.positionOnOrbit);
    }

    public getStaticEntityY(entity: StaticEntity) {
        return (entity.distanceFromPlanet + (entity.size/2)) * Math.sin(entity.positionOnOrbit);
    }
}