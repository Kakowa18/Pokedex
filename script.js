let currentPokemonJson;

async function init() {
    await includeHTML();
    loadPokedex();
}

// async function loadPokedex() {
//     let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
//     let currentPokemon = await fetch(url);
//     currentPokemonJson = await currentPokemon.json();
//     console.log(currentPokemonJson)

//     loadPokemonName();
// }

// function loadPokemonName() {
//     let pokemonName = document.getElementById('pokemon-name');
//     pokemonName.innerHTML = `${currentPokemonJson['name']}`;

//     let pokemonImg = document.getElementById('pokemonImg');
//     pokemonImg.src = currentPokemonJson['sprites']['front_shiny'];
// }