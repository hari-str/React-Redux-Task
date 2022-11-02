import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import PostScreen from "./Pages/PostScreen";
import PhotoScreen from "./Pages/PhotoScreen";
import LoginScreen from "./Pages/LoginScreen";
import PrivateRouter from "./PrivateRouter";
import ErrorScreen from "./Pages/ErrorScreen";

const App = () => {
  return (
    <Routes>
      <Fragment>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route element={<PrivateRouter />}>
          <Route exact path="/" element={<HomeScreen />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/post" element={<PostScreen />}></Route>
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/photos" element={<PhotoScreen />}></Route>
        </Route>
        <Route path="*" element={<ErrorScreen />}></Route>
      </Fragment>
    </Routes>
  );
};

export default App;
