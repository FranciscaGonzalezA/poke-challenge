# POKE-CHALLENGE

## Como visualizar la página

Para ver la página existen 2 opciones:

- Clonar el repositorio
- Verlo desde Github con Github Pages. En la barra derecha que se ve en el repositorio localizar **Enviroments** y luego presionar *github-pages*.

La página consta de una página de inicio, con 4 botones: 

1. **Contador de Pokémon que incluyen la letra "c" en su nombre**
2. **Contador de locaciones en la cuales es posible encontrar a Pikachu**
3. **Display de Pokémon, con filtro por tipo**
4. **Display de Pokémon, con filtro por HM**

### Contador de Pokémon que incluyen la letra "c" en su nombre

Esta página muestra un conteo de los pokémon que tienen una letra "c" en su nombre, por medio de la función: 

```js
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
```

### Contador de locaciones en la cuales es posible encontrar a Pikachu

Esta página muestra una lista de las localizaciones donde es posible encontrar a pikachu, tiene como funciones principales:

```js
async function obtenerLocalizacionesPikachu();
async function mostrarLocalizacionesPikachu();
```

Donde *obtenerLocalizacionesPikachu()* rescata los datos de la API, y *mostrarLocalizacionesPikachu();* los lleva al archivo html. Las funciones son llamadas dentro del archivo JavaScript.

### Display de Pokémon, con filtro por tipo

Esta página muestra los diferentes tipos de Pokémon, al seleccionar uno se desplegará una lista de aquellos pokémon que sean  de dicho tipo.

Para desplegar la lista solo se debe presionar cualquiera de los botones, de acuerdo al tipo que se busque.

El archivo JS es similar ya que también tiene dos funciones principales, que también se ocupan dentro del mismo archivo

### Display de Pokémon, con filtro por HM

Esta página nos muestra una lista de chekbox, de la cual se puede seleccionar entre una y todas las opciones disponibles para realizar el filtro. 

Para desplegar la respuesta solo es necesario chequear las casillas deseadas y posteriormente el botón de filtrado.

Estas funciones no han sido optimizadas por lo que requieren un mayor tiempo de espera para ver los resultados deseados.

Al igual que la página anterior existen dos funciones principales, pero en este caso también hay una secundaria. Las primera principal hace el llamado a la API, y la segunda el filtrado (en conjunto con el uso de la primero y la función secundaria). La función secundaria, es la que revisa cuales checkbox están marcados al momento de presionar el botón

Dato curioso: el resultado al marcar todas las casillas es de solo 2 pokémon.