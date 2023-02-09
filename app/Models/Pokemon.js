export class Pokemon{
  constructor(data){ 
    this.name = data.name
    this.url = data.url 
  }


  get PokemonListTemplate(){
    return `
    <div>
      <button class="btn btn-primary w-75 m-2" onclick="app.pokemonsController.setActivePokemon('${this.url}')">${this.name}</button>
    </div>
    `
  }
}