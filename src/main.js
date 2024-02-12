import "../style.css";

let pokemon = "";
let equipo = {}; // {1: 1, 2: 4, 3: 7}

// Función asíncrona para obtener datos de Pokémon por número de Pokédex usando la PokeAPI
async function iniciarPokemon(num) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    pokemon = data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw new Error("Failed to fetch Pokemon data");
  }
}

// Función basada en promesas para obtener datos de Pokémon
function iniciarPokemonPromesas(num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((response) => response.json())
    .then((json) => (pokemon = json))
    .catch((error) => {
      console.error("Error fetching Pokemon data:", error);
      throw new Error("Failed to fetch Pokemon data");
    });
}

// Bucle que recorre los 6 grupos de botones
for (let i = 1; i <= 6; i++) {
  const boton = document.querySelector(`#pokemonRandom${i}`);

  // Evento click para obtener un Pokémon aleatorio
  boton.addEventListener("click", async () => {
    try {
      let num = Math.floor(Math.random() * 151) + 1;

      // Evita la repetición del mismo Pokémon en el equipo
      while (Object.values(equipo).includes(num)) {
        num = Math.floor(Math.random() * 151) + 1;
      }

      equipo[i] = num;
      await iniciarPokemon(num);

      // Muestra el nombre y la imagen del Pokémon
      document.querySelector(`#pokemon${i}`).innerHTML = `
                <h1>${pokemon.name}</h1>
                <img src="${pokemon.sprites.front_default}" class="imgPokemon" alt="${pokemon.name}" />  
            `;
    } catch (error) {
      console.error("Error processing Pokemon:", error);
    }
  });

  // Evento click para limpiar la sección y eliminar el Pokémon seleccionado
  document.querySelector(`#limpiar${i}`).addEventListener("click", () => {
    document.querySelector(`#pokemon${i}`).innerHTML = "";
    equipo[i] = undefined;
  });
}
