import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import "../styles/Shipping.css";

function Shipping() {
  return (
    <>
      {/* Navbar Start */}
      <div className="container">
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
        <div className="row d-flex flex-column justify-content-center align-items-center ">
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

      {/* Sidebar Start */}
      {/* <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            Link with href
            </a>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            Button with data-bs-target
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Dropdown button
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </div>
            </div> */}
      {/* Sidebar End */}
    </>
  );
}

export default Shipping;
