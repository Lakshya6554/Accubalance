import React from "react";
import { Link } from "react-router-dom";
const login = () => {
  return (
    <div className="login-page">
      <div className="form">
        <span className="Logintext">Login</span>
        <br />
        <br />
        <br />
        <form className="login-form">
          <div>
            <input
              type="text"
              name="username"
              id="username"
              required
              autoComplee="off"
              placeholder="Enter username"
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              required
              placeholder="Enter password"
            />
          </div>
          <br />
          <br />
          <div className="footer">
            <button type="submit" className="loginbtn">
              Login
            </button>
            <br />
            <br />
            <p className="abcd">
              New User!
              <Link to="/signup" className="signuplink">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
