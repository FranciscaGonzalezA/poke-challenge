window.addEventListener('DOMContentLoaded', contarPokemonConC);

async function contarPokemonConC() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const data = await response.json();
    const pokemonList = data.results.map(pokemon => pokemon.name);
    const pokemonCount = pokemonList.filter(pokemon => pokemon.toLowerCase().includes('c')).length;

    document.getElementById('contador').textContent = `Cantidad de Pokémon con letra "c": ${pokemonCount}`;
  } catch (error) {
    console.log('Ocurrió un error al obtener los datos de la API:', error);
  }
}