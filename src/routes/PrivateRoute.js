import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../pages/SignIn/selectors";
import { Navigate } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";

import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.SIGN_IN} replace />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
