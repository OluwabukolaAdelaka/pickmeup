import React from "react";
import Circle from "../assets/circle.png";
import CreditCardImg from "../assets/credit-card.png";
import AwardImg from "../assets/award.png";
import GiftImg from "../assets/gift.png";
import SlackImg from "../assets/slack.png";
import TruckImg from "../assets/truck.png";
import MapImg from "../assets/map-pin.png";
import "../styles/Options.css";

const Options = () => {
  return (
    <>
      <div className="row pt-5 options-section">
        <div className="col"></div>
        <div className="col-sm-12 col-md-8">
          <div className="card border-light d-flex justify-content-center align-items-center">
            <img src={Circle} className="card-img img-fluid" alt="..." />
            <div className="card-img-overlay pt-5">
              <h3 className="text-center mb-5">Why Us?</h3>
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div className="col text-center">
                  <div
                    className="card p-4"
                    style={{ backgroundColor: "#efefef" }}
                  >
                    <div className="card-body">
                      <img
                        src={CreditCardImg}
                        className="img-fluid"
                        alt="..."
                      />
                      <h5 className="card-title mycard-title">
                        Seemless payment option
                      </h5>
                      <p className="card-text mycard-msg">
                        At pickmeup service we provide you with different
                        payment options for paying for our services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div
                    className="card p-4"
                    style={{ backgroundColor: "rgba(251, 237, 49, 0.4)" }}
                  >
                    <div className="card-body">
                      <img src={AwardImg} className="img-fluid" alt="..." />
                      <h5 className="card-title mycard-title">
                        International Partners
                      </h5>
                      <p className="card-text mycard-msg">
                        We parner with international logistics company for our
                        express delivery aand cargo delivery to avoid
                        dissapointment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div
                    className="card p-4"
                    style={{ backgroundColor: "#e5e5e5" }}
                  >
                    <div className="card-body">
                      <img src={GiftImg} className="img-fluid" alt="..." />
                      <h5 className="card-title mycard-title">
                        Timely Delivery
                      </h5>
                      <p className="card-text mycard-msg pb-5">
                        Delivery has never been this fast and esay.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div
                    className="card p-4"
                    style={{ backgroundColor: "rgba(251, 237, 49, 0.4)" }}
                  >
                    <div className="card-body">
                      <img src={SlackImg} className="img-fluid" alt="..." />
                      <h5 className="card-title mycard-title">Insurance</h5>
                      <p className="card-text mycard-msg">
                        Goods and parcel are insured according to international
                        standard .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div
                    className="card p-4"
                    style={{ backgroundColor: "#d9d9d9" }}
                  >
                    <div className="card-body">
                      <img src={TruckImg} className="img-fluid" alt="..." />
                      <h5 className="card-title mycard-title">Free Pickup</h5>
                      <p className="card-text mycard-msg">
                        Free pickup for all shipment. We are trustworty ,
                        reliable and professional.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div
                    className="card p-4"
                    style={{ backgroundColor: "rgba(251, 237, 49, 0.4)" }}
                  >
                    <div className="card-body">
                      <img src={MapImg} className="img-fluid" alt="..." />
                      <h5 className="card-title mycard-title">
                        Track Shipment
                      </h5>
                      <p className="card-text mycard-msg pb-4">
                        We offer free pickup for all shipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
    // <section className="container-fluid options-section d-flex flex-column align-items-center //justify-content-center">
    //   <h3 className="option-hero-title">Why Us?</h3>
    //   <div className="row options">
    //     <div
    //       className="col-sm-12 col-md-4 credit-card"
    //       style={{
    //         borderBottom: "1rem solid #ffffff",
    //         borderLeft: "1rem solid #ffffff",
    //       }}
    //     >
    //       <img src={CreditCardImg} className="option-img" alt="credit-card" />
    //       <h3 className="option-title text-center">Seemless payment option.</h3>
    //       <p className="option-msg">
    //         At pickmeup service we provide you with different payment options
    //         for paying for our services.
    //       </p>
    //     </div>
    //     <div
    //       className="col-sm-12 col-md-4 yellow-bg"
    //       style={{
    //         borderLeft: "0.5rem solid #ffffff",
    //         borderRight: "0.5rem solid #ffffff",
    //         borderBottom: "1rem solid #ffffff",
    //       }}
    //     >
    //       <img src={AwardImg} className="option-img" alt="award" />
    //       <h3 className="option-title">International Partners. </h3>
    //       <p className="option-msg">
    //         We parner with international logistics company for our express
    //         delivery aand cargo delivery to avoid dissapointment.
    //       </p>
    //     </div>
    //     <div
    //       className="col-sm-12 col-md-4 gift"
    //       style={{
    //         borderRight: "1rem solid #ffffff",
    //         borderBottom: "1rem solid #ffffff",
    //       }}
    //     >
    //       <img src={GiftImg} className="option-img" alt="gift" />
    //       <h3 className="option-title">Timely Delivery</h3>
    //       <p className="option-msg">
    //         Delivery has never been this fast and esay.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="row options">
    //     <div
    //       className="col-sm-12 col-md-4 yellow-bg"
    //       style={{
    //         borderLeft: "1rem solid #ffffff",
    //         borderBottom: "1rem solid #ffffff",
    //       }}
    //     >
    //       <img src={SlackImg} className="option-img" alt="insurance" />
    //       <h3 className="option-title">Insurance</h3>
    //       <p className="option-msg">
    //         Goods and parcel are insured according to international standard .
    //       </p>
    //     </div>
    //     <div
    //       className="col-sm-12 col-md-4 truck"
    //       style={{
    //         borderLeft: "0.5rem solid #ffffff",
    //         borderRight: "0.5rem solid #ffffff",
    //         borderBottom: "1rem solid #ffffff",
    //       }}
    //     >
    //       <img src={TruckImg} className="option-img" alt="credit-card" />
    //       <h3 className="option-title">Free Pickup</h3>
    //       <p className="option-msg">
    //         Free pickup for all shipment. We are trustworty , reliable and
    //         professional .
    //       </p>
    //     </div>
    //     <div
    //       className="col-sm-12 col-md-4 yellow-bg"
    //       style={{
    //         borderRight: "1rem solid #ffffff",
    //         borderBottom: "1rem solid #ffffff",
    //       }}
    //     >
    //       <img src={MapImg} className="option-img" alt="map-pin" />
    //       <h3 className="option-title">Track Shipment</h3>
    //       <p className="option-msg">We offer free pickup for all shipment.</p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Options;
