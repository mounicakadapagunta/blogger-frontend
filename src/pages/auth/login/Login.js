import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { loginUser } from "../../../actions/authActions";
import { useNavigate } from "react-router-dom";

import "../Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message, status } = useSelector((state) => state.ui);

  console.log("IN LOGIN component");
  // console.log("Iniital value", isLoggedIn);
  useEffect(() => {
    // Clearing the message and status while starting of the app
    dispatch(uiActions.clearNotification());
    if (isLoggedIn) {
      console.log("Before navigating in LOGIN");
      navigate("/");
    }
  }, [isLoggedIn, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
    // dispatch(authActions.login({ isLoggedIn: true, isNavBar: false }));
  };
  return (
    <div className="login form-center">
      {" "}
      {message && (
        <div
          className={
            status === "success"
              ? "form-msg alert-success"
              : "form-msg alert-danger"
          }
        >
          {message}{" "}
        </div>
      )}
      <h2 className="form-title"> Please Login </h2>{" "}
      <form className=" form loginForm" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor=""> Email </label>{" "}
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="form-control">
          <label htmlFor="password"> Password </label>{" "}
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>{" "}
        <button className="btn"> Submit </button>{" "}
        <span className="password-link">
          <NavLink className="forgot-link" to="/forgot-password">
            Forgot Password ?
          </NavLink>{" "}
        </span>{" "}
      </form>{" "}
    </div>
  );
};

export default Login;
