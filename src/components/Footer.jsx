import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import { Link } from "react-router-dom";
import InstagramIcon from "../assets/instagram.png";
import TwitterIcon from "../assets/twitter.png";
import FacebookIcon from "../assets/facebook.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="navbar navbar-expand-lg d-sm-block d-flex justify-content-around">
        <div className="container-fluid">
          <img src={Logo} alt="company logo" />

          <ul className="navbar-nav footer-navlinks d-flex">
            <li className="nav-item">
              <Link className="nav-link footer-navlink" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link footer-navlink" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link footer-navlink" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link footer-navlink" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="footer-icons">
            <Link to="/">
              <img src={InstagramIcon} className="footer-icon" alt="icon" />
            </Link>
            <Link to="/">
              <img src={TwitterIcon} className="footer-icon" alt="icon" />
            </Link>
            <Link to="/">
              <img src={FacebookIcon} className="footer-icon" alt="icon" />
            </Link>
          </div>
        </div>
      </nav>

      {/* address */}
      <div className="details">
        <p>+2348135330301</p>
        <p>+2348132578261</p>
        <p className="address">1 Salami street Mende Maryland Lagos, Nigeria</p>
      </div>
    </footer>
  );
};

export default Footer;
