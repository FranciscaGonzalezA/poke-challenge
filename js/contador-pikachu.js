async function obtenerLocalizacionesPikachu() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json();
    const locationResponse = await fetch(data.location_area_encounters);
    const locationsData = await locationResponse.json();
    const locations = locationsData.map(location => location.location_area.name);

    return locations;
  } catch (error) {
    console.log('Ocurrió un error al obtener los datos de la API:', error);
    return [];
  }
}
