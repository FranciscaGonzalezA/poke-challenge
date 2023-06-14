document.getElementById('btnFiltrar').addEventListener('click', filtrarPokemon);

function getSelectedHMs() {
  const checkboxes = Array.from(document.querySelectorAll('#hmContainer input[type="checkbox"]:checked'));
  return checkboxes.map(checkbox => checkbox.value);
}

async function filtrarPokemon() {
  try {
    const selectedHMs = getSelectedHMs();

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const data = await response.json();
    const pokemonList = data.results;

    const filteredPokemon = [];

    for (const pokemon of pokemonList) {
      try {
        const pokemonData = await obtenerPokemonData(pokemon.url);
        const moves = pokemonData.moves.map(move => move.move.name);

        if (selectedHMs.every(hm => moves.includes(hm))) {
          filteredPokemon.push(pokemon);
        }
      } catch (error) {
        console.error('Error al obtener los datos del Pokémon:', error);
      }
    }

    const pokemonListElement = document.getElementById('pokemonList');
    pokemonListElement.innerHTML = '';

    filteredPokemon.forEach(pokemon => {
      const listItem = document.createElement('li');
      listItem.textContent = pokemon.name;
      pokemonListElement.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error al filtrar Pokémon:', error);
  }
}

async function obtenerPokemonData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos del Pokémon:', error);
    throw error;
  }
}
