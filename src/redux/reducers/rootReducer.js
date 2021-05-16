import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import loading from './loadingReducer'
import notificationReducer from "./notifReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  loading,
  error: errorReducer,
  notification: notificationReducer
});

export default rootReducer;