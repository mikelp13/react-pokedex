const getPokemonsData = state => state.pokemons.data
const getPokemons = state => state.pokemons.pokemonsInfo
const getCurrentPokemon = state => state.pokemons.currentPokemon
const getLoading = state => state.loading


export { getPokemonsData, getPokemons, getCurrentPokemon, getLoading }