
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido

obtenerPokemon("dragonite").then(function(response) {
    console.log(response.name + "\n");

    response.abilities.forEach(element => {
        console.log(element.ability.name)
    });;
    
}).catch(function(err) {
    console.log("Fetch error: "+ err.message);
})