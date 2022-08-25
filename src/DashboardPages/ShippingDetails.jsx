import React from "react";
import Logo from "../assets/pickmeup-logo.png";
import "../styles/ShippingDetails.css";
import DeliveryDetails from "./DeliveryDetails";
import ItemDescription from "./ItemDescription";
import OrderSummary from "./OrderSummary";
import SenderDetails from "./SenderDetails";

function ShippingDetails() {
  return (
    <div className="container-fluid">
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white border-dark border-bottom border-1 sticky-top">
        {/* offcanvas trigger */}
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span
            className="navbar-toggler-icon"
            data-bs-target="#offcanvasExample"
          ></span>
        </button>
        {/* offcanvas trigger */}
        <img src={Logo} className="me-auto" alt="company logo" />
      </nav>
      {/* Navbar End */}

      {/* Sidebar Start */}

      <div
        className="offcanvas offcanvas-start sidebarNav"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header mt-3">
          <h5
            className="offcanvas-title shipment-title"
            id="offcanvasExampleLabel"
          >
            Book Shipment
          </h5>
          <button
            type="button"
            className="btn-close d-lg-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="dropdown mt-2">
            <ul className="">
              <li className="shipment-list">Sender Details</li>
              <li className="shipment-list">Delivery Details</li>
              <li className="shipment-list">Item Description</li>
              <li className="shipment-list">Order Summary</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sidebar End */}

      {/* Main content */}

      <SenderDetails />
      <DeliveryDetails />
      <ItemDescription />
      <OrderSummary />
    </div>
  );
}

export default ShippingDetails;
