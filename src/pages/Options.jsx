import React from "react";
import CreditCardImg from "../assets/credit-card.png";
import AwardImg from "../assets/award.png";
import GiftImg from "../assets/gift.png";
import SlackImg from "../assets/slack.png";
import TruckImg from "../assets/truck.png";
import MapImg from "../assets/map-pin.png";
import "../styles/Options.css";

const Options = () => {
  return (
    <section className="container-fluid options-section">
      <h3 className="option-hero-title">Why Us?</h3>
      <div className="row options">
        <div className="col credit-card">
          <img src={CreditCardImg} className="option-img" alt="credit-card" />
          <h3 className="option-title">Seemless payment option. </h3>
          <p className="option-msg">
            At pickmeup service we provide you with different payment options
            for paying for our services.
          </p>
        </div>
        <div className="col yellow-bg">
          <img src={AwardImg} className="option-img" alt="award" />
          <h3 className="option-title">International Partners. </h3>
          <p className="option-msg">
            We parner with international logistics company for our express
            delivery aand cargo delivery to avoid dissapointment.
          </p>
        </div>
        <div className="col gift">
          <img src={GiftImg} className="option-img" alt="gift" />
          <h3 className="option-title">Timely Delivery</h3>
          <p className="option-msg">
            Delivery has never been this fast and esay.
          </p>
        </div>
      </div>
      <div className="row options">
        <div className="col yellow-bg">
          <img src={SlackImg} className="option-img" alt="insurance" />
          <h3 className="option-title">Insurance</h3>
          <p className="option-msg">
            Goods and parcel are insured according to international standard .
          </p>
        </div>
        <div className="col truck">
          <img src={TruckImg} className="option-img" alt="credit-card" />
          <h3 className="option-title">Free Pickup</h3>
          <p className="option-msg">
            Free pickup for all shipment. We are trustworty , reliable and
            professional .
          </p>
        </div>
        <div className="col yellow-bg">
          <img src={MapImg} className="option-img" alt="map-pin" />
          <h3 className="option-title">Track Shipment</h3>
          <p className="option-msg">We offer free pickup for all shipment.</p>
        </div>
      </div>
    </section>
  );
};

export default Options;
