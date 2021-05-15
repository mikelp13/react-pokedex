import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import loading from './loadingReducer'

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  loading
});

export default rootReducer;