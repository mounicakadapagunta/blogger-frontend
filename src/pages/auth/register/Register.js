import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import { uiActions } from "../../../store/ui-slice";
import "../Form.css";

const Register = () => {
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => state.ui);

  console.log("Register");
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(state);

    dispatch(registerUser(state));

    // Setting the form to NULL
    setState((pre) => ({ ...pre, firstName: "", email: "", password: "" }));

    setTimeout(() => {
      console.log("Inside timeOut");
      dispatch(
        uiActions.showNotification({
          message: "",
        })
      );
    }, 5000);
    // navigate("/activate-account");
  };

  console.log("Before return in REGISTER");
  return (
    <div className="form-center register">
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
      )}{" "}
      <h2 className="form-title"> Regiter Yourself </h2>{" "}
      <form className=" form register-form" onSubmit={handleRegister}>
        <div className="form-control">
          <label htmlFor="firstName"> FirstName </label>{" "}
          <input
            type="text"
            name="firstName"
            required
            value={state.firstName}
            onChange={(e) =>
              setState((pre) => ({ ...pre, firstName: e.target.value }))
            }
          />{" "}
        </div>{" "}
        <div className="form-control">
          <label htmlFor="lastName"> LastName </label>{" "}
          <input
            type="text"
            name="lastName"
            required
            value={state.lastName}
            onChange={(e) =>
              setState((pre) => ({ ...pre, lastName: e.target.value }))
            }
          />{" "}
        </div>{" "}
        <div className="form-control">
          <label htmlFor="email"> Email </label>{" "}
          <input
            type="text"
            name="email"
            required
            value={state.email}
            onChange={(e) =>
              setState((pre) => ({ ...pre, email: e.target.value }))
            }
          />{" "}
        </div>{" "}
        <div className="form-control">
          <label htmlFor="password"> password </label>{" "}
          <input
            type="password"
            name="password"
            required
            value={state.password}
            onChange={(e) =>
              setState((pre) => ({ ...pre, password: e.target.value }))
            }
          />{" "}
        </div>{" "}
        <button className="btn register-btn"> Register </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Register;
