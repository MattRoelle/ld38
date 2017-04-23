import { inject } from "aurelia-framework";
import { EventService, EventTypes } from "./event.service";

declare var PIXI: any;

@inject(EventService)
export class GraphicsService {
    constructor(private _eventService: EventService) {}
}