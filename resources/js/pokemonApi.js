const pokemonProxyUrl = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemon = async (input) => {
  let pokemonRequestURL = pokemonProxyUrl + input;
  try {
    const res = await fetch(pokemonRequestURL);
    if (!res.ok) throw new Error('Pokémon not found');
    return await res.json();
  } catch (err) {
    alert('Pokémon not Found');
    return null;
  }
};