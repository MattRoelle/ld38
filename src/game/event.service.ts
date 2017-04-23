export class EventService {
    private _handlers: any = {};
    private _cbId: number = 0;

    constructor() {
    }

    public registerHandler(eventType: EventTypes, cb: any) : number {
        const id = ++this._cbId;
        this._handlers[eventType] = this._handlers[eventType] || {};
        this._handlers[eventType][id] = cb;
        return id;
    }

    public deregisterHandler(eventType: EventTypes, id: number) {
        const handlers = this._handlers[eventType];
        if (!!handlers) {
            delete handlers[id];
        }
    }

    public postEvent(eventType: EventTypes, data: any) {
        const handlers = this._handlers[eventType];
        if (!!handlers) {
            for(var id in handlers) {
                if (handlers.hasOwnProperty(id)) {
                    const cb = handlers[id];
                    if (!!cb) {
                        cb(data);
                    }
                }
            }
        }
    }
}

export enum EventTypes {
    EnemyPlanetCreated = 1,
    CameraUpdate = 2,
    ShotFired = 3,
    PlanetCreated = 4,
    CheatSpawnDrone = 5,
    SpawnEnemyUnit = 6
}