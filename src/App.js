import Title from "./components/Title";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Title text="New Pokemon" />

        <PokemonCard
          title=" Charizard "
          img="https://archives.bulbagarden.net/media/upload/thumb/3/36/132Ditto.png/500px-132Ditto.png"
          description="Hello im Ditto"
          weight={90}
          awesome={true}
          terrifying={false}
          abilities={["Solar power", "Tough claws", "Drought"]}
        />
        <PokemonCard
          title="Bulbasaur"
          img="https://www.kindpng.com/picc/m/279-2795097_image-result-for-pokemon-anime-original-series-pokemon.png"
          description="Hello I'm Pikachu"
          weight={6.9}
          awesome={true}
          terrifying={false}
          abilities={["Overgrow", "Chlorophyll"]}
        />
        <PokemonCard
          title="Mewtwo"
          img="https://www.kindpng.com/picc/m/279-2795097_image-result-for-pokemon-anime-original-series-pokemon.png"
          description="Hello I'm Pikachu"
          weight={122}
          awesome={true}
          terrifying={true}
          abilities={["Overgrow", "Chlorophyll"]}
        />
        <PokemonCard
          title="Mega beedrill"
          img="https://www.kindpng.com/picc/m/279-2795097_image-result-for-pokemon-anime-original-series-pokemon.png"
          description="Hello I'm Pikachu"
          weight={65}
          awesome={false}
          terrifying={true}
          abilities={["Intimidate", "Unnerve"]}
        />
      </main>
    </div>
  );
}

export default App;
