import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { TabTitle } from "../utils/FunctionTitle";

const HomeScreen = () => {
  TabTitle("Home");
  const userData = useSelector((state) => state.userLogin);
  // console.log(userData);
  return (
    <>
      <Navbar />
      <div className="grid h-screen place-items-center">
        <div className="container mx-auto">
          <h1 className="md:text-2xl text-indigo-600 text-xl font-bold text-center">
            Welcome
          </h1>
          <h1 className="md:text-4xl text-2xl font-bold text-center">
            {userData.userInfo?.username || userData.userInfo.user?.username}
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
