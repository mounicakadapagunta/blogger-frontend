import React, { useState } from "react";

import "../Form.css";

const ForgotPass = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="forgot-pass form-center">
      <h2 className="form-title">Forgot your Password</h2>
      <p>Don't worry we will send you the reset link</p>
      <form className=" form form-forgot" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="forgot">Email</label>
          <input
            type="text"
            name="forgot"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn forgot-btn">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPass;
