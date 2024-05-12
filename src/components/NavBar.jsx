function NavBar ({pokemonIndex, pokemonList, setpokemonIndex}) {
    const handleClick = (index) => {
        setpokemonIndex(index);
      };

      pokemonIndex === 4 ? alert("Pika, pikaaa !!!") : null; 

    return (
       <div>
        {pokemonList.map((poke, index)=>(     
        <button key={poke.name} onClick={() => handleClick(index)} >{poke.name}</button>
        ))}
       </div> 
    )
}

export default NavBar;