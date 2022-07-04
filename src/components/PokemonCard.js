import "./Pokemon.scss";

const PokemonCard = (props) => {
  const { name, image, weight, awesome, terrifying, abilities } = props;

  return (
    <div className=" Pokemon pokemon-card shadow-lg mb-4">
      <div className="card-body pb-0">
        <h3 className="card-title"> {name} </h3>
        <img className="poke-img" alt="poke" src={image} />
        <h4 className="card-subtitle mb-3 text-primary ">
          Awesome: {awesome ? "Yes" : "No"}
        </h4>
        <p className="mb-0">
          Weight: {weight} kg
          <br />
          Terrifying: {terrifying ? "Yes" : "Nope, not really"}
          <br />
          {abilities.length} abilities
        </p>
      </div>

      <ul className="list-group list-group-flush">
        {abilities.map((ability, index) => (
          <li key={index} className="list-group-item">
            {ability}
          </li>
        ))}
      </ul>
      <button> Favourite </button>
    </div>
  );
};

export default PokemonCard;
