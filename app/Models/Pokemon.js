export class Pokemon{
  constructor(data){ 
    this.name = data.name
    this.url = data.url 
  }


  // NOTE I made all my templates in the index.html first so that I could just copy and paste them
  get PokemonListTemplate(){
    return `
    <div>
      <button class="btn btn-primary w-75 m-2" onclick="app.pokemonsController.setActivePokemon('${this.url}')">${this.name}</button>
    </div>
    `
  }
}