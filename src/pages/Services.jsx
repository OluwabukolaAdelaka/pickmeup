import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="container-fluid service-section overflow-hidden">
      <Navigation />

      <div className="container text-center">
        <h3 className="service-hero-title">Our Services</h3>
        <div className="row">
          <div className="col service ">
            <h3 className="service-title">International Delivery</h3>
            <p className="service-msg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              reiciendis consequuntur voluptate! Suscipit unde pariatur esse
              itaque. Praesentium nostrum nihil officiis possimus deleniti ullam
              deserunt ratione quaerat adipisci, similique aut eveniet hic
              placeat repudiandae blanditiis cumque dolorem quidem, consequatur
              qui.
            </p>
          </div>
          <div className="col service">
            <h3 className="service-title">Cargo Service</h3>
            <p className="service-msg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              reiciendis consequuntur voluptate! Suscipit unde pariatur esse
              itaque. Praesentium nostrum nihil officiis possimus deleniti ullam
              deserunt ratione quaerat adipisci, similique aut eveniet hic
              placeat repudiandae blanditiis cumque dolorem quidem, consequatur
              qui.
            </p>
          </div>
          <div className="row">
            <div className="col service">
              <h3 className="service-title">Import</h3>
              <p className="service-msg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                reiciendis consequuntur voluptate! Suscipit unde pariatur esse
                itaque. Praesentium nostrum nihil officiis possimus deleniti
                ullam deserunt ratione quaerat adipisci, similique aut eveniet
                hic placeat repudiandae blanditiis cumque dolorem quidem,
                consequatur qui.
              </p>
            </div>
            <div className="col service">
              <h3 className="service-title">Consultancy</h3>
              <p className="service-msg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                reiciendis consequuntur voluptate! Suscipit unde pariatur esse
                itaque. Praesentium nostrum nihil officiis possimus deleniti
                ullam deserunt ratione quaerat adipisci, similique aut eveniet
                hic placeat repudiandae blanditiis cumque dolorem quidem,
                consequatur qui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
