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

async function mostrarLocalizacionesPikachu() {
  const localizaciones = await obtenerLocalizacionesPikachu();

  const localizacionesTable = document.getElementById('localizaciones-table');

  if (localizaciones.length > 0) {
    const tableBody = document.createElement('tbody');
    localizaciones.forEach((localizacion, index) => {
      const row = tableBody.insertRow(index);
      const numberCell = row.insertCell(0);
      const locationCell = row.insertCell(1);
      numberCell.textContent = index + 1;
      locationCell.textContent = localizacion;
    });
    localizacionesTable.appendChild(tableBody);
  } else {
    localizacionesTable.textContent = 'No se encontraron localizaciones de Pikachu.';
  }
}

mostrarLocalizacionesPikachu();
