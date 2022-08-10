import React, { useState } from "react";
import Logo from "../assets/pickmeup-logo.png";
import SignUpImg2 from "../assets/signup-img2.png";
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
    <section className="signin-section">
      <div className="row signin-form">
        <div className="col img-part">
          <img src={SignUpImg2} className="img-fluid img" alt="sign in" />
          <Link to="/">
            <img src={Logo} className="img-fluid signin-logo" alt="logo" />
          </Link>
        </div>
        <div className="col form-details">
          <div className="signin-hero">
            <h3 className="title">Welcome</h3>
            <p className="msg">
              Log in with your data entered during registration
            </p>
          </div>
          <form>
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
                <div className="visible">
                  <input
                    type={visibility ? "text" : "password"}
                    className="form-control"
                    placeholder={visibility ? "password" : "********"}
                  />
                  <span className="icon" onClick={toggleVisibility}>
                    {visibility ? (
                      <MdOutlineVisibility />
                    ) : (
                      <MdOutlineVisibilityOff />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="details">
              <p className="f-password">Forgot Password?</p>
              <button type="button" className="signin-btn">
                Sign In
              </button>
              <span className="or">OR</span>
              <div className="google">
                <button type="button" className="signin-google">
                  <FcGoogle size={30} /> Sign with Google
                </button>
              </div>
              <p className="register">
                Don’t have an account? <Link to="/signup" className="register-signup"><span className="signup">Sign Up</span></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
