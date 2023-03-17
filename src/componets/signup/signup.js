import React from "react";
import { Link } from "react-router-dom";
const signup = () => {
  return (
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <span className="signuptext">Signup</span>{" "}
            <form id="register-form" className="register-form">
              <br />
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account-box"></i>
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  placeholder="Enter your Username "
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="off"
                  placeholder="Enter name"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter your email "
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-key"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Enter your password "
                />
              </div>
              <br />
              <div className="footer">
                <button className="signupbtn">Signup</button>
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signup;
