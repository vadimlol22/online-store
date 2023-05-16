import { combineReducers } from "redux";

import signInReducer from "./../pages/SignIn/reducers";
import dataFetchingReducer from "./../pages/Pokemons/reducers";
import pokemonDetailsReducer from "./../pages/PokemonDetails/reducers";
import cardReducer from "./../pages/ShopCard/reducers";

export const rootReducer = combineReducers({
  auth: signInReducer,
  dataFetching: dataFetchingReducer,
  pokemonDetails: pokemonDetailsReducer,
  shopCard: cardReducer,
});
