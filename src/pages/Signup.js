import React, { useState } from "react";
//import { useNavigate  } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import SignUpImg from "../assets/signup.jpg";
import { Link } from "react-router-dom";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import "../styles/Signup.css";

function Signup() {
  const [visibility, setVisibility] = useState(true);
  const [confirmVisibility, setConfirmVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const toggleConfirmVisibility = () => {
    setConfirmVisibility(!confirmVisibility);
  };

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log(actions);
  };

  const {
    values,
    handleChange,
    errors,
    touched,
    dirty,
    isValid,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  // navigate sign up to sign in
  // let navigate = useNavigate();
  // function handleClick(path) {
  //   navigate.push(path);
  // }

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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="fullName"
                className="form-label"
                style={{ color: "#555555", fontSize: "1.125rem" }}
              >
                FULL NAME
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                placeholder="Enter your full name"
                style={{ backgroundColor: "#f7f4f4", height: "4rem" }}
              />
              {errors.fullName && touched.fullName && (
                <p className="signUpErrorMsg">{errors.fullName}</p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#555555", fontSize: "1.125rem" }}
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                placeholder="Example@gmail.com"
                style={{ backgroundColor: "#f7f4f4", height: "4rem" }}
              />
              {errors.email && touched.email && (
                <p className="signUpErrorMsg">{errors.email}</p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#555555", fontSize: "1.125rem" }}
              >
                PASSWORD
              </label>
              <div className="input-group">
                <input
                  type={visibility ? "text" : "password"}
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                  placeholder={visibility ? "password" : "********"}
                  style={{ backgroundColor: "#f7f4f4", height: "4rem" }}
                />
                <span className="input-group-text" onClick={toggleVisibility}>
                  {visibility ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </span>
              </div>
              {errors.password && touched.password && (
                <p className="signUpErrorMsg">{errors.password}</p>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="form-label"
                style={{ color: "#555555", fontSize: "1.125rem" }}
              >
                CONFIRM PASSWORD
              </label>
              <div className="input-group">
                <input
                  type={confirmVisibility ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                  placeholder={confirmVisibility ? "password" : "********"}
                  style={{ backgroundColor: "#f7f4f4", height: "4rem" }}
                />
                <span
                  className="input-group-text"
                  onClick={toggleConfirmVisibility}
                >
                  {confirmVisibility ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </span>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="signUpErrorMsg">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="d-grid">
              <Link to="/signin">
                <button
                  className={
                    !(dirty && isValid) ? "signUpBtnDisabled" : "signUpBtn"
                  }
                  style={{ width: "100%" }}
                  type="submit"
                >
                  Create an account
                </button>
              </Link>
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

export default Signup;
