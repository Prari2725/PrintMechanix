import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <h2>Sign up to Voodoo Manufacturing</h2>
      <form className="signup-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>
          Password <span className="hint">At least 10 characters long</span>
        </label>
        <input type="password" placeholder="Enter password" />

        <div className="name-fields">
          <div>
            <label>First name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last name</label>
            <input type="text" />
          </div>
        </div>

        <label>Phone</label>
        <input type="tel" placeholder="Phone number" />

        <button type="submit" className="signup-btn">
          Sign Up
        </button>

        <div className="footer-links">
          <p>
            Already registered? <a href="/signin">Sign In</a>
          </p>
          <p>
            Or sign in <a href="#">with a code</a>
          </p>
        </div>
      </form>
    </div>
  );
}
