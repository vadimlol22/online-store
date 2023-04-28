import { useSelector } from "react-redux";

import CustomSpinner from "../../../../commonComponents/CustomSpinner";

import styles from "./styles.module.scss";

const Loading = () => {
  const errors = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);

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
