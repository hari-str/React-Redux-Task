import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="fixed w-full p-3 bg-slate-100 ">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className=" sm:text-xl md:text-2xl ">React Js</h1>

          <div className="flex items-center">
            <nav className="">
              <NavLink to="/" className="font-normal p-2 font-medium ">
                Home
              </NavLink>
              <NavLink to="/post" className="font-normal p-2 font-medium">
                Post
              </NavLink>
              <NavLink to="/photos" className="font-normal p-2 font-medium">
                Photos
              </NavLink>
            </nav>

            <NavLink
              className="text-white font-medium px-3 py-1 bg-indigo-500 hover:bg-indigo-600 rounded "
              onClick={logoutHandler}
            >
              logout
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
