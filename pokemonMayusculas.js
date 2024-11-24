let pokemon = [
  'Pikachu',
  'Charmander',
  'Bulbasaur',
  'Squirtle'
];

let pokemonMayusculas =  pokemon.map(function(p) {
  return p.toUpperCase();
});

console.log(pokemonMayusculas);

// ¿Qué hace esta línea?

// let pokemonEnMayusculas =: Aquí estamos creando otra caja llamada pokemonEnMayusculas, donde vamos a guardar los resultados.
// pokemon.map(): Con .map() estamos diciendo: "Recorre cada elemento de la lista pokemon".
// function(p): p es como un apodo temporal para cada Pokémon que encuentras en la lista. Primero será 'Pikachu', después 'Charmander', y así con todos.
// p.toUpperCase(): Para cada Pokémon (p), usamos el método .toUpperCase() para convertir su nombre a mayúsculas.
// Ejemplo: 'Pikachu' se convierte en 'PIKACHU'.
// return: Después de hacer la conversión, devolvemos el nombre en mayúsculas, y así lo guardamos en la nueva lista pokemonEnMayusculas.