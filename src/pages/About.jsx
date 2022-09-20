import React from "react";
import Navigation from "../components/Navigation";
import "../styles/About.css";

const About = () => {
  return (
    <section className="container-fluid about-section">
      <Navigation />
      <div className="row">
        <div className="col-sm-12 col-lg-4"></div>
        <div className="col-sm-12 col-lg-4">
          <h3 className="title-about">ABOUT</h3>
          <h3 className="title-us">US</h3>
          <p className="about-msg text-center">
            Pickmeup is a tech company aimed at making life comfortable through
            development in the transport sector and other sevices.
          </p>
        </div>
        <div className="col-sm-12 col-lg-4"></div>
      </div>
    </section>
  );
};

export default About;
