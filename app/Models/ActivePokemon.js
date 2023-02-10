export class ActivePokemon{

  // NOTE I needed to create a new template for the Active Pokemon because I cannot access the 'deeper' properties on each property with the old model. If you try to do it on the Pokemon.js model it will cause an error because javascript thinks that deeper property does not exist 
  constructor(data){
    this.name = data.name
    this.img = data.sprites.front_default
    this.abilities = data.abilities
  }


  get ActivePokemonTemplate(){
    return `
    <div class="text-center">
      <img class="img-fluid" src="${this.img}" alt="">
      <p><b>${this.name}</b></p>
      <p>Abilities: ${this.FormatAbilities}</p>
      <button class="btn btn-success" onclick="app.myPokemonsController.catchPokemon('${this.name}')">Catch Pokemon</button>
    </div>
    `
  }


  // NOTE I used another getter to format the array that I was getting back from my abilities array 
  get FormatAbilities(){
    let template = ''
    this.abilities.forEach(a => template += `
    <p>${a.ability.name}</p>
    `)
    return template
  }

  // NOTE if you want to use a static because it has a limited amount of properties and you wouldn't to just create a whole class and model for one thing 
  // static PokemonListTemplate(data){
  //   return `
  //   <div>
  //     <button class="btn btn-primary w-75 m-2" onclick="app.pokemonsController.setActivePokemon('${data.url}')">${data.name}</button>
  //   </div>
  //   `
  // }
}