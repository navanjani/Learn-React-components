const PokemonCard = (props) => {
  return (
    <div className="pokemon-card">
      <h3> {props.title} </h3>
      <img className="poke-img" alt="poke" src={props.img}></img>
      <p> {props.description} </p>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "Yes" : "No"}</p>
      <p>Terrifying: {props.terrifying ? "Yes" : "Nope, not really"}</p>
      {/* <p>What about null? {null}</p>
      <p>And undefined? {undefined}</p>
      <p>Types: {{ fire: true, water: false }}</p>  */}
      <p>Abilities: {props.abilities}</p>
      <button> Favourite </button>
    </div>
  );
};

export default PokemonCard;
