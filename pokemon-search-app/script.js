

async function displayPokemon(){

  try {

    const pokemonName = document.getElementById("search-input").value.toLowerCae();
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`);
    
    const data = await response.json();

  } catch(err) {
    console.error(err)
  }
}

