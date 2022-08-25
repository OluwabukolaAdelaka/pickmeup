import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import AccountIcon from "../assets/account.png";
import ShipIcon from "../assets/ship.png";
import ModuleIcon from "../assets/module.png";
import { Link } from "react-router-dom";
import "../styles/DashboardNav.css";

function DashboardNav() {
  return (
    <nav className="navbar navbar-expand-lg border-dark bg-white border-bottom border-2 sticky-top">
      <div className="container-fluid">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-3 mt-md-0">
            <li className="nav-item">
              <Link className="nav-link dbNav-links" to="/">
                Account
                <img
                  src={AccountIcon}
                  className="icon ps-2 pb-1"
                  alt="account icon"
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link dbNav-links" to="/shipping">
                Ship Now
                <img
                  src={ShipIcon}
                  className="icon ps-2 pb-1"
                  alt="ship icon"
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link dbNav-links" to="/">
                Module
                <img
                  src={ModuleIcon}
                  className="icon ps-2 pb-1"
                  alt="module icon"
                />
              </Link>
            </li>
          </ul>
          <Link to="/about">
            <button className="dbNav-abt">About us</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNav;
