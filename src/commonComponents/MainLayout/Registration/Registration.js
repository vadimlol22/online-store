import SignInContainer from "../../../pages/SignIn/containers/SignInContainer";
import SignUpContainer from "../../../pages/SignUp/containers/SignUpContainer";

import styles from "./styles.module.scss";

const Registration = () => {
  return (
    <div className={styles.container}>
      <h1>
        Добро пожаловать в интернет магазин покемонов, для входа в наш магазин
        авторизируйтесь пожалуйста
      </h1>
      <SignInContainer />
    </div>
  );
};

export default Registration;
