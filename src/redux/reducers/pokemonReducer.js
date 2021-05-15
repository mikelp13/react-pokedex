import { createReducer } from "@reduxjs/toolkit";
import { getPokemonsSuccess, getPokemonsInfoSuccess } from "../actions/pokedexActions";

const initialState = {
data:[],
pokemonsInfo:[],
count:null,
}
const pokemonReducer = createReducer(initialState, {
  [getPokemonsSuccess]:(state, {payload}) => {
    return {...state, data:[...state.data, ...payload.results], count:payload.count,}
  },
  [getPokemonsInfoSuccess]:(state, {payload}) => {
    return {...state, pokemonsInfo:[ ...payload]}
  }
  
});

// const filter = createReducer("", {
//   [setFilter]: (_, {payload}) => payload,
// });



export default pokemonReducer