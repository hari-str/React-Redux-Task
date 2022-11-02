import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userAction";
import validate from "../utils/validate";

const LoginComp = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [userInfo, history]);

  // console.log(username, password);
  function handleSubmit(e) {
    e.preventDefault();

    if (username === "" || password === "" || password.length < 6) {
      setErrors(validate(username, password));
    } else {
      dispatch(
        login({
          username: username,
          password: password,
          loggedIn: true,
        })
      );
    }
    console.log(errors);

    // history("/");
  }

  return (
    <div className="bg-gray-50 shadow-lg border border-slate-200 rounded max-w-sm p-4">
      <h1 className="lg:text-4xl md:text-2xl text-2xl font-semibold mb-5">
        Login
      </h1>

      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="w-full p-1.5 mb-2 border border-slate-400 text-base rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        {errors.username && (
          <span className="text-red-500">{errors.username}</span>
        )}
        <input
          type="password"
          className="w-full p-1.5  mb-2 border border-slate-400 text-base rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password}</span>
        )}
        <button
          type="submit"
          className="text-white font-medium px-3 py-2 mt-5 w-full bg-indigo-600 transition delay-75 hover:bg-indigo-700 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComp;
