const getPokemonsData = state => state.pokemons.data
const getPokemons = state => state.pokemons.pokemonsInfo
const getCurrentPokemon = state => state.pokemons.currentPokemon
const getLoading = state => state.loading
const getError = state => state.error
const getNotification = state => state.notification

export {
  getPokemonsData,
  getPokemons,
  getCurrentPokemon,
  getLoading,
  getError,
  getNotification,
}
