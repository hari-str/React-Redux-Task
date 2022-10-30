import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userAction";
import { useEffect } from "react";

const LoginComp = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [userInfo, history]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      login({
        username: username,
        password: password,
        loggedIn: true,
      })
    );
  }
  return (
    <div className="bg-gray-50 shadow-lg border border-slate-200 rounded max-w-sm p-4">
      <h1 className="text-4xl font-semibold mb-5">Login</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="w-full p-2 mb-2 border border-slate-400 rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 mb-3 border border-slate-400 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white font-medium px-3 py-2 mt-5 w-full bg-indigo-500 hover:bg-indigo-600 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComp;
