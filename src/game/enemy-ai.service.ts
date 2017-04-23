import { inject } from "aurelia-framework";
import { EventService, EventTypes } from "./event.service";
import { GameStateService } from "./game-state.service";
import { TransientEntity, TransientEntities, TransientEntityState } from "./transient-entity";
import { Factions } from "./factions";
import { Rng } from "./rng";
import { Utils } from "./utils";
import * as _ from "lodash";

@inject(EventService, GameStateService)
export class EnemyAiService {
    constructor(private _eventService: EventService, private _gameStateService: GameStateService) { }

    private lastAttackAt: number = 120;
    private lastTimeGettingUnits: any = {};

    private get units() : TransientEntity[] {
        return _.filter(this._gameStateService.state.transientEntities, e => e.faction == Factions.Enemy);
    }

    public update(tick: number) {
        const units = this.units;

        if (units.length == 0)
            return;

        const planets = _.filter(this._gameStateService.state.planets, p => _.some(units, u => u.orbitingPlanet.id == p.id && u.state == TransientEntityState.Orbiting));

        if (planets.length == 0)
            return;

        if (tick - this.lastAttackAt > 40) {
            if (Rng.rnd(0, 100) < 20) {
                this.lastAttackAt =  tick;
                const planet = planets[Math.floor(Rng.rnd(0, planets.length))];
                const planetToAttack = _.filter(
                                            _.orderBy(this._gameStateService.state.planets, p => Utils.dist(planet.x, planet.y, p.x, p.y)),
                                            p => !_.some(this._gameStateService.state.transientEntities, e =>
                                                               e.orbitingPlanet.id == p.id
                                                            && e.state != TransientEntityState.Moving
                                                            && e.state != TransientEntityState.Attacking
                                                            && e.faction == Factions.Enemy))[0];

                const unitsAtPlanet = _.filter(units, u => u.orbitingPlanet.id == planet.id);
                const unitsToSend = Math.max(1, Math.floor(Rng.rnd(0, unitsAtPlanet.length)));

                for(let i = 0; i < unitsToSend; i++) {
                    const u = unitsAtPlanet[i];
                    u.state = TransientEntityState.Moving;
                    u.orbitingPlanet = planetToAttack;
                }
            }
        }

        for(let p of planets) {
            !this.lastTimeGettingUnits[p.id] && (this.lastTimeGettingUnits[p.id] = tick + 40);

            if (tick - this.lastTimeGettingUnits[p.id] > 60) {
                if (Rng.rnd(0, 100) < 8) {
                    this.lastTimeGettingUnits[p.id] = tick;
                    let unitsToAdd = 1;

                    if (this._gameStateService.state.planets.length > 6) {
                        unitsToAdd += 1;
                    }

                    if (this._gameStateService.state.planets.length > 11) {
                        unitsToAdd += 2;
                    }

                    unitsToAdd += Rng.rnd(0, 3);

                    for(let i = 0; i < unitsToAdd; i++) {
                        this._eventService.postEvent(EventTypes.SpawnEnemyUnit, {
                            planet: p,
                            unitsToAdd
                        });
                    }
                }
            }
        }
    }
}