import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { sandboxAPI } from "./AxiosService.js"


class MyPokemonsService{
  async getMyPokemon() {
    // NOTE make sure to double check your endpoints! This will be important for the checkpoint! 
    const res = await sandboxAPI.get('savannah/pokemon')
    console.log('[GETTING MY POKEMON]', res.data);
    // I already have the model I used for the PokeAPI ready so Im going to use it to map my sandboxAPI data as well
    appState.myPokemon = res.data.map(p => new Pokemon(p))
    console.log('these are my pokemon', appState.myPokemon);
  }

  // NOTE this function is 'creating' or 'posting' a Pokemon TO or INTO your sandbox!
  async catchPokemon() {
    const res = await sandboxAPI.post('savannah/pokemon', appState.activePokemon)
    console.log('[CATCHING A POKEMON]', res.data);
    // target the space in the appState that you are storing data, open up that array, and add your new Pokemon that you just saved to that array
    appState.myPokemon = [...appState.myPokemon, new Pokemon(res.data)]
    console.log('catching a pokemon to my pokemon', appState.myPokemon);
  }

}


export const myPokemonsService = new MyPokemonsService()