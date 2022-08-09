import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="container-fluid contact-section">
      <h3 className="contact-title1">SEND US A</h3>
      <h3 className="contact-title2">MESSAGE</h3>
      <div>
        <form className="contact-form">
          <div className="form-control">
            <input type="text" className="form-input" placeholder="Name" />
          </div>
          <div className="form-control">
            <input type="email" className="form-input" placeholder="Email" />
          </div>
          <div className="form-control">
            <input type="text" className="form-input" placeholder="General" />
          </div>
          <div className="form-control-message">
            <textarea rows="5" placeholder="Message"></textarea>
          </div>
          {/* <button type="submit" className="send-btn">
            Send
          </button> */}
          <div className="btn">
            <button type="submit" className="send-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
