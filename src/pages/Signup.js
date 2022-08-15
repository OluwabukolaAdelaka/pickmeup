import React, { useState } from "react";
import Logo from "../assets/pickmeup-logo.png";
import SignUpImg from "../assets/signup.png";
import { Link } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import "../styles/Signup.css";

function Signup() {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="d-none d-md-block col-md-6">
          <img src={SignUpImg} className="img-fluid relative" alt="sign in" />
          <Link to="/">
            <img src={Logo} className="img-fluid signUpLogo" alt="logo" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
             <h3 className="signUpTitle">Join Us at Pickmeup</h3>
             
          
          <form>
          <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label" style={{color: "#555555", fontSize: "1.125rem"}}>
                FULL NAME
              </label>
              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{color: "#555555", fontSize: "1.125rem"}}>
                EMAIL
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Example@gmail.com"
                style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" style={{color: "#555555", fontSize: "1.125rem"}}>
                PASSWORD
              </label>
              <div className="input-group">
                <input type={visibility ? "text" : "password"} className="form-control" placeholder={visibility ? "password" : "********"} style={{ backgroundColor: "#f7f4f4", height: "3rem" }}/>
                <span className="input-group-text" id="basic-addon2" onClick={toggleVisibility}>{visibility ? (
                      <MdOutlineVisibility />
                    ) : (
                      <MdOutlineVisibilityOff />
                    )}</span>
                
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label" style={{color: "#555555", fontSize: "1.125rem"}}>
                CONFIRM PASSWORD
              </label>
              <div className="input-group">
                <input type={visibility ? "text" : "password"} className="form-control" placeholder={visibility ? "password" : "********"} style={{ backgroundColor: "#f7f4f4", height: "3rem" }} />
                <span className="input-group-text" id="basic-addon2" onClick={toggleVisibility}>{visibility ? (
                      <MdOutlineVisibility />
                    ) : (
                      <MdOutlineVisibilityOff />
                    )}</span>
              </div>
            </div>
            
            <div className="d-grid col-12 mx-auto">
              <button className="btn signUpBtn" type="button">
               Create an account
              </button>
            </div>
            <span className="signUpOr">OR</span>
            <div className="d-grid col-12 mx-auto">
              <button className="btn signUpGoogle" type="button">
                <FcGoogle size={30} /> Sign up with Google
              </button>
            </div>
            
            <p className="signUpRegister">
              Already have an account?
              <Link to="/signin" className="logInLink">
                <span style={{ color: "#343434", fontWeight: "bold" }}> Log in</span>
              </Link>
            </p>
          </form>
          
        </div>
      </div>
    </section>
  
  );
}

export default Signup;
