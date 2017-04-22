import { inject, computedFrom } from "aurelia-framework";
import { BindingSignaler } from "aurelia-templating-resources";
import { PlanetEntity } from "./planet-entity";
import { StaticEntity, StaticEntities } from "./static-entity";
import { TransientEntity, TransientEntities, TransientEntityState } from "./transient-entity";
import { Rng } from "./rng";
import { Utils } from "./utils";
import * as _ from "lodash";

@inject(BindingSignaler)
export class GameStateService {
    public state: GameState;

    constructor() {
        this.state = new GameState();
        this.generateNewPlanet(<PlanetGenOpts>({
            x: 0,
            y: 0
        }));

        this.generateNewPlanet(<PlanetGenOpts>({
            x: 400,
            y: 300
        }));
        this.generateNewPlanet(<PlanetGenOpts>({
            x: -500,
            y: -100
        }));
    }

    public generateNewPlanet(opts: PlanetGenOpts) {
        let p: PlanetEntity;
        p = new PlanetEntity();
        p.x = opts.x + Rng.rnd(-200, 200);
        p.y = opts.y + Rng.rnd(-200, 200);
        p.radius = Rng.rnd(20, 60);
        p.resources = 500;
        //} while (!_.some(this.state.planets, p2 => p.collidesWith(p2)))

        this.state.planets.push(p);
    }
}

interface PlanetGenOpts {
    x: number;
    y: number;
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

    public getStaticEntitiesOfType(type: StaticEntities) : StaticEntity[] {
        const retVal = [];
        for(let p of this.planets) {
            for(let s of p.staticEntities) {
                if (s.type == type) {
                    retVal.push(s);
                }
            }
        }
        return retVal;
    }

    public getEntitiesOrbitingPlanet(p: PlanetEntity) {
        const retVal = [];
        for(let e of this.transientEntities) {;
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