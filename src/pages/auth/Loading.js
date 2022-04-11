import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accountActivation } from "../../actions/authActions";
import { NavLink, useParams } from "react-router-dom";
import "./Loading.css";

const Loading = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { activationCode } = params;

  // Sending the account activation code to Backend for the verification
  useEffect(() => {
    dispatch(accountActivation(activationCode));
  }, [dispatch, activationCode]);

  const { message, status } = useSelector((state) => state.ui);
  return (
    <div className="loading">
      {message && (
        <div
          className={
            status === "success"
              ? "form-msg alert-success"
              : "form-msg alert-danger"
          }
        >
          {message}
        </div>
      )}
      <div className="link-container">
        <p>
          Please Click here to
          {status === "success" && (
            <span>
              <NavLink className="activation-link" to="/login">
                Login
              </NavLink>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Loading;
