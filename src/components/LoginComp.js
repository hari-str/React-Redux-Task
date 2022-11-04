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
      alert("Login successfull");
    }
    console.log(errors);

    // history("/");
  }

  return (
    <div className="bg-white shadow-lg border border-slate-200 rounded max-w-sm lg:pb-4 lg:pb-4 p-4 pb-8">
      <h1 className="lg:text-4xl text-3xl  mb-5 text-center ">Login</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="w-full p-2 mb-2 border border-slate-400 md:text-lg text-base rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        {errors.username && (
          <span className="text-red-500">{errors.username}</span>
        )}
        <input
          type="password"
          className="w-full p-2  mb-2 border border-slate-400  md:text-lg text-base rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password}</span>
        )}
        <button
          type="submit"
          className="text-white text-lg font-bold px-3 py-2 mt-5 w-full bg-indigo-600 transition delay-75 hover:bg-indigo-700 rounded"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginComp;
