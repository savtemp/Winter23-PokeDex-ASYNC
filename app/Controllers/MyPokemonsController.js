import { appState } from "../AppState.js";
import { myPokemonsService } from "../Services/MyPokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


export class MyPokemonsController{

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

  async catchPokemon(){
    try {
      await myPokemonsService.catchPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }

  async getMyPokemon(){
    try {
      await myPokemonsService.getMyPokemon()
    } catch (error) {
      Pop.error(error)
    }
  }

}