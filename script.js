let currentPokemonJson;

async function init() {
    await includeHTML();
    await loadPokedex();
}

async function loadPokedex() {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    let currentPokemon = await fetch(url);
    currentPokemonJson = await currentPokemon.json();
    console.log(currentPokemonJson);
    
    await loadPokemonName();
}

async function loadPokemonName() {
    let pokemonName = document.getElementById('pokemon-name');
    let pokemonNameJson = currentPokemonJson['results']['0']['name'];
    pokemonName.innerHTML = pokemonNameJson.charAt(0).toUpperCase() + pokemonNameJson.slice(1);
    let urlCurrentPokemonName = 'https://pokeapi.co/api/v2/pokemon/' +pokemonNameJson; 
    let currenturlCurrentPokemonName = await fetch(urlCurrentPokemonName);
    let currenturlCurrentPokemonNameJson = await currenturlCurrentPokemonName.json();
    console.log(currenturlCurrentPokemonNameJson);

    loadPokemonImg(currenturlCurrentPokemonNameJson);

}

function loadPokemonImg(currenturlCurrentPokemonNameJson) {
    let pokemonImg = document.getElementById('pokemonImg');
    pokemonImg.src = currenturlCurrentPokemonNameJson['sprites']['other']['official-artwork']['front_shiny'];    

    loadProperties(currenturlCurrentPokemonNameJson);
}

async function loadProperties(currenturlCurrentPokemonNameJson) {
    let firstPropertie = document.getElementById('first-propertie');
    let secondPropertie = document.getElementById('second-propertie');
    firstPropertie.innerHTML = currenturlCurrentPokemonNameJson['types']['0']['type']['name'];
    secondPropertie.innerHTML = currenturlCurrentPokemonNameJson['types']['1']['type']['name'];
}
