import { useSelector } from "react-redux";

import {
  personEmailSelector,
  personFirstNameSelector,
  personGenderSelector,
  personLastNameSelector,
  personPhoneSelector,
  personRolesSelector,
} from "../../selector";
import user from "./../../../../static/images/user.png";

import styles from "./styles.module.scss";

const PersonalCard = () => {
  const firstName = useSelector(personFirstNameSelector);
  const lastName = useSelector(personLastNameSelector);
  const email = useSelector(personEmailSelector);
  const gender = useSelector(personGenderSelector);
  const phone = useSelector(personPhoneSelector);
  const roles = useSelector(personRolesSelector);

  return (
    <div>
      <h1 className={styles.head}>General Informations:</h1>
      <div className={styles.about}>
        <div>
          <div className={styles.info}>
            Name <span>{firstName}</span>
          </div>
          <div className={styles.info}>
            Surname <span>{lastName}</span>
          </div>
          <div className={styles.info}>
            E-mail <span>{email}</span>
          </div>
          <div className={styles.info}>
            Gender <span>{gender}</span>
          </div>
          <div className={styles.info}>
            Phone <span>{phone}</span>
          </div>
          <div className={styles.info}>
            Role <span>{roles}</span>
          </div>
        </div>
        <div className={styles.about__img}>
          <img src={user} alt="person" />
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
