import { MyPokemonsController } from "./Controllers/MyPokemonsController.js";
import { PokemonsController } from "./Controllers/PokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokemonsController = new PokemonsController()

  myPokemonsController = new MyPokemonsController()
}

window["app"] = new App();
