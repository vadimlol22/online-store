import Header from "../Header";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container__children}>{children}</div>
    </div>
  );
};

export default MainLayout;
