import { Pokemon } from "./Models/Pokemon.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  /** @type {import('./Models/Pokemon').Pokemon[]} */
  // NOTE this will hold the pokemon coming back from the pokeAPI
  pokemons = []

  // NOTE I set my activePokemon to an empty object, but you can also set this to be null
  activePokemon = {}

  // NOTE this will hold my sandboxAPI pokemon
  myPokemon = []
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
