import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../components/ShipContext";
import CompleteIcon from "../assets/complete.png";

function Complete() {
  const { setCurrentStep } = useContext(MainContext);

  return (
    <div className="container">
      <div className="card mt-5 text-center">
        <div className="card-body ">
          <img
            src={CompleteIcon}
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
            We’ll send you a shipping tracking code as soon as your order is
            proceed and shipped.
          </p>
          <div className="col mb-2">
            <button
              type="button"
              className="continue-btn btn btn-lg"
              onClick={() => setCurrentStep(1)}
            >
              <Link to="/dashboard" className="btn-link">
                Complete
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complete;
