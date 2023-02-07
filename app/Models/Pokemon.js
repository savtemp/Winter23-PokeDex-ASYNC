export class Pokemon{
  constructor(data){ 
    this.name = data.name
    this.url = data.url 
  }


  get PokemonListTemplate(){
    return `
    <div>
      <button class="btn btn-primary" onclick="app.pokemonsController.setActivePokemon('${this.url}')">${this.name}</button>
    </div>
    `
  }
}