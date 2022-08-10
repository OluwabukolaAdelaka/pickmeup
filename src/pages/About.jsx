import React from "react";
import Navigation from "../components/Navigation";
import "../styles/About.css";

const About = () => {
  return (
    <section className="container-fluid about-section">
      <Navigation />
      <div>
        <h3 className="title-about">ABOUT</h3>
        <h3 className="title-us">US</h3>
      </div>
      <p className="about-msg">
        Pickmeup is a tech company aimed at making life comfortable through
        development in the transport sector and other sevices.
      </p>
    </section>
  );
};

export default About;
