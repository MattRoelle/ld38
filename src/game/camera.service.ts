import { inject } from "aurelia-framework";
import { EventService, EventTypes } from "./event.service";

@inject(EventService)
export class CameraService {
    public get panSpeed() {
        if (window.innerWidth > 1900) {
            return 35;
        } else if (window.innerWidth > 1500) {
            return 25;
        } else {
            return 15;
        }
    }

    public panX: number = 0;
    public panY: number = 0;
    public minX: number = 0;
    public maxX: number = 0;
    public minY: number = 0;
    public maxY: number = 0;

    constructor(private _eventService: EventService) {
        this.panX = 0;
        this.panY = 0;
    }

    public pan(x: number, y: number) {
        this.panX += x * this.panSpeed;
        this.panY += y * this.panSpeed;
        this.enforceBounds();
        this.postUpdateEvent();
    }

    public panTo(x: number, y: number) {
        this.panX = x - (window.innerWidth / 2);
        this.panY = y - (window.innerHeight / 2);
        this.enforceBounds();
        this.postUpdateEvent();
    }

    public center() {
        this.panX = ((this.maxX - this.minX) / 2) + this.minX;
        this.panY = ((this.maxY - this.minY) / 2) + this.minY;
        this.enforceBounds();
        this.postUpdateEvent();
    }

    private enforceBounds() {
        this.panX = Math.max(this.minX, this.panX);
        this.panX = Math.min(this.maxX - window.innerWidth, this.panX);
        this.panY = Math.max(this.minY, this.panY);
        this.panY = Math.min(this.maxY - window.innerHeight, this.panY);

        this.panX = Math.round(this.panX);
        this.panY = Math.round(this.panY);
    }

    public postUpdateEvent() {
        this._eventService.postEvent(EventTypes.CameraUpdate, {
            x: this.panX,
            y: this.panY
        });
    }
}