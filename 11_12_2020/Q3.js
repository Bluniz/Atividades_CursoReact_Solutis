const fetch = require("node-fetch");

function pesquisarPokemon(name) {
  let pokemon = " ";

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json())
    .then((data) => {
      pokemon = data;
    })
    .catch((err) => {
      console.log(error);
    });

  return pokemon;
}

let test = pesquisarPokemon("ditto");

console.log(test);
