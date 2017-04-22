define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.configureRouter = function (config) {
            config.map([
                { route: ["/", "game"], name: "game", moduleId: "game/game" }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQU8zQixDQUFDO1FBTEMsNkJBQWUsR0FBZixVQUFnQixNQUEyQjtZQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUM5RCxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsVUFBQztJQUFELENBUkEsQUFRQyxJQUFBO0lBUlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgbWVzc2FnZSA9ICdIZWxsbyBXb3JsZCEnO1xuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFtcIi9cIiwgXCJnYW1lXCJdLCBuYW1lOiBcImdhbWVcIiwgbW9kdWxlSWQ6IFwiZ2FtZS9nYW1lXCIgfVxuICAgIF0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('game/entity',["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Entity = (function () {
        function Entity() {
        }
        Entity.prototype.collidesWith = function (e2) {
            return utils_1.Utils.dist(e2.x, e2.y, this.x, this.y) <= e2.radius + this.radius;
        };
        return Entity;
    }());
    exports.Entity = Entity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQUE7UUFRQSxDQUFDO1FBSFUsNkJBQVksR0FBbkIsVUFBb0IsRUFBVTtZQUMxQixNQUFNLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdFLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSx3QkFBTSIsImZpbGUiOiJnYW1lL2VudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEVudGl0eSB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcblxuICAgIHB1YmxpYyBjb2xsaWRlc1dpdGgoZTI6IEVudGl0eSkge1xuICAgICAgICByZXR1cm4gVXRpbHMuZGlzdChlMi54LCBlMi55LCB0aGlzLngsIHRoaXMueSkgPD0gZTIucmFkaXVzICsgdGhpcy5yYWRpdXM7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('game/game-state.service',["require", "exports", "./planet-entity", "./rng"], function (require, exports, planet_entity_1, rng_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameStateService = (function () {
        function GameStateService() {
            this.state = new GameState();
            this.generateNewPlanet(({
                x: 0,
                y: 0
            }));
        }
        GameStateService.prototype.generateNewPlanet = function (opts) {
            var p;
            p = new planet_entity_1.PlanetEntity();
            p.x = opts.x + rng_1.Rng.rnd(-200, 200);
            p.y = opts.y + rng_1.Rng.rnd(-200, 200);
            p.radius = rng_1.Rng.rnd(60, 120);
            this.state.planets.push(p);
        };
        return GameStateService;
    }());
    exports.GameStateService = GameStateService;
    var GameState = (function () {
        function GameState() {
            this.planets = [];
            this.gameState = GameStates.Playing;
        }
        return GameState;
    }());
    exports.GameState = GameState;
    var GameStates;
    (function (GameStates) {
        GameStates[GameStates["Playing"] = 1] = "Playing";
    })(GameStates = exports.GameStates || (exports.GameStates = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BO1FBR0k7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFnQixDQUFDO2dCQUNuQyxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQztRQUVNLDRDQUFpQixHQUF4QixVQUF5QixJQUFtQjtZQUN4QyxJQUFJLENBQWUsQ0FBQztZQUVoQixDQUFDLEdBQUcsSUFBSSw0QkFBWSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUVoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtJQXJCWSw0Q0FBZ0I7SUE0QjdCO1FBSUk7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDeEMsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFSWSw4QkFBUztJQVV0QixJQUFZLFVBRVg7SUFGRCxXQUFZLFVBQVU7UUFDbEIsaURBQVcsQ0FBQTtJQUNmLENBQUMsRUFGVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUVyQiIsImZpbGUiOiJnYW1lL2dhbWUtc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgUm5nIH0gZnJvbSBcIi4vcm5nXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0ZTogR2FtZVN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgR2FtZVN0YXRlKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXdQbGFuZXQoPFBsYW5ldEdlbk9wdHM+KHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVOZXdQbGFuZXQob3B0czogUGxhbmV0R2VuT3B0cykge1xuICAgICAgICBsZXQgcDogUGxhbmV0RW50aXR5O1xuICAgICAgICAvL2RvIHtcbiAgICAgICAgICAgIHAgPSBuZXcgUGxhbmV0RW50aXR5KCk7XG4gICAgICAgICAgICBwLnggPSBvcHRzLnggKyBSbmcucm5kKC0yMDAsIDIwMCk7XG4gICAgICAgICAgICBwLnkgPSBvcHRzLnkgKyBSbmcucm5kKC0yMDAsIDIwMCk7XG4gICAgICAgICAgICBwLnJhZGl1cyA9IFJuZy5ybmQoNjAsIDEyMCk7XG4gICAgICAgIC8vfSB3aGlsZSAoIV8uc29tZSh0aGlzLnN0YXRlLnBsYW5ldHMsIHAyID0+IHAuY29sbGlkZXNXaXRoKHAyKSkpXG4gICAgICAgIHRoaXMuc3RhdGUucGxhbmV0cy5wdXNoKHApO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIFBsYW5ldEdlbk9wdHMge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xuICAgIHB1YmxpYyBwbGFuZXRzOiBQbGFuZXRFbnRpdHlbXTtcbiAgICBwdWJsaWMgZ2FtZVN0YXRlOiBHYW1lU3RhdGVzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhbmV0cyA9IFtdO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZXMuUGxheWluZztcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIEdhbWVTdGF0ZXMge1xuICAgIFBsYXlpbmcgPSAxXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/game',["require", "exports", "aurelia-framework", "./game-state.service", "./camera.service", "./input.service"], function (require, exports, aurelia_framework_1, game_state_service_1, camera_service_1, input_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game(gameStateService, camera, inputService) {
            this.camera = camera;
            this._gameStateService = gameStateService;
            this._inputService = inputService;
        }
        Game.prototype.attached = function () {
            var _this = this;
            this._inputService.initKeyBindings();
            var animFn = function () {
                _this._inputService.checkForInput();
                requestAnimationFrame(animFn);
            };
            requestAnimationFrame(animFn);
        };
        Game.prototype.onAnimationFrame = function () {
        };
        Object.defineProperty(Game.prototype, "visiblePlanets", {
            get: function () {
                return this._gameStateService.state.planets;
            },
            enumerable: true,
            configurable: true
        });
        return Game;
    }());
    Game = __decorate([
        aurelia_framework_1.inject(game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService])
    ], Game);
    exports.Game = Game;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFRQSxJQUFhLElBQUk7UUFNYixjQUFZLGdCQUFrQyxFQUFFLE1BQXFCLEVBQUUsWUFBMEI7WUFDN0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ3RDLENBQUM7UUFFRCx1QkFBUSxHQUFSO1lBQUEsaUJBUUM7WUFQRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXJDLElBQUksTUFBTSxHQUFHO2dCQUNULEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ25DLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFTywrQkFBZ0IsR0FBeEI7UUFDQSxDQUFDO1FBRUQsc0JBQVcsZ0NBQWM7aUJBQXpCO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNoRCxDQUFDOzs7V0FBQTtRQUNMLFdBQUM7SUFBRCxDQTVCQSxBQTRCQyxJQUFBO0lBNUJZLElBQUk7UUFEaEIsMEJBQU0sQ0FBQyxxQ0FBZ0IsRUFBRSw4QkFBYSxFQUFFLDRCQUFZLENBQUM7eUNBT3BCLHFDQUFnQixFQUFVLDhCQUFhLEVBQWdCLDRCQUFZO09BTnhGLElBQUksQ0E0QmhCO0lBNUJZLG9CQUFJIiwiZmlsZSI6ImdhbWUvZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR2FtZVN0YXRlU2VydmljZSB9IGZyb20gXCIuL2dhbWUtc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuL2NhbWVyYS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUaWNrU2VydmljZSB9IGZyb20gXCIuL3RpY2suc2VydmljZVwiO1xuaW1wb3J0IHsgSW5wdXRTZXJ2aWNlIH0gZnJvbSBcIi4vaW5wdXQuc2VydmljZVwiO1xuXG5AaW5qZWN0KEdhbWVTdGF0ZVNlcnZpY2UsIENhbWVyYVNlcnZpY2UsIElucHV0U2VydmljZSlcbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBwdWJsaWMgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlO1xuXG4gICAgcHJpdmF0ZSBfZ2FtZVN0YXRlU2VydmljZTogR2FtZVN0YXRlU2VydmljZTtcbiAgICBwcml2YXRlIF9pbnB1dFNlcnZpY2U6IElucHV0U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZVNlcnZpY2U6IEdhbWVTdGF0ZVNlcnZpY2UsIGNhbWVyYTogQ2FtZXJhU2VydmljZSwgaW5wdXRTZXJ2aWNlOiBJbnB1dFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2UgPSBnYW1lU3RhdGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLl9pbnB1dFNlcnZpY2UgPSBpbnB1dFNlcnZpY2U7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuX2lucHV0U2VydmljZS5pbml0S2V5QmluZGluZ3MoKTtcblxuICAgICAgICBsZXQgYW5pbUZuID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW5wdXRTZXJ2aWNlLmNoZWNrRm9ySW5wdXQoKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltRm4pO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbUZuKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aXNpYmxlUGxhbmV0cygpOiBQbGFuZXRFbnRpdHlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHM7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('game/planet-entity',["require", "exports", "./entity"], function (require, exports, entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlanetEntity = (function (_super) {
        __extends(PlanetEntity, _super);
        function PlanetEntity() {
            return _super.call(this) || this;
        }
        return PlanetEntity;
    }(entity_1.Entity));
    exports.PlanetEntity = PlanetEntity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvcGxhbmV0LWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR0E7UUFBa0MsZ0NBQU07UUFDcEM7bUJBQ0ksaUJBQU87UUFDWCxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQUpBLEFBSUMsQ0FKaUMsZUFBTSxHQUl2QztJQUpZLG9DQUFZIiwiZmlsZSI6ImdhbWUvcGxhbmV0LWVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUGxhbmV0RW50aXR5IGV4dGVuZHMgRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('game/rng',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Rng = (function () {
        function Rng() {
        }
        Rng.rnd = function (min, max) {
            return (Math.random() * (max - min)) + min;
        };
        return Rng;
    }());
    exports.Rng = Rng;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvcm5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFNQSxDQUFDO1FBSGlCLE9BQUcsR0FBakIsVUFBa0IsR0FBRyxFQUFFLEdBQUc7WUFDdEIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQy9DLENBQUM7UUFDTCxVQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUE7SUFOWSxrQkFBRyIsImZpbGUiOiJnYW1lL3JuZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSbmcge1xuICAgIHB1YmxpYyBzdGF0aWMgc2VlZDogbnVtYmVyO1xuXG4gICAgcHVibGljIHN0YXRpYyBybmQobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('game/utils',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = (function () {
        function Utils() {
        }
        Utils.dist = function (x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        };
        return Utils;
    }());
    exports.Utils = Utils;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUlBLENBQUM7UUFIaUIsVUFBSSxHQUFsQixVQUFtQixFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1lBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0wsWUFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksc0JBQUsiLCJmaWxlIjoiZ2FtZS91dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgcHVibGljIHN0YXRpYyBkaXN0KHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/planet/planet',["require", "exports", "aurelia-framework", "../planet-entity"], function (require, exports, aurelia_framework_1, planet_entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Planet = (function () {
        function Planet() {
        }
        return Planet;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", planet_entity_1.PlanetEntity)
    ], Planet.prototype, "planet", void 0);
    exports.Planet = Planet;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvcGxhbmV0L3BsYW5ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFHQTtRQUFBO1FBRUEsQ0FBQztRQUFELGFBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQURhO1FBQVQsNEJBQVE7a0NBQWdCLDRCQUFZOzBDQUFDO0lBRDdCLHdCQUFNIiwiZmlsZSI6ImdhbWUvcGxhbmV0L3BsYW5ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFBsYW5ldEVudGl0eSB9IGZyb20gXCIuLi9wbGFuZXQtZW50aXR5XCI7XG5cbmV4cG9ydCBjbGFzcyBQbGFuZXQge1xuICAgIEBiaW5kYWJsZSBwdWJsaWMgcGxhbmV0OiBQbGFuZXRFbnRpdHk7XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('game/camera.service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CameraService = (function () {
        function CameraService() {
            this.panSpeed = 5;
            this.panX = 0;
            this.panY = 0;
            this.panX = -(window.innerWidth / 2);
            this.panY = -(window.innerHeight / 2);
        }
        CameraService.prototype.pan = function (x, y) {
            this.panX += x * this.panSpeed;
            this.panY += y * this.panSpeed;
        };
        return CameraService;
    }());
    exports.CameraService = CameraService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvY2FtZXJhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFNSTtZQUxPLGFBQVEsR0FBVyxDQUFDLENBQUM7WUFFckIsU0FBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1lBR3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRU0sMkJBQUcsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1lBQzNCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQWZBLEFBZUMsSUFBQTtJQWZZLHNDQUFhIiwiZmlsZSI6ImdhbWUvY2FtZXJhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FtZXJhU2VydmljZSB7XG4gICAgcHVibGljIHBhblNwZWVkOiBudW1iZXIgPSA1O1xuXG4gICAgcHVibGljIHBhblg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHBhblk6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wYW5YID0gLSh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpO1xuICAgICAgICB0aGlzLnBhblkgPSAtKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYW4oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYW5YICs9IHggKiB0aGlzLnBhblNwZWVkO1xuICAgICAgICB0aGlzLnBhblkgKz0geSAqIHRoaXMucGFuU3BlZWQ7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/input.service',["require", "exports", "aurelia-framework", "./camera.service"], function (require, exports, aurelia_framework_1, camera_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputService = (function () {
        function InputService(_camera) {
            this._camera = _camera;
            this._keystates = {};
        }
        InputService.prototype.initKeyBindings = function () {
            var _this = this;
            window.addEventListener("keydown", function (e) { return _this.onkeydown(e); });
            window.addEventListener("keyup", function (e) { return _this.onkeyup(e); });
        };
        InputService.prototype.checkForInput = function () {
            this.checkForPanningInput();
        };
        InputService.prototype.checkForPanningInput = function () {
            var panX = 0;
            var panY = 0;
            this._keystates[KeyCodes.W] && (panY = 1);
            this._keystates[KeyCodes.S] && (panY = -1);
            this._keystates[KeyCodes.A] && (panX = 1);
            this._keystates[KeyCodes.D] && (panX = -1);
            (panX != 0 || panY != 0) && this._camera.pan(panX, panY);
        };
        InputService.prototype.onkeydown = function (e) {
            this._keystates[e.which] = true;
        };
        InputService.prototype.onkeyup = function (e) {
            this._keystates[e.which] = false;
        };
        return InputService;
    }());
    InputService = __decorate([
        aurelia_framework_1.inject(camera_service_1.CameraService),
        __metadata("design:paramtypes", [camera_service_1.CameraService])
    ], InputService);
    exports.InputService = InputService;
    var KeyCodes;
    (function (KeyCodes) {
        KeyCodes[KeyCodes["W"] = 87] = "W";
        KeyCodes[KeyCodes["A"] = 65] = "A";
        KeyCodes[KeyCodes["S"] = 83] = "S";
        KeyCodes[KeyCodes["D"] = 68] = "D";
    })(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvaW5wdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLFlBQVk7UUFDckIsc0JBQW9CLE9BQXNCO1lBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7WUFFbEMsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUZnQixDQUFDO1FBSXZDLHNDQUFlLEdBQXRCO1lBQUEsaUJBR0M7WUFGRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFTSxvQ0FBYSxHQUFwQjtZQUNJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFFTywyQ0FBb0IsR0FBNUI7WUFDSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFFYixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFM0MsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUVPLGdDQUFTLEdBQWpCLFVBQWtCLENBQWdCO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwQyxDQUFDO1FBRU8sOEJBQU8sR0FBZixVQUFnQixDQUFnQjtZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDckMsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtJQWpDWSxZQUFZO1FBRHhCLDBCQUFNLENBQUMsOEJBQWEsQ0FBQzt5Q0FFVyw4QkFBYTtPQURqQyxZQUFZLENBaUN4QjtJQWpDWSxvQ0FBWTtJQW1DekIsSUFBWSxRQUtYO0lBTEQsV0FBWSxRQUFRO1FBQ2hCLGtDQUFNLENBQUE7UUFDTixrQ0FBTSxDQUFBO1FBQ04sa0NBQU0sQ0FBQTtRQUNOLGtDQUFNLENBQUE7SUFDVixDQUFDLEVBTFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFLbkIiLCJmaWxlIjoiZ2FtZS9pbnB1dC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vY2FtZXJhLnNlcnZpY2VcIjtcblxuQGluamVjdChDYW1lcmFTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIElucHV0U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2FtZXJhOiBDYW1lcmFTZXJ2aWNlKSB7fVxuXG4gICAgcHJpdmF0ZSBfa2V5c3RhdGVzOiBhbnkgPSB7fTtcblxuICAgIHB1YmxpYyBpbml0S2V5QmluZGluZ3MoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHRoaXMub25rZXlkb3duKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHRoaXMub25rZXl1cChlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrRm9ySW5wdXQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JQYW5uaW5nSW5wdXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrRm9yUGFubmluZ0lucHV0KCkge1xuICAgICAgICBsZXQgcGFuWCA9IDA7XG4gICAgICAgIGxldCBwYW5ZID0gMDtcblxuICAgICAgICB0aGlzLl9rZXlzdGF0ZXNbS2V5Q29kZXMuV10gJiYgKHBhblkgPSAxKTtcbiAgICAgICAgdGhpcy5fa2V5c3RhdGVzW0tleUNvZGVzLlNdICYmIChwYW5ZID0gLTEpO1xuICAgICAgICB0aGlzLl9rZXlzdGF0ZXNbS2V5Q29kZXMuQV0gJiYgKHBhblggPSAxKTtcbiAgICAgICAgdGhpcy5fa2V5c3RhdGVzW0tleUNvZGVzLkRdICYmIChwYW5YID0gLTEpO1xuXG4gICAgICAgIChwYW5YICE9IDAgfHwgcGFuWSAhPSAwKSAmJiB0aGlzLl9jYW1lcmEucGFuKHBhblgsIHBhblkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25rZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fa2V5c3RhdGVzW2Uud2hpY2hdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9ua2V5dXAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLl9rZXlzdGF0ZXNbZS53aGljaF0gPSBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIEtleUNvZGVzIHtcbiAgICBXID0gODcsXG4gICAgQSA9IDY1LFxuICAgIFMgPSA4MyxcbiAgICBEID0gNjhcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('game/global-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GlobalService = (function () {
        function GlobalService() {
            this.startTime = Date.now();
        }
        GlobalService.prototype.update = function () {
        };
        return GlobalService;
    }());
    GlobalService.TickInterval = 2;
    exports.GlobalService = GlobalService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2xvYmFsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFTSTtZQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFFTSw4QkFBTSxHQUFiO1FBRUEsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FoQkEsQUFnQkM7SUFmaUIsMEJBQVksR0FBVyxDQUFDLENBQUM7SUFEOUIsc0NBQWEiLCJmaWxlIjoiZ2FtZS9nbG9iYWwtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHbG9iYWxTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIFRpY2tJbnRlcnZhbDogbnVtYmVyID0gMjtcblxuICAgIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcbiAgICBwdWJsaWMgVDogbnVtYmVyO1xuICAgIHB1YmxpYyB0aWNrczogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfdGltZUF0TGFzdFRpY2s6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('game/tick.service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TickService = (function () {
        function TickService() {
            this.startTime = Date.now();
            this._timeAtLastTick = this.startTime;
        }
        TickService.prototype.update = function () {
            var tickIntervalInMs = (1000 / TickService.TickInterval);
            var t = Date.now();
            var dt = t - this._timeAtLastTick;
            var nTicks = Math.floor(dt / tickIntervalInMs);
            while (nTicks > 0) {
                this.tick();
                --nTicks;
                this._timeAtLastTick = t;
            }
        };
        TickService.prototype.tick = function () {
        };
        return TickService;
    }());
    TickService.TickInterval = 2;
    exports.TickService = TickService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvdGljay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBUUk7WUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUMsQ0FBQztRQUVNLDRCQUFNLEdBQWI7WUFDSSxJQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBSSxHQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3QyxPQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osRUFBRSxNQUFNLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUM7UUFFTSwwQkFBSSxHQUFYO1FBRUEsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0E3QkEsQUE2QkM7SUE1QmlCLHdCQUFZLEdBQVcsQ0FBQyxDQUFDO0lBRDlCLGtDQUFXIiwiZmlsZSI6ImdhbWUvdGljay5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpY2tTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIFRpY2tJbnRlcnZhbDogbnVtYmVyID0gMjtcblxuICAgIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcbiAgICBwdWJsaWMgdGlja3M6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX3RpbWVBdExhc3RUaWNrOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLl90aW1lQXRMYXN0VGljayA9IHRoaXMuc3RhcnRUaW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHRpY2tJbnRlcnZhbEluTXMgPSAoMTAwMC9UaWNrU2VydmljZS5UaWNrSW50ZXJ2YWwpO1xuICAgICAgICBjb25zdCB0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZHQgPSB0IC0gdGhpcy5fdGltZUF0TGFzdFRpY2s7XG5cbiAgICAgICAgbGV0IG5UaWNrcyA9IE1hdGguZmxvb3IoZHQvdGlja0ludGVydmFsSW5Ncyk7XG4gICAgICAgIHdoaWxlKG5UaWNrcyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICAgICAgLS1uVGlja3M7XG4gICAgICAgICAgICB0aGlzLl90aW1lQXRMYXN0VGljayA9IHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdGljaygpIHtcblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!game/game.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet/planet.html\"></require>\n    <require from=\"./game.css\"></require>\n\n    <div id=\"space\">\n        <div id=\"pannable\" css=\"transform: translate3d(${-camera.panX}px, ${-camera.panY}px, 0);\">\n            <div repeat.for=\"planet of visiblePlanets\">\n                <planet planet.bind=\"planet\"></planet>\n            </div>\n        </div>\n    </div>\n</template>"; });
define('text!game/planet/planet.css', ['module'], function(module) { module.exports = ".planet {\n  border-radius: 100%;\n  background: red;\n  width: 80px;\n  height: 80px; }\n"; });
define('text!game/planet/planet.html', ['module'], function(module) { module.exports = "<template bindable=\"planet\">\n    <require from=\"./planet.css\"></require>\n\n    <div class=\"planet\" css=\"transform: translate3d(${planet.x}px, ${planet.y}px, 0);\">\n    </div>\n</template"; });
define('text!game/game.css', ['module'], function(module) { module.exports = "body, html {\n  margin: 0;\n  padding: 0; }\n\n#space {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0; }\n"; });
//# sourceMappingURL=app-bundle.js.map