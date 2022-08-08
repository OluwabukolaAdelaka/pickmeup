import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <main className="hero">
      <div className="row">
        <div className="col text-part">
          <h1>
            We are <span>Picmeup</span> it’s all about delivery parcels on time
            anywhere
          </h1>
        </div>
        <div className="col img-part"></div>
      </div>
    </main>
  );
};

export default Hero;
