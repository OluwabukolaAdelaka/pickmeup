import React, { useContext } from "react";
import "react-step-progress-bar/styles.css";
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
import StepNavigation from "./StepNavigation";

function ShippingDetails() {
  const labelArray = [
    "Sender Details",
    "Item Description",
    "Summary",
    "Payment",
    "Complete",
  ];
  const { currentStep, setCurrentStep } = useContext(MainContext);

  function updateStep(step) {
    setCurrentStep(step);
  }

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
    <div
      className="container-fluid mb-5"
      style={{ backgroundColor: "#eeeeee" }}
    >
      <nav className="navbar navbar-expand-lg bg-white border-dark border-bottom border-1 sticky-top">
        <img src={Logo} className="me-auto" alt="company logo" />
      </nav>

      <div className="container mt-5 pb-5">
        <div className="progressContainer">
          <Link to="/dashboard">
            <MdArrowBackIosNew size={20} className="back-icon mb-3" />
          </Link>
          {/* custom progressbar */}
          <StepNavigation labelArray={labelArray} updateStep={updateStep} />
        </div>

        <>{displayPages(currentStep)}</>
      </div>
    </div>
  );
}

export default ShippingDetails;
