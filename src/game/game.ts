import { inject, computedFrom } from "aurelia-framework";
import { GameStateService, GameState } from "./game-state.service";
import { PlanetEntity } from "./planet-entity";
import { StaticEntity } from "./static-entity";
import { TransientEntity, TransientEntities } from "./transient-entity";
import { CameraService } from "./camera.service";
import { TickService } from "./tick.service";
import { InputService } from "./input.service"; import { LogService } from "./log.service"; import { EntityFactory } from "./entity-factory";
import { StaticEntities } from "./static-entity";
import { UiService } from "./ui.service";
import * as _ from "lodash";

@inject(GameStateService, CameraService, InputService, EntityFactory, UiService, TickService, LogService)
export class Game {
    public camera: CameraService;
    public uiService: UiService;
    public logService: LogService;

    private _gameStateService: GameStateService;
    private _inputService: InputService;
    private _entityFactory: EntityFactory;
    private _tickService: TickService;

    constructor(gameStateService: GameStateService, camera: CameraService, inputService: InputService, entityFactory: EntityFactory, uiService: UiService, tickService: TickService, logService: LogService) {
        this.camera = camera;
        this._gameStateService = gameStateService;
        this._inputService = inputService;
        this._entityFactory = entityFactory;
        this.uiService = uiService;
        this._tickService = tickService;
        this.logService = logService;

        this._entityFactory.spawnTransientEntity(this._gameStateService.state.planets[0], TransientEntities.SettlementShip, true);
    }

    attached() {
        this._inputService.initKeyBindings();

        let t2 = Date.now();
        let animFn = () => {
            const t = Date.now();
            const deltaTime = (t - t2)/1000;
            this._inputService.checkForInput();
            this._tickService.update();

            for(let e of this._gameStateService.state.transientEntities) {
                e.update(deltaTime, this._gameStateService.state.transientEntities);
            }
            this._gameStateService.state.transientEntities = _.filter(this._gameStateService.state.transientEntities, e => !e.dead);

            t2 = t;
            requestAnimationFrame(animFn);
        };

        requestAnimationFrame(animFn);
    }

    public get gameState() : GameState {
        return this._gameStateService.state;
    }

    public get entitiesOrbitingPlanet() : TransientEntities[] {
        return this._gameStateService.state.getEntitiesOrbitingPlanet(this.selectedPlanet);
    }

    public markShipForMovement(e: TransientEntity) {
        e.markedForMovement = !e.markedForMovement;
    }

    public buildStaticEntity(type: StaticEntities) {
        this._entityFactory.spawnStaticEntity(this.selectedPlanet, type);
    }

    public upgrade(e: StaticEntity) {
        this._entityFactory.upgradeStaticEntity(e);
    }

    public buildTransientEntity(type: TransientEntities) {
        this._entityFactory.spawnTransientEntity(this.selectedPlanet, type, false);
    }

    public get visiblePlanets(): PlanetEntity[] {
        return this._gameStateService.state.planets;
    }

    public get visibleTransients(): TransientEntity[] {
        return this._gameStateService.state.transientEntities;
    }

    public get selectedPlanet(): PlanetEntity {
        return this.uiService.selectedPlanet;
    }

    public get orbitingCommandCenter() {
        return _.find(this.entitiesOrbitingPlanet, e => e.type == TransientEntities.SettlementShip && e.orbitingPlanet.id == this.selectedPlanet.id);
    }

    public settlePlanet() {
        if (!this.selectedPlanet.settled && !!this.orbitingCommandCenter) {
            this.selectedPlanet.settled = true;
            this.orbitingCommandCenter.dead = true;
        }
    }
}