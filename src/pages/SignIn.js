import React, { useState } from "react";
import SignUpImg from "../assets/signup.jpg";
import { Link } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import "../styles/SignIn.css";

function SignIn() {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="d-none d-md-block col-md-6 mt-4">
          
          <Link to="/">
          <img src={SignUpImg} className="img-fluid" alt="sign in" />
          </Link>
        </div>
        {/* Form Part */}
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h3 className="signin-title">Welcome!</h3>
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
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
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
                style={{ color: "#555555", fontSize: "1.125rem" }}
              >
                PASSWORD
              </label>
              <div className="input-group">
                <input
                  type={visibility ? "text" : "password"}
                  className="form-control"
                  placeholder={visibility ? "password" : "********"}
                  style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {visibility ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Remember me
                </label>
              </div>
              <div>
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className="d-grid col-12 mx-auto">
              <button className="btn signin-btn" type="button">
                Login
              </button>
            </div>

            <span className="signin-or">OR</span>
            <div className="d-grid col-12 mx-auto">
              <button className="btn signin-google" type="button">
                <FcGoogle size={30} /> Sign in with Google
              </button>
            </div>

            <p className="signin-register">
              Don’t have an account?
              <Link to="/signup" className="signin-link ps-1">
                <span style={{ color: "#343434", fontWeight: "bold" }}>
                   Sign Up
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
