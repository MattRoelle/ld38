import { inject } from "aurelia-framework";
import { EventService, EventTypes } from "./event.service";
import { Utils } from "./utils";
import { Rng } from "./rng";
import * as _ from "lodash";

declare var PIXI: any;
declare var TweenMax: any;
declare var TweenLite: any;

@inject(EventService)
export class GraphicsService {
    private _renderer: any;
    private _stage: any;
    private _renderables: Renderable[] = [];

    constructor(private _eventService: EventService) { }

    public initialize() {
        const canvasEl = document.getElementById("foreground-canvas");

        this._renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
            view: canvasEl,
            transparent: true
        });

        this._stage = new PIXI.Container();

        this._eventService.registerHandler(EventTypes.CameraUpdate, cameraPos => {
            this._stage.x = -cameraPos.x;
            this._stage.y = -cameraPos.y;
        });

        this._eventService.registerHandler(EventTypes.PlanetCreated, planet => {
            this.beacon(planet.x, planet.y);
        });

        this._eventService.registerHandler(EventTypes.ShotFired, targets => {
            const shotGraphic = new PIXI.Graphics();

            if (targets.e1.faction == 1) {
                shotGraphic.beginFill(0xFFFFFF);
            } else {
                shotGraphic.beginFill(0xFF0000);
            }
            shotGraphic.drawRect(-2, -8, 4, 16);
            shotGraphic.x = targets.e1.x;
            shotGraphic.y = targets.e1.y;

            const angle = Math.atan2(targets.e1.y - targets.e2.y, targets.e1.x - targets.e2.x);
            shotGraphic.rotation = (Math.PI / 2) + angle;

            const dist = Utils.dist(targets.e1.x, targets.e1.y, targets.e2.x, targets.e2.y);

            this._stage.addChild(shotGraphic);

            const renderable = <Renderable>({
                dead: false,
                die: () => {
                    this._stage.removeChild(shotGraphic);
                },
                update: () => {
                }
            });

            TweenLite.to(shotGraphic, dist / 900, {
                x: targets.e2.x,
                y: targets.e2.y,
                onComplete: () => {
                    //this.bulletHit(targets.e2.x, targets.e2.y, targets.e1.faction == 1 ? "#ffffff" : "#ff0000");
                    renderable.dead = true;
                }
            });

            this._renderables.push(renderable);
        });
    }

    public bulletHit(x: number, y: number, color: string) {
        const emitter = new PIXI.particles.Emitter(
            this._stage,
            [PIXI.Texture.fromImage("src/assets/particle.png")],
            {
                "alpha": { "start": 1, "end": 0 },
                "scale": { "start": 0.1, "end": 0.1, "minimumScaleMultiplier": 1 },
                "color": { "start": color, "end": color },
                "speed": { "start": 200, "end": 50, "minimumSpeedMultiplier": 1.13 },
                "acceleration": { "x": 7, "y": 7 },
                "maxSpeed": 0,
                "startRotation": { "min": 0, "max": 360 },
                "noRotation": false,
                "rotationSpeed": { "min": 0, "max": 0 },
                "lifetime": { "min": 0.15, "max": 0.8 },
                "blendMode": "normal",
                "frequency": 0.1,
                "emitterLifetime": -1,
                "maxParticles": 500,
                "pos": { "x": y, "y": x },
                "addAtBack": false,
                "spawnType": "circle",
                "spawnCircle": {
                    "x": 0,
                    "y": 0,
                    "r": 0
                }
            }
        );

        let elapsed = Date.now();
        
        const renderable = <Renderable>({
            dead: false,
            die: () => {
                this._stage.removeChild(emitter);
            },
            update: () => {
                const now = Date.now();
                emitter.update((now - elapsed) * 0.001);
                elapsed = now;
            }
        });

        emitter.emit = true;

        this._renderables.push(renderable);

        //setTimeout(() => {
            //renderable.dead = true;
        //}, 1000);
    }

    public beacon(x: number, y: number) {
        const ringGraphics = [];
        const effectTime = 2.5;

        for (let i = 0; i < 5; i++) {
            const ringGraphic = new PIXI.Graphics();
            ringGraphic.lineStyle(0.02 + Rng.rnd(-0.005, 0.005), 0xFFFFFF, 0.3);
            ringGraphic.drawCircle(0, 0, 10);
            ringGraphic.x = x;
            ringGraphic.y = y;

            const s = 180 + Rng.rnd(-25, 80);

            TweenLite.to(ringGraphic, effectTime, {
                alpha: 0
            });

            TweenLite.to(ringGraphic.scale, effectTime, {
                x: s,
                y: s,
            });

            ringGraphics.push(ringGraphic);
        }

        for (let g of ringGraphics) {
            this._stage.addChild(g);
        }

        const renderable = <Renderable>({
            dead: false,
            die: () => {
                for (let g of ringGraphics) {
                    this._stage.removeChild(g);
                }
            },
            update: () => {
            }
        });

        setTimeout(() => {
            renderable.dead = true;
        }, effectTime * 1000);

        this._renderables.push(renderable);
    }

    public update() {
        for (let r of this._renderables) {
            r.update && r.update();
            if (r.dead) {
                r.die && r.die();
            }
        }

        this._renderables = _.filter(this._renderables, r => !r.dead);

        this._renderer.render(this._stage);
    }
}

class Renderable {
    update: any;
    die: any;
    dead: boolean = false;
}