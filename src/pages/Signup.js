import React, { useState } from "react";
import SignUpImg from "../assets/signup.jpg";
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
    <section className="container">
      <div className="row">
        <div className="d-none d-md-block col-md-6 text-center px-0">
          <Link to="/">
          <img src={SignUpImg} className="img-fluid" alt="sign in" />
            
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 px-5">
             <h3 className="signUpTitle text-center">Join Us at Pickmeup</h3>
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
              <Link to="/signin" className="logInLink ps-1">
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
