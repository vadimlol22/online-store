import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

import { useSelector } from "react-redux";
import isAuthenticatedSelector from "../../pages/SignIn/selectors";

const Header = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    <div>
      {isAuthenticated ? (
        <Link key="HOME" to={ROUTE_NAMES.HOME} className={styles.link}>
          Home
        </Link>
      ) : (
        <div className={styles.header}>
          <Link key="SIGN_UP" to={ROUTE_NAMES.SIGN_UP} className={styles.link}>
            Sign-Up
          </Link>
          <Link key="SIGN_IN" to={ROUTE_NAMES.SIGN_IN} className={styles.link}>
            Sign-In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
