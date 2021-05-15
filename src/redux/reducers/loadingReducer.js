import { createReducer } from '@reduxjs/toolkit'
import {
  getPokemonsError,
  getPokemonsInfoError,
  getPokemonsInfoRequest,
  getPokemonsInfoSuccess,
  getPokemonsRequest,
  getPokemonsSuccess,
} from '../actions/pokedexActions'

const loading = createReducer(false, {
  [getPokemonsRequest]: () => true,
  [getPokemonsSuccess]: () => false,
  [getPokemonsError]: () => false,

  [getPokemonsInfoRequest]: () => true,
  [getPokemonsInfoSuccess]: () => false,
  [getPokemonsInfoError]: () => false,
})
export default loading
