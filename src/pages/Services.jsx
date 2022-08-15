import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="container-fluid service-section">
      <Navigation />

      <div className="container text-center">
        <h3 className="service-hero-title">Our Services</h3>
        <div className="row">
          <div
            className="col-sm-12 col-md-6 service"
            style={{ borderRight: "0.5rem solid #fcee21" }}
          >
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
          <div
            className="col-sm-12 col-md-6 service"
            style={{ borderLeft: "0.5rem solid #fcee21" }}
          >
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

          <div
            className="col-sm-12 col-md-6 service"
            style={{ borderRight: "0.5rem solid #fcee21" }}
          >
            <h3 className="service-title">Import</h3>
            <p className="service-msg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              reiciendis consequuntur voluptate! Suscipit unde pariatur esse
              itaque. Praesentium nostrum nihil officiis possimus deleniti ullam
              deserunt ratione quaerat adipisci, similique aut eveniet hic
              placeat repudiandae blanditiis cumque dolorem quidem, consequatur
              qui.
            </p>
          </div>
          <div
            className="col-sm-12 col-md-6 service"
            style={{ borderLeft: "0.5rem solid #fcee21" }}
          >
            <h3 className="service-title">Consultancy</h3>
            <p className="service-msg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              reiciendis consequuntur voluptate! Suscipit unde pariatur esse
              itaque. Praesentium nostrum nihil officiis possimus deleniti ullam
              deserunt ratione quaerat adipisci, similique aut eveniet hic
              placeat repudiandae blanditiis cumque dolorem quidem, consequatur
              qui.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
