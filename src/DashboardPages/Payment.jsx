import React, { useContext } from "react";
import { MainContext } from "./../components/ShipContext";
import "../styles/Payment.css";

function Payment() {
  const { values, setValues, setCurrentStep } = useContext(MainContext);

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
                name="wallet"
                onChange={(e) =>
                  setValues({ ...values, wallet: e.target.checked })
                }
                value={values["wallet"]}
              />
              <label className="form-check-label " htmlFor="flexRadioDefault1">
                Wallet
              </label>
            </div>
            <div className="form-check  me-5">
              <input
                className="form-check-input"
                type="radio"
                name="card"
                onChange={(e) =>
                  setValues({ ...values, card: e.target.checked })
                }
                value={values["card"]}
              />
              <label className="form-check-label " htmlFor="flexRadioDefault1">
                Card
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="transfer"
                onChange={(e) =>
                  setValues({ ...values, transfer: e.target.checked })
                }
                value={values["transfer"]}
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
              <button
                type="button"
                className="continue-btn btn btn-lg"
                onClick={() => setCurrentStep(5)}
              >
                Pay &#8358;23,400
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Payment;
