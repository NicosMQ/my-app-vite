import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",
      imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  ];
  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar pokemonIndex = {pokemonIndex} pokemonList= {pokemonList} setpokemonIndex={setpokemonIndex}/>

    </>
  );
}

export default App;
