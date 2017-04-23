import { inject } from "aurelia-framework";
import { GameStateService, GameState } from "./game-state.service";
import { PlanetEntity } from "./planet-entity";
import { StaticEntity, StaticEntities } from "./static-entity";
import * as _ from "lodash";

@inject(GameStateService)
export class TickService {
    public static TickInterval: number = 4;

    private events: ScheduledEvent[] = [];
    public startTime: number;
    public ticks: number;

    private _timeAtLastTick: number;

    constructor(private _gameStateService: GameStateService) {
        this.startTime = Date.now();
        this.ticks = 0;
        this._timeAtLastTick = this.startTime;
    }

    public scheduleEvent(ev: ScheduledEvent) {
        ev.tickScheduledAt = this.ticks;
        this.events.push(ev);
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

        for(let ev of this.events) {
            ev.onTick && ev.onTick();
            if (this.ticks > ev.tickScheduledAt + ev.n) {
                ev.onCompletion && ev.onCompletion();
            }
        }

        this.events = _.filter(this.events, ev => this.ticks <= ev.tickScheduledAt + ev.n);
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

export interface ScheduledEvent {
    tickScheduledAt: number;
    n: number;
    onCompletion: any;
    onTick: any;
}