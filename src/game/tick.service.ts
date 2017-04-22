export class TickService {
    public static TickInterval: number = 2;

    public startTime: number;
    public ticks: number;

    private _timeAtLastTick: number;

    constructor() {
        this.startTime = Date.now();
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

    public tick() {

    }
}