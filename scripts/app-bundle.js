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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/camera.service',["require", "exports", "aurelia-framework", "./event.service"], function (require, exports, aurelia_framework_1, event_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CameraService = (function () {
        function CameraService(_eventService) {
            this._eventService = _eventService;
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
            this.postUpdateEvent();
        };
        CameraService.prototype.panTo = function (x, y) {
            this.panX = x - (window.innerWidth / 2);
            this.panY = y - (window.innerHeight / 2);
            this.enforceBounds();
            this.postUpdateEvent();
        };
        CameraService.prototype.center = function () {
            this.panX = ((this.maxX - this.minX) / 2) + this.minX;
            this.panY = ((this.maxY - this.minY) / 2) + this.minY;
            this.enforceBounds();
            this.postUpdateEvent();
        };
        CameraService.prototype.enforceBounds = function () {
            this.panX = Math.max(this.minX, this.panX);
            this.panX = Math.min(this.maxX - window.innerWidth, this.panX);
            this.panY = Math.max(this.minY, this.panY);
            this.panY = Math.min(this.maxY - window.innerHeight, this.panY);
        };
        CameraService.prototype.postUpdateEvent = function () {
            this._eventService.postEvent(event_service_1.EventTypes.CameraUpdate, {
                x: this.panX,
                y: this.panY
            });
        };
        return CameraService;
    }());
    CameraService = __decorate([
        aurelia_framework_1.inject(event_service_1.EventService),
        __metadata("design:paramtypes", [event_service_1.EventService])
    ], CameraService);
    exports.CameraService = CameraService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvY2FtZXJhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxhQUFhO1FBVXRCLHVCQUFvQixhQUEyQjtZQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztZQVR4QyxhQUFRLEdBQVcsRUFBRSxDQUFDO1lBRXRCLFNBQUksR0FBVyxDQUFDLENBQUM7WUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1lBQ2pCLFNBQUksR0FBVyxDQUFDLENBQUM7WUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1lBR3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUVNLDJCQUFHLEdBQVYsVUFBVyxDQUFTLEVBQUUsQ0FBUztZQUMzQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRU0sNkJBQUssR0FBWixVQUFhLENBQVMsRUFBRSxDQUFTO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRU0sOEJBQU0sR0FBYjtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFTyxxQ0FBYSxHQUFyQjtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVNLHVDQUFlLEdBQXRCO1lBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsMEJBQVUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2xELENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDWixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDZixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQWpEQSxBQWlEQyxJQUFBO0lBakRZLGFBQWE7UUFEekIsMEJBQU0sQ0FBQyw0QkFBWSxDQUFDO3lDQVdrQiw0QkFBWTtPQVZ0QyxhQUFhLENBaUR6QjtJQWpEWSxzQ0FBYSIsImZpbGUiOiJnYW1lL2NhbWVyYS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UsIEV2ZW50VHlwZXMgfSBmcm9tIFwiLi9ldmVudC5zZXJ2aWNlXCI7XG5cbkBpbmplY3QoRXZlbnRTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIENhbWVyYVNlcnZpY2Uge1xuICAgIHB1YmxpYyBwYW5TcGVlZDogbnVtYmVyID0gMTU7XG5cbiAgICBwdWJsaWMgcGFuWDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgcGFuWTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbWluWDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbWF4WDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbWluWTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgbWF4WTogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucGFuWCA9IDA7XG4gICAgICAgIHRoaXMucGFuWSA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIHBhbih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhblggKz0geCAqIHRoaXMucGFuU3BlZWQ7XG4gICAgICAgIHRoaXMucGFuWSArPSB5ICogdGhpcy5wYW5TcGVlZDtcbiAgICAgICAgdGhpcy5lbmZvcmNlQm91bmRzKCk7XG4gICAgICAgIHRoaXMucG9zdFVwZGF0ZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhblRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFuWCA9IHggLSAod2luZG93LmlubmVyV2lkdGggLyAyKTtcbiAgICAgICAgdGhpcy5wYW5ZID0geSAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcbiAgICAgICAgdGhpcy5lbmZvcmNlQm91bmRzKCk7XG4gICAgICAgIHRoaXMucG9zdFVwZGF0ZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNlbnRlcigpIHtcbiAgICAgICAgdGhpcy5wYW5YID0gKCh0aGlzLm1heFggLSB0aGlzLm1pblgpIC8gMikgKyB0aGlzLm1pblg7XG4gICAgICAgIHRoaXMucGFuWSA9ICgodGhpcy5tYXhZIC0gdGhpcy5taW5ZKSAvIDIpICsgdGhpcy5taW5ZO1xuICAgICAgICB0aGlzLmVuZm9yY2VCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5wb3N0VXBkYXRlRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZm9yY2VCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMucGFuWCA9IE1hdGgubWF4KHRoaXMubWluWCwgdGhpcy5wYW5YKTtcbiAgICAgICAgdGhpcy5wYW5YID0gTWF0aC5taW4odGhpcy5tYXhYIC0gd2luZG93LmlubmVyV2lkdGgsIHRoaXMucGFuWCk7XG4gICAgICAgIHRoaXMucGFuWSA9IE1hdGgubWF4KHRoaXMubWluWSwgdGhpcy5wYW5ZKTtcbiAgICAgICAgdGhpcy5wYW5ZID0gTWF0aC5taW4odGhpcy5tYXhZIC0gd2luZG93LmlubmVySGVpZ2h0LCB0aGlzLnBhblkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3N0VXBkYXRlRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5wb3N0RXZlbnQoRXZlbnRUeXBlcy5DYW1lcmFVcGRhdGUsIHtcbiAgICAgICAgICAgIHg6IHRoaXMucGFuWCxcbiAgICAgICAgICAgIHk6IHRoaXMucGFuWVxuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/entity-factory',["require", "exports", "aurelia-framework", "./game-state.service", "./tick.service", "./transient-entity", "./factions", "./static-entity", "aurelia-templating-resources", "./log.service", "./rng", "./event.service", "lodash"], function (require, exports, aurelia_framework_1, game_state_service_1, tick_service_1, transient_entity_1, factions_1, static_entity_1, aurelia_templating_resources_1, log_service_1, rng_1, event_service_1, _) {
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
                var nEnemiesToSpawn = 3;
                if (_this._gameStateService.state.planets.length > 5) {
                    ++nEnemiesToSpawn;
                }
                if (_this._gameStateService.state.planets.length > 7) {
                    nEnemiesToSpawn += 2;
                }
                if (_this._gameStateService.state.planets.length > 10) {
                    nEnemiesToSpawn += 3;
                }
                if (_this._gameStateService.state.planets.length > 14) {
                    nEnemiesToSpawn += 4;
                }
                if (_this._gameStateService.state.planets.length > 19) {
                    nEnemiesToSpawn += 9;
                    nEnemiesToSpawn += Math.floor(rng_1.Rng.rnd(-4, 4));
                }
                nEnemiesToSpawn += Math.floor(rng_1.Rng.rnd(-2, 2));
                for (var i = 0; i < nEnemiesToSpawn; i++) {
                    _this.spawnTransientEntity(ev.planet, transient_entity_1.TransientEntities.EnemyDrone, true);
                }
            });
            this._eventService.registerHandler(event_service_1.EventTypes.SpawnEnemyUnit, function (d) {
                for (var i = 0; i < d.unitsToAdd; i++) {
                    _this.spawnTransientEntity(d.planet, transient_entity_1.TransientEntities.EnemyDrone, true);
                }
            });
            this._eventService.registerHandler(event_service_1.EventTypes.CheatSpawnDrone, function () {
                var p = _.find(_this._gameStateService.state.planets, function (p) { return p.settled; });
                _this.spawnTransientEntity(p, transient_entity_1.TransientEntities.Drone, true);
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
                    var posStep = (2 * Math.PI) / (p.staticEntities.length);
                    for (var i = 0; i < p.staticEntities.length; i++) {
                        var e = p.staticEntities[i];
                        e.positionOnOrbit = posStep * (i + 1);
                        e.x = Math.cos(e.positionOnOrbit) * 200;
                        e.y = Math.sin(e.positionOnOrbit) * 200;
                    }
                }
            };
            this._tickService.scheduleEvent(ev);
        };
        EntityFactory.prototype.upgradeStaticEntity = function (e) {
            var _this = this;
            if (e.upgrading)
                return;
            if (e.level < e.definition.maxUpgradeLevel) {
                var staticLog_1 = {
                    text: "Upgrading " + e.definition.name + " to " + (e.level + 1) + ": 0%"
                };
                this._logService.addStaticLog(staticLog_1);
                e.upgrading = true;
                var ev_1 = {
                    n: e.definition.upgradeTime,
                    onTick: function () {
                        var percentage = (_this._tickService.ticks - ev_1.tickScheduledAt) / ev_1.n;
                        staticLog_1.text = "Upgrading " + e.definition.name + " to " + (e.level + 1) + ": " + Math.floor(percentage * 100) + "%";
                    },
                    onCompletion: function () {
                        ++e.level;
                        e.upgrading = false;
                        _this._logService.addTempLog({
                            text: "Finshed upgrading " + e.definition.name + " to level " + e.level
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
                var entity = new transient_entity_1.TransientEntity(type, this._eventService);
                entity.faction = metadata.faction;
                if (entity.faction == factions_1.Factions.Player) {
                    entity.onEnterPlanet = function (p) { return _this._gameStateService.checkIfNeedToGeneratePlanet(p); };
                }
                entity.state = transient_entity_1.TransientEntityState.Orbiting;
                entity.orbitingPlanet = p;
                entity.x = p.x;
                entity.y = p.y;
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
                        var entity = new transient_entity_1.TransientEntity(type, _this._eventService);
                        entity.faction = metadata.faction;
                        if (entity.faction == factions_1.Factions.Player) {
                            entity.onEnterPlanet = function (p) { return _this._gameStateService.checkIfNeedToGeneratePlanet(p); };
                        }
                        entity.state = transient_entity_1.TransientEntityState.Orbiting;
                        entity.orbitingPlanet = p;
                        entity.x = p.x;
                        entity.y = p.y;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZW50aXR5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBY0EsSUFBYSxhQUFhO1FBQ3RCLHVCQUFvQixpQkFBbUMsRUFBVSxTQUEwQixFQUFVLFlBQXlCLEVBQVUsV0FBdUIsRUFBVSxhQUEyQjtZQUFwTSxpQkEwQ0M7WUExQ21CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7WUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFpQjtZQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1lBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztZQUNoTSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQkFBVSxDQUFDLGtCQUFrQixFQUFFLFVBQUEsRUFBRTtnQkFDaEUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO2dCQUV4QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsRUFBRSxlQUFlLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELGVBQWUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELGVBQWUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELGVBQWUsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELGVBQWUsSUFBSSxDQUFDLENBQUM7b0JBQ3JCLGVBQWUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFFRCxlQUFlLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTlDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3RDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLG9DQUFpQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsMEJBQVUsQ0FBQyxjQUFjLEVBQUUsVUFBQSxDQUFDO2dCQUMzRCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsb0NBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQkFBVSxDQUFDLGVBQWUsRUFBRTtnQkFDM0QsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLENBQUM7Z0JBQ3ZFLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsb0NBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVNLHlDQUFpQixHQUF4QixVQUF5QixDQUFlLEVBQUUsSUFBb0I7WUFBOUQsaUJBNENDO1lBM0NHLElBQU0sUUFBUSxHQUEyQixvQ0FBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUMzRCxNQUFNLENBQUM7WUFFWCxJQUFNLE1BQU0sR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRWhDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQU07Z0JBQzdCLElBQUksRUFBRSxzQkFBb0IsUUFBUSxDQUFDLElBQU07YUFDNUMsQ0FBQyxDQUFDO1lBRUgsSUFBTSxTQUFTLEdBQVE7Z0JBQ25CLElBQUksRUFBSyxRQUFRLENBQUMsSUFBSSxTQUFNO2FBQy9CLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV6QyxJQUFNLEVBQUUsR0FBbUM7Z0JBQ3ZDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUztnQkFDckIsTUFBTSxFQUFFO29CQUNKLElBQU0sVUFBVSxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pFLFNBQVMsQ0FBQyxJQUFJLEdBQU0sUUFBUSxDQUFDLElBQUksVUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBRyxDQUFBO2dCQUN6RSxDQUFDO2dCQUNELFlBQVksRUFBRTtvQkFDVixDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBTTt3QkFDN0IsSUFBSSxFQUFFLE1BQU07cUJBQ2YsQ0FBQyxDQUFDO29CQUNILElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRTFELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDL0MsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsQ0FBQyxDQUFDLGVBQWUsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUN4QyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDNUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFTSwyQ0FBbUIsR0FBMUIsVUFBMkIsQ0FBZTtZQUExQyxpQkE4QkM7WUE3QkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDWixNQUFNLENBQUM7WUFFWCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDekMsSUFBTSxXQUFTLEdBQVE7b0JBQ25CLElBQUksRUFBRSxlQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxhQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFNO2lCQUMvRCxDQUFDO2dCQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFdBQVMsQ0FBQyxDQUFDO2dCQUV6QyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFFbkIsSUFBTSxJQUFFLEdBQW1DO29CQUN2QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXO29CQUMzQixNQUFNLEVBQUU7d0JBQ0osSUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxJQUFFLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDekUsV0FBUyxDQUFDLElBQUksR0FBRyxlQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxhQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxXQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFHLENBQUE7b0JBQ3pHLENBQUM7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDVixDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQU07NEJBQzdCLElBQUksRUFBRSx1QkFBcUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGtCQUFhLENBQUMsQ0FBQyxLQUFPO3lCQUNyRSxDQUFDLENBQUM7d0JBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsV0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNuRCxDQUFDO2lCQUNKLENBQUM7Z0JBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBRSxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUM7UUFFTSw0Q0FBb0IsR0FBM0IsVUFBNEIsQ0FBZSxFQUFFLElBQXVCLEVBQUUsT0FBZ0I7WUFBdEYsaUJBZ0RDO1lBL0NHLElBQU0sUUFBUSxHQUE4QiwwQ0FBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQU0sTUFBTSxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksbUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsYUFBYSxHQUFHLFVBQUMsQ0FBZSxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDO2dCQUN0RyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxLQUFLLEdBQUcsdUNBQW9CLENBQUMsUUFBUSxDQUFDO2dCQUM3QyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVoRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQy9ELE1BQU0sQ0FBQztnQkFFWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUU1RCxJQUFNLFdBQVMsR0FBUTtvQkFDbkIsSUFBSSxFQUFFLGNBQVksUUFBUSxDQUFDLElBQUksU0FBTTtpQkFDeEMsQ0FBQztnQkFDRixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxXQUFTLENBQUMsQ0FBQztnQkFFekMsSUFBTSxJQUFFLEdBQW1DO29CQUN2QyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVM7b0JBQ3JCLE1BQU0sRUFBRTt3QkFDSixJQUFNLFVBQVUsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN6RSxXQUFTLENBQUMsSUFBSSxHQUFHLGNBQVksUUFBUSxDQUFDLElBQUksVUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBRyxDQUFBO29CQUNsRixDQUFDO29CQUNELFlBQVksRUFBRTt3QkFDVixLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxXQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQy9DLElBQU0sTUFBTSxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUM3RCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksbUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNwQyxNQUFNLENBQUMsYUFBYSxHQUFHLFVBQUMsQ0FBZSxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDO3dCQUN0RyxDQUFDO3dCQUNELE1BQU0sQ0FBQyxLQUFLLEdBQUcsdUNBQW9CLENBQUMsUUFBUSxDQUFDO3dCQUM3QyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNmLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZixLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEUsQ0FBQztpQkFDSixDQUFDO2dCQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUUsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7UUFDTCxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQTVLQSxBQTRLQyxJQUFBO0lBNUtZLGFBQWE7UUFEekIsMEJBQU0sQ0FBQyxxQ0FBZ0IsRUFBRSw4Q0FBZSxFQUFFLDBCQUFXLEVBQUUsd0JBQVUsRUFBRSw0QkFBWSxDQUFDO3lDQUV0QyxxQ0FBZ0IsRUFBcUIsOENBQWUsRUFBd0IsMEJBQVcsRUFBdUIsd0JBQVUsRUFBeUIsNEJBQVk7T0FEM0wsYUFBYSxDQTRLekI7SUE1S1ksc0NBQWEiLCJmaWxlIjoiZ2FtZS9lbnRpdHktZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR2FtZVN0YXRlU2VydmljZSB9IGZyb20gXCIuL2dhbWUtc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgVGlja1NlcnZpY2UsIFNjaGVkdWxlZEV2ZW50IH0gZnJvbSBcIi4vdGljay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2llbnRFbnRpdHksIFRyYW5zaWVudEVudGl0aWVzLCBUcmFuc2llbnRFbnRpdHlEZWZpbml0aW9uLCBUcmFuc2llbnRFbnRpdHlNZXRhZGF0YSwgVHJhbnNpZW50RW50aXR5U3RhdGUgfSBmcm9tIFwiLi90cmFuc2llbnQtZW50aXR5XCI7XG5pbXBvcnQgeyBGYWN0aW9ucyB9IGZyb20gXCIuL2ZhY3Rpb25zXCI7XG5pbXBvcnQgeyBTdGF0aWNFbnRpdGllcywgU3RhdGljRW50aXR5LCBTdGF0aWNFbnRpdHlNZXRhZGF0YSwgU3RhdGljRW50aXR5RGVmaW5pdGlvbiB9IGZyb20gXCIuL3N0YXRpYy1lbnRpdHlcIjtcbmltcG9ydCB7IEJpbmRpbmdTaWduYWxlciB9IGZyb20gXCJhdXJlbGlhLXRlbXBsYXRpbmctcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBMb2dTZXJ2aWNlLCBMb2cgfSBmcm9tIFwiLi9sb2cuc2VydmljZVwiO1xuaW1wb3J0IHsgUm5nIH0gZnJvbSBcIi4vcm5nXCI7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UsIEV2ZW50VHlwZXMgfSBmcm9tIFwiLi9ldmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQGluamVjdChHYW1lU3RhdGVTZXJ2aWNlLCBCaW5kaW5nU2lnbmFsZXIsIFRpY2tTZXJ2aWNlLCBMb2dTZXJ2aWNlLCBFdmVudFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgRW50aXR5RmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2FtZVN0YXRlU2VydmljZTogR2FtZVN0YXRlU2VydmljZSwgcHJpdmF0ZSBfc2lnbmFsZXI6IEJpbmRpbmdTaWduYWxlciwgcHJpdmF0ZSBfdGlja1NlcnZpY2U6IFRpY2tTZXJ2aWNlLCBwcml2YXRlIF9sb2dTZXJ2aWNlOiBMb2dTZXJ2aWNlLCBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSkge1xuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKEV2ZW50VHlwZXMuRW5lbXlQbGFuZXRDcmVhdGVkLCBldiA9PiB7XG4gICAgICAgICAgICBsZXQgbkVuZW1pZXNUb1NwYXduID0gMztcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgKytuRW5lbWllc1RvU3Bhd247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMubGVuZ3RoID4gNykge1xuICAgICAgICAgICAgICAgIG5FbmVtaWVzVG9TcGF3biArPSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgbkVuZW1pZXNUb1NwYXduICs9IDM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMubGVuZ3RoID4gMTQpIHtcbiAgICAgICAgICAgICAgICBuRW5lbWllc1RvU3Bhd24gKz0gNDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cy5sZW5ndGggPiAxOSkge1xuICAgICAgICAgICAgICAgIG5FbmVtaWVzVG9TcGF3biArPSA5O1xuICAgICAgICAgICAgICAgIG5FbmVtaWVzVG9TcGF3biArPSBNYXRoLmZsb29yKFJuZy5ybmQoLTQsIDQpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbkVuZW1pZXNUb1NwYXduICs9IE1hdGguZmxvb3IoUm5nLnJuZCgtMiwgMikpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbkVuZW1pZXNUb1NwYXduOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduVHJhbnNpZW50RW50aXR5KGV2LnBsYW5ldCwgVHJhbnNpZW50RW50aXRpZXMuRW5lbXlEcm9uZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5yZWdpc3RlckhhbmRsZXIoRXZlbnRUeXBlcy5TcGF3bkVuZW15VW5pdCwgZCA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZC51bml0c1RvQWRkOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduVHJhbnNpZW50RW50aXR5KGQucGxhbmV0LCBUcmFuc2llbnRFbnRpdGllcy5FbmVteURyb25lLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihFdmVudFR5cGVzLkNoZWF0U3Bhd25Ecm9uZSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IF8uZmluZCh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMsIHAgPT4gcC5zZXR0bGVkKTtcbiAgICAgICAgICAgIHRoaXMuc3Bhd25UcmFuc2llbnRFbnRpdHkocCwgVHJhbnNpZW50RW50aXRpZXMuRHJvbmUsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3Bhd25TdGF0aWNFbnRpdHkocDogUGxhbmV0RW50aXR5LCB0eXBlOiBTdGF0aWNFbnRpdGllcykge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IDxTdGF0aWNFbnRpdHlEZWZpbml0aW9uPlN0YXRpY0VudGl0eU1ldGFkYXRhW3R5cGVdO1xuXG4gICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQgPCBtZXRhZGF0YS5jb3N0KVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBTdGF0aWNFbnRpdHkodHlwZSk7XG4gICAgICAgIGVudGl0eS5oZWFsdGggPSBtZXRhZGF0YS5oZWFsdGg7XG5cbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNvdW50IC09IG1ldGFkYXRhLmNvc3Q7XG5cbiAgICAgICAgdGhpcy5fbG9nU2VydmljZS5hZGRUZW1wTG9nKDxMb2c+e1xuICAgICAgICAgICAgdGV4dDogYFN0YXJ0ZWQgYnVpbGRpbmcgJHttZXRhZGF0YS5uYW1lfWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3RhdGljTG9nID0gPExvZz57XG4gICAgICAgICAgICB0ZXh0OiBgJHttZXRhZGF0YS5uYW1lfTogMCVgXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2xvZ1NlcnZpY2UuYWRkU3RhdGljTG9nKHN0YXRpY0xvZyk7XG5cbiAgICAgICAgY29uc3QgZXY6IFNjaGVkdWxlZEV2ZW50ID0gPFNjaGVkdWxlZEV2ZW50PntcbiAgICAgICAgICAgIG46IG1ldGFkYXRhLmJ1aWxkVGltZSxcbiAgICAgICAgICAgIG9uVGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAodGhpcy5fdGlja1NlcnZpY2UudGlja3MgLSBldi50aWNrU2NoZWR1bGVkQXQpIC8gZXYubjtcbiAgICAgICAgICAgICAgICBzdGF0aWNMb2cudGV4dCA9IGAke21ldGFkYXRhLm5hbWV9OiAke01hdGguZmxvb3IocGVyY2VudGFnZSAqIDEwMCl9JWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNvbXBsZXRpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwLnN0YXRpY0VudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmRlbGV0ZVN0YXRpY0xvZyhzdGF0aWNMb2cuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ1NlcnZpY2UuYWRkVGVtcExvZyg8TG9nPntcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYEZpbnNgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zU3RlcCA9ICgyICogTWF0aC5QSSkgLyAocC5zdGF0aWNFbnRpdGllcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLnN0YXRpY0VudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBwLnN0YXRpY0VudGl0aWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBlLnBvc2l0aW9uT25PcmJpdCA9IHBvc1N0ZXAgKiAoaSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBlLnggPSBNYXRoLmNvcyhlLnBvc2l0aW9uT25PcmJpdCkgKiAyMDA7XG4gICAgICAgICAgICAgICAgICAgIGUueSA9IE1hdGguc2luKGUucG9zaXRpb25Pbk9yYml0KSAqIDIwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdGlja1NlcnZpY2Uuc2NoZWR1bGVFdmVudChldik7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZ3JhZGVTdGF0aWNFbnRpdHkoZTogU3RhdGljRW50aXR5KSB7XG4gICAgICAgIGlmIChlLnVwZ3JhZGluZylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAoZS5sZXZlbCA8IGUuZGVmaW5pdGlvbi5tYXhVcGdyYWRlTGV2ZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY0xvZyA9IDxMb2c+e1xuICAgICAgICAgICAgICAgIHRleHQ6IGBVcGdyYWRpbmcgJHtlLmRlZmluaXRpb24ubmFtZX0gdG8gJHtlLmxldmVsICsgMX06IDAlYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2xvZ1NlcnZpY2UuYWRkU3RhdGljTG9nKHN0YXRpY0xvZyk7XG5cbiAgICAgICAgICAgIGUudXBncmFkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgY29uc3QgZXY6IFNjaGVkdWxlZEV2ZW50ID0gPFNjaGVkdWxlZEV2ZW50PntcbiAgICAgICAgICAgICAgICBuOiBlLmRlZmluaXRpb24udXBncmFkZVRpbWUsXG4gICAgICAgICAgICAgICAgb25UaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAodGhpcy5fdGlja1NlcnZpY2UudGlja3MgLSBldi50aWNrU2NoZWR1bGVkQXQpIC8gZXYubjtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljTG9nLnRleHQgPSBgVXBncmFkaW5nICR7ZS5kZWZpbml0aW9uLm5hbWV9IHRvICR7ZS5sZXZlbCArIDF9OiAke01hdGguZmxvb3IocGVyY2VudGFnZSAqIDEwMCl9JWBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICArK2UubGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIGUudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ1NlcnZpY2UuYWRkVGVtcExvZyg8TG9nPntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBGaW5zaGVkIHVwZ3JhZGluZyAke2UuZGVmaW5pdGlvbi5uYW1lfSB0byBsZXZlbCAke2UubGV2ZWx9YFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nU2VydmljZS5kZWxldGVTdGF0aWNMb2coc3RhdGljTG9nLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLl90aWNrU2VydmljZS5zY2hlZHVsZUV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzcGF3blRyYW5zaWVudEVudGl0eShwOiBQbGFuZXRFbnRpdHksIHR5cGU6IFRyYW5zaWVudEVudGl0aWVzLCBpbnN0YW50OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gPFRyYW5zaWVudEVudGl0eURlZmluaXRpb24+VHJhbnNpZW50RW50aXR5TWV0YWRhdGFbdHlwZV07XG4gICAgICAgIGlmIChpbnN0YW50KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgVHJhbnNpZW50RW50aXR5KHR5cGUsIHRoaXMuX2V2ZW50U2VydmljZSk7XG4gICAgICAgICAgICBlbnRpdHkuZmFjdGlvbiA9IG1ldGFkYXRhLmZhY3Rpb247IFxuICAgICAgICAgICAgaWYgKGVudGl0eS5mYWN0aW9uID09IEZhY3Rpb25zLlBsYXllcikge1xuICAgICAgICAgICAgICAgIGVudGl0eS5vbkVudGVyUGxhbmV0ID0gKHA6IFBsYW5ldEVudGl0eSkgPT4gdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5jaGVja0lmTmVlZFRvR2VuZXJhdGVQbGFuZXQocCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnRpdHkuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZztcbiAgICAgICAgICAgIGVudGl0eS5vcmJpdGluZ1BsYW5ldCA9IHA7XG4gICAgICAgICAgICBlbnRpdHkueCA9IHAueDtcbiAgICAgICAgICAgIGVudGl0eS55ID0gcC55O1xuICAgICAgICAgICAgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcy5wdXNoKGVudGl0eSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQgLSBtZXRhZGF0YS5jb3N0IDwgMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucmVzb3VyY2VDb3VudCAtPSBtZXRhZGF0YS5jb3N0O1xuXG4gICAgICAgICAgICBjb25zdCBzdGF0aWNMb2cgPSA8TG9nPntcbiAgICAgICAgICAgICAgICB0ZXh0OiBgQnVpbGRpbmcgJHttZXRhZGF0YS5uYW1lfTogMCVgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fbG9nU2VydmljZS5hZGRTdGF0aWNMb2coc3RhdGljTG9nKTtcblxuICAgICAgICAgICAgY29uc3QgZXY6IFNjaGVkdWxlZEV2ZW50ID0gPFNjaGVkdWxlZEV2ZW50PntcbiAgICAgICAgICAgICAgICBuOiBtZXRhZGF0YS5idWlsZFRpbWUsXG4gICAgICAgICAgICAgICAgb25UaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAodGhpcy5fdGlja1NlcnZpY2UudGlja3MgLSBldi50aWNrU2NoZWR1bGVkQXQpIC8gZXYubjtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljTG9nLnRleHQgPSBgQnVpbGRpbmcgJHttZXRhZGF0YS5uYW1lfTogJHtNYXRoLmZsb29yKHBlcmNlbnRhZ2UgKiAxMDApfSVgXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nU2VydmljZS5kZWxldGVTdGF0aWNMb2coc3RhdGljTG9nLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IFRyYW5zaWVudEVudGl0eSh0eXBlLCB0aGlzLl9ldmVudFNlcnZpY2UpO1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuZmFjdGlvbiA9IG1ldGFkYXRhLmZhY3Rpb247IFxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmZhY3Rpb24gPT0gRmFjdGlvbnMuUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkub25FbnRlclBsYW5ldCA9IChwOiBQbGFuZXRFbnRpdHkpID0+IHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2UuY2hlY2tJZk5lZWRUb0dlbmVyYXRlUGxhbmV0KHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5zdGF0ZSA9IFRyYW5zaWVudEVudGl0eVN0YXRlLk9yYml0aW5nO1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub3JiaXRpbmdQbGFuZXQgPSBwO1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHkueCA9IHAueDtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnkgPSBwLnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX3RpY2tTZXJ2aWNlLnNjaGVkdWxlRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
        EventTypes[EventTypes["CameraUpdate"] = 2] = "CameraUpdate";
        EventTypes[EventTypes["ShotFired"] = 3] = "ShotFired";
        EventTypes[EventTypes["PlanetCreated"] = 4] = "PlanetCreated";
        EventTypes[EventTypes["CheatSpawnDrone"] = 5] = "CheatSpawnDrone";
        EventTypes[EventTypes["SpawnEnemyUnit"] = 6] = "SpawnEnemyUnit";
    })(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUlJO1lBSFEsY0FBUyxHQUFRLEVBQUUsQ0FBQztZQUNwQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRzFCLENBQUM7UUFFTSxzQ0FBZSxHQUF0QixVQUF1QixTQUFxQixFQUFFLEVBQU87WUFDakQsSUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFFTSx3Q0FBaUIsR0FBeEIsVUFBeUIsU0FBcUIsRUFBRSxFQUFVO1lBQ3RELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7UUFFTSxnQ0FBUyxHQUFoQixVQUFpQixTQUFxQixFQUFFLElBQVM7WUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDYixHQUFHLENBQUEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUCxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2IsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtJQWxDWSxvQ0FBWTtJQW9DekIsSUFBWSxVQU9YO0lBUEQsV0FBWSxVQUFVO1FBQ2xCLHVFQUFzQixDQUFBO1FBQ3RCLDJEQUFnQixDQUFBO1FBQ2hCLHFEQUFhLENBQUE7UUFDYiw2REFBaUIsQ0FBQTtRQUNqQixpRUFBbUIsQ0FBQTtRQUNuQiwrREFBa0IsQ0FBQTtJQUN0QixDQUFDLEVBUFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFPckIiLCJmaWxlIjoiZ2FtZS9ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG4gICAgcHJpdmF0ZSBfaGFuZGxlcnM6IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX2NiSWQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZTogRXZlbnRUeXBlcywgY2I6IGFueSkgOiBudW1iZXIge1xuICAgICAgICBjb25zdCBpZCA9ICsrdGhpcy5fY2JJZDtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbZXZlbnRUeXBlXSA9IHRoaXMuX2hhbmRsZXJzW2V2ZW50VHlwZV0gfHwge307XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50VHlwZV1baWRdID0gY2I7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVyZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlOiBFdmVudFR5cGVzLCBpZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnRUeXBlXTtcbiAgICAgICAgaWYgKCEhaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tpZF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdEV2ZW50KGV2ZW50VHlwZTogRXZlbnRUeXBlcywgZGF0YTogYW55KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnRUeXBlXTtcbiAgICAgICAgaWYgKCEhaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaWQgaW4gaGFuZGxlcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNiID0gaGFuZGxlcnNbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFjYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIEV2ZW50VHlwZXMge1xuICAgIEVuZW15UGxhbmV0Q3JlYXRlZCA9IDEsXG4gICAgQ2FtZXJhVXBkYXRlID0gMixcbiAgICBTaG90RmlyZWQgPSAzLFxuICAgIFBsYW5ldENyZWF0ZWQgPSA0LFxuICAgIENoZWF0U3Bhd25Ecm9uZSA9IDUsXG4gICAgU3Bhd25FbmVteVVuaXQgPSA2XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
            var _this = this;
            if (p.hasBeenVisitied)
                return;
            p.hasBeenVisitied = true;
            var distFromLeft = Math.abs(p.x - this._camera.minX);
            var distFromRight = Math.abs(p.x - this._camera.maxX);
            var distFromTop = Math.abs(p.y - this._camera.minY);
            var distFromBottom = Math.abs(p.y - this._camera.maxY);
            if (distFromLeft < 600 ||
                distFromRight < 600 ||
                distFromTop < 600 ||
                distFromBottom < 600) {
                var xBias_1 = Math.min(distFromLeft, distFromRight) < Math.min(distFromTop, distFromBottom);
                var yBias_1 = !xBias_1;
                var xDir_1 = distFromLeft < distFromRight ? -1 : 1;
                var yDir_1 = distFromTop < distFromBottom ? -1 : 1;
                var planetsToGenerate_1 = 1;
                if (rng_1.Rng.rnd(0, 100) < 30)
                    planetsToGenerate_1++;
                if (rng_1.Rng.rnd(0, 100) < 10)
                    planetsToGenerate_1++;
                setTimeout(function () {
                    for (var i = 0; i < planetsToGenerate_1; i++) {
                        var xrng = (xBias_1 ? 1100 : 500);
                        var yrng = (yBias_1 ? 1100 : 500);
                        if (xBias_1)
                            yrng += i * 600;
                        if (yBias_1)
                            yrng += i * 600;
                        var tryCount = 0;
                        var finished = false;
                        while (tryCount < 3 && !finished) {
                            try {
                                _this.generateNewPlanet(({
                                    x: p.x,
                                    y: p.y,
                                    xRange: xrng * xDir_1,
                                    yRange: yrng * yDir_1
                                }), true);
                                finished = true;
                            }
                            catch (e) {
                                tryCount++;
                            }
                        }
                    }
                }, 10);
            }
        };
        GameStateService.prototype.generateNewPlanet = function (opts, generateOutsideBounds) {
            var _this = this;
            var p = new planet_entity_1.PlanetEntity();
            var xRng = opts.xRange || 1000;
            var yRng = opts.yRange || 1000;
            p.x = opts.x + rng_1.Rng.rnd(-xRng, xRng);
            p.y = opts.y + rng_1.Rng.rnd(-yRng, yRng);
            p.radius = rng_1.Rng.rnd(50, 90);
            p.resources = 2500 + Math.floor(rng_1.Rng.rnd(-1000, 3000));
            if (_.some(this.state.planets, function (p2) {
                if (generateOutsideBounds) {
                    var outOfBounds = !(p.x < _this._camera.minX || p.x > _this._camera.maxX || p.y < _this._camera.minY || p.y > _this._camera.maxY);
                    return outOfBounds || p.distanceTo(p2) < 650;
                }
                else {
                    return p.distanceTo(p2) < 600 || p.distanceTo(p2) > 3000;
                }
            })) {
                this.generateNewPlanet(opts, generateOutsideBounds);
                return;
            }
            this._camera.maxX = Math.max(this._camera.maxX, p.x + 500);
            this._camera.minX = Math.min(this._camera.minX, p.x - 500);
            this._camera.maxY = Math.max(this._camera.maxY, p.y + 500);
            this._camera.minY = Math.min(this._camera.minY, p.y - 500);
            this.state.planets.push(p);
            this._eventService.postEvent(event_service_1.EventTypes.PlanetCreated, p);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQWFBLElBQWEsZ0JBQWdCO1FBR3pCLDBCQUFvQixPQUFzQixFQUFVLGFBQTJCO1lBQTNELFlBQU8sR0FBUCxPQUFPLENBQWU7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztZQUMzRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFFN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFnQixDQUFDO29CQUNuQyxDQUFDLEVBQUUsQ0FBQztvQkFDSixDQUFDLEVBQUUsQ0FBQztpQkFDUCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDZixDQUFDO1lBRUQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxDQUFlO1lBQWxELGlCQW1EQztZQWxERyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO2dCQUNsQixNQUFNLENBQUM7WUFFWCxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUV6QixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxFQUFFLENBQUMsQ0FBQyxZQUFZLEdBQUcsR0FBRztnQkFDbEIsYUFBYSxHQUFHLEdBQUc7Z0JBQ25CLFdBQVcsR0FBRyxHQUFHO2dCQUNqQixjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFdkIsSUFBTSxPQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzVGLElBQU0sT0FBSyxHQUFHLENBQUMsT0FBSyxDQUFDO2dCQUVyQixJQUFNLE1BQUksR0FBRyxZQUFZLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkQsSUFBTSxNQUFJLEdBQUcsV0FBVyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRW5ELElBQUksbUJBQWlCLEdBQUcsQ0FBQyxDQUFBO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQUMsbUJBQWlCLEVBQUUsQ0FBQztnQkFDOUMsRUFBRSxDQUFDLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUFDLG1CQUFpQixFQUFFLENBQUM7Z0JBRTlDLFVBQVUsQ0FBQztvQkFDUCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQ3hDLElBQUksSUFBSSxHQUFHLENBQUMsT0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUVoQyxFQUFFLENBQUMsQ0FBQyxPQUFLLENBQUM7NEJBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQUssQ0FBQzs0QkFBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFFM0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBQ3JCLE9BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUM5QixJQUFJLENBQUM7Z0NBQ0QsS0FBSSxDQUFDLGlCQUFpQixDQUFnQixDQUFDO29DQUNuQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0NBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29DQUNOLE1BQU0sRUFBRSxJQUFJLEdBQUcsTUFBSTtvQ0FDbkIsTUFBTSxFQUFFLElBQUksR0FBRyxNQUFJO2lDQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0NBQ1YsUUFBUSxHQUFHLElBQUksQ0FBQzs0QkFDcEIsQ0FBQzs0QkFBQyxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNSLFFBQVEsRUFBRSxDQUFDOzRCQUNmLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNYLENBQUM7UUFDTCxDQUFDO1FBRU0sNENBQWlCLEdBQXhCLFVBQXlCLElBQW1CLEVBQUUscUJBQThCO1lBQTVFLGlCQXdDQztZQXZDRyxJQUFNLENBQUMsR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztZQUU3QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztZQUNqQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztZQUVqQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXRELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBQSxFQUFFO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hJLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ2pELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFBO2dCQUM1RCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUUzRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsMEJBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFMUQsRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2QixDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsMEJBQVUsQ0FBQyxrQkFBa0IsRUFBRTt3QkFDeEQsTUFBTSxFQUFFLENBQUM7cUJBQ1osQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0EvR0EsQUErR0MsSUFBQTtJQS9HWSxnQkFBZ0I7UUFENUIsMEJBQU0sQ0FBQyw4QkFBYSxFQUFFLDRCQUFZLENBQUM7eUNBSUgsOEJBQWEsRUFBeUIsNEJBQVk7T0FIdEUsZ0JBQWdCLENBK0c1QjtJQS9HWSw0Q0FBZ0I7SUF3SDdCO1FBTUk7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUM3QixDQUFDO1FBRU0sMkNBQXVCLEdBQTlCLFVBQStCLElBQW9CO1lBQy9DLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixHQUFHLENBQUMsQ0FBVSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO2dCQUFyQixJQUFJLENBQUMsU0FBQTtnQkFDTixHQUFHLENBQUMsQ0FBVSxVQUFnQixFQUFoQixLQUFBLENBQUMsQ0FBQyxjQUFjLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO29CQUF6QixJQUFJLENBQUMsU0FBQTtvQkFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLENBQUM7aUJBQ0o7YUFDSjtZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUVNLDZDQUF5QixHQUFoQyxVQUFpQyxDQUFlO1lBQzVDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixHQUFHLENBQUMsQ0FBVSxVQUFzQixFQUF0QixLQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBdEIsY0FBc0IsRUFBdEIsSUFBc0I7Z0JBQS9CLElBQUksQ0FBQyxTQUFBO2dCQUNOLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSx1Q0FBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2FBQ0o7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxzQkFBVyxrQ0FBVztpQkFBdEI7Z0JBQ0ksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsOEJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3JGLENBQUM7OztXQUFBO1FBQ0wsZ0JBQUM7SUFBRCxDQXZDQSxBQXVDQyxJQUFBO0lBdkNZLDhCQUFTO0lBeUN0QixJQUFZLFVBRVg7SUFGRCxXQUFZLFVBQVU7UUFDbEIsaURBQVcsQ0FBQTtJQUNmLENBQUMsRUFGVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUVyQiIsImZpbGUiOiJnYW1lL2dhbWUtc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgY29tcHV0ZWRGcm9tIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBCaW5kaW5nU2lnbmFsZXIgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXR5LCBTdGF0aWNFbnRpdGllcyB9IGZyb20gXCIuL3N0YXRpYy1lbnRpdHlcIjtcbmltcG9ydCB7IFRyYW5zaWVudEVudGl0eSwgVHJhbnNpZW50RW50aXRpZXMsIFRyYW5zaWVudEVudGl0eVN0YXRlIH0gZnJvbSBcIi4vdHJhbnNpZW50LWVudGl0eVwiO1xuaW1wb3J0IHsgUm5nIH0gZnJvbSBcIi4vcm5nXCI7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vY2FtZXJhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVudGl0eUZhY3RvcnkgfSBmcm9tIFwiLi9lbnRpdHktZmFjdG9yeVwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlLCBFdmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBpbmplY3QoQ2FtZXJhU2VydmljZSwgRXZlbnRTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0ZTogR2FtZVN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2FtZXJhOiBDYW1lcmFTZXJ2aWNlLCBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEdhbWVTdGF0ZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTmV3UGxhbmV0KDxQbGFuZXRHZW5PcHRzPih7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9KSwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhcnRpbmdQbGFuZXQgPSB0aGlzLnN0YXRlLnBsYW5ldHNbMF07XG4gICAgICAgIHRoaXMuX2NhbWVyYS5wYW5UbyhzdGFydGluZ1BsYW5ldC54LCBzdGFydGluZ1BsYW5ldC55KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tJZk5lZWRUb0dlbmVyYXRlUGxhbmV0KHA6IFBsYW5ldEVudGl0eSkge1xuICAgICAgICBpZiAocC5oYXNCZWVuVmlzaXRpZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBwLmhhc0JlZW5WaXNpdGllZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZGlzdEZyb21MZWZ0ID0gTWF0aC5hYnMocC54IC0gdGhpcy5fY2FtZXJhLm1pblgpO1xuICAgICAgICBjb25zdCBkaXN0RnJvbVJpZ2h0ID0gTWF0aC5hYnMocC54IC0gdGhpcy5fY2FtZXJhLm1heFgpO1xuICAgICAgICBjb25zdCBkaXN0RnJvbVRvcCA9IE1hdGguYWJzKHAueSAtIHRoaXMuX2NhbWVyYS5taW5ZKTtcbiAgICAgICAgY29uc3QgZGlzdEZyb21Cb3R0b20gPSBNYXRoLmFicyhwLnkgLSB0aGlzLl9jYW1lcmEubWF4WSk7XG4gICAgICAgIGlmIChkaXN0RnJvbUxlZnQgPCA2MDAgfHxcbiAgICAgICAgICAgIGRpc3RGcm9tUmlnaHQgPCA2MDAgfHxcbiAgICAgICAgICAgIGRpc3RGcm9tVG9wIDwgNjAwIHx8XG4gICAgICAgICAgICBkaXN0RnJvbUJvdHRvbSA8IDYwMCkge1xuXG4gICAgICAgICAgICBjb25zdCB4QmlhcyA9IE1hdGgubWluKGRpc3RGcm9tTGVmdCwgZGlzdEZyb21SaWdodCkgPCBNYXRoLm1pbihkaXN0RnJvbVRvcCwgZGlzdEZyb21Cb3R0b20pO1xuICAgICAgICAgICAgY29uc3QgeUJpYXMgPSAheEJpYXM7XG5cbiAgICAgICAgICAgIGNvbnN0IHhEaXIgPSBkaXN0RnJvbUxlZnQgPCBkaXN0RnJvbVJpZ2h0ID8gLTEgOiAxO1xuICAgICAgICAgICAgY29uc3QgeURpciA9IGRpc3RGcm9tVG9wIDwgZGlzdEZyb21Cb3R0b20gPyAtMSA6IDE7XG5cbiAgICAgICAgICAgIGxldCBwbGFuZXRzVG9HZW5lcmF0ZSA9IDFcbiAgICAgICAgICAgIGlmIChSbmcucm5kKDAsIDEwMCkgPCAzMCkgcGxhbmV0c1RvR2VuZXJhdGUrKztcbiAgICAgICAgICAgIGlmIChSbmcucm5kKDAsIDEwMCkgPCAxMCkgcGxhbmV0c1RvR2VuZXJhdGUrKztcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBsYW5ldHNUb0dlbmVyYXRlOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHhybmcgPSAoeEJpYXMgPyAxMTAwIDogNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHlybmcgPSAoeUJpYXMgPyAxMTAwIDogNTAwKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoeEJpYXMpIHlybmcgKz0gaSAqIDYwMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHlCaWFzKSB5cm5nICs9IGkgKiA2MDA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyeUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKHRyeUNvdW50IDwgMyAmJiAhZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld1BsYW5ldCg8UGxhbmV0R2VuT3B0cz4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBwLngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHAueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFJhbmdlOiB4cm5nICogeERpcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVJhbmdlOiB5cm5nICogeURpclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlTmV3UGxhbmV0KG9wdHM6IFBsYW5ldEdlbk9wdHMsIGdlbmVyYXRlT3V0c2lkZUJvdW5kczogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBwID0gbmV3IFBsYW5ldEVudGl0eSgpO1xuXG4gICAgICAgIGNvbnN0IHhSbmcgPSBvcHRzLnhSYW5nZSB8fCAxMDAwO1xuICAgICAgICBjb25zdCB5Um5nID0gb3B0cy55UmFuZ2UgfHwgMTAwMDtcblxuICAgICAgICBwLnggPSBvcHRzLnggKyBSbmcucm5kKC14Um5nLCB4Um5nKTtcbiAgICAgICAgcC55ID0gb3B0cy55ICsgUm5nLnJuZCgteVJuZywgeVJuZyk7XG4gICAgICAgIHAucmFkaXVzID0gUm5nLnJuZCg1MCwgOTApO1xuICAgICAgICBwLnJlc291cmNlcyA9IDI1MDAgKyBNYXRoLmZsb29yKFJuZy5ybmQoLTEwMDAsIDMwMDApKTtcblxuICAgICAgICBpZiAoXy5zb21lKHRoaXMuc3RhdGUucGxhbmV0cywgcDIgPT4ge1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRlT3V0c2lkZUJvdW5kcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dE9mQm91bmRzID0gIShwLnggPCB0aGlzLl9jYW1lcmEubWluWCB8fCBwLnggPiB0aGlzLl9jYW1lcmEubWF4WCB8fCBwLnkgPCB0aGlzLl9jYW1lcmEubWluWSB8fCBwLnkgPiB0aGlzLl9jYW1lcmEubWF4WSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dE9mQm91bmRzIHx8IHAuZGlzdGFuY2VUbyhwMikgPCA2NTA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmRpc3RhbmNlVG8ocDIpIDwgNjAwIHx8IHAuZGlzdGFuY2VUbyhwMikgPiAzMDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTmV3UGxhbmV0KG9wdHMsIGdlbmVyYXRlT3V0c2lkZUJvdW5kcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYW1lcmEubWF4WCA9IE1hdGgubWF4KHRoaXMuX2NhbWVyYS5tYXhYLCBwLnggKyA1MDApO1xuICAgICAgICB0aGlzLl9jYW1lcmEubWluWCA9IE1hdGgubWluKHRoaXMuX2NhbWVyYS5taW5YLCBwLnggLSA1MDApO1xuICAgICAgICB0aGlzLl9jYW1lcmEubWF4WSA9IE1hdGgubWF4KHRoaXMuX2NhbWVyYS5tYXhZLCBwLnkgKyA1MDApO1xuICAgICAgICB0aGlzLl9jYW1lcmEubWluWSA9IE1hdGgubWluKHRoaXMuX2NhbWVyYS5taW5ZLCBwLnkgLSA1MDApO1xuXG4gICAgICAgIHRoaXMuc3RhdGUucGxhbmV0cy5wdXNoKHApO1xuXG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5wb3N0RXZlbnQoRXZlbnRUeXBlcy5QbGFuZXRDcmVhdGVkLCBwKTtcblxuICAgICAgICBpZiAoZ2VuZXJhdGVPdXRzaWRlQm91bmRzKSB7XG4gICAgICAgICAgICBpZiAoUm5nLnJuZCgwLCAxMDApIDwgOTApIHtcbiAgICAgICAgICAgICAgICBwLmlzSG9zdGlsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnBvc3RFdmVudChFdmVudFR5cGVzLkVuZW15UGxhbmV0Q3JlYXRlZCwge1xuICAgICAgICAgICAgICAgICAgICBwbGFuZXQ6IHBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIFBsYW5ldEdlbk9wdHMge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgeFJhbmdlOiBudW1iZXI7XG4gICAgeVJhbmdlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xuICAgIHB1YmxpYyBwbGFuZXRzOiBQbGFuZXRFbnRpdHlbXTtcbiAgICBwdWJsaWMgdHJhbnNpZW50RW50aXRpZXM6IFRyYW5zaWVudEVudGl0eVtdO1xuICAgIHB1YmxpYyByZXNvdXJjZUNvdW50OiBudW1iZXI7XG4gICAgcHVibGljIGdhbWVTdGF0ZTogR2FtZVN0YXRlcztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYW5ldHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmFuc2llbnRFbnRpdGllcyA9IFtdO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZXMuUGxheWluZztcbiAgICAgICAgdGhpcy5yZXNvdXJjZUNvdW50ID0gMjAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTdGF0aWNFbnRpdGllc09mVHlwZSh0eXBlOiBTdGF0aWNFbnRpdGllcyk6IFN0YXRpY0VudGl0eVtdIHtcbiAgICAgICAgY29uc3QgcmV0VmFsID0gW107XG4gICAgICAgIGZvciAobGV0IHAgb2YgdGhpcy5wbGFuZXRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzIG9mIHAuc3RhdGljRW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocy50eXBlID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsLnB1c2gocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVudGl0aWVzT3JiaXRpbmdQbGFuZXQocDogUGxhbmV0RW50aXR5KSB7XG4gICAgICAgIGNvbnN0IHJldFZhbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBlIG9mIHRoaXMudHJhbnNpZW50RW50aXRpZXMpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmIChlLm9yYml0aW5nUGxhbmV0ID09IHAgJiYgZS5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZykge1xuICAgICAgICAgICAgICAgIHJldFZhbC5wdXNoKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZXNvdXJjZUNhcCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMCArIHRoaXMuZ2V0U3RhdGljRW50aXRpZXNPZlR5cGUoU3RhdGljRW50aXRpZXMuU3RvY2twaWxlKS5sZW5ndGggKiA1MDA7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBHYW1lU3RhdGVzIHtcbiAgICBQbGF5aW5nID0gMVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/game',["require", "exports", "aurelia-framework", "./game-state.service", "./transient-entity", "./camera.service", "./tick.service", "./input.service", "./log.service", "./entity-factory", "./ui.service", "./graphics.service", "lodash"], function (require, exports, aurelia_framework_1, game_state_service_1, transient_entity_1, camera_service_1, tick_service_1, input_service_1, log_service_1, entity_factory_1, ui_service_1, graphics_service_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game(gameStateService, camera, inputService, entityFactory, uiService, tickService, logService, graphicsService) {
            this.T = Date.now();
            this.startTime = Date.now();
            this.camera = camera;
            this._gameStateService = gameStateService;
            this._inputService = inputService;
            this._entityFactory = entityFactory;
            this.uiService = uiService;
            this._tickService = tickService;
            this.logService = logService;
            this._graphicsService = graphicsService;
            var settledP = this._gameStateService.state.planets[0];
            settledP.settled = true;
            this.camera.panTo(settledP.x, settledP.y);
        }
        Object.defineProperty(Game.prototype, "timeSinceStart", {
            get: function () {
                return Date.now() - this.startTime;
            },
            enumerable: true,
            configurable: true
        });
        Game.prototype.attached = function () {
            var _this = this;
            this._graphicsService.initialize();
            this._inputService.initKeyBindings();
            var animFn = function () {
                var t = Date.now();
                var deltaTime = (t - _this.T) / 1000;
                _this._inputService.checkForInput();
                _this._tickService.update();
                for (var _i = 0, _a = _this._gameStateService.state.transientEntities; _i < _a.length; _i++) {
                    var e = _a[_i];
                    e.update(deltaTime, _this._gameStateService.state.transientEntities);
                }
                _this._gameStateService.state.transientEntities = _.filter(_this._gameStateService.state.transientEntities, function (e) { return !e.dead; });
                for (var _b = 0, _c = _this._gameStateService.state.planets; _b < _c.length; _b++) {
                    var p = _c[_b];
                    p.staticEntities = _.filter(p.staticEntities, function (e) { return e.health > 0; });
                }
                _this.T = t;
                _this._graphicsService.update();
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
        aurelia_framework_1.inject(game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService, entity_factory_1.EntityFactory, ui_service_1.UiService, tick_service_1.TickService, log_service_1.LogService, graphics_service_1.GraphicsService),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService, entity_factory_1.EntityFactory, ui_service_1.UiService, tick_service_1.TickService, log_service_1.LogService, graphics_service_1.GraphicsService])
    ], Game);
    exports.Game = Game;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RixxQ0FBZ0IsRUFBVSw4QkFBYSxFQUFnQiw0QkFBWSxFQUFpQiw4QkFBYSxFQUFhLHNCQUFTLEVBQWUsMEJBQVcsRUFBYyx3QkFBVSxFQUFtQixrQ0FBZTtPQWpCaE8sSUFBSSxDQTBHaEI7SUExR1ksb0JBQUkiLCJmaWxlIjoiZ2FtZS9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZVNlcnZpY2UsIEdhbWVTdGF0ZSB9IGZyb20gXCIuL2dhbWUtc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXR5IH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5LCBUcmFuc2llbnRFbnRpdGllcyB9IGZyb20gXCIuL3RyYW5zaWVudC1lbnRpdHlcIjtcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi9jYW1lcmEuc2VydmljZVwiO1xuaW1wb3J0IHsgVGlja1NlcnZpY2UgfSBmcm9tIFwiLi90aWNrLnNlcnZpY2VcIjtcbmltcG9ydCB7IElucHV0U2VydmljZSB9IGZyb20gXCIuL2lucHV0LnNlcnZpY2VcIjsgaW1wb3J0IHsgTG9nU2VydmljZSB9IGZyb20gXCIuL2xvZy5zZXJ2aWNlXCI7IGltcG9ydCB7IEVudGl0eUZhY3RvcnkgfSBmcm9tIFwiLi9lbnRpdHktZmFjdG9yeVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXRpZXMgfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBVaVNlcnZpY2UgfSBmcm9tIFwiLi91aS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi9ncmFwaGljcy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQGluamVjdChHYW1lU3RhdGVTZXJ2aWNlLCBDYW1lcmFTZXJ2aWNlLCBJbnB1dFNlcnZpY2UsIEVudGl0eUZhY3RvcnksIFVpU2VydmljZSwgVGlja1NlcnZpY2UsIExvZ1NlcnZpY2UsIEdyYXBoaWNzU2VydmljZSlcbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBwdWJsaWMgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlO1xuICAgIHB1YmxpYyB1aVNlcnZpY2U6IFVpU2VydmljZTtcbiAgICBwdWJsaWMgbG9nU2VydmljZTogTG9nU2VydmljZTtcbiAgICBwdWJsaWMgVDogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgcHVibGljIGdldCB0aW1lU2luY2VTdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nYW1lU3RhdGVTZXJ2aWNlOiBHYW1lU3RhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2lucHV0U2VydmljZTogSW5wdXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2VudGl0eUZhY3Rvcnk6IEVudGl0eUZhY3Rvcnk7XG4gICAgcHJpdmF0ZSBfdGlja1NlcnZpY2U6IFRpY2tTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2dyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZVN0YXRlU2VydmljZTogR2FtZVN0YXRlU2VydmljZSwgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlLCBpbnB1dFNlcnZpY2U6IElucHV0U2VydmljZSwgZW50aXR5RmFjdG9yeTogRW50aXR5RmFjdG9yeSwgdWlTZXJ2aWNlOiBVaVNlcnZpY2UsIHRpY2tTZXJ2aWNlOiBUaWNrU2VydmljZSwgbG9nU2VydmljZTogTG9nU2VydmljZSwgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2UgPSBnYW1lU3RhdGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLl9pbnB1dFNlcnZpY2UgPSBpbnB1dFNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2VudGl0eUZhY3RvcnkgPSBlbnRpdHlGYWN0b3J5O1xuICAgICAgICB0aGlzLnVpU2VydmljZSA9IHVpU2VydmljZTtcbiAgICAgICAgdGhpcy5fdGlja1NlcnZpY2UgPSB0aWNrU2VydmljZTtcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlID0gbG9nU2VydmljZTtcbiAgICAgICAgdGhpcy5fZ3JhcGhpY3NTZXJ2aWNlID0gZ3JhcGhpY3NTZXJ2aWNlO1xuXG4gICAgICAgIGNvbnN0IHNldHRsZWRQID0gdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzWzBdO1xuICAgICAgICBzZXR0bGVkUC5zZXR0bGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYW1lcmEucGFuVG8oc2V0dGxlZFAueCwgc2V0dGxlZFAueSk7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuX2dyYXBoaWNzU2VydmljZS5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuX2lucHV0U2VydmljZS5pbml0S2V5QmluZGluZ3MoKTtcblxuICAgICAgICBjb25zdCBhbmltRm4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9ICh0IC0gdGhpcy5UKS8xMDAwO1xuICAgICAgICAgICAgdGhpcy5faW5wdXRTZXJ2aWNlLmNoZWNrRm9ySW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3RpY2tTZXJ2aWNlLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGUgb2YgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGUudXBkYXRlKGRlbHRhVGltZSwgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzID0gXy5maWx0ZXIodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcywgZSA9PiAhZS5kZWFkKTtcblxuICAgICAgICAgICAgZm9yKGxldCBwIG9mIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cykge1xuICAgICAgICAgICAgICAgIHAuc3RhdGljRW50aXRpZXMgPSBfLmZpbHRlcihwLnN0YXRpY0VudGl0aWVzLCBlID0+IGUuaGVhbHRoID4gMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuVCA9IHQ7XG5cbiAgICAgICAgICAgIHRoaXMuX2dyYXBoaWNzU2VydmljZS51cGRhdGUoKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltRm4pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltRm4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZ2FtZVN0YXRlKCkgOiBHYW1lU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGVudGl0aWVzT3JiaXRpbmdQbGFuZXQoKSA6IFRyYW5zaWVudEVudGl0aWVzW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5nZXRFbnRpdGllc09yYml0aW5nUGxhbmV0KHRoaXMuc2VsZWN0ZWRQbGFuZXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYXJrU2hpcEZvck1vdmVtZW50KGU6IFRyYW5zaWVudEVudGl0eSkge1xuICAgICAgICBlLm1hcmtlZEZvck1vdmVtZW50ID0gIWUubWFya2VkRm9yTW92ZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkU3RhdGljRW50aXR5KHR5cGU6IFN0YXRpY0VudGl0aWVzKSB7XG4gICAgICAgIHRoaXMuX2VudGl0eUZhY3Rvcnkuc3Bhd25TdGF0aWNFbnRpdHkodGhpcy5zZWxlY3RlZFBsYW5ldCwgdHlwZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZ3JhZGUoZTogU3RhdGljRW50aXR5KSB7XG4gICAgICAgIHRoaXMuX2VudGl0eUZhY3RvcnkudXBncmFkZVN0YXRpY0VudGl0eShlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRUcmFuc2llbnRFbnRpdHkodHlwZTogVHJhbnNpZW50RW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5RmFjdG9yeS5zcGF3blRyYW5zaWVudEVudGl0eSh0aGlzLnNlbGVjdGVkUGxhbmV0LCB0eXBlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aXNpYmxlUGxhbmV0cygpOiBQbGFuZXRFbnRpdHlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2aXNpYmxlVHJhbnNpZW50cygpOiBUcmFuc2llbnRFbnRpdHlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRQbGFuZXQoKTogUGxhbmV0RW50aXR5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlTZXJ2aWNlLnNlbGVjdGVkUGxhbmV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgb3JiaXRpbmdDb21tYW5kQ2VudGVyKCkge1xuICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMuZW50aXRpZXNPcmJpdGluZ1BsYW5ldCwgZSA9PiBlLnR5cGUgPT0gVHJhbnNpZW50RW50aXRpZXMuU2V0dGxlbWVudFNoaXAgJiYgZS5vcmJpdGluZ1BsYW5ldC5pZCA9PSB0aGlzLnNlbGVjdGVkUGxhbmV0LmlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0dGxlUGxhbmV0KCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRQbGFuZXQuc2V0dGxlZCAmJiAhIXRoaXMub3JiaXRpbmdDb21tYW5kQ2VudGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUGxhbmV0LnNldHRsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vcmJpdGluZ0NvbW1hbmRDZW50ZXIuZGVhZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/graphics.service',["require", "exports", "aurelia-framework", "./event.service", "./utils", "./rng", "lodash"], function (require, exports, aurelia_framework_1, event_service_1, utils_1, rng_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphicsService = (function () {
        function GraphicsService(_eventService) {
            this._eventService = _eventService;
            this._renderables = [];
        }
        GraphicsService.prototype.initialize = function () {
            var _this = this;
            var canvasEl = document.getElementById("foreground-canvas");
            this._renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
                view: canvasEl,
                transparent: true
            });
            this._stage = new PIXI.Container();
            this._eventService.registerHandler(event_service_1.EventTypes.CameraUpdate, function (cameraPos) {
                _this._stage.x = -cameraPos.x;
                _this._stage.y = -cameraPos.y;
            });
            this._eventService.registerHandler(event_service_1.EventTypes.PlanetCreated, function (planet) {
                _this.beacon(planet.x, planet.y);
            });
            this._eventService.registerHandler(event_service_1.EventTypes.ShotFired, function (targets) {
                var shotGraphic = new PIXI.Graphics();
                if (targets.e1.faction == 1) {
                    shotGraphic.beginFill(0xFFFFFF);
                }
                else {
                    shotGraphic.beginFill(0xFF0000);
                }
                shotGraphic.drawRect(-2, -8, 4, 16);
                shotGraphic.x = targets.e1.x;
                shotGraphic.y = targets.e1.y;
                var angle = Math.atan2(targets.e1.y - targets.e2.y, targets.e1.x - targets.e2.x);
                shotGraphic.rotation = (Math.PI / 2) + angle;
                var dist = utils_1.Utils.dist(targets.e1.x, targets.e1.y, targets.e2.x, targets.e2.y);
                _this._stage.addChild(shotGraphic);
                var renderable = ({
                    dead: false,
                    die: function () {
                        _this._stage.removeChild(shotGraphic);
                    },
                    update: function () {
                    }
                });
                TweenLite.to(shotGraphic, dist / 900, {
                    x: targets.e2.x,
                    y: targets.e2.y,
                    onComplete: function () {
                        renderable.dead = true;
                    }
                });
                _this._renderables.push(renderable);
            });
        };
        GraphicsService.prototype.bulletHit = function (x, y, color) {
            var _this = this;
            var emitter = new PIXI.particles.Emitter(this._stage, [PIXI.Texture.fromImage("src/assets/particle.png")], {
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
            });
            var elapsed = Date.now();
            var renderable = ({
                dead: false,
                die: function () {
                    _this._stage.removeChild(emitter);
                },
                update: function () {
                    var now = Date.now();
                    emitter.update((now - elapsed) * 0.001);
                    elapsed = now;
                }
            });
            emitter.emit = true;
            this._renderables.push(renderable);
        };
        GraphicsService.prototype.beacon = function (x, y) {
            var _this = this;
            var ringGraphics = [];
            var effectTime = 2.5;
            for (var i = 0; i < 5; i++) {
                var ringGraphic = new PIXI.Graphics();
                ringGraphic.lineStyle(0.02 + rng_1.Rng.rnd(-0.005, 0.005), 0xFFFFFF, 0.3);
                ringGraphic.drawCircle(0, 0, 10);
                ringGraphic.x = x;
                ringGraphic.y = y;
                var s = 180 + rng_1.Rng.rnd(-25, 80);
                TweenLite.to(ringGraphic, effectTime, {
                    alpha: 0
                });
                TweenLite.to(ringGraphic.scale, effectTime, {
                    x: s,
                    y: s,
                });
                ringGraphics.push(ringGraphic);
            }
            for (var _i = 0, ringGraphics_1 = ringGraphics; _i < ringGraphics_1.length; _i++) {
                var g = ringGraphics_1[_i];
                this._stage.addChild(g);
            }
            var renderable = ({
                dead: false,
                die: function () {
                    for (var _i = 0, ringGraphics_2 = ringGraphics; _i < ringGraphics_2.length; _i++) {
                        var g = ringGraphics_2[_i];
                        _this._stage.removeChild(g);
                    }
                },
                update: function () {
                }
            });
            setTimeout(function () {
                renderable.dead = true;
            }, effectTime * 1000);
            this._renderables.push(renderable);
        };
        GraphicsService.prototype.update = function () {
            for (var _i = 0, _a = this._renderables; _i < _a.length; _i++) {
                var r = _a[_i];
                r.update && r.update();
                if (r.dead) {
                    r.die && r.die();
                }
            }
            this._renderables = _.filter(this._renderables, function (r) { return !r.dead; });
            this._renderer.render(this._stage);
        };
        return GraphicsService;
    }());
    GraphicsService = __decorate([
        aurelia_framework_1.inject(event_service_1.EventService),
        __metadata("design:paramtypes", [event_service_1.EventService])
    ], GraphicsService);
    exports.GraphicsService = GraphicsService;
    var Renderable = (function () {
        function Renderable() {
            this.dead = false;
        }
        return Renderable;
    }());
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ3JhcGhpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFXQSxJQUFhLGVBQWU7UUFLeEIseUJBQW9CLGFBQTJCO1lBQTNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1lBRnZDLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUVXLENBQUM7UUFFN0Msb0NBQVUsR0FBakI7WUFBQSxpQkEwREM7WUF6REcsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDNUUsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVuQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQkFBVSxDQUFDLFlBQVksRUFBRSxVQUFBLFNBQVM7Z0JBQ2pFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsMEJBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBQSxNQUFNO2dCQUMvRCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsMEJBQVUsQ0FBQyxTQUFTLEVB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LENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDVCxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsQ0FBQzthQUNKO1lBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQVAsQ0FBTyxDQUFDLENBQUM7WUFFOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDTCxzQkFBQztJQUFELENBbkxBLEFBbUxDLElBQUE7SUFuTFksZUFBZTtRQUQzQiwwQkFBTSxDQUFDLDRCQUFZLENBQUM7eUNBTWtCLDRCQUFZO09BTHRDLGVBQWUsQ0FtTDNCO0lBbkxZLDBDQUFlO0lBcUw1QjtRQUFBO1lBR0ksU0FBSSxHQUFZLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBQUQsaUJBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQSIsImZpbGUiOiJnYW1lL2dyYXBoaWNzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSwgRXZlbnRUeXBlcyB9IGZyb20gXCIuL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IFJuZyB9IGZyb20gXCIuL3JuZ1wiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmRlY2xhcmUgdmFyIFBJWEk6IGFueTtcbmRlY2xhcmUgdmFyIFR3ZWVuTWF4OiBhbnk7XG5kZWNsYXJlIHZhciBUd2VlbkxpdGU6IGFueTtcblxuQGluamVjdChFdmVudFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogYW55O1xuICAgIHByaXZhdGUgX3N0YWdlOiBhbnk7XG4gICAgcHJpdmF0ZSBfcmVuZGVyYWJsZXM6IFJlbmRlcmFibGVbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UpIHsgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlZ3JvdW5kLWNhbnZhc1wiKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IFBJWEkuYXV0b0RldGVjdFJlbmRlcmVyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIHtcbiAgICAgICAgICAgIHZpZXc6IGNhbnZhc0VsLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc3RhZ2UgPSBuZXcgUElYSS5Db250YWluZXIoKTtcblxuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKEV2ZW50VHlwZXMuQ2FtZXJhVXBkYXRlLCBjYW1lcmFQb3MgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc3RhZ2UueCA9IC1jYW1lcmFQb3MueDtcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlLnkgPSAtY2FtZXJhUG9zLnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5yZWdpc3RlckhhbmRsZXIoRXZlbnRUeXBlcy5QbGFuZXRDcmVhdGVkLCBwbGFuZXQgPT4ge1xuICAgICAgICAgICAgdGhpcy5iZWFjb24ocGxhbmV0LngsIHBsYW5ldC55KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihFdmVudFR5cGVzLlNob3RGaXJlZCwgdGFyZ2V0cyA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG90R3JhcGhpYyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRzLmUxLmZhY3Rpb24gPT0gMSkge1xuICAgICAgICAgICAgICAgIHNob3RHcmFwaGljLmJlZ2luRmlsbCgweEZGRkZGRik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3RHcmFwaGljLmJlZ2luRmlsbCgweEZGMDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaG90R3JhcGhpYy5kcmF3UmVjdCgtMiwgLTgsIDQsIDE2KTtcbiAgICAgICAgICAgIHNob3RHcmFwaGljLnggPSB0YXJnZXRzLmUxLng7XG4gICAgICAgICAgICBzaG90R3JhcGhpYy55ID0gdGFyZ2V0cy5lMS55O1xuXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIodGFyZ2V0cy5lMS55IC0gdGFyZ2V0cy5lMi55LCB0YXJnZXRzLmUxLnggLSB0YXJnZXRzLmUyLngpO1xuICAgICAgICAgICAgc2hvdEdyYXBoaWMucm90YXRpb24gPSAoTWF0aC5QSSAvIDIpICsgYW5nbGU7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBVdGlscy5kaXN0KHRhcmdldHMuZTEueCwgdGFyZ2V0cy5lMS55LCB0YXJnZXRzLmUyLngsIHRhcmdldHMuZTIueSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0YWdlLmFkZENoaWxkKHNob3RHcmFwaGljKTtcblxuICAgICAgICAgICAgY29uc3QgcmVuZGVyYWJsZSA9IDxSZW5kZXJhYmxlPih7XG4gICAgICAgICAgICAgICAgZGVhZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGllOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWdlLnJlbW92ZUNoaWxkKHNob3RHcmFwaGljKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBUd2VlbkxpdGUudG8oc2hvdEdyYXBoaWMsIGRpc3QgLyA5MDAsIHtcbiAgICAgICAgICAgICAgICB4OiB0YXJnZXRzLmUyLngsXG4gICAgICAgICAgICAgICAgeTogdGFyZ2V0cy5lMi55LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmJ1bGxldEhpdCh0YXJnZXRzLmUyLngsIHRhcmdldHMuZTIueSwgdGFyZ2V0cy5lMS5mYWN0aW9uID09IDEgPyBcIiNmZmZmZmZcIiA6IFwiI2ZmMDAwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyYWJsZS5kZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyYWJsZXMucHVzaChyZW5kZXJhYmxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGJ1bGxldEhpdCh4OiBudW1iZXIsIHk6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlbWl0dGVyID0gbmV3IFBJWEkucGFydGljbGVzLkVtaXR0ZXIoXG4gICAgICAgICAgICB0aGlzLl9zdGFnZSxcbiAgICAgICAgICAgIFtQSVhJLlRleHR1cmUuZnJvbUltYWdlKFwic3JjL2Fzc2V0cy9wYXJ0aWNsZS5wbmdcIildLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiYWxwaGFcIjogeyBcInN0YXJ0XCI6IDEsIFwiZW5kXCI6IDAgfSxcbiAgICAgICAgICAgICAgICBcInNjYWxlXCI6IHsgXCJzdGFydFwiOiAwLjEsIFwiZW5kXCI6IDAuMSwgXCJtaW5pbXVtU2NhbGVNdWx0aXBsaWVyXCI6IDEgfSxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IHsgXCJzdGFydFwiOiBjb2xvciwgXCJlbmRcIjogY29sb3IgfSxcbiAgICAgICAgICAgICAgICBcInNwZWVkXCI6IHsgXCJzdGFydFwiOiAyMDAsIFwiZW5kXCI6IDUwLCBcIm1pbmltdW1TcGVlZE11bHRpcGxpZXJcIjogMS4xMyB9LFxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcmF0aW9uXCI6IHsgXCJ4XCI6IDcsIFwieVwiOiA3IH0sXG4gICAgICAgICAgICAgICAgXCJtYXhTcGVlZFwiOiAwLFxuICAgICAgICAgICAgICAgIFwic3RhcnRSb3RhdGlvblwiOiB7IFwibWluXCI6IDAsIFwibWF4XCI6IDM2MCB9LFxuICAgICAgICAgICAgICAgIFwibm9Sb3RhdGlvblwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInJvdGF0aW9uU3BlZWRcIjogeyBcIm1pblwiOiAwLCBcIm1heFwiOiAwIH0sXG4gICAgICAgICAgICAgICAgXCJsaWZldGltZVwiOiB7IFwibWluXCI6IDAuMTUsIFwibWF4XCI6IDAuOCB9LFxuICAgICAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgXCJmcmVxdWVuY3lcIjogMC4xLFxuICAgICAgICAgICAgICAgIFwiZW1pdHRlckxpZmV0aW1lXCI6IC0xLFxuICAgICAgICAgICAgICAgIFwibWF4UGFydGljbGVzXCI6IDUwMCxcbiAgICAgICAgICAgICAgICBcInBvc1wiOiB7IFwieFwiOiB5LCBcInlcIjogeCB9LFxuICAgICAgICAgICAgICAgIFwiYWRkQXRCYWNrXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwic3Bhd25UeXBlXCI6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJzcGF3bkNpcmNsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJyXCI6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGVsYXBzZWQgPSBEYXRlLm5vdygpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVuZGVyYWJsZSA9IDxSZW5kZXJhYmxlPih7XG4gICAgICAgICAgICBkZWFkOiBmYWxzZSxcbiAgICAgICAgICAgIGRpZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YWdlLnJlbW92ZUNoaWxkKGVtaXR0ZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgZW1pdHRlci51cGRhdGUoKG5vdyAtIGVsYXBzZWQpICogMC4wMDEpO1xuICAgICAgICAgICAgICAgIGVsYXBzZWQgPSBub3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVtaXR0ZXIuZW1pdCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyYWJsZXMucHVzaChyZW5kZXJhYmxlKTtcblxuICAgICAgICAvL3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy9yZW5kZXJhYmxlLmRlYWQgPSB0cnVlO1xuICAgICAgICAvL30sIDEwMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBiZWFjb24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmluZ0dyYXBoaWNzID0gW107XG4gICAgICAgIGNvbnN0IGVmZmVjdFRpbWUgPSAyLjU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJpbmdHcmFwaGljID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgICAgIHJpbmdHcmFwaGljLmxpbmVTdHlsZSgwLjAyICsgUm5nLnJuZCgtMC4wMDUsIDAuMDA1KSwgMHhGRkZGRkYsIDAuMyk7XG4gICAgICAgICAgICByaW5nR3JhcGhpYy5kcmF3Q2lyY2xlKDAsIDAsIDEwKTtcbiAgICAgICAgICAgIHJpbmdHcmFwaGljLnggPSB4O1xuICAgICAgICAgICAgcmluZ0dyYXBoaWMueSA9IHk7XG5cbiAgICAgICAgICAgIGNvbnN0IHMgPSAxODAgKyBSbmcucm5kKC0yNSwgODApO1xuXG4gICAgICAgICAgICBUd2VlbkxpdGUudG8ocmluZ0dyYXBoaWMsIGVmZmVjdFRpbWUsIHtcbiAgICAgICAgICAgICAgICBhbHBoYTogMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byhyaW5nR3JhcGhpYy5zY2FsZSwgZWZmZWN0VGltZSwge1xuICAgICAgICAgICAgICAgIHg6IHMsXG4gICAgICAgICAgICAgICAgeTogcyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByaW5nR3JhcGhpY3MucHVzaChyaW5nR3JhcGhpYyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBnIG9mIHJpbmdHcmFwaGljcykge1xuICAgICAgICAgICAgdGhpcy5fc3RhZ2UuYWRkQ2hpbGQoZyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW5kZXJhYmxlID0gPFJlbmRlcmFibGU+KHtcbiAgICAgICAgICAgIGRlYWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGllOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZyBvZiByaW5nR3JhcGhpY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhZ2UucmVtb3ZlQ2hpbGQoZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZTogKCkgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUuZGVhZCA9IHRydWU7XG4gICAgICAgIH0sIGVmZmVjdFRpbWUgKiAxMDAwKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJhYmxlcy5wdXNoKHJlbmRlcmFibGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIGZvciAobGV0IHIgb2YgdGhpcy5fcmVuZGVyYWJsZXMpIHtcbiAgICAgICAgICAgIHIudXBkYXRlICYmIHIudXBkYXRlKCk7XG4gICAgICAgICAgICBpZiAoci5kZWFkKSB7XG4gICAgICAgICAgICAgICAgci5kaWUgJiYgci5kaWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlbmRlcmFibGVzID0gXy5maWx0ZXIodGhpcy5fcmVuZGVyYWJsZXMsIHIgPT4gIXIuZGVhZCk7XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVuZGVyKHRoaXMuX3N0YWdlKTtcbiAgICB9XG59XG5cbmNsYXNzIFJlbmRlcmFibGUge1xuICAgIHVwZGF0ZTogYW55O1xuICAgIGRpZTogYW55O1xuICAgIGRlYWQ6IGJvb2xlYW4gPSBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/input.service',["require", "exports", "aurelia-framework", "./camera.service", "./event.service", "./ui.service"], function (require, exports, aurelia_framework_1, camera_service_1, event_service_1, ui_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputService = (function () {
        function InputService(_camera, _eventService, _uiService) {
            this._camera = _camera;
            this._eventService = _eventService;
            this._uiService = _uiService;
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
            this._keystates[KeyCodes.W] && (panY = -1);
            this._keystates[KeyCodes.S] && (panY = 1);
            this._keystates[KeyCodes.A] && (panX = -1);
            this._keystates[KeyCodes.D] && (panX = 1);
            (panX != 0 || panY != 0) && this._camera.pan(panX, panY);
        };
        InputService.prototype.onkeydown = function (e) {
            this._keystates[e.which] = true;
            if (e.which == KeyCodes.T) {
                this._eventService.postEvent(event_service_1.EventTypes.CheatSpawnDrone, null);
            }
            else if (e.which == KeyCodes.ESC) {
                this._uiService.resetUiState();
            }
        };
        InputService.prototype.onkeyup = function (e) {
            this._keystates[e.which] = false;
        };
        return InputService;
    }());
    InputService = __decorate([
        aurelia_framework_1.inject(camera_service_1.CameraService, event_service_1.EventService, ui_service_1.UiService),
        __metadata("design:paramtypes", [camera_service_1.CameraService, event_service_1.EventService, ui_service_1.UiService])
    ], InputService);
    exports.InputService = InputService;
    var KeyCodes;
    (function (KeyCodes) {
        KeyCodes[KeyCodes["W"] = 87] = "W";
        KeyCodes[KeyCodes["A"] = 65] = "A";
        KeyCodes[KeyCodes["S"] = 83] = "S";
        KeyCodes[KeyCodes["D"] = 68] = "D";
        KeyCodes[KeyCodes["T"] = 84] = "T";
        KeyCodes[KeyCodes["ESC"] = 27] = "ESC";
    })(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O1FBQ04sa0NBQU0sQ0FBQTtRQUNOLGtDQUFNLENBQUE7UUFDTixrQ0FBTSxDQUFBO1FBQ04sa0NBQU0sQ0FBQTtRQUNOLHNDQUFRLENBQUE7SUFDWixDQUFDLEVBUFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFPbkIiLCJmaWxlIjoiZ2FtZS9pbnB1dC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vY2FtZXJhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSwgRXZlbnRUeXBlcyB9IGZyb20gXCIuL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IFVpU2VydmljZSB9IGZyb20gXCIuL3VpLnNlcnZpY2VcIjtcblxuQGluamVjdChDYW1lcmFTZXJ2aWNlLCBFdmVudFNlcnZpY2UsIFVpU2VydmljZSlcbmV4cG9ydCBjbGFzcyBJbnB1dFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbWVyYTogQ2FtZXJhU2VydmljZSwgcHJpdmF0ZSBfZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsIHByaXZhdGUgX3VpU2VydmljZTogVWlTZXJ2aWNlKSB7fVxuXG4gICAgcHJpdmF0ZSBfa2V5c3RhdGVzOiBhbnkgPSB7fTtcblxuICAgIHB1YmxpYyBpbml0S2V5QmluZGluZ3MoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHRoaXMub25rZXlkb3duKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHRoaXMub25rZXl1cChlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrRm9ySW5wdXQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tGb3JQYW5uaW5nSW5wdXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrRm9yUGFubmluZ0lucHV0KCkge1xuICAgICAgICBsZXQgcGFuWCA9IDA7XG4gICAgICAgIGxldCBwYW5ZID0gMDtcblxuICAgICAgICB0aGlzLl9rZXlzdGF0ZXNbS2V5Q29kZXMuV10gJiYgKHBhblkgPSAtMSk7XG4gICAgICAgIHRoaXMuX2tleXN0YXRlc1tLZXlDb2Rlcy5TXSAmJiAocGFuWSA9IDEpO1xuICAgICAgICB0aGlzLl9rZXlzdGF0ZXNbS2V5Q29kZXMuQV0gJiYgKHBhblggPSAtMSk7XG4gICAgICAgIHRoaXMuX2tleXN0YXRlc1tLZXlDb2Rlcy5EXSAmJiAocGFuWCA9IDEpO1xuXG4gICAgICAgIChwYW5YICE9IDAgfHwgcGFuWSAhPSAwKSAmJiB0aGlzLl9jYW1lcmEucGFuKHBhblgsIHBhblkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25rZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fa2V5c3RhdGVzW2Uud2hpY2hdID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZS53aGljaCA9PSBLZXlDb2Rlcy5UKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucG9zdEV2ZW50KEV2ZW50VHlwZXMuQ2hlYXRTcGF3bkRyb25lLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09IEtleUNvZGVzLkVTQykge1xuICAgICAgICAgICAgdGhpcy5fdWlTZXJ2aWNlLnJlc2V0VWlTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmtleXVwKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fa2V5c3RhdGVzW2Uud2hpY2hdID0gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBLZXlDb2RlcyB7XG4gICAgVyA9IDg3LFxuICAgIEEgPSA2NSxcbiAgICBTID0gODMsXG4gICAgRCA9IDY4LFxuICAgIFQgPSA4NCxcbiAgICBFU0MgPSAyN1xufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
            this.hasBeenVisitied = false;
            this.health = 1000;
        }
        PlanetEntity.prototype.distanceTo = function (e2) {
            return utils_1.Utils.dist(e2.x, e2.y, this.x, this.y);
        };
        return PlanetEntity;
    }());
    exports.PlanetEntity = PlanetEntity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvcGxhbmV0LWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUNJO1lBS08sT0FBRSxHQUFXLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUkxQixtQkFBYyxHQUFtQixFQUFFLENBQUM7WUFFcEMscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1lBQy9CLGNBQVMsR0FBWSxLQUFLLENBQUM7WUFDM0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7WUFDakMsV0FBTSxHQUFXLElBQUksQ0FBQztRQWI3QixDQUFDO1FBZU0saUNBQVUsR0FBakIsVUFBa0IsRUFBZ0I7WUFDOUIsTUFBTSxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDTCxtQkFBQztJQUFELENBcEJBLEFBb0JDLElBQUE7SUFwQlksb0NBQVkiLCJmaWxlIjoiZ2FtZS9wbGFuZXQtZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgU3RhdGljRW50aXR5IH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuXG5leHBvcnQgY2xhc3MgUGxhbmV0RW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSBVdGlscy5ndWlkKCk7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuICAgIHB1YmxpYyByZXNvdXJjZXM6IG51bWJlcjtcbiAgICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHN0YXRpY0VudGl0aWVzOiBTdGF0aWNFbnRpdHlbXSA9IFtdO1xuICAgIHB1YmxpYyBzZXR0bGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBzZXR0bGVtZW50SGVhbHRoOiBudW1iZXIgPSAxMDA7XG4gICAgcHVibGljIGlzSG9zdGlsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBoYXNCZWVuVmlzaXRpZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaGVhbHRoOiBudW1iZXIgPSAxMDAwO1xuXG4gICAgcHVibGljIGRpc3RhbmNlVG8oZTI6IFBsYW5ldEVudGl0eSkge1xuICAgICAgICByZXR1cm4gVXRpbHMuZGlzdChlMi54LCBlMi55LCB0aGlzLngsIHRoaXMueSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('game/static-entity',["require", "exports", "./entity", "./factions"], function (require, exports, entity_1, factions_1) {
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
            _this.definition = StaticEntityMetadata[type];
            _this.health = _this.definition.health;
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
        upgradeTime: 30,
        faction: factions_1.Factions.Player,
    };
    StaticEntityMetadata[StaticEntities.Stockpile] = {
        name: "Stockpile",
        cost: 100,
        health: 100,
        maxUpgradeLevel: 3,
        buildTime: 20,
        upgradeTime: 30,
        faction: factions_1.Factions.Player,
    };
    StaticEntityMetadata[StaticEntities.ShipYard] = {
        name: "Ship Yard",
        cost: 100,
        health: 100,
        maxUpgradeLevel: 20,
        buildTime: 4,
        upgradeTime: 30,
        faction: factions_1.Factions.Player,
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvc3RhdGljLWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR0E7UUFBa0MsZ0NBQU07UUFjcEMsc0JBQVksSUFBb0I7WUFBaEMsWUFDSSxpQkFBTyxTQUlWO1lBYk0sd0JBQWtCLEdBQVcsRUFBRSxDQUFDO1lBQ2hDLFVBQUksR0FBVyxFQUFFLENBQUM7WUFDbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztZQVFyQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7O1FBQ3pDLENBQUM7UUFDTCxtQkFBQztJQUFELENBcEJBLEFBb0JDLENBcEJpQyxlQUFNLEdBb0J2QztJQXBCWSxvQ0FBWTtJQXNCekIsSUFBWSxjQU9YO0lBUEQsV0FBWSxjQUFjO1FBQ3RCLHFFQUFpQixDQUFBO1FBQ2pCLHFFQUFpQixDQUFBO1FBQ2pCLHVEQUFVLENBQUE7UUFDVix5RUFBbUIsQ0FBQTtRQUNuQiwyREFBWSxDQUFBO1FBQ1osNkRBQWEsQ0FBQTtJQUNqQixDQUFDLEVBUFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFPekI7SUFZRCxJQUFNLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztJQWdDdkIsb0RBQW9CO0lBOUI3QixvQkFBb0IsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUc7UUFDakQsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxHQUFHO1FBQ1gsZUFBZSxFQUFFLENBQUM7UUFDbEIsU0FBUyxFQUFFLEVBQUU7UUFDYixXQUFXLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBRSxtQkFBUSxDQUFDLE1BQU07S0FDM0IsQ0FBQztJQUVGLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRztRQUM3QyxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxHQUFHO1FBQ1gsZUFBZSxFQUFFLENBQUM7UUFDbEIsU0FBUyxFQUFFLEVBQUU7UUFDYixXQUFXLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBRSxtQkFBUSxDQUFDLE1BQU07S0FDM0IsQ0FBQztJQUVGLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRztRQUM1QyxJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsR0FBRztRQUNULE1BQU0sRUFBRSxHQUFHO1FBQ1gsZUFBZSxFQUFFLEVBQUU7UUFDbkIsU0FBUyxFQUFFLENBQUM7UUFDWixXQUFXLEVBQUUsRUFBRTtRQUNmLE9BQU8sRUFBRSxtQkFBUSxDQUFDLE1BQU07S0FDM0IsQ0FBQyIsImZpbGUiOiJnYW1lL3N0YXRpYy1lbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9lbnRpdHlcIjtcbmltcG9ydCB7IEZhY3Rpb25zIH0gZnJvbSBcIi4vZmFjdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRpY0VudGl0eSBleHRlbmRzIEVudGl0eSB7XG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IFN0YXRpY0VudGl0aWVzO1xuICAgIHB1YmxpYyBkZWZpbml0aW9uOiBTdGF0aWNFbnRpdHlEZWZpbml0aW9uO1xuICAgIHB1YmxpYyBwb3NpdGlvbk9uT3JiaXQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdXBncmFkaW5nOiBib29sZWFuO1xuICAgIHB1YmxpYyBkaXN0YW5jZUZyb21QbGFuZXQ6IG51bWJlciA9IDQwO1xuICAgIHB1YmxpYyBzaXplOiBudW1iZXIgPSA2MDtcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlciA9IDE7XG4gICAgcHVibGljIGhlYWx0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBmYWN0aW9uOiBGYWN0aW9ucztcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBTdGF0aWNFbnRpdGllcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlZmluaXRpb24gPSBTdGF0aWNFbnRpdHlNZXRhZGF0YVt0eXBlXTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmRlZmluaXRpb24uaGVhbHRoO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gU3RhdGljRW50aXRpZXMge1xuICAgIE1pbmluZ1N0YXRpb24gPSAxLFxuICAgIENvbW1hbmRDZW50ZXIgPSAyLFxuICAgIFR1cnJldCA9IDMsXG4gICAgU2hpZWxkR2VuZXJhdG9yID0gNCxcbiAgICBTaGlwWWFyZCA9IDUsXG4gICAgU3RvY2twaWxlID0gNlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRpY0VudGl0eURlZmluaXRpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb3N0OiBudW1iZXI7XG4gICAgaGVhbHRoOiBudW1iZXI7XG4gICAgYnVpbGRUaW1lOiBudW1iZXI7XG4gICAgbWF4VXBncmFkZUxldmVsOiBudW1iZXI7XG4gICAgdXBncmFkZVRpbWU6IG51bWJlcjtcbiAgICBmYWN0aW9uOiBGYWN0aW9ucztcbn1cblxuY29uc3QgU3RhdGljRW50aXR5TWV0YWRhdGEgPSB7fTtcblxuU3RhdGljRW50aXR5TWV0YWRhdGFbU3RhdGljRW50aXRpZXMuTWluaW5nU3RhdGlvbl0gPSB7XG4gICAgbmFtZTogXCJNaW5pbmcgU3RhdGlvblwiLFxuICAgIGNvc3Q6IDEwMCxcbiAgICBoZWFsdGg6IDEwMCxcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IDMsXG4gICAgYnVpbGRUaW1lOiAyMCxcbiAgICB1cGdyYWRlVGltZTogMzAsXG4gICAgZmFjdGlvbjogRmFjdGlvbnMuUGxheWVyLFxufTtcblxuU3RhdGljRW50aXR5TWV0YWRhdGFbU3RhdGljRW50aXRpZXMuU3RvY2twaWxlXSA9IHtcbiAgICBuYW1lOiBcIlN0b2NrcGlsZVwiLFxuICAgIGNvc3Q6IDEwMCxcbiAgICBoZWFsdGg6IDEwMCxcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IDMsXG4gICAgYnVpbGRUaW1lOiAyMCxcbiAgICB1cGdyYWRlVGltZTogMzAsXG4gICAgZmFjdGlvbjogRmFjdGlvbnMuUGxheWVyLFxufTtcblxuU3RhdGljRW50aXR5TWV0YWRhdGFbU3RhdGljRW50aXRpZXMuU2hpcFlhcmRdID0ge1xuICAgIG5hbWU6IFwiU2hpcCBZYXJkXCIsXG4gICAgY29zdDogMTAwLFxuICAgIGhlYWx0aDogMTAwLFxuICAgIG1heFVwZ3JhZGVMZXZlbDogMjAsXG4gICAgYnVpbGRUaW1lOiA0LFxuICAgIHVwZ3JhZGVUaW1lOiAzMCxcbiAgICBmYWN0aW9uOiBGYWN0aW9ucy5QbGF5ZXIsXG59O1xuXG5leHBvcnQgeyBTdGF0aWNFbnRpdHlNZXRhZGF0YSB9OyJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/tick.service',["require", "exports", "aurelia-framework", "./game-state.service", "./static-entity", "./enemy-ai.service", "lodash"], function (require, exports, aurelia_framework_1, game_state_service_1, static_entity_1, enemy_ai_service_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TickService = TickService_1 = (function () {
        function TickService(_gameStateService, _enemyAiService) {
            this._gameStateService = _gameStateService;
            this._enemyAiService = _enemyAiService;
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
            this._enemyAiService.update(this.ticks);
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
        aurelia_framework_1.inject(game_state_service_1.GameStateService, enemy_ai_service_1.EnemyAiService),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService, enemy_ai_service_1.EnemyAiService])
    ], TickService);
    exports.TickService = TickService;
    var TickService_1;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SUFBZ0I7b0JBQXpCLElBQUksQ0FBQyxTQUFBO29CQUNMLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksOEJBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDekksQ0FBQyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQztvQkFDckQsQ0FBQztpQkFDSjthQUNKO1FBQ0wsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0E5REEsQUE4REMsSUFBQTtJQTdEaUIsd0JBQVksR0FBVyxDQUFDLENBQUM7SUFEOUIsV0FBVztRQUR2QiwwQkFBTSxDQUFDLHFDQUFnQixFQUFFLGlDQUFjLENBQUM7eUNBVUUscUNBQWdCLEVBQTJCLGlDQUFjO09BVHZGLFdBQVcsQ0E4RHZCO0lBOURZLGtDQUFXIiwiZmlsZSI6ImdhbWUvdGljay5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHYW1lU3RhdGVTZXJ2aWNlLCBHYW1lU3RhdGUgfSBmcm9tIFwiLi9nYW1lLXN0YXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBsYW5ldEVudGl0eSB9IGZyb20gXCIuL3BsYW5ldC1lbnRpdHlcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0eSwgU3RhdGljRW50aXRpZXMgfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBFbmVteUFpU2VydmljZSB9IGZyb20gXCIuL2VuZW15LWFpLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AaW5qZWN0KEdhbWVTdGF0ZVNlcnZpY2UsIEVuZW15QWlTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIFRpY2tTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIFRpY2tJbnRlcnZhbDogbnVtYmVyID0gNDtcblxuICAgIHByaXZhdGUgZXZlbnRzOiBTY2hlZHVsZWRFdmVudFtdID0gW107XG4gICAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyO1xuICAgIHB1YmxpYyB0aWNrczogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfdGltZUF0TGFzdFRpY2s6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dhbWVTdGF0ZVNlcnZpY2U6IEdhbWVTdGF0ZVNlcnZpY2UsIHByaXZhdGUgX2VuZW15QWlTZXJ2aWNlOiBFbmVteUFpU2VydmljZSkge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xuICAgICAgICB0aGlzLl90aW1lQXRMYXN0VGljayA9IHRoaXMuc3RhcnRUaW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY2hlZHVsZUV2ZW50KGV2OiBTY2hlZHVsZWRFdmVudCkge1xuICAgICAgICBldi50aWNrU2NoZWR1bGVkQXQgPSB0aGlzLnRpY2tzO1xuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKGV2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB0aWNrSW50ZXJ2YWxJbk1zID0gKDEwMDAvVGlja1NlcnZpY2UuVGlja0ludGVydmFsKTtcbiAgICAgICAgY29uc3QgdCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGR0ID0gdCAtIHRoaXMuX3RpbWVBdExhc3RUaWNrO1xuXG4gICAgICAgIGxldCBuVGlja3MgPSBNYXRoLmZsb29yKGR0L3RpY2tJbnRlcnZhbEluTXMpO1xuICAgICAgICB3aGlsZShuVGlja3MgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgICAgICAgIC0tblRpY2tzO1xuICAgICAgICAgICAgdGhpcy5fdGltZUF0TGFzdFRpY2sgPSB0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aWNrKCkge1xuICAgICAgICArK3RoaXMudGlja3M7XG4gICAgICAgIGlmICh0aGlzLnRpY2tzICUgOCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1pbmVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW5lbXlBaVNlcnZpY2UudXBkYXRlKHRoaXMudGlja3MpO1xuXG4gICAgICAgIGZvcihsZXQgZXYgb2YgdGhpcy5ldmVudHMpIHtcbiAgICAgICAgICAgIGV2Lm9uVGljayAmJiBldi5vblRpY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpY2tzID4gZXYudGlja1NjaGVkdWxlZEF0ICsgZXYubikge1xuICAgICAgICAgICAgICAgIGV2Lm9uQ29tcGxldGlvbiAmJiBldi5vbkNvbXBsZXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzID0gXy5maWx0ZXIodGhpcy5ldmVudHMsIGV2ID0+IHRoaXMudGlja3MgPD0gZXYudGlja1NjaGVkdWxlZEF0ICsgZXYubik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVNaW5lcnMoKSB7XG4gICAgICAgIGZvcihsZXQgcCBvZiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMpIHtcbiAgICAgICAgICAgIGZvcihsZXQgcyBvZiBwLnN0YXRpY0VudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudHlwZSA9PSBTdGF0aWNFbnRpdGllcy5NaW5pbmdTdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyID0gTWF0aC5taW4ocC5yZXNvdXJjZXMsIE1hdGgubWF4KHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucmVzb3VyY2VDYXAgLSB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQsIDApLCA1MCk7XG4gICAgICAgICAgICAgICAgICAgIHAucmVzb3VyY2VzIC09IGRyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQgKz0gZHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlZEV2ZW50IHtcbiAgICB0aWNrU2NoZWR1bGVkQXQ6IG51bWJlcjtcbiAgICBuOiBudW1iZXI7XG4gICAgb25Db21wbGV0aW9uOiBhbnk7XG4gICAgb25UaWNrOiBhbnk7XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
