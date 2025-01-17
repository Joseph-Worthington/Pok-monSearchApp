const pokemonHP = document.getElementById('hp');
const pokemonAttack = document.getElementById('attack')
const pokemonDefense = document.getElementById('defense')
const pokemonSpecialAttack = document.getElementById('special-attack');
const pokemonSpecialDefense = document.getElementById('special-defense');
const pokemonSpeed = document.getElementById('speed');
const pokemonName = document.getElementById('pokemon-name');
const pokemonID = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const pokemonTypes = document.getElementById('types');
const pokemonImg = document.getElementById('sprite-container');
const pokemonIcon = document.getElementById('pokemon-icon');
const pokemonFlash = document.getElementById('pokedex-flash');


export const pokemonTypeAddIcon = (types) => {
  let icon = ''
  types.map(({type}, index) => {
    const imgClass = types.length === 1 ? 'img-full' : 'img-half'
    icon += `<img class="${imgClass} img-${index}" src="resources/imgs/type/${type.name}-type.png" alt="${type.name}">`
  })
  return icon;
};


export const pokemonTypesHTML = (types) => {
  let typeHTML = ``
  types.map(({type}) => {
    typeHTML += `<p>${type.name.toUpperCase()}</p> `
  })
  return typeHTML;
};

export const pokemonSetStats = (stats) => {
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
};

export const showLatestPokemon = (data) => {
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
  setTimeout(() => {
    pokemonIcon.innerHTML = pokemonTypeAddIcon(types)
  }
  , 2000)
  pokemonSetStats(stats)
  pokemonImg.innerHTML = `<img id="sprite" src="${sprites.front_default}">`
};

export const animatePokedex = () => {
  const pokedex = document.querySelectorAll('.pokedex-sides')
  const pokedexCircle = document.querySelector('.pokedex-circle')

  pokedex.forEach(side => {
    side.classList.add('animate-pokedex')
    setTimeout(() => {
      side.classList.remove('animate-pokedex')
    }, 7000)
  })

  setTimeout(() => {
    pokemonFlash.classList.add('flash')
  }, 1400)

  setTimeout(() => {
    pokemonFlash.classList.remove('flash')
  }, 5000)
};