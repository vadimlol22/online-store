import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTE_NAMES } from "../../routes/routeNames";
import isAuthenticatedSelector from "../../pages/SignIn/selectors";
import logo from "./../../static/images/poke_logo.png";
import exit from "./../../static/images/logout.png";
import person from "./../../static/images/privatAreaIcon.png";

import styles from "./styles.module.scss";
import { logOut } from "../../utils/logout";

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
          <Link
            key="PERSONAL_AREA"
            to={ROUTE_NAMES.PERSONAL_AREA}
            className={styles.link}
          >
            <img src={person} alt="person" />
          </Link>
          <a className={styles.link__logout} onClick={logOut}>
            <img src={exit} alt="logout" />
          </a>
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
