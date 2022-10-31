import React from "react";
import LoginComp from "../components/LoginComp";
import { TabTitle } from "../utils/FunctionTitle";

const LoginScreen = () => {
  TabTitle("Login");
  return (
    <div className="container mx-auto">
      <div className="grid h-screen place-items-center">
        <LoginComp />
      </div>
    </div>
  );
};

export default LoginScreen;
