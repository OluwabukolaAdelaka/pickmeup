import React, { useState } from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import SignUpImg from "../assets/signin.jpg";
import { Link } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import "../styles/SignIn.css";

function SignIn() {
  const [visibility, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    
  }

  const {values, handleChange, errors, touched, handleSubmit, handleBlur} = useFormik({
    initialValues: { 
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Please enter a valid email address").required("Email is required"),
      password: Yup.string().min(4).matches(passwordRules, {message: "Password must be minimum of 4 and include 1 uppercase letter, 1 lowercase letter, 1 numeric digit"}).required("Please enter your password"),
    }),
    onSubmit
  });
  
  return (
    <section className="container">
      <div className="row">
        <div className="d-none d-md-block col-md-6 text-center px-0">
          <Link to="/">
          <img src={SignUpImg} className="img-fluid" alt="sign in" />
          </Link>
        </div>
        {/* Form Part */}
        <div className="col-sm-12 col-md-6 px-5">
          <h3 className="signin-title text-center">Welcome!</h3>

            <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{ color: "#555555", fontSize: "1.125rem" }}
              >
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                placeholder="Example@gmail.com"
                style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
              />
              {errors.email && touched.email && <p className="signInErrorMsg">{errors.email}</p>}
            </div>
            <div className="mb-4">
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
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                  placeholder={visibility ? "password" : "********"}
                  style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
                />
                <button
                  className="btn btn-secondary"
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
              {errors.password && touched.password && <p className="signInErrorMsg">{errors.password}</p>}
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
              <Link to="/forgotpassword" className="forgotpwd-link">
                Forgot Password
              </Link>
              </div>
            </div>
            <div className="d-grid col-12 mx-auto">
              <button className="btn signin-btn" type="submit">
              <Link to="/dashboard" className="btn-link">
               Login
              </Link>
              </button>
            </div>
            <span className="signin-or">OR</span>
            <div className="d-grid col-12 mx-auto">
              <button className="btn signin-google" type="button">
              <Link to="/dashboard" className="google-btn-link">
                <FcGoogle size={30} /> Sign in with Google
              </Link>
              </button>
            </div>

            <p className="signin-register">
              Don’t have an account?
              <Link to="/signup" className="signin-link ps-2">
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
