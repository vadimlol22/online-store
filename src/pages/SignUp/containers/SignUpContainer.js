import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import FormSignUp from "../components/FormSignUp/FormSignUp";
import { ROUTE_NAMES } from "../../../routes/routeNames";
import { isAuthenticatedSelector } from "../../SignIn/selectors";

import styles from "./styles.module.scss";

const SignUpContainer = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.HOME} />;
  }
  return (
    <div className={styles.main}>
      <FormSignUp />
    </div>
  );
};

export default SignUpContainer;
