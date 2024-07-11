import showLatestPokemon from './content.js';

const pokemonProxyUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonCard = document.querySelector('.pokemon-card');

const fetchPokemon = async (input) => {
    let pokemonRequestURL = pokemonProxyUrl + input;
    try {
        const res = await fetch(pokemonRequestURL);
        if (res.ok) { // Check if response is successful
        const data = await res.json();
        if (data) { // Check if data is not null or meets your criteria
            pokemonCard.classList.add('fade-in');
            showLatestPokemon(data);
            animatePokedex();
        } else {
            alert('Pokémon not Found');
        }
        } else {
        alert('Pokémon not Found');
        }
    } catch (err) {
        alert('Pokémon not Found');
    }
};

const sanatiseSearch = (input) => {
    if(Number(input)){
        return pokemonToSearchFor = input;
    }
    const removeCapitalse = input.toLowerCase()
    const removeSpecialCharacters = removeCapitalse.replace(/[^a-zA-Z ]/g, "").trim()
    const replaceSpace = removeSpecialCharacters.replace(/[^a-zA-Z]/g, "-")
    let pokemonToSearchFor = replaceSpace;
    if(removeCapitalse.includes('♀')){
        return pokemonToSearchFor + '-f'
    }
    if(removeCapitalse.includes('♂')){
        return pokemonToSearchFor + '-m'
    }
    return pokemonToSearchFor;
}
  
export { fetchPokemon, sanatiseSearch };