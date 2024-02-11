import '../style.css'

let pokemon = ""
let equipo = {} // {1: 1, 2: 4, 3: 7}
// Funcion de tipo async, que recibe un numero y te da el pokemon correspondiente segun numero de pokedex usando la pokeapi
async function iniciarPokemon(num){
    pokemon = await(await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)).json()

}
// Funcion de tipo promesa, mas utilizada para funciones cortas, en las cuales con el .then le vas pasando paso a paso lo que hace, ( como es corto usamos funciones tipo arrow)
function iniciarPokemonPromesas(num){
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(response => response.json())
    .then(json => pokemon = json)
}

//bucle que recorre teniendo en cuenta la cantidad de pokemon ( 6 por equipo por eso hay 6 botones) 
//d iferenciandose por el que hace el math random y luego el que limpia .
for(let i = 1; i <= 6; i++){
    const boton = document.querySelector(`#pokemonRandom${i}`)
    boton.addEventListener('click', async () => {
    let num = Math.floor(Math.random() * 151) + 1
    // equipo es un objeto de tipo {1: 1, 2: 4, 3: 7} lo utilizo para valorar que segun el id, no coincidan los mismos pokemon y no pueda repetirse
    while(Object.values(equipo).includes(num)){
        num = Math.floor(Math.random() * 151) + 1
    }
    equipo[i] = num
    await iniciarPokemon(num)
    console.log(pokemon)
    //esto muestra el nombre del pokemon y el sprite que seria la imagen
    document.querySelector(`#pokemon${i}`).innerHTML = `
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.sprites.front_default}" class="imgPokemon" alt="${pokemon.name}" />  
    `
    })
    // esto devuelve al valor default ( sin mostrar nada y sin pokemon seleccionado )
    document.querySelector(`#limpiar${i}`).addEventListener('click', () => {
        document.querySelector(`#pokemon${i}`).innerHTML = ""
        equipo[i] = undefined
    })
}

