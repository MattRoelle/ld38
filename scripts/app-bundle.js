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

define('game/camera.service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CameraService = (function () {
        function CameraService() {
            this.panSpeed = 15;
            this.panX = 0;
            this.panY = 0;
            this.minX = 0;
            this.maxX = 0;
            this.minY = 0;
            this.maxY = 0;
            this.panX = 0;
            this.panY = 0;
        }
        CameraService.prototype.pan = function (x, y) {
            this.panX += x * this.panSpeed;
            this.panY += y * this.panSpeed;
            this.enforceBounds();
        };
        CameraService.prototype.panTo = function (x, y) {
            this.panX = x - (window.innerWidth / 2);
            this.panY = y - (window.innerHeight / 2);
            this.enforceBounds();
        };
        CameraService.prototype.center = function () {
            this.panX = ((this.maxX - this.minX) / 2) + this.minX;
            this.panY = ((this.maxY - this.minY) / 2) + this.minY;
            this.enforceBounds();
        };
        CameraService.prototype.enforceBounds = function () {
            this.panX = Math.max(this.minX, this.panX);
            this.panX = Math.min(this.maxX - window.innerWidth, this.panX);
            this.panY = Math.max(this.minY, this.panY);
            this.panY = Math.min(this.maxY - window.innerHeight, this.panY);
        };
        return CameraService;
    }());
    exports.CameraService = CameraService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvY2FtZXJhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFVSTtZQVRPLGFBQVEsR0FBVyxFQUFFLENBQUM7WUFFdEIsU0FBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1lBQ2pCLFNBQUksR0FBVyxDQUFDLENBQUM7WUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1lBQ2pCLFNBQUksR0FBVyxDQUFDLENBQUM7WUFHcEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBRU0sMkJBQUcsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1lBQzNCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVNLDZCQUFLLEdBQVosVUFBYSxDQUFTLEVBQUUsQ0FBUztZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBRU0sOEJBQU0sR0FBYjtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVPLHFDQUFhLEdBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQXZDQSxBQXVDQyxJQUFBO0lBdkNZLHNDQUFhIiwiZmlsZSI6ImdhbWUvY2FtZXJhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FtZXJhU2VydmljZSB7XG4gICAgcHVibGljIHBhblNwZWVkOiBudW1iZXIgPSAxNTtcblxuICAgIHB1YmxpYyBwYW5YOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBwYW5ZOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBtaW5YOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBtYXhYOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBtaW5ZOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBtYXhZOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGFuWCA9IDA7XG4gICAgICAgIHRoaXMucGFuWSA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIHBhbih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhblggKz0geCAqIHRoaXMucGFuU3BlZWQ7XG4gICAgICAgIHRoaXMucGFuWSArPSB5ICogdGhpcy5wYW5TcGVlZDtcbiAgICAgICAgdGhpcy5lbmZvcmNlQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhblRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFuWCA9IHggLSAod2luZG93LmlubmVyV2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy5wYW5ZID0geSAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5lbmZvcmNlQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNlbnRlcigpIHtcbiAgICAgICAgdGhpcy5wYW5YID0gKCh0aGlzLm1heFggLSB0aGlzLm1pblgpIC8gMikgKyB0aGlzLm1pblg7XG4gICAgICAgIHRoaXMucGFuWSA9ICgodGhpcy5tYXhZIC0gdGhpcy5taW5ZKSAvIDIpICsgdGhpcy5taW5ZO1xuICAgICAgICB0aGlzLmVuZm9yY2VCb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZm9yY2VCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMucGFuWCA9IE1hdGgubWF4KHRoaXMubWluWCwgdGhpcy5wYW5YKTtcbiAgICAgICAgdGhpcy5wYW5YID0gTWF0aC5taW4odGhpcy5tYXhYIC0gd2luZG93LmlubmVyV2lkdGgsIHRoaXMucGFuWCk7XG4gICAgICAgIHRoaXMucGFuWSA9IE1hdGgubWF4KHRoaXMubWluWSwgdGhpcy5wYW5ZKTtcbiAgICAgICAgdGhpcy5wYW5ZID0gTWF0aC5taW4odGhpcy5tYXhZIC0gd2luZG93LmlubmVySGVpZ2h0LCB0aGlzLnBhblkpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/entity-factory',["require", "exports", "aurelia-framework", "./game-state.service", "./tick.service", "./transient-entity", "./static-entity", "aurelia-templating-resources", "./log.service", "./event.service"], function (require, exports, aurelia_framework_1, game_state_service_1, tick_service_1, transient_entity_1, static_entity_1, aurelia_templating_resources_1, log_service_1, event_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EntityFactory = (function () {
        function EntityFactory(_gameStateService, _signaler, _tickService, _logService, _eventService) {
            var _this = this;
            this._gameStateService = _gameStateService;
            this._signaler = _signaler;
            this._tickService = _tickService;
            this._logService = _logService;
            this._eventService = _eventService;
            this._eventService.registerHandler(event_service_1.EventTypes.EnemyPlanetCreated, function (ev) {
                for (var i = 0; i < 3; i++) {
                    _this.spawnTransientEntity(ev.planet, transient_entity_1.TransientEntities.EnemyDrone, true);
                }
            });
        }
        EntityFactory.prototype.spawnStaticEntity = function (p, type) {
            var _this = this;
            var metadata = static_entity_1.StaticEntityMetadata[type];
            if (this._gameStateService.state.resourceCount < metadata.cost)
                return;
            var entity = new static_entity_1.StaticEntity(type);
            entity.health = metadata.health;
            this._gameStateService.state.resourceCount -= metadata.cost;
            this._logService.addTempLog({
                text: "Started building " + metadata.name
            });
            var staticLog = {
                text: metadata.name + ": 0%"
            };
            this._logService.addStaticLog(staticLog);
            var ev = {
                n: metadata.buildTime,
                onTick: function () {
                    var percentage = (_this._tickService.ticks - ev.tickScheduledAt) / ev.n;
                    staticLog.text = metadata.name + ": " + Math.floor(percentage * 100) + "%";
                },
                onCompletion: function () {
                    p.staticEntities.push(entity);
                    _this._logService.deleteStaticLog(staticLog.id);
                    _this._logService.addTempLog({
                        text: "Fins"
                    });
                    var posStep = 360 / (p.staticEntities.length);
                    for (var i = 0; i < p.staticEntities.length; i++) {
                        var e = p.staticEntities[i];
                        e.positionOnOrbit = posStep * (i + 1);
                    }
                }
            };
            this._tickService.scheduleEvent(ev);
        };
        EntityFactory.prototype.upgradeStaticEntity = function (e) {
            var _this = this;
            if (e.upgrading)
                return;
            if (e.level < e.metadata.maxUpgradeLevel) {
                var staticLog_1 = {
                    text: "Upgrading " + e.metadata.name + " to " + (e.level + 1) + ": 0%"
                };
                this._logService.addStaticLog(staticLog_1);
                e.upgrading = true;
                var ev_1 = {
                    n: e.metadata.upgradeTime,
                    onTick: function () {
                        var percentage = (_this._tickService.ticks - ev_1.tickScheduledAt) / ev_1.n;
                        staticLog_1.text = "Upgrading " + e.metadata.name + " to " + (e.level + 1) + ": " + Math.floor(percentage * 100) + "%";
                    },
                    onCompletion: function () {
                        ++e.level;
                        e.upgrading = false;
                        _this._logService.addTempLog({
                            text: "Finshed upgrading " + e.metadata.name + " to level " + e.level
                        });
                        _this._logService.deleteStaticLog(staticLog_1.id);
                    }
                };
                this._tickService.scheduleEvent(ev_1);
            }
        };
        EntityFactory.prototype.spawnTransientEntity = function (p, type, instant) {
            var _this = this;
            var metadata = transient_entity_1.TransientEntityMetadata[type];
            if (instant) {
                var entity = new transient_entity_1.TransientEntity(type, metadata);
                if (type == transient_entity_1.TransientEntities.EnemyDrone) {
                    entity.faction = transient_entity_1.TransientEntityFaction.Enemy;
                }
                entity.onEnterPlanet = function (p) { return _this._gameStateService.checkIfNeedToGeneratePlanet(p); };
                entity.state = transient_entity_1.TransientEntityState.Orbiting;
                entity.orbitingPlanet = p;
                this._gameStateService.state.transientEntities.push(entity);
            }
            else {
                if (this._gameStateService.state.resourceCount - metadata.cost < 0)
                    return;
                this._gameStateService.state.resourceCount -= metadata.cost;
                var staticLog_2 = {
                    text: "Building " + metadata.name + ": 0%"
                };
                this._logService.addStaticLog(staticLog_2);
                var ev_2 = {
                    n: metadata.buildTime,
                    onTick: function () {
                        var percentage = (_this._tickService.ticks - ev_2.tickScheduledAt) / ev_2.n;
                        staticLog_2.text = "Building " + metadata.name + ": " + Math.floor(percentage * 100) + "%";
                    },
                    onCompletion: function () {
                        _this._logService.deleteStaticLog(staticLog_2.id);
                        var entity = new transient_entity_1.TransientEntity(type, metadata);
                        entity.onEnterPlanet = function (p) { return _this._gameStateService.checkIfNeedToGeneratePlanet(p); };
                        entity.state = transient_entity_1.TransientEntityState.Orbiting;
                        entity.orbitingPlanet = p;
                        _this._gameStateService.state.transientEntities.push(entity);
                    }
                };
                this._tickService.scheduleEvent(ev_2);
            }
        };
        return EntityFactory;
    }());
    EntityFactory = __decorate([
        aurelia_framework_1.inject(game_state_service_1.GameStateService, aurelia_templating_resources_1.BindingSignaler, tick_service_1.TickService, log_service_1.LogService, event_service_1.EventService),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService, aurelia_templating_resources_1.BindingSignaler, tick_service_1.TickService, log_service_1.LogService, event_service_1.EventService])
    ], EntityFactory);
    exports.EntityFactory = EntityFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLENBQUM7d0JBQ25ELE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBQyxDQUFlLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUM7d0JBQ2xHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsdUNBQW9CLENBQUMsUUFBUSxDQUFDO3dCQUM3QyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzt3QkFDMUIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hFLENBQUM7aUJBQ0osQ0FBQztnQkFFRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFFLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0EvSEEsQUErSEMsSUFBQTtJQS9IWSxhQUFhO1FBRHpCLDBCQUFNLENBQUMscUNBQWdCLEVBQUUsOENBQWUsRUFBRSwwQkFBVyxFQUFFLHdCQUFVLEVBQUUsNEJBQVksQ0FBQzt5Q0FFdEMscUNBQWdCLEVBQXFCLDhDQUFlLEVBQXdCLDBCQUFXLEVBQXVCLHdCQUFVLEVBQXlCLDRCQUFZO09BRDNMLGFBQWEsQ0ErSHpCO0lBL0hZLHNDQUFhIiwiZmlsZSI6ImdhbWUvZW50aXR5LWZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9nYW1lLXN0YXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBsYW5ldEVudGl0eSB9IGZyb20gXCIuL3BsYW5ldC1lbnRpdHlcIjtcbmltcG9ydCB7IFRpY2tTZXJ2aWNlLCBTY2hlZHVsZWRFdmVudCB9IGZyb20gXCIuL3RpY2suc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5LCBUcmFuc2llbnRFbnRpdGllcywgVHJhbnNpZW50RW50aXR5RGVmaW5pdGlvbiwgVHJhbnNpZW50RW50aXR5TWV0YWRhdGEsIFRyYW5zaWVudEVudGl0eVN0YXRlLCBUcmFuc2llbnRFbnRpdHlGYWN0aW9uIH0gZnJvbSBcIi4vdHJhbnNpZW50LWVudGl0eVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXRpZXMsIFN0YXRpY0VudGl0eSwgU3RhdGljRW50aXR5TWV0YWRhdGEsIFN0YXRpY0VudGl0eURlZmluaXRpb24gfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBCaW5kaW5nU2lnbmFsZXIgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgTG9nU2VydmljZSwgTG9nIH0gZnJvbSBcIi4vbG9nLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJuZyB9IGZyb20gXCIuL3JuZ1wiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlLCBFdmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnQuc2VydmljZVwiO1xuXG5AaW5qZWN0KEdhbWVTdGF0ZVNlcnZpY2UsIEJpbmRpbmdTaWduYWxlciwgVGlja1NlcnZpY2UsIExvZ1NlcnZpY2UsIEV2ZW50U2VydmljZSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9nYW1lU3RhdGVTZXJ2aWNlOiBHYW1lU3RhdGVTZXJ2aWNlLCBwcml2YXRlIF9zaWduYWxlcjogQmluZGluZ1NpZ25hbGVyLCBwcml2YXRlIF90aWNrU2VydmljZTogVGlja1NlcnZpY2UsIHByaXZhdGUgX2xvZ1NlcnZpY2U6IExvZ1NlcnZpY2UsIHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5yZWdpc3RlckhhbmRsZXIoRXZlbnRUeXBlcy5FbmVteVBsYW5ldENyZWF0ZWQsIGV2ID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduVHJhbnNpZW50RW50aXR5KGV2LnBsYW5ldCwgVHJhbnNpZW50RW50aXRpZXMuRW5lbXlEcm9uZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzcGF3blN0YXRpY0VudGl0eShwOiBQbGFuZXRFbnRpdHksIHR5cGU6IFN0YXRpY0VudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gPFN0YXRpY0VudGl0eURlZmluaXRpb24+U3RhdGljRW50aXR5TWV0YWRhdGFbdHlwZV07XG5cbiAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucmVzb3VyY2VDb3VudCA8IG1ldGFkYXRhLmNvc3QpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IFN0YXRpY0VudGl0eSh0eXBlKTtcbiAgICAgICAgZW50aXR5LmhlYWx0aCA9IG1ldGFkYXRhLmhlYWx0aDtcblxuICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQgLT0gbWV0YWRhdGEuY29zdDtcblxuICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmFkZFRlbXBMb2coPExvZz57XG4gICAgICAgICAgICB0ZXh0OiBgU3RhcnRlZCBidWlsZGluZyAke21ldGFkYXRhLm5hbWV9YFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzdGF0aWNMb2cgPSA8TG9nPntcbiAgICAgICAgICAgIHRleHQ6IGAke21ldGFkYXRhLm5hbWV9OiAwJWBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbG9nU2VydmljZS5hZGRTdGF0aWNMb2coc3RhdGljTG9nKTtcblxuICAgICAgICBjb25zdCBldjogU2NoZWR1bGVkRXZlbnQgPSA8U2NoZWR1bGVkRXZlbnQ+e1xuICAgICAgICAgICAgbjogbWV0YWRhdGEuYnVpbGRUaW1lLFxuICAgICAgICAgICAgb25UaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICh0aGlzLl90aWNrU2VydmljZS50aWNrcyAtIGV2LnRpY2tTY2hlZHVsZWRBdCkgLyBldi5uO1xuICAgICAgICAgICAgICAgIHN0YXRpY0xvZy50ZXh0ID0gYCR7bWV0YWRhdGEubmFtZX06ICR7TWF0aC5mbG9vcihwZXJjZW50YWdlICogMTAwKX0lYFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ29tcGxldGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHAuc3RhdGljRW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ1NlcnZpY2UuZGVsZXRlU3RhdGljTG9nKHN0YXRpY0xvZy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nU2VydmljZS5hZGRUZW1wTG9nKDxMb2c+e1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgRmluc2BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NTdGVwID0gMzYwIC8gKHAuc3RhdGljRW50aXRpZXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5zdGF0aWNFbnRpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gcC5zdGF0aWNFbnRpdGllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZS5wb3NpdGlvbk9uT3JiaXQgPSBwb3NTdGVwICogKGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdGlja1NlcnZpY2Uuc2NoZWR1bGVFdmVudChldik7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZ3JhZGVTdGF0aWNFbnRpdHkoZTogU3RhdGljRW50aXR5KSB7XG4gICAgICAgIGlmIChlLnVwZ3JhZGluZylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAoZS5sZXZlbCA8IGUubWV0YWRhdGEubWF4VXBncmFkZUxldmVsKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNMb2cgPSA8TG9nPntcbiAgICAgICAgICAgICAgICB0ZXh0OiBgVXBncmFkaW5nICR7ZS5tZXRhZGF0YS5uYW1lfSB0byAke2UubGV2ZWwgKyAxfTogMCVgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fbG9nU2VydmljZS5hZGRTdGF0aWNMb2coc3RhdGljTG9nKTtcblxuICAgICAgICAgICAgZS51cGdyYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCBldjogU2NoZWR1bGVkRXZlbnQgPSA8U2NoZWR1bGVkRXZlbnQ+e1xuICAgICAgICAgICAgICAgIG46IGUubWV0YWRhdGEudXBncmFkZVRpbWUsXG4gICAgICAgICAgICAgICAgb25UaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAodGhpcy5fdGlja1NlcnZpY2UudGlja3MgLSBldi50aWNrU2NoZWR1bGVkQXQpIC8gZXYubjtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljTG9nLnRleHQgPSBgVXBncmFkaW5nICR7ZS5tZXRhZGF0YS5uYW1lfSB0byAke2UubGV2ZWwgKyAxfTogJHtNYXRoLmZsb29yKHBlcmNlbnRhZ2UgKiAxMDApfSVgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKytlLmxldmVsO1xuICAgICAgICAgICAgICAgICAgICBlLnVwZ3JhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmFkZFRlbXBMb2coPExvZz57XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgRmluc2hlZCB1cGdyYWRpbmcgJHtlLm1ldGFkYXRhLm5hbWV9IHRvIGxldmVsICR7ZS5sZXZlbH1gXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmRlbGV0ZVN0YXRpY0xvZyhzdGF0aWNMb2cuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX3RpY2tTZXJ2aWNlLnNjaGVkdWxlRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNwYXduVHJhbnNpZW50RW50aXR5KHA6IFBsYW5ldEVudGl0eSwgdHlwZTogVHJhbnNpZW50RW50aXRpZXMsIGluc3RhbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSA8VHJhbnNpZW50RW50aXR5RGVmaW5pdGlvbj5UcmFuc2llbnRFbnRpdHlNZXRhZGF0YVt0eXBlXTtcbiAgICAgICAgaWYgKGluc3RhbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBUcmFuc2llbnRFbnRpdHkodHlwZSwgbWV0YWRhdGEpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gVHJhbnNpZW50RW50aXRpZXMuRW5lbXlEcm9uZSkge1xuICAgICAgICAgICAgICAgIGVudGl0eS5mYWN0aW9uID0gVHJhbnNpZW50RW50aXR5RmFjdGlvbi5FbmVteTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudGl0eS5vbkVudGVyUGxhbmV0ID0gKHA6IFBsYW5ldEVudGl0eSkgPT4gdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5jaGVja0lmTmVlZFRvR2VuZXJhdGVQbGFuZXQocCk7XG4gICAgICAgICAgICBlbnRpdHkuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZztcbiAgICAgICAgICAgIGVudGl0eS5vcmJpdGluZ1BsYW5ldCA9IHA7XG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzLnB1c2goZW50aXR5KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucmVzb3VyY2VDb3VudCAtIG1ldGFkYXRhLmNvc3QgPCAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNvdW50IC09IG1ldGFkYXRhLmNvc3Q7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY0xvZyA9IDxMb2c+e1xuICAgICAgICAgICAgICAgIHRleHQ6IGBCdWlsZGluZyAke21ldGFkYXRhLm5hbWV9OiAwJWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmFkZFN0YXRpY0xvZyhzdGF0aWNMb2cpO1xuXG4gICAgICAgICAgICBjb25zdCBldjogU2NoZWR1bGVkRXZlbnQgPSA8U2NoZWR1bGVkRXZlbnQ+e1xuICAgICAgICAgICAgICAgIG46IG1ldGFkYXRhLmJ1aWxkVGltZSxcbiAgICAgICAgICAgICAgICBvblRpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICh0aGlzLl90aWNrU2VydmljZS50aWNrcyAtIGV2LnRpY2tTY2hlZHVsZWRBdCkgLyBldi5uO1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNMb2cudGV4dCA9IGBCdWlsZGluZyAke21ldGFkYXRhLm5hbWV9OiAke01hdGguZmxvb3IocGVyY2VudGFnZSAqIDEwMCl9JWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmRlbGV0ZVN0YXRpY0xvZyhzdGF0aWNMb2cuaWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgVHJhbnNpZW50RW50aXR5KHR5cGUsIG1ldGFkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm9uRW50ZXJQbGFuZXQgPSAocDogUGxhbmV0RW50aXR5KSA9PiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLmNoZWNrSWZOZWVkVG9HZW5lcmF0ZVBsYW5ldChwKTtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnN0YXRlID0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmc7XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5vcmJpdGluZ1BsYW5ldCA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX3RpY2tTZXJ2aWNlLnNjaGVkdWxlRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('game/entity',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Entity = (function () {
        function Entity() {
        }
        return Entity;
    }());
    exports.Entity = Entity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFHQSxDQUFDO1FBQUQsYUFBQztJQUFELENBSEEsQUFHQyxJQUFBO0lBSFksd0JBQU0iLCJmaWxlIjoiZ2FtZS9lbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRW50aXR5IHtcbiAgICBwdWJsaWMgaGVhbHRoOiBudW1iZXI7XG4gICAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuO1xufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('game/event.service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventService = (function () {
        function EventService() {
            this._handlers = {};
            this._cbId = 0;
        }
        EventService.prototype.registerHandler = function (eventType, cb) {
            var id = ++this._cbId;
            this._handlers[eventType] = this._handlers[eventType] || {};
            this._handlers[eventType][id] = cb;
            return id;
        };
        EventService.prototype.deregisterHandler = function (eventType, id) {
            var handlers = this._handlers[eventType];
            if (!!handlers) {
                delete handlers[id];
            }
        };
        EventService.prototype.postEvent = function (eventType, data) {
            var handlers = this._handlers[eventType];
            if (!!handlers) {
                for (var id in handlers) {
                    if (handlers.hasOwnProperty(id)) {
                        var cb = handlers[id];
                        if (!!cb) {
                            cb(data);
                        }
                    }
                }
            }
        };
        return EventService;
    }());
    exports.EventService = EventService;
    var EventTypes;
    (function (EventTypes) {
        EventTypes[EventTypes["EnemyPlanetCreated"] = 1] = "EnemyPlanetCreated";
    })(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUlJO1lBSFEsY0FBUyxHQUFRLEVBQUUsQ0FBQztZQUNwQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRzFCLENBQUM7UUFFTSxzQ0FBZSxHQUF0QixVQUF1QixTQUFxQixFQUFFLEVBQU87WUFDakQsSUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFFTSx3Q0FBaUIsR0FBeEIsVUFBeUIsU0FBcUIsRUFBRSxFQUFVO1lBQ3RELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7UUFFTSxnQ0FBUyxHQUFoQixVQUFpQixTQUFxQixFQUFFLElBQVM7WUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDYixHQUFHLENBQUEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUCxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2IsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtJQWxDWSxvQ0FBWTtJQW9DekIsSUFBWSxVQUVYO0lBRkQsV0FBWSxVQUFVO1FBQ2xCLHVFQUFzQixDQUFBO0lBQzFCLENBQUMsRUFGVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUVyQiIsImZpbGUiOiJnYW1lL2V2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnRTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9oYW5kbGVyczogYW55ID0ge307XG4gICAgcHJpdmF0ZSBfY2JJZDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlOiBFdmVudFR5cGVzLCBjYjogYW55KSA6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGlkID0gKyt0aGlzLl9jYklkO1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tldmVudFR5cGVdID0gdGhpcy5faGFuZGxlcnNbZXZlbnRUeXBlXSB8fCB7fTtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbZXZlbnRUeXBlXVtpZF0gPSBjYjtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXJlZ2lzdGVySGFuZGxlcihldmVudFR5cGU6IEV2ZW50VHlwZXMsIGlkOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tldmVudFR5cGVdO1xuICAgICAgICBpZiAoISFoYW5kbGVycykge1xuICAgICAgICAgICAgZGVsZXRlIGhhbmRsZXJzW2lkXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0RXZlbnQoZXZlbnRUeXBlOiBFdmVudFR5cGVzLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1tldmVudFR5cGVdO1xuICAgICAgICBpZiAoISFoYW5kbGVycykge1xuICAgICAgICAgICAgZm9yKHZhciBpZCBpbiBoYW5kbGVycykge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2IgPSBoYW5kbGVyc1tpZF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghIWNiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gRXZlbnRUeXBlcyB7XG4gICAgRW5lbXlQbGFuZXRDcmVhdGVkID0gMVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/game-state.service',["require", "exports", "aurelia-framework", "./planet-entity", "./static-entity", "./transient-entity", "./rng", "./camera.service", "./event.service", "lodash"], function (require, exports, aurelia_framework_1, planet_entity_1, static_entity_1, transient_entity_1, rng_1, camera_service_1, event_service_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameStateService = (function () {
        function GameStateService(_camera, _eventService) {
            this._camera = _camera;
            this._eventService = _eventService;
            this.state = new GameState();
            for (var i = 0; i < 3; i++) {
                this.generateNewPlanet(({
                    x: 0,
                    y: 0
                }), false);
            }
            var startingPlanet = this.state.planets[0];
            this._camera.panTo(startingPlanet.x, startingPlanet.y);
        }
        GameStateService.prototype.checkIfNeedToGeneratePlanet = function (p) {
            if (Math.abs(p.x - this._camera.minX) < 600 ||
                Math.abs(p.x - this._camera.maxX) < 600 ||
                Math.abs(p.y - this._camera.minY) < 600 ||
                Math.abs(p.y - this._camera.maxY) < 600) {
                this.generateNewPlanet(({
                    x: p.x,
                    y: p.y,
                    rngRange: 1500
                }), true);
            }
        };
        GameStateService.prototype.generateNewPlanet = function (opts, generateOutsideBounds) {
            var _this = this;
            var p = new planet_entity_1.PlanetEntity();
            var rng = opts.rngRange || 1000;
            p.x = opts.x + rng_1.Rng.rnd(-rng, rng);
            p.y = opts.y + rng_1.Rng.rnd(-rng, rng);
            p.radius = rng_1.Rng.rnd(20, 60);
            p.resources = 500;
            if (_.some(this.state.planets, function (p2) {
                if (generateOutsideBounds) {
                    return !(p.x < _this._camera.minX || p.x > _this._camera.maxX || p.y < _this._camera.minY || p.y > _this._camera.maxY);
                }
                else {
                    return p.distanceTo(p2) < 700 || p.distanceTo(p2) > 1400;
                }
            })) {
                this.generateNewPlanet(opts, generateOutsideBounds);
                return;
            }
            this._camera.maxX = Math.max(this._camera.maxX, p.x + 300);
            this._camera.minX = Math.min(this._camera.minX, p.x - 300);
            this._camera.maxY = Math.max(this._camera.maxY, p.y + 300);
            this._camera.minY = Math.min(this._camera.minY, p.y - 300);
            this.state.planets.push(p);
            if (generateOutsideBounds) {
                if (rng_1.Rng.rnd(0, 100) < 90) {
                    p.isHostile = true;
                    this._eventService.postEvent(event_service_1.EventTypes.EnemyPlanetCreated, {
                        planet: p
                    });
                }
            }
        };
        return GameStateService;
    }());
    GameStateService = __decorate([
        aurelia_framework_1.inject(camera_service_1.CameraService, event_service_1.EventService),
        __metadata("design:paramtypes", [camera_service_1.CameraService, event_service_1.EventService])
    ], GameStateService);
    exports.GameStateService = GameStateService;
    var GameState = (function () {
        function GameState() {
            this.planets = [];
            this.transientEntities = [];
            this.gameState = GameStates.Playing;
            this.resourceCount = 200;
        }
        GameState.prototype.getStaticEntitiesOfType = function (type) {
            var retVal = [];
            for (var _i = 0, _a = this.planets; _i < _a.length; _i++) {
                var p = _a[_i];
                for (var _b = 0, _c = p.staticEntities; _b < _c.length; _b++) {
                    var s = _c[_b];
                    if (s.type == type) {
                        retVal.push(s);
                    }
                }
            }
            return retVal;
        };
        GameState.prototype.getEntitiesOrbitingPlanet = function (p) {
            var retVal = [];
            for (var _i = 0, _a = this.transientEntities; _i < _a.length; _i++) {
                var e = _a[_i];
                ;
                if (e.orbitingPlanet == p && e.state == transient_entity_1.TransientEntityState.Orbiting) {
                    retVal.push(e);
                }
            }
            return retVal;
        };
        Object.defineProperty(GameState.prototype, "resourceCap", {
            get: function () {
                return 200 + this.getStaticEntitiesOfType(static_entity_1.StaticEntities.Stockpile).length * 500;
            },
            enumerable: true,
            configurable: true
        });
        return GameState;
    }());
    exports.GameState = GameState;
    var GameStates;
    (function (GameStates) {
        GameStates[GameStates["Playing"] = 1] = "Playing";
    })(GameStates = exports.GameStates || (exports.GameStates = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQWFBLElBQWEsZ0JBQWdCO1FBR3pCLDBCQUFvQixPQUFzQixFQUFVLGFBQTJCO1lBQTNELFlBQU8sR0FBUCxPQUFPLENBQWU7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztZQUMzRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFFN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFnQixDQUFDO29CQUNuQyxDQUFDLEVBQUUsQ0FBQztvQkFDSixDQUFDLEVBQUUsQ0FBQztpQkFDUCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDZixDQUFDO1lBRUQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxDQUFlO1lBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUc7Z0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUc7Z0JBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUc7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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgY29tcHV0ZWRGcm9tIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBCaW5kaW5nU2lnbmFsZXIgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXR5LCBTdGF0aWNFbnRpdGllcyB9IGZyb20gXCIuL3N0YXRpYy1lbnRpdHlcIjtcbmltcG9ydCB7IFRyYW5zaWVudEVudGl0eSwgVHJhbnNpZW50RW50aXRpZXMsIFRyYW5zaWVudEVudGl0eVN0YXRlIH0gZnJvbSBcIi4vdHJhbnNpZW50LWVudGl0eVwiO1xuaW1wb3J0IHsgUm5nIH0gZnJvbSBcIi4vcm5nXCI7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vY2FtZXJhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVudGl0eUZhY3RvcnkgfSBmcm9tIFwiLi9lbnRpdHktZmFjdG9yeVwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlLCBFdmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBpbmplY3QoQ2FtZXJhU2VydmljZSwgRXZlbnRTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0ZTogR2FtZVN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2FtZXJhOiBDYW1lcmFTZXJ2aWNlLCBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEdhbWVTdGF0ZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTmV3UGxhbmV0KDxQbGFuZXRHZW5PcHRzPih7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9KSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhcnRpbmdQbGFuZXQgPSB0aGlzLnN0YXRlLnBsYW5ldHNbMF07XG4gICAgICAgIHRoaXMuX2NhbWVyYS5wYW5UbyhzdGFydGluZ1BsYW5ldC54LCBzdGFydGluZ1BsYW5ldC55KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tJZk5lZWRUb0dlbmVyYXRlUGxhbmV0KHA6IFBsYW5ldEVudGl0eSkge1xuICAgICAgICBpZiAoTWF0aC5hYnMocC54IC0gdGhpcy5fY2FtZXJhLm1pblgpIDwgNjAwIHx8XG4gICAgICAgICAgICBNYXRoLmFicyhwLnggLSB0aGlzLl9jYW1lcmEubWF4WCkgPCA2MDAgfHxcbiAgICAgICAgICAgIE1hdGguYWJzKHAueSAtIHRoaXMuX2NhbWVyYS5taW5ZKSA8IDYwMCB8fFxuICAgICAgICAgICAgTWF0aC5hYnMocC55IC0gdGhpcy5fY2FtZXJhLm1heFkpIDwgNjAwKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTmV3UGxhbmV0KDxQbGFuZXRHZW5PcHRzPih7XG4gICAgICAgICAgICAgICAgeDogcC54LFxuICAgICAgICAgICAgICAgIHk6IHAueSxcbiAgICAgICAgICAgICAgICBybmdSYW5nZTogMTUwMFxuICAgICAgICAgICAgfSksIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlTmV3UGxhbmV0KG9wdHM6IFBsYW5ldEdlbk9wdHMsIGdlbmVyYXRlT3V0c2lkZUJvdW5kczogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBwID0gbmV3IFBsYW5ldEVudGl0eSgpO1xuXG4gICAgICAgIGNvbnN0IHJuZyA9IG9wdHMucm5nUmFuZ2UgfHwgMTAwMDtcblxuICAgICAgICBwLnggPSBvcHRzLnggKyBSbmcucm5kKC1ybmcsIHJuZyk7XG4gICAgICAgIHAueSA9IG9wdHMueSArIFJuZy5ybmQoLXJuZywgcm5nKTtcbiAgICAgICAgcC5yYWRpdXMgPSBSbmcucm5kKDIwLCA2MCk7XG4gICAgICAgIHAucmVzb3VyY2VzID0gNTAwO1xuXG4gICAgICAgIGlmIChfLnNvbWUodGhpcy5zdGF0ZS5wbGFuZXRzLCBwMiA9PiB7XG4gICAgICAgICAgICBpZiAoZ2VuZXJhdGVPdXRzaWRlQm91bmRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEocC54IDwgdGhpcy5fY2FtZXJhLm1pblggfHwgcC54ID4gdGhpcy5fY2FtZXJhLm1heFggfHwgcC55IDwgdGhpcy5fY2FtZXJhLm1pblkgfHwgcC55ID4gdGhpcy5fY2FtZXJhLm1heFkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5kaXN0YW5jZVRvKHAyKSA8IDcwMCB8fCBwLmRpc3RhbmNlVG8ocDIpID4gMTQwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld1BsYW5ldChvcHRzLCBnZW5lcmF0ZU91dHNpZGVCb3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2FtZXJhLm1heFggPSBNYXRoLm1heCh0aGlzLl9jYW1lcmEubWF4WCwgcC54ICsgMzAwKTtcbiAgICAgICAgdGhpcy5fY2FtZXJhLm1pblggPSBNYXRoLm1pbih0aGlzLl9jYW1lcmEubWluWCwgcC54IC0gMzAwKTtcbiAgICAgICAgdGhpcy5fY2FtZXJhLm1heFkgPSBNYXRoLm1heCh0aGlzLl9jYW1lcmEubWF4WSwgcC55ICsgMzAwKTtcbiAgICAgICAgdGhpcy5fY2FtZXJhLm1pblkgPSBNYXRoLm1pbih0aGlzLl9jYW1lcmEubWluWSwgcC55IC0gMzAwKTtcblxuICAgICAgICB0aGlzLnN0YXRlLnBsYW5ldHMucHVzaChwKTtcblxuICAgICAgICBpZiAoZ2VuZXJhdGVPdXRzaWRlQm91bmRzKSB7XG4gICAgICAgICAgICBpZiAoUm5nLnJuZCgwLCAxMDApIDwgOTApIHtcbiAgICAgICAgICAgICAgICBwLmlzSG9zdGlsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnBvc3RFdmVudChFdmVudFR5cGVzLkVuZW15UGxhbmV0Q3JlYXRlZCwge1xuICAgICAgICAgICAgICAgICAgICBwbGFuZXQ6IHBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIFBsYW5ldEdlbk9wdHMge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgcm5nUmFuZ2U6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgICBwdWJsaWMgcGxhbmV0czogUGxhbmV0RW50aXR5W107XG4gICAgcHVibGljIHRyYW5zaWVudEVudGl0aWVzOiBUcmFuc2llbnRFbnRpdHlbXTtcbiAgICBwdWJsaWMgcmVzb3VyY2VDb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyBnYW1lU3RhdGU6IEdhbWVTdGF0ZXM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFuZXRzID0gW107XG4gICAgICAgIHRoaXMudHJhbnNpZW50RW50aXRpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHYW1lU3RhdGVzLlBsYXlpbmc7XG4gICAgICAgIHRoaXMucmVzb3VyY2VDb3VudCA9IDIwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3RhdGljRW50aXRpZXNPZlR5cGUodHlwZTogU3RhdGljRW50aXRpZXMpOiBTdGF0aWNFbnRpdHlbXSB7XG4gICAgICAgIGNvbnN0IHJldFZhbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucGxhbmV0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBwLnN0YXRpY0VudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbC5wdXNoKHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbnRpdGllc09yYml0aW5nUGxhbmV0KHA6IFBsYW5ldEVudGl0eSkge1xuICAgICAgICBjb25zdCByZXRWYWwgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZSBvZiB0aGlzLnRyYW5zaWVudEVudGl0aWVzKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZiAoZS5vcmJpdGluZ1BsYW5ldCA9PSBwICYmIGUuc3RhdGUgPT0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXRWYWwucHVzaChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb3VyY2VDYXAoKSB7XG4gICAgICAgIHJldHVybiAyMDAgKyB0aGlzLmdldFN0YXRpY0VudGl0aWVzT2ZUeXBlKFN0YXRpY0VudGl0aWVzLlN0b2NrcGlsZSkubGVuZ3RoICogNTAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gR2FtZVN0YXRlcyB7XG4gICAgUGxheWluZyA9IDFcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/game',["require", "exports", "aurelia-framework", "./game-state.service", "./transient-entity", "./camera.service", "./tick.service", "./input.service", "./log.service", "./entity-factory", "./ui.service", "lodash"], function (require, exports, aurelia_framework_1, game_state_service_1, transient_entity_1, camera_service_1, tick_service_1, input_service_1, log_service_1, entity_factory_1, ui_service_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game(gameStateService, camera, inputService, entityFactory, uiService, tickService, logService) {
            this.camera = camera;
            this._gameStateService = gameStateService;
            this._inputService = inputService;
            this._entityFactory = entityFactory;
            this.uiService = uiService;
            this._tickService = tickService;
            this.logService = logService;
            this._entityFactory.spawnTransientEntity(this._gameStateService.state.planets[0], transient_entity_1.TransientEntities.SettlementShip, true);
        }
        Game.prototype.attached = function () {
            var _this = this;
            this._inputService.initKeyBindings();
            var t2 = Date.now();
            var animFn = function () {
                var t = Date.now();
                var deltaTime = (t - t2) / 1000;
                _this._inputService.checkForInput();
                _this._tickService.update();
                for (var _i = 0, _a = _this._gameStateService.state.transientEntities; _i < _a.length; _i++) {
                    var e = _a[_i];
                    e.update(deltaTime, _this._gameStateService.state.transientEntities);
                }
                _this._gameStateService.state.transientEntities = _.filter(_this._gameStateService.state.transientEntities, function (e) { return !e.dead; });
                t2 = t;
                requestAnimationFrame(animFn);
            };
            requestAnimationFrame(animFn);
        };
        Object.defineProperty(Game.prototype, "gameState", {
            get: function () {
                return this._gameStateService.state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Game.prototype, "entitiesOrbitingPlanet", {
            get: function () {
                return this._gameStateService.state.getEntitiesOrbitingPlanet(this.selectedPlanet);
            },
            enumerable: true,
            configurable: true
        });
        Game.prototype.markShipForMovement = function (e) {
            e.markedForMovement = !e.markedForMovement;
        };
        Game.prototype.buildStaticEntity = function (type) {
            this._entityFactory.spawnStaticEntity(this.selectedPlanet, type);
        };
        Game.prototype.upgrade = function (e) {
            this._entityFactory.upgradeStaticEntity(e);
        };
        Game.prototype.buildTransientEntity = function (type) {
            this._entityFactory.spawnTransientEntity(this.selectedPlanet, type, false);
        };
        Object.defineProperty(Game.prototype, "visiblePlanets", {
            get: function () {
                return this._gameStateService.state.planets;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Game.prototype, "visibleTransients", {
            get: function () {
                return this._gameStateService.state.transientEntities;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Game.prototype, "selectedPlanet", {
            get: function () {
                return this.uiService.selectedPlanet;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Game.prototype, "orbitingCommandCenter", {
            get: function () {
                var _this = this;
                return _.find(this.entitiesOrbitingPlanet, function (e) { return e.type == transient_entity_1.TransientEntities.SettlementShip && e.orbitingPlanet.id == _this.selectedPlanet.id; });
            },
            enumerable: true,
            configurable: true
        });
        Game.prototype.settlePlanet = function () {
            if (!this.selectedPlanet.settled && !!this.orbitingCommandCenter) {
                this.selectedPlanet.settled = true;
                this.orbitingCommandCenter.dead = true;
            }
        };
        return Game;
    }());
    Game = __decorate([
        aurelia_framework_1.inject(game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService, entity_factory_1.EntityFactory, ui_service_1.UiService, tick_service_1.TickService, log_service_1.LogService),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService, entity_factory_1.EntityFactory, ui_service_1.UiService, tick_service_1.TickService, log_service_1.LogService])
    ], Game);
    exports.Game = Game;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUMzQyxDQUFDO1FBQ0wsQ0FBQztRQUNMLFdBQUM7SUFBRCxDQTFGQSxBQTBGQyxJQUFBO0lBMUZZLElBQUk7UUFEaEIsMEJBQU0sQ0FBQyxxQ0FBZ0IsRUFBRSw4QkFBYSxFQUFFLDRCQUFZLEVBQUUsOEJBQWEsRUFBRSxzQkFBUyxFQUFFLDBCQUFXLEVBQUUsd0JBQVUsQ0FBQzt5Q0FXdkUscUNBQWdCLEVBQVUsOEJBQWEsRUFBZ0IsNEJBQVksRUFBaUIsOEJBQWEsRUFBYSxzQkFBUyxFQUFlLDBCQUFXLEVBQWMsd0JBQVU7T0FWOUwsSUFBSSxDQTBGaEI7SUExRlksb0JBQUkiLCJmaWxlIjoiZ2FtZS9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZVNlcnZpY2UsIEdhbWVTdGF0ZSB9IGZyb20gXCIuL2dhbWUtc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXR5IH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5LCBUcmFuc2llbnRFbnRpdGllcyB9IGZyb20gXCIuL3RyYW5zaWVudC1lbnRpdHlcIjtcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi9jYW1lcmEuc2VydmljZVwiO1xuaW1wb3J0IHsgVGlja1NlcnZpY2UgfSBmcm9tIFwiLi90aWNrLnNlcnZpY2VcIjtcbmltcG9ydCB7IElucHV0U2VydmljZSB9IGZyb20gXCIuL2lucHV0LnNlcnZpY2VcIjsgaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gXCIuL2xvZy5zZXJ2aWNlXCI7IGltcG9ydCB7IEVudGl0eUZhY3RvcnkgfSBmcm9tIFwiLi9lbnRpdHktZmFjdG9yeVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXRpZXMgfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBVaVNlcnZpY2UgfSBmcm9tIFwiLi91aS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQGluamVjdChHYW1lU3RhdGVTZXJ2aWNlLCBDYW1lcmFTZXJ2aWNlLCBJbnB1dFNlcnZpY2UsIEVudGl0eUZhY3RvcnksIFVpU2VydmljZSwgVGlja1NlcnZpY2UsIExvZ1NlcnZpY2UpXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgcHVibGljIGNhbWVyYTogQ2FtZXJhU2VydmljZTtcbiAgICBwdWJsaWMgdWlTZXJ2aWNlOiBVaVNlcnZpY2U7XG4gICAgcHVibGljIGxvZ1NlcnZpY2U6IExvZ1NlcnZpY2U7XG5cbiAgICBwcml2YXRlIF9nYW1lU3RhdGVTZXJ2aWNlOiBHYW1lU3RhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2lucHV0U2VydmljZTogSW5wdXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2VudGl0eUZhY3Rvcnk6IEVudGl0eUZhY3Rvcnk7XG4gICAgcHJpdmF0ZSBfdGlja1NlcnZpY2U6IFRpY2tTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZVN0YXRlU2VydmljZTogR2FtZVN0YXRlU2VydmljZSwgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlLCBpbnB1dFNlcnZpY2U6IElucHV0U2VydmljZSwgZW50aXR5RmFjdG9yeTogRW50aXR5RmFjdG9yeSwgdWlTZXJ2aWNlOiBVaVNlcnZpY2UsIHRpY2tTZXJ2aWNlOiBUaWNrU2VydmljZSwgbG9nU2VydmljZTogTG9nU2VydmljZSkge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlU2VydmljZSA9IGdhbWVTdGF0ZVNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2lucHV0U2VydmljZSA9IGlucHV0U2VydmljZTtcbiAgICAgICAgdGhpcy5fZW50aXR5RmFjdG9yeSA9IGVudGl0eUZhY3Rvcnk7XG4gICAgICAgIHRoaXMudWlTZXJ2aWNlID0gdWlTZXJ2aWNlO1xuICAgICAgICB0aGlzLl90aWNrU2VydmljZSA9IHRpY2tTZXJ2aWNlO1xuICAgICAgICB0aGlzLmxvZ1NlcnZpY2UgPSBsb2dTZXJ2aWNlO1xuXG4gICAgICAgIHRoaXMuX2VudGl0eUZhY3Rvcnkuc3Bhd25UcmFuc2llbnRFbnRpdHkodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzWzBdLCBUcmFuc2llbnRFbnRpdGllcy5TZXR0bGVtZW50U2hpcCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuX2lucHV0U2VydmljZS5pbml0S2V5QmluZGluZ3MoKTtcblxuICAgICAgICBsZXQgdDIgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgYW5pbUZuID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSAodCAtIHQyKS8xMDAwO1xuICAgICAgICAgICAgdGhpcy5faW5wdXRTZXJ2aWNlLmNoZWNrRm9ySW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3RpY2tTZXJ2aWNlLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGUgb2YgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGUudXBkYXRlKGRlbHRhVGltZSwgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzID0gXy5maWx0ZXIodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcywgZSA9PiAhZS5kZWFkKTtcblxuICAgICAgICAgICAgdDIgPSB0O1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1Gbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1Gbik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnYW1lU3RhdGUoKSA6IEdhbWVTdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZW50aXRpZXNPcmJpdGluZ1BsYW5ldCgpIDogVHJhbnNpZW50RW50aXRpZXNbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLmdldEVudGl0aWVzT3JiaXRpbmdQbGFuZXQodGhpcy5zZWxlY3RlZFBsYW5ldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtTaGlwRm9yTW92ZW1lbnQoZTogVHJhbnNpZW50RW50aXR5KSB7XG4gICAgICAgIGUubWFya2VkRm9yTW92ZW1lbnQgPSAhZS5tYXJrZWRGb3JNb3ZlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRTdGF0aWNFbnRpdHkodHlwZTogU3RhdGljRW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5RmFjdG9yeS5zcGF3blN0YXRpY0VudGl0eSh0aGlzLnNlbGVjdGVkUGxhbmV0LCB0eXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBncmFkZShlOiBTdGF0aWNFbnRpdHkpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5RmFjdG9yeS51cGdyYWRlU3RhdGljRW50aXR5KGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZFRyYW5zaWVudEVudGl0eSh0eXBlOiBUcmFuc2llbnRFbnRpdGllcykge1xuICAgICAgICB0aGlzLl9lbnRpdHlGYWN0b3J5LnNwYXduVHJhbnNpZW50RW50aXR5KHRoaXMuc2VsZWN0ZWRQbGFuZXQsIHR5cGUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVQbGFuZXRzKCk6IFBsYW5ldEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVUcmFuc2llbnRzKCk6IFRyYW5zaWVudEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZFBsYW5ldCgpOiBQbGFuZXRFbnRpdHkge1xuICAgICAgICByZXR1cm4gdGhpcy51aVNlcnZpY2Uuc2VsZWN0ZWRQbGFuZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcmJpdGluZ0NvbW1hbmRDZW50ZXIoKSB7XG4gICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdGllc09yYml0aW5nUGxhbmV0LCBlID0+IGUudHlwZSA9PSBUcmFuc2llbnRFbnRpdGllcy5TZXR0bGVtZW50U2hpcCAmJiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHRoaXMuc2VsZWN0ZWRQbGFuZXQuaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXR0bGVQbGFuZXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZFBsYW5ldC5zZXR0bGVkICYmICEhdGhpcy5vcmJpdGluZ0NvbW1hbmRDZW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQbGFuZXQuc2V0dGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9yYml0aW5nQ29tbWFuZENlbnRlci5kZWFkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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

define('game/log.service',["require", "exports", "./utils", "lodash"], function (require, exports, utils_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogService = (function () {
        function LogService() {
            this.staticLogs = [];
            this.tempLogs = [];
        }
        LogService.prototype.addStaticLog = function (log) {
            log.id = utils_1.Utils.guid();
            this.staticLogs.push(log);
        };
        LogService.prototype.deleteStaticLog = function (id) {
            this.staticLogs = _.filter(this.staticLogs, function (l) { return l.id != id; });
        };
        LogService.prototype.addTempLog = function (log) {
            log.id = utils_1.Utils.guid();
            this.tempLogs.push(log);
            var _this = this;
            setTimeout(function () {
                _this.tempLogs = _.filter(_this.tempLogs, function (l) { return l.id != log.id; });
            }, 5000);
        };
        return LogService;
    }());
    exports.LogService = LogService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0E7UUFJSTtZQUhPLGVBQVUsR0FBVSxFQUFFLENBQUM7WUFDdkIsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUVaLENBQUM7UUFFVixpQ0FBWSxHQUFuQixVQUFvQixHQUFRO1lBQ3hCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFTSxvQ0FBZSxHQUF0QixVQUF1QixFQUFVO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUVNLCtCQUFVLEdBQWpCLFVBQWtCLEdBQVE7WUFDdEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFeEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ25CLFVBQVUsQ0FBQztnQkFDUCxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztZQUNuRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQXhCQSxBQXdCQyxJQUFBO0lBeEJZLGdDQUFVIiwiZmlsZSI6ImdhbWUvbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGNsYXNzIExvZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWNMb2dzOiBMb2dbXSA9IFtdO1xuICAgIHB1YmxpYyB0ZW1wTG9nczogTG9nW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgYWRkU3RhdGljTG9nKGxvZzogTG9nKSB7XG4gICAgICAgIGxvZy5pZCA9IFV0aWxzLmd1aWQoKTtcbiAgICAgICAgdGhpcy5zdGF0aWNMb2dzLnB1c2gobG9nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlU3RhdGljTG9nKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNMb2dzID0gXy5maWx0ZXIodGhpcy5zdGF0aWNMb2dzLCBsID0+IGwuaWQgIT0gaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRUZW1wTG9nKGxvZzogTG9nKSB7XG4gICAgICAgIGxvZy5pZCA9IFV0aWxzLmd1aWQoKTtcbiAgICAgICAgdGhpcy50ZW1wTG9ncy5wdXNoKGxvZyk7XG5cbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIF90aGlzLnRlbXBMb2dzID0gXy5maWx0ZXIoX3RoaXMudGVtcExvZ3MsIGwgPT4gbC5pZCAhPSBsb2cuaWQpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('game/planet-entity',["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlanetEntity = (function () {
        function PlanetEntity() {
            this.id = utils_1.Utils.guid();
            this.staticEntities = [];
            this.settlementHealth = 100;
            this.isHostile = false;
        }
        PlanetEntity.prototype.distanceTo = function (e2) {
            return utils_1.Utils.dist(e2.x, e2.y, this.x, this.y);
        };
        return PlanetEntity;
    }());
    exports.PlanetEntity = PlanetEntity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvcGxhbmV0LWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUNJO1lBS08sT0FBRSxHQUFXLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUkxQixtQkFBYyxHQUFtQixFQUFFLENBQUM7WUFFcEMscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1lBQy9CLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFYbEMsQ0FBQztRQWFNLGlDQUFVLEdBQWpCLFVBQWtCLEVBQWdCO1lBQzlCLE1BQU0sQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLG9DQUFZIiwiZmlsZSI6ImdhbWUvcGxhbmV0LWVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0eSB9IGZyb20gXCIuL3N0YXRpYy1lbnRpdHlcIjtcblxuZXhwb3J0IGNsYXNzIFBsYW5ldEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gVXRpbHMuZ3VpZCgpO1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVzb3VyY2VzOiBudW1iZXI7XG4gICAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBzdGF0aWNFbnRpdGllczogU3RhdGljRW50aXR5W10gPSBbXTtcbiAgICBwdWJsaWMgc2V0dGxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2V0dGxlbWVudEhlYWx0aDogbnVtYmVyID0gMTAwO1xuICAgIHB1YmxpYyBpc0hvc3RpbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBkaXN0YW5jZVRvKGUyOiBQbGFuZXRFbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIFV0aWxzLmRpc3QoZTIueCwgZTIueSwgdGhpcy54LCB0aGlzLnkpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('game/static-entity',["require", "exports", "./entity"], function (require, exports, entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StaticEntity = (function (_super) {
        __extends(StaticEntity, _super);
        function StaticEntity(type) {
            var _this = _super.call(this) || this;
            _this.distanceFromPlanet = 40;
            _this.size = 60;
            _this.level = 1;
            _this.type = type;
            _this.metadata = StaticEntityMetadata[type];
            return _this;
        }
        return StaticEntity;
    }(entity_1.Entity));
    exports.StaticEntity = StaticEntity;
    var StaticEntities;
    (function (StaticEntities) {
        StaticEntities[StaticEntities["MiningStation"] = 1] = "MiningStation";
        StaticEntities[StaticEntities["CommandCenter"] = 2] = "CommandCenter";
        StaticEntities[StaticEntities["Turret"] = 3] = "Turret";
        StaticEntities[StaticEntities["ShieldGenerator"] = 4] = "ShieldGenerator";
        StaticEntities[StaticEntities["ShipYard"] = 5] = "ShipYard";
        StaticEntities[StaticEntities["Stockpile"] = 6] = "Stockpile";
    })(StaticEntities = exports.StaticEntities || (exports.StaticEntities = {}));
    var StaticEntityMetadata = {};
    exports.StaticEntityMetadata = StaticEntityMetadata;
    StaticEntityMetadata[StaticEntities.MiningStation] = {
        name: "Mining Station",
        cost: 100,
        health: 100,
        maxUpgradeLevel: 3,
        buildTime: 20,
        upgradeTime: 30
    };
    StaticEntityMetadata[StaticEntities.Stockpile] = {
        name: "Stockpile",
        cost: 100,
        health: 100,
        maxUpgradeLevel: 3,
        buildTime: 20,
        upgradeTime: 30
    };
    StaticEntityMetadata[StaticEntities.ShipYard] = {
        name: "Ship Yard",
        cost: 100,
        health: 100,
        maxUpgradeLevel: 20,
        buildTime: 4,
        upgradeTime: 30
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvc3RhdGljLWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBRUE7UUFBa0MsZ0NBQU07UUFVcEMsc0JBQVksSUFBb0I7WUFBaEMsWUFDSSxpQkFBTyxTQUdWO1lBUk0sd0JBQWtCLEdBQVcsRUFBRSxDQUFDO1lBQ2hDLFVBQUksR0FBVyxFQUFFLENBQUM7WUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztZQUlyQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDOztRQUMvQyxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQWZBLEFBZUMsQ0FmaUMsZUFBTSxHQWV2QztJQWZZLG9DQUFZO0lBaUJ6QixJQUFZLGNBT1g7SUFQRCxXQUFZLGNBQWM7UUFDdEIscUVBQWlCLENBQUE7UUFDakIscUVBQWlCLENBQUE7UUFDakIsdURBQVUsQ0FBQTtRQUNWLHlFQUFtQixDQUFBO1FBQ25CLDJEQUFZLENBQUE7UUFDWiw2REFBYSxDQUFBO0lBQ2pCLENBQUMsRUFQVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQU96QjtJQVdELElBQU0sb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0lBNkJ2QixvREFBb0I7SUEzQjdCLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRztRQUNqRCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLEdBQUc7UUFDWCxlQUFlLEVBQUUsQ0FBQztRQUNsQixTQUFTLEVBQUUsRUFBRTtRQUNiLFdBQVcsRUFBRSxFQUFFO0tBQ2xCLENBQUM7SUFFRixvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUc7UUFDN0MsSUFBSSxFQUFFLFdBQVc7UUFDakIsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsR0FBRztRQUNYLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7S0FDbEIsQ0FBQztJQUVGLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRztRQUM1QyxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxHQUFHO1FBQ1gsZUFBZSxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUM7UUFDWixXQUFXLEVBQUUsRUFBRTtLQUNsQixDQUFDIiwiZmlsZSI6ImdhbWUvc3RhdGljLWVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL2VudGl0eVwiO1xuXG5leHBvcnQgY2xhc3MgU3RhdGljRW50aXR5IGV4dGVuZHMgRW50aXR5IHtcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogU3RhdGljRW50aXRpZXM7XG4gICAgcHVibGljIG1ldGFkYXRhOiBTdGF0aWNFbnRpdHlEZWZpbml0aW9uO1xuICAgIHB1YmxpYyBwb3NpdGlvbk9uT3JiaXQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdXBncmFkaW5nOiBib29sZWFuO1xuICAgIHB1YmxpYyBkaXN0YW5jZUZyb21QbGFuZXQ6IG51bWJlciA9IDQwO1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXIgPSA2MDtcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBTdGF0aWNFbnRpdGllcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm1ldGFkYXRhID0gU3RhdGljRW50aXR5TWV0YWRhdGFbdHlwZV07XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBTdGF0aWNFbnRpdGllcyB7XG4gICAgTWluaW5nU3RhdGlvbiA9IDEsXG4gICAgQ29tbWFuZENlbnRlciA9IDIsXG4gICAgVHVycmV0ID0gMyxcbiAgICBTaGllbGRHZW5lcmF0b3IgPSA0LFxuICAgIFNoaXBZYXJkID0gNSxcbiAgICBTdG9ja3BpbGUgPSA2XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGljRW50aXR5RGVmaW5pdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNvc3Q6IG51bWJlcjtcbiAgICBoZWFsdGg6IG51bWJlcjtcbiAgICBidWlsZFRpbWU6IG51bWJlcjtcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IG51bWJlcjtcbiAgICB1cGdyYWRlVGltZTogbnVtYmVyO1xufVxuXG5jb25zdCBTdGF0aWNFbnRpdHlNZXRhZGF0YSA9IHt9O1xuXG5TdGF0aWNFbnRpdHlNZXRhZGF0YVtTdGF0aWNFbnRpdGllcy5NaW5pbmdTdGF0aW9uXSA9IHtcbiAgICBuYW1lOiBcIk1pbmluZyBTdGF0aW9uXCIsXG4gICAgY29zdDogMTAwLFxuICAgIGhlYWx0aDogMTAwLFxuICAgIG1heFVwZ3JhZGVMZXZlbDogMyxcbiAgICBidWlsZFRpbWU6IDIwLFxuICAgIHVwZ3JhZGVUaW1lOiAzMFxufTtcblxuU3RhdGljRW50aXR5TWV0YWRhdGFbU3RhdGljRW50aXRpZXMuU3RvY2twaWxlXSA9IHtcbiAgICBuYW1lOiBcIlN0b2NrcGlsZVwiLFxuICAgIGNvc3Q6IDEwMCxcbiAgICBoZWFsdGg6IDEwMCxcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IDMsXG4gICAgYnVpbGRUaW1lOiAyMCxcbiAgICB1cGdyYWRlVGltZTogMzBcbn07XG5cblN0YXRpY0VudGl0eU1ldGFkYXRhW1N0YXRpY0VudGl0aWVzLlNoaXBZYXJkXSA9IHtcbiAgICBuYW1lOiBcIlNoaXAgWWFyZFwiLFxuICAgIGNvc3Q6IDEwMCxcbiAgICBoZWFsdGg6IDEwMCxcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IDIwLFxuICAgIGJ1aWxkVGltZTogNCxcbiAgICB1cGdyYWRlVGltZTogMzBcbn07XG5cbmV4cG9ydCB7IFN0YXRpY0VudGl0eU1ldGFkYXRhIH07Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/tick.service',["require", "exports", "aurelia-framework", "./game-state.service", "./static-entity", "lodash"], function (require, exports, aurelia_framework_1, game_state_service_1, static_entity_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TickService = TickService_1 = (function () {
        function TickService(_gameStateService) {
            this._gameStateService = _gameStateService;
            this.events = [];
            this.startTime = Date.now();
            this.ticks = 0;
            this._timeAtLastTick = this.startTime;
        }
        TickService.prototype.scheduleEvent = function (ev) {
            ev.tickScheduledAt = this.ticks;
            this.events.push(ev);
        };
        TickService.prototype.update = function () {
            var tickIntervalInMs = (1000 / TickService_1.TickInterval);
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
            var _this = this;
            ++this.ticks;
            if (this.ticks % 8 == 0) {
                this.updateMiners();
            }
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var ev = _a[_i];
                ev.onTick && ev.onTick();
                if (this.ticks > ev.tickScheduledAt + ev.n) {
                    ev.onCompletion && ev.onCompletion();
                }
            }
            this.events = _.filter(this.events, function (ev) { return _this.ticks <= ev.tickScheduledAt + ev.n; });
        };
        TickService.prototype.updateMiners = function () {
            for (var _i = 0, _a = this._gameStateService.state.planets; _i < _a.length; _i++) {
                var p = _a[_i];
                for (var _b = 0, _c = p.staticEntities; _b < _c.length; _b++) {
                    var s = _c[_b];
                    if (s.type == static_entity_1.StaticEntities.MiningStation) {
                        var dr = Math.min(p.resources, Math.max(this._gameStateService.state.resourceCap - this._gameStateService.state.resourceCount, 0), 50);
                        p.resources -= dr;
                        this._gameStateService.state.resourceCount += dr;
                    }
                }
            }
        };
        return TickService;
    }());
    TickService.TickInterval = 4;
    TickService = TickService_1 = __decorate([
        aurelia_framework_1.inject(game_state_service_1.GameStateService),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService])
    ], TickService);
    exports.TickService = TickService;
    var TickService_1;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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d0JBQ3pDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6SSxDQUFDLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO29CQUNyRCxDQUFDO2lCQUNKO2FBQ0o7UUFDTCxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQTVEQSxBQTREQyxJQUFBO0lBM0RpQix3QkFBWSxHQUFXLENBQUMsQ0FBQztJQUQ5QixXQUFXO1FBRHZCLDBCQUFNLENBQUMscUNBQWdCLENBQUM7eUNBVWtCLHFDQUFnQjtPQVQ5QyxXQUFXLENBNER2QjtJQTVEWSxrQ0FBVyIsImZpbGUiOiJnYW1lL3RpY2suc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR2FtZVN0YXRlU2VydmljZSwgR2FtZVN0YXRlIH0gZnJvbSBcIi4vZ2FtZS1zdGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi9wbGFuZXQtZW50aXR5XCI7XG5pbXBvcnQgeyBTdGF0aWNFbnRpdHksIFN0YXRpY0VudGl0aWVzIH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBpbmplY3QoR2FtZVN0YXRlU2VydmljZSlcbmV4cG9ydCBjbGFzcyBUaWNrU2VydmljZSB7XG4gICAgcHVibGljIHN0YXRpYyBUaWNrSW50ZXJ2YWw6IG51bWJlciA9IDQ7XG5cbiAgICBwcml2YXRlIGV2ZW50czogU2NoZWR1bGVkRXZlbnRbXSA9IFtdO1xuICAgIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcbiAgICBwdWJsaWMgdGlja3M6IG51bWJlcjtcblxuICAgIHByaXZhdGUgX3RpbWVBdExhc3RUaWNrOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9nYW1lU3RhdGVTZXJ2aWNlOiBHYW1lU3RhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XG4gICAgICAgIHRoaXMuX3RpbWVBdExhc3RUaWNrID0gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNjaGVkdWxlRXZlbnQoZXY6IFNjaGVkdWxlZEV2ZW50KSB7XG4gICAgICAgIGV2LnRpY2tTY2hlZHVsZWRBdCA9IHRoaXMudGlja3M7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZXYpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHRpY2tJbnRlcnZhbEluTXMgPSAoMTAwMC9UaWNrU2VydmljZS5UaWNrSW50ZXJ2YWwpO1xuICAgICAgICBjb25zdCB0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZHQgPSB0IC0gdGhpcy5fdGltZUF0TGFzdFRpY2s7XG5cbiAgICAgICAgbGV0IG5UaWNrcyA9IE1hdGguZmxvb3IoZHQvdGlja0ludGVydmFsSW5Ncyk7XG4gICAgICAgIHdoaWxlKG5UaWNrcyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICAgICAgLS1uVGlja3M7XG4gICAgICAgICAgICB0aGlzLl90aW1lQXRMYXN0VGljayA9IHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRpY2soKSB7XG4gICAgICAgICsrdGhpcy50aWNrcztcbiAgICAgICAgaWYgKHRoaXMudGlja3MgJSA4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWluZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGV2IG9mIHRoaXMuZXZlbnRzKSB7XG4gICAgICAgICAgICBldi5vblRpY2sgJiYgZXYub25UaWNrKCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aWNrcyA+IGV2LnRpY2tTY2hlZHVsZWRBdCArIGV2Lm4pIHtcbiAgICAgICAgICAgICAgICBldi5vbkNvbXBsZXRpb24gJiYgZXYub25Db21wbGV0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50cyA9IF8uZmlsdGVyKHRoaXMuZXZlbnRzLCBldiA9PiB0aGlzLnRpY2tzIDw9IGV2LnRpY2tTY2hlZHVsZWRBdCArIGV2Lm4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTWluZXJzKCkge1xuICAgICAgICBmb3IobGV0IHAgb2YgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzKSB7XG4gICAgICAgICAgICBmb3IobGV0IHMgb2YgcC5zdGF0aWNFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChzLnR5cGUgPT0gU3RhdGljRW50aXRpZXMuTWluaW5nU3RhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkciA9IE1hdGgubWluKHAucmVzb3VyY2VzLCBNYXRoLm1heCh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ2FwIC0gdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNvdW50LCAwKSwgNTApO1xuICAgICAgICAgICAgICAgICAgICBwLnJlc291cmNlcyAtPSBkcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNvdW50ICs9IGRyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZWRFdmVudCB7XG4gICAgdGlja1NjaGVkdWxlZEF0OiBudW1iZXI7XG4gICAgbjogbnVtYmVyO1xuICAgIG9uQ29tcGxldGlvbjogYW55O1xuICAgIG9uVGljazogYW55O1xufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('game/transient-entity',["require", "exports", "./entity", "./utils", "./rng", "lodash"], function (require, exports, entity_1, utils_1, rng_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TransientEntity = (function (_super) {
        __extends(TransientEntity, _super);
        function TransientEntity(type, metadata) {
            var _this = _super.call(this) || this;
            _this.distanceFromOrbitingPlanet = 250 + rng_1.Rng.rnd(-5, 5);
            _this.distanceFromOrbitingPlanetWhileAttacking = 290 + rng_1.Rng.rnd(-5, 5);
            _this.x = 0;
            _this.y = 0;
            _this.positionOnObirt = rng_1.Rng.rnd(0, 2 * Math.PI);
            _this.orbitDirection = rng_1.Rng.rnd(0, 100) < 50 ? 1 : -1;
            _this.orbitSpeed = 1.5 + rng_1.Rng.rnd(-0.5, 0.5);
            _this.movementSpeed = 300;
            _this.markedForMovement = false;
            _this.lastFireAt = Date.now();
            _this.type = type;
            _this.health = metadata.health;
            _this.definition = metadata;
            return _this;
        }
        TransientEntity.prototype.update = function (deltaT, otherEntities) {
            if (this.state == TransientEntityState.Orbiting || this.state == TransientEntityState.Attacking) {
                this.updateOrbit(deltaT, otherEntities);
            }
            if (this.state == TransientEntityState.Moving) {
                this.updateMoving(deltaT, otherEntities);
            }
            if (this.health <= 0) {
                this.dead = true;
            }
        };
        TransientEntity.prototype.updateMoving = function (deltaT, otherEntities) {
            var angleToPlanet = Math.atan2(this.y - this.orbitingPlanet.y, this.x - this.orbitingPlanet.x);
            this.x -= Math.cos(angleToPlanet) * this.movementSpeed * deltaT;
            this.y -= Math.sin(angleToPlanet) * this.movementSpeed * deltaT;
            var distToPlanet = utils_1.Utils.dist(this.x, this.y, this.orbitingPlanet.x, this.orbitingPlanet.y);
            if (!this.isHostileTo(this.orbitingPlanet, otherEntities)) {
                if (distToPlanet <= this.distanceFromOrbitingPlanet + this.orbitingPlanet.radius) {
                    this.positionOnObirt = angleToPlanet;
                    this.onEnterPlanet && this.onEnterPlanet(this.orbitingPlanet);
                    this.state = TransientEntityState.Orbiting;
                }
            }
            else {
                if (distToPlanet <= this.distanceFromOrbitingPlanetWhileAttacking + this.orbitingPlanet.radius) {
                    this.positionOnObirt = angleToPlanet;
                    this.state = TransientEntityState.Attacking;
                }
            }
        };
        TransientEntity.prototype.isHostileTo = function (p, entities) {
            var _this = this;
            return _.some(entities, function (e) { return e.orbitingPlanet.id == p.id && e.faction != _this.faction; });
        };
        TransientEntity.prototype.updateOrbit = function (deltaT, otherEntities) {
            var _this = this;
            var t = Date.now();
            this.positionOnObirt += this.orbitDirection * this.orbitSpeed * deltaT;
            var distFromPlanet = this.state == TransientEntityState.Orbiting ? this.distanceFromOrbitingPlanet : this.distanceFromOrbitingPlanetWhileAttacking;
            this.x = this.orbitingPlanet.x + (Math.cos(this.positionOnObirt) * distFromPlanet) + this.orbitingPlanet.radius;
            this.y = this.orbitingPlanet.y + (Math.sin(this.positionOnObirt) * distFromPlanet) + this.orbitingPlanet.radius;
            var enemies = _.orderBy(_.filter(otherEntities, function (e) { return e.orbitingPlanet.id == _this.orbitingPlanet.id && e.faction != _this.faction && e.state != TransientEntityState.Moving; }), function (e) { return utils_1.Utils.dist(_this.x, _this.y, e.x, e.y); });
            if (this.state == TransientEntityState.Orbiting && enemies.length == 0)
                return;
            if (enemies.length == 0) {
                this.state = TransientEntityState.Moving;
            }
            else {
                if (t - this.lastFireAt >= this.definition.fireRate) {
                    this.lastFireAt = t;
                    enemies[0].health -= 10;
                }
            }
        };
        return TransientEntity;
    }(entity_1.Entity));
    exports.TransientEntity = TransientEntity;
    var TransientEntityState;
    (function (TransientEntityState) {
        TransientEntityState[TransientEntityState["Orbiting"] = 1] = "Orbiting";
        TransientEntityState[TransientEntityState["Moving"] = 2] = "Moving";
        TransientEntityState[TransientEntityState["Attacking"] = 3] = "Attacking";
    })(TransientEntityState = exports.TransientEntityState || (exports.TransientEntityState = {}));
    var TransientEntities;
    (function (TransientEntities) {
        TransientEntities[TransientEntities["SettlementShip"] = 1] = "SettlementShip";
        TransientEntities[TransientEntities["Drone"] = 2] = "Drone";
        TransientEntities[TransientEntities["EnemyDrone"] = 3] = "EnemyDrone";
    })(TransientEntities = exports.TransientEntities || (exports.TransientEntities = {}));
    var TransientEntityFaction;
    (function (TransientEntityFaction) {
        TransientEntityFaction[TransientEntityFaction["Player"] = 1] = "Player";
        TransientEntityFaction[TransientEntityFaction["Enemy"] = 2] = "Enemy";
    })(TransientEntityFaction = exports.TransientEntityFaction || (exports.TransientEntityFaction = {}));
    var TransientEntityMetadata = {};
    exports.TransientEntityMetadata = TransientEntityMetadata;
    TransientEntityMetadata[TransientEntities.SettlementShip] = {
        name: "Settlement Ship",
        health: 100,
        cost: 50,
        buildTime: 40,
        fireRate: 1700,
    };
    TransientEntityMetadata[TransientEntities.Drone] = {
        name: "Drone",
        health: 100,
        cost: 50,
        buildTime: 12,
        fireRate: 1000
    };
    TransientEntityMetadata[TransientEntities.EnemyDrone] = {
        name: "Enemy Drone",
        health: 70,
        cost: 0,
        buildTime: 0,
        fireRate: 1200
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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YixDQUFDLEVBSFcsc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFHakM7SUFVRCxJQUFNLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztJQTBCMUIsMERBQXVCO0lBeEJoQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsR0FBRztRQUN4RCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUM7SUFFRix1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRztRQUMvQyxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxHQUFHO1FBQ1gsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUM7SUFFRix1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsR0FBRztRQUNwRCxJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQixDQUFDIiwiZmlsZSI6ImdhbWUvdHJhbnNpZW50LWVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgUm5nIH0gZnJvbSBcIi4vcm5nXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpZW50RW50aXR5IGV4dGVuZHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ6IG51bWJlciA9IDI1MCArIFJuZy5ybmQoLTUsIDUpO1xuICAgIHB1YmxpYyBkaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldFdoaWxlQXR0YWNraW5nOiBudW1iZXIgPSAyOTAgKyBSbmcucm5kKC01LCA1KTtcbiAgICBwdWJsaWMgdHlwZTogVHJhbnNpZW50RW50aXRpZXM7XG4gICAgcHVibGljIGRlZmluaXRpb246IFRyYW5zaWVudEVudGl0eURlZmluaXRpb247XG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGRlYWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHBvc2l0aW9uT25PYmlydDogbnVtYmVyID0gUm5nLnJuZCgwLCAyICogTWF0aC5QSSk7XG4gICAgcHVibGljIG9yYml0RGlyZWN0aW9uOiBudW1iZXIgPSBSbmcucm5kKDAsIDEwMCkgPCA1MCA/IDEgOiAtMTtcbiAgICBwdWJsaWMgb3JiaXRTcGVlZDogbnVtYmVyID0gMS41ICsgUm5nLnJuZCgtMC41LCAwLjUpO1xuICAgIHB1YmxpYyBtb3ZlbWVudFNwZWVkOiBudW1iZXIgPSAzMDA7XG4gICAgcHVibGljIHN0YXRlOiBUcmFuc2llbnRFbnRpdHlTdGF0ZTtcbiAgICBwdWJsaWMgb3JiaXRpbmdQbGFuZXQ6IFBsYW5ldEVudGl0eTtcbiAgICBwdWJsaWMgbWFya2VkRm9yTW92ZW1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZmFjdGlvbjogVHJhbnNpZW50RW50aXR5RmFjdGlvbjtcbiAgICBwdWJsaWMgb25FbnRlclBsYW5ldDogYW55O1xuICAgIHB1YmxpYyBsYXN0RmlyZUF0OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogVHJhbnNpZW50RW50aXRpZXMsIG1ldGFkYXRhOiBUcmFuc2llbnRFbnRpdHlEZWZpbml0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gbWV0YWRhdGEuaGVhbHRoO1xuICAgICAgICB0aGlzLmRlZmluaXRpb24gPSBtZXRhZGF0YTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YVQ6IG51bWJlciwgb3RoZXJFbnRpdGllczogVHJhbnNpZW50RW50aXR5W10pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmcgfHwgdGhpcy5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5BdHRhY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3JiaXQoZGVsdGFULCBvdGhlckVudGl0aWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb3ZpbmcoZGVsdGFULCBvdGhlckVudGl0aWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVNb3ZpbmcoZGVsdGFUOiBudW1iZXIsIG90aGVyRW50aXRpZXM6IFRyYW5zaWVudEVudGl0eVtdKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlVG9QbGFuZXQgPSBNYXRoLmF0YW4yKHRoaXMueSAtIHRoaXMub3JiaXRpbmdQbGFuZXQueSwgdGhpcy54IC0gdGhpcy5vcmJpdGluZ1BsYW5ldC54KTtcbiAgICAgICAgdGhpcy54IC09IE1hdGguY29zKGFuZ2xlVG9QbGFuZXQpICogdGhpcy5tb3ZlbWVudFNwZWVkICogZGVsdGFUO1xuICAgICAgICB0aGlzLnkgLT0gTWF0aC5zaW4oYW5nbGVUb1BsYW5ldCkgKiB0aGlzLm1vdmVtZW50U3BlZWQgKiBkZWx0YVQ7XG5cbiAgICAgICAgY29uc3QgZGlzdFRvUGxhbmV0ID0gVXRpbHMuZGlzdCh0aGlzLngsIHRoaXMueSwgdGhpcy5vcmJpdGluZ1BsYW5ldC54LCB0aGlzLm9yYml0aW5nUGxhbmV0LnkpO1xuICAgICAgICBpZiAoIXRoaXMuaXNIb3N0aWxlVG8odGhpcy5vcmJpdGluZ1BsYW5ldCwgb3RoZXJFbnRpdGllcykpIHtcbiAgICAgICAgICAgIGlmIChkaXN0VG9QbGFuZXQgPD0gdGhpcy5kaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCArIHRoaXMub3JiaXRpbmdQbGFuZXQucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk9uT2JpcnQgPSBhbmdsZVRvUGxhbmV0O1xuICAgICAgICAgICAgICAgIHRoaXMub25FbnRlclBsYW5ldCAmJiB0aGlzLm9uRW50ZXJQbGFuZXQodGhpcy5vcmJpdGluZ1BsYW5ldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFRyYW5zaWVudEVudGl0eVN0YXRlLk9yYml0aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpc3RUb1BsYW5ldCA8PSB0aGlzLmRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0V2hpbGVBdHRhY2tpbmcgKyB0aGlzLm9yYml0aW5nUGxhbmV0LnJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25Pbk9iaXJ0ID0gYW5nbGVUb1BsYW5ldDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gVHJhbnNpZW50RW50aXR5U3RhdGUuQXR0YWNraW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGlzSG9zdGlsZVRvKHA6IFBsYW5ldEVudGl0eSwgZW50aXRpZXM6IFRyYW5zaWVudEVudGl0eVtdKSB7XG4gICAgICAgIHJldHVybiBfLnNvbWUoZW50aXRpZXMsIGUgPT4gZS5vcmJpdGluZ1BsYW5ldC5pZCA9PSBwLmlkICYmIGUuZmFjdGlvbiAhPSB0aGlzLmZhY3Rpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlT3JiaXQoZGVsdGFUOiBudW1iZXIsIG90aGVyRW50aXRpZXM6IFRyYW5zaWVudEVudGl0eVtdKSB7XG4gICAgICAgIGNvbnN0IHQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uT25PYmlydCArPSB0aGlzLm9yYml0RGlyZWN0aW9uICogdGhpcy5vcmJpdFNwZWVkICogZGVsdGFUO1xuXG4gICAgICAgIGNvbnN0IGRpc3RGcm9tUGxhbmV0ID0gdGhpcy5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZyA/IHRoaXMuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQgOiB0aGlzLmRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0V2hpbGVBdHRhY2tpbmc7XG4gICAgICAgIHRoaXMueCA9IHRoaXMub3JiaXRpbmdQbGFuZXQueCArIChNYXRoLmNvcyh0aGlzLnBvc2l0aW9uT25PYmlydCkgKiBkaXN0RnJvbVBsYW5ldCkgKyB0aGlzLm9yYml0aW5nUGxhbmV0LnJhZGl1cztcbiAgICAgICAgdGhpcy55ID0gdGhpcy5vcmJpdGluZ1BsYW5ldC55ICsgKE1hdGguc2luKHRoaXMucG9zaXRpb25Pbk9iaXJ0KSAqIGRpc3RGcm9tUGxhbmV0KSArIHRoaXMub3JiaXRpbmdQbGFuZXQucmFkaXVzO1xuXG4gICAgICAgIGNvbnN0IGVuZW1pZXMgPSBfLm9yZGVyQnkoXy5maWx0ZXIob3RoZXJFbnRpdGllcywgZSA9PiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHRoaXMub3JiaXRpbmdQbGFuZXQuaWQgJiYgZS5mYWN0aW9uICE9IHRoaXMuZmFjdGlvbiAmJiBlLnN0YXRlICE9IFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZyksIGUgPT4gVXRpbHMuZGlzdCh0aGlzLngsIHRoaXMueSwgZS54LCBlLnkpKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZyAmJiBlbmVtaWVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChlbmVtaWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gVHJhbnNpZW50RW50aXR5U3RhdGUuTW92aW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHQgLSB0aGlzLmxhc3RGaXJlQXQgPj0gdGhpcy5kZWZpbml0aW9uLmZpcmVSYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RmlyZUF0ID0gdDtcbiAgICAgICAgICAgICAgICBlbmVtaWVzWzBdLmhlYWx0aCAtPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gVHJhbnNpZW50RW50aXR5U3RhdGUge1xuICAgIE9yYml0aW5nID0gMSxcbiAgICBNb3ZpbmcgPSAyLFxuICAgIEF0dGFja2luZyA9IDNcbn1cblxuZXhwb3J0IGVudW0gVHJhbnNpZW50RW50aXRpZXMge1xuICAgIFNldHRsZW1lbnRTaGlwID0gMSxcbiAgICBEcm9uZSA9IDIsXG4gICAgRW5lbXlEcm9uZSA9IDNcbn1cblxuZXhwb3J0IGVudW0gVHJhbnNpZW50RW50aXR5RmFjdGlvbiB7XG4gICAgUGxheWVyID0gMSxcbiAgICBFbmVteSA9IDJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2llbnRFbnRpdHlEZWZpbml0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY29zdDogbnVtYmVyO1xuICAgIGhlYWx0aDogbnVtYmVyO1xuICAgIGJ1aWxkVGltZTogbnVtYmVyO1xuICAgIGZpcmVSYXRlOiBudW1iZXI7XG59XG5cbmNvbnN0IFRyYW5zaWVudEVudGl0eU1ldGFkYXRhID0ge307XG5cblRyYW5zaWVudEVudGl0eU1ldGFkYXRhW1RyYW5zaWVudEVudGl0aWVzLlNldHRsZW1lbnRTaGlwXSA9IHtcbiAgICBuYW1lOiBcIlNldHRsZW1lbnQgU2hpcFwiLFxuICAgIGhlYWx0aDogMTAwLFxuICAgIGNvc3Q6IDUwLFxuICAgIGJ1aWxkVGltZTogNDAsXG4gICAgZmlyZVJhdGU6IDE3MDAsXG59O1xuXG5UcmFuc2llbnRFbnRpdHlNZXRhZGF0YVtUcmFuc2llbnRFbnRpdGllcy5Ecm9uZV0gPSB7XG4gICAgbmFtZTogXCJEcm9uZVwiLFxuICAgIGhlYWx0aDogMTAwLFxuICAgIGNvc3Q6IDUwLFxuICAgIGJ1aWxkVGltZTogMTIsXG4gICAgZmlyZVJhdGU6IDEwMDBcbn07XG5cblRyYW5zaWVudEVudGl0eU1ldGFkYXRhW1RyYW5zaWVudEVudGl0aWVzLkVuZW15RHJvbmVdID0ge1xuICAgIG5hbWU6IFwiRW5lbXkgRHJvbmVcIixcbiAgICBoZWFsdGg6IDcwLFxuICAgIGNvc3Q6IDAsXG4gICAgYnVpbGRUaW1lOiAwLFxuICAgIGZpcmVSYXRlOiAxMjAwXG59O1xuXG5leHBvcnQgeyBUcmFuc2llbnRFbnRpdHlNZXRhZGF0YSB9Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/ui.service',["require", "exports", "./transient-entity", "aurelia-framework", "./game-state.service", "lodash"], function (require, exports, transient_entity_1, aurelia_framework_1, game_state_service_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UiService = (function () {
        function UiService(_gameStateService) {
            this._gameStateService = _gameStateService;
            this.state = ContextUiStates.None;
        }
        UiService.prototype.deselectCurrent = function () {
            !!this.selectedPlanet && (this.selectedPlanet.selected = false);
            !!this.selectedStaticEntity && (this.selectedStaticEntity.selected = false);
        };
        UiService.prototype.moveUnits = function () {
            if (!_.some(this._gameStateService.state.transientEntities, function (e) { return e.markedForMovement; }))
                return;
            this.deselectCurrent();
            this.state = ContextUiStates.SelectingPlanetForMovement;
        };
        UiService.prototype.selectPlanet = function (p) {
            if (this.state == ContextUiStates.SelectingPlanetForMovement) {
                for (var _i = 0, _a = this._gameStateService.state.transientEntities; _i < _a.length; _i++) {
                    var e = _a[_i];
                    if (e.markedForMovement) {
                        e.markedForMovement = false;
                        e.orbitingPlanet = p;
                        e.state = transient_entity_1.TransientEntityState.Moving;
                    }
                }
                this.state = ContextUiStates.None;
            }
            else {
                this.deselectCurrent();
                p.selected = true;
                this.selectedPlanet = p;
                this.state = ContextUiStates.Planet;
            }
        };
        UiService.prototype.selectStaticEntity = function (e) {
            if (this.state == ContextUiStates.SelectingPlanetForMovement)
                return;
            this.deselectCurrent();
            e.selected = true;
            this.selectedStaticEntity = e;
            this.state = ContextUiStates.StaticEntity;
        };
        return UiService;
    }());
    UiService = __decorate([
        aurelia_framework_1.inject(game_state_service_1.GameStateService),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService])
    ], UiService);
    exports.UiService = UiService;
    var ContextUiStates;
    (function (ContextUiStates) {
        ContextUiStates[ContextUiStates["None"] = 1] = "None";
        ContextUiStates[ContextUiStates["Planet"] = 2] = "Planet";
        ContextUiStates[ContextUiStates["StaticEntity"] = 3] = "StaticEntity";
        ContextUiStates[ContextUiStates["SelectingPlanetForMovement"] = 4] = "SelectingPlanetForMovement";
    })(ContextUiStates = exports.ContextUiStates || (exports.ContextUiStates = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFnQixDQUFBO1FBQ2hCLGlHQUE4QixDQUFBO0lBQ2xDLENBQUMsRUFMVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUsxQiIsImZpbGUiOiJnYW1lL3VpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2llbnRFbnRpdHlTdGF0ZSB9IGZyb20gJy4vdHJhbnNpZW50LWVudGl0eSc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFBsYW5ldEVudGl0eSB9IGZyb20gXCIuL3BsYW5ldC1lbnRpdHlcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0eSB9IGZyb20gXCIuL3N0YXRpYy1lbnRpdHlcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9nYW1lLXN0YXRlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AaW5qZWN0KEdhbWVTdGF0ZVNlcnZpY2UpXG5leHBvcnQgY2xhc3MgVWlTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRQbGFuZXQ6IFBsYW5ldEVudGl0eTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRTdGF0aWNFbnRpdHk6IFN0YXRpY0VudGl0eTtcbiAgICBwdWJsaWMgc3RhdGU6IENvbnRleHRVaVN0YXRlcyA9IENvbnRleHRVaVN0YXRlcy5Ob25lO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2FtZVN0YXRlU2VydmljZTogR2FtZVN0YXRlU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXNlbGVjdEN1cnJlbnQoKSB7XG4gICAgICAgICEhdGhpcy5zZWxlY3RlZFBsYW5ldCAmJiAodGhpcy5zZWxlY3RlZFBsYW5ldC5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICAgICAgISF0aGlzLnNlbGVjdGVkU3RhdGljRW50aXR5ICYmICh0aGlzLnNlbGVjdGVkU3RhdGljRW50aXR5LnNlbGVjdGVkID0gZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlVW5pdHMoKSB7XG4gICAgICAgIGlmICghXy5zb21lKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIGUgPT4gZS5tYXJrZWRGb3JNb3ZlbWVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZGVzZWxlY3RDdXJyZW50KCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb250ZXh0VWlTdGF0ZXMuU2VsZWN0aW5nUGxhbmV0Rm9yTW92ZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdFBsYW5ldChwOiBQbGFuZXRFbnRpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gQ29udGV4dFVpU3RhdGVzLlNlbGVjdGluZ1BsYW5ldEZvck1vdmVtZW50KSB7XG4gICAgICAgICAgICBmb3IobGV0IGUgb2YgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChlLm1hcmtlZEZvck1vdmVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGUubWFya2VkRm9yTW92ZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZS5vcmJpdGluZ1BsYW5ldCA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5Nb3Zpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnRleHRVaVN0YXRlcy5Ob25lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdEN1cnJlbnQoKTtcbiAgICAgICAgICAgIHAuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBsYW5ldCA9IHA7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ29udGV4dFVpU3RhdGVzLlBsYW5ldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RTdGF0aWNFbnRpdHkoZTogU3RhdGljRW50aXR5KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IENvbnRleHRVaVN0YXRlcy5TZWxlY3RpbmdQbGFuZXRGb3JNb3ZlbWVudClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLmRlc2VsZWN0Q3VycmVudCgpO1xuICAgICAgICBlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXRpY0VudGl0eSA9IGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb250ZXh0VWlTdGF0ZXMuU3RhdGljRW50aXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gQ29udGV4dFVpU3RhdGVzIHtcbiAgICBOb25lID0gMSxcbiAgICBQbGFuZXQgPSAyLFxuICAgIFN0YXRpY0VudGl0eSA9IDMsXG4gICAgU2VsZWN0aW5nUGxhbmV0Rm9yTW92ZW1lbnQgPSA0XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('game/utils',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = (function () {
        function Utils() {
        }
        Utils.dist = function (x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        };
        Utils.guid = function () {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
        Utils.deg2rad = function (rad) {
            return (180 * rad) / Math.PI;
        };
        return Utils;
    }());
    exports.Utils = Utils;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQW1CQSxDQUFDO1FBbEJpQixVQUFJLEdBQWxCLFVBQW1CLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7WUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFYSxVQUFJLEdBQWxCO1lBQ0k7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO3FCQUMzQyxRQUFRLENBQUMsRUFBRSxDQUFDO3FCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBRUQsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRztnQkFDOUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFFYSxhQUFPLEdBQXJCLFVBQXNCLEdBQVc7WUFDN0IsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQW5CQSxBQW1CQyxJQUFBO0lBbkJZLHNCQUFLIiwiZmlsZSI6ImdhbWUvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXRpbHMge1xuICAgIHB1YmxpYyBzdGF0aWMgZGlzdCh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4MiAtIHgxLCAyKSArIE1hdGgucG93KHkyIC0geTEsIDIpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGd1aWQoKTogc3RyaW5nIHtcbiAgICAgICAgZnVuY3Rpb24gczQoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICtcbiAgICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZWcycmFkKHJhZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICgxODAgKiByYWQpIC8gTWF0aC5QSTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
define('game/planet/planet',["require", "exports", "aurelia-framework", "../planet-entity", "../ui.service"], function (require, exports, aurelia_framework_1, planet_entity_1, ui_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Planet = (function () {
        function Planet(_uiService) {
            this._uiService = _uiService;
        }
        Planet.prototype.selectPlanet = function () {
            this._uiService.selectPlanet(this.planet);
        };
        Planet.prototype.selectStaticEntity = function (e) {
            this._uiService.selectStaticEntity(e);
        };
        Planet.prototype.getStaticEntityX = function (entity) {
            return (entity.distanceFromPlanet + (entity.size / 2)) * Math.cos(entity.positionOnOrbit);
        };
        Planet.prototype.getStaticEntityY = function (entity) {
            return (entity.distanceFromPlanet + (entity.size / 2)) * Math.sin(entity.positionOnOrbit);
        };
        return Planet;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", planet_entity_1.PlanetEntity)
    ], Planet.prototype, "planet", void 0);
    Planet = __decorate([
        aurelia_framework_1.inject(ui_service_1.UiService),
        __metadata("design:paramtypes", [ui_service_1.UiService])
    ], Planet);
    exports.Planet = Planet;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvcGxhbmV0L3BsYW5ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQSxJQUFhLE1BQU07UUFHZixnQkFBb0IsVUFBcUI7WUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUN6QyxDQUFDO1FBRU0sNkJBQVksR0FBbkI7WUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVNLG1DQUFrQixHQUF6QixVQUEwQixDQUFlO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVNLGlDQUFnQixHQUF2QixVQUF3QixNQUFvQjtZQUN4QyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUYsQ0FBQztRQUVNLGlDQUFnQixHQUF2QixVQUF3QixNQUFvQjtZQUN4QyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUYsQ0FBQztRQUNMLGFBQUM7SUFBRCxDQXJCQSxBQXFCQyxJQUFBO0lBcEJhO1FBQVQsNEJBQVE7a0NBQWdCLDRCQUFZOzBDQUFDO0lBRDdCLE1BQU07UUFEbEIsMEJBQU0sQ0FBQyxzQkFBUyxDQUFDO3lDQUlrQixzQkFBUztPQUhoQyxNQUFNLENBcUJsQjtJQXJCWSx3QkFBTSIsImZpbGUiOiJnYW1lL3BsYW5ldC9wbGFuZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgVWlTZXJ2aWNlIH0gZnJvbSBcIi4uL3VpLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0eSB9IGZyb20gXCIuLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5AaW5qZWN0KFVpU2VydmljZSlcbmV4cG9ydCBjbGFzcyBQbGFuZXQge1xuICAgIEBiaW5kYWJsZSBwdWJsaWMgcGxhbmV0OiBQbGFuZXRFbnRpdHk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91aVNlcnZpY2U6IFVpU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RQbGFuZXQoKSB7XG4gICAgICAgIHRoaXMuX3VpU2VydmljZS5zZWxlY3RQbGFuZXQodGhpcy5wbGFuZXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RTdGF0aWNFbnRpdHkoZTogU3RhdGljRW50aXR5KSB7XG4gICAgICAgIHRoaXMuX3VpU2VydmljZS5zZWxlY3RTdGF0aWNFbnRpdHkoZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXRpY0VudGl0eVgoZW50aXR5OiBTdGF0aWNFbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIChlbnRpdHkuZGlzdGFuY2VGcm9tUGxhbmV0ICsgKGVudGl0eS5zaXplLzIpKSAqIE1hdGguY29zKGVudGl0eS5wb3NpdGlvbk9uT3JiaXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTdGF0aWNFbnRpdHlZKGVudGl0eTogU3RhdGljRW50aXR5KSB7XG4gICAgICAgIHJldHVybiAoZW50aXR5LmRpc3RhbmNlRnJvbVBsYW5ldCArIChlbnRpdHkuc2l6ZS8yKSkgKiBNYXRoLnNpbihlbnRpdHkucG9zaXRpb25Pbk9yYml0KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/transient/transient',["require", "exports", "aurelia-framework", "../transient-entity"], function (require, exports, aurelia_framework_1, transient_entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Transient = (function () {
        function Transient() {
        }
        return Transient;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", transient_entity_1.TransientEntity)
    ], Transient.prototype, "entity", void 0);
    exports.Transient = Transient;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvdHJhbnNpZW50L3RyYW5zaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFHQTtRQUFBO1FBRUEsQ0FBQztRQUFELGdCQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFEYTtRQUFULDRCQUFRO2tDQUFnQixrQ0FBZTs2Q0FBQztJQURoQyw4QkFBUyIsImZpbGUiOiJnYW1lL3RyYW5zaWVudC90cmFuc2llbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5IH0gZnJvbSBcIi4uL3RyYW5zaWVudC1lbnRpdHlcIjtcblxuZXhwb3J0IGNsYXNzIFRyYW5zaWVudCB7XG4gICAgQGJpbmRhYmxlIHB1YmxpYyBlbnRpdHk6IFRyYW5zaWVudEVudGl0eTtcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/graphics.service',["require", "exports", "aurelia-framework", "./event.service"], function (require, exports, aurelia_framework_1, event_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphicsService = (function () {
        function GraphicsService(_eventService) {
            this._eventService = _eventService;
        }
        return GraphicsService;
    }());
    GraphicsService = __decorate([
        aurelia_framework_1.inject(event_service_1.EventService),
        __metadata("design:paramtypes", [event_service_1.EventService])
    ], GraphicsService);
    exports.GraphicsService = GraphicsService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ3JhcGhpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLGVBQWU7UUFDeEIseUJBQW9CLGFBQTJCO1lBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQUcsQ0FBQztRQUN2RCxzQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksZUFBZTtRQUQzQiwwQkFBTSxDQUFDLDRCQUFZLENBQUM7eUNBRWtCLDRCQUFZO09BRHRDLGVBQWUsQ0FFM0I7SUFGWSwwQ0FBZSIsImZpbGUiOiJnYW1lL2dyYXBoaWNzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSwgRXZlbnRUeXBlcyB9IGZyb20gXCIuL2V2ZW50LnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgUElYSTogYW55O1xuXG5AaW5qZWN0KEV2ZW50U2VydmljZSlcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlKSB7fVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!game/game.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet/planet\"></require>\n    <require from=\"./transient/transient\"></require>\n    <require from=\"./game.css\"></require>\n\n    <canvas id=\"foreground-canvas\"></canvas>\n\n    <div id=\"top-bar\">\n        <p>Resources: ${gameState.resourceCount} / ${gameState.resourceCap & signal:'constructBuilt'}</p>\n    </div>\n\n    <div id=\"space\">\n        <div id=\"pannable\" css=\"transform: translate3d(${-camera.panX}px, ${-camera.panY}px, 0);\">\n            <div repeat.for=\"planet of visiblePlanets\">\n                <planet planet.bind=\"planet\"></planet>\n            </div>\n            <div repeat.for=\"transient of visibleTransients\">\n                <transient entity.bind=\"transient\"></transient>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"context-menu\">\n        <div if.bind=\"uiService.state == 2\">\n            <div if.bind=\"selectedPlanet.settled\">\n                <button click.delegate=\"buildStaticEntity(1)\">Mining Station</button>\n                <button click.delegate=\"buildStaticEntity(5)\">Factory</button>\n                <button click.delegate=\"buildStaticEntity(6)\">Stockpile</button>\n            </div>\n            <div>\n                <div repeat.for=\"e of entitiesOrbitingPlanet\"\n                     class=\"ship-icon ${e.markedForMovement ? 'selected' : ''}\"\n                     click.delegate=\"markShipForMovement(e)\">${e.positionOnOrbit}</div>\n            </div>\n            <div>\n                <button click.delegate=\"uiService.moveUnits()\">Move</button>\n            </div>\n            <div if.bind=\"!selectedPlanet.settled && !!orbitingCommandCenter\">\n                <button click.delegate=\"settlePlanet()\">Settle</button>\n            </div>\n        </div>\n        <div if.bind=\"uiService.state == 3\">\n            <h4>Level: ${uiService.selectedStaticEntity.level}</h4>\n            <div if.bind=\"uiService.selectedStaticEntity.type == 5\">\n                <button click.delegate=\"buildTransientEntity(2)\">Build Drone</button>\n                <div if.bind=\"uiService.selectedStaticEntity.level >= 2\">\n                    <button click.delegate=\"buildTransientEntity(1)\">Build Settlement Ship</button>\n                </div>\n            </div>\n            <div if.bind=\"uiService.selectedStaticEntity.level < uiService.selectedStaticEntity.metadata.maxUpgradeLevel\">\n                <button click.delegate=\"upgrade(uiService.selectedStaticEntity)\">Upgrade</div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"static-logs\">\n        <p repeat.for=\"log of logService.staticLogs\">${log.text}</p>\n    </div>\n</template>"; });
define('text!game/game.css', ['module'], function(module) { module.exports = "body, html {\n  margin: 0;\n  padding: 0; }\n\n#foreground-canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; }\n\n#space {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100; }\n\n#context-menu {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 150px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 200; }\n\n#top-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  z-index: 200;\n  background: rgba(0, 0, 0, 0.5);\n  color: white; }\n\n.ship-icon {\n  width: 30px;\n  height: 30px;\n  border: 2px solid black;\n  display: inline-block;\n  margin: 5px; }\n  .ship-icon.selected {\n    background: cyan; }\n\n#static-logs {\n  position: fixed;\n  top: 60px;\n  right: 20px;\n  width: 300px;\n  z-index: 300;\n  text-align: right; }\n  #static-logs p {\n    font-size: 14px;\n    margin: 0;\n    margin-bottom: 10px; }\n"; });
define('text!game/planet/planet.css', ['module'], function(module) { module.exports = ".planet * {\n  position: absolute; }\n\n.planet-sprite {\n  border-radius: 100%;\n  background: red;\n  width: 80px;\n  height: 80px; }\n  .planet-sprite.settled {\n    border: 5px solid yellow; }\n\n.selected {\n  box-shadow: 0px 0px 30px 0px black; }\n\n.static-entity-sprite {\n  border-radius: 100%;\n  background: blue;\n  width: 60px;\n  height: 60px; }\n"; });
define('text!game/planet/planet.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet.css\"></require>\n\n    <div class=\"planet\" css=\"transform: translate3d(${planet.x}px, ${planet.y}px, 0);\" >\n        <div class=\"planet-sprite ${planet.selected ? 'selected': ''} ${planet.settled ? 'settled': ''}\"\n             click.delegate=\"selectPlanet()\"\n             css=\"width: ${planet.radius*2}px; height: ${planet.radius*2}px\">\n             <h2>${planet.resources}</h2>\n        </div>\n        <div repeat.for=\"entity of planet.staticEntities\"\n             class=\"static-entity\"\n             click.delegate=\"selectStaticEntity(entity)\"\n             css=\"left: ${-(entity.distanceFromPlanet + (entity.size/2))}px;\n                  top: ${-(entity.distanceFromPlanet + (entity.size/2))}px;\n                  transform-origin: ${entity.distanceFromPlanet + planet.radius + (entity.size/2)}px ${entity.distanceFromPlanet + planet.radius + (entity.size/2)}px;\n                  transform: rotate(${entity.positionOnOrbit}deg);\">\n            <div class=\"static-entity-sprite ${entity.selected ? 'selected': ''}\" ></div>\n        </div>\n    </div>\n</template"; });
define('text!game/transient/transient.css', ['module'], function(module) { module.exports = ".transient {\n  position: absolute; }\n\n.transient-sprite {\n  width: 10px;\n  height: 10px;\n  background: purple; }\n  .transient-sprite.enemy {\n    background: yellow;\n    border: 3px solid red; }\n"; });
define('text!game/transient/transient.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./transient.css\"></require>\n\n    <div class=\"transient\"\n         css=\"transform: translate3d(${entity.x}px, ${entity.y}px, 0);\">\n        <div class=\"transient-sprite ${entity.faction == 2 ? 'enemy' : ''}\"><h1>${entity.health}</h1></div>\n    </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map