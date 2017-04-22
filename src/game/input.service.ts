import { inject } from "aurelia-framework";
import { CameraService } from "./camera.service";

@inject(CameraService)
export class InputService {
    constructor(private _camera: CameraService) {}

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

        this._keystates[KeyCodes.W] && (panY = 1);
        this._keystates[KeyCodes.S] && (panY = -1);
        this._keystates[KeyCodes.A] && (panX = 1);
        this._keystates[KeyCodes.D] && (panX = -1);

        (panX != 0 || panY != 0) && this._camera.pan(panX, panY);
    }

    private onkeydown(e: KeyboardEvent) {
        this._keystates[e.which] = true;
    }

    private onkeyup(e: KeyboardEvent) {
        this._keystates[e.which] = false;
    }
}

export enum KeyCodes {
    W = 87,
    A = 65,
    S = 83,
    D = 68
}