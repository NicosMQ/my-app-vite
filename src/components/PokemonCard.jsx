
function PokemonCard({pokemon}){

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
