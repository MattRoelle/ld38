import { inject } from "aurelia-framework";
import { PlanetEntity } from "./planet-entity";
import { Rng } from "./rng";
import { Utils } from "./utils";
import * as _ from "lodash";

export class GameStateService {
    public state: GameState;

    constructor() {
        this.state = new GameState();
        this.generateNewPlanet(<PlanetGenOpts>({
            x: 0,
            y: 0
        }));
    }

    public generateNewPlanet(opts: PlanetGenOpts) {
        let p: PlanetEntity;
        //do {
            p = new PlanetEntity();
            p.x = opts.x + Rng.rnd(-200, 200);
            p.y = opts.y + Rng.rnd(-200, 200);
            p.radius = Rng.rnd(60, 120);
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
    public gameState: GameStates;

    constructor() {
        this.planets = [];
        this.gameState = GameStates.Playing;
    }
}

export enum GameStates {
    Playing = 1
}