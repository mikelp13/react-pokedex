import { createReducer } from "@reduxjs/toolkit";
import { getPokemonsSuccess, getPokemonsInfoSuccess, getCurrentPokemon } from "../actions/pokedexActions";

const initialState = {
data:[],
pokemonsInfo:[],
currentPokemon: null,
count:null,
}
const pokemonReducer = createReducer(initialState, {
  [getPokemonsSuccess]:(state, {payload}) => {
    return {...state, data:[...state.data, ...payload.results], count:payload.count,}
  },
  [getPokemonsInfoSuccess]:(state, {payload}) => {
    return {...state, pokemonsInfo:[ ...payload]}
  },
  [getCurrentPokemon]:(state, {payload}) => {
    const currentPokemon = state.pokemonsInfo.find(pokemon => pokemon.id === Number(payload))
    return {...state, currentPokemon}
  }

  
});

// const filter = createReducer("", {
//   [setFilter]: (_, {payload}) => payload,
// });



export default pokemonReducer