import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const HomeScreen = () => {
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
