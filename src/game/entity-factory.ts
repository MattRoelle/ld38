import { inject } from "aurelia-framework";
import { GameStateService } from "./game-state.service";
import { PlanetEntity } from "./planet-entity";
import { TickService, ScheduledEvent } from "./tick.service";
import { TransientEntity, TransientEntities, TransientEntityDefinition, TransientEntityMetadata, TransientEntityState } from "./transient-entity";
import { Factions } from "./factions";
import { StaticEntities, StaticEntity, StaticEntityMetadata, StaticEntityDefinition } from "./static-entity";
import { BindingSignaler } from "aurelia-templating-resources";
import { LogService, Log } from "./log.service";
import { Rng } from "./rng";
import { EventService, EventTypes } from "./event.service";
import * as _ from "lodash";

@inject(GameStateService, BindingSignaler, TickService, LogService, EventService)
export class EntityFactory {
    constructor(private _gameStateService: GameStateService, private _signaler: BindingSignaler, private _tickService: TickService, private _logService: LogService, private _eventService: EventService) {
        this._eventService.registerHandler(EventTypes.EnemyPlanetCreated, ev => {
            let nEnemiesToSpawn = 3;

            if (this._gameStateService.state.planets.length > 4) {
                nEnemiesToSpawn += 2;
            }

            if (this._gameStateService.state.planets.length > 5) {
                nEnemiesToSpawn += 2;
            }

            if (this._gameStateService.state.planets.length > 8) {
                nEnemiesToSpawn += 3;
            }

            if (this._gameStateService.state.planets.length > 10) {
                nEnemiesToSpawn += 4;
            }

            if (this._gameStateService.state.planets.length > 12) {
                nEnemiesToSpawn += 9;
                nEnemiesToSpawn += Math.floor(Rng.rnd(-1, 4));
            }

            nEnemiesToSpawn += Math.floor(Rng.rnd(-2, 2));

            for(let i = 0; i < nEnemiesToSpawn; i++) {
                this.spawnTransientEntity(ev.planet, TransientEntities.EnemyDrone, true);
            }
        });

        this._eventService.registerHandler(EventTypes.SpawnEnemyUnit, d => {
            for(let i = 0; i < d.unitsToAdd; i++) {
                this.spawnTransientEntity(d.planet, TransientEntities.EnemyDrone, true);
            }
        });

        this._eventService.registerHandler(EventTypes.CheatSpawnDrone, () => {
            const p = _.find(this._gameStateService.state.planets, p => p.settled);
            this.spawnTransientEntity(p, TransientEntities.Drone, true);
        });

        this._eventService.registerHandler(EventTypes.CheatSpawnEnemyDrone, () => {
            const p = _.find(this._gameStateService.state.planets, p => p.settled);
            const e =this.spawnTransientEntity(p, TransientEntities.EnemyDrone, true);
            e.state = TransientEntityState.Attacking;
            e.desiredDistanceFromOrbitingPlanet = e.distanceFromOrbitingPlanetWhileAttacking;
        });
    }

    public spawnStaticEntity(p: PlanetEntity, type: StaticEntities) {
        const metadata = <StaticEntityDefinition>StaticEntityMetadata[type];

        if (p.staticEntities.length >= 5)
            return;

        if (this._gameStateService.state.resourceCount < metadata.cost)
            return;

        const entity = new StaticEntity(type, this._eventService);
        entity.health = metadata.health;
        entity.planetId = p.id;
        entity.planetX = p.x;
        entity.planetY = p.y;
        entity.planetRadius = p.radius;

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
                    text: `Finshed building ${metadata.name}`
                });
                const posStep = (2 * Math.PI) / (p.staticEntities.length);

                for (let i = 0; i < p.staticEntities.length; i++) {
                    const e = p.staticEntities[i];
                    e.positionOnOrbit = posStep * (i + 1);
                    e.x = Math.round((Math.cos(e.positionOnOrbit) * 155) - (p.radius/2));
                    e.y = Math.round((Math.sin(e.positionOnOrbit) * 155) - (p.radius/2));
                }
            }
        };

        this._tickService.scheduleEvent(ev);
    }

    public upgradeStaticEntity(e: StaticEntity) {
        if (e.upgrading)
            return;

        if (e.level < e.definition.maxUpgradeLevel) {
            const staticLog = <Log>{
                text: `Upgrading ${e.definition.name} to level ${e.level + 1}: 0%`
            };
            this._logService.addStaticLog(staticLog);

            this._logService.addTempLog(<Log>{
                text: `Upgrading ${e.definition.name} to level ${e.level + 1}`
            });

            e.upgrading = true;

            const ev: ScheduledEvent = <ScheduledEvent>{
                n: e.definition.upgradeTime,
                onTick: () => {
                    const percentage = (this._tickService.ticks - ev.tickScheduledAt) / ev.n;
                    staticLog.text = `Upgrading ${e.definition.name} to ${e.level + 1}: ${Math.floor(percentage * 100)}%`
                },
                onCompletion: () => {
                    ++e.level;
                    e.upgrading = false;
                    this._logService.addTempLog(<Log>{
                        text: `Finshed upgrading ${e.definition.name} to level ${e.level}`
                    });
                    this._logService.deleteStaticLog(staticLog.id);
                    this._logService.addTempLog(<Log>{
                        text: `Finished ${e.definition.name} to level ${e.level + 1}`
                    });
                }
            };

            this._tickService.scheduleEvent(ev);
        }
    }

    public spawnTransientEntity(p: PlanetEntity, type: TransientEntities, instant: boolean) {
        const metadata = <TransientEntityDefinition>TransientEntityMetadata[type];
        if (instant) {
            const entity = new TransientEntity(type, this._eventService);
            entity.faction = metadata.faction; 
            if (entity.faction == Factions.Player) {
                entity.onEnterPlanet = (p: PlanetEntity) => this._gameStateService.checkIfNeedToGeneratePlanet(p);
            }
            entity.state = TransientEntityState.Orbiting;
            entity.orbitingPlanet = p;
            entity.x = p.x;
            entity.y = p.y;
            this._gameStateService.state.transientEntities.push(entity);
            this._signaler.signal("UpdateShipsForMovement");
            return entity;

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
                    const entity = new TransientEntity(type, this._eventService);
                    entity.faction = metadata.faction; 
                    if (entity.faction == Factions.Player) {
                        entity.onEnterPlanet = (p: PlanetEntity) => this._gameStateService.checkIfNeedToGeneratePlanet(p);
                    }
                    entity.state = TransientEntityState.Orbiting;
                    entity.orbitingPlanet = p;
                    entity.x = p.x;
                    entity.y = p.y;
                    this._gameStateService.state.transientEntities.push(entity);
                    this._signaler.signal("UpdateShipsForMovement");
                }
            };

            this._tickService.scheduleEvent(ev);
        }
    }
}