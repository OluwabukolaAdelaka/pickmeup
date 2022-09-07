import React, { useState } from "react";
import Logo from "../assets/pickmeup-logo.png";
import "../styles/ShippingDetails.css";
import ItemDescription from "./ItemDescription";
import OrderSummary from "./OrderSummary";
import SenderDetails from "./SenderDetails";

function ShippingDetails() {
  const [page, setPage] = useState(0);

  function DisplayPages() {
    if (page === 0) {
      return <SenderDetails />;
    } else if (page === 1) {
      return <ItemDescription />;
    } else {
      return <OrderSummary />;
    }
  }
  return (
    <div className="container-fluid mb-5">
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white border-dark border-bottom border-1 sticky-top">
        <img src={Logo} className="me-auto" alt="company logo" />
      </nav>
      {/* Navbar End */}

      {/* Main content */}

      <div className="container ">
        <>{DisplayPages()}</>
        <div className="row btn-container text-center">
          <div className="col-md-6">
            <button
              type="button"
              className="go-back-btn btn btn-lg"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              disabled={page === 0}
            >
              Go Back
            </button>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="continue-btn btn btn-lg"
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
              disabled={page === page.length - 1}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
