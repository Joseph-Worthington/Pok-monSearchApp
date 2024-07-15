import { fetchPokemon } from './pokemonApi.js';
import { showLatestPokemon, animatePokedex } from './ui.js';
import { sanatiseSearch } from './utils.js';

const searchPokemon = document.getElementById('search-button');

searchPokemon.addEventListener('click', e => {
  e.preventDefault();
  let pokemonInputed = document.getElementById("search-input").value;
  pokemonInputed = sanatiseSearch(pokemonInputed);
  fetchPokemon(pokemonInputed).then(data => {
    if (data) {
      animatePokedex();

      setTimeout(() => {
        showLatestPokemon(data);
      }, 1400);

    }
  });
});



