import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function FundWallet() {
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
          <div className="row justify-content-center align-items-center ">
            <div className="col-sm-12 col-md-6 ">
              <div className="card border border-0 h-100">
                <div className="card-body">
                  <div className="text-end me-2">
                    <Link to="/dashboard">
                      <AiOutlineClose size={30} style={{ color: "#3e3e3e" }} />
                    </Link>
                  </div>
                  <h5 className="track-title">Fund Wallet</h5>
                  <p className="track-msg">Enter amount to add</p>
                  <input
                    className="form-control track-input"
                    type="text"
                    placeholder="$10000"
                  />

                  <div className="d-grid py-5">
                    <button type="button" className="yellow-bg2">
                      <Link to="/fund" className="track-link">
                        Fund
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

export default FundWallet;
