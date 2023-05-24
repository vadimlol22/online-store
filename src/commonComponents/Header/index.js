import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTE_NAMES } from "../../routes/routeNames";
import { isAuthenticatedSelector } from "../../pages/SignIn/selectors";
import {
  personFirstNameSelector,
  personGenderSelector,
} from "../../pages/PersonalArea/selector";
import { logOut } from "../../utils/logout";
import logo from "./../../static/images/poke_logo.png";
import exit from "./../../static/images/logout.png";
import person from "./../../static/images/privatAreaIcon.png";
import personWoman from "./../../static/images/privatAreaIconWoman.png";

import styles from "./styles.module.scss";
import CustomBadge from "../CustomBadge";
import { useCard } from "../hooks";

const Header = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const isWoman = useSelector(personGenderSelector);
  const namePerson = useSelector(personFirstNameSelector);

  const { cardItemsQuantity } = useCard();

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
            {isWoman === "female" ? (
              <img src={personWoman} alt="personWoman" />
            ) : (
              <img src={person} alt="person" />
            )}
            <p className={styles.link__name}>{namePerson}</p>
          </Link>
          <Link
            key="SHOP_CARD"
            to={ROUTE_NAMES.SHOP_CARD}
            className={styles.link}
          >
            <CustomBadge badgeContent={cardItemsQuantity} />
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
