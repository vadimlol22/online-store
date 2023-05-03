import { Navigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";

const HomeContainer = () => {
  return <Navigate to={ROUTE_NAMES.SIGN_IN} />;
};

export default HomeContainer;
