import { combineReducers } from "redux";

import signInReducer from "./../pages/SignIn/reducers";

export const rootReducer = combineReducers({
  auth: signInReducer,
});
