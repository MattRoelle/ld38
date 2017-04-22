import { inject } from "aurelia-framework";
import { GameStateService, GameState } from "./game-state.service";
import { PlanetEntity } from "./planet-entity";
import { StaticEntity, StaticEntities } from "./static-entity";

@inject(GameStateService)
export class TickService {
    public static TickInterval: number = 4;

    public startTime: number;
    public ticks: number;

    private _timeAtLastTick: number;

    constructor(private _gameStateService: GameStateService) {
        this.startTime = Date.now();
        this.ticks = 0;
        this._timeAtLastTick = this.startTime;
    }

    public update() {
        const tickIntervalInMs = (1000/TickService.TickInterval);
        const t = Date.now();
        const dt = t - this._timeAtLastTick;

        let nTicks = Math.floor(dt/tickIntervalInMs);
        while(nTicks > 0) {
            this.tick();
            --nTicks;
            this._timeAtLastTick = t;
        }
    }

    private tick() {
        ++this.ticks;
        if (this.ticks % 8 == 0) {
            this.updateMiners();
        }
    }

    private updateMiners() {
        for(let p of this._gameStateService.state.planets) {
            for(let s of p.staticEntities) {
                if (s.type == StaticEntities.MiningStation) {
                    const dr = Math.min(p.resources, Math.max(this._gameStateService.state.resourceCap - this._gameStateService.state.resourceCount, 0), 50);
                    p.resources -= dr;
                    this._gameStateService.state.resourceCount += dr;
                }
            }
        }
    }
}