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
            this.panX = Math.round(this.panX);
            this.panY = Math.round(this.panY);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvY2FtZXJhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxhQUFhO1FBVXRCLHVCQUFvQixhQUEyQjtZQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztZQVR4QyxhQUFRLEdBQVcsRUFBRSxDQUFDO1lBRXRCLFNBQUksR0FBVyxDQUFDLENBQUM7WUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1lBQ2pCLFNBQUksR0FBVyxDQUFDLENBQUM7WUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1lBR3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUVNLDJCQUFHLEdBQVYsVUFBVyxDQUFTLEVBQUUsQ0FBUztZQUMzQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRU0sNkJBQUssR0FBWixVQUFhLENBQVMsRUFBRSxDQUFTO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRU0sOEJBQU0sR0FBYjtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFTyxxQ0FBYSxHQUFyQjtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFaEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFTSx1Q0FBZSxHQUF0QjtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLDBCQUFVLENBQUMsWUFBWSxFQUFFO2dCQUNsRCxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ1osQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FwREEsQUFvREMsSUFBQTtJQXBEWSxhQUFhO1FBRHpCLDBCQUFNLENBQUMsNEJBQVksQ0FBQzt5Q0FXa0IsNEJBQVk7T0FWdEMsYUFBYSxDQW9EekI7SUFwRFksc0NBQWEiLCJmaWxlIjoiZ2FtZS9jYW1lcmEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlLCBFdmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnQuc2VydmljZVwiO1xuXG5AaW5qZWN0KEV2ZW50U2VydmljZSlcbmV4cG9ydCBjbGFzcyBDYW1lcmFTZXJ2aWNlIHtcbiAgICBwdWJsaWMgcGFuU3BlZWQ6IG51bWJlciA9IDE1O1xuXG4gICAgcHVibGljIHBhblg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHBhblk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIG1pblg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIG1heFg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIG1pblk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIG1heFk6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSkge1xuICAgICAgICB0aGlzLnBhblggPSAwO1xuICAgICAgICB0aGlzLnBhblkgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYW4oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYW5YICs9IHggKiB0aGlzLnBhblNwZWVkO1xuICAgICAgICB0aGlzLnBhblkgKz0geSAqIHRoaXMucGFuU3BlZWQ7XG4gICAgICAgIHRoaXMuZW5mb3JjZUJvdW5kcygpO1xuICAgICAgICB0aGlzLnBvc3RVcGRhdGVFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYW5Ubyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhblggPSB4IC0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMik7XG4gICAgICAgIHRoaXMucGFuWSA9IHkgLSAod2luZG93LmlubmVySGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMuZW5mb3JjZUJvdW5kcygpO1xuICAgICAgICB0aGlzLnBvc3RVcGRhdGVFdmVudCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjZW50ZXIoKSB7XG4gICAgICAgIHRoaXMucGFuWCA9ICgodGhpcy5tYXhYIC0gdGhpcy5taW5YKSAvIDIpICsgdGhpcy5taW5YO1xuICAgICAgICB0aGlzLnBhblkgPSAoKHRoaXMubWF4WSAtIHRoaXMubWluWSkgLyAyKSArIHRoaXMubWluWTtcbiAgICAgICAgdGhpcy5lbmZvcmNlQm91bmRzKCk7XG4gICAgICAgIHRoaXMucG9zdFVwZGF0ZUV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmZvcmNlQm91bmRzKCkge1xuICAgICAgICB0aGlzLnBhblggPSBNYXRoLm1heCh0aGlzLm1pblgsIHRoaXMucGFuWCk7XG4gICAgICAgIHRoaXMucGFuWCA9IE1hdGgubWluKHRoaXMubWF4WCAtIHdpbmRvdy5pbm5lcldpZHRoLCB0aGlzLnBhblgpO1xuICAgICAgICB0aGlzLnBhblkgPSBNYXRoLm1heCh0aGlzLm1pblksIHRoaXMucGFuWSk7XG4gICAgICAgIHRoaXMucGFuWSA9IE1hdGgubWluKHRoaXMubWF4WSAtIHdpbmRvdy5pbm5lckhlaWdodCwgdGhpcy5wYW5ZKTtcblxuICAgICAgICB0aGlzLnBhblggPSBNYXRoLnJvdW5kKHRoaXMucGFuWCk7XG4gICAgICAgIHRoaXMucGFuWSA9IE1hdGgucm91bmQodGhpcy5wYW5ZKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdFVwZGF0ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucG9zdEV2ZW50KEV2ZW50VHlwZXMuQ2FtZXJhVXBkYXRlLCB7XG4gICAgICAgICAgICB4OiB0aGlzLnBhblgsXG4gICAgICAgICAgICB5OiB0aGlzLnBhbllcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
            this.lastAttackAt = -40;
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
            var planets = _.filter(this._gameStateService.state.planets, function (p) { return _.some(units, function (u) { return u.orbitingPlanet.id == p.id && u.state == transient_entity_1.TransientEntityState.Orbiting && u.faction == factions_1.Factions.Enemy; }); });
            if (planets.length == 0)
                return;
            if (tick - this.lastAttackAt > 40) {
                if (rng_1.Rng.rnd(0, 100) < 20) {
                    var planet_1 = planets[Math.floor(rng_1.Rng.rnd(0, planets.length))];
                    if (!this.planetHasEntitiesOfFaction(planet_1, factions_1.Factions.Player)) {
                        this.lastAttackAt = tick;
                        var planetToAttack = _.filter(_.orderBy(this._gameStateService.state.planets, function (p) { return utils_1.Utils.dist(planet_1.x, planet_1.y, p.x, p.y); }), function (p) { return !_.some(_this._gameStateService.state.transientEntities, function (e) {
                            return e.orbitingPlanet.id == p.id
                                && e.state != transient_entity_1.TransientEntityState.Moving
                                && e.state != transient_entity_1.TransientEntityState.Attacking
                                && e.faction == factions_1.Factions.Enemy;
                        }); })[0];
                        var unitsAtPlanet = _.filter(units, function (u) { return u.orbitingPlanet.id == planet_1.id && u.faction == factions_1.Factions.Enemy; });
                        var unitsToSend = Math.max(1, Math.floor(rng_1.Rng.rnd(0, unitsAtPlanet.length)));
                        for (var i = 0; i < unitsToSend; i++) {
                            var u = unitsAtPlanet[i];
                            u.state = transient_entity_1.TransientEntityState.Moving;
                            u.orbitingPlanet = planetToAttack;
                        }
                    }
                }
            }
            for (var _i = 0, planets_1 = planets; _i < planets_1.length; _i++) {
                var p = planets_1[_i];
                !this.lastTimeGettingUnits[p.id] && (this.lastTimeGettingUnits[p.id] = tick + 40);
                if (tick - this.lastTimeGettingUnits[p.id] > 60) {
                    if (rng_1.Rng.rnd(0, 100) < 8) {
                        if (!this.planetHasEntitiesOfFaction(p, factions_1.Factions.Player)) {
                            this.lastTimeGettingUnits[p.id] = tick;
                            var unitsToAdd = 1;
                            if (this._gameStateService.state.planets.length > 6) {
                                unitsToAdd += 1;
                            }
                            if (this._gameStateService.state.planets.length > 11) {
                                unitsToAdd += 2;
                            }
                            unitsToAdd += rng_1.Rng.rnd(0, 3);
                            this._eventService.postEvent(event_service_1.EventTypes.SpawnEnemyUnit, {
                                planet: p,
                                unitsToAdd: unitsToAdd
                            });
                        }
                    }
                }
            }
        };
        EnemyAiService.prototype.planetHasEntitiesOfFaction = function (planet, f) {
            return _.some(this._gameStateService.state.transientEntities, function (e) { return e.orbitingPlanet.id == planet.id && e.faction == f; });
        };
        return EnemyAiService;
    }());
    EnemyAiService = __decorate([
        aurelia_framework_1.inject(event_service_1.EventService, game_state_service_1.GameStateService),
        __metadata("design:paramtypes", [event_service_1.EventService, game_state_service_1.GameStateService])
    ], EnemyAiService);
    exports.EnemyAiService = EnemyAiService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZW5lbXktYWkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFXQSxJQUFhLGNBQWM7UUFDdkIsd0JBQW9CLGFBQTJCLEVBQVUsaUJBQW1DO1lBQXhFLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1lBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtZQUdwRixpQkFBWSxHQUFXLENBQUMsRUFBRSxDQUFDO1lBQzNCLHlCQUFvQixHQUFRLEVBQUUsQ0FBQztRQUp5RCxDQUFDO1FBTWpHLHNCQUFZLGlDQUFLO2lCQUFqQjtnQkFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sSUFBSSxtQkFBUSxDQUFDLEtBQUssRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1lBQ3RHLENBQUM7OztXQUFBO1FBRU0sK0JBQU0sR0FBYixVQUFjLElBQVk7WUFBMUIsaUJBK0RDO1lBOURHLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFekIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLE1BQU0sQ0FBQztZQUVYLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSx1Q0FBb0IsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxtQkFBUSxDQUFDLEtBQUssRUFBdEcsQ0FB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QUFDO3dCQUNQLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2FBQ0o7UUFDTCxDQUFDO1FBRU8sbURBQTBCLEdBQWxDLFVBQW1DLE1BQW9CLEVBQUUsQ0FBVztZQUNoRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQyxDQUFBO1FBQzFILENBQUM7UUFDTCxxQkFBQztJQUFELENBL0VBLEFBK0VDLElBQUE7SUEvRVksY0FBYztRQUQxQiwwQkFBTSxDQUFDLDRCQUFZLEVBQUUscUNBQWdCLENBQUM7eUNBRUEsNEJBQVksRUFBNkIscUNBQWdCO09BRG5GLGNBQWMsQ0ErRTFCO0lBL0VZLHdDQUFjIiwiZmlsZSI6ImdhbWUvZW5lbXktYWkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlLCBFdmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgR2FtZVN0YXRlU2VydmljZSB9IGZyb20gXCIuL2dhbWUtc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5LCBUcmFuc2llbnRFbnRpdGllcywgVHJhbnNpZW50RW50aXR5U3RhdGUgfSBmcm9tIFwiLi90cmFuc2llbnQtZW50aXR5XCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi9wbGFuZXQtZW50aXR5XCI7XG5pbXBvcnQgeyBGYWN0aW9ucyB9IGZyb20gXCIuL2ZhY3Rpb25zXCI7XG5pbXBvcnQgeyBSbmcgfSBmcm9tIFwiLi9ybmdcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AaW5qZWN0KEV2ZW50U2VydmljZSwgR2FtZVN0YXRlU2VydmljZSlcbmV4cG9ydCBjbGFzcyBFbmVteUFpU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsIHByaXZhdGUgX2dhbWVTdGF0ZVNlcnZpY2U6IEdhbWVTdGF0ZVNlcnZpY2UpIHsgfVxuXG4gICAgLy9wcml2YXRlIGxhc3RBdHRhY2tBdDogbnVtYmVyID0gMTIwO1xuICAgIHByaXZhdGUgbGFzdEF0dGFja0F0OiBudW1iZXIgPSAtNDA7XG4gICAgcHJpdmF0ZSBsYXN0VGltZUdldHRpbmdVbml0czogYW55ID0ge307XG5cbiAgICBwcml2YXRlIGdldCB1bml0cygpIDogVHJhbnNpZW50RW50aXR5W10ge1xuICAgICAgICByZXR1cm4gXy5maWx0ZXIodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcywgZSA9PiBlLmZhY3Rpb24gPT0gRmFjdGlvbnMuRW5lbXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUodGljazogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHVuaXRzID0gdGhpcy51bml0cztcblxuICAgICAgICBpZiAodW5pdHMubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcGxhbmV0cyA9IF8uZmlsdGVyKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cywgcCA9PiBfLnNvbWUodW5pdHMsIHUgPT4gdS5vcmJpdGluZ1BsYW5ldC5pZCA9PSBwLmlkICYmIHUuc3RhdGUgPT0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmcgJiYgdS5mYWN0aW9uID09IEZhY3Rpb25zLkVuZW15KSk7XG5cbiAgICAgICAgaWYgKHBsYW5ldHMubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYgKHRpY2sgLSB0aGlzLmxhc3RBdHRhY2tBdCA+IDQwKSB7XG4gICAgICAgICAgICBpZiAoUm5nLnJuZCgwLCAxMDApIDwgMjApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFuZXQgPSBwbGFuZXRzW01hdGguZmxvb3IoUm5nLnJuZCgwLCBwbGFuZXRzLmxlbmd0aCkpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucGxhbmV0SGFzRW50aXRpZXNPZkZhY3Rpb24ocGxhbmV0LCBGYWN0aW9ucy5QbGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEF0dGFja0F0ID0gIHRpY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5ldFRvQXR0YWNrID0gXy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9yZGVyQnkodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzLCBwID0+IFV0aWxzLmRpc3QocGxhbmV0LngsIHBsYW5ldC55LCBwLngsIHAueSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0+ICFfLnNvbWUodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcywgZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUub3JiaXRpbmdQbGFuZXQuaWQgPT0gcC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGUuc3RhdGUgIT0gVHJhbnNpZW50RW50aXR5U3RhdGUuTW92aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZS5zdGF0ZSAhPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5BdHRhY2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBlLmZhY3Rpb24gPT0gRmFjdGlvbnMuRW5lbXkpKVswXTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0c0F0UGxhbmV0ID0gXy5maWx0ZXIodW5pdHMsIHUgPT4gdS5vcmJpdGluZ1BsYW5ldC5pZCA9PSBwbGFuZXQuaWQgJiYgdS5mYWN0aW9uID09IEZhY3Rpb25zLkVuZW15KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdHNUb1NlbmQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKFJuZy5ybmQoMCwgdW5pdHNBdFBsYW5ldC5sZW5ndGgpKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHVuaXRzVG9TZW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHUgPSB1bml0c0F0UGxhbmV0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdS5zdGF0ZSA9IFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHUub3JiaXRpbmdQbGFuZXQgPSBwbGFuZXRUb0F0dGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgcCBvZiBwbGFuZXRzKSB7XG4gICAgICAgICAgICAhdGhpcy5sYXN0VGltZUdldHRpbmdVbml0c1twLmlkXSAmJiAodGhpcy5sYXN0VGltZUdldHRpbmdVbml0c1twLmlkXSA9IHRpY2sgKyA0MCk7XG5cbiAgICAgICAgICAgIGlmICh0aWNrIC0gdGhpcy5sYXN0VGltZUdldHRpbmdVbml0c1twLmlkXSA+IDYwKSB7XG4gICAgICAgICAgICAgICAgaWYgKFJuZy5ybmQoMCwgMTAwKSA8IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBsYW5ldEhhc0VudGl0aWVzT2ZGYWN0aW9uKHAsIEZhY3Rpb25zLlBsYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFRpbWVHZXR0aW5nVW5pdHNbcC5pZF0gPSB0aWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXRzVG9BZGQgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0c1RvQWRkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMubGVuZ3RoID4gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0c1RvQWRkICs9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRzVG9BZGQgKz0gUm5nLnJuZCgwLCAzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnBvc3RFdmVudChFdmVudFR5cGVzLlNwYXduRW5lbXlVbml0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0OiBwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRzVG9BZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGFuZXRIYXNFbnRpdGllc09mRmFjdGlvbihwbGFuZXQ6IFBsYW5ldEVudGl0eSwgZjogRmFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF8uc29tZSh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzLCBlID0+IGUub3JiaXRpbmdQbGFuZXQuaWQgPT0gcGxhbmV0LmlkICYmIGUuZmFjdGlvbiA9PSBmKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
                if (_this._gameStateService.state.planets.length > 4) {
                    nEnemiesToSpawn += 2;
                }
                if (_this._gameStateService.state.planets.length > 5) {
                    nEnemiesToSpawn += 2;
                }
                if (_this._gameStateService.state.planets.length > 8) {
                    nEnemiesToSpawn += 3;
                }
                if (_this._gameStateService.state.planets.length > 10) {
                    nEnemiesToSpawn += 4;
                }
                if (_this._gameStateService.state.planets.length > 12) {
                    nEnemiesToSpawn += 9;
                    nEnemiesToSpawn += Math.floor(rng_1.Rng.rnd(-1, 4));
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
            this._eventService.registerHandler(event_service_1.EventTypes.CheatSpawnEnemyDrone, function () {
                var p = _.find(_this._gameStateService.state.planets, function (p) { return p.settled; });
                var e = _this.spawnTransientEntity(p, transient_entity_1.TransientEntities.EnemyDrone, true);
                e.state = transient_entity_1.TransientEntityState.Attacking;
                e.desiredDistanceFromOrbitingPlanet = e.distanceFromOrbitingPlanetWhileAttacking;
            });
        }
        EntityFactory.prototype.spawnStaticEntity = function (p, type) {
            var _this = this;
            var metadata = static_entity_1.StaticEntityMetadata[type];
            if (p.staticEntities.length >= 5)
                return;
            if (this._gameStateService.state.resourceCount < metadata.cost)
                return;
            var entity = new static_entity_1.StaticEntity(type, this._eventService);
            entity.health = metadata.health;
            entity.planetId = p.id;
            entity.planetX = p.x;
            entity.planetY = p.y;
            entity.planetRadius = p.radius;
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
                        e.x = Math.round((Math.cos(e.positionOnOrbit) * 155) - (p.radius / 2));
                        e.y = Math.round((Math.sin(e.positionOnOrbit) * 155) - (p.radius / 2));
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
                this._signaler.signal("UpdateShipsForMovement");
                return entity;
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
                        _this._signaler.signal("UpdateShipsForMovement");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZW50aXR5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBY0EsSUFBYSxhQUFhO1FBQ3RCLHVCQUFvQixpQkFBbUMsRUFBVSxTQUEwQixFQUFVLFlBQXlCLEVBQVUsV0FBdUIsRUFBVSxhQUEyQjtZQUFwTSxpQkFpREM7WUFqRG1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7WUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFpQjtZQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1lBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztZQUNoTSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQkFBVSxDQUFDLGtCQUFrQixFQUFFLFVBQUEsRUFBRTtnQkFDaEUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO2dCQUV4QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsZUFBZSxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsZUFBZSxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsZUFBZSxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbkQsZUFBZSxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbkQsZUFBZSxJQUFJLENBQUMsQ0FBQztvQkFDckIsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELGVBQWUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFOUMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDdEMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsb0NBQWlCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQkFBVSxDQUFDLGNBQWMsRUFBRSxVQUFBLENBQUM7Z0JBQzNELEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNuQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxvQ0FBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVFLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLDBCQUFVLENBQUMsZUFBZSxFQUFFO2dCQUMzRCxJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQztnQkFDdkUsS0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxvQ0FBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywwQkFBVSxDQUFDLG9CQUFvQixFQUFFO2dCQUNoRSxJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQztnQkFDdkUsSUFBTSxDQUFDLEdBQUUsS0FBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxvQ0FBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsdUNBQW9CLENBQUMsU0FBUyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsaUNBQWlDLEdBQUcsQ0FBQyxDQUFDLHdDQUF3QyxDQUFDO1lBQ3JGLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVNLHlDQUFpQixHQUF4QixVQUF5QixDQUFlLEVBQUUsSUFBb0I7WUFBOUQsaUJBbURDO1lBbERHLElBQU0sUUFBUSxHQUEyQixvQ0FBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQztZQUVYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzNELE1BQU0sQ0FBQztZQUVYLElBQU0sTUFBTSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFFL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQztZQUU1RCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBTTtnQkFDN0IsSUFBSSxFQUFFLHNCQUFvQixRQUFRLENBQUMsSUFBTTthQUM1QyxDQUFDLENBQUM7WUFFSCxJQUFNLFNBQVMsR0FBUTtnQkFDbkIsSUFBSSxFQUFLLFFBQVEsQ0FBQyxJQUFJLFNBQU07YUFDL0IsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXpDLElBQU0sRUFBRSxHQUFtQztnQkFDdkMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxTQUFTO2dCQUNyQixNQUFNLEVBQUU7b0JBQ0osSUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekUsU0FBUyxDQUFDLElBQUksR0FBTSxRQUFRLENBQUMsSUFBSSxVQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFHLENBQUE7Z0JBQ3pFLENBQUM7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM5QixLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQy9DLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFNO3dCQUM3QixJQUFJLEVBQUUsTUFBTTtxQkFDZixDQUFDLENBQUM7b0JBQ0gsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFMUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMvQyxJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixDQUFDLENBQUMsZUFBZSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RSxDQUFDO2dCQUNMLENBQUM7YUFDSixDQUFDO1lBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUVNLDJDQUFtQixHQUExQixVQUEyQixDQUFlO1lBQTFDLGlCQThCQztZQTdCRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNaLE1BQU0sQ0FBQztZQUVYLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFNLFdBQVMsR0FBUTtvQkFDbkIsSUFBSSxFQUFFLGVBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGFBQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLFVBQU07aUJBQy9ELENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsV0FBUyxDQUFDLENBQUM7Z0JBRXpDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUVuQixJQUFNLElBQUUsR0FBbUM7b0JBQ3ZDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVc7b0JBQzNCLE1BQU0sRUFBRTt3QkFDSixJQUFNLFVBQVUsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN6RSxXQUFTLENBQUMsSUFBSSxHQUFHLGVBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLGFBQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLFdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQUcsQ0FBQTtvQkFDekcsQ0FBQztvQkFDRCxZQUFZLEVBQUU7d0JBQ1YsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNWLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBTTs0QkFDN0IsSUFBSSxFQUFFLHVCQUFxQixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksa0JBQWEsQ0FBQyxDQUFDLEtBQU87eUJBQ3JFLENBQUMsQ0FBQzt3QkFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxXQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ25ELENBQUM7aUJBQ0osQ0FBQztnQkFFRixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFFLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQztRQUVNLDRDQUFvQixHQUEzQixVQUE0QixDQUFlLEVBQUUsSUFBdUIsRUFBRSxPQUFnQjtZQUF0RixpQkFtREM7WUFsREcsSUFBTSxRQUFRLEdBQThCLDBDQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsSUFBTSxNQUFNLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBQyxDQUFlLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUM7Z0JBQ3RHLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEtBQUssR0FBRyx1Q0FBb0IsQ0FBQyxRQUFRLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRWxCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDL0QsTUFBTSxDQUFDO2dCQUVYLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBRTVELElBQU0sV0FBUyxHQUFRO29CQUNuQixJQUFJLEVBQUUsY0FBWSxRQUFRLENBQUMsSUFBSSxTQUFNO2lCQUN4QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFdBQVMsQ0FBQyxDQUFDO2dCQUV6QyxJQUFNLElBQUUsR0FBbUM7b0JBQ3ZDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUztvQkFDckIsTUFBTSxFQUFFO3dCQUNKLElBQU0sVUFBVSxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsSUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3pFLFdBQVMsQ0FBQyxJQUFJLEdBQUcsY0FBWSxRQUFRLENBQUMsSUFBSSxVQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFHLENBQUE7b0JBQ2xGLENBQUM7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFdBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDL0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFDbEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3BDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBQyxDQUFlLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLEVBQXJELENBQXFELENBQUM7d0JBQ3RHLENBQUM7d0JBQ0QsTUFBTSxDQUFDLEtBQUssR0FBRyx1Q0FBb0IsQ0FBQyxRQUFRLENBQUM7d0JBQzdDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO3dCQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNmLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM1RCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO29CQUNwRCxDQUFDO2lCQUNKLENBQUM7Z0JBRUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBRSxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUM7UUFDTCxvQkFBQztJQUFELENBN0xBLEFBNkxDLElBQUE7SUE3TFksYUFBYTtRQUR6QiwwQkFBTSxDQUFDLHFDQUFnQixFQUFFLDhDQUFlLEVBQUUsMEJBQVcsRUFBRSx3QkFBVSxFQUFFLDRCQUFZLENBQUM7eUNBRXRDLHFDQUFnQixFQUFxQiw4Q0FBZSxFQUF3QiwwQkFBVyxFQUF1Qix3QkFBVSxFQUF5Qiw0QkFBWTtPQUQzTCxhQUFhLENBNkx6QjtJQTdMWSxzQ0FBYSIsImZpbGUiOiJnYW1lL2VudGl0eS1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHYW1lU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vZ2FtZS1zdGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi9wbGFuZXQtZW50aXR5XCI7XG5pbXBvcnQgeyBUaWNrU2VydmljZSwgU2NoZWR1bGVkRXZlbnQgfSBmcm9tIFwiLi90aWNrLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRyYW5zaWVudEVudGl0eSwgVHJhbnNpZW50RW50aXRpZXMsIFRyYW5zaWVudEVudGl0eURlZmluaXRpb24sIFRyYW5zaWVudEVudGl0eU1ldGFkYXRhLCBUcmFuc2llbnRFbnRpdHlTdGF0ZSB9IGZyb20gXCIuL3RyYW5zaWVudC1lbnRpdHlcIjtcbmltcG9ydCB7IEZhY3Rpb25zIH0gZnJvbSBcIi4vZmFjdGlvbnNcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0aWVzLCBTdGF0aWNFbnRpdHksIFN0YXRpY0VudGl0eU1ldGFkYXRhLCBTdGF0aWNFbnRpdHlEZWZpbml0aW9uIH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuaW1wb3J0IHsgQmluZGluZ1NpZ25hbGVyIH0gZnJvbSBcImF1cmVsaWEtdGVtcGxhdGluZy1yZXNvdXJjZXNcIjtcbmltcG9ydCB7IExvZ1NlcnZpY2UsIExvZyB9IGZyb20gXCIuL2xvZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSbmcgfSBmcm9tIFwiLi9ybmdcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSwgRXZlbnRUeXBlcyB9IGZyb20gXCIuL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AaW5qZWN0KEdhbWVTdGF0ZVNlcnZpY2UsIEJpbmRpbmdTaWduYWxlciwgVGlja1NlcnZpY2UsIExvZ1NlcnZpY2UsIEV2ZW50U2VydmljZSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9nYW1lU3RhdGVTZXJ2aWNlOiBHYW1lU3RhdGVTZXJ2aWNlLCBwcml2YXRlIF9zaWduYWxlcjogQmluZGluZ1NpZ25hbGVyLCBwcml2YXRlIF90aWNrU2VydmljZTogVGlja1NlcnZpY2UsIHByaXZhdGUgX2xvZ1NlcnZpY2U6IExvZ1NlcnZpY2UsIHByaXZhdGUgX2V2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5yZWdpc3RlckhhbmRsZXIoRXZlbnRUeXBlcy5FbmVteVBsYW5ldENyZWF0ZWQsIGV2ID0+IHtcbiAgICAgICAgICAgIGxldCBuRW5lbWllc1RvU3Bhd24gPSAzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICBuRW5lbWllc1RvU3Bhd24gKz0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cy5sZW5ndGggPiA1KSB7XG4gICAgICAgICAgICAgICAgbkVuZW1pZXNUb1NwYXduICs9IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMubGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgICAgIG5FbmVtaWVzVG9TcGF3biArPSAzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICAgICAgbkVuZW1pZXNUb1NwYXduICs9IDQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMubGVuZ3RoID4gMTIpIHtcbiAgICAgICAgICAgICAgICBuRW5lbWllc1RvU3Bhd24gKz0gOTtcbiAgICAgICAgICAgICAgICBuRW5lbWllc1RvU3Bhd24gKz0gTWF0aC5mbG9vcihSbmcucm5kKC0xLCA0KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5FbmVtaWVzVG9TcGF3biArPSBNYXRoLmZsb29yKFJuZy5ybmQoLTIsIDIpKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5FbmVtaWVzVG9TcGF3bjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3blRyYW5zaWVudEVudGl0eShldi5wbGFuZXQsIFRyYW5zaWVudEVudGl0aWVzLkVuZW15RHJvbmUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucmVnaXN0ZXJIYW5kbGVyKEV2ZW50VHlwZXMuU3Bhd25FbmVteVVuaXQsIGQgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGQudW5pdHNUb0FkZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGF3blRyYW5zaWVudEVudGl0eShkLnBsYW5ldCwgVHJhbnNpZW50RW50aXRpZXMuRW5lbXlEcm9uZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5yZWdpc3RlckhhbmRsZXIoRXZlbnRUeXBlcy5DaGVhdFNwYXduRHJvbmUsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBfLmZpbmQodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzLCBwID0+IHAuc2V0dGxlZCk7XG4gICAgICAgICAgICB0aGlzLnNwYXduVHJhbnNpZW50RW50aXR5KHAsIFRyYW5zaWVudEVudGl0aWVzLkRyb25lLCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnJlZ2lzdGVySGFuZGxlcihFdmVudFR5cGVzLkNoZWF0U3Bhd25FbmVteURyb25lLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gXy5maW5kKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cywgcCA9PiBwLnNldHRsZWQpO1xuICAgICAgICAgICAgY29uc3QgZSA9dGhpcy5zcGF3blRyYW5zaWVudEVudGl0eShwLCBUcmFuc2llbnRFbnRpdGllcy5FbmVteURyb25lLCB0cnVlKTtcbiAgICAgICAgICAgIGUuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5BdHRhY2tpbmc7XG4gICAgICAgICAgICBlLmRlc2lyZWREaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IGUuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXRXaGlsZUF0dGFja2luZztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNwYXduU3RhdGljRW50aXR5KHA6IFBsYW5ldEVudGl0eSwgdHlwZTogU3RhdGljRW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSA8U3RhdGljRW50aXR5RGVmaW5pdGlvbj5TdGF0aWNFbnRpdHlNZXRhZGF0YVt0eXBlXTtcblxuICAgICAgICBpZiAocC5zdGF0aWNFbnRpdGllcy5sZW5ndGggPj0gNSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNvdW50IDwgbWV0YWRhdGEuY29zdClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgU3RhdGljRW50aXR5KHR5cGUsIHRoaXMuX2V2ZW50U2VydmljZSk7XG4gICAgICAgIGVudGl0eS5oZWFsdGggPSBtZXRhZGF0YS5oZWFsdGg7XG4gICAgICAgIGVudGl0eS5wbGFuZXRJZCA9IHAuaWQ7XG4gICAgICAgIGVudGl0eS5wbGFuZXRYID0gcC54O1xuICAgICAgICBlbnRpdHkucGxhbmV0WSA9IHAueTtcbiAgICAgICAgZW50aXR5LnBsYW5ldFJhZGl1cyA9IHAucmFkaXVzO1xuXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucmVzb3VyY2VDb3VudCAtPSBtZXRhZGF0YS5jb3N0O1xuXG4gICAgICAgIHRoaXMuX2xvZ1NlcnZpY2UuYWRkVGVtcExvZyg8TG9nPntcbiAgICAgICAgICAgIHRleHQ6IGBTdGFydGVkIGJ1aWxkaW5nICR7bWV0YWRhdGEubmFtZX1gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0YXRpY0xvZyA9IDxMb2c+e1xuICAgICAgICAgICAgdGV4dDogYCR7bWV0YWRhdGEubmFtZX06IDAlYFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmFkZFN0YXRpY0xvZyhzdGF0aWNMb2cpO1xuXG4gICAgICAgIGNvbnN0IGV2OiBTY2hlZHVsZWRFdmVudCA9IDxTY2hlZHVsZWRFdmVudD57XG4gICAgICAgICAgICBuOiBtZXRhZGF0YS5idWlsZFRpbWUsXG4gICAgICAgICAgICBvblRpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKHRoaXMuX3RpY2tTZXJ2aWNlLnRpY2tzIC0gZXYudGlja1NjaGVkdWxlZEF0KSAvIGV2Lm47XG4gICAgICAgICAgICAgICAgc3RhdGljTG9nLnRleHQgPSBgJHttZXRhZGF0YS5uYW1lfTogJHtNYXRoLmZsb29yKHBlcmNlbnRhZ2UgKiAxMDApfSVgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db21wbGV0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcC5zdGF0aWNFbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nU2VydmljZS5kZWxldGVTdGF0aWNMb2coc3RhdGljTG9nLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmFkZFRlbXBMb2coPExvZz57XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBGaW5zYFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc1N0ZXAgPSAoMiAqIE1hdGguUEkpIC8gKHAuc3RhdGljRW50aXRpZXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5zdGF0aWNFbnRpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gcC5zdGF0aWNFbnRpdGllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZS5wb3NpdGlvbk9uT3JiaXQgPSBwb3NTdGVwICogKGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgZS54ID0gTWF0aC5yb3VuZCgoTWF0aC5jb3MoZS5wb3NpdGlvbk9uT3JiaXQpICogMTU1KSAtIChwLnJhZGl1cy8yKSk7XG4gICAgICAgICAgICAgICAgICAgIGUueSA9IE1hdGgucm91bmQoKE1hdGguc2luKGUucG9zaXRpb25Pbk9yYml0KSAqIDE1NSkgLSAocC5yYWRpdXMvMikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl90aWNrU2VydmljZS5zY2hlZHVsZUV2ZW50KGV2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBncmFkZVN0YXRpY0VudGl0eShlOiBTdGF0aWNFbnRpdHkpIHtcbiAgICAgICAgaWYgKGUudXBncmFkaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChlLmxldmVsIDwgZS5kZWZpbml0aW9uLm1heFVwZ3JhZGVMZXZlbCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljTG9nID0gPExvZz57XG4gICAgICAgICAgICAgICAgdGV4dDogYFVwZ3JhZGluZyAke2UuZGVmaW5pdGlvbi5uYW1lfSB0byAke2UubGV2ZWwgKyAxfTogMCVgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fbG9nU2VydmljZS5hZGRTdGF0aWNMb2coc3RhdGljTG9nKTtcblxuICAgICAgICAgICAgZS51cGdyYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCBldjogU2NoZWR1bGVkRXZlbnQgPSA8U2NoZWR1bGVkRXZlbnQ+e1xuICAgICAgICAgICAgICAgIG46IGUuZGVmaW5pdGlvbi51cGdyYWRlVGltZSxcbiAgICAgICAgICAgICAgICBvblRpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICh0aGlzLl90aWNrU2VydmljZS50aWNrcyAtIGV2LnRpY2tTY2hlZHVsZWRBdCkgLyBldi5uO1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNMb2cudGV4dCA9IGBVcGdyYWRpbmcgJHtlLmRlZmluaXRpb24ubmFtZX0gdG8gJHtlLmxldmVsICsgMX06ICR7TWF0aC5mbG9vcihwZXJjZW50YWdlICogMTAwKX0lYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICsrZS5sZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgZS51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nU2VydmljZS5hZGRUZW1wTG9nKDxMb2c+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYEZpbnNoZWQgdXBncmFkaW5nICR7ZS5kZWZpbml0aW9uLm5hbWV9IHRvIGxldmVsICR7ZS5sZXZlbH1gXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dTZXJ2aWNlLmRlbGV0ZVN0YXRpY0xvZyhzdGF0aWNMb2cuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX3RpY2tTZXJ2aWNlLnNjaGVkdWxlRXZlbnQoZXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNwYXduVHJhbnNpZW50RW50aXR5KHA6IFBsYW5ldEVudGl0eSwgdHlwZTogVHJhbnNpZW50RW50aXRpZXMsIGluc3RhbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSA8VHJhbnNpZW50RW50aXR5RGVmaW5pdGlvbj5UcmFuc2llbnRFbnRpdHlNZXRhZGF0YVt0eXBlXTtcbiAgICAgICAgaWYgKGluc3RhbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBUcmFuc2llbnRFbnRpdHkodHlwZSwgdGhpcy5fZXZlbnRTZXJ2aWNlKTtcbiAgICAgICAgICAgIGVudGl0eS5mYWN0aW9uID0gbWV0YWRhdGEuZmFjdGlvbjsgXG4gICAgICAgICAgICBpZiAoZW50aXR5LmZhY3Rpb24gPT0gRmFjdGlvbnMuUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5Lm9uRW50ZXJQbGFuZXQgPSAocDogUGxhbmV0RW50aXR5KSA9PiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLmNoZWNrSWZOZWVkVG9HZW5lcmF0ZVBsYW5ldChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudGl0eS5zdGF0ZSA9IFRyYW5zaWVudEVudGl0eVN0YXRlLk9yYml0aW5nO1xuICAgICAgICAgICAgZW50aXR5Lm9yYml0aW5nUGxhbmV0ID0gcDtcbiAgICAgICAgICAgIGVudGl0eS54ID0gcC54O1xuICAgICAgICAgICAgZW50aXR5LnkgPSBwLnk7XG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgIHRoaXMuX3NpZ25hbGVyLnNpZ25hbChcIlVwZGF0ZVNoaXBzRm9yTW92ZW1lbnRcIik7XG4gICAgICAgICAgICByZXR1cm4gZW50aXR5O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNvdW50IC0gbWV0YWRhdGEuY29zdCA8IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQgLT0gbWV0YWRhdGEuY29zdDtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdGljTG9nID0gPExvZz57XG4gICAgICAgICAgICAgICAgdGV4dDogYEJ1aWxkaW5nICR7bWV0YWRhdGEubmFtZX06IDAlYFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2xvZ1NlcnZpY2UuYWRkU3RhdGljTG9nKHN0YXRpY0xvZyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV2OiBTY2hlZHVsZWRFdmVudCA9IDxTY2hlZHVsZWRFdmVudD57XG4gICAgICAgICAgICAgICAgbjogbWV0YWRhdGEuYnVpbGRUaW1lLFxuICAgICAgICAgICAgICAgIG9uVGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKHRoaXMuX3RpY2tTZXJ2aWNlLnRpY2tzIC0gZXYudGlja1NjaGVkdWxlZEF0KSAvIGV2Lm47XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0xvZy50ZXh0ID0gYEJ1aWxkaW5nICR7bWV0YWRhdGEubmFtZX06ICR7TWF0aC5mbG9vcihwZXJjZW50YWdlICogMTAwKX0lYFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ1NlcnZpY2UuZGVsZXRlU3RhdGljTG9nKHN0YXRpY0xvZy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBUcmFuc2llbnRFbnRpdHkodHlwZSwgdGhpcy5fZXZlbnRTZXJ2aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmZhY3Rpb24gPSBtZXRhZGF0YS5mYWN0aW9uOyBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eS5mYWN0aW9uID09IEZhY3Rpb25zLlBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm9uRW50ZXJQbGFuZXQgPSAocDogUGxhbmV0RW50aXR5KSA9PiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLmNoZWNrSWZOZWVkVG9HZW5lcmF0ZVBsYW5ldChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZztcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm9yYml0aW5nUGxhbmV0ID0gcDtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnggPSBwLng7XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS55ID0gcC55O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2lnbmFsZXIuc2lnbmFsKFwiVXBkYXRlU2hpcHNGb3JNb3ZlbWVudFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLl90aWNrU2VydmljZS5zY2hlZHVsZUV2ZW50KGV2KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        EventTypes[EventTypes["CheatSpawnEnemyDrone"] = 7] = "CheatSpawnEnemyDrone";
    })(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUlJO1lBSFEsY0FBUyxHQUFRLEVBQUUsQ0FBQztZQUNwQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRzFCLENBQUM7UUFFTSxzQ0FBZSxHQUF0QixVQUF1QixTQUFxQixFQUFFLEVBQU87WUFDakQsSUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFFTSx3Q0FBaUIsR0FBeEIsVUFBeUIsU0FBcUIsRUFBRSxFQUFVO1lBQ3RELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUM7UUFFTSxnQ0FBUyxHQUFoQixVQUFpQixTQUFxQixFQUFFLElBQVM7WUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDYixHQUFHLENBQUEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDUCxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2IsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtJQWxDWSxvQ0FBWTtJQW9DekIsSUFBWSxVQVFYO0lBUkQsV0FBWSxVQUFVO1FBQ2xCLHVFQUFzQixDQUFBO1FBQ3RCLDJEQUFnQixDQUFBO1FBQ2hCLHFEQUFhLENBQUE7UUFDYiw2REFBaUIsQ0FBQTtRQUNqQixpRUFBbUIsQ0FBQTtRQUNuQiwrREFBa0IsQ0FBQTtRQUNsQiwyRUFBd0IsQ0FBQTtJQUM1QixDQUFDLEVBUlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFRckIiLCJmaWxlIjoiZ2FtZS9ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG4gICAgcHJpdmF0ZSBfaGFuZGxlcnM6IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX2NiSWQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZTogRXZlbnRUeXBlcywgY2I6IGFueSkgOiBudW1iZXIge1xuICAgICAgICBjb25zdCBpZCA9ICsrdGhpcy5fY2JJZDtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbZXZlbnRUeXBlXSA9IHRoaXMuX2hhbmRsZXJzW2V2ZW50VHlwZV0gfHwge307XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50VHlwZV1baWRdID0gY2I7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVyZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlOiBFdmVudFR5cGVzLCBpZDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnRUeXBlXTtcbiAgICAgICAgaWYgKCEhaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tpZF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcG9zdEV2ZW50KGV2ZW50VHlwZTogRXZlbnRUeXBlcywgZGF0YTogYW55KSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNbZXZlbnRUeXBlXTtcbiAgICAgICAgaWYgKCEhaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaWQgaW4gaGFuZGxlcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNiID0gaGFuZGxlcnNbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFjYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIEV2ZW50VHlwZXMge1xuICAgIEVuZW15UGxhbmV0Q3JlYXRlZCA9IDEsXG4gICAgQ2FtZXJhVXBkYXRlID0gMixcbiAgICBTaG90RmlyZWQgPSAzLFxuICAgIFBsYW5ldENyZWF0ZWQgPSA0LFxuICAgIENoZWF0U3Bhd25Ecm9uZSA9IDUsXG4gICAgU3Bhd25FbmVteVVuaXQgPSA2LFxuICAgIENoZWF0U3Bhd25FbmVteURyb25lID0gNyxcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
            this.planetSprites = [
                "src/assets/planet_1.png",
                "src/assets/planet_2.png",
                "src/assets/planet_3.png",
                "src/assets/planet_4.png",
                "src/assets/planet_5.png",
                "src/assts/planet_6.png",
                "src/assets/planet_7.png",
                "src/assets/planet_8.png"
            ];
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
            p.x = Math.round(opts.x + rng_1.Rng.rnd(-xRng, xRng));
            p.y = Math.round(opts.y + rng_1.Rng.rnd(-yRng, yRng));
            p.radius = 108 / 2;
            p.resources = 2500 + Math.floor(rng_1.Rng.rnd(-1000, 3000));
            if (_.some(this.state.planets, function (p2) {
                if (generateOutsideBounds) {
                    var outOfBounds = !(p.x < _this._camera.minX || p.x > _this._camera.maxX || p.y < _this._camera.minY || p.y > _this._camera.maxY);
                    return outOfBounds || p.distanceTo(p2) < 650;
                }
                else {
                    return p.distanceTo(p2) < 900 || p.distanceTo(p2) > 3000;
                }
            })) {
                this.generateNewPlanet(opts, generateOutsideBounds);
                return;
            }
            this._camera.maxX = Math.max(this._camera.maxX, p.x + 500);
            this._camera.minX = Math.min(this._camera.minX, p.x - 500);
            this._camera.maxY = Math.max(this._camera.maxY, p.y + 500);
            this._camera.minY = Math.min(this._camera.minY, p.y - 500);
            p.sprite = this.planetSprites[Math.floor(rng_1.Rng.rnd(0, this.planetSprites.length))];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQWFBLElBQWEsZ0JBQWdCO1FBR3pCLDBCQUFvQixPQUFzQixFQUFVLGFBQTJCO1lBQTNELFlBQU8sR0FBUCxPQUFPLENBQWU7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztZQW1FeEUsa0JBQWEsR0FBYTtnQkFDN0IseUJBQXlCO2dCQUN6Qix5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDekIseUJBQXlCO2dCQUN6Qix5QkFBeUI7Z0JBQ3pCLHdCQUF3QjtnQkFDeEIseUJBQXlCO2dCQUN6Qix5QkFBeUI7YUFDNUIsQ0FBQztZQTNFRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFFN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFnQixDQUFDO29CQUNuQyxDQUFDLEVBQUUsQ0FBQztvQkFDSixDQUFDLEVBQUUsQ0FBQztpQkFDUCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDZixDQUFDO1lBRUQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxDQUFlO1lBQWxELGlCQW1EQztZQWxERyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO2dCQUNsQixNQUFNLENBQUM7WUFFWCxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUV6QixJQUFNLFlBQVksR0FBRyxJQUFJLENB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U0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNyRixDQUFDOzs7V0FBQTtRQUNMLGdCQUFDO0lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtJQXZDWSw4QkFBUztJQXlDdEIsSUFBWSxVQUVYO0lBRkQsV0FBWSxVQUFVO1FBQ2xCLGlEQUFXLENBQUE7SUFDZixDQUFDLEVBRlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFFckIiLCJmaWxlIjoiZ2FtZS9nYW1lLXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgQmluZGluZ1NpZ25hbGVyIH0gZnJvbSBcImF1cmVsaWEtdGVtcGxhdGluZy1yZXNvdXJjZXNcIjtcbmltcG9ydCB7IFBsYW5ldEVudGl0eSB9IGZyb20gXCIuL3BsYW5ldC1lbnRpdHlcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0eSwgU3RhdGljRW50aXRpZXMgfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBUcmFuc2llbnRFbnRpdHksIFRyYW5zaWVudEVudGl0aWVzLCBUcmFuc2llbnRFbnRpdHlTdGF0ZSB9IGZyb20gXCIuL3RyYW5zaWVudC1lbnRpdHlcIjtcbmltcG9ydCB7IFJuZyB9IGZyb20gXCIuL3JuZ1wiO1xuaW1wb3J0IHsgQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuL2NhbWVyYS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFbnRpdHlGYWN0b3J5IH0gZnJvbSBcIi4vZW50aXR5LWZhY3RvcnlcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IEV2ZW50U2VydmljZSwgRXZlbnRUeXBlcyB9IGZyb20gXCIuL2V2ZW50LnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AaW5qZWN0KENhbWVyYVNlcnZpY2UsIEV2ZW50U2VydmljZSlcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGVTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGU6IEdhbWVTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbWVyYTogQ2FtZXJhU2VydmljZSwgcHJpdmF0ZSBfZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld1BsYW5ldCg8UGxhbmV0R2VuT3B0cz4oe1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSksIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nUGxhbmV0ID0gdGhpcy5zdGF0ZS5wbGFuZXRzWzBdO1xuICAgICAgICB0aGlzLl9jYW1lcmEucGFuVG8oc3RhcnRpbmdQbGFuZXQueCwgc3RhcnRpbmdQbGFuZXQueSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrSWZOZWVkVG9HZW5lcmF0ZVBsYW5ldChwOiBQbGFuZXRFbnRpdHkpIHtcbiAgICAgICAgaWYgKHAuaGFzQmVlblZpc2l0aWVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgcC5oYXNCZWVuVmlzaXRpZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGRpc3RGcm9tTGVmdCA9IE1hdGguYWJzKHAueCAtIHRoaXMuX2NhbWVyYS5taW5YKTtcbiAgICAgICAgY29uc3QgZGlzdEZyb21SaWdodCA9IE1hdGguYWJzKHAueCAtIHRoaXMuX2NhbWVyYS5tYXhYKTtcbiAgICAgICAgY29uc3QgZGlzdEZyb21Ub3AgPSBNYXRoLmFicyhwLnkgLSB0aGlzLl9jYW1lcmEubWluWSk7XG4gICAgICAgIGNvbnN0IGRpc3RGcm9tQm90dG9tID0gTWF0aC5hYnMocC55IC0gdGhpcy5fY2FtZXJhLm1heFkpO1xuICAgICAgICBpZiAoZGlzdEZyb21MZWZ0IDwgNjAwIHx8XG4gICAgICAgICAgICBkaXN0RnJvbVJpZ2h0IDwgNjAwIHx8XG4gICAgICAgICAgICBkaXN0RnJvbVRvcCA8IDYwMCB8fFxuICAgICAgICAgICAgZGlzdEZyb21Cb3R0b20gPCA2MDApIHtcblxuICAgICAgICAgICAgY29uc3QgeEJpYXMgPSBNYXRoLm1pbihkaXN0RnJvbUxlZnQsIGRpc3RGcm9tUmlnaHQpIDwgTWF0aC5taW4oZGlzdEZyb21Ub3AsIGRpc3RGcm9tQm90dG9tKTtcbiAgICAgICAgICAgIGNvbnN0IHlCaWFzID0gIXhCaWFzO1xuXG4gICAgICAgICAgICBjb25zdCB4RGlyID0gZGlzdEZyb21MZWZ0IDwgZGlzdEZyb21SaWdodCA/IC0xIDogMTtcbiAgICAgICAgICAgIGNvbnN0IHlEaXIgPSBkaXN0RnJvbVRvcCA8IGRpc3RGcm9tQm90dG9tID8gLTEgOiAxO1xuXG4gICAgICAgICAgICBsZXQgcGxhbmV0c1RvR2VuZXJhdGUgPSAxXG4gICAgICAgICAgICBpZiAoUm5nLnJuZCgwLCAxMDApIDwgMzApIHBsYW5ldHNUb0dlbmVyYXRlKys7XG4gICAgICAgICAgICBpZiAoUm5nLnJuZCgwLCAxMDApIDwgMTApIHBsYW5ldHNUb0dlbmVyYXRlKys7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwbGFuZXRzVG9HZW5lcmF0ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4cm5nID0gKHhCaWFzID8gMTEwMCA6IDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5cm5nID0gKHlCaWFzID8gMTEwMCA6IDUwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhCaWFzKSB5cm5nICs9IGkgKiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5QmlhcykgeXJuZyArPSBpICogNjAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cnlDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSh0cnlDb3VudCA8IDMgJiYgIWZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVOZXdQbGFuZXQoPFBsYW5ldEdlbk9wdHM+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogcC54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBwLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhSYW5nZTogeHJuZyAqIHhEaXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlSYW5nZTogeXJuZyAqIHlEaXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5Q291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwbGFuZXRTcHJpdGVzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgXCJzcmMvYXNzZXRzL3BsYW5ldF8xLnBuZ1wiLFxuICAgICAgICBcInNyYy9hc3NldHMvcGxhbmV0XzIucG5nXCIsXG4gICAgICAgIFwic3JjL2Fzc2V0cy9wbGFuZXRfMy5wbmdcIixcbiAgICAgICAgXCJzcmMvYXNzZXRzL3BsYW5ldF80LnBuZ1wiLFxuICAgICAgICBcInNyYy9hc3NldHMvcGxhbmV0XzUucG5nXCIsXG4gICAgICAgIFwic3JjL2Fzc3RzL3BsYW5ldF82LnBuZ1wiLFxuICAgICAgICBcInNyYy9hc3NldHMvcGxhbmV0XzcucG5nXCIsXG4gICAgICAgIFwic3JjL2Fzc2V0cy9wbGFuZXRfOC5wbmdcIlxuICAgIF07XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVOZXdQbGFuZXQob3B0czogUGxhbmV0R2VuT3B0cywgZ2VuZXJhdGVPdXRzaWRlQm91bmRzOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgUGxhbmV0RW50aXR5KCk7XG5cbiAgICAgICAgY29uc3QgeFJuZyA9IG9wdHMueFJhbmdlIHx8IDEwMDA7XG4gICAgICAgIGNvbnN0IHlSbmcgPSBvcHRzLnlSYW5nZSB8fCAxMDAwO1xuXG4gICAgICAgIHAueCA9IE1hdGgucm91bmQob3B0cy54ICsgUm5nLnJuZCgteFJuZywgeFJuZykpO1xuICAgICAgICBwLnkgPSBNYXRoLnJvdW5kKG9wdHMueSArIFJuZy5ybmQoLXlSbmcsIHlSbmcpKTtcbiAgICAgICAgcC5yYWRpdXMgPSAxMDgvMjtcbiAgICAgICAgcC5yZXNvdXJjZXMgPSAyNTAwICsgTWF0aC5mbG9vcihSbmcucm5kKC0xMDAwLCAzMDAwKSk7XG5cbiAgICAgICAgaWYgKF8uc29tZSh0aGlzLnN0YXRlLnBsYW5ldHMsIHAyID0+IHtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZU91dHNpZGVCb3VuZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRPZkJvdW5kcyA9ICEocC54IDwgdGhpcy5fY2FtZXJhLm1pblggfHwgcC54ID4gdGhpcy5fY2FtZXJhLm1heFggfHwgcC55IDwgdGhpcy5fY2FtZXJhLm1pblkgfHwgcC55ID4gdGhpcy5fY2FtZXJhLm1heFkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXRPZkJvdW5kcyB8fCBwLmRpc3RhbmNlVG8ocDIpIDwgNjUwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcC5kaXN0YW5jZVRvKHAyKSA8IDkwMCB8fCBwLmRpc3RhbmNlVG8ocDIpID4gMzAwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld1BsYW5ldChvcHRzLCBnZW5lcmF0ZU91dHNpZGVCb3VuZHMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2FtZXJhLm1heFggPSBNYXRoLm1heCh0aGlzLl9jYW1lcmEubWF4WCwgcC54ICsgNTAwKTtcbiAgICAgICAgdGhpcy5fY2FtZXJhLm1pblggPSBNYXRoLm1pbih0aGlzLl9jYW1lcmEubWluWCwgcC54IC0gNTAwKTtcbiAgICAgICAgdGhpcy5fY2FtZXJhLm1heFkgPSBNYXRoLm1heCh0aGlzLl9jYW1lcmEubWF4WSwgcC55ICsgNTAwKTtcbiAgICAgICAgdGhpcy5fY2FtZXJhLm1pblkgPSBNYXRoLm1pbih0aGlzLl9jYW1lcmEubWluWSwgcC55IC0gNTAwKTtcblxuICAgICAgICBwLnNwcml0ZSA9IHRoaXMucGxhbmV0U3ByaXRlc1tNYXRoLmZsb29yKFJuZy5ybmQoMCwgdGhpcy5wbGFuZXRTcHJpdGVzLmxlbmd0aCkpXTtcblxuICAgICAgICB0aGlzLnN0YXRlLnBsYW5ldHMucHVzaChwKTtcblxuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucG9zdEV2ZW50KEV2ZW50VHlwZXMuUGxhbmV0Q3JlYXRlZCwgcCk7XG5cbiAgICAgICAgaWYgKGdlbmVyYXRlT3V0c2lkZUJvdW5kcykge1xuICAgICAgICAgICAgaWYgKFJuZy5ybmQoMCwgMTAwKSA8IDkwKSB7XG4gICAgICAgICAgICAgICAgcC5pc0hvc3RpbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5wb3N0RXZlbnQoRXZlbnRUeXBlcy5FbmVteVBsYW5ldENyZWF0ZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhbmV0OiBwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmludGVyZmFjZSBQbGFuZXRHZW5PcHRzIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHhSYW5nZTogbnVtYmVyO1xuICAgIHlSYW5nZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgICBwdWJsaWMgcGxhbmV0czogUGxhbmV0RW50aXR5W107XG4gICAgcHVibGljIHRyYW5zaWVudEVudGl0aWVzOiBUcmFuc2llbnRFbnRpdHlbXTtcbiAgICBwdWJsaWMgcmVzb3VyY2VDb3VudDogbnVtYmVyO1xuICAgIHB1YmxpYyBnYW1lU3RhdGU6IEdhbWVTdGF0ZXM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGFuZXRzID0gW107XG4gICAgICAgIHRoaXMudHJhbnNpZW50RW50aXRpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHYW1lU3RhdGVzLlBsYXlpbmc7XG4gICAgICAgIHRoaXMucmVzb3VyY2VDb3VudCA9IDIwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3RhdGljRW50aXRpZXNPZlR5cGUodHlwZTogU3RhdGljRW50aXRpZXMpOiBTdGF0aWNFbnRpdHlbXSB7XG4gICAgICAgIGNvbnN0IHJldFZhbCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwIG9mIHRoaXMucGxhbmV0cykge1xuICAgICAgICAgICAgZm9yIChsZXQgcyBvZiBwLnN0YXRpY0VudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbC5wdXNoKHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbnRpdGllc09yYml0aW5nUGxhbmV0KHA6IFBsYW5ldEVudGl0eSkge1xuICAgICAgICBjb25zdCByZXRWYWwgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZSBvZiB0aGlzLnRyYW5zaWVudEVudGl0aWVzKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBpZiAoZS5vcmJpdGluZ1BsYW5ldCA9PSBwICYmIGUuc3RhdGUgPT0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXRWYWwucHVzaChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmVzb3VyY2VDYXAoKSB7XG4gICAgICAgIHJldHVybiAyMDAgKyB0aGlzLmdldFN0YXRpY0VudGl0aWVzT2ZUeXBlKFN0YXRpY0VudGl0aWVzLlN0b2NrcGlsZSkubGVuZ3RoICogNTAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gR2FtZVN0YXRlcyB7XG4gICAgUGxheWluZyA9IDFcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/game',["require", "exports", "aurelia-framework", "./game-state.service", "aurelia-templating-resources", "./factions", "./transient-entity", "./camera.service", "./tick.service", "./input.service", "./log.service", "./entity-factory", "./static-entity", "./ui.service", "./graphics.service", "lodash"], function (require, exports, aurelia_framework_1, game_state_service_1, aurelia_templating_resources_1, factions_1, transient_entity_1, camera_service_1, tick_service_1, input_service_1, log_service_1, entity_factory_1, static_entity_1, ui_service_1, graphics_service_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game(gameStateService, camera, inputService, entityFactory, uiService, tickService, logService, graphicsService, signaler) {
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
            this.signaler = signaler;
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
                    for (var _d = 0, _e = p.staticEntities; _d < _e.length; _d++) {
                        var e = _e[_d];
                        if (e.type == static_entity_1.StaticEntities.Turret) {
                            e.update(_this._gameStateService.state.transientEntities);
                        }
                    }
                    p.staticEntities = _.filter(p.staticEntities, function (e) { return e.health > 0; });
                }
                _this.T = t;
                if (_this._gameStateService.state.resourceCount > _this._gameStateService.state.resourceCap) {
                    _this._gameStateService.state.resourceCount = _this._gameStateService.state.resourceCap;
                }
                _this._graphicsService.update();
                requestAnimationFrame(animFn);
            };
            requestAnimationFrame(animFn);
        };
        Game.prototype.getAvailableShips = function (type) {
            var p = this.uiService.selectedPlanet;
            return _.filter(this._gameStateService.state.transientEntities, function (e) { return e.faction == factions_1.Factions.Player
                && !e.markedForMovement
                && e.orbitingPlanet.id == p.id
                && e.type == type
                && e.state == transient_entity_1.TransientEntityState.Orbiting; }).length;
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
        Game.prototype.markShipForMovement = function (type) {
            var p = this.uiService.selectedPlanet;
            var es = _.filter(this._gameStateService.state.transientEntities, function (e) { return e.faction == factions_1.Factions.Player
                && !e.markedForMovement
                && e.orbitingPlanet.id == p.id
                && e.type == type
                && e.state == transient_entity_1.TransientEntityState.Orbiting; });
            if (es.length > 0) {
                var e = es[0];
                e.markedForMovement = true;
                this.signaler.signal("UpdateShipsForMovement");
            }
        };
        Object.defineProperty(Game.prototype, "entitiesMarkedForMovement", {
            get: function () {
                var p = this.uiService.selectedPlanet;
                return _.filter(this._gameStateService.state.transientEntities, function (e) { return e.faction == factions_1.Factions.Player
                    && e.markedForMovement
                    && e.orbitingPlanet.id == p.id
                    && e.state == transient_entity_1.TransientEntityState.Orbiting; });
            },
            enumerable: true,
            configurable: true
        });
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
        aurelia_framework_1.inject(game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService, entity_factory_1.EntityFactory, ui_service_1.UiService, tick_service_1.TickService, log_service_1.LogService, graphics_service_1.GraphicsService, aurelia_templating_resources_1.BindingSignaler),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService, entity_factory_1.EntityFactory, ui_service_1.UiService, tick_service_1.TickService, log_service_1.LogService, graphics_service_1.GraphicsService, aurelia_templating_resources_1.BindingSignaler])
    ], Game);
    exports.Game = Game;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFBUyxFQUFFLDBCQUFXLEVBQUUsd0JBQVUsRUFBRSxrQ0FBZSxFQUFFLDhDQUFlLENBQUM7eUNBbUJ6RyxxQ0FBZ0IsRUFBVSw4QkFBYSxFQUFnQiw0QkFBWSxFQUFpQiw4QkFBYSxFQUFhLHNCQUFTLEVBQWUsMEJBQVcsRUFBYyx3QkFBVSxFQUFtQixrQ0FBZSxFQUFZLDhDQUFlO09BbEIzUCxJQUFJLENBaUpoQjtJQWpKWSxvQkFBSSIsImZpbGUiOiJnYW1lL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR2FtZVN0YXRlU2VydmljZSwgR2FtZVN0YXRlIH0gZnJvbSBcIi4vZ2FtZS1zdGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBCaW5kaW5nU2lnbmFsZXIgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgRmFjdGlvbnMgfSBmcm9tIFwiLi9mYWN0aW9uc1wiO1xuaW1wb3J0IHsgU3RhdGljRW50aXR5IH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5LCBUcmFuc2llbnRFbnRpdGllcywgVHJhbnNpZW50RW50aXR5U3RhdGUgfSBmcm9tIFwiLi90cmFuc2llbnQtZW50aXR5XCI7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vY2FtZXJhLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRpY2tTZXJ2aWNlIH0gZnJvbSBcIi4vdGljay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJbnB1dFNlcnZpY2UgfSBmcm9tIFwiLi9pbnB1dC5zZXJ2aWNlXCI7IGltcG9ydCB7IExvZ1NlcnZpY2UgfSBmcm9tIFwiLi9sb2cuc2VydmljZVwiOyBpbXBvcnQgeyBFbnRpdHlGYWN0b3J5IH0gZnJvbSBcIi4vZW50aXR5LWZhY3RvcnlcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0aWVzIH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuaW1wb3J0IHsgVWlTZXJ2aWNlIH0gZnJvbSBcIi4vdWkuc2VydmljZVwiO1xuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4vZ3JhcGhpY3Muc2VydmljZVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbkBpbmplY3QoR2FtZVN0YXRlU2VydmljZSwgQ2FtZXJhU2VydmljZSwgSW5wdXRTZXJ2aWNlLCBFbnRpdHlGYWN0b3J5LCBVaVNlcnZpY2UsIFRpY2tTZXJ2aWNlLCBMb2dTZXJ2aWNlLCBHcmFwaGljc1NlcnZpY2UsIEJpbmRpbmdTaWduYWxlcilcbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBwdWJsaWMgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlO1xuICAgIHB1YmxpYyB1aVNlcnZpY2U6IFVpU2VydmljZTtcbiAgICBwdWJsaWMgbG9nU2VydmljZTogTG9nU2VydmljZTtcbiAgICBwdWJsaWMgVDogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xuICAgIHB1YmxpYyBzaWduYWxlcjogQmluZGluZ1NpZ25hbGVyO1xuXG4gICAgcHVibGljIGdldCB0aW1lU2luY2VTdGFydCgpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nYW1lU3RhdGVTZXJ2aWNlOiBHYW1lU3RhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2lucHV0U2VydmljZTogSW5wdXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2VudGl0eUZhY3Rvcnk6IEVudGl0eUZhY3Rvcnk7XG4gICAgcHJpdmF0ZSBfdGlja1NlcnZpY2U6IFRpY2tTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2dyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZVN0YXRlU2VydmljZTogR2FtZVN0YXRlU2VydmljZSwgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlLCBpbnB1dFNlcnZpY2U6IElucHV0U2VydmljZSwgZW50aXR5RmFjdG9yeTogRW50aXR5RmFjdG9yeSwgdWlTZXJ2aWNlOiBVaVNlcnZpY2UsIHRpY2tTZXJ2aWNlOiBUaWNrU2VydmljZSwgbG9nU2VydmljZTogTG9nU2VydmljZSwgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UsIHNpZ25hbGVyOiBCaW5kaW5nU2lnbmFsZXIpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2UgPSBnYW1lU3RhdGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLl9pbnB1dFNlcnZpY2UgPSBpbnB1dFNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2VudGl0eUZhY3RvcnkgPSBlbnRpdHlGYWN0b3J5O1xuICAgICAgICB0aGlzLnVpU2VydmljZSA9IHVpU2VydmljZTtcbiAgICAgICAgdGhpcy5fdGlja1NlcnZpY2UgPSB0aWNrU2VydmljZTtcbiAgICAgICAgdGhpcy5sb2dTZXJ2aWNlID0gbG9nU2VydmljZTtcbiAgICAgICAgdGhpcy5fZ3JhcGhpY3NTZXJ2aWNlID0gZ3JhcGhpY3NTZXJ2aWNlO1xuICAgICAgICB0aGlzLnNpZ25hbGVyID0gc2lnbmFsZXI7XG5cbiAgICAgICAgY29uc3Qgc2V0dGxlZFAgPSB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHNbMF07XG4gICAgICAgIHNldHRsZWRQLnNldHRsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhbWVyYS5wYW5UbyhzZXR0bGVkUC54LCBzZXR0bGVkUC55KTtcbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5fZ3JhcGhpY3NTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5faW5wdXRTZXJ2aWNlLmluaXRLZXlCaW5kaW5ncygpO1xuXG4gICAgICAgIGNvbnN0IGFuaW1GbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gKHQgLSB0aGlzLlQpLzEwMDA7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dFNlcnZpY2UuY2hlY2tGb3JJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5fdGlja1NlcnZpY2UudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgZSBvZiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgZS51cGRhdGUoZGVsdGFUaW1lLCB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMgPSBfLmZpbHRlcih0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzLCBlID0+ICFlLmRlYWQpO1xuXG4gICAgICAgICAgICBmb3IobGV0IHAgb2YgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5wbGFuZXRzKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBlIG9mIHAuc3RhdGljRW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PSBTdGF0aWNFbnRpdGllcy5UdXJyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudXBkYXRlKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAuc3RhdGljRW50aXRpZXMgPSBfLmZpbHRlcihwLnN0YXRpY0VudGl0aWVzLCBlID0+IGUuaGVhbHRoID4gMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuVCA9IHQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQgPiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ2FwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNvdW50ID0gdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNhcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZ3JhcGhpY3NTZXJ2aWNlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1Gbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1Gbik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEF2YWlsYWJsZVNoaXBzKHR5cGU6IFRyYW5zaWVudEVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnVpU2VydmljZS5zZWxlY3RlZFBsYW5ldDtcbiAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIChlOiBUcmFuc2llbnRFbnRpdHkpID0+IGUuZmFjdGlvbiA9PSBGYWN0aW9ucy5QbGF5ZXJcbiAgICAgICAgICAgICYmICFlLm1hcmtlZEZvck1vdmVtZW50XG4gICAgICAgICAgICAmJiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHAuaWRcbiAgICAgICAgICAgICYmIGUudHlwZSA9PSB0eXBlXG4gICAgICAgICAgICAmJiBlLnN0YXRlID09IFRyYW5zaWVudEVudGl0eVN0YXRlLk9yYml0aW5nKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnYW1lU3RhdGUoKSA6IEdhbWVTdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZW50aXRpZXNPcmJpdGluZ1BsYW5ldCgpIDogVHJhbnNpZW50RW50aXRpZXNbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLmdldEVudGl0aWVzT3JiaXRpbmdQbGFuZXQodGhpcy5zZWxlY3RlZFBsYW5ldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtTaGlwRm9yTW92ZW1lbnQodHlwZTogVHJhbnNpZW50RW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMudWlTZXJ2aWNlLnNlbGVjdGVkUGxhbmV0O1xuICAgICAgICBjb25zdCBlcyA9IF8uZmlsdGVyKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIChlOiBUcmFuc2llbnRFbnRpdHkpID0+IGUuZmFjdGlvbiA9PSBGYWN0aW9ucy5QbGF5ZXJcbiAgICAgICAgICAgICYmICFlLm1hcmtlZEZvck1vdmVtZW50XG4gICAgICAgICAgICAmJiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHAuaWRcbiAgICAgICAgICAgICYmIGUudHlwZSA9PSB0eXBlXG4gICAgICAgICAgICAmJiBlLnN0YXRlID09IFRyYW5zaWVudEVudGl0eVN0YXRlLk9yYml0aW5nKTtcblxuICAgICAgICBpZiAoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZSA9IGVzWzBdO1xuICAgICAgICAgICAgZS5tYXJrZWRGb3JNb3ZlbWVudCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNpZ25hbGVyLnNpZ25hbChcIlVwZGF0ZVNoaXBzRm9yTW92ZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGVudGl0aWVzTWFya2VkRm9yTW92ZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzLnVpU2VydmljZS5zZWxlY3RlZFBsYW5ldDtcbiAgICAgICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIChlOiBUcmFuc2llbnRFbnRpdHkpID0+IGUuZmFjdGlvbiA9PSBGYWN0aW9ucy5QbGF5ZXJcbiAgICAgICAgICAgICYmIGUubWFya2VkRm9yTW92ZW1lbnRcbiAgICAgICAgICAgICYmIGUub3JiaXRpbmdQbGFuZXQuaWQgPT0gcC5pZFxuICAgICAgICAgICAgJiYgZS5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZylcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRTdGF0aWNFbnRpdHkodHlwZTogU3RhdGljRW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5RmFjdG9yeS5zcGF3blN0YXRpY0VudGl0eSh0aGlzLnNlbGVjdGVkUGxhbmV0LCB0eXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBncmFkZShlOiBTdGF0aWNFbnRpdHkpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5RmFjdG9yeS51cGdyYWRlU3RhdGljRW50aXR5KGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZFRyYW5zaWVudEVudGl0eSh0eXBlOiBUcmFuc2llbnRFbnRpdGllcykge1xuICAgICAgICB0aGlzLl9lbnRpdHlGYWN0b3J5LnNwYXduVHJhbnNpZW50RW50aXR5KHRoaXMuc2VsZWN0ZWRQbGFuZXQsIHR5cGUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVQbGFuZXRzKCk6IFBsYW5ldEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVUcmFuc2llbnRzKCk6IFRyYW5zaWVudEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZFBsYW5ldCgpOiBQbGFuZXRFbnRpdHkge1xuICAgICAgICByZXR1cm4gdGhpcy51aVNlcnZpY2Uuc2VsZWN0ZWRQbGFuZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBvcmJpdGluZ0NvbW1hbmRDZW50ZXIoKSB7XG4gICAgICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdGllc09yYml0aW5nUGxhbmV0LCBlID0+IGUudHlwZSA9PSBUcmFuc2llbnRFbnRpdGllcy5TZXR0bGVtZW50U2hpcCAmJiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHRoaXMuc2VsZWN0ZWRQbGFuZXQuaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXR0bGVQbGFuZXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZFBsYW5ldC5zZXR0bGVkICYmICEhdGhpcy5vcmJpdGluZ0NvbW1hbmRDZW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQbGFuZXQuc2V0dGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9yYml0aW5nQ29tbWFuZENlbnRlci5kZWFkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
            else if (e.which == KeyCodes.Y) {
                this._eventService.postEvent(event_service_1.EventTypes.CheatSpawnEnemyDrone, null);
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
        KeyCodes[KeyCodes["Y"] = 89] = "Y";
        KeyCodes[KeyCodes["ESC"] = 27] = "ESC";
    })(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WTtRQUR4QiwwQkFBTSxDQUFDLDhCQUFhLEVBQUUsNEJBQVksRUFBRSxzQkFBUyxDQUFDO3lDQUVkLDhCQUFhLEVBQXlCLDRCQUFZLEVBQXNCLHNCQUFTO09BRHJHLFlBQVksQ0F5Q3hCO0lBekNZLG9DQUFZO0lBMkN6QixJQUFZLFFBUVg7SUFSRCxXQUFZLFFBQVE7UUFDaEIsa0NBQU0sQ0FBQTtRQUNOLGtDQUFNLENBQUE7UUFDTixrQ0FBTSxDQUFBO1FBQ04sa0NBQU0sQ0FBQTtRQUNOLGtDQUFNLENBQUE7UUFDTixrQ0FBTSxDQUFBO1FBQ04sc0NBQVEsQ0FBQTtJQUNaLENBQUMsRUFSVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQVFuQiIsImZpbGUiOiJnYW1lL2lucHV0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi9jYW1lcmEuc2VydmljZVwiO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlLCBFdmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgVWlTZXJ2aWNlIH0gZnJvbSBcIi4vdWkuc2VydmljZVwiO1xuXG5AaW5qZWN0KENhbWVyYVNlcnZpY2UsIEV2ZW50U2VydmljZSwgVWlTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIElucHV0U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2FtZXJhOiBDYW1lcmFTZXJ2aWNlLCBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSwgcHJpdmF0ZSBfdWlTZXJ2aWNlOiBVaVNlcnZpY2UpIHt9XG5cbiAgICBwcml2YXRlIF9rZXlzdGF0ZXM6IGFueSA9IHt9O1xuXG4gICAgcHVibGljIGluaXRLZXlCaW5kaW5ncygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4gdGhpcy5vbmtleWRvd24oZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4gdGhpcy5vbmtleXVwKGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tGb3JJbnB1dCgpIHtcbiAgICAgICAgdGhpcy5jaGVja0ZvclBhbm5pbmdJbnB1dCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGb3JQYW5uaW5nSW5wdXQoKSB7XG4gICAgICAgIGxldCBwYW5YID0gMDtcbiAgICAgICAgbGV0IHBhblkgPSAwO1xuXG4gICAgICAgIHRoaXMuX2tleXN0YXRlc1tLZXlDb2Rlcy5XXSAmJiAocGFuWSA9IC0xKTtcbiAgICAgICAgdGhpcy5fa2V5c3RhdGVzW0tleUNvZGVzLlNdICYmIChwYW5ZID0gMSk7XG4gICAgICAgIHRoaXMuX2tleXN0YXRlc1tLZXlDb2Rlcy5BXSAmJiAocGFuWCA9IC0xKTtcbiAgICAgICAgdGhpcy5fa2V5c3RhdGVzW0tleUNvZGVzLkRdICYmIChwYW5YID0gMSk7XG5cbiAgICAgICAgKHBhblggIT0gMCB8fCBwYW5ZICE9IDApICYmIHRoaXMuX2NhbWVyYS5wYW4ocGFuWCwgcGFuWSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmtleWRvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICB0aGlzLl9rZXlzdGF0ZXNbZS53aGljaF0gPSB0cnVlO1xuXG4gICAgICAgIGlmIChlLndoaWNoID09IEtleUNvZGVzLlQpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5wb3N0RXZlbnQoRXZlbnRUeXBlcy5DaGVhdFNwYXduRHJvbmUsIG51bGwpO1xuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT0gS2V5Q29kZXMuWSkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnBvc3RFdmVudChFdmVudFR5cGVzLkNoZWF0U3Bhd25FbmVteURyb25lLCBudWxsKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09IEtleUNvZGVzLkVTQykge1xuICAgICAgICAgICAgdGhpcy5fdWlTZXJ2aWNlLnJlc2V0VWlTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmtleXVwKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fa2V5c3RhdGVzW2Uud2hpY2hdID0gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBLZXlDb2RlcyB7XG4gICAgVyA9IDg3LFxuICAgIEEgPSA2NSxcbiAgICBTID0gODMsXG4gICAgRCA9IDY4LFxuICAgIFQgPSA4NCxcbiAgICBZID0gODksXG4gICAgRVNDID0gMjdcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvcGxhbmV0LWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUNJO1lBS08sT0FBRSxHQUFXLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUkxQixtQkFBYyxHQUFtQixFQUFFLENBQUM7WUFFcEMscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1lBQy9CLGNBQVMsR0FBWSxLQUFLLENBQUM7WUFDM0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7WUFDakMsV0FBTSxHQUFXLElBQUksQ0FBQztRQWI3QixDQUFDO1FBZ0JNLGlDQUFVLEdBQWpCLFVBQWtCLEVBQWdCO1lBQzlCLE1BQU0sQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQXJCQSxBQXFCQyxJQUFBO0lBckJZLG9DQUFZIiwiZmlsZSI6ImdhbWUvcGxhbmV0LWVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0eSB9IGZyb20gXCIuL3N0YXRpYy1lbnRpdHlcIjtcblxuZXhwb3J0IGNsYXNzIFBsYW5ldEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gVXRpbHMuZ3VpZCgpO1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVzb3VyY2VzOiBudW1iZXI7XG4gICAgcHVibGljIHNlbGVjdGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBzdGF0aWNFbnRpdGllczogU3RhdGljRW50aXR5W10gPSBbXTtcbiAgICBwdWJsaWMgc2V0dGxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2V0dGxlbWVudEhlYWx0aDogbnVtYmVyID0gMTAwO1xuICAgIHB1YmxpYyBpc0hvc3RpbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaGFzQmVlblZpc2l0aWVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGhlYWx0aDogbnVtYmVyID0gMTAwMDtcbiAgICBwdWJsaWMgc3ByaXRlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZGlzdGFuY2VUbyhlMjogUGxhbmV0RW50aXR5KSB7XG4gICAgICAgIHJldHVybiBVdGlscy5kaXN0KGUyLngsIGUyLnksIHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
define('game/static-entity',["require", "exports", "./entity", "./factions", "./utils", "./event.service", "./transient-entity", "lodash"], function (require, exports, entity_1, factions_1, utils_1, event_service_1, transient_entity_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StaticEntity = (function (_super) {
        __extends(StaticEntity, _super);
        function StaticEntity(type, eventService) {
            var _this = _super.call(this) || this;
            _this.distanceFromPlanet = 40;
            _this.size = 60;
            _this.level = 1;
            _this._lastShotAt = -1000;
            _this._fireRateAtLevel = [
                600,
                450,
                270
            ];
            _this._damageAtLevel = [
                3,
                5,
                7
            ];
            _this.type = type;
            _this.definition = StaticEntityMetadata[type];
            _this.health = _this.definition.health;
            _this._eventService = eventService;
            return _this;
        }
        StaticEntity.prototype.update = function (entities) {
            var _this = this;
            if (this.type == StaticEntities.Turret) {
                var t = Date.now();
                if (t - this._lastShotAt > this._fireRateAtLevel[this.level - 1]) {
                    this._lastShotAt = t;
                    var enemiesInOrbit = _.filter(entities, function (e) { return e.orbitingPlanet.id == _this.planetId && e.faction != _this.faction && e.state == transient_entity_1.TransientEntityState.Attacking; });
                    if (enemiesInOrbit.length == 0)
                        return;
                    var target = _.orderBy(enemiesInOrbit, function (e) { return utils_1.Utils.dist(_this.x, _this.y, e.x, e.y); })[0];
                    target.health -= this._damageAtLevel[this.level - 1];
                    this._eventService.postEvent(event_service_1.EventTypes.ShotFired, {
                        e1: {
                            x: this.x + this.planetX + this.planetRadius,
                            y: this.y + this.planetY + this.planetRadius,
                        },
                        e2: target,
                    });
                }
            }
        };
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
        sprite: "src/assets/base_mining.png",
    };
    StaticEntityMetadata[StaticEntities.Turret] = {
        name: "Turret",
        cost: 50,
        health: 300,
        maxUpgradeLevel: 3,
        buildTime: 4,
        upgradeTime: 30,
        faction: factions_1.Factions.Player,
        sprite: "src/assets/base_turret.png",
    };
    StaticEntityMetadata[StaticEntities.Stockpile] = {
        name: "Stockpile",
        cost: 100,
        health: 100,
        maxUpgradeLevel: 3,
        buildTime: 20,
        upgradeTime: 30,
        faction: factions_1.Factions.Player,
        sprite: "src/assets/base_storage.png",
    };
    StaticEntityMetadata[StaticEntities.ShipYard] = {
        name: "Ship Yard",
        cost: 100,
        health: 100,
        maxUpgradeLevel: 20,
        buildTime: 4,
        upgradeTime: 30,
        faction: factions_1.Factions.Player,
        sprite: "src/assets/base_shipyard.png",
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFBUSxDQUFDLE1BQU07UUFDeEIsTUFBTSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0lBRUYsb0JBQW9CLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHO1FBQzVDLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLEdBQUc7UUFDWCxlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsQ0FBQztRQUNaLFdBQVcsRUFBRSxFQUFFO1FBQ2YsT0FBTyxFQUFFLG1CQUFRLENBQUMsTUFBTTtRQUN4QixNQUFNLEVBQUUsOEJBQThCO0tBQ3pDLENBQUMiLCJmaWxlIjoiZ2FtZS9zdGF0aWMtZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgeyBGYWN0aW9ucyB9IGZyb20gXCIuL2ZhY3Rpb25zXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UsIEV2ZW50VHlwZXMgfSBmcm9tIFwiLi9ldmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2llbnRFbnRpdHksIFRyYW5zaWVudEVudGl0eVN0YXRlIH0gZnJvbSBcIi4vdHJhbnNpZW50LWVudGl0eVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNFbnRpdHkgZXh0ZW5kcyBFbnRpdHkge1xuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBTdGF0aWNFbnRpdGllcztcbiAgICBwdWJsaWMgZGVmaW5pdGlvbjogU3RhdGljRW50aXR5RGVmaW5pdGlvbjtcbiAgICBwdWJsaWMgcG9zaXRpb25Pbk9yYml0OiBudW1iZXI7XG4gICAgcHVibGljIHVwZ3JhZGluZzogYm9vbGVhbjtcbiAgICBwdWJsaWMgZGlzdGFuY2VGcm9tUGxhbmV0OiBudW1iZXIgPSA0MDtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyID0gNjA7XG4gICAgcHVibGljIGxldmVsOiBudW1iZXIgPSAxO1xuICAgIHB1YmxpYyBoZWFsdGg6IG51bWJlcjtcbiAgICBwdWJsaWMgZmFjdGlvbjogRmFjdGlvbnM7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyBwbGFuZXRJZDogc3RyaW5nO1xuICAgIHB1YmxpYyBwbGFuZXRYOiBudW1iZXI7XG4gICAgcHVibGljIHBsYW5ldFk6IG51bWJlcjtcbiAgICBwdWJsaWMgcGxhbmV0UmFkaXVzOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZTtcbiAgICBwcml2YXRlIF9sYXN0U2hvdEF0OiBudW1iZXIgPSAtMTAwMDtcblxuICAgIHByaXZhdGUgX2ZpcmVSYXRlQXRMZXZlbDogbnVtYmVyW10gPSBbXG4gICAgICAgIDYwMCxcbiAgICAgICAgNDUwLFxuICAgICAgICAyNzBcbiAgICBdO1xuXG4gICAgcHJpdmF0ZSBfZGFtYWdlQXRMZXZlbDogbnVtYmVyW10gPSBbXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDdcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogU3RhdGljRW50aXRpZXMsIGV2ZW50U2VydmljZTogRXZlbnRTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbiA9IFN0YXRpY0VudGl0eU1ldGFkYXRhW3R5cGVdO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IHRoaXMuZGVmaW5pdGlvbi5oZWFsdGg7XG4gICAgICAgIHRoaXMuX2V2ZW50U2VydmljZSA9IGV2ZW50U2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGVudGl0aWVzOiBUcmFuc2llbnRFbnRpdHlbXSkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09IFN0YXRpY0VudGl0aWVzLlR1cnJldCkge1xuICAgICAgICAgICAgY29uc3QgdCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIGlmICh0IC0gdGhpcy5fbGFzdFNob3RBdCA+IHRoaXMuX2ZpcmVSYXRlQXRMZXZlbFt0aGlzLmxldmVsIC0gMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0U2hvdEF0ID0gdDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZW1pZXNJbk9yYml0ID0gXy5maWx0ZXIoZW50aXRpZXMsIGUgPT4gZS5vcmJpdGluZ1BsYW5ldC5pZCA9PSB0aGlzLnBsYW5ldElkICYmIGUuZmFjdGlvbiAhPSB0aGlzLmZhY3Rpb24gJiYgZS5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5BdHRhY2tpbmcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVuZW1pZXNJbk9yYml0Lmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBfLm9yZGVyQnkoZW5lbWllc0luT3JiaXQsIGUgPT4gVXRpbHMuZGlzdCh0aGlzLngsIHRoaXMueSwgZS54LCBlLnkpKVswXTtcblxuICAgICAgICAgICAgICAgIHRhcmdldC5oZWFsdGggLT0gdGhpcy5fZGFtYWdlQXRMZXZlbFt0aGlzLmxldmVsIC0gMV07XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucG9zdEV2ZW50KEV2ZW50VHlwZXMuU2hvdEZpcmVkLCB7XG4gICAgICAgICAgICAgICAgICAgIGUxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnggKyB0aGlzLnBsYW5ldFggKyB0aGlzLnBsYW5ldFJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMueSArIHRoaXMucGxhbmV0WSArIHRoaXMucGxhbmV0UmFkaXVzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlMjogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBTdGF0aWNFbnRpdGllcyB7XG4gICAgTWluaW5nU3RhdGlvbiA9IDEsXG4gICAgQ29tbWFuZENlbnRlciA9IDIsXG4gICAgVHVycmV0ID0gMyxcbiAgICBTaGllbGRHZW5lcmF0b3IgPSA0LFxuICAgIFNoaXBZYXJkID0gNSxcbiAgICBTdG9ja3BpbGUgPSA2XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGljRW50aXR5RGVmaW5pdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNvc3Q6IG51bWJlcjtcbiAgICBoZWFsdGg6IG51bWJlcjtcbiAgICBidWlsZFRpbWU6IG51bWJlcjtcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IG51bWJlcjtcbiAgICB1cGdyYWRlVGltZTogbnVtYmVyO1xuICAgIGZhY3Rpb246IEZhY3Rpb25zO1xuICAgIHNwcml0ZTogc3RyaW5nO1xufVxuXG5jb25zdCBTdGF0aWNFbnRpdHlNZXRhZGF0YSA9IHt9O1xuXG5TdGF0aWNFbnRpdHlNZXRhZGF0YVtTdGF0aWNFbnRpdGllcy5NaW5pbmdTdGF0aW9uXSA9IHtcbiAgICBuYW1lOiBcIk1pbmluZyBTdGF0aW9uXCIsXG4gICAgY29zdDogMTAwLFxuICAgIGhlYWx0aDogMTAwLFxuICAgIG1heFVwZ3JhZGVMZXZlbDogMyxcbiAgICBidWlsZFRpbWU6IDIwLFxuICAgIHVwZ3JhZGVUaW1lOiAzMCxcbiAgICBmYWN0aW9uOiBGYWN0aW9ucy5QbGF5ZXIsXG4gICAgc3ByaXRlOiBcInNyYy9hc3NldHMvYmFzZV9taW5pbmcucG5nXCIsXG59O1xuXG5TdGF0aWNFbnRpdHlNZXRhZGF0YVtTdGF0aWNFbnRpdGllcy5UdXJyZXRdID0ge1xuICAgIG5hbWU6IFwiVHVycmV0XCIsXG4gICAgY29zdDogNTAsXG4gICAgaGVhbHRoOiAzMDAsXG4gICAgbWF4VXBncmFkZUxldmVsOiAzLFxuICAgIGJ1aWxkVGltZTogNCxcbiAgICB1cGdyYWRlVGltZTogMzAsXG4gICAgZmFjdGlvbjogRmFjdGlvbnMuUGxheWVyLFxuICAgIHNwcml0ZTogXCJzcmMvYXNzZXRzL2Jhc2VfdHVycmV0LnBuZ1wiLFxufTtcblxuU3RhdGljRW50aXR5TWV0YWRhdGFbU3RhdGljRW50aXRpZXMuU3RvY2twaWxlXSA9IHtcbiAgICBuYW1lOiBcIlN0b2NrcGlsZVwiLFxuICAgIGNvc3Q6IDEwMCxcbiAgICBoZWFsdGg6IDEwMCxcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IDMsXG4gICAgYnVpbGRUaW1lOiAyMCxcbiAgICB1cGdyYWRlVGltZTogMzAsXG4gICAgZmFjdGlvbjogRmFjdGlvbnMuUGxheWVyLFxuICAgIHNwcml0ZTogXCJzcmMvYXNzZXRzL2Jhc2Vfc3RvcmFnZS5wbmdcIixcbn07XG5cblN0YXRpY0VudGl0eU1ldGFkYXRhW1N0YXRpY0VudGl0aWVzLlNoaXBZYXJkXSA9IHtcbiAgICBuYW1lOiBcIlNoaXAgWWFyZFwiLFxuICAgIGNvc3Q6IDEwMCxcbiAgICBoZWFsdGg6IDEwMCxcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IDIwLFxuICAgIGJ1aWxkVGltZTogNCxcbiAgICB1cGdyYWRlVGltZTogMzAsXG4gICAgZmFjdGlvbjogRmFjdGlvbnMuUGxheWVyLFxuICAgIHNwcml0ZTogXCJzcmMvYXNzZXRzL2Jhc2Vfc2hpcHlhcmQucG5nXCIsXG59O1xuXG5leHBvcnQgeyBTdGF0aWNFbnRpdHlNZXRhZGF0YSB9OyJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
            _this.actualDistanceFromOrbitingPlanet = 275;
            _this.desiredDistanceFromOrbitingPlanet = 275;
            _this.distanceFromOrbitingPlanet = 275;
            _this.distanceFromOrbitingPlanetWhileAttacking = 385;
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
            this.x -= Math.cos(angleToPlanet) * this.definition.speed * 10 * deltaT;
            this.y -= Math.sin(angleToPlanet) * this.definition.speed * 10 * deltaT;
            var distToPlanet = utils_1.Utils.dist(this.x, this.y, this.orbitingPlanet.x, this.orbitingPlanet.y);
            if (!this.isHostileTo(this.orbitingPlanet, otherEntities)) {
                if (distToPlanet <= this.distanceFromOrbitingPlanet) {
                    this.actualDistanceFromOrbitingPlanet = distToPlanet;
                    this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanet;
                    this.positionOnObirt = angleToPlanet;
                    this.onEnterPlanet && this.onEnterPlanet(this.orbitingPlanet);
                    this.state = TransientEntityState.Orbiting;
                }
            }
            else {
                if (distToPlanet <= this.distanceFromOrbitingPlanetWhileAttacking) {
                    this.actualDistanceFromOrbitingPlanet = distToPlanet;
                    this.desiredDistanceFromOrbitingPlanet = this.distanceFromOrbitingPlanetWhileAttacking;
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
            var desiredX = this.orbitingPlanet.x + (Math.cos(this.positionOnObirt) * distFromPlanet) + (this.orbitingPlanet.radius / 2);
            var desiredY = this.orbitingPlanet.y + (Math.sin(this.positionOnObirt) * distFromPlanet) + (this.orbitingPlanet.radius / 2);
            var dX = this.x - desiredX;
            var dY = this.y - desiredY;
            this.x -= dX * 2 * deltaT;
            this.y -= dY * 2 * deltaT;
            var enemies = _.orderBy(_.filter(otherEntities, function (e) { return e.orbitingPlanet.id == _this.orbitingPlanet.id && e.faction != _this.faction && e.state != TransientEntityState.Moving; }), function (e) { return utils_1.Utils.dist(_this.x, _this.y, e.x, e.y); });
            var constructs = _.filter(this.orbitingPlanet.staticEntities, function (e) { return e.faction != _this.faction; });
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
                    target.health -= this.definition.damage;
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
        TransientEntities[TransientEntities["Tank"] = 3] = "Tank";
        TransientEntities[TransientEntities["Scout"] = 4] = "Scout";
        TransientEntities[TransientEntities["EnemyDrone"] = 5] = "EnemyDrone";
    })(TransientEntities = exports.TransientEntities || (exports.TransientEntities = {}));
    var TransientEntityMetadata = {};
    exports.TransientEntityMetadata = TransientEntityMetadata;
    TransientEntityMetadata[TransientEntities.SettlementShip] = {
        name: "Settlement Ship",
        health: 100,
        cost: 500,
        buildTime: 40,
        fireRate: 1700,
        damage: 5,
        speed: 3,
        sprite: "src/assets/ships_settler.png",
        faction: factions_1.Factions.Player,
    };
    TransientEntityMetadata[TransientEntities.Drone] = {
        name: "Drone",
        health: 150,
        cost: 50,
        buildTime: 16,
        damage: 10,
        speed: 12,
        fireRate: 2300,
        faction: factions_1.Factions.Player,
        sprite: "src/assets/ships_drone.png",
    };
    TransientEntityMetadata[TransientEntities.Tank] = {
        name: "Tank",
        health: 500,
        cost: 250,
        buildTime: 40,
        fireRate: 5000,
        damage: 60,
        speed: 6,
        faction: factions_1.Factions.Player,
        sprite: "src/assets/ships_tank.png",
    };
    TransientEntityMetadata[TransientEntities.Scout] = {
        name: "Scout",
        health: 100,
        cost: 100,
        buildTime: 8,
        fireRate: 350,
        damage: 3,
        speed: 25,
        faction: factions_1.Factions.Player,
        sprite: "src/assets/ships_frigate.png",
    };
    TransientEntityMetadata[TransientEntities.EnemyDrone] = {
        name: "Enemy Drone",
        health: 130,
        cost: 0,
        buildTime: 0,
        speed: 11,
        damage: 10,
        fireRate: 2600,
        sprite: "src/assets/ships_enemy.png",
        faction: factions_1.Factions.Enemy,
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvdHJhbnNpZW50LWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBUUE7UUFBcUMsbUNBQU07UUF1QnZDLHlCQUFZLElBQXVCLEVBQUUsWUFBMEI7WUFBL0QsWUFDSSxpQkFBTyxTQUtWO1lBNUJPLHNDQUFnQyxHQUFXLEdBQUcsQ0FBQztZQUNoRCx1Q0FBaUMsR0FBVyxHQUFHLENBQUM7WUFDaEQsZ0NBQTBCLEdBQVcsR0FBRyxDQUFDO1lBQ3pDLDhDQUF3QyxHQUFXLEdBQUcsQ0FBQztZQUd2RCxPQUFDLEdBQVcsQ0FBQyxDQUFDO1lBQ2QsT0FBQyxHQUFXLENBQUMsQ0FBQztZQUVkLHFCQUFlLEdBQVcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsRCxvQkFBYyxHQUFXLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkQsZ0JBQVUsR0FBVyxJQUFJLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQyxtQkFBYSxHQUFXLEdBQUcsQ0FBQztZQUc1Qix1QkFBaUIsR0FBWSxLQUFLLENBQUM7WUFHbkMsZ0JBQVUsR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFNbkMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDOztRQUN0QyxDQUFDO1FBRU0sZ0NBQU0sR0FBYixVQUFjLE1BQWMsRUFBRSxhQUFn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Q1osS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxPQUFPLEVBQUUsbUJBQVEsQ0FBQyxLQUFLO0tBQzFCLENBQUMiLCJmaWxlIjoiZ2FtZS90cmFuc2llbnQtZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi9wbGFuZXQtZW50aXR5XCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBSbmcgfSBmcm9tIFwiLi9ybmdcIlxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlLCBFdmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgRmFjdGlvbnMgfSBmcm9tIFwiLi9mYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2llbnRFbnRpdHkgZXh0ZW5kcyBFbnRpdHkge1xuICAgIHByaXZhdGUgYWN0dWFsRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ6IG51bWJlciA9IDI3NTtcbiAgICBwdWJsaWMgZGVzaXJlZERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0OiBudW1iZXIgPSAyNzU7XG4gICAgcHVibGljIGRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0OiBudW1iZXIgPSAyNzU7XG4gICAgcHVibGljIGRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0V2hpbGVBdHRhY2tpbmc6IG51bWJlciA9IDM4NTtcbiAgICBwdWJsaWMgdHlwZTogVHJhbnNpZW50RW50aXRpZXM7XG4gICAgcHVibGljIGRlZmluaXRpb246IFRyYW5zaWVudEVudGl0eURlZmluaXRpb247XG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGRlYWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHBvc2l0aW9uT25PYmlydDogbnVtYmVyID0gUm5nLnJuZCgwLCAyICogTWF0aC5QSSk7XG4gICAgcHVibGljIG9yYml0RGlyZWN0aW9uOiBudW1iZXIgPSBSbmcucm5kKDAsIDEwMCkgPCA1MCA/IDEgOiAtMTtcbiAgICBwdWJsaWMgb3JiaXRTcGVlZDogbnVtYmVyID0gMC4yNSArIFJuZy5ybmQoLTAuMSwgMC4xKTtcbiAgICBwdWJsaWMgbW92ZW1lbnRTcGVlZDogbnVtYmVyID0gMzAwO1xuICAgIHB1YmxpYyBzdGF0ZTogVHJhbnNpZW50RW50aXR5U3RhdGU7XG4gICAgcHVibGljIG9yYml0aW5nUGxhbmV0OiBQbGFuZXRFbnRpdHk7XG4gICAgcHVibGljIG1hcmtlZEZvck1vdmVtZW50OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGZhY3Rpb246IEZhY3Rpb25zO1xuICAgIHB1YmxpYyBvbkVudGVyUGxhbmV0OiBhbnk7XG4gICAgcHVibGljIGxhc3RGaXJlQXQ6IG51bWJlciA9IERhdGUubm93KCk7XG5cbiAgICBwcml2YXRlIF9ldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IFRyYW5zaWVudEVudGl0aWVzLCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmRlZmluaXRpb24gPSBUcmFuc2llbnRFbnRpdHlNZXRhZGF0YVt0eXBlXTtcbiAgICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmRlZmluaXRpb24uaGVhbHRoO1xuICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UgPSBldmVudFNlcnZpY2U7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGFUOiBudW1iZXIsIG90aGVyRW50aXRpZXM6IFRyYW5zaWVudEVudGl0eVtdKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IFRyYW5zaWVudEVudGl0eVN0YXRlLk9yYml0aW5nIHx8IHRoaXMuc3RhdGUgPT0gVHJhbnNpZW50RW50aXR5U3RhdGUuQXR0YWNraW5nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9yYml0KGRlbHRhVCwgb3RoZXJFbnRpdGllcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5Nb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW92aW5nKGRlbHRhVCwgb3RoZXJFbnRpdGllcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTW92aW5nKGRlbHRhVDogbnVtYmVyLCBvdGhlckVudGl0aWVzOiBUcmFuc2llbnRFbnRpdHlbXSkge1xuICAgICAgICBjb25zdCBhbmdsZVRvUGxhbmV0ID0gTWF0aC5hdGFuMih0aGlzLnkgLSB0aGlzLm9yYml0aW5nUGxhbmV0LnksIHRoaXMueCAtIHRoaXMub3JiaXRpbmdQbGFuZXQueCk7XG4gICAgICAgIHRoaXMueCAtPSBNYXRoLmNvcyhhbmdsZVRvUGxhbmV0KSAqIHRoaXMuZGVmaW5pdGlvbi5zcGVlZCAqIDEwICogZGVsdGFUO1xuICAgICAgICB0aGlzLnkgLT0gTWF0aC5zaW4oYW5nbGVUb1BsYW5ldCkgKiB0aGlzLmRlZmluaXRpb24uc3BlZWQgKiAxMCAqIGRlbHRhVDtcblxuICAgICAgICBjb25zdCBkaXN0VG9QbGFuZXQgPSBVdGlscy5kaXN0KHRoaXMueCwgdGhpcy55LCB0aGlzLm9yYml0aW5nUGxhbmV0LngsIHRoaXMub3JiaXRpbmdQbGFuZXQueSk7XG4gICAgICAgIGlmICghdGhpcy5pc0hvc3RpbGVUbyh0aGlzLm9yYml0aW5nUGxhbmV0LCBvdGhlckVudGl0aWVzKSkge1xuICAgICAgICAgICAgaWYgKGRpc3RUb1BsYW5ldCA8PSB0aGlzLmRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3R1YWxEaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IGRpc3RUb1BsYW5ldDtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lyZWREaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IHRoaXMuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbk9uT2JpcnQgPSBhbmdsZVRvUGxhbmV0O1xuICAgICAgICAgICAgICAgIHRoaXMub25FbnRlclBsYW5ldCAmJiB0aGlzLm9uRW50ZXJQbGFuZXQodGhpcy5vcmJpdGluZ1BsYW5ldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFRyYW5zaWVudEVudGl0eVN0YXRlLk9yYml0aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpc3RUb1BsYW5ldCA8PSB0aGlzLmRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0V2hpbGVBdHRhY2tpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0ID0gZGlzdFRvUGxhbmV0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzaXJlZERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0ID0gdGhpcy5kaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldFdoaWxlQXR0YWNraW5nO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25Pbk9iaXJ0ID0gYW5nbGVUb1BsYW5ldDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gVHJhbnNpZW50RW50aXR5U3RhdGUuQXR0YWNraW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGlzSG9zdGlsZVRvKHA6IFBsYW5ldEVudGl0eSwgZW50aXRpZXM6IFRyYW5zaWVudEVudGl0eVtdKSB7XG4gICAgICAgIHJldHVybiBfLnNvbWUoZW50aXRpZXMsIGUgPT4gZS5vcmJpdGluZ1BsYW5ldC5pZCA9PSBwLmlkICYmIGUuZmFjdGlvbiAhPSB0aGlzLmZhY3Rpb24pXG4gICAgICAgICAgICB8fCBfLnNvbWUodGhpcy5vcmJpdGluZ1BsYW5ldC5zdGF0aWNFbnRpdGllcywgZSA9PiBlLmZhY3Rpb24gIT0gdGhpcy5mYWN0aW9uKVxuICAgICAgICAgICAgfHwgKHRoaXMuZmFjdGlvbiA9PSBGYWN0aW9ucy5FbmVteSAmJiB0aGlzLm9yYml0aW5nUGxhbmV0LnNldHRsZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlT3JiaXQoZGVsdGFUOiBudW1iZXIsIG90aGVyRW50aXRpZXM6IFRyYW5zaWVudEVudGl0eVtdKSB7XG4gICAgICAgIGNvbnN0IHQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uT25PYmlydCArPSB0aGlzLm9yYml0RGlyZWN0aW9uICogdGhpcy5vcmJpdFNwZWVkICogZGVsdGFUO1xuXG4gICAgICAgIGlmICh0aGlzLmFjdHVhbERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0ICE9IHRoaXMuZGVzaXJlZERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0KSB7XG4gICAgICAgICAgICBjb25zdCBkaXIgPSB0aGlzLmFjdHVhbERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0IC0gdGhpcy5kZXNpcmVkRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQgPiAwID8gLTEgOiAxO1xuICAgICAgICAgICAgdGhpcy5hY3R1YWxEaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCArPSBkaXIgKiAwLjY7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5hY3R1YWxEaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCAtIHRoaXMuZGVzaXJlZERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0KSA8IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdHVhbERpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0ID0gdGhpcy5kZXNpcmVkRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkaXN0RnJvbVBsYW5ldCA9IHRoaXMuYWN0dWFsRGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ7XG5cbiAgICAgICAgY29uc3QgZGVzaXJlZFggPSB0aGlzLm9yYml0aW5nUGxhbmV0LnggKyAoTWF0aC5jb3ModGhpcy5wb3NpdGlvbk9uT2JpcnQpICogZGlzdEZyb21QbGFuZXQpICsgKHRoaXMub3JiaXRpbmdQbGFuZXQucmFkaXVzLzIpO1xuICAgICAgICBjb25zdCBkZXNpcmVkWSA9IHRoaXMub3JiaXRpbmdQbGFuZXQueSArIChNYXRoLnNpbih0aGlzLnBvc2l0aW9uT25PYmlydCkgKiBkaXN0RnJvbVBsYW5ldCkgKyAodGhpcy5vcmJpdGluZ1BsYW5ldC5yYWRpdXMvMik7XG5cbiAgICAgICAgY29uc3QgZFggPSB0aGlzLnggLSBkZXNpcmVkWDtcbiAgICAgICAgY29uc3QgZFkgPSB0aGlzLnkgLSBkZXNpcmVkWTtcblxuICAgICAgICB0aGlzLnggLT0gZFggKiAyICogZGVsdGFUO1xuICAgICAgICB0aGlzLnkgLT0gZFkgKiAyICogZGVsdGFUO1xuXG4gICAgICAgIGNvbnN0IGVuZW1pZXMgPSBfLm9yZGVyQnkoXy5maWx0ZXIob3RoZXJFbnRpdGllcywgZSA9PiBlLm9yYml0aW5nUGxhbmV0LmlkID09IHRoaXMub3JiaXRpbmdQbGFuZXQuaWQgJiYgZS5mYWN0aW9uICE9IHRoaXMuZmFjdGlvbiAmJiBlLnN0YXRlICE9IFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZyksIGUgPT4gVXRpbHMuZGlzdCh0aGlzLngsIHRoaXMueSwgZS54LCBlLnkpKTtcbiAgICAgICAgY29uc3QgY29uc3RydWN0cyA9IF8uZmlsdGVyKHRoaXMub3JiaXRpbmdQbGFuZXQuc3RhdGljRW50aXRpZXMsIGUgPT4gZS5mYWN0aW9uICE9IHRoaXMuZmFjdGlvbik7XG5cbiAgICAgICAgbGV0IHBsYW5ldFRhcmdldCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmRlZmluaXRpb24uZmFjdGlvbiA9PSBGYWN0aW9ucy5FbmVteSAmJiB0aGlzLm9yYml0aW5nUGxhbmV0LnNldHRsZWQpIHtcbiAgICAgICAgICAgIHBsYW5ldFRhcmdldCA9IHRoaXMub3JiaXRpbmdQbGFuZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZyAmJiBlbmVtaWVzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGlmIChlbmVtaWVzLmxlbmd0aCA9PSAwICYmIGNvbnN0cnVjdHMubGVuZ3RoID09IDAgJiYgcGxhbmV0VGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZztcbiAgICAgICAgICAgIHRoaXMub25FbnRlclBsYW5ldCAmJiB0aGlzLm9uRW50ZXJQbGFuZXQodGhpcy5vcmJpdGluZ1BsYW5ldCk7XG4gICAgICAgICAgICB0aGlzLmRlc2lyZWREaXN0YW5jZUZyb21PcmJpdGluZ1BsYW5ldCA9IHRoaXMuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodCAtIHRoaXMubGFzdEZpcmVBdCA+PSB0aGlzLmRlZmluaXRpb24uZmlyZVJhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RGaXJlQXQgPSB0O1xuXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoZW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGVuZW1pZXNbMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50U2VydmljZS5wb3N0RXZlbnQoRXZlbnRUeXBlcy5TaG90RmlyZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUxOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZTI6IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnN0cnVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBjb25zdHJ1Y3RzWzBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudFNlcnZpY2UucG9zdEV2ZW50KEV2ZW50VHlwZXMuU2hvdEZpcmVkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlMTogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGUyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGFyZ2V0LnggKyB0aGlzLm9yYml0aW5nUGxhbmV0LnggKyB0aGlzLm9yYml0aW5nUGxhbmV0LnJhZGl1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0YXJnZXQueSArIHRoaXMub3JiaXRpbmdQbGFuZXQueSArIHRoaXMub3JiaXRpbmdQbGFuZXQucmFkaXVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHBsYW5ldFRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRTZXJ2aWNlLnBvc3RFdmVudChFdmVudFR5cGVzLlNob3RGaXJlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZTE6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBlMjogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0YXJnZXQueCArIHRhcmdldC5yYWRpdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGFyZ2V0LnkgKyB0YXJnZXQucmFkaXVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldC5oZWFsdGggLT0gdGhpcy5kZWZpbml0aW9uLmRhbWFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gVHJhbnNpZW50RW50aXR5U3RhdGUge1xuICAgIE9yYml0aW5nID0gMSxcbiAgICBNb3ZpbmcgPSAyLFxuICAgIEF0dGFja2luZyA9IDNcbn1cblxuZXhwb3J0IGVudW0gVHJhbnNpZW50RW50aXRpZXMge1xuICAgIFNldHRsZW1lbnRTaGlwID0gMSxcbiAgICBEcm9uZSA9IDIsXG4gICAgVGFuayA9IDMsXG4gICAgU2NvdXQgPSA0LFxuICAgIEVuZW15RHJvbmUgPSA1XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpZW50RW50aXR5RGVmaW5pdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNvc3Q6IG51bWJlcjtcbiAgICBoZWFsdGg6IG51bWJlcjtcbiAgICBzcHJpdGU6IHN0cmluZztcbiAgICBmYWN0aW9uOiBGYWN0aW9ucztcbiAgICBidWlsZFRpbWU6IG51bWJlcjtcbiAgICBmaXJlUmF0ZTogbnVtYmVyO1xuICAgIGRhbWFnZTogbnVtYmVyO1xuICAgIHNwZWVkOiBudW1iZXI7XG59XG5cbmNvbnN0IFRyYW5zaWVudEVudGl0eU1ldGFkYXRhID0ge307XG5cblRyYW5zaWVudEVudGl0eU1ldGFkYXRhW1RyYW5zaWVudEVudGl0aWVzLlNldHRsZW1lbnRTaGlwXSA9IHtcbiAgICBuYW1lOiBcIlNldHRsZW1lbnQgU2hpcFwiLFxuICAgIGhlYWx0aDogMTAwLFxuICAgIGNvc3Q6IDUwMCxcbiAgICBidWlsZFRpbWU6IDQwLFxuICAgIGZpcmVSYXRlOiAxNzAwLFxuICAgIGRhbWFnZTogNSxcbiAgICBzcGVlZDogMyxcbiAgICBzcHJpdGU6IFwic3JjL2Fzc2V0cy9zaGlwc19zZXR0bGVyLnBuZ1wiLFxuICAgIGZhY3Rpb246IEZhY3Rpb25zLlBsYXllcixcbn07XG5cblRyYW5zaWVudEVudGl0eU1ldGFkYXRhW1RyYW5zaWVudEVudGl0aWVzLkRyb25lXSA9IHtcbiAgICBuYW1lOiBcIkRyb25lXCIsXG4gICAgaGVhbHRoOiAxNTAsXG4gICAgY29zdDogNTAsXG4gICAgYnVpbGRUaW1lOiAxNixcbiAgICBkYW1hZ2U6IDEwLFxuICAgIHNwZWVkOiAxMixcbiAgICBmaXJlUmF0ZTogMjMwMCxcbiAgICBmYWN0aW9uOiBGYWN0aW9ucy5QbGF5ZXIsXG4gICAgc3ByaXRlOiBcInNyYy9hc3NldHMvc2hpcHNfZHJvbmUucG5nXCIsXG59O1xuXG5UcmFuc2llbnRFbnRpdHlNZXRhZGF0YVtUcmFuc2llbnRFbnRpdGllcy5UYW5rXSA9IHtcbiAgICBuYW1lOiBcIlRhbmtcIixcbiAgICBoZWFsdGg6IDUwMCxcbiAgICBjb3N0OiAyNTAsXG4gICAgYnVpbGRUaW1lOiA0MCxcbiAgICBmaXJlUmF0ZTogNTAwMCxcbiAgICBkYW1hZ2U6IDYwLFxuICAgIHNwZWVkOiA2LFxuICAgIGZhY3Rpb246IEZhY3Rpb25zLlBsYXllcixcbiAgICBzcHJpdGU6IFwic3JjL2Fzc2V0cy9zaGlwc190YW5rLnBuZ1wiLFxufTtcblxuVHJhbnNpZW50RW50aXR5TWV0YWRhdGFbVHJhbnNpZW50RW50aXRpZXMuU2NvdXRdID0ge1xuICAgIG5hbWU6IFwiU2NvdXRcIixcbiAgICBoZWFsdGg6IDEwMCxcbiAgICBjb3N0OiAxMDAsXG4gICAgYnVpbGRUaW1lOiA4LFxuICAgIGZpcmVSYXRlOiAzNTAsXG4gICAgZGFtYWdlOiAzLFxuICAgIHNwZWVkOiAyNSxcbiAgICBmYWN0aW9uOiBGYWN0aW9ucy5QbGF5ZXIsXG4gICAgc3ByaXRlOiBcInNyYy9hc3NldHMvc2hpcHNfZnJpZ2F0ZS5wbmdcIixcbn07XG5cblRyYW5zaWVudEVudGl0eU1ldGFkYXRhW1RyYW5zaWVudEVudGl0aWVzLkVuZW15RHJvbmVdID0ge1xuICAgIG5hbWU6IFwiRW5lbXkgRHJvbmVcIixcbiAgICBoZWFsdGg6IDEzMCxcbiAgICBjb3N0OiAwLFxuICAgIGJ1aWxkVGltZTogMCxcbiAgICBzcGVlZDogMTEsXG4gICAgZGFtYWdlOiAxMCxcbiAgICBmaXJlUmF0ZTogMjYwMCxcbiAgICBzcHJpdGU6IFwic3JjL2Fzc2V0cy9zaGlwc19lbmVteS5wbmdcIixcbiAgICBmYWN0aW9uOiBGYWN0aW9ucy5FbmVteSxcbn07XG5cbmV4cG9ydCB7IFRyYW5zaWVudEVudGl0eU1ldGFkYXRhIH0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        UiService.prototype.gotoState = function (s) {
            this.state = s;
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
            if (this.state == ContextUiStates.Deploy) {
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
        ContextUiStates[ContextUiStates["Deploy"] = 5] = "Deploy";
        ContextUiStates[ContextUiStates["Build"] = 6] = "Build";
    })(ContextUiStates = exports.ContextUiStates || (exports.ContextUiStates = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUM7UUFFTSxzQ0FBa0IsR0FBekIsVUFBMEIsQ0FBZTtZQUNyQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUM7UUFDOUMsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0EvREEsQUErREMsSUFBQTtJQS9EWSxTQUFTO1FBRHJCLDBCQUFNLENBQUMscUNBQWdCLENBQUM7eUNBTWtCLHFDQUFnQjtPQUw5QyxTQUFTLENBK0RyQjtJQS9EWSw4QkFBUztJQWlFdEIsSUFBWSxlQU9YO0lBUEQsV0FBWSxlQUFlO1FBQ3ZCLHFEQUFRLENBQUE7UUFDUix5REFBVSxDQUFBO1FBQ1YscUVBQWdCLENBQUE7UUFDaEIsaUdBQThCLENBQUE7UUFDOUIseURBQVUsQ0FBQTtRQUNWLHVEQUFTLENBQUE7SUFDYixDQUFDLEVBUFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFPMUIiLCJmaWxlIjoiZ2FtZS91aS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5U3RhdGUgfSBmcm9tICcuL3RyYW5zaWVudC1lbnRpdHknO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi9wbGFuZXQtZW50aXR5XCI7XG5pbXBvcnQgeyBTdGF0aWNFbnRpdHkgfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vZ2FtZS1zdGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuQGluamVjdChHYW1lU3RhdGVTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIFVpU2VydmljZSB7XG4gICAgcHVibGljIHNlbGVjdGVkUGxhbmV0OiBQbGFuZXRFbnRpdHk7XG4gICAgcHVibGljIHNlbGVjdGVkU3RhdGljRW50aXR5OiBTdGF0aWNFbnRpdHk7XG4gICAgcHVibGljIHN0YXRlOiBDb250ZXh0VWlTdGF0ZXMgPSBDb250ZXh0VWlTdGF0ZXMuTm9uZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dhbWVTdGF0ZVNlcnZpY2U6IEdhbWVTdGF0ZVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZGVzZWxlY3RDdXJyZW50KCkge1xuICAgICAgICAhIXRoaXMuc2VsZWN0ZWRQbGFuZXQgJiYgKHRoaXMuc2VsZWN0ZWRQbGFuZXQuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgICAgICEhdGhpcy5zZWxlY3RlZFN0YXRpY0VudGl0eSAmJiAodGhpcy5zZWxlY3RlZFN0YXRpY0VudGl0eS5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ290b1N0YXRlKHM6IENvbnRleHRVaVN0YXRlcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRVaVN0YXRlKCkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0Q3VycmVudCgpO1xuICAgICAgICBmb3IobGV0IGUgb2YgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcykge1xuICAgICAgICAgICAgZS5tYXJrZWRGb3JNb3ZlbWVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQbGFuZXQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdGljRW50aXR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnRleHRVaVN0YXRlcy5Ob25lO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlVW5pdHMoKSB7XG4gICAgICAgIGlmICghXy5zb21lKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIGUgPT4gZS5tYXJrZWRGb3JNb3ZlbWVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZGVzZWxlY3RDdXJyZW50KCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb250ZXh0VWlTdGF0ZXMuU2VsZWN0aW5nUGxhbmV0Rm9yTW92ZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdFBsYW5ldChwOiBQbGFuZXRFbnRpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gQ29udGV4dFVpU3RhdGVzLkRlcGxveSkge1xuICAgICAgICAgICAgaWYgKF8uc29tZSh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzLCBlID0+IGUubWFya2VkRm9yTW92ZW1lbnQgJiYgZS5vcmJpdGluZ1BsYW5ldC5pZCA9PSBwLmlkKSkge1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgZSBvZiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm1hcmtlZEZvck1vdmVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm1hcmtlZEZvck1vdmVtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm9yYml0aW5nUGxhbmV0ID0gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5Nb3Zpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnRleHRVaVN0YXRlcy5Ob25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdEN1cnJlbnQoKTtcbiAgICAgICAgICAgIHAuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBsYW5ldCA9IHA7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ29udGV4dFVpU3RhdGVzLlBsYW5ldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RTdGF0aWNFbnRpdHkoZTogU3RhdGljRW50aXR5KSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RDdXJyZW50KCk7XG4gICAgICAgIGUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdGljRW50aXR5ID0gZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnRleHRVaVN0YXRlcy5TdGF0aWNFbnRpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBDb250ZXh0VWlTdGF0ZXMge1xuICAgIE5vbmUgPSAxLFxuICAgIFBsYW5ldCA9IDIsXG4gICAgU3RhdGljRW50aXR5ID0gMyxcbiAgICBTZWxlY3RpbmdQbGFuZXRGb3JNb3ZlbWVudCA9IDQsXG4gICAgRGVwbG95ID0gNSxcbiAgICBCdWlsZCA9IDZcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!game/game.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet/planet\"></require>\n    <require from=\"./transient/transient\"></require>\n    <require from=\"./game.css\"></require>\n\n    <canvas id=\"foreground-canvas\"></canvas>\n\n    <p id=\"resource-count\">Resources: <strong>${gameState.resourceCount} / ${gameState.resourceCap & signal:'constructBuilt'}</strong></p>\n\n    <div id=\"space\">\n        <div class=\"bg\" id=\"background\" css=\"background-position-x: ${(-camera.panX/16)}px;\n                                  background-position-y: ${(-camera.panY/16)}px;\"></div>\n        <div class=\"bg\" id=\"background-2\"></div>\n        <div id=\"pannable\" css=\"transform: translate3d(${-camera.panX}px, ${-camera.panY}px, 0);\">\n            <div repeat.for=\"planet of visiblePlanets\">\n                <planet planet.bind=\"planet\"></planet>\n            </div>\n            <div repeat.for=\"transient of visibleTransients\">\n                <transient entity.bind=\"transient\"></transient>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"above-context-menu\">\n        <div if.bind=\"uiService.state == 5\" repeat.for=\"e of entitiesMarkedForMovement\">\n            <img src=\"${e.definition.sprite}\" />\n        </div>\n    </div>\n\n    <div id=\"context-menu\">\n        <div if.bind=\"uiService.state == 2\">\n            <div>\n                <button click.delegate=\"uiService.gotoState(1)\"><i class=\"fa fa-times\"></i></button>\n                <button click.delegate=\"uiService.gotoState(5)\">Deploy</button>\n                <button if.bind=\"selectedPlanet.settled\" click.delegate=\"uiService.gotoState(6)\">Build</button>\n            </div>\n            <div if.bind=\"!selectedPlanet.settled && !!orbitingCommandCenter\">\n                <button click.delegate=\"settlePlanet()\">Settle</button>\n            </div>\n        </div>\n        <div if.bind=\"uiService.state == 6\">\n            <button click.delegate=\"uiService.gotoState(1)\"><i class=\"fa fa-times\"></i></button>\n            <button click.delegate=\"uiService.gotoState(2)\"><i class=\"fa fa-chevron-left\"></i></button>\n            <button click.delegate=\"buildStaticEntity(1)\"><span>Cost: 100</span>Mining Station</button>\n            <button click.delegate=\"buildStaticEntity(3)\"><span>Cost: 100</span>Turret</button>\n            <button click.delegate=\"buildStaticEntity(5)\"><span>Cost: 100</span>Ship Yard</button>\n            <button click.delegate=\"buildStaticEntity(6)\"><span>Cost: 100</span>Storage</button>\n        </div>\n        <div if.bind=\"uiService.state == 5\">\n            <button click.delegate=\"uiService.gotoState(1)\"><i class=\"fa fa-times\"></i></button>\n            <button click.delegate=\"uiService.gotoState(2)\"><i class=\"fa fa-chevron-left\"></i></button>\n            <button click.delegate=\"markShipForMovement(2)\">Drone (${getAvailableShips(2) & signal:'UpdateShipsForMovement' })</button>\n            <button click.delegate=\"markShipForMovement(1)\">Settlement (${getAvailableShips(1) & signal:'UpdateShipsForMovement'})</button>\n            <button click.delegate=\"markShipForMovement(3)\">Tank (${getAvailableShips(3) & signal:'UpdateShipsForMovement'})</button>\n            <button click.delegate=\"markShipForMovement(4)\">Scout (${getAvailableShips(4) & signal:'UpdateShipsForMovement'})</button>\n        </div>\n            <!--\n            <div>\n                <div repeat.for=\"e of entitiesOrbitingPlanet\"\n                     class=\"ship-icon ${e.markedForMovement ? 'selected' : ''}\"\n                     click.delegate=\"markShipForMovement(e)\">${e.positionOnOrbit}</div>\n            </div>\n            -->\n        <div if.bind=\"uiService.state == 3\">\n            <div if.bind=\"uiService.selectedStaticEntity.type == 5\">\n                <button click.delegate=\"uiService.gotoState(1)\"><i class=\"fa fa-times\"></i></button>\n                <button click.delegate=\"buildTransientEntity(2)\">Build Drone</button>\n                <button click.delegate=\"buildTransientEntity(1)\" if.bind=\"uiService.selectedStaticEntity.level >= 2\">Build Settlement Ship</button>\n                <button click.delegate=\"buildTransientEntity(3)\" if.bind=\"uiService.selectedStaticEntity.level >= 3\">Build Tank</button>\n                <button click.delegate=\"buildTransientEntity(4)\" if.bind=\"uiService.selectedStaticEntity.level >= 3\">Build Scout</button>\n                <button if.bind=\"uiService.selectedStaticEntity.level < uiService.selectedStaticEntity.definition.maxUpgradeLevel\" click.delegate=\"upgrade(uiService.selectedStaticEntity)\">Upgrade</div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"logs\">\n        <div id=\"static-logs\">\n            <p repeat.for=\"log of logService.staticLogs\">${log.text}</p>\n        </div>\n        <!--\n        <div class=\"log-sep\"></div>\n        <div class=\"temp-logs\">\n            <p repeat.for=\"log of logService.tempLogs\">${log.text}</p>\n        </div>\n        -->\n    </div>\n</template>"; });
define('text!game/game.css', ['module'], function(module) { module.exports = "body, html {\n  margin: 0;\n  padding: 0;\n  font-family: \"Didact Gothic\", sans-serif;\n  color: white; }\n\n* {\n  box-sizing: border-box; }\n\n.bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n#background {\n  z-index: 50;\n  background-image: url(\"src/assets/starfield_v4.jpg\");\n  background-size: 3817px/2 4314px/2; }\n\n#background-2 {\n  z-index: 55;\n  background-image: url(\"src/assets/vignette.png\");\n  transition: all 100ms linear; }\n\n#pannable {\n  position: fixed;\n  z-index: 75; }\n\n#foreground-canvas {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1000; }\n\n#space {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100; }\n\n#above-context-menu {\n  position: fixed;\n  width: 80%;\n  left: 10%;\n  bottom: 70px;\n  text-align: center;\n  z-index: 250; }\n  #above-context-menu > div {\n    margin-left: 2px;\n    margin-right: 2px;\n    display: inline-block; }\n    #above-context-menu > div img {\n      width: 30px;\n      height: 30px; }\n\n#context-menu {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  z-index: 200; }\n  #context-menu button {\n    background: rgba(0, 0, 0, 0.5);\n    border: none;\n    outline: 0;\n    text-align: center;\n    padding: 20px 30px;\n    margin-left: 5px;\n    margin-right: 5px;\n    color: white;\n    font-size: 16px;\n    opacity: 0.7;\n    position: relative;\n    transition: all 200ms ease-in-out; }\n    #context-menu button > span {\n      position: absolute;\n      top: -30px;\n      left: 0;\n      width: 100%;\n      opacity: 0;\n      transition: all 200ms ease-in-out; }\n    #context-menu button:hover {\n      background: rgba(0, 0, 0, 0.9); }\n      #context-menu button:hover > span {\n        opacity: 1; }\n\n#top-bar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  padding-left: 5%;\n  padding-right: 5%;\n  height: 40px;\n  z-index: 200;\n  text-align: right;\n  color: white; }\n  #top-bar p {\n    font-size: 14px;\n    line-height: 40px;\n    margin: 0; }\n\n.ship-icon {\n  width: 30px;\n  height: 30px;\n  border: 2px solid black;\n  display: inline-block;\n  margin: 5px; }\n  .ship-icon.selected {\n    background: cyan; }\n\n#resource-count {\n  position: fixed;\n  right: 40px;\n  bottom: 80px;\n  z-index: 300;\n  color: #aaaaaa;\n  font-size: 14px;\n  margin: 0; }\n  #resource-count strong {\n    color: #ffffff; }\n\n#logs {\n  position: fixed;\n  bottom: 80px;\n  left: 40px;\n  width: 300px;\n  z-index: 300;\n  text-align: left; }\n  #logs p {\n    font-size: 14px;\n    margin: 0;\n    margin-bottom: 10px;\n    letter-spacing: 2px; }\n  #logs .log-sep {\n    width: 100%;\n    height: 2px;\n    background: black; }\n  #logs .temp-logs p {\n    animation: fade-out 5s linear; }\n\n.health-bar {\n  position: absolute;\n  width: 50px;\n  height: 5px;\n  padding: 1px;\n  background: black;\n  border-radius: 2px; }\n  .health-bar .health-bar-inner {\n    letter-spacing: 2px;\n    height: 100%;\n    background: white; }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n"; });
define('text!game/planet/planet.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet.css\"></require>\n\n    <div class=\"planet\" css=\"transform: translate3d(${planet.x}px, ${planet.y}px, 0);\" >\n        <img class=\"planet-rings\" src=\"src/assets/planet_rings.png\" />\n        <div class=\"planet-sprite ${planet.selected ? 'selected': ''} ${planet.settled ? 'settled': ''}\"\n             click.delegate=\"selectPlanet()\"\n             css=\"background-image: url(${planet.sprite});\">\n             <img src=\"src/assets/planet_settled.png\" if.bind=\"planet.settled\"/>\n             <p>${planet.resources}</p>\n        </div>\n        <div repeat.for=\"entity of planet.staticEntities\"\n            class=\"static-entity\"\n            click.delegate=\"selectStaticEntity(entity)\"\n            css=\"left: ${planet.radius/2 + entity.x}px;\n                top: ${planet.radius/2 + entity.y}px;\">\n            <div class=\"static-entity-sprite\" css=\"background-image: url(${entity.definition.sprite});\">\n                <img if.bind=\"entity.selected\" src=\"src/assets/base_selected.png\" />\n            </div>\n            <div class=\"health-bar\">\n                <div class=\"health-bar-inner\" css=\"width: ${100*(entity.health / entity.definition.health)}%;\"></div>\n            </div>\n        </div>\n        <!--\n        <div repeat.for=\"entity of planet.staticEntities\"\n             class=\"static-entity\"\n             click.delegate=\"selectStaticEntity(entity)\"\n             css=\"left: ${-(entity.distanceFromPlanet + (entity.size/2))}px;\n                  top: ${-(entity.distanceFromPlanet + (entity.size/2))}px;\n                  transform-origin: ${entity.distanceFneromPlanet + planet.radius + (entity.size/2)}px ${entity.distanceFromPlanet + planet.radius + (entity.size/2)}px;\n                  transform: rotate(${entity.positionOnOrbit}deg);\">\n            <div class=\"static-entity-sprite ${entity.selected ? 'selected': ''}\" ></div>\n        </div>\n        -->\n    </div>\n</template"; });
define('text!game/planet/planet.css', ['module'], function(module) { module.exports = ".planet {\n  animation: fade-in 1s linear; }\n  .planet > * {\n    position: absolute; }\n\n.planet-sprite {\n  border-radius: 100%;\n  background-size: 100% 100%;\n  width: 108px;\n  height: 108px; }\n  .planet-sprite img {\n    width: 108px;\n    height: 108px;\n    position: absolute; }\n  .planet-sprite p {\n    text-align: center;\n    font-size: 10px;\n    line-height: 108px;\n    margin: 0;\n    opacity: 0.7; }\n  .planet-sprite.selected {\n    box-shadow: 0px 0px 0px 4px #259ccc; }\n\n.static-entity {\n  animation: fade-in 1.5s linear; }\n  .static-entity .health-bar {\n    left: 20px;\n    top: -8px; }\n\n.static-entity-container {\n  animation: spin 3s linear infinite; }\n  .static-entity-container > * {\n    position: absolute; }\n\n.static-entity-sprite {\n  width: 90px;\n  height: 100px;\n  background-size: 100% 100%; }\n  .static-entity-sprite img {\n    width: 100%;\n    height: 100%; }\n\n@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.planet-rings {\n  position: absolute;\n  left: -326px;\n  top: -326px; }\n"; });
define('text!game/transient/transient.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./transient.css\"></require>\n\n    <div class=\"transient\"\n         css=\"transform: translate3d(${entity.x}px, ${entity.y}px, 0);\">\n        <div class=\"transient-sprite\">\n            <img src=\"${entity.definition.sprite}\" />\n            <div class=\"health-bar\" if.bind=\"entity.health < entity.definition.health\">\n                <div class=\"health-bar-inner\" css=\"width: ${100*(entity.health / entity.definition.health)}%;\"></div>\n            </div>\n        </div>\n    </div>\n</template>"; });
define('text!game/transient/transient.css', ['module'], function(module) { module.exports = ".transient {\n  position: absolute; }\n\n.transient-sprite {\n  width: 20px;\n  height: 20px;\n  animation: fade-in 1.5s linear;\n  position: relative; }\n  .transient-sprite img {\n    position: absolute; }\n  .transient-sprite .health-bar {\n    top: -12px;\n    left: -13px; }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"; });
//# sourceMappingURL=app-bundle.js.map