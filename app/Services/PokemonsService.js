import { appState } from "../AppState.js";
import { ActivePokemon } from "../Models/ActivePokemon.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeAPI, sandboxAPI } from "./AxiosService.js"


class PokemonsService{

  // NOTE double check your endpoints!! 
  async getAllPokemons() {
    console.log('this is the get function in my service')
    const res = await pokeAPI.get('/api/v2/pokemon/')
    console.log('[POKEMON LIST]', res.data);
    // NOTE I am getting my response (res.data), to get my pokemon name and URL I need to go one level deeper into the results, then I am mapping the data I am getting to the model I created 
    appState.pokemons = res.data.results.map(p => new Pokemon(p))
  }


  async setActivePokemon(url) {
    // NOTE I am using the URL here on my .get because it is appending itself to the end of the pokeapi.co, the URL is unique to that pokemon, but you can also use the name 
  const res = await pokeAPI.get(url)
  console.log('[SETTING ACTIVE POKEMON]', res.data);
  // I have a template for an Active Pokemon so I am setting my res.data to be equal to a new ActivePokemon
  appState.activePokemon = new ActivePokemon(res.data)
  }
}


export const pokemonsService = new PokemonsService()