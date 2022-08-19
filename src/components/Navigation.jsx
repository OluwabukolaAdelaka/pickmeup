import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg pmu-container fixed-top">
      <div className="container-fluid">
        <img src={Logo} className="logo" alt="company logo" />
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link pmu-navlinks" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pmu-navlinks" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pmu-navlinks" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pmu-navlinks" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/signin">
            <button className="sign-in">Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
