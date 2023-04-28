import { useSelector } from "react-redux";

import isAuthenticatedSelector from "../../pages/SignIn/selectors";
import Header from "../Header";
import Registration from "./Registration/Registration";

const MainLayout = ({ children }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    // <div>
    //   {isAuthenticated ? (
    <div>
      <Header />
      {children}
    </div>
  );
  //      : (
  //       <div>
  //         <Registration />
  //       </div>
  //     )}
  //   </div>
  // );
};

export default MainLayout;
