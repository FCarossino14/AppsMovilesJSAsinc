
const obtenerPokemon = require("./library");

// Codigo funcion callback

function funcionCallback(pokemon){
    console.log(pokemon.name + "\n" )
    pokemon.abilities.forEach(element => {
        console.log(element.ability.name)
    });;
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("entei",funcionCallback);
