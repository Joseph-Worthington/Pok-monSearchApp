const searchPokemon = document.getElementById('search-button');
const pokemonCard = document.querySelector('.pokemon-card');

import { fetchPokemon, sanatiseSearch } from './api.js';



searchPokemon.addEventListener('click', e => {
    e.preventDefault()
    pokemonCard.classList.remove('fade-in')
    let pokemonInputed = document.getElementById("search-input").value;
    console.log(pokemonInputed);
    pokemonInputed = sanatiseSearch(pokemonInputed);
    console.log(pokemonInputed);
    fetchPokemon(pokemonInputed)
  })