import { combineReducers } from "redux";

import signInReducer from "./../pages/SignIn/reducers";
import dataFetchingReducer from "./../pages/Pokemons/reducers";

export const rootReducer = combineReducers({
  auth: signInReducer,
  dataFetching: dataFetchingReducer,
});
