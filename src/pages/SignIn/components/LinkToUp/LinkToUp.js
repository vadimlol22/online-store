import styles from "./styles.module.scss";

import { ROUTE_NAMES } from "../../../../routes/routeNames";
import { useNavigate } from "react-router-dom";

const LinkToUp = () => {
  const navigate = useNavigate();

  const handleLinkToUp = () => {
    console.log("asdad");
    return navigate(ROUTE_NAMES.SIGN_UP);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Don't have an account?</h3>
      <button onClick={handleLinkToUp}>Sign Up</button>
    </div>
  );
};

export default LinkToUp;
