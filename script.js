const pokemonProxyUrl = 'https://pokeapi.co/api/v2/pokemon/';
const searchPokemon = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonID = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonTypes = document.getElementById('types');
const pokemonHP = document.getElementById('hp');
const pokemonAttack = document.getElementById('attack')
const pokemonDefense = document.getElementById('defense')
const pokemonSpecialAttack = document.getElementById('special-attack');
const pokemonSpecialDefense = document.getElementById('special-defense');
const pokemonSpeed = document.getElementById('speed');
const pokemonImg = document.getElementById('sprite-container');
const pokemonCard = document.querySelector('.pokemon-card');

const fetchPokemon = async (input) => {
  let pokemonRequestURL = pokemonProxyUrl + input;
  try {
    const res = await fetch(pokemonRequestURL);
    const data = await res.json();
    if(data){
      pokemonCard.classList.add('fade-in')
      showLatestPokemon(data)
    }
  } catch (err) {
    alert('Pokémon not Found')
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

const pokemonTypesHTML = (types) => {
  let typeHTML = ``
  types.map(({type}) => {
    typeHTML += `<p>${type.name.toUpperCase()}</p> `
  })
  return typeHTML;
}

const pokemonSetStats = (stats) => {
  stats.map(({base_stat, stat}) => {
    switch(stat.name){
      case 'hp':
        pokemonHP.innerHTML = base_stat;
        break;
      case 'attack':
        pokemonAttack.innerHTML = base_stat;
        break;
      case 'defense':
        pokemonDefense.innerHTML = base_stat;
        break;
      case 'special-attack':
        pokemonSpecialAttack.innerHTML = base_stat;
        break;
      case 'special-defense':
        pokemonSpecialDefense.innerHTML = base_stat;
        break;
      case 'speed':
        pokemonSpeed.innerHTML = base_stat;
        break;
    }
  })
}

const showLatestPokemon = (data) => {
  console.log(data)
  const {
    height, 
    id, 
    name, 
    weight,
    stats, 
    types,
    sprites
  } = data
  pokemonName.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
  pokemonHeight.innerHTML = `Height: ${height}`;
  pokemonID.innerHTML = `#${id}`;
  pokemonWeight.innerHTML = `Weight: ${weight}`;
  pokemonTypes.innerHTML = pokemonTypesHTML(types)
  pokemonSetStats(stats)
  pokemonImg.innerHTML = `<img id="sprite" src="${sprites.front_default}">`
}

searchPokemon.addEventListener('click', e => {
  e.preventDefault()
  pokemonCard.classList.remove('fade-in')
  let pokemonInputed = document.getElementById("search-input").value;
  pokemonInputed = sanatiseSearch(pokemonInputed);
  fetchPokemon(pokemonInputed)
})