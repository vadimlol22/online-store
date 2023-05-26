import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Errors = ({ errors }) => {
  return <div className={styles.wrapper}>{errors}</div>;
};

Errors.propTypes = {
  errors: PropTypes.string,
};

export default Errors;
