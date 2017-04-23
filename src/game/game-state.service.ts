import { inject, computedFrom } from "aurelia-framework";
import { BindingSignaler } from "aurelia-templating-resources";
import { PlanetEntity } from "./planet-entity";
import { StaticEntity, StaticEntities } from "./static-entity";
import { TransientEntity, TransientEntities, TransientEntityState } from "./transient-entity";
import { Rng } from "./rng";
import { CameraService } from "./camera.service";
import { EntityFactory } from "./entity-factory";
import { Utils } from "./utils";
import { EventService, EventTypes } from "./event.service";
import * as _ from "lodash";

@inject(CameraService, EventService)
export class GameStateService {
    public state: GameState;

    constructor(private _camera: CameraService, private _eventService: EventService) {
        this.state = new GameState();

        for (let i = 0; i < 3; i++) {
            this.generateNewPlanet(<PlanetGenOpts>({
                x: 0,
                y: 0
            }), false);
        }

        const startingPlanet = this.state.planets[0];
        this._camera.panTo(startingPlanet.x, startingPlanet.y);
    }

    public checkIfNeedToGeneratePlanet(p: PlanetEntity) {
        if (Math.abs(p.x - this._camera.minX) < 600 ||
            Math.abs(p.x - this._camera.maxX) < 600 ||
            Math.abs(p.y - this._camera.minY) < 600 ||
            Math.abs(p.y - this._camera.maxY) < 600) {
            this.generateNewPlanet(<PlanetGenOpts>({
                x: p.x,
                y: p.y,
                rngRange: 1500
            }), true);
        }
    }

    public generateNewPlanet(opts: PlanetGenOpts, generateOutsideBounds: boolean) {
        const p = new PlanetEntity();

        const rng = opts.rngRange || 1000;

        p.x = opts.x + Rng.rnd(-rng, rng);
        p.y = opts.y + Rng.rnd(-rng, rng);
        p.radius = Rng.rnd(20, 60);
        p.resources = 500;

        if (_.some(this.state.planets, p2 => {
            if (generateOutsideBounds) {
                return !(p.x < this._camera.minX || p.x > this._camera.maxX || p.y < this._camera.minY || p.y > this._camera.maxY);
            } else {
                return p.distanceTo(p2) < 700 || p.distanceTo(p2) > 1400
            }
        })) {
            this.generateNewPlanet(opts, generateOutsideBounds);
            return;
        }

        this._camera.maxX = Math.max(this._camera.maxX, p.x + 300);
        this._camera.minX = Math.min(this._camera.minX, p.x - 300);
        this._camera.maxY = Math.max(this._camera.maxY, p.y + 300);
        this._camera.minY = Math.min(this._camera.minY, p.y - 300);

        this.state.planets.push(p);

        if (generateOutsideBounds) {
            if (Rng.rnd(0, 100) < 90) {
                p.isHostile = true;
                this._eventService.postEvent(EventTypes.EnemyPlanetCreated, {
                    planet: p
                });
            }
        }
    }
}

interface PlanetGenOpts {
    x: number;
    y: number;
    rngRange: number
}

export class GameState {
    public planets: PlanetEntity[];
    public transientEntities: TransientEntity[];
    public resourceCount: number;
    public gameState: GameStates;

    constructor() {
        this.planets = [];
        this.transientEntities = [];
        this.gameState = GameStates.Playing;
        this.resourceCount = 200;
    }

    public getStaticEntitiesOfType(type: StaticEntities): StaticEntity[] {
        const retVal = [];
        for (let p of this.planets) {
            for (let s of p.staticEntities) {
                if (s.type == type) {
                    retVal.push(s);
                }
            }
        }
        return retVal;
    }

    public getEntitiesOrbitingPlanet(p: PlanetEntity) {
        const retVal = [];
        for (let e of this.transientEntities) {
            ;
            if (e.orbitingPlanet == p && e.state == TransientEntityState.Orbiting) {
                retVal.push(e);
            }
        }
        return retVal;
    }

    public get resourceCap() {
        return 200 + this.getStaticEntitiesOfType(StaticEntities.Stockpile).length * 500;
    }
}

export enum GameStates {
    Playing = 1
}