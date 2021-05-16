import { createReducer } from '@reduxjs/toolkit';
import { getPokemonsError, getPokemonsInfoError, getPokemonsInfoRequest, getPokemonsRequest } from '../actions/pokedexActions';

const errorReducer = createReducer(null, {
  [getPokemonsError]: (_, {payload}) => payload,
  [getPokemonsRequest]: () => null,

  [getPokemonsInfoError]: (_, {payload}) => payload,
  [getPokemonsInfoRequest]: () => null,
});

export default errorReducer;