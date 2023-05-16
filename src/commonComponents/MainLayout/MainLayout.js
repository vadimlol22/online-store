import { useSelector } from "react-redux";
import { useEffect } from "react";

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

export default MainLayout;
