import { MyPokemonsController } from "./Controllers/MyPokemonsController.js";
import { PokemonsController } from "./Controllers/PokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  // NOTE make sure to add all the controllers that you want to interact with the DOM 
  pokemonsController = new PokemonsController()

  myPokemonsController = new MyPokemonsController()
}

window["app"] = new App();
