import React, { useContext } from "react";
import { UserContext } from '../utils/UserContext';

// import UnAuthorised from "./UnAuthorised";
import Login from "../components/MainPage/Login";

// role can be
function Authenticate({ role, children }) {
  const { user } = useContext(UserContext);
  console.log("Role of user", role);
  console.log("component of childern", children);
  console.log("component of childern", user);
  if (user?.role === role) {
    return <>{children}</>;
  }
  return <Login/>;
}

export default Authenticate;
