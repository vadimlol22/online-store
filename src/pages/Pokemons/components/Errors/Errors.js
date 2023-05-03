import styles from "./styles.module.scss";

const Errors = ({ errors }) => {
  return <div className={styles.wrapper}>{errors}</div>;
};

export default Errors;
