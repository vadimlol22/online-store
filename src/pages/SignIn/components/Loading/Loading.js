import { useSelector } from "react-redux";

import CustomSpinner from "../../../../commonComponents/CustomSpinner";
import { authErrorsSelector, authIsLoadingSelector } from "../../selectors";

import styles from "./styles.module.scss";

const Loading = () => {
  const errors = useSelector(authErrorsSelector);
  const isLoading = useSelector(authIsLoadingSelector);

  return (
    <div className={styles.spinner}>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <h2 className={styles.error}>{errors}</h2>
      )}
    </div>
  );
};

export default Loading;
