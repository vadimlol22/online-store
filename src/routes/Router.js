import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import PrivateRoute from "./PrivateRoute";

import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import PokemonsContainer from "../pages/Pokemons/containers/PokemonsContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>This is home page!!!</h1>} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route
        path={ROUTE_NAMES.POKEMONS}
        element={
          <PrivateRoute>
            <PokemonsContainer />
          </PrivateRoute>
        }
      />
      {/* <Route
        path={ROUTE_NAMES.POKEMON_DETAILS}
        element={
          <PrivateRoute>
            <PokemonDetailsContainer />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
};

export default Router;
