import React, { useContext } from "react";
import { MainContext } from "../components/ShipContext";
import Logo from "../assets/pickmeup-logo.png";
import "../styles/ShippingDetails.css";
import ItemDescription from "./ItemDescription";
import OrderSummary from "./OrderSummary";
import SenderDetails from "./SenderDetails";
import Payment from "./Payment";

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
    }
  }

  return (
    <div className="container-fluid mb-5">
      <nav className="navbar navbar-expand-lg bg-white border-dark border-bottom border-1 sticky-top">
        <img src={Logo} className="me-auto" alt="company logo" />
      </nav>

      <div className="container ">
        <>{displayPages(currentStep)}</>
      </div>
    </div>
  );
}

export default ShippingDetails;
