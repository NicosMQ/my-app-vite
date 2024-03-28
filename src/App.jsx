import PokemonCard from "./components/PokemonCard";




function App() {
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",
      imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png"
    },
  ];
  return (
    <>
      <PokemonCard pokemon={pokemonList[1]} />
    </>
  );
}

export default App;
