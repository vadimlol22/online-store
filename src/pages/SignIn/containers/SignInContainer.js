import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import FormSignIn from "../components/FormSignIn/FormSignIn";
import isAuthenticatedSelector from "../selectors";
import { ROUTE_NAMES } from "../../../routes/routeNames";

import styles from "./styles.module.scss";

const SignInContainer = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.HOME} />;
  }

  return (
    <div className={styles.main}>
      <h1>
        Добро пожаловать в интернет магазин покемонов, для входа в наш магазин
        авторизируйтесь пожалуйста
      </h1>
      <FormSignIn />
    </div>
  );
};

export default SignInContainer;
