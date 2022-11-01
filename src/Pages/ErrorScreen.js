import React from "react";
import { NavLink } from "react-router-dom";
import { TabTitle } from "../utils/FunctionTitle";

const ErrorScreen = () => {
  TabTitle("404 Error!");
  return (
    <div className="grid h-screen place-items-center">
      <div className="container mx-auto text-center">
        <h1 className="md:text-8xl text-4xl font-bold text-center">
          404 Error!
        </h1>
        <NavLink to="/">
          <button className="text-white font-medium px-3 py-1 bg-indigo-600 mt-5 rounded transition delay-100  hover:bg-indigo-700 hover:scale-110 ">
            Go Back
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorScreen;
