import React, { useContext } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { MainContext } from "../components/ShipContext";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/pickmeup-logo.png";
import "../styles/ShippingDetails.css";
import ItemDescription from "./ItemDescription";
import OrderSummary from "./OrderSummary";
import SenderDetails from "./SenderDetails";
import Payment from "./Payment";
import Complete from "./Complete";

function ShippingDetails() {
  const { currentStep } = useContext(MainContext);

  function displayPages(step) {
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return <SenderDetails />;

      case 2:
        return <ItemDescription />;

      case 3:
        return <OrderSummary />;

      case 4:
        return <Payment />;

      case 5:
        return <Complete />;
    }
  }

  return (
    <div className="container-fluid mb-5">
      <nav className="navbar navbar-expand-lg bg-white border-dark border-bottom border-1 sticky-top">
        <img src={Logo} className="me-auto" alt="company logo" />
      </nav>

      <div className="container mt-5">
        <Link to="/dashboard" className="absolute">
          <MdArrowBackIosNew size={20} className="back-icon mb-3" />
        </Link>
        <ProgressBar
          percent={((currentStep - 1) * 100) / 4}
          filledBackground="#fcee21"
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={`step ${accomplished ? "completed" : ""}`}>1</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={`step ${accomplished ? "completed" : ""}`}>2</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={`step ${accomplished ? "completed" : ""}`}>3</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={`step ${accomplished ? "completed" : ""}`}>4</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={`step ${accomplished ? "completed" : ""}`}>5</div>
            )}
          </Step>
        </ProgressBar>

        <>{displayPages(currentStep)}</>
      </div>
    </div>
  );
}

export default ShippingDetails;
