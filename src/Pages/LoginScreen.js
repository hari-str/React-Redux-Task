import React from "react";
import LoginComp from "../components/LoginComp";

const LoginScreen = () => {
  return (
    <div className="container mx-auto">
      <div className="grid h-screen place-items-center">
        <LoginComp />
      </div>
    </div>
  );
};

export default LoginScreen;
