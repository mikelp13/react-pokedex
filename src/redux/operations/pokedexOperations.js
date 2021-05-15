import axios from 'axios'
import {
  getPokemonsError,
  getPokemonsInfoError,
  getPokemonsInfoRequest,
  getPokemonsInfoSuccess,
  getPokemonsRequest,
  getPokemonsSuccess,
} from '../actions/pokedexActions'

// axios.defaults.baseURL = 'https://pokeapi.co/api/v2'
const baseURL = 'https://pokeapi.co/api/v2'

const getPokemonsOperation =
  (page = 1, perPage = 12) =>
  async dispatch => {
    dispatch(getPokemonsRequest())
    try {
      const offset = page * perPage - perPage
      const response = await axios.get(
        `${baseURL}/pokemon?limit=${perPage}&offset=${offset}`
      )
      dispatch(getPokemonsSuccess(response.data))
    } catch (error) {
      dispatch(getPokemonsError(error.message))
    }
  }

const getPokemonsInfoOperation = () => async (dispatch, getState) => {
  dispatch(getPokemonsInfoRequest())
  const { pokemons:{ data } } = getState()
  console.log(`data`, data)
  try {
    const response = await Promise.all(data.map(async pokemon => {
      const pokemonRecord = await axios.get(pokemon.url)
      return pokemonRecord
    }))
    const pokemonsInfo = response.map(pokemon=>pokemon.data)
    console.log(`pokemonsInfo`, pokemonsInfo)
    dispatch(getPokemonsInfoSuccess(pokemonsInfo))
  } catch (error) {
    dispatch(getPokemonsInfoError(error.message))
  }


}
export { getPokemonsOperation, getPokemonsInfoOperation }
