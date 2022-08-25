import React from "react";

function SenderDetails() {
  return (
    <div className="container">
      <main className="mt-5 pt-3 px-5">
        <p className="main-title">Please provide sender's details</p>
        <form className="row g-4">
          <div className="col-12">
            <label htmlFor="fullName" className="form-label label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Oluwafunmi Daniel"
              id="fullName"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="email" className="form-label label">
              Email address
            </label>
            <input
              type="email"
              className="form-control main-input"
              placeholder="johnstone@gmail.com"
              id="email"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="phoneNumber" className="form-label label">
              Phone number
            </label>
            <input
              type="text"
              placeholder="+44 (81) 223 344 56"
              className="form-control main-input"
              id="phoneNumber"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="postalCode" className="form-label label">
              Postal code
            </label>
            <input
              type="text"
              className="form-control main-input"
              id="postalCode"
              placeholder="000000"
            />
          </div>
          <div className="col-12">
            <label htmlFor="delivery" className="form-label label">
              Delivery
            </label>
            <input
              type="text"
              className="form-control main-input"
              id="delivery"
              placeholder="20, Aguda Street, Surulere"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="state" className="form-label label">
              State
            </label>
            <select
              class="form-select form-select-lg"
              aria-label=".form-select-sm example"
            >
              <option>Select state</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label label">
              City
            </label>
            <select
              class="form-select form-select-lg"
              aria-label=".form-select-sm example"
            >
              <option>Select city</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-6">
            <button type="button" className="btn btn-primary">
              Go Back
            </button>
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-primary">
              Continue
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SenderDetails;
