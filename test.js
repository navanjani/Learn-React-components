const all_pokemon = [
  { name: "Charizard", weight: 90 },
  { name: "Bulbasaur", weight: 6.9 },
  { name: "Mewtwo", weight: 122 },
  { name: "Mega beedrill", weight: 65 },
];

const pokemon_weights = all_pokemon.map((pokemon) => {
  return console.log(`${pokemon.name} : ${pokemon.weight} kg`);
});
