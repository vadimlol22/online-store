import { useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import { isAuthenticatedSelector } from "../../pages/SignIn/selectors";
import { useCard } from "../hooks";

const MainLayout = ({ children }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const { getCardData } = useCard();

  useEffect(() => {
    if (isAuthenticated) {
      getCardData();
    }
  }, [isAuthenticated, getCardData]);

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
