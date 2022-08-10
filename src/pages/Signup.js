import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import SignUpImg2 from "../assets/signup-img2.png";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  return (
    <section className="signup-section">
      <div className="row signup-form">
        <div className="col img-part">
          <img src={SignUpImg2} className="img-fluid img" alt="sign up" />
          <Link to="/">
            <img src={Logo} className="img-fluid signup-logo" alt="logo" />
          </Link>
        </div>
        <div className="col form-details">
          <div className="signup-hero">
            <h3 className="title">Join Us at Pickmeup</h3>
            <p className="msg">
              Enter your details to create a Pickmeup account
            </p>
          </div>
          <form>
            <div className="form-row">
              <div className="col-lg-6">
                <label className="label">FIRST NAME</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-6">
                <label className="label">LAST NAME</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-6">
                <label className="label">EMAIL</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Example@gmail.com"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-6">
                <label className="label">PASSWORD</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-6">
                <label className="label">CONFIRM PASSWORD</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="agreement-details">
              <p className="agreement">
                By clicking Signup, I acknowledge that i have read, understand
                and agreed to the terms of
                <span className="terms">Pickmeup’s Privacy, Policy</span> and
                <span className="terms">Terms of Services</span>.
              </p>
              <button type="button" className="signup-btn">
                Sign Up
              </button>
              <p className="register">
                Have an account? <span className="'signin">Sign in</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
