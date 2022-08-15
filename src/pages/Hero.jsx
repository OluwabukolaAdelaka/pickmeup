import React from "react";
import HeroImg from "../assets/pana.png";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <main className="container-fluid hero-section">
      <div className="row d-flex justify-content-around">
        <div className=" col-sm-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="hero-msg">
            We are <span>Picmeup</span>
          </h1>
          <h1 className="hero-msg">
            it’s all about delivery parcels on time anywhere
          </h1>
          <p className="hero-text">
            We make sending and receiving percel accros the globe easy.
          </p>
          <Link to="/signup">
            <button className="hero-btn">Sign UP</button>
          </Link>
        </div>
        <div className=" col-sm-12 col-md-6">
          <img src={HeroImg} className="img-fluid" alt="hero-img" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
