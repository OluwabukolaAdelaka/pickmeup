import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Shipping.css";

function Shipping() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container" style={{ backgroundColor: "#eeeeee" }}>
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
      </div>
      {/* Navbar End */}

      {/* Main content start */}
      <main className="container mt-5">
        <div className="row justify-content-center align-items-center ">
          <div className="col-sm-12 col-md-6">
            <div className="card border border-0">
              <div className="card-body">
                <Link to="/dashboard">
                  <MdArrowBackIosNew size={40} className="shipping-icon" />
                </Link>
                <h3 className="choose">Choose an option</h3>
                <p className="select">Select what you want to do</p>

                <div className="d-grid gap-5 mx-4">
                  <button type="button" className=" yellow-bg">
                    <Link to="/shippingDetails" className="btn-link">
                      Express Delivery
                    </Link>
                  </button>

                  <button type="button" className="white-bg">
                    <Link to="/shippingDetails" className=" btn-link">
                      Cargo/Import
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Main content end */}
    </>
  );
}

export default Shipping;
