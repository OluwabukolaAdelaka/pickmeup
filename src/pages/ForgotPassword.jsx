import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import SignUpImg from "../assets/signup.jpg";
import Lock from "../assets/lock.png";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: yup.object({
        email: yup.string().email("Invalid email address").required("Required"),
      }),
      onSubmit,
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
        <div
          className="col-sm-12 col-md-6 px-5"
          style={{ backgroundColor: "#e5e5e5" }}
        >
          <h3 className="forgotpwd-title text-center">Forgot Password?</h3>
          <form onSubmit={handleSubmit}>
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
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                placeholder="Example@gmail.com"
                style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
              />
              {errors.email && touched.email && (
                <p className="signUpErrorMsg">{errors.email}</p>
              )}
            </div>

            <div className="d-grid col-12 mx-auto">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn resetpwd-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Reset Password
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body text-center p-5">
                      <img
                        src={Lock}
                        className="card-img-top img-fluid mb-4"
                        alt="..."
                        style={{
                          width: "25%",
                          height: "auto",
                        }}
                      />
                      <h6
                        className="card-title pb-2"
                        style={{
                          color: "#1e1e1e",
                          fontWeight: "600",
                          fontSize: "2rem",
                        }}
                      >
                        Check your email
                      </h6>
                      <p
                        className="card-text"
                        style={{
                          color: "#1e1e1e",
                          fontWeight: "700",
                          fontSize: "1rem",
                        }}
                      >
                        We have just sent you the password reset link. click the
                        link in the email and follow the instruction to reset
                        your password.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button className="btn resetpwd-btn" type="submit">
                <Link to="/mailMsg" className="mailMsg">
                  Reset Password
                </Link>
              </button> */}
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
      {/* <Link to="/mailMsg" className="mailMsg">
                  Reset Password
                </Link> */}
    </section>
  );
}

export default ForgotPassword;
