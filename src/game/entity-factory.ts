import { inject } from "aurelia-framework";
import { GameStateService } from "./game-state.service";
import { PlanetEntity } from "./planet-entity";
import { TransientEntity, TransientEntities, TransientEntityDefinition, TransientEntityMetadata, TransientEntityState } from "./transient-entity";
import { StaticEntities, StaticEntity, StaticEntityMetadata, StaticEntityDefinition } from "./static-entity";
import { BindingSignaler } from "aurelia-templating-resources";
import { Rng } from "./rng";

@inject(GameStateService, BindingSignaler)
export class EntityFactory {
    constructor(private _gameStateService: GameStateService, private _signaler: BindingSignaler) {
    }

    public spawnStaticEntity(p: PlanetEntity, type: StaticEntities) {
        const metadata = <StaticEntityDefinition>StaticEntityMetadata[type];

        if (this._gameStateService.state.resourceCount < metadata.cost)
            return;

        const entity = new StaticEntity(type);
        entity.health = metadata.health;

        p.staticEntities.push(entity);
        const posStep = 360 / (p.staticEntities.length );

        for(let i = 0; i < p.staticEntities.length; i++) {
            const e = p.staticEntities[i];
            e.positionOnOrbit = posStep * (i + 1);
        }

        this._gameStateService.state.resourceCount -= metadata.cost;
        this._signaler.signal("constructBuilt");
    }

    public spawnTransientEntity(p: PlanetEntity, type: TransientEntities) {
        const metadata = <TransientEntityDefinition>TransientEntityMetadata[type];
        const entity = new TransientEntity(type);
        entity.state = TransientEntityState.Orbiting;
        entity.orbitingPlanet = p;
        entity.positionOnObirt = Rng.rnd(0, 2 * Math.PI);
        this._gameStateService.state.transientEntities.push(entity);
    }
}