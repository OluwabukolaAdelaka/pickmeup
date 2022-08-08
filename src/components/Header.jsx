import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg pmu-cont">
      <div className="container-fluid pmu-container">
        <img src={Logo} alt="company logo" />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 pmu-navitems">
            <li className="nav-item">
              <Link className="pmu-navlinks" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="pmu-navlinks" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="pmu-navlinks" to="/">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="pmu-navlinks" to="/">
                Contact
              </Link>
            </li>
          </ul>
          <button className="sign-in">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
