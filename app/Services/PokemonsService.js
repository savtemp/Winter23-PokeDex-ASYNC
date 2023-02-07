import { appState } from "../AppState.js";
import { ActivePokemon } from "../Models/ActivePokemon.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeAPI, sandboxAPI } from "./AxiosService.js"


class PokemonsService{
  async getAllPokemons() {
    const res = await pokeAPI.get('/api/v2/pokemon/')
    console.log('[POKEMON LIST]', res.data);
    appState.pokemons = res.data.results.map(p => new Pokemon(p))
  }

  async setActivePokemon(url) {
  const res = await pokeAPI.get(url)
  console.log('[SETTING ACTIVE POKEMON]', res.data);
  appState.activePokemon = new ActivePokemon(res.data)
  }

  async catchPokemon(name) {
    // const res = await sandboxAPI.post()
    console.log('[CATCHING POKEMON]', name);
  }

}


export const pokemonsService = new PokemonsService()