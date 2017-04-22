import { RouterConfiguration } from "aurelia-router";

export class App {
  message = 'Hello World!';

  configureRouter(config: RouterConfiguration) {
    config.map([
      { route: ["/", "game"], name: "game", moduleId: "game/game" }
    ]);
  }
}
