import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { TabTitle } from "../utils/FunctionTitle";

const HomeScreen = () => {
  TabTitle("Home");
  const userData = useSelector((state) => state.userLogin);
  console.log(userData);
  return (
    <>
      <Navbar />
      <div className="grid h-screen place-items-center">
        <h1 className="md:text-4xl text-2xl font-bold">
          {userData
            ? `Welcome back ${
                userData.userInfo?.username || userData.userInfo.user?.username
              } ✋`
            : `Welcome Homepage ✋`}
        </h1>
      </div>
    </>
  );
};

export default HomeScreen;
