import { appState } from "../AppState.js";
import { myPokemonsService } from "../Services/MyPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

// NOTE MyPokemonsController and MyPokemonsService are used for making calls to the sandBoxAPI 
export class MyPokemonsController{

  // NOTE I'm going to use the same PokemonListTemplate as before because I didn't want to create a new model, you could create a new model here is you wanted in order to get the specific sandBoxAPI properties for pokemon
  _drawMyPokemon(){
    let myPokemon = appState.myPokemon
    let template = ''
    myPokemon.forEach(p => template += p.PokemonListTemplate)
    setHTML('myPokemon', template)
  }

  constructor(){
    appState.on('myPokemon', this._drawMyPokemon)
    this.getMyPokemon()
  }

  // NOTE This function will 'catch' or 'post' a Pokemon into your sandBoxAPI
  async catchPokemon(){
    try {
      await myPokemonsService.catchPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }

  // NOTE this function is getting all the Pokemon that are in your sandBoxAPI
  async getMyPokemon(){
    try {
      await myPokemonsService.getMyPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }

}