import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTE_NAMES } from "../../routes/routeNames";
import isAuthenticatedSelector from "../../pages/SignIn/selectors";
import logo from "./../../static/images/poke_logo.png";

import styles from "./styles.module.scss";

const Header = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.header}>
          <Link
            key="POKEMONS"
            to={ROUTE_NAMES.POKEMONS}
            className={styles.link}
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
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
