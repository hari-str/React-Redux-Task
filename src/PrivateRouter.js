import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // const token = window.localStorage.getItem("userInfo");
  // console.log(token);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
