const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[0];
  return (
    
    (!pokemon.imgSrc)
    ? <> <p> ??? </p> <figcaption>{pokemon.name}</figcaption> </>
    : <> <img src={pokemon.imgSrc} /> <figcaption>{pokemon.name}</figcaption> </>


)}
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
