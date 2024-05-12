import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  

  return !pokemon.imgSrc ? (
        <>
          <p> ??? </p>
          <figcaption>
            <h1>{pokemon.name}</h1>
          </figcaption>
        </>
  ) : (
    
        <>
          {" "}
          <img src={pokemon.imgSrc} />
          <figcaption>
            <h1>{pokemon.name}</h1>
          </figcaption>
        </>
  );
}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;


