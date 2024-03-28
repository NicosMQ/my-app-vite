import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  

  return !pokemon.imgSrc ? (
    <>
      {" "}
      <p> ??? </p>{" "}
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>{" "}
    </>
  ) : (
    <>
      {" "}
      <img src={pokemon.imgSrc} />{" "}
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>{" "}
    </>
  );
}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

// pokemon ()
// console.log(pokemon.name);
// console.log(pokemon.imgSrc);

// Solution condition if
// if (!pokemon.imgSrc) {
//   return (
//     <>
//       <p>???</p>
//       <figcaption>{pokemon.name}</figcaption>
//     </>
//   );
// } else {
//   return (
//     <figure>
//       <img src={pokemon.imgSrc} />
//       <figcaption>{pokemon.name}</figcaption>
//     </figure>
//   )};

// A faire pour la quête condition ternaire

export default PokemonCard;
