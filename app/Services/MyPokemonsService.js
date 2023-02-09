import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { sandboxAPI } from "./AxiosService.js"


class MyPokemonsService{
  async getMyPokemon() {
    const res = await sandboxAPI.get('savannah/pokemon')
    console.log('[GETTING MY POKEMON]', res.data);
    appState.myPokemon = res.data.map(p => new Pokemon(p))
    console.log('these are my pokemon', appState.myPokemon);
  }
  async catchPokemon() {
    const res = await sandboxAPI.post('savannah/pokemon', appState.activePokemon)
    console.log('[CATCHING A POKEMON]', res.data);
    appState.myPokemon = [...appState.myPokemon, new Pokemon(res.data)]
    console.log('catching a pokemon to my pokemon', appState.myPokemon);
  }

}


export const myPokemonsService = new MyPokemonsService()