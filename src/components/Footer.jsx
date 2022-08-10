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
      <div className="footer-nav">
        <img src={Logo} alt="logo" />
        <ul className="footer-navlinks">
          <li>
            <Link className="footer-navlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="footer-navlink" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="footer-navlink" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="footer-navlink" to="/contact">
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
