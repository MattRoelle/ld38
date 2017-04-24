import { inject } from "aurelia-framework";
import { CameraService } from "./camera.service";
import { EventService, EventTypes } from "./event.service";
import { UiService } from "./ui.service";

@inject(CameraService, EventService, UiService)
export class InputService {
    constructor(private _camera: CameraService, private _eventService: EventService, private _uiService: UiService) {}

    private _keystates: any = {};

    public initKeyBindings() {
        window.addEventListener("keydown", e => this.onkeydown(e));
        window.addEventListener("keyup", e => this.onkeyup(e));
    }

    public checkForInput() {
        this.checkForPanningInput();
    }

    private checkForPanningInput() {
        let panX = 0;
        let panY = 0;

        this._keystates[KeyCodes.W] && (panY = -1);
        this._keystates[KeyCodes.S] && (panY = 1);
        this._keystates[KeyCodes.A] && (panX = -1);
        this._keystates[KeyCodes.D] && (panX = 1);

        (panX != 0 || panY != 0) && this._camera.pan(panX, panY);
    }

    private onkeydown(e: KeyboardEvent) {
        this._keystates[e.which] = true;

        if (e.which == KeyCodes.T) {
            this._eventService.postEvent(EventTypes.CheatSpawnDrone, null);
        } else if (e.which == KeyCodes.Y) {
            this._eventService.postEvent(EventTypes.CheatSpawnEnemyDrone, null);
        } else if (e.which == KeyCodes.ESC) {
            this._uiService.resetUiState();
        }
    }

    private onkeyup(e: KeyboardEvent) {
        this._keystates[e.which] = false;
    }
}

export enum KeyCodes {
    W = 87,
    A = 65,
    S = 83,
    D = 68,
    T = 84,
    Y = 89,
    ESC = 27
}