define('game/transient-entity',["require", "exports", "./entity", "./utils", "./rng", "./event.service", "./factions", "lodash"], function (require, exports, entity_1, utils_1, rng_1, event_service_1, factions_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TransientEntity = (function (_super) {
        __extends(TransientEntity, _super);
        function TransientEntity(type, eventService) {
            var _this = _super.call(this) || this;
            _this.actualDistanceFromOrbitingPlanet = 250;
            _this.desiredDistanceFromOrbitingPlanet = 250;
            _this.distanceFromOrbitingPlanet = 250 + rng_1.Rng.rnd(-15, 15);
            _this.distanceFromOrbitingPlanetWhileAttacking = 290 + rng_1.Rng.rnd(-5, 5);
            _this.x = 0;
            _this.y = 0;
            _this.positionOnObirt = rng_1.Rng.rnd(0, 2 * Math.PI);
            _this.orbitDirection = rng_1.Rng.rnd(0, 100) < 50 ? 1 : -1;
            _this.orbitSpeed = 0.25 + rng_1.Rng.rnd(-0.1, 0.1);
            _this.movementSpeed = 300;
            _this.markedForMovement = false;
            _this.lastFireAt = Date.now();
            _this.type = type;
            _this.definition = TransientEntityMetadata[type];
            _this.health = _this.definition.health;
            _this._eventService = eventService;
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
                    this.actualDistanceFromOrbitingPlanet = distToPlanet;
                    this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanetWhileAttacking;
                    this.positionOnObirt = angleToPlanet;
                    this.onEnterPlanet && this.onEnterPlanet(this.orbitingPlanet);
                    this.state = TransientEntityState.Orbiting;
                }
            }
            else {
                if (distToPlanet <= this.distanceFromOrbitingPlanetWhileAttacking + this.orbitingPlanet.radius) {
                    this.actualDistanceFromOrbitingPlanet = distToPlanet;
                    this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanet;
                    this.positionOnObirt = angleToPlanet;
                    this.state = TransientEntityState.Attacking;
                }
            }
        };
        TransientEntity.prototype.isHostileTo = function (p, entities) {
            var _this = this;
            return _.some(entities, function (e) { return e.orbitingPlanet.id == p.id && e.faction != _this.faction; })
                || _.some(this.orbitingPlanet.staticEntities, function (e) { return e.faction != _this.faction; })
                || (this.faction == factions_1.Factions.Enemy && this.orbitingPlanet.settled);
        };
        TransientEntity.prototype.updateOrbit = function (deltaT, otherEntities) {
            var _this = this;
            var t = Date.now();
            this.positionOnObirt += this.orbitDirection * this.orbitSpeed * deltaT;
            if (this.actualDistanceFromOrbitingPlanet != this.desiredDistanceFromOrbitingPlanet) {
                var dir = this.actualDistanceFromOrbitingPlanet - this.desiredDistanceFromOrbitingPlanet > 0 ? -1 : 1;
                this.actualDistanceFromOrbitingPlanet += dir * 0.6;
                if (Math.abs(this.actualDistanceFromOrbitingPlanet - this.desiredDistanceFromOrbitingPlanet) < 2) {
                    this.actualDistanceFromOrbitingPlanet = this.desiredDistanceFromOrbitingPlanet;
                }
            }
            var distFromPlanet = this.actualDistanceFromOrbitingPlanet;
            var desiredX = this.orbitingPlanet.x + (Math.cos(this.positionOnObirt) * distFromPlanet) + this.orbitingPlanet.radius;
            var desiredY = this.orbitingPlanet.y + (Math.sin(this.positionOnObirt) * distFromPlanet) + this.orbitingPlanet.radius;
            var dX = this.x - desiredX;
            var dY = this.y - desiredY;
            this.x -= dX * 2 * deltaT;
            this.y -= dY * 2 * deltaT;
            var enemies = _.orderBy(_.filter(otherEntities, function (e) { return e.orbitingPlanet.id == _this.orbitingPlanet.id && e.faction != _this.faction && e.state != TransientEntityState.Moving; }), function (e) { return utils_1.Utils.dist(_this.x, _this.y, e.x, e.y); });
            var constructs = this.orbitingPlanet.staticEntities;
            var planetTarget = null;
            if (this.definition.faction == factions_1.Factions.Enemy && this.orbitingPlanet.settled) {
                planetTarget = this.orbitingPlanet;
            }
            if (this.state == TransientEntityState.Orbiting && enemies.length == 0)
                return;
            if (enemies.length == 0 && constructs.length == 0 && planetTarget == null) {
                this.state = TransientEntityState.Orbiting;
                this.onEnterPlanet && this.onEnterPlanet(this.orbitingPlanet);
                this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanet;
            }
            else {
                if (t - this.lastFireAt >= this.definition.fireRate) {
                    this.lastFireAt = t;
                    var target = void 0;
                    if (enemies.length > 0) {
                        target = enemies[0];
                        this._eventService.postEvent(event_service_1.EventTypes.ShotFired, {
                            e1: this,
                            e2: target
                        });
                    }
                    else if (constructs.length > 0) {
                        target = constructs[0];
                        this._eventService.postEvent(event_service_1.EventTypes.ShotFired, {
                            e1: this,
                            e2: {
                                x: target.x + this.orbitingPlanet.x + this.orbitingPlanet.radius,
                                y: target.y + this.orbitingPlanet.y + this.orbitingPlanet.radius
                            }
                        });
                    }
                    else {
                        target = planetTarget;
                        this._eventService.postEvent(event_service_1.EventTypes.ShotFired, {
                            e1: this,
                            e2: {
                                x: target.x + target.radius,
                                y: target.y + target.radius
                            }
                        });
                    }
                    target.health -= 10;
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
    var TransientEntityMetadata = {};
    exports.TransientEntityMetadata = TransientEntityMetadata;
    TransientEntityMetadata[TransientEntities.SettlementShip] = {
        name: "Settlement Ship",
        health: 100,
        cost: 50,
        buildTime: 40,
        fireRate: 1700,
        sprite: "src/assets/friendly.png",
        faction: factions_1.Factions.Player,
    };
    TransientEntityMetadata[TransientEntities.Drone] = {
        name: "Drone",
        health: 100,
        cost: 50,
        buildTime: 12,
        fireRate: 2300,
        faction: factions_1.Factions.Player,
        sprite: "src/assets/friendly.png",
    };
    TransientEntityMetadata[TransientEntities.EnemyDrone] = {
        name: "Enemy Drone",
        health: 100,
        cost: 0,
        buildTime: 0,
        fireRate: 2600,
        sprite: "src/assets/enemy.png",
        faction: factions_1.Factions.Enemy,
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvdHJhbnNpZW50LWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBUUE7UUFBcUMsbUNBQU07UUF1QnZDLHlCQUFZLElBQXVCLEVBQUUsWUFBMEI7WUFBL0QsWUFDSSxpQkFBTyxTQUtWO1lBNUJPLHNDQUFnQyxHQUFXLEdBQUcsQ0FBQztZQUMvQyx1Q0FBaUMsR0FBVyxHQUFHLENBQUM7WUFDakQsZ0NBQTBCLEdBQVcsR0FBRyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUQsOENBQXdDLEdBQVcsR0FBRyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFHeEUsT0FBQyxHQUFXLENBQUMsQ0FBQztZQUNkLE9BQUMsR0FBVyxDQUFDLENBQUM7WUFFZCxxQkFBZSxHQUFXLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEQsb0JBQWMsR0FBVyxTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELGdCQUFVLEdBQVcsSUFBSSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsbUJBQWEsR0FBVyxHQUFHLENBQUM7WUFHNUIsdUJBQWlCLEdBQVksS0FBSyxDQUFDO1lBR25DLGdCQUFVLEdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBTW5DLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFB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Q1gsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsT0FBTyxFQUFFLG1CQUFRLENBQUMsTUFBTTtRQUN4QixNQUFNLEVBQUUseUJBQXlCO0tBQ3BDLENBQUM7SUFFRix1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsR0FBRztRQUNwRCxJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsR0FBRztRQUNYLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxzQkFBc0I7UUFDOUIsT0FBTyxFQUFFLG1CQUFRLENBQUMsS0FBSztLQUMxQixDQUFDIiwiZmlsZSI6ImdhbWUvdHJhbnNpZW50LWVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgUm5nIH0gZnJvbSBcIi4vcm5nXCJcbmltcG9ydCB7IEV2ZW50U2VydmljZSwgRXZlbnRUeXBlcyB9IGZyb20gXCIuL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IEZhY3Rpb25zIH0gZnJvbSBcIi4vZmFjdGlvbnNcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpZW50RW50aXR5IGV4dGVuZHMgRW50aXR5IHtcbiAgICBwcml2YXRlIGFjdHVhbERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0OiBudW1iZXIgPSAyNTA7XG4gICAgcHJpdmF0ZSBkZXNpcmVkRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ6IG51bWJlciA9IDI1MDtcbiAgICBwdWJsaWMgZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ6IG51bWJlciA9IDI1MCArIFJuZy5ybmQoLTE1LCAxNSk7XG4gICAgcHVibGljIGRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0V2hpbGVBdHRhY2tpbmc6IG51bWJlciA9IDI5MCArIFJuZy5ybmQoLTUsIDUpO1xuICAgIHB1YmxpYyB0eXBlOiBUcmFuc2llbnRFbnRpdGllcztcbiAgICBwdWJsaWMgZGVmaW5pdGlvbjogVHJhbnNpZW50RW50aXR5RGVmaW5pdGlvbjtcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZGVhZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgcG9zaXRpb25Pbk9iaXJ0OiBudW1iZXIgPSBSbmcucm5kKDAsIDIgKiBNYXRoLlBJKTtcbiAgICBwdWJsaWMgb3JiaXREaXJlY3Rpb246IG51bWJlciA9IFJuZy5ybmQoMCwgMTAwKSA8IDUwID8gMSA6IC0xO1xuICAgIHB1YmxpYyBvcmJpdFNwZWVkOiBudW1iZXIgPSAwLjI1ICsgUm5nLnJuZCgtMC4xLCAwLjEpO1xuICAgIHB1YmxpYyBtb3ZlbWVudFNwZWVkOiBudW1iZXIgPSAzMDA7XG4gICAgcHVibGljIHN0YXRlOiBUcmFuc2llbnRFbnRpdHlTdGF0ZTtcbiAgICBwdWJsaWMgb3JiaXRpbmdQbGFuZXQ6IFBsYW5ldEVudGl0eTtcbiAgICBwdWJsaWMgbWFya2VkRm9yTW92ZW1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZmFjdGlvbjogRmFjdGlvbnM7XG4gICAgcHVibGljIG9uRW50ZXJQbGFuZXQ6IGFueTtcbiAgICBwdWJsaWMgbGFzdEZpcmVBdDogbnVtYmVyID0gRGF0ZS5ub3coKTtcblxuICAgIHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogVHJhbnNpZW50RW50aXRpZXMsIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IFRyYW5zaWVudEVudGl0eU1ldGFkYXRhW3R5cGVdO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IHRoaXMuZGVmaW5pdGlvbi5oZWFsdGg7XG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZSA9IGV2ZW50U2VydmljZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YVQ6IG51bWJlciwgb3RoZXJFbnRpdGllczogVHJhbnNpZW50RW50aXR5W10pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmcgfHwgdGhpcy5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5BdHRhY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3JiaXQoZGVsdGFULCBvdGhlckVudGl0aWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb3ZpbmcoZGVsdGFULCBvdGhlckVudGl0aWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVNb3ZpbmcoZGVsdGFUOiBudW1iZXIsIG90aGVyRW50aXRpZXM6IFRyYW5zaWVudEVudGl0eVtdKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlVG9QbGFuZXQgPSBNYXRoLmF0YW4yKHRoaXMueSAtIHRoaXMub3JiaXRpbmdQbGFuZXQueSwgdGhpcy54IC0gdGhpcy5vcmJpdGluZ1BsYW5ldC54KTtcbiAgICAgICAgdGhpcy54IC09IE1hdGguY29zKGFuZ2xlVG9QbGFuZXQpICogdGhpcy5tb3ZlbWVudFNwZWVkICogZGVsdGFUO1xuICAgICAgICB0aGlzLnkgLT0gTWF0aC5zaW4oYW5nbGVUb1BsYW5ldCkgKiB0aGlzLm1vdmVtZW50U3BlZWQgKiBkZWx0YVQ7XG5cbiAgICAgICAgY29uc3QgZGlzdFRvUGxhbmV0ID0gVXRpbHMuZGlzdCh0aGlzLngsIHRoaXMueSwgdGhpcy5vcmJpdGluZ1BsYW5ldC54LCB0aGlzLm9yYml0aW5nUGxhbmV0LnkpO1xuICAgICAgICBpZiAoIXRoaXMuaXNIb3N0aWxlVG8odGhpcy5vcmJpdGluZ1BsYW5ldCwgb3RoZXJFbnRpdGllcykpIHtcbiAgICAgICAgICAgIGlmIChkaXN0VG9QbGFuZXQgPD0gdGhpcy5kaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCArIHRoaXMub3JiaXRpbmdQbGFuZXQucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxEaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IGRpc3RUb1BsYW5ldDtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lyZWREaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IHRoaXMuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXRXaGlsZUF0dGFja2luZztcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uT25PYmlydCA9IGFuZ2xlVG9QbGFuZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkVudGVyUGxhbmV0ICYmIHRoaXMub25FbnRlclBsYW5ldCh0aGlzLm9yYml0aW5nUGxhbmV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlzdFRvUGxhbmV0IDw9IHRoaXMuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXRXaGlsZUF0dGFja2luZyArIHRoaXMub3JiaXRpbmdQbGFuZXQucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxEaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IGRpc3RUb1BsYW5ldDtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lyZWREaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IHRoaXMuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk9uT2JpcnQgPSBhbmdsZVRvUGxhbmV0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5BdHRhY2tpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNIb3N0aWxlVG8ocDogUGxhbmV0RW50aXR5LCBlbnRpdGllczogVHJhbnNpZW50RW50aXR5W10pIHtcbiAgICAgICAgcmV0dXJuIF8uc29tZShlbnRpdGllcywgZSA9PiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHAuaWQgJiYgZS5mYWN0aW9uICE9IHRoaXMuZmFjdGlvbilcbiAgICAgICAgICAgIHx8IF8uc29tZSh0aGlzLm9yYml0aW5nUGxhbmV0LnN0YXRpY0VudGl0aWVzLCBlID0+IGUuZmFjdGlvbiAhPSB0aGlzLmZhY3Rpb24pXG4gICAgICAgICAgICB8fCAodGhpcy5mYWN0aW9uID09IEZhY3Rpb25zLkVuZW15ICYmIHRoaXMub3JiaXRpbmdQbGFuZXQuc2V0dGxlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVPcmJpdChkZWx0YVQ6IG51bWJlciwgb3RoZXJFbnRpdGllczogVHJhbnNpZW50RW50aXR5W10pIHtcbiAgICAgICAgY29uc3QgdCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMucG9zaXRpb25Pbk9iaXJ0ICs9IHRoaXMub3JiaXREaXJlY3Rpb24gKiB0aGlzLm9yYml0U3BlZWQgKiBkZWx0YVQ7XG5cbiAgICAgICAgaWYgKHRoaXMuYWN0dWFsRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQgIT0gdGhpcy5kZXNpcmVkRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpciA9IHRoaXMuYWN0dWFsRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQgLSB0aGlzLmRlc2lyZWREaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA+IDAgPyAtMSA6IDE7XG4gICAgICAgICAgICB0aGlzLmFjdHVhbERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0ICs9IGRpciAqIDAuNjtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmFjdHVhbERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0IC0gdGhpcy5kZXNpcmVkRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQpIDwgMikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0dWFsRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQgPSB0aGlzLmRlc2lyZWREaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpc3RGcm9tUGxhbmV0ID0gdGhpcy5hY3R1YWxEaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldDtcblxuICAgICAgICBjb25zdCBkZXNpcmVkWCA9IHRoaXMub3JiaXRpbmdQbGFuZXQueCArIChNYXRoLmNvcyh0aGlzLnBvc2l0aW9uT25PYmlydCkgKiBkaXN0RnJvbVBsYW5ldCkgKyB0aGlzLm9yYml0aW5nUGxhbmV0LnJhZGl1cztcbiAgICAgICAgY29uc3QgZGVzaXJlZFkgPSB0aGlzLm9yYml0aW5nUGxhbmV0LnkgKyAoTWF0aC5zaW4odGhpcy5wb3NpdGlvbk9uT2JpcnQpICogZGlzdEZyb21QbGFuZXQpICsgdGhpcy5vcmJpdGluZ1BsYW5ldC5yYWRpdXM7XG5cbiAgICAgICAgY29uc3QgZFggPSB0aGlzLnggLSBkZXNpcmVkWDtcbiAgICAgICAgY29uc3QgZFkgPSB0aGlzLnkgLSBkZXNpcmVkWTtcblxuICAgICAgICB0aGlzLnggLT0gZFggKiAyICogZGVsdGFUO1xuICAgICAgICB0aGlzLnkgLT0gZFkgKiAyICogZGVsdGFUO1xuXG4gICAgICAgIGNvbnN0IGVuZW1pZXMgPSBfLm9yZGVyQnkoXy5maWx0ZXIob3RoZXJFbnRpdGllcywgZSA9PiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHRoaXMub3JiaXRpbmdQbGFuZXQuaWQgJiYgZS5mYWN0aW9uICE9IHRoaXMuZmFjdGlvbiAmJiBlLnN0YXRlICE9IFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZyksIGUgPT4gVXRpbHMuZGlzdCh0aGlzLngsIHRoaXMueSwgZS54LCBlLnkpKTtcbiAgICAgICAgY29uc3QgY29uc3RydWN0cyA9IHRoaXMub3JiaXRpbmdQbGFuZXQuc3RhdGljRW50aXRpZXM7XG5cbiAgICAgICAgbGV0IHBsYW5ldFRhcmdldCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmRlZmluaXRpb24uZmFjdGlvbiA9PSBGYWN0aW9ucy5FbmVteSAmJiB0aGlzLm9yYml0aW5nUGxhbmV0LnNldHRsZWQpIHtcbiAgICAgICAgICAgIHBsYW5ldFRhcmdldCA9IHRoaXMub3JiaXRpbmdQbGFuZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZyAmJiBlbmVtaWVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChlbmVtaWVzLmxlbmd0aCA9PSAwICYmIGNvbnN0cnVjdHMubGVuZ3RoID09IDAgJiYgcGxhbmV0VGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZztcbiAgICAgICAgICAgIHRoaXMub25FbnRlclBsYW5ldCAmJiB0aGlzLm9uRW50ZXJQbGFuZXQodGhpcy5vcmJpdGluZ1BsYW5ldCk7XG4gICAgICAgICAgICB0aGlzLmRlc2lyZWREaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IHRoaXMuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodCAtIHRoaXMubGFzdEZpcmVBdCA+PSB0aGlzLmRlZmluaXRpb24uZmlyZVJhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RGaXJlQXQgPSB0O1xuXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGVuZW1pZXNbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5wb3N0RXZlbnQoRXZlbnRUeXBlcy5TaG90RmlyZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUxOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZTI6IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBjb25zdHJ1Y3RzWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucG9zdEV2ZW50KEV2ZW50VHlwZXMuU2hvdEZpcmVkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlMTogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGUyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGFyZ2V0LnggKyB0aGlzLm9yYml0aW5nUGxhbmV0LnggKyB0aGlzLm9yYml0aW5nUGxhbmV0LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0YXJnZXQueSArIHRoaXMub3JiaXRpbmdQbGFuZXQueSArIHRoaXMub3JiaXRpbmdQbGFuZXQucmFkaXVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHBsYW5ldFRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnBvc3RFdmVudChFdmVudFR5cGVzLlNob3RGaXJlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZTE6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBlMjogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0YXJnZXQueCArIHRhcmdldC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGFyZ2V0LnkgKyB0YXJnZXQucmFkaXVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldC5oZWFsdGggLT0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIFRyYW5zaWVudEVudGl0eVN0YXRlIHtcbiAgICBPcmJpdGluZyA9IDEsXG4gICAgTW92aW5nID0gMixcbiAgICBBdHRhY2tpbmcgPSAzXG59XG5cbmV4cG9ydCBlbnVtIFRyYW5zaWVudEVudGl0aWVzIHtcbiAgICBTZXR0bGVtZW50U2hpcCA9IDEsXG4gICAgRHJvbmUgPSAyLFxuICAgIEVuZW15RHJvbmUgPSAzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpZW50RW50aXR5RGVmaW5pdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNvc3Q6IG51bWJlcjtcbiAgICBoZWFsdGg6IG51bWJlcjtcbiAgICBidWlsZFRpbWU6IG51bWJlcjtcbiAgICBmaXJlUmF0ZTogbnVtYmVyO1xuICAgIHNwcml0ZTogc3RyaW5nO1xuICAgIGZhY3Rpb246IEZhY3Rpb25zO1xufVxuXG5jb25zdCBUcmFuc2llbnRFbnRpdHlNZXRhZGF0YSA9IHt9O1xuXG5UcmFuc2llbnRFbnRpdHlNZXRhZGF0YVtUcmFuc2llbnRFbnRpdGllcy5TZXR0bGVtZW50U2hpcF0gPSB7XG4gICAgbmFtZTogXCJTZXR0bGVtZW50IFNoaXBcIixcbiAgICBoZWFsdGg6IDEwMCxcbiAgICBjb3N0OiA1MCxcbiAgICBidWlsZFRpbWU6IDQwLFxuICAgIGZpcmVSYXRlOiAxNzAwLFxuICAgIHNwcml0ZTogXCJzcmMvYXNzZXRzL2ZyaWVuZGx5LnBuZ1wiLFxuICAgIGZhY3Rpb246IEZhY3Rpb25zLlBsYXllcixcbn07XG5cblRyYW5zaWVudEVudGl0eU1ldGFkYXRhW1RyYW5zaWVudEVudGl0aWVzLkRyb25lXSA9IHtcbiAgICBuYW1lOiBcIkRyb25lXCIsXG4gICAgaGVhbHRoOiAxMDAsXG4gICAgY29zdDogNTAsXG4gICAgYnVpbGRUaW1lOiAxMixcbiAgICBmaXJlUmF0ZTogMjMwMCxcbiAgICBmYWN0aW9uOiBGYWN0aW9ucy5QbGF5ZXIsXG4gICAgc3ByaXRlOiBcInNyYy9hc3NldHMvZnJpZW5kbHkucG5nXCIsXG59O1xuXG5UcmFuc2llbnRFbnRpdHlNZXRhZGF0YVtUcmFuc2llbnRFbnRpdGllcy5FbmVteURyb25lXSA9IHtcbiAgICBuYW1lOiBcIkVuZW15IERyb25lXCIsXG4gICAgaGVhbHRoOiAxMDAsXG4gICAgY29zdDogMCxcbiAgICBidWlsZFRpbWU6IDAsXG4gICAgZmlyZVJhdGU6IDI2MDAsXG4gICAgc3ByaXRlOiBcInNyYy9hc3NldHMvZW5lbXkucG5nXCIsXG4gICAgZmFjdGlvbjogRmFjdGlvbnMuRW5lbXksXG59O1xuXG5leHBvcnQgeyBUcmFuc2llbnRFbnRpdHlNZXRhZGF0YSB9Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        UiService.prototype.resetUiState = function () {
            this.deselectCurrent();
            for (var _i = 0, _a = this._gameStateService.state.transientEntities; _i < _a.length; _i++) {
                var e = _a[_i];
                e.markedForMovement = false;
            }
            this.selectedPlanet = null;
            this.selectedStaticEntity = null;
            this.state = ContextUiStates.None;
        };
        UiService.prototype.moveUnits = function () {
            if (!_.some(this._gameStateService.state.transientEntities, function (e) { return e.markedForMovement; }))
                return;
            this.deselectCurrent();
            this.state = ContextUiStates.SelectingPlanetForMovement;
        };
        UiService.prototype.selectPlanet = function (p) {
            if (this.state == ContextUiStates.SelectingPlanetForMovement) {
                if (_.some(this._gameStateService.state.transientEntities, function (e) { return e.markedForMovement && e.orbitingPlanet.id == p.id; })) {
                }
                else {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3hDLENBQUM7UUFDTCxDQUFDO1FBRU0sc0NBQWtCLEdBQXpCLFVBQTBCLENBQWU7WUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxlQUFlLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3pELE1BQU0sQ0FBQztZQUVYLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUM5QyxDQUFDO1FBQ0wsZ0JBQUM7SUFBRCxDQTlEQSxBQThEQyxJQUFBO0lBOURZLFNBQVM7UUFEckIsMEJBQU0sQ0FBQyxxQ0FBZ0IsQ0FBQzt5Q0FNa0IscUNBQWdCO09BTDlDLFNBQVMsQ0E4RHJCO0lBOURZLDhCQUFTO0lBZ0V0QixJQUFZLGVBS1g7SUFMRCxXQUFZLGVBQWU7UUFDdkIscURBQVEsQ0FBQTtRQUNSLHlEQUFVLENBQUE7UUFDVixxRUFBZ0IsQ0FBQTtRQUNoQixpR0FBOEIsQ0FBQTtJQUNsQyxDQUFDLEVBTFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFLMUIiLCJmaWxlIjoiZ2FtZS91aS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5U3RhdGUgfSBmcm9tICcuL3RyYW5zaWVudC1lbnRpdHknO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi9wbGFuZXQtZW50aXR5XCI7XG5pbXBvcnQgeyBTdGF0aWNFbnRpdHkgfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vZ2FtZS1zdGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQGluamVjdChHYW1lU3RhdGVTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIFVpU2VydmljZSB7XG4gICAgcHVibGljIHNlbGVjdGVkUGxhbmV0OiBQbGFuZXRFbnRpdHk7XG4gICAgcHVibGljIHNlbGVjdGVkU3RhdGljRW50aXR5OiBTdGF0aWNFbnRpdHk7XG4gICAgcHVibGljIHN0YXRlOiBDb250ZXh0VWlTdGF0ZXMgPSBDb250ZXh0VWlTdGF0ZXMuTm9uZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dhbWVTdGF0ZVNlcnZpY2U6IEdhbWVTdGF0ZVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZGVzZWxlY3RDdXJyZW50KCkge1xuICAgICAgICAhIXRoaXMuc2VsZWN0ZWRQbGFuZXQgJiYgKHRoaXMuc2VsZWN0ZWRQbGFuZXQuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgICAgICEhdGhpcy5zZWxlY3RlZFN0YXRpY0VudGl0eSAmJiAodGhpcy5zZWxlY3RlZFN0YXRpY0VudGl0eS5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRVaVN0YXRlKCkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0Q3VycmVudCgpO1xuICAgICAgICBmb3IobGV0IGUgb2YgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcykge1xuICAgICAgICAgICAgZS5tYXJrZWRGb3JNb3ZlbWVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQbGFuZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdGljRW50aXR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnRleHRVaVN0YXRlcy5Ob25lO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlVW5pdHMoKSB7XG4gICAgICAgIGlmICghXy5zb21lKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIGUgPT4gZS5tYXJrZWRGb3JNb3ZlbWVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZGVzZWxlY3RDdXJyZW50KCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb250ZXh0VWlTdGF0ZXMuU2VsZWN0aW5nUGxhbmV0Rm9yTW92ZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdFBsYW5ldChwOiBQbGFuZXRFbnRpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gQ29udGV4dFVpU3RhdGVzLlNlbGVjdGluZ1BsYW5ldEZvck1vdmVtZW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zb21lKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIGUgPT4gZS5tYXJrZWRGb3JNb3ZlbWVudCAmJiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHAuaWQpKSB7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBlIG9mIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUubWFya2VkRm9yTW92ZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubWFya2VkRm9yTW92ZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUub3JiaXRpbmdQbGFuZXQgPSBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdGF0ZSA9IFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gQ29udGV4dFVpU3RhdGVzLk5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0Q3VycmVudCgpO1xuICAgICAgICAgICAgcC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUGxhbmV0ID0gcDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDb250ZXh0VWlTdGF0ZXMuUGxhbmV0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdFN0YXRpY0VudGl0eShlOiBTdGF0aWNFbnRpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gQ29udGV4dFVpU3RhdGVzLlNlbGVjdGluZ1BsYW5ldEZvck1vdmVtZW50KVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZGVzZWxlY3RDdXJyZW50KCk7XG4gICAgICAgIGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdGljRW50aXR5ID0gZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnRleHRVaVN0YXRlcy5TdGF0aWNFbnRpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBDb250ZXh0VWlTdGF0ZXMge1xuICAgIE5vbmUgPSAxLFxuICAgIFBsYW5ldCA9IDIsXG4gICAgU3RhdGljRW50aXR5ID0gMyxcbiAgICBTZWxlY3RpbmdQbGFuZXRGb3JNb3ZlbWVudCA9IDRcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('game/enemy-ai.service',["require", "exports", "aurelia-framework", "./event.service", "./game-state.service", "./transient-entity", "./factions", "./rng", "./utils", "lodash"], function (require, exports, aurelia_framework_1, event_service_1, game_state_service_1, transient_entity_1, factions_1, rng_1, utils_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EnemyAiService = (function () {
        function EnemyAiService(_eventService, _gameStateService) {
            this._eventService = _eventService;
            this._gameStateService = _gameStateService;
            this.lastAttackAt = 120;
            this.lastTimeGettingUnits = {};
        }
        Object.defineProperty(EnemyAiService.prototype, "units", {
            get: function () {
                return _.filter(this._gameStateService.state.transientEntities, function (e) { return e.faction == factions_1.Factions.Enemy; });
            },
            enumerable: true,
            configurable: true
        });
        EnemyAiService.prototype.update = function (tick) {
            var _this = this;
            var units = this.units;
            if (units.length == 0)
                return;
            var planets = _.filter(this._gameStateService.state.planets, function (p) { return _.some(units, function (u) { return u.orbitingPlanet.id == p.id && u.state == transient_entity_1.TransientEntityState.Orbiting; }); });
            if (planets.length == 0)
                return;
            if (tick - this.lastAttackAt > 40) {
                if (rng_1.Rng.rnd(0, 100) < 20) {
                    this.lastAttackAt = tick;
                    var planet_1 = planets[Math.floor(rng_1.Rng.rnd(0, planets.length))];
                    var planetToAttack = _.filter(_.orderBy(this._gameStateService.state.planets, function (p) { return utils_1.Utils.dist(planet_1.x, planet_1.y, p.x, p.y); }), function (p) { return !_.some(_this._gameStateService.state.transientEntities, function (e) {
                        return e.orbitingPlanet.id == p.id
                            && e.state != transient_entity_1.TransientEntityState.Moving
                            && e.state != transient_entity_1.TransientEntityState.Attacking
                            && e.faction == factions_1.Factions.Enemy;
                    }); })[0];
                    var unitsAtPlanet = _.filter(units, function (u) { return u.orbitingPlanet.id == planet_1.id; });
                    var unitsToSend = Math.max(1, Math.floor(rng_1.Rng.rnd(0, unitsAtPlanet.length)));
                    for (var i = 0; i < unitsToSend; i++) {
                        var u = unitsAtPlanet[i];
                        u.state = transient_entity_1.TransientEntityState.Moving;
                        u.orbitingPlanet = planetToAttack;
                    }
                }
            }
            for (var _i = 0, planets_1 = planets; _i < planets_1.length; _i++) {
                var p = planets_1[_i];
                !this.lastTimeGettingUnits[p.id] && (this.lastTimeGettingUnits[p.id] = tick + 40);
                if (tick - this.lastTimeGettingUnits[p.id] > 60) {
                    if (rng_1.Rng.rnd(0, 100) < 8) {
                        this.lastTimeGettingUnits[p.id] = tick;
                        var unitsToAdd = 1;
                        if (this._gameStateService.state.planets.length > 6) {
                            unitsToAdd += 1;
                        }
                        if (this._gameStateService.state.planets.length > 11) {
                            unitsToAdd += 2;
                        }
                        unitsToAdd += rng_1.Rng.rnd(0, 3);
                        for (var i = 0; i < unitsToAdd; i++) {
                            this._eventService.postEvent(event_service_1.EventTypes.SpawnEnemyUnit, {
                                planet: p,
                                unitsToAdd: unitsToAdd
                            });
                        }
                    }
                }
            }
        };
        return EnemyAiService;
    }());
    EnemyAiService = __decorate([
        aurelia_framework_1.inject(event_service_1.EventService, game_state_service_1.GameStateService),
        __metadata("design:paramtypes", [event_service_1.EventService, game_state_service_1.GameStateService])
    ], EnemyAiService);
    exports.EnemyAiService = EnemyAiService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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YW1lL2VuZW15LWFpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSwgRXZlbnRUeXBlcyB9IGZyb20gXCIuL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9nYW1lLXN0YXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zaWVudEVudGl0eSwgVHJhbnNpZW50RW50aXRpZXMsIFRyYW5zaWVudEVudGl0eVN0YXRlIH0gZnJvbSBcIi4vdHJhbnNpZW50LWVudGl0eVwiO1xuaW1wb3J0IHsgRmFjdGlvbnMgfSBmcm9tIFwiLi9mYWN0aW9uc1wiO1xuaW1wb3J0IHsgUm5nIH0gZnJvbSBcIi4vcm5nXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQGluamVjdChFdmVudFNlcnZpY2UsIEdhbWVTdGF0ZVNlcnZpY2UpXG5leHBvcnQgY2xhc3MgRW5lbXlBaVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlLCBwcml2YXRlIF9nYW1lU3RhdGVTZXJ2aWNlOiBHYW1lU3RhdGVTZXJ2aWNlKSB7IH1cblxuICAgIHByaXZhdGUgbGFzdEF0dGFja0F0OiBudW1iZXIgPSAxMjA7XG4gICAgcHJpdmF0ZSBsYXN0VGltZUdldHRpbmdVbml0czogYW55ID0ge307XG5cbiAgICBwcml2YXRlIGdldCB1bml0cygpIDogVHJhbnNpZW50RW50aXR5W10ge1xuICAgICAgICByZXR1cm4gXy5maWx0ZXIodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcywgZSA9PiBlLmZhY3Rpb24gPT0gRmFjdGlvbnMuRW5lbXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUodGljazogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHVuaXRzID0gdGhpcy51bml0cztcblxuICAgICAgICBpZiAodW5pdHMubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcGxhbmV0cyA9IF8uZmlsdGVyKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cywgcCA9PiBfLnNvbWUodW5pdHMsIHUgPT4gdS5vcmJpdGluZ1BsYW5ldC5pZCA9PSBwLmlkICYmIHUuc3RhdGUgPT0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmcpKTtcblxuICAgICAgICBpZiAocGxhbmV0cy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAodGljayAtIHRoaXMubGFzdEF0dGFja0F0ID4gNDApIHtcbiAgICAgICAgICAgIGlmIChSbmcucm5kKDAsIDEwMCkgPCAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdEF0dGFja0F0ID0gIHRpY2s7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhbmV0ID0gcGxhbmV0c1tNYXRoLmZsb29yKFJuZy5ybmQoMCwgcGxhbmV0cy5sZW5ndGgpKV07XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhbmV0VG9BdHRhY2sgPSBfLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcmRlckJ5KHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cywgcCA9PiBVdGlscy5kaXN0KHBsYW5ldC54LCBwbGFuZXQueSwgcC54LCBwLnkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9PiAhXy5zb21lKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIGUgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUub3JiaXRpbmdQbGFuZXQuaWQgPT0gcC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZS5zdGF0ZSAhPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5Nb3ZpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGUuc3RhdGUgIT0gVHJhbnNpZW50RW50aXR5U3RhdGUuQXR0YWNraW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBlLmZhY3Rpb24gPT0gRmFjdGlvbnMuRW5lbXkpKVswXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXRzQXRQbGFuZXQgPSBfLmZpbHRlcih1bml0cywgdSA9PiB1Lm9yYml0aW5nUGxhbmV0LmlkID09IHBsYW5ldC5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdW5pdHNUb1NlbmQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKFJuZy5ybmQoMCwgdW5pdHNBdFBsYW5ldC5sZW5ndGgpKSk7XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdW5pdHNUb1NlbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1ID0gdW5pdHNBdFBsYW5ldFtpXTtcbiAgICAgICAgICAgICAgICAgICAgdS5zdGF0ZSA9IFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZztcbiAgICAgICAgICAgICAgICAgICAgdS5vcmJpdGluZ1BsYW5ldCA9IHBsYW5ldFRvQXR0YWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgcCBvZiBwbGFuZXRzKSB7XG4gICAgICAgICAgICAhdGhpcy5sYXN0VGltZUdldHRpbmdVbml0c1twLmlkXSAmJiAodGhpcy5sYXN0VGltZUdldHRpbmdVbml0c1twLmlkXSA9IHRpY2sgKyA0MCk7XG5cbiAgICAgICAgICAgIGlmICh0aWNrIC0gdGhpcy5sYXN0VGltZUdldHRpbmdVbml0c1twLmlkXSA+IDYwKSB7XG4gICAgICAgICAgICAgICAgaWYgKFJuZy5ybmQoMCwgMTAwKSA8IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZUdldHRpbmdVbml0c1twLmlkXSA9IHRpY2s7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1bml0c1RvQWRkID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRzVG9BZGQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMubGVuZ3RoID4gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRzVG9BZGQgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVuaXRzVG9BZGQgKz0gUm5nLnJuZCgwLCAzKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdW5pdHNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucG9zdEV2ZW50KEV2ZW50VHlwZXMuU3Bhd25FbmVteVVuaXQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuZXQ6IHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdHNUb0FkZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('game/factions',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Factions;
    (function (Factions) {
        Factions[Factions["Player"] = 1] = "Player";
        Factions[Factions["Enemy"] = 2] = "Enemy";
    })(Factions = exports.Factions || (exports.Factions = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsSUFBWSxRQUdYO0lBSEQsV0FBWSxRQUFRO1FBQ2hCLDJDQUFVLENBQUE7UUFDVix5Q0FBUyxDQUFBO0lBQ2IsQ0FBQyxFQUhXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBR25CIiwiZmlsZSI6ImdhbWUvZmFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBGYWN0aW9ucyB7XG4gICAgUGxheWVyID0gMSxcbiAgICBFbmVteSA9IDJcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!game/game.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet/planet\"></require>\n    <require from=\"./transient/transient\"></require>\n    <require from=\"./game.css\"></require>\n\n    <canvas id=\"foreground-canvas\"></canvas>\n\n    <div id=\"top-bar\">\n        <p>Resources: ${gameState.resourceCount} / ${gameState.resourceCap & signal:'constructBuilt'}</p>\n    </div>\n\n    <div id=\"space\">\n        <div class=\"bg\" id=\"background\" css=\"background-position-x: ${(-camera.panX/16)}px;\n                                  background-position-y: ${(-camera.panY/16)}px;\"></div>\n        <div id=\"pannable\" css=\"transform: translate3d(${-camera.panX}px, ${-camera.panY}px, 0);\">\n            <div repeat.for=\"planet of visiblePlanets\">\n                <planet planet.bind=\"planet\"></planet>\n            </div>\n            <div repeat.for=\"transient of visibleTransients\">\n                <transient entity.bind=\"transient\"></transient>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"context-menu\">\n        <div if.bind=\"uiService.state == 2\">\n            <div if.bind=\"selectedPlanet.settled\">\n                <button click.delegate=\"buildStaticEntity(1)\">Mining Station</button>\n                <button click.delegate=\"buildStaticEntity(5)\">Factory</button>\n                <button click.delegate=\"buildStaticEntity(6)\">Stockpile</button>\n            </div>\n            <div>\n                <div repeat.for=\"e of entitiesOrbitingPlanet\"\n                     class=\"ship-icon ${e.markedForMovement ? 'selected' : ''}\"\n                     click.delegate=\"markShipForMovement(e)\">${e.positionOnOrbit}</div>\n            </div>\n            <div>\n                <button click.delegate=\"uiService.moveUnits()\">Move</button>\n            </div>\n            <div if.bind=\"!selectedPlanet.settled && !!orbitingCommandCenter\">\n                <button click.delegate=\"settlePlanet()\">Settle</button>\n            </div>\n        </div>\n        <div if.bind=\"uiService.state == 3\">\n            <h4>Level: ${uiService.selectedStaticEntity.level}</h4>\n            <div if.bind=\"uiService.selectedStaticEntity.type == 5\">\n                <button click.delegate=\"buildTransientEntity(2)\">Build Drone</button>\n                <div if.bind=\"uiService.selectedStaticEntity.level >= 2\">\n                    <button click.delegate=\"buildTransientEntity(1)\">Build Settlement Ship</button>\n                </div>\n            </div>\n            <div if.bind=\"uiService.selectedStaticEntity.level < uiService.selectedStaticEntity.metadata.maxUpgradeLevel\">\n                <button click.delegate=\"upgrade(uiService.selectedStaticEntity)\">Upgrade</div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"static-logs\">\n        <p repeat.for=\"log of logService.staticLogs\">${log.text}</p>\n    </div>\n</template>"; });
define('text!game/game.css', ['module'], function(module) { module.exports = "body, html {\n  margin: 0;\n  padding: 0;\n  font-family: \"Didact Gothic\", sans-serif;\n  color: white; }\n\n* {\n  box-sizing: border-box; }\n\n.bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n#background {\n  z-index: 50;\n  background-image: url(\"src/assets/starfield.png\"); }\n\n#background-2 {\n  z-index: 55;\n  background-image: url(\"src/assets/polygonal.png\");\n  transition: all 100ms linear; }\n\n#pannable {\n  position: fixed;\n  z-index: 75; }\n\n#foreground-canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1000; }\n\n#space {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100; }\n\n#context-menu {\n  position: fixed;\n  bottom: 0;\n  left: 15%;\n  width: 70%;\n  height: 50px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 200; }\n  #context-menu * {\n    display: inline-block;\n    float: left; }\n\n#top-bar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 40px;\n  z-index: 200;\n  text-align: right;\n  color: white; }\n  #top-bar p {\n    font-size: 14px;\n    line-height: 40px;\n    margin: 0; }\n\n.ship-icon {\n  width: 30px;\n  height: 30px;\n  border: 2px solid black;\n  display: inline-block;\n  margin: 5px; }\n  .ship-icon.selected {\n    background: cyan; }\n\n#static-logs {\n  position: fixed;\n  top: 60px;\n  right: 20px;\n  width: 300px;\n  z-index: 300;\n  text-align: right; }\n  #static-logs p {\n    font-size: 14px;\n    margin: 0;\n    margin-bottom: 10px; }\n"; });
define('text!game/planet/planet.css', ['module'], function(module) { module.exports = ".planet {\n  animation: fade-in 1s linear; }\n  .planet > * {\n    position: absolute; }\n\n.planet-sprite {\n  border-radius: 100%;\n  background-image: url(\"src/assets/planet.png\");\n  background-size: 100% 100%; }\n  .planet-sprite.settled {\n    border: 5px solid yellow; }\n  .planet-sprite p {\n    text-align: center;\n    font-size: 12px;\n    margin: 0;\n    opacity: 0.7; }\n\n.selected {\n  box-shadow: 0px 0px 30px 0px white; }\n\n.static-entity-sprite {\n  border-radius: 100%;\n  background: blue;\n  width: 60px;\n  height: 60px; }\n\n@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n"; });
define('text!game/planet/planet.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet.css\"></require>\n\n    <div class=\"planet\" css=\"transform: translate3d(${planet.x}px, ${planet.y}px, 0);\" >\n        <div class=\"planet-sprite ${planet.selected ? 'selected': ''} ${planet.settled ? 'settled': ''}\"\n             click.delegate=\"selectPlanet()\"\n             css=\"width: ${planet.radius*2}px; height: ${planet.radius*2}px\">\n             <p css=\"line-height: ${planet.radius*2}px;\">${planet.resources}</p>\n        </div>\n        <div repeat.for=\"entity of planet.staticEntities\"\n             class=\"static-entity\"\n             click.delegate=\"selectStaticEntity(entity)\"\n             css=\"left: ${planet.radius/2 + entity.x}px;\n                  top: ${planet.radius/2 + entity.y}px;\">\n            <div class=\"static-entity-sprite ${entity.selected ? 'selected': ''}\" ></div>\n        </div>\n        <!--\n        <div repeat.for=\"entity of planet.staticEntities\"\n             class=\"static-entity\"\n             click.delegate=\"selectStaticEntity(entity)\"\n             css=\"left: ${-(entity.distanceFromPlanet + (entity.size/2))}px;\n                  top: ${-(entity.distanceFromPlanet + (entity.size/2))}px;\n                  transform-origin: ${entity.distanceFromPlanet + planet.radius + (entity.size/2)}px ${entity.distanceFromPlanet + planet.radius + (entity.size/2)}px;\n                  transform: rotate(${entity.positionOnOrbit}deg);\">\n            <div class=\"static-entity-sprite ${entity.selected ? 'selected': ''}\" ></div>\n        </div>\n        -->\n    </div>\n</template"; });
define('text!game/transient/transient.css', ['module'], function(module) { module.exports = ".transient {\n  position: absolute; }\n\n.transient-sprite {\n  width: 20px;\n  height: 20px;\n  animation: fade-in 1.5s linear;\n  position: relative; }\n  .transient-sprite img {\n    position: absolute; }\n  .transient-sprite .health-bar {\n    position: absolute;\n    width: 50px;\n    top: -12px;\n    left: -13px;\n    height: 5px;\n    padding: 1px;\n    background: black;\n    border-radius: 2px; }\n    .transient-sprite .health-bar .health-bar-inner {\n      height: 100%;\n      background: white; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"; });
define('text!game/transient/transient.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./transient.css\"></require>\n\n    <div class=\"transient\"\n         css=\"transform: translate3d(${entity.x}px, ${entity.y}px, 0);\">\n        <div class=\"transient-sprite\">\n            <img src=\"${entity.definition.sprite}\" />\n            <div class=\"health-bar\" if.bind=\"entity.health < entity.definition.health\">\n                <div class=\"health-bar-inner\" css=\"width: ${100*(entity.health / entity.definition.health)}%;\"></div>\n            </div>\n        </div>\n    </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map