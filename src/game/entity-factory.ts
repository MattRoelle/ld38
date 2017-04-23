import { inject } from "aurelia-framework";
import { GameStateService } from "./game-state.service";
import { PlanetEntity } from "./planet-entity";
import { TickService, ScheduledEvent } from "./tick.service";
import { TransientEntity, TransientEntities, TransientEntityDefinition, TransientEntityMetadata, TransientEntityState, TransientEntityFaction } from "./transient-entity";
import { StaticEntities, StaticEntity, StaticEntityMetadata, StaticEntityDefinition } from "./static-entity";
import { BindingSignaler } from "aurelia-templating-resources";
import { LogService, Log } from "./log.service";
import { Rng } from "./rng";
import { EventService, EventTypes } from "./event.service";

@inject(GameStateService, BindingSignaler, TickService, LogService, EventService)
export class EntityFactory {
    constructor(private _gameStateService: GameStateService, private _signaler: BindingSignaler, private _tickService: TickService, private _logService: LogService, private _eventService: EventService) {
        this._eventService.registerHandler(EventTypes.EnemyPlanetCreated, ev => {
            for(let i = 0; i < 3; i++) {
                this.spawnTransientEntity(ev.planet, TransientEntities.EnemyDrone, true);
            }
        });
    }

    public spawnStaticEntity(p: PlanetEntity, type: StaticEntities) {
        const metadata = <StaticEntityDefinition>StaticEntityMetadata[type];

        if (this._gameStateService.state.resourceCount < metadata.cost)
            return;

        const entity = new StaticEntity(type);
        entity.health = metadata.health;

        this._gameStateService.state.resourceCount -= metadata.cost;

        this._logService.addTempLog(<Log>{
            text: `Started building ${metadata.name}`
        });

        const staticLog = <Log>{
            text: `${metadata.name}: 0%`
        };
        this._logService.addStaticLog(staticLog);

        const ev: ScheduledEvent = <ScheduledEvent>{
            n: metadata.buildTime,
            onTick: () => {
                const percentage = (this._tickService.ticks - ev.tickScheduledAt) / ev.n;
                staticLog.text = `${metadata.name}: ${Math.floor(percentage * 100)}%`
            },
            onCompletion: () => {
                p.staticEntities.push(entity);
                this._logService.deleteStaticLog(staticLog.id);
                this._logService.addTempLog(<Log>{
                    text: `Fins`
                });
                const posStep = 360 / (p.staticEntities.length);

                for (let i = 0; i < p.staticEntities.length; i++) {
                    const e = p.staticEntities[i];
                    e.positionOnOrbit = posStep * (i + 1);
                }
            }
        };

        this._tickService.scheduleEvent(ev);
    }

    public upgradeStaticEntity(e: StaticEntity) {
        if (e.upgrading)
            return;

        if (e.level < e.metadata.maxUpgradeLevel) {
            const staticLog = <Log>{
                text: `Upgrading ${e.metadata.name} to ${e.level + 1}: 0%`
            };
            this._logService.addStaticLog(staticLog);

            e.upgrading = true;

            const ev: ScheduledEvent = <ScheduledEvent>{
                n: e.metadata.upgradeTime,
                onTick: () => {
                    const percentage = (this._tickService.ticks - ev.tickScheduledAt) / ev.n;
                    staticLog.text = `Upgrading ${e.metadata.name} to ${e.level + 1}: ${Math.floor(percentage * 100)}%`
                },
                onCompletion: () => {
                    ++e.level;
                    e.upgrading = false;
                    this._logService.addTempLog(<Log>{
                        text: `Finshed upgrading ${e.metadata.name} to level ${e.level}`
                    });
                    this._logService.deleteStaticLog(staticLog.id);
                }
            };

            this._tickService.scheduleEvent(ev);
        }
    }

    public spawnTransientEntity(p: PlanetEntity, type: TransientEntities, instant: boolean) {
        const metadata = <TransientEntityDefinition>TransientEntityMetadata[type];
        if (instant) {
            const entity = new TransientEntity(type, metadata);
            if (type == TransientEntities.EnemyDrone) {
                entity.faction = TransientEntityFaction.Enemy;
            }
            entity.onEnterPlanet = (p: PlanetEntity) => this._gameStateService.checkIfNeedToGeneratePlanet(p);
            entity.state = TransientEntityState.Orbiting;
            entity.orbitingPlanet = p;
            this._gameStateService.state.transientEntities.push(entity);

        } else {
            if (this._gameStateService.state.resourceCount - metadata.cost < 0)
                return;

            this._gameStateService.state.resourceCount -= metadata.cost;

            const staticLog = <Log>{
                text: `Building ${metadata.name}: 0%`
            };
            this._logService.addStaticLog(staticLog);

            const ev: ScheduledEvent = <ScheduledEvent>{
                n: metadata.buildTime,
                onTick: () => {
                    const percentage = (this._tickService.ticks - ev.tickScheduledAt) / ev.n;
                    staticLog.text = `Building ${metadata.name}: ${Math.floor(percentage * 100)}%`
                },
                onCompletion: () => {
                    this._logService.deleteStaticLog(staticLog.id);
                    const entity = new TransientEntity(type, metadata);
                    entity.onEnterPlanet = (p: PlanetEntity) => this._gameStateService.checkIfNeedToGeneratePlanet(p);
                    entity.state = TransientEntityState.Orbiting;
                    entity.orbitingPlanet = p;
                    this._gameStateService.state.transientEntities.push(entity);
                }
            };

            this._tickService.scheduleEvent(ev);
        }
    }
}