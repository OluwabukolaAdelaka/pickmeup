import React, { useContext } from "react";
import { MainContext } from "../components/ShipContext";
import Logo from "../assets/pickmeup-logo.png";
import "../styles/ShippingDetails.css";
import ItemDescription from "./ItemDescription";
import OrderSummary from "./OrderSummary";
import SenderDetails from "./SenderDetails";

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
    }
  }

  // const [values, setValues] = useState({
  //   fullNameSender: "",
  //   addressSender: "",
  //   landMark: "",
  //   addInfoSender: "",
  //   phoneNumberSender: "",
  //   country: "",
  //   fullNameReceiver: "",
  //   addressReceiver: "",
  //   zipCode: "",
  //   city: "",
  //   addInfoReceiver: "",
  //   phoneNumberReceiver: "",
  //   itemCategory: "",
  //   itemValue: "",
  //   itemDetails: "",
  //   itemQty: "",
  //   itemWeight: "",
  // });

  // function DisplayPages() {
  //   if (page === 0) {
  //     return <SenderDetails />;
  //   } else if (page === 1) {
  //     return <ItemDescription />;
  //   } else {
  //     return <OrderSummary />;
  //   }
  // }

  // const handleChange = (input) => (e) => {
  //   setValues({ [input]: e.target.value });
  // };

  return (
    <div className="container-fluid mb-5">
      <nav className="navbar navbar-expand-lg bg-white border-dark border-bottom border-1 sticky-top">
        <img src={Logo} className="me-auto" alt="company logo" />
      </nav>

      <div className="container ">
        <>{displayPages(currentStep)}</>
        {/* <div className="row btn-container text-center">
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
        </div> */}
      </div>
    </div>
  );
}

export default ShippingDetails;
