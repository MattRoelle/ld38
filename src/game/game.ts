import { inject } from "aurelia-framework";
import { GameStateService } from "./game-state.service";
import { PlanetEntity } from "./planet-entity";
import { CameraService } from "./camera.service";
import { TickService } from "./tick.service";
import { InputService } from "./input.service";

@inject(GameStateService, CameraService, InputService)
export class Game {
    public camera: CameraService;

    private _gameStateService: GameStateService;
    private _inputService: InputService;

    constructor(gameStateService: GameStateService, camera: CameraService, inputService: InputService) {
        this.camera = camera;
        this._gameStateService = gameStateService;
        this._inputService = inputService;
    }

    attached() {
        this._inputService.initKeyBindings();

        let animFn = () => {
            this._inputService.checkForInput();
            requestAnimationFrame(animFn);
        };
        requestAnimationFrame(animFn);
    }

    private onAnimationFrame() {
    }

    public get visiblePlanets(): PlanetEntity[] {
        return this._gameStateService.state.planets;
    }
}