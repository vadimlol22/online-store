import styles from "./styles.module.scss";

import { ROUTE_NAMES } from "../../../../routes/routeNames";
import { useNavigate } from "react-router-dom";

const LinkToIn = () => {
  const navigate = useNavigate();

  const handleLinkToUp = () => {
    return navigate(ROUTE_NAMES.SIGN_IN);
  };

  return (
    <div className={styles.wrapper}>
      <h3>
        Have an account? <span onClick={handleLinkToUp}>Sign In</span>
      </h3>
    </div>
  );
};

export default LinkToIn;
