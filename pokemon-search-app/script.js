const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const hiddenElement = document.querySelectorAll(".hidden");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const sprite = document.getElementById("sprite");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

async function displayPokemon(){

  try {
    const pokemon = document.getElementById("search-input").value.toLowerCase();
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
    
    if (!response.ok) alert("Pokémon not found")

    const data = await response.json();
    const stats = {
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      special_attack: data.stats[3].base_stat,
      special_defense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    };

    pokemonName.innerText = `${toTitleCase(data.name)}`;
    pokemonId.innerText = `#${data.id}`;
    weight.innerText = `Weight: ${data.weight}`;
    height.innerText = `Height: ${data.height}`;
    sprite.src = data.sprites.front_default;
    
    types.innerHTML = ""; // Clear previous types

    data.types.forEach(typeInfo => {
      const typeElement = document.createElement("p"); // Create a new <p> for each type
      typeElement.textContent = typeInfo.type.name.toUpperCase(); // Convert to uppercase
      types.appendChild(typeElement);
    });

    hp.innerText = data.stats[0].base_stat;
    attack.innerText = data.stats[1].base_stat;
    defense.innerText = data.stats[2].base_stat;
    specialAttack.innerText = data.stats[3].base_stat;
    specialDefense.innerText = data.stats[4].base_stat;
    speed.innerText = data.stats[5].base_stat;
    
    console.log(data);

    updateStatsBar(stats);

  } catch(err) {
    console.error(err)
  }
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  hiddenElement.forEach(el => el.classList.remove("hidden"));
  displayPokemon();
  if (searchInput.value.toLowerCase() === "") {
    alert("Value cannot be zero");
    return;
  }
})

function updateStatsBar(stats) {
  const maxStat = 255; // Highest base stat in Pokémon
  
  const statClassMap = {
    hp: "hp-bar",
    attack: "attack-bar",
    defense: "defense-bar",
    special_attack: "special-attack-bar",
    special_defense: "special-defense-bar",
    speed: "speed-bar",
  };

  Object.keys(stats).forEach(stat => {
    const statBar = document.querySelector(`.${statClassMap[stat]}`);

    if (!statBar) {
      console.warn(`Stat bar for ${stat} not found!`);
      return;
    }

    const statPercentage = (stats[stat] / maxStat) * 100; // Convert to % of max

    statBar.style.width = `${statPercentage}%`; // Keep within 100% max
    statBar.classList.remove("high", "medium", "low");

    if (statPercentage > 60) {
      statBar.classList.add("high"); // Green
    } else if (statPercentage > 30) {
      statBar.classList.add("medium"); // Yellow
    } else {
      statBar.classList.add("low"); // Red
    }
  });
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}