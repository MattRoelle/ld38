import { TransientEntityState } from './transient-entity';
import { inject } from "aurelia-framework";
import { PlanetEntity } from "./planet-entity";
import { StaticEntity } from "./static-entity";
import { Utils } from "./utils";
import { GameStateService } from "./game-state.service";
import * as _ from "lodash";

@inject(GameStateService)
export class UiService {
    public selectedPlanet: PlanetEntity;
    public selectedStaticEntity: StaticEntity;
    public state: ContextUiStates = ContextUiStates.None;

    constructor(private _gameStateService: GameStateService) {

    }

    private deselectCurrent() {
        !!this.selectedPlanet && (this.selectedPlanet.selected = false);
        !!this.selectedStaticEntity && (this.selectedStaticEntity.selected = false);
    }

    public moveUnits() {
        if (!_.some(this._gameStateService.state.transientEntities, e => e.markedForMovement))
            return;
        this.deselectCurrent();
        this.state = ContextUiStates.SelectingPlanetForMovement;
    }

    public selectPlanet(p: PlanetEntity) {
        if (this.state == ContextUiStates.SelectingPlanetForMovement) {
            for(let e of this._gameStateService.state.transientEntities) {
                if (e.markedForMovement) {
                    e.markedForMovement = false;
                    e.orbitingPlanet = p;
                    e.state = TransientEntityState.Moving;
                }
            }
            this.state = ContextUiStates.None;
        } else {
            this.deselectCurrent();
            p.selected = true;
            this.selectedPlanet = p;
            this.state = ContextUiStates.Planet;
        }
    }

    public selectStaticEntity(e: StaticEntity) {
        if (this.state == ContextUiStates.SelectingPlanetForMovement)
            return;

        this.deselectCurrent();
        e.selected = true;
        this.selectedStaticEntity = e;
        this.state = ContextUiStates.StaticEntity;
    }
}

export enum ContextUiStates {
    None = 1,
    Planet = 2,
    StaticEntity = 3,
    SelectingPlanetForMovement = 4
}