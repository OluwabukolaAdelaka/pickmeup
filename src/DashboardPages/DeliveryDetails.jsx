import React from "react";

function DeliveryDetails() {
  return (
    <div className="container">
      <main className="mt-5 pt-3 px-5">
        <p className="main-title">Enter Details of item you want to ship</p>
        <div class="card">
          <div class="card-body">
            <form className="row g-4">
              <div className="col-md-6">
                <label htmlFor="itemCategory" className="form-label label">
                  Select item category
                </label>
                <select
                  className="form-select form-select-lg "
                  aria-label=".form-select-lg example"
                >
                  <option></option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="itemValue" className="form-label label">
                  Item value()
                </label>
                <input
                  type="text"
                  className="form-control main-input"
                  placeholder="Oluwafunmi Daniel"
                  id="itemValue"
                />
              </div>
              <div className="col-12">
                <label htmlFor="details" className="form-label label">
                  Detailed item description
                </label>

                <textarea
                  className="form-control"
                  placeholder="Enter the detailed description of the item you want to ship"
                  id="details"
                  style={{ height: "10rem" }}
                ></textarea>
              </div>
              <div className="col-md-6">
                <label htmlFor="weight" className="form-label label">
                  Quantity
                </label>
                <input
                  type="text"
                  className="form-control main-input"
                  placeholder="20"
                  id="weight"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="weight" className="form-label label">
                  Weight(KG)
                </label>
                <input
                  type="text"
                  className="form-control main-input"
                  placeholder="Enter weight"
                  id="weight"
                />
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default DeliveryDetails;
