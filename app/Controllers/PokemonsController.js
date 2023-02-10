import { appState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

export class PokemonsController{

  _drawPokemonList(){
    let pokemons = appState.pokemons
    let template = ''
    pokemons.forEach(p => template += p.PokemonListTemplate)
    setHTML('pokemons', template)
  }

  _drawActivePokemon(){
    setHTML('activePokemon', appState.activePokemon.ActivePokemonTemplate)
  }

  constructor(){
    // console.log('hello from the Pokemons Controller!');
    appState.on('pokemons', this._drawPokemonList)
    this.getAllPokemons()
    appState.on('activePokemon', this._drawActivePokemon)
  }

  async getAllPokemons(){
    try {
      await pokemonsService.getAllPokemons()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  // NOTE I chose to use the URL on my object to access more data about that object, you can also use the name, or any other 'unique' identifier 
  async setActivePokemon(url){
    // console.log('click the button to select a pokemon');
    try {
      await pokemonsService.setActivePokemon(url)
    } catch (error) {
      Pop.error(error.message)
    }
  }
}