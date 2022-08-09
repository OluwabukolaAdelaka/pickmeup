import React from "react";
import HeroImg from "../assets/pana.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <main className="container-fluid hero-section">
      <div className="row">
        <div className="col col-md-5">
          <h1 className="hero-msg">
            We are <span>Picmeup</span>
          </h1>
          <h1 className="hero-msg">
            it’s all about delivery parcels on time anywhere
          </h1>
          <p className="hero-text">
            We make sending and receiving percel accros the globe easy.
          </p>
          <button className="hero-btn">Sign UP</button>
        </div>
        <div className="col col-md-7">
          <img src={HeroImg} className="img-fluid" alt="hero-img" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
