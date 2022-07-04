import Title from "./components/Title";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

const allPokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    img: "https://archives.bulbagarden.net/media/upload/thumb/2/2a/Pokk%C3%A9n_Charizard.png/250px-Pokk%C3%A9n_Charizard.png",
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    img: "https://i.pinimg.com/originals/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg",
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    img: "https://i.pinimg.com/550x/b7/e8/c7/b7e8c7eb7184d54701c56989f7ab1c78.jpg",
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-omega-ruby-and-alpha-sapphire/8/8d/Mega_beedrill.jpg",
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];
function App() {
  return (
    <div className="App">
      <main className="container">
        <Title text="Hello Pokemons" />
        <div className="row">
          {allPokemon.map((pokemon, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <PokemonCard
                name={pokemon.name}
                image={pokemon.img}
                weight={pokemon.weight}
                awesome={pokemon.awesome}
                terrifying={pokemon.terrifying}
                abilities={pokemon.abilities}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
