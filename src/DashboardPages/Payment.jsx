import React, { useContext } from "react";
import { MainContext } from "./../components/ShipContext";
import "../styles/Payment.css";
import Complete from "../assets/complete.png";
import { Link } from "react-router-dom";

function Payment() {
  const { setCurrentStep } = useContext(MainContext);

  return (
    <main className="container">
      <p className="main-title text-center mt-4">Payment Method</p>
      <div className="card mt-4">
        <div className="card-body">
          <p className="payment-hero">How would you like to make payment?</p>
          <div className="d-flex">
            <div className="form-check me-5 mb-5">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label " htmlFor="flexRadioDefault1">
                Wallet
              </label>
            </div>
            <div className="form-check  me-5">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label " htmlFor="flexRadioDefault1">
                Card
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
              />
              <label className="form-check-label " htmlFor="flexRadioDefault1">
                Transfer
              </label>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h6 className="payment-title pb-4">PAY WITH WALLET</h6>
              <p className="payment-text">Current balance: 0.00</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h6 className="payment-title pb-4">PAY WITH CARD</h6>
              <p className="payment-text">Master, Visa or Verve Card</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h6 className="payment-title">PAY WITH TRANSFER</h6>
              <p className="payment-text">Account Name: Pickmeup Innovation</p>
              <p className="payment-text">Account Number: 1002945594</p>
              <p className="payment-text">Bank: VFD Microfinance Bank</p>
            </div>
          </div>

          <div className="row btn-container text-center">
            <div className="col-md-6">
              <button
                type="button"
                className="back-btn btn btn-lg"
                onClick={() => setCurrentStep(3)}
              >
                Close
              </button>
            </div>

            <div className="col-md-6">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="continue-btn btn btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Pay &#8358;23,400
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body text-center p-5">
                      <img
                        src={Complete}
                        className="card-img-top img-fluid mb-4"
                        alt="..."
                        style={{
                          width: "25%",
                          height: "auto",
                        }}
                      />
                      <h6
                        className="card-title pb-2"
                        style={{
                          color: "#1e1e1e",
                          fontWeight: "500",
                          fontSize: "1.5rem",
                        }}
                      >
                        Hey, James
                        <br />
                        Your Order has been confirmed
                      </h6>
                      <p
                        className="card-text"
                        style={{
                          color: "#1e1e1e",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        We’ll send you a shipping tracking code as soon as your
                        order is proceed and shipped.
                      </p>
                      <div className="col ">
                        <button
                          type="button"
                          className="continue-btn btn btn-lg"
                        >
                          <Link to="/dashboard" className="btn-link">
                            Complete
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Payment;
