import React from "react";
import SignUpImg from "../assets/signup.jpg";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  return (
    <section className="container">
      <div className="row">
        <div className="d-none d-md-block col-md-6 text-center px-0">
          <Link to="/">
            <img src={SignUpImg} className="img-fluid" alt="sign in" />
          </Link>
        </div>
        {/* Form Part */}
        <div
          className="col-sm-12 col-md-6 px-5"
          style={{ backgroundColor: "#e5e5e5" }}
        >
          <h3 className="forgotpwd-title text-center">Forgot Password?</h3>
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label pt-2"
                style={{ color: "#555555", fontSize: "1.125rem" }}
              >
                EMAIL
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Example@gmail.com"
                style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
              />
            </div>

            <div className="d-grid col-12 mx-auto">
              <button className="btn resetpwd-btn" type="button">
                <Link to="/mailMsg" className="mailMsg">
                  Reset Password
                </Link>
              </button>
            </div>
            <p className="forgotpwd-register text-center">
              Remember your password?
              <Link to="/signin" className="forgotpwd-link ps-2">
                <span style={{ color: "#343434", fontWeight: "bold" }}>
                  Log in
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
