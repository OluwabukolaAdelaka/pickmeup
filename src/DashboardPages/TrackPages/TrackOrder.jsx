import React from "react";
import Logo from "../../assets/pickmeup-logo.png";
import { Link } from "react-router-dom";
import "../../styles/Track.css";

function TrackOrder() {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#eeeeee", height: "100vh" }}
      >
        <nav className="navbar navbar-expand-lg border-dark bg-white border-bottom border-1 sticky-top">
          <img src={Logo} className="" alt="company logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>

        {/* Navbar End */}

        {/* Main content start */}
        <main className="container pt-5 mt-5">
          {/* <div className="d-grid col-12 mx-auto">
          <!-- Button trigger modal -->
          <button
            type="button"
            className="btn resetpwd-btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Reset Password
          </button>

        {/* <!-- Modal --> 
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center p-5">
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
                    link in the email and follow the instruction to reset your
                    password.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          <div className="row justify-content-center align-items-center ">
            <div className="col-sm-12 col-md-6 ">
              <div className="card border border-0 h-100">
                <div className="card-body">
                  <h5 className="track-title">Track Shipment</h5>
                  <p className="track-msg">Enter your tracking ID</p>
                  <input
                    className="form-control  track-input"
                    type="text"
                    placeholder="Tracking ID"
                  />

                  <div className="d-grid py-5">
                    <button type="button" className="yellow-bg2">
                      <Link to="/" className="track-link">
                        Track
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default TrackOrder;
