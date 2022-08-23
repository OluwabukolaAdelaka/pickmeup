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
    <section>
      <div className="row pt-5 d-flex justify-content-center align-items-center px-1">
        <div className="d-none col"></div>
        <div className="col-sm-12 col-md-8">
          <div className="card border-light d-flex justify-content-center align-items-center relative">
            <img
              src={Circle}
              className="d-none d-md-block card-img img-fluid relative"
              style={{ height: "55rem", width: "auto" }}
              alt="..."
            />

            {/* mobile options-card */}
            <div className="d-md-none card border-light pt-5 absolute">
              <h3 className="text-center mt-4  mycard-hero-title">Why Us?</h3>
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div className="col text-center">
                  <div
                    className="card p-4 border-light"
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
                    className="card p-4 border-light"
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
                    className="card p-4 border-light"
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
                    className="card p-4 border-light"
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
                    className="card p-4 border-light"
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
                    className="card p-4 border-light"
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

            {/* desktop options card */}
            <div className="d-none d-md-block card-img-overlay pt-3 absolute">
              <h3 className="text-center mt-4  mycard-hero-title">Why Us?</h3>
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                <div className="col text-center">
                  <div
                    className="card p-2 border-light"
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
                    className="card p-2 border-light"
                    style={{ backgroundColor: "rgba(251, 237, 49, 0.4)" }}
                  >
                    <div className="card-body">
                      <img src={AwardImg} className="img-fluid" alt="..." />
                      <h5 className="card-title mycard-title">
                        International Partners
                      </h5>
                      <p className="card-text mycard-msg">
                        We partner with international logistics company for
                        express and cargo delivery to avoid dissapointment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col text-center">
                  <div
                    className="card p-3 border-light"
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
                    className="card p-2 border-light"
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
                    className="card p-2 border-light"
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
                    className="card p-2 border-light"
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
        <div className="d-none col"></div>
      </div>
    </section>
  );
};

export default Options;
