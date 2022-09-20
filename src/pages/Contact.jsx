import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="container-fluid contact-section">
      <Navigation />

      <div className="row">
        <div className="col-sm-12 col-lg-3"></div>
        <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center contact-details">
          <h3 className="contact-title1">SEND US A</h3>
          <h3 className="contact-title2">MESSAGE</h3>
          <div className="col  contact-form">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="General"
                  style={{ backgroundColor: "#f7f4f4", height: "3rem" }}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  style={{
                    height: "10rem",
                    backgroundColor: "#f7f4f4",
                  }}
                  placeholder="Mesage"
                ></textarea>
              </div>
              <div className="d-grid col-12 mx-auto d-flex justify-content-center">
                <button className="btn send-btn" type="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-12 col-md-3"></div>
      </div>
    </section>
  );
};

export default Contact;
