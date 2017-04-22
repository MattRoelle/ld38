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
define('game/entity-factory',["require", "exports", "aurelia-framework", "./game-state.service", "./transient-entity", "./static-entity", "aurelia-templating-resources", "./rng"], function (require, exports, aurelia_framework_1, game_state_service_1, transient_entity_1, static_entity_1, aurelia_templating_resources_1, rng_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EntityFactory = (function () {
        function EntityFactory(_gameStateService, _signaler) {
            this._gameStateService = _gameStateService;
            this._signaler = _signaler;
        }
        EntityFactory.prototype.spawnStaticEntity = function (p, type) {
            var metadata = static_entity_1.StaticEntityMetadata[type];
            if (this._gameStateService.state.resourceCount < metadata.cost)
                return;
            var entity = new static_entity_1.StaticEntity(type);
            entity.health = metadata.health;
            p.staticEntities.push(entity);
            var posStep = 360 / (p.staticEntities.length);
            for (var i = 0; i < p.staticEntities.length; i++) {
                var e = p.staticEntities[i];
                e.positionOnOrbit = posStep * (i + 1);
            }
            this._gameStateService.state.resourceCount -= metadata.cost;
            this._signaler.signal("constructBuilt");
        };
        EntityFactory.prototype.spawnTransientEntity = function (p, type) {
            var metadata = transient_entity_1.TransientEntityMetadata[type];
            var entity = new transient_entity_1.TransientEntity(type);
            entity.state = transient_entity_1.TransientEntityState.Orbiting;
            entity.orbitingPlanet = p;
            entity.positionOnObirt = rng_1.Rng.rnd(0, 2 * Math.PI);
            this._gameStateService.state.transientEntities.push(entity);
        };
        return EntityFactory;
    }());
    EntityFactory = __decorate([
        aurelia_framework_1.inject(game_state_service_1.GameStateService, aurelia_templating_resources_1.BindingSignaler),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService, aurelia_templating_resources_1.BindingSignaler])
    ], EntityFactory);
    exports.EntityFactory = EntityFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZW50aXR5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsSUFBYSxhQUFhO1FBQ3RCLHVCQUFvQixpQkFBbUMsRUFBVSxTQUEwQjtZQUF2RSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1lBQVUsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDM0YsQ0FBQztRQUVNLHlDQUFpQixHQUF4QixVQUF5QixDQUFlLEVBQUUsSUFBb0I7WUFDMUQsSUFBTSxRQUFRLEdBQTJCLG9DQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQzNELE1BQU0sQ0FBQztZQUVYLElBQU0sTUFBTSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFaEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsSUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUUsQ0FBQztZQUVqRCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlDLElBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxlQUFlLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVNLDRDQUFvQixHQUEzQixVQUE0QixDQUFlLEVBQUUsSUFBdUI7WUFDaEUsSUFBTSxRQUFRLEdBQThCLDBDQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFFLElBQU0sTUFBTSxHQUFHLElBQUksa0NBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsS0FBSyxHQUFHLHVDQUFvQixDQUFDLFFBQVEsQ0FBQztZQUM3QyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsZUFBZSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtJQWpDWSxhQUFhO1FBRHpCLDBCQUFNLENBQUMscUNBQWdCLEVBQUUsOENBQWUsQ0FBQzt5Q0FFQyxxQ0FBZ0IsRUFBcUIsOENBQWU7T0FEbEYsYUFBYSxDQWlDekI7SUFqQ1ksc0NBQWEiLCJmaWxlIjoiZ2FtZS9lbnRpdHktZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR2FtZVN0YXRlU2VydmljZSB9IGZyb20gXCIuL2dhbWUtc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5LCBUcmFuc2llbnRFbnRpdGllcywgVHJhbnNpZW50RW50aXR5RGVmaW5pdGlvbiwgVHJhbnNpZW50RW50aXR5TWV0YWRhdGEsIFRyYW5zaWVudEVudGl0eVN0YXRlIH0gZnJvbSBcIi4vdHJhbnNpZW50LWVudGl0eVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXRpZXMsIFN0YXRpY0VudGl0eSwgU3RhdGljRW50aXR5TWV0YWRhdGEsIFN0YXRpY0VudGl0eURlZmluaXRpb24gfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBCaW5kaW5nU2lnbmFsZXIgfSBmcm9tIFwiYXVyZWxpYS10ZW1wbGF0aW5nLXJlc291cmNlc1wiO1xuaW1wb3J0IHsgUm5nIH0gZnJvbSBcIi4vcm5nXCI7XG5cbkBpbmplY3QoR2FtZVN0YXRlU2VydmljZSwgQmluZGluZ1NpZ25hbGVyKVxuZXhwb3J0IGNsYXNzIEVudGl0eUZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dhbWVTdGF0ZVNlcnZpY2U6IEdhbWVTdGF0ZVNlcnZpY2UsIHByaXZhdGUgX3NpZ25hbGVyOiBCaW5kaW5nU2lnbmFsZXIpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3Bhd25TdGF0aWNFbnRpdHkocDogUGxhbmV0RW50aXR5LCB0eXBlOiBTdGF0aWNFbnRpdGllcykge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IDxTdGF0aWNFbnRpdHlEZWZpbml0aW9uPlN0YXRpY0VudGl0eU1ldGFkYXRhW3R5cGVdO1xuXG4gICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQgPCBtZXRhZGF0YS5jb3N0KVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBTdGF0aWNFbnRpdHkodHlwZSk7XG4gICAgICAgIGVudGl0eS5oZWFsdGggPSBtZXRhZGF0YS5oZWFsdGg7XG5cbiAgICAgICAgcC5zdGF0aWNFbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgICAgIGNvbnN0IHBvc1N0ZXAgPSAzNjAgLyAocC5zdGF0aWNFbnRpdGllcy5sZW5ndGggKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcC5zdGF0aWNFbnRpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZSA9IHAuc3RhdGljRW50aXRpZXNbaV07XG4gICAgICAgICAgICBlLnBvc2l0aW9uT25PcmJpdCA9IHBvc1N0ZXAgKiAoaSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS5yZXNvdXJjZUNvdW50IC09IG1ldGFkYXRhLmNvc3Q7XG4gICAgICAgIHRoaXMuX3NpZ25hbGVyLnNpZ25hbChcImNvbnN0cnVjdEJ1aWx0XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzcGF3blRyYW5zaWVudEVudGl0eShwOiBQbGFuZXRFbnRpdHksIHR5cGU6IFRyYW5zaWVudEVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gPFRyYW5zaWVudEVudGl0eURlZmluaXRpb24+VHJhbnNpZW50RW50aXR5TWV0YWRhdGFbdHlwZV07XG4gICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBUcmFuc2llbnRFbnRpdHkodHlwZSk7XG4gICAgICAgIGVudGl0eS5zdGF0ZSA9IFRyYW5zaWVudEVudGl0eVN0YXRlLk9yYml0aW5nO1xuICAgICAgICBlbnRpdHkub3JiaXRpbmdQbGFuZXQgPSBwO1xuICAgICAgICBlbnRpdHkucG9zaXRpb25Pbk9iaXJ0ID0gUm5nLnJuZCgwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMucHVzaChlbnRpdHkpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/game-state.service',["require", "exports", "aurelia-framework", "aurelia-templating-resources", "./planet-entity", "./static-entity", "./transient-entity", "./rng"], function (require, exports, aurelia_framework_1, aurelia_templating_resources_1, planet_entity_1, static_entity_1, transient_entity_1, rng_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameStateService = (function () {
        function GameStateService() {
            this.state = new GameState();
            this.generateNewPlanet(({
                x: 0,
                y: 0
            }));
            this.generateNewPlanet(({
                x: 400,
                y: 300
            }));
            this.generateNewPlanet(({
                x: -500,
                y: -100
            }));
        }
        GameStateService.prototype.generateNewPlanet = function (opts) {
            var p;
            p = new planet_entity_1.PlanetEntity();
            p.x = opts.x + rng_1.Rng.rnd(-200, 200);
            p.y = opts.y + rng_1.Rng.rnd(-200, 200);
            p.radius = rng_1.Rng.rnd(20, 60);
            p.resources = 500;
            this.state.planets.push(p);
        };
        return GameStateService;
    }());
    GameStateService = __decorate([
        aurelia_framework_1.inject(aurelia_templating_resources_1.BindingSignaler),
        __metadata("design:paramtypes", [])
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvZ2FtZS1zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVVBLElBQWEsZ0JBQWdCO1FBR3pCO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBZ0IsQ0FBQztnQkFDbkMsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLENBQUM7YUFDUCxDQUFDLENBQUMsQ0FBQztZQUVKLElBQUksQ0FBQyxpQkFBaUIsQ0FBZ0IsQ0FBQztnQkFDbkMsQ0FBQyxFQUFFLEdBQUc7Z0JBQ04sQ0FBQyxFQUFFLEdBQUc7YUFDVCxDQUFDLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxpQkFBaUIsQ0FBZ0IsQ0FBQztnQkFDbkMsQ0FBQyxFQUFFLENBQUMsR0FBRztnQkFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO2FBQ1YsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDO1FBRU0sNENBQWlCLEdBQXhCLFVBQXlCLElBQW1CO1lBQ3hDLElBQUksQ0FBZSxDQUFDO1lBQ3BCLENBQUMsR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBR2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQS9CQSxBQStCQyxJQUFBO0lBL0JZLGdCQUFnQjtRQUQ1QiwwQkFBTSxDQUFDLDhDQUFlLENBQUM7O09BQ1gsZ0JBQWdCLENBK0I1QjtJQS9CWSw0Q0FBZ0I7SUFzQzdCO1FBTUk7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUM3QixDQUFDO1FBRU0sMkNBQXVCLEdBQTlCLFVBQStCLElBQW9CO1lBQy9DLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixHQUFHLENBQUEsQ0FBVSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO2dCQUFyQixJQUFJLENBQUMsU0FBQTtnQkFDTCxHQUFHLENBQUEsQ0FBVSxVQUFnQixFQUFoQixLQUFBLENBQUMsQ0FBQyxjQUFjLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO29CQUF6QixJQUFJLENBQUMsU0FBQTtvQkFDTCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLENBQUM7aUJBQ0o7YUFDSjtZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUVNLDZDQUF5QixHQUFoQyxVQUFpQyxDQUFlO1lBQzVDLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixHQUFHLENBQUEsQ0FBVSxVQUFzQixFQUF0QixLQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBdEIsY0FBc0IsRUFBdEIsSUFBc0I7Z0JBQS9CLElBQUksQ0FBQyxTQUFBO2dCQUE2QixDQUFDO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLHVDQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7YUFDSjtZQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDakIsQ0FBQztRQUVELHNCQUFXLGtDQUFXO2lCQUF0QjtnQkFDSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyw4QkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDckYsQ0FBQzs7O1dBQUE7UUFDTCxnQkFBQztJQUFELENBdENBLEFBc0NDLElBQUE7SUF0Q1ksOEJBQVM7SUF3Q3RCLElBQVksVUFFWDtJQUZELFdBQVksVUFBVTtRQUNsQixpREFBVyxDQUFBO0lBQ2YsQ0FBQyxFQUZXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBRXJCIiwiZmlsZSI6ImdhbWUvZ2FtZS1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBjb21wdXRlZEZyb20gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEJpbmRpbmdTaWduYWxlciB9IGZyb20gXCJhdXJlbGlhLXRlbXBsYXRpbmctcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi9wbGFuZXQtZW50aXR5XCI7XG5pbXBvcnQgeyBTdGF0aWNFbnRpdHksIFN0YXRpY0VudGl0aWVzIH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5LCBUcmFuc2llbnRFbnRpdGllcywgVHJhbnNpZW50RW50aXR5U3RhdGUgfSBmcm9tIFwiLi90cmFuc2llbnQtZW50aXR5XCI7XG5pbXBvcnQgeyBSbmcgfSBmcm9tIFwiLi9ybmdcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AaW5qZWN0KEJpbmRpbmdTaWduYWxlcilcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGVTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGU6IEdhbWVTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IEdhbWVTdGF0ZSgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV3UGxhbmV0KDxQbGFuZXRHZW5PcHRzPih7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld1BsYW5ldCg8UGxhbmV0R2VuT3B0cz4oe1xuICAgICAgICAgICAgeDogNDAwLFxuICAgICAgICAgICAgeTogMzAwXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5ld1BsYW5ldCg8UGxhbmV0R2VuT3B0cz4oe1xuICAgICAgICAgICAgeDogLTUwMCxcbiAgICAgICAgICAgIHk6IC0xMDBcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZW5lcmF0ZU5ld1BsYW5ldChvcHRzOiBQbGFuZXRHZW5PcHRzKSB7XG4gICAgICAgIGxldCBwOiBQbGFuZXRFbnRpdHk7XG4gICAgICAgIHAgPSBuZXcgUGxhbmV0RW50aXR5KCk7XG4gICAgICAgIHAueCA9IG9wdHMueCArIFJuZy5ybmQoLTIwMCwgMjAwKTtcbiAgICAgICAgcC55ID0gb3B0cy55ICsgUm5nLnJuZCgtMjAwLCAyMDApO1xuICAgICAgICBwLnJhZGl1cyA9IFJuZy5ybmQoMjAsIDYwKTtcbiAgICAgICAgcC5yZXNvdXJjZXMgPSA1MDA7XG4gICAgICAgIC8vfSB3aGlsZSAoIV8uc29tZSh0aGlzLnN0YXRlLnBsYW5ldHMsIHAyID0+IHAuY29sbGlkZXNXaXRoKHAyKSkpXG5cbiAgICAgICAgdGhpcy5zdGF0ZS5wbGFuZXRzLnB1c2gocCk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgUGxhbmV0R2VuT3B0cyB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSB7XG4gICAgcHVibGljIHBsYW5ldHM6IFBsYW5ldEVudGl0eVtdO1xuICAgIHB1YmxpYyB0cmFuc2llbnRFbnRpdGllczogVHJhbnNpZW50RW50aXR5W107XG4gICAgcHVibGljIHJlc291cmNlQ291bnQ6IG51bWJlcjtcbiAgICBwdWJsaWMgZ2FtZVN0YXRlOiBHYW1lU3RhdGVzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxhbmV0cyA9IFtdO1xuICAgICAgICB0aGlzLnRyYW5zaWVudEVudGl0aWVzID0gW107XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR2FtZVN0YXRlcy5QbGF5aW5nO1xuICAgICAgICB0aGlzLnJlc291cmNlQ291bnQgPSAyMDA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXRpY0VudGl0aWVzT2ZUeXBlKHR5cGU6IFN0YXRpY0VudGl0aWVzKSA6IFN0YXRpY0VudGl0eVtdIHtcbiAgICAgICAgY29uc3QgcmV0VmFsID0gW107XG4gICAgICAgIGZvcihsZXQgcCBvZiB0aGlzLnBsYW5ldHMpIHtcbiAgICAgICAgICAgIGZvcihsZXQgcyBvZiBwLnN0YXRpY0VudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbC5wdXNoKHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbnRpdGllc09yYml0aW5nUGxhbmV0KHA6IFBsYW5ldEVudGl0eSkge1xuICAgICAgICBjb25zdCByZXRWYWwgPSBbXTtcbiAgICAgICAgZm9yKGxldCBlIG9mIHRoaXMudHJhbnNpZW50RW50aXRpZXMpIHs7XG4gICAgICAgICAgICBpZiAoZS5vcmJpdGluZ1BsYW5ldCA9PSBwICYmIGUuc3RhdGUgPT0gVHJhbnNpZW50RW50aXR5U3RhdGUuT3JiaXRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXRWYWwucHVzaChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByZXNvdXJjZUNhcCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMCArIHRoaXMuZ2V0U3RhdGljRW50aXRpZXNPZlR5cGUoU3RhdGljRW50aXRpZXMuU3RvY2twaWxlKS5sZW5ndGggKiA1MDA7XG4gICAgfVxufVxuXG5leHBvcnQgZW51bSBHYW1lU3RhdGVzIHtcbiAgICBQbGF5aW5nID0gMVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/game',["require", "exports", "aurelia-framework", "./game-state.service", "./camera.service", "./tick.service", "./input.service", "./entity-factory", "./ui.service"], function (require, exports, aurelia_framework_1, game_state_service_1, camera_service_1, tick_service_1, input_service_1, entity_factory_1, ui_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game(gameStateService, camera, inputService, entityFactory, uiService, tickService) {
            this.camera = camera;
            this._gameStateService = gameStateService;
            this._inputService = inputService;
            this._entityFactory = entityFactory;
            this.uiService = uiService;
            this._tickService = tickService;
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
                    e.update(deltaTime);
                }
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
        Game.prototype.buildTransientEntity = function (type) {
            this._entityFactory.spawnTransientEntity(this.selectedPlanet, type);
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
        return Game;
    }());
    Game = __decorate([
        aurelia_framework_1.inject(game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService, entity_factory_1.EntityFactory, ui_service_1.UiService, tick_service_1.TickService),
        __metadata("design:paramtypes", [game_state_service_1.GameStateService, camera_service_1.CameraService, input_service_1.InputService, entity_factory_1.EntityFactory, ui_service_1.UiService, tick_service_1.TickService])
    ], Game);
    exports.Game = Game;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztZQUN6QyxDQUFDOzs7V0FBQTtRQUNMLFdBQUM7SUFBRCxDQXRFQSxBQXNFQyxJQUFBO0lBdEVZLElBQUk7UUFEaEIsMEJBQU0sQ0FBQyxxQ0FBZ0IsRUFBRSw4QkFBYSxFQUFFLDRCQUFZLEVBQUUsOEJBQWEsRUFBRSxzQkFBUyxFQUFFLDBCQUFXLENBQUM7eUNBVTNELHFDQUFnQixFQUFVLDhCQUFhLEVBQWdCLDRCQUFZLEVBQWlCLDhCQUFhLEVBQWEsc0JBQVMsRUFBZSwwQkFBVztPQVR0SyxJQUFJLENBc0VoQjtJQXRFWSxvQkFBSSIsImZpbGUiOiJnYW1lL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZVNlcnZpY2UsIEdhbWVTdGF0ZSB9IGZyb20gXCIuL2dhbWUtc3RhdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgVHJhbnNpZW50RW50aXR5LCBUcmFuc2llbnRFbnRpdGllcyB9IGZyb20gXCIuL3RyYW5zaWVudC1lbnRpdHlcIjtcbmltcG9ydCB7IENhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi9jYW1lcmEuc2VydmljZVwiO1xuaW1wb3J0IHsgVGlja1NlcnZpY2UgfSBmcm9tIFwiLi90aWNrLnNlcnZpY2VcIjtcbmltcG9ydCB7IElucHV0U2VydmljZSB9IGZyb20gXCIuL2lucHV0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEVudGl0eUZhY3RvcnkgfSBmcm9tIFwiLi9lbnRpdHktZmFjdG9yeVwiO1xuaW1wb3J0IHsgU3RhdGljRW50aXRpZXMgfSBmcm9tIFwiLi9zdGF0aWMtZW50aXR5XCI7XG5pbXBvcnQgeyBVaVNlcnZpY2UgfSBmcm9tIFwiLi91aS5zZXJ2aWNlXCI7XG5cbkBpbmplY3QoR2FtZVN0YXRlU2VydmljZSwgQ2FtZXJhU2VydmljZSwgSW5wdXRTZXJ2aWNlLCBFbnRpdHlGYWN0b3J5LCBVaVNlcnZpY2UsIFRpY2tTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAgIHB1YmxpYyBjYW1lcmE6IENhbWVyYVNlcnZpY2U7XG5cbiAgICBwcml2YXRlIF9nYW1lU3RhdGVTZXJ2aWNlOiBHYW1lU3RhdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2lucHV0U2VydmljZTogSW5wdXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2VudGl0eUZhY3Rvcnk6IEVudGl0eUZhY3Rvcnk7XG4gICAgcHVibGljIHVpU2VydmljZTogVWlTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3RpY2tTZXJ2aWNlOiBUaWNrU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZVNlcnZpY2U6IEdhbWVTdGF0ZVNlcnZpY2UsIGNhbWVyYTogQ2FtZXJhU2VydmljZSwgaW5wdXRTZXJ2aWNlOiBJbnB1dFNlcnZpY2UsIGVudGl0eUZhY3Rvcnk6IEVudGl0eUZhY3RvcnksIHVpU2VydmljZTogVWlTZXJ2aWNlLCB0aWNrU2VydmljZTogVGlja1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2UgPSBnYW1lU3RhdGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLl9pbnB1dFNlcnZpY2UgPSBpbnB1dFNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2VudGl0eUZhY3RvcnkgPSBlbnRpdHlGYWN0b3J5O1xuICAgICAgICB0aGlzLnVpU2VydmljZSA9IHVpU2VydmljZTtcbiAgICAgICAgdGhpcy5fdGlja1NlcnZpY2UgPSB0aWNrU2VydmljZTtcbiAgICB9XG5cbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgdGhpcy5faW5wdXRTZXJ2aWNlLmluaXRLZXlCaW5kaW5ncygpO1xuXG4gICAgICAgIGxldCB0MiA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBhbmltRm4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9ICh0IC0gdDIpLzEwMDA7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dFNlcnZpY2UuY2hlY2tGb3JJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5fdGlja1NlcnZpY2UudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgZSBvZiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnRyYW5zaWVudEVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgZS51cGRhdGUoZGVsdGFUaW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdDIgPSB0O1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1Gbik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1Gbik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnYW1lU3RhdGUoKSA6IEdhbWVTdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZW50aXRpZXNPcmJpdGluZ1BsYW5ldCgpIDogVHJhbnNpZW50RW50aXRpZXNbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLmdldEVudGl0aWVzT3JiaXRpbmdQbGFuZXQodGhpcy5zZWxlY3RlZFBsYW5ldCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtTaGlwRm9yTW92ZW1lbnQoZTogVHJhbnNpZW50RW50aXR5KSB7XG4gICAgICAgIGUubWFya2VkRm9yTW92ZW1lbnQgPSAhZS5tYXJrZWRGb3JNb3ZlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRTdGF0aWNFbnRpdHkodHlwZTogU3RhdGljRW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5RmFjdG9yeS5zcGF3blN0YXRpY0VudGl0eSh0aGlzLnNlbGVjdGVkUGxhbmV0LCB0eXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRUcmFuc2llbnRFbnRpdHkodHlwZTogVHJhbnNpZW50RW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5RmFjdG9yeS5zcGF3blRyYW5zaWVudEVudGl0eSh0aGlzLnNlbGVjdGVkUGxhbmV0LCB0eXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVQbGFuZXRzKCk6IFBsYW5ldEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucGxhbmV0cztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHZpc2libGVUcmFuc2llbnRzKCk6IFRyYW5zaWVudEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZFBsYW5ldCgpOiBQbGFuZXRFbnRpdHkge1xuICAgICAgICByZXR1cm4gdGhpcy51aVNlcnZpY2Uuc2VsZWN0ZWRQbGFuZXQ7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('game/planet-entity',["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlanetEntity = (function () {
        function PlanetEntity() {
            this.staticEntities = [];
        }
        PlanetEntity.prototype.collidesWith = function (e2) {
            return utils_1.Utils.dist(e2.x, e2.y, this.x, this.y) <= e2.radius + this.radius;
        };
        return PlanetEntity;
    }());
    exports.PlanetEntity = PlanetEntity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvcGxhbmV0LWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUNJO1lBUU8sbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBUDNDLENBQUM7UUFTTSxtQ0FBWSxHQUFuQixVQUFvQixFQUFnQjtZQUNoQyxNQUFNLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdFLENBQUM7UUFDTCxtQkFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZFksb0NBQVkiLCJmaWxlIjoiZ2FtZS9wbGFuZXQtZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgU3RhdGljRW50aXR5IH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuXG5leHBvcnQgY2xhc3MgUGxhbmV0RW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuICAgIHB1YmxpYyByZXNvdXJjZXM6IG51bWJlcjtcbiAgICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIHN0YXRpY0VudGl0aWVzOiBTdGF0aWNFbnRpdHlbXSA9IFtdO1xuXG4gICAgcHVibGljIGNvbGxpZGVzV2l0aChlMjogUGxhbmV0RW50aXR5KSB7XG4gICAgICAgIHJldHVybiBVdGlscy5kaXN0KGUyLngsIGUyLnksIHRoaXMueCwgdGhpcy55KSA8PSBlMi5yYWRpdXMgKyB0aGlzLnJhZGl1cztcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
            _this.type = type;
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
        StaticEntities[StaticEntities["Factory"] = 5] = "Factory";
        StaticEntities[StaticEntities["Stockpile"] = 6] = "Stockpile";
    })(StaticEntities = exports.StaticEntities || (exports.StaticEntities = {}));
    var StaticEntityMetadata = {};
    exports.StaticEntityMetadata = StaticEntityMetadata;
    StaticEntityMetadata[StaticEntities.MiningStation] = {
        cost: 100,
        health: 100,
        maxUpgradeLevel: 3
    };
    StaticEntityMetadata[StaticEntities.Stockpile] = {
        cost: 100,
        health: 100,
        maxUpgradeLevel: 3
    };
    StaticEntityMetadata[StaticEntities.Factory] = {
        cost: 100,
        health: 100,
        maxUpgradeLevel: 3
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvc3RhdGljLWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBRUE7UUFBa0MsZ0NBQU07UUFPcEMsc0JBQVksSUFBb0I7WUFBaEMsWUFDSSxpQkFBTyxTQUVWO1lBTk0sd0JBQWtCLEdBQVcsRUFBRSxDQUFDO1lBQ2hDLFVBQUksR0FBVyxFQUFFLENBQUM7WUFJckIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O1FBQ3JCLENBQUM7UUFDTCxtQkFBQztJQUFELENBWEEsQUFXQyxDQVhpQyxlQUFNLEdBV3ZDO0lBWFksb0NBQVk7SUFhekIsSUFBWSxjQU9YO0lBUEQsV0FBWSxjQUFjO1FBQ3RCLHFFQUFpQixDQUFBO1FBQ2pCLHFFQUFpQixDQUFBO1FBQ2pCLHVEQUFVLENBQUE7UUFDVix5RUFBbUIsQ0FBQTtRQUNuQix5REFBVyxDQUFBO1FBQ1gsNkRBQWEsQ0FBQTtJQUNqQixDQUFDLEVBUFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFPekI7SUFRRCxJQUFNLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztJQW9CdkIsb0RBQW9CO0lBbEI3QixvQkFBb0IsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUc7UUFDakQsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsR0FBRztRQUNYLGVBQWUsRUFBRSxDQUFDO0tBQ3JCLENBQUM7SUFFRixvQkFBb0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUc7UUFDN0MsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsR0FBRztRQUNYLGVBQWUsRUFBRSxDQUFDO0tBQ3JCLENBQUM7SUFFRixvQkFBb0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUc7UUFDM0MsSUFBSSxFQUFFLEdBQUc7UUFDVCxNQUFNLEVBQUUsR0FBRztRQUNYLGVBQWUsRUFBRSxDQUFDO0tBQ3JCLENBQUMiLCJmaWxlIjoiZ2FtZS9zdGF0aWMtZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNFbnRpdHkgZXh0ZW5kcyBFbnRpdHkge1xuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBTdGF0aWNFbnRpdGllcztcbiAgICBwdWJsaWMgcG9zaXRpb25Pbk9yYml0OiBudW1iZXI7XG4gICAgcHVibGljIGRpc3RhbmNlRnJvbVBsYW5ldDogbnVtYmVyID0gNDA7XG4gICAgcHVibGljIHNpemU6IG51bWJlciA9IDYwO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogU3RhdGljRW50aXRpZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIFN0YXRpY0VudGl0aWVzIHtcbiAgICBNaW5pbmdTdGF0aW9uID0gMSxcbiAgICBDb21tYW5kQ2VudGVyID0gMixcbiAgICBUdXJyZXQgPSAzLFxuICAgIFNoaWVsZEdlbmVyYXRvciA9IDQsXG4gICAgRmFjdG9yeSA9IDUsXG4gICAgU3RvY2twaWxlID0gNlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRpY0VudGl0eURlZmluaXRpb24ge1xuICAgIGNvc3Q6IG51bWJlcjtcbiAgICBoZWFsdGg6IG51bWJlcjtcbiAgICBtYXhVcGdyYWRlTGV2ZWw6IG51bWJlcjtcbn1cblxuY29uc3QgU3RhdGljRW50aXR5TWV0YWRhdGEgPSB7fTtcblxuU3RhdGljRW50aXR5TWV0YWRhdGFbU3RhdGljRW50aXRpZXMuTWluaW5nU3RhdGlvbl0gPSB7XG4gICAgY29zdDogMTAwLFxuICAgIGhlYWx0aDogMTAwLFxuICAgIG1heFVwZ3JhZGVMZXZlbDogM1xufTtcblxuU3RhdGljRW50aXR5TWV0YWRhdGFbU3RhdGljRW50aXRpZXMuU3RvY2twaWxlXSA9IHtcbiAgICBjb3N0OiAxMDAsXG4gICAgaGVhbHRoOiAxMDAsXG4gICAgbWF4VXBncmFkZUxldmVsOiAzXG59O1xuXG5TdGF0aWNFbnRpdHlNZXRhZGF0YVtTdGF0aWNFbnRpdGllcy5GYWN0b3J5XSA9IHtcbiAgICBjb3N0OiAxMDAsXG4gICAgaGVhbHRoOiAxMDAsXG4gICAgbWF4VXBncmFkZUxldmVsOiAzXG59O1xuXG5leHBvcnQgeyBTdGF0aWNFbnRpdHlNZXRhZGF0YSB9OyJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('game/tick.service',["require", "exports", "aurelia-framework", "./game-state.service", "./static-entity"], function (require, exports, aurelia_framework_1, game_state_service_1, static_entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TickService = TickService_1 = (function () {
        function TickService(_gameStateService) {
            this._gameStateService = _gameStateService;
            this.startTime = Date.now();
            this.ticks = 0;
            this._timeAtLastTick = this.startTime;
        }
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
            ++this.ticks;
            if (this.ticks % 8 == 0) {
                this.updateMiners();
            }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUvdGljay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BLElBQWEsV0FBVztRQVFwQixxQkFBb0IsaUJBQW1DO1lBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUMsQ0FBQztRQUVNLDRCQUFNLEdBQWI7WUFDSSxJQUFNLGdCQUFnQixHQUFHLENBQUMsSUFBSSxHQUFDLGFBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3QyxPQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osRUFBRSxNQUFNLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUM7UUFFTywwQkFBSSxHQUFaO1lBQ0ksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDO1FBRU8sa0NBQVksR0FBcEI7WUFDSSxHQUFHLENBQUEsQ0FBVSxVQUFvQyxFQUFwQyxLQUFBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFwQyxjQUFvQyxFQUFwQyxJQUFvQztnQkFBN0MsSUFBSSxDQUFDLFNBQUE7Z0JBQ0wsR0FBRyxDQUFBLENBQVUsVUFBZ0IsRUFBaEIsS0FBQSxDQUFDLENBQUMsY0FBYyxFQUFoQixjQUFnQixFQUFoQixJQUFnQjtvQkFBekIsSUFBSSxDQUFDLFNBQUE7b0JBQ0wsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSw4QkFBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN6SSxDQUFDLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO29CQUNyRCxDQUFDO2lCQUNKO2FBQ0o7UUFDTCxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQTdDQSxBQTZDQyxJQUFBO0lBNUNpQix3QkFBWSxHQUFXLENBQUMsQ0FBQztJQUQ5QixXQUFXO1FBRHZCLDBCQUFNLENBQUMscUNBQWdCLENBQUM7eUNBU2tCLHFDQUFnQjtPQVI5QyxXQUFXLENBNkN2QjtJQTdDWSxrQ0FBVyIsImZpbGUiOiJnYW1lL3RpY2suc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR2FtZVN0YXRlU2VydmljZSwgR2FtZVN0YXRlIH0gZnJvbSBcIi4vZ2FtZS1zdGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQbGFuZXRFbnRpdHkgfSBmcm9tIFwiLi9wbGFuZXQtZW50aXR5XCI7XG5pbXBvcnQgeyBTdGF0aWNFbnRpdHksIFN0YXRpY0VudGl0aWVzIH0gZnJvbSBcIi4vc3RhdGljLWVudGl0eVwiO1xuXG5AaW5qZWN0KEdhbWVTdGF0ZVNlcnZpY2UpXG5leHBvcnQgY2xhc3MgVGlja1NlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgVGlja0ludGVydmFsOiBudW1iZXIgPSA0O1xuXG4gICAgcHVibGljIHN0YXJ0VGltZTogbnVtYmVyO1xuICAgIHB1YmxpYyB0aWNrczogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfdGltZUF0TGFzdFRpY2s6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dhbWVTdGF0ZVNlcnZpY2U6IEdhbWVTdGF0ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnRpY2tzID0gMDtcbiAgICAgICAgdGhpcy5fdGltZUF0TGFzdFRpY2sgPSB0aGlzLnN0YXJ0VGltZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCB0aWNrSW50ZXJ2YWxJbk1zID0gKDEwMDAvVGlja1NlcnZpY2UuVGlja0ludGVydmFsKTtcbiAgICAgICAgY29uc3QgdCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGR0ID0gdCAtIHRoaXMuX3RpbWVBdExhc3RUaWNrO1xuXG4gICAgICAgIGxldCBuVGlja3MgPSBNYXRoLmZsb29yKGR0L3RpY2tJbnRlcnZhbEluTXMpO1xuICAgICAgICB3aGlsZShuVGlja3MgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgICAgICAgIC0tblRpY2tzO1xuICAgICAgICAgICAgdGhpcy5fdGltZUF0TGFzdFRpY2sgPSB0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0aWNrKCkge1xuICAgICAgICArK3RoaXMudGlja3M7XG4gICAgICAgIGlmICh0aGlzLnRpY2tzICUgOCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1pbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVNaW5lcnMoKSB7XG4gICAgICAgIGZvcihsZXQgcCBvZiB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnBsYW5ldHMpIHtcbiAgICAgICAgICAgIGZvcihsZXQgcyBvZiBwLnN0YXRpY0VudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMudHlwZSA9PSBTdGF0aWNFbnRpdGllcy5NaW5pbmdTdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyID0gTWF0aC5taW4ocC5yZXNvdXJjZXMsIE1hdGgubWF4KHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUucmVzb3VyY2VDYXAgLSB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQsIDApLCA1MCk7XG4gICAgICAgICAgICAgICAgICAgIHAucmVzb3VyY2VzIC09IGRyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGVTZXJ2aWNlLnN0YXRlLnJlc291cmNlQ291bnQgKz0gZHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('game/transient-entity',["require", "exports", "./entity", "./utils"], function (require, exports, entity_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TransientEntity = (function (_super) {
        __extends(TransientEntity, _super);
        function TransientEntity(type) {
            var _this = _super.call(this) || this;
            _this.distanceFromOrbitingPlanet = 250;
            _this.x = 0;
            _this.y = 0;
            _this.orbitDirection = -1;
            _this.orbitSpeed = 2;
            _this.movementSpeed = 300;
            _this.markedForMovement = false;
            _this.type = type;
            return _this;
        }
        TransientEntity.prototype.update = function (deltaT) {
            switch (this.state) {
                case TransientEntityState.Orbiting:
                    this.updateOrbit(deltaT);
                    break;
                case TransientEntityState.Moving:
                    this.updateMoving(deltaT);
                    break;
            }
        };
        TransientEntity.prototype.updateMoving = function (deltaT) {
            var angleToPlanet = Math.atan2(this.y - this.orbitingPlanet.y, this.x - this.orbitingPlanet.x);
            this.x -= Math.cos(angleToPlanet) * this.movementSpeed * deltaT;
            this.y -= Math.sin(angleToPlanet) * this.movementSpeed * deltaT;
            if (utils_1.Utils.dist(this.x, this.y, this.orbitingPlanet.x, this.orbitingPlanet.y) <= this.distanceFromOrbitingPlanet + this.orbitingPlanet.radius) {
                this.positionOnObirt = angleToPlanet;
                this.state = TransientEntityState.Orbiting;
            }
        };
        TransientEntity.prototype.updateOrbit = function (deltaT) {
            this.positionOnObirt += this.orbitDirection * this.orbitSpeed * deltaT;
            this.x = this.orbitingPlanet.x + (Math.cos(this.positionOnObirt) * this.distanceFromOrbitingPlanet) + this.orbitingPlanet.radius;
            this.y = this.orbitingPlanet.y + (Math.sin(this.positionOnObirt) * this.distanceFromOrbitingPlanet) + this.orbitingPlanet.radius;
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
        TransientEntities[TransientEntities["Carrier"] = 1] = "Carrier";
    })(TransientEntities = exports.TransientEntities || (exports.TransientEntities = {}));
    var TransientEntityMetadata = {};
    exports.TransientEntityMetadata = TransientEntityMetadata;
    TransientEntityMetadata[TransientEntities.Carrier] = {
        cost: 100
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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b0MsZUFBTSxHQTRDMUM7SUE1Q1ksMENBQWU7SUE4QzVCLElBQVksb0JBSVg7SUFKRCxXQUFZLG9CQUFvQjtRQUM1Qix1RUFBWSxDQUFBO1FBQ1osbUVBQVUsQ0FBQTtRQUNWLHlFQUFhLENBQUE7SUFDakIsQ0FBQyxFQUpXLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBSS9CO0lBRUQsSUFBWSxpQkFFWDtJQUZELFdBQVksaUJBQWlCO1FBQ3pCLCtEQUFXLENBQUE7SUFDZixDQUFDLEVBRlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFFNUI7SUFPRCxJQUFNLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztJQUsxQiwwREFBdUI7SUFKaEMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUc7UUFDakQsSUFBSSxFQUFFLEdBQUc7S0FDWixDQUFDIiwiZmlsZSI6ImdhbWUvdHJhbnNpZW50LWVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL2VudGl0eVwiO1xuaW1wb3J0IHsgUGxhbmV0RW50aXR5IH0gZnJvbSBcIi4vcGxhbmV0LWVudGl0eVwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpZW50RW50aXR5IGV4dGVuZHMgRW50aXR5IHtcbiAgICBwdWJsaWMgZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQ6IG51bWJlciA9IDI1MDtcbiAgICBwdWJsaWMgdHlwZTogVHJhbnNpZW50RW50aXRpZXM7XG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHBvc2l0aW9uT25PYmlydDogbnVtYmVyO1xuICAgIHB1YmxpYyBvcmJpdERpcmVjdGlvbjogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIG9yYml0U3BlZWQ6IG51bWJlciA9IDI7XG4gICAgcHVibGljIG1vdmVtZW50U3BlZWQ6IG51bWJlciA9IDMwMDtcbiAgICBwdWJsaWMgc3RhdGU6IFRyYW5zaWVudEVudGl0eVN0YXRlO1xuICAgIHB1YmxpYyBvcmJpdGluZ1BsYW5ldDogUGxhbmV0RW50aXR5O1xuICAgIHB1YmxpYyBtYXJrZWRGb3JNb3ZlbWVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogVHJhbnNpZW50RW50aXRpZXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YVQ6IG51bWJlcikge1xuICAgICAgICBzd2l0Y2godGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9yYml0KGRlbHRhVCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRyYW5zaWVudEVudGl0eVN0YXRlLk1vdmluZzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vdmluZyhkZWx0YVQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVNb3ZpbmcoZGVsdGFUOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYW5nbGVUb1BsYW5ldCA9IE1hdGguYXRhbjIodGhpcy55IC0gdGhpcy5vcmJpdGluZ1BsYW5ldC55LCB0aGlzLnggLSB0aGlzLm9yYml0aW5nUGxhbmV0LngpO1xuICAgICAgICB0aGlzLnggLT0gTWF0aC5jb3MoYW5nbGVUb1BsYW5ldCkgKiB0aGlzLm1vdmVtZW50U3BlZWQgKiBkZWx0YVQ7XG4gICAgICAgIHRoaXMueSAtPSBNYXRoLnNpbihhbmdsZVRvUGxhbmV0KSAqIHRoaXMubW92ZW1lbnRTcGVlZCAqIGRlbHRhVDtcbiAgICAgICAgaWYgKFV0aWxzLmRpc3QodGhpcy54LCB0aGlzLnksIHRoaXMub3JiaXRpbmdQbGFuZXQueCwgdGhpcy5vcmJpdGluZ1BsYW5ldC55KSA8PSB0aGlzLmRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0ICsgdGhpcy5vcmJpdGluZ1BsYW5ldC5yYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25Pbk9iaXJ0ID0gYW5nbGVUb1BsYW5ldDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5PcmJpdGluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlT3JiaXQoZGVsdGFUOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbk9uT2JpcnQgKz0gdGhpcy5vcmJpdERpcmVjdGlvbiAqIHRoaXMub3JiaXRTcGVlZCAqIGRlbHRhVDtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5vcmJpdGluZ1BsYW5ldC54ICsgKE1hdGguY29zKHRoaXMucG9zaXRpb25Pbk9iaXJ0KSAqIHRoaXMuZGlzdGFuY2VGcm9tT3JiaXRpbmdQbGFuZXQpICsgdGhpcy5vcmJpdGluZ1BsYW5ldC5yYWRpdXM7XG4gICAgICAgIHRoaXMueSA9IHRoaXMub3JiaXRpbmdQbGFuZXQueSArIChNYXRoLnNpbih0aGlzLnBvc2l0aW9uT25PYmlydCkgKiB0aGlzLmRpc3RhbmNlRnJvbU9yYml0aW5nUGxhbmV0KSArIHRoaXMub3JiaXRpbmdQbGFuZXQucmFkaXVzO1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gVHJhbnNpZW50RW50aXR5U3RhdGUge1xuICAgIE9yYml0aW5nID0gMSxcbiAgICBNb3ZpbmcgPSAyLFxuICAgIEF0dGFja2luZyA9IDNcbn1cblxuZXhwb3J0IGVudW0gVHJhbnNpZW50RW50aXRpZXMge1xuICAgIENhcnJpZXIgPSAxXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpZW50RW50aXR5RGVmaW5pdGlvbiB7XG4gICAgY29zdDogbnVtYmVyO1xuICAgIGhlYWx0aDogbnVtYmVyO1xufVxuXG5jb25zdCBUcmFuc2llbnRFbnRpdHlNZXRhZGF0YSA9IHt9O1xuVHJhbnNpZW50RW50aXR5TWV0YWRhdGFbVHJhbnNpZW50RW50aXRpZXMuQ2Fycmllcl0gPSB7XG4gICAgY29zdDogMTAwXG59O1xuXG5leHBvcnQgeyBUcmFuc2llbnRFbnRpdHlNZXRhZGF0YSB9Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFnQixDQUFBO1FBQ2hCLGlHQUE4QixDQUFBO0lBQ2xDLENBQUMsRUFMVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUsxQiIsImZpbGUiOiJnYW1lL3VpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2llbnRFbnRpdHlTdGF0ZSB9IGZyb20gJy4vdHJhbnNpZW50LWVudGl0eSc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFBsYW5ldEVudGl0eSB9IGZyb20gXCIuL3BsYW5ldC1lbnRpdHlcIjtcbmltcG9ydCB7IFN0YXRpY0VudGl0eSB9IGZyb20gXCIuL3N0YXRpYy1lbnRpdHlcIjtcbmltcG9ydCB7IEdhbWVTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9nYW1lLXN0YXRlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5AaW5qZWN0KEdhbWVTdGF0ZVNlcnZpY2UpXG5leHBvcnQgY2xhc3MgVWlTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRQbGFuZXQ6IFBsYW5ldEVudGl0eTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRTdGF0aWNFbnRpdHk6IFN0YXRpY0VudGl0eTtcbiAgICBwdWJsaWMgc3RhdGU6IENvbnRleHRVaVN0YXRlcyA9IENvbnRleHRVaVN0YXRlcy5Ob25lO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2FtZVN0YXRlU2VydmljZTogR2FtZVN0YXRlU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXNlbGVjdEN1cnJlbnQoKSB7XG4gICAgICAgICEhdGhpcy5zZWxlY3RlZFBsYW5ldCAmJiAodGhpcy5zZWxlY3RlZFBsYW5ldC5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICAgICAgISF0aGlzLnNlbGVjdGVkU3RhdGljRW50aXR5ICYmICh0aGlzLnNlbGVjdGVkU3RhdGljRW50aXR5LnNlbGVjdGVkID0gZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlVW5pdHMoKSB7XG4gICAgICAgIGlmICghXy5zb21lKHRoaXMuX2dhbWVTdGF0ZVNlcnZpY2Uuc3RhdGUudHJhbnNpZW50RW50aXRpZXMsIGUgPT4gZS5tYXJrZWRGb3JNb3ZlbWVudCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuZGVzZWxlY3RDdXJyZW50KCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb250ZXh0VWlTdGF0ZXMuU2VsZWN0aW5nUGxhbmV0Rm9yTW92ZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdFBsYW5ldChwOiBQbGFuZXRFbnRpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gQ29udGV4dFVpU3RhdGVzLlNlbGVjdGluZ1BsYW5ldEZvck1vdmVtZW50KSB7XG4gICAgICAgICAgICBmb3IobGV0IGUgb2YgdGhpcy5fZ2FtZVN0YXRlU2VydmljZS5zdGF0ZS50cmFuc2llbnRFbnRpdGllcykge1xuICAgICAgICAgICAgICAgIGlmIChlLm1hcmtlZEZvck1vdmVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGUubWFya2VkRm9yTW92ZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZS5vcmJpdGluZ1BsYW5ldCA9IHA7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RhdGUgPSBUcmFuc2llbnRFbnRpdHlTdGF0ZS5Nb3Zpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnRleHRVaVN0YXRlcy5Ob25lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdEN1cnJlbnQoKTtcbiAgICAgICAgICAgIHAuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBsYW5ldCA9IHA7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ29udGV4dFVpU3RhdGVzLlBsYW5ldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RTdGF0aWNFbnRpdHkoZTogU3RhdGljRW50aXR5KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IENvbnRleHRVaVN0YXRlcy5TZWxlY3RpbmdQbGFuZXRGb3JNb3ZlbWVudClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB0aGlzLmRlc2VsZWN0Q3VycmVudCgpO1xuICAgICAgICBlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXRpY0VudGl0eSA9IGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb250ZXh0VWlTdGF0ZXMuU3RhdGljRW50aXR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gQ29udGV4dFVpU3RhdGVzIHtcbiAgICBOb25lID0gMSxcbiAgICBQbGFuZXQgPSAyLFxuICAgIFN0YXRpY0VudGl0eSA9IDMsXG4gICAgU2VsZWN0aW5nUGxhbmV0Rm9yTW92ZW1lbnQgPSA0XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
define('text!game/game.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet/planet\"></require>\n    <require from=\"./transient/transient\"></require>\n    <require from=\"./game.css\"></require>\n\n    <div id=\"top-bar\">\n        <p>Resources: ${gameState.resourceCount} / ${gameState.resourceCap & signal:'constructBuilt'}</p>\n    </div>\n\n    <div id=\"space\">\n        <div id=\"pannable\" css=\"transform: translate3d(${-camera.panX}px, ${-camera.panY}px, 0);\">\n            <div repeat.for=\"planet of visiblePlanets\">\n                <planet planet.bind=\"planet\"></planet>\n            </div>\n            <div repeat.for=\"transient of visibleTransients\">\n                <transient entity.bind=\"transient\"></transient>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"context-menu\">\n        <div if.bind=\"uiService.state == 2\">\n            <div>\n                <button click.delegate=\"buildStaticEntity(1)\">Mining Station</button>\n                <button click.delegate=\"buildStaticEntity(5)\">Factory</button>\n                <button click.delegate=\"buildStaticEntity(6)\">Stockpile</button>\n            </div>\n            <div>\n                <div repeat.for=\"e of entitiesOrbitingPlanet\"\n                     class=\"ship-icon ${e.markedForMovement ? 'selected' : ''}\"\n                     click.delegate=\"markShipForMovement(e)\">${e.positionOnOrbit}</div>\n            </div>\n            <div>\n                <button click.delegate=\"uiService.moveUnits()\">Move</button>\n            </div>\n        </div>\n        <div if.bind=\"uiService.state == 3 && uiService.selectedStaticEntity.type == 5\">\n            <button click.delegate=\"buildTransientEntity(1)\">Build Ship</button>\n        </div>\n    </div>\n</template>"; });
define('text!game/game.css', ['module'], function(module) { module.exports = "body, html {\n  margin: 0;\n  padding: 0; }\n\n#space {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100; }\n\n#context-menu {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  background: #eee;\n  z-index: 200; }\n\n#top-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  z-index: 200;\n  background: black;\n  color: white; }\n\n.ship-icon {\n  width: 30px;\n  height: 30px;\n  border: 2px solid black;\n  display: inline-block;\n  margin: 5px; }\n  .ship-icon.selected {\n    background: cyan; }\n"; });
define('text!game/planet/planet.css', ['module'], function(module) { module.exports = ".planet * {\n  position: absolute; }\n\n.planet-sprite {\n  border-radius: 100%;\n  background: red;\n  width: 80px;\n  height: 80px; }\n\n.selected {\n  box-shadow: 0px 0px 30px 0px black; }\n\n.static-entity-sprite {\n  border-radius: 100%;\n  background: blue;\n  width: 60px;\n  height: 60px; }\n"; });
define('text!game/planet/planet.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./planet.css\"></require>\n\n    <div class=\"planet\" css=\"transform: translate3d(${planet.x}px, ${planet.y}px, 0);\" >\n        <div class=\"planet-sprite ${planet.selected ? 'selected': ''}\"\n             click.delegate=\"selectPlanet()\"\n             css=\"width: ${planet.radius*2}px; height: ${planet.radius*2}px\">\n             <h2>${planet.resources}</h2>\n        </div>\n        <div repeat.for=\"entity of planet.staticEntities\"\n             class=\"static-entity\"\n             click.delegate=\"selectStaticEntity(entity)\"\n             css=\"left: ${-(entity.distanceFromPlanet + (entity.size/2))}px;\n                  top: ${-(entity.distanceFromPlanet + (entity.size/2))}px;\n                  transform-origin: ${entity.distanceFromPlanet + planet.radius + (entity.size/2)}px ${entity.distanceFromPlanet + planet.radius + (entity.size/2)}px;\n                  transform: rotate(${entity.positionOnOrbit}deg);\">\n            <div class=\"static-entity-sprite ${entity.selected ? 'selected': ''}\" ></div>\n        </div>\n    </div>\n</template"; });
define('text!game/transient/transient.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./transient.css\"></require>\n\n    <div class=\"transient\"\n         css=\"transform: translate3d(${entity.x}px, ${entity.y}px, 0);\">\n        <div class=\"transient-sprite\"></div>\n    </div>\n</template>"; });
define('text!game/transient/transient.css', ['module'], function(module) { module.exports = ".transient {\n  position: absolute; }\n\n.transient-sprite {\n  width: 10px;\n  height: 10px;\n  background: purple; }\n"; });
//# sourceMappingURL=app-bundle.js.map