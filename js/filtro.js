const tipoButtons = document.querySelectorAll('.tipoBtn');
tipoButtons.forEach(button => button.addEventListener('click', filtrarPokemonPorTipo));

async function filtrarPokemonPorTipo(event) {
  try {
    const tipo = event.target.dataset.tipo;

    const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
    const data = await response.json();
    const pokemonList = data.pokemon;

    const pokemonTableBody = document.getElementById('pokemonBody');
    pokemonTableBody.innerHTML = '';

    for (const pokemon of pokemonList) {
      try {
        const pokemonData = await obtenerPokemonData(pokemon.pokemon.url);
        if (pokemonData.id > 1010) continue;

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${pokemonData.id}</td>
          <td>${pokemonData.name}</td>
          <td>${pokemonData.types[0].type.name}</td>
          <td>${pokemonData.types[1] ? pokemonData.types[1].type.name : '-'}</td>
          <td>${pokemonData.height}</td>
          <td>${pokemonData.weight}</td>
        `;

        pokemonTableBody.appendChild(row);
      } catch (error) {
        console.error('Error al obtener los datos del Pokémon:', error);
      }
    }
  } catch (error) {
    console.error('Error al filtrar Pokémon por tipo:', error);
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
