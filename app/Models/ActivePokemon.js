export class ActivePokemon{
  constructor(data){
    this.name = data.name
    this.img = data.sprites.front_default
    this.abilities = data.abilities
  }


  get ActivePokemonTemplate(){
    return `
    <div>
      <img class="img-fluid" src="${this.img}" alt="">
      <p>${this.name}</p>
      <p>${this.FormatAbilities}</p>
      <button class="btn btn-success" onclick="app.pokemonsController.catchPokemon('${this.name}')">Catch Pokemon</button>
    </div>
    `
  }

  get FormatAbilities(){
    let template = ''
    this.abilities.forEach(a => template += `
    <p>${a.ability.name}</p>
    `)
    return template
  }
}