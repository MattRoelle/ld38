import { inject, computedFrom } from "aurelia-framework";
import { GameStateService, GameState } from "./game-state.service";
import { BindingSignaler } from "aurelia-templating-resources";
import { PlanetEntity } from "./planet-entity";
import { Factions } from "./factions";
import { StaticEntity } from "./static-entity";
import { TransientEntity, TransientEntities, TransientEntityState } from "./transient-entity";
import { CameraService } from "./camera.service";
import { TickService } from "./tick.service";
import { InputService } from "./input.service"; import { LogService } from "./log.service"; import { EntityFactory } from "./entity-factory";
import { StaticEntities } from "./static-entity";
import { UiService } from "./ui.service";
import { GraphicsService } from "./graphics.service";
import * as _ from "lodash";

@inject(GameStateService, CameraService, InputService, EntityFactory, UiService, TickService, LogService, GraphicsService, BindingSignaler)
export class Game {
    public camera: CameraService;
    public uiService: UiService;
    public logService: LogService;
    public T: number = Date.now();
    public startTime: number = Date.now();
    public signaler: BindingSignaler;

    public get timeSinceStart() {
        return Date.now() - this.startTime;
    }

    private _gameStateService: GameStateService;
    private _inputService: InputService;
    private _entityFactory: EntityFactory;
    private _tickService: TickService;
    private _graphicsService: GraphicsService;

    constructor(gameStateService: GameStateService, camera: CameraService, inputService: InputService, entityFactory: EntityFactory, uiService: UiService, tickService: TickService, logService: LogService, graphicsService: GraphicsService, signaler: BindingSignaler) {
        this.camera = camera;
        this._gameStateService = gameStateService;
        this._inputService = inputService;
        this._entityFactory = entityFactory;
        this.uiService = uiService;
        this._tickService = tickService;
        this.logService = logService;
        this._graphicsService = graphicsService;
        this.signaler = signaler;

        const settledP = this._gameStateService.state.planets[0];
        settledP.settled = true;
        this.camera.panTo(settledP.x, settledP.y);
    }

    attached() {
        this._graphicsService.initialize();
        this._inputService.initKeyBindings();

        const animFn = () => {
            const t = Date.now();
            const deltaTime = (t - this.T)/1000;
            this._inputService.checkForInput();
            this._tickService.update();

            for(let e of this._gameStateService.state.transientEntities) {
                e.update(deltaTime, this._gameStateService.state.transientEntities);
            }
            this._gameStateService.state.transientEntities = _.filter(this._gameStateService.state.transientEntities, e => !e.dead);

            for(let p of this._gameStateService.state.planets) {
                for(let e of p.staticEntities) {
                    if (e.type == StaticEntities.Turret) {
                        e.update(this._gameStateService.state.transientEntities);
                    }
                }
                p.staticEntities = _.filter(p.staticEntities, e => e.health > 0);
            }

            this.T = t;

            if (this._gameStateService.state.resourceCount > this._gameStateService.state.resourceCap) {
                this._gameStateService.state.resourceCount = this._gameStateService.state.resourceCap;
            }

            this._graphicsService.update();
            requestAnimationFrame(animFn);
        };

        requestAnimationFrame(animFn);
    }

    public getAvailableShips(type: TransientEntities) {
        const p = this.uiService.selectedPlanet;
        return _.filter(this._gameStateService.state.transientEntities, (e: TransientEntity) => e.faction == Factions.Player
            && !e.markedForMovement
            && e.orbitingPlanet.id == p.id
            && e.type == type
            && e.state == TransientEntityState.Orbiting).length;
    }

    public get gameState() : GameState {
        return this._gameStateService.state;
    }

    public get entitiesOrbitingPlanet() : TransientEntities[] {
        return this._gameStateService.state.getEntitiesOrbitingPlanet(this.selectedPlanet);
    }

    public markShipForMovement(type: TransientEntities) {
        const p = this.uiService.selectedPlanet;
        const es = _.filter(this._gameStateService.state.transientEntities, (e: TransientEntity) => e.faction == Factions.Player
            && !e.markedForMovement
            && e.orbitingPlanet.id == p.id
            && e.type == type
            && e.state == TransientEntityState.Orbiting);

        if (es.length > 0) {
            const e = es[0];
            e.markedForMovement = true;
            this.signaler.signal("UpdateShipsForMovement");
        }
    }

    public get entitiesMarkedForMovement() {
        const p = this.uiService.selectedPlanet;
        return _.filter(this._gameStateService.state.transientEntities, (e: TransientEntity) => e.faction == Factions.Player
            && e.markedForMovement
            && e.orbitingPlanet.id == p.id
            && e.state == TransientEntityState.Orbiting)
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