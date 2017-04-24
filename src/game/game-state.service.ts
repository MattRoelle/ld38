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
        if (p.hasBeenVisitied)
            return;
        
        p.hasBeenVisitied = true;

        const distFromLeft = Math.abs(p.x - this._camera.minX);
        const distFromRight = Math.abs(p.x - this._camera.maxX);
        const distFromTop = Math.abs(p.y - this._camera.minY);
        const distFromBottom = Math.abs(p.y - this._camera.maxY);
        if (distFromLeft < 600 ||
            distFromRight < 600 ||
            distFromTop < 600 ||
            distFromBottom < 600) {

            const xBias = Math.min(distFromLeft, distFromRight) < Math.min(distFromTop, distFromBottom);
            const yBias = !xBias;

            const xDir = distFromLeft < distFromRight ? -1 : 1;
            const yDir = distFromTop < distFromBottom ? -1 : 1;

            let planetsToGenerate = 1
            if (Rng.rnd(0, 100) < 30) planetsToGenerate++;
            if (Rng.rnd(0, 100) < 10) planetsToGenerate++;

            setTimeout(() => {
                for(let i = 0; i < planetsToGenerate; i++) {
                    let xrng = (xBias ? 1100 : 500);
                    let yrng = (yBias ? 1100 : 500);

                    if (xBias) yrng += i * 600;
                    if (yBias) yrng += i * 600;

                    let tryCount = 0;
                    let finished = false;
                    while(tryCount < 3 && !finished) {
                        try {
                            this.generateNewPlanet(<PlanetGenOpts>({
                                x: p.x,
                                y: p.y,
                                xRange: xrng * xDir,
                                yRange: yrng * yDir
                            }), true);
                            finished = true;
                        } catch(e) {
                            tryCount++;
                        }
                    }
                }
            }, 10);
        }
    }

    public planetSprites: string[] = [
        "src/assets/planet_1.png",
        "src/assets/planet_2.png",
        "src/assets/planet_3.png",
        "src/assets/planet_4.png",
        "src/assets/planet_5.png",
        "src/assts/planet_6.png",
        "src/assets/planet_7.png",
        "src/assets/planet_8.png"
    ];

    public generateNewPlanet(opts: PlanetGenOpts, generateOutsideBounds: boolean) {
        const p = new PlanetEntity();

        const xRng = opts.xRange || 1000;
        const yRng = opts.yRange || 1000;

        p.x = Math.round(opts.x + Rng.rnd(-xRng, xRng));
        p.y = Math.round(opts.y + Rng.rnd(-yRng, yRng));
        p.radius = 108/2;
        p.resources = 2500 + Math.floor(Rng.rnd(-1000, 3000));

        if (_.some(this.state.planets, p2 => {
            if (generateOutsideBounds) {
                const outOfBounds = !(p.x < this._camera.minX || p.x > this._camera.maxX || p.y < this._camera.minY || p.y > this._camera.maxY);
                return outOfBounds || p.distanceTo(p2) < 650;
            } else {
                return p.distanceTo(p2) < 900 || p.distanceTo(p2) > 3000
            }
        })) {
            this.generateNewPlanet(opts, generateOutsideBounds);
            return;
        }

        this._camera.maxX = Math.max(this._camera.maxX, p.x + 500);
        this._camera.minX = Math.min(this._camera.minX, p.x - 500);
        this._camera.maxY = Math.max(this._camera.maxY, p.y + 500);
        this._camera.minY = Math.min(this._camera.minY, p.y - 500);

        p.sprite = this.planetSprites[Math.floor(Rng.rnd(0, this.planetSprites.length))];

        this.state.planets.push(p);

        this._eventService.postEvent(EventTypes.PlanetCreated, p);

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
    xRange: number;
    yRange: number;
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