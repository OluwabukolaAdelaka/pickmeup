import React, { useContext } from "react";
import { MainContext } from "../components/ShipContext";

function ItemDescription() {
  const { values, setValues, setCurrentStep, displaySummary } =
    useContext(MainContext);

  return (
    <div className="container mt-5">
      <p className="main-title mt-5">Enter Details of item you want to ship</p>
      <div className="card">
        <div className="card-body">
          <form className="row g-4">
            <div className="col-md-6">
              <label htmlFor="itemCategory" className="form-label label">
                Select item category
              </label>
              <select
                className="form-select form-select-lg main-input"
                aria-label="form-select-lg"
                name="itemCategory"
                onChange={(e) =>
                  setValues({ ...values, itemCategory: e.target.value })
                }
                value={values["itemCategory"]}
              >
                <option>Kitchen wares</option>
                <option>Electronics</option>
                <option>Batteries</option>
                <option>Beauty</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="itemValue" className="form-label label">
                Item value()
              </label>
              <input
                type="text"
                name="itemValue"
                onChange={(e) =>
                  setValues({ ...values, itemValue: e.target.value })
                }
                value={values["itemValue"]}
                className="form-control main-input"
              />
            </div>
            <div className="col-12">
              <label htmlFor="details" className="form-label label">
                Detailed item description
              </label>

              <textarea
                className="form-control"
                placeholder="Enter the detailed description of the item you want to ship"
                name="itemDetails"
                onChange={(e) =>
                  setValues({ ...values, itemDetails: e.target.value })
                }
                value={values["itemDetails"]}
                style={{ height: "10rem" }}
              ></textarea>
            </div>
            <div className="col-md-6">
              <label htmlFor="qty" className="form-label label">
                Quantity
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setValues({ ...values, itemQty: e.target.value })
                }
                value={values["itemQty"]}
                className="form-control main-input"
                placeholder="20"
                name="itemQty"
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
                name="itemWeight"
                onChange={(e) =>
                  setValues({ ...values, itemWeight: e.target.value })
                }
                value={values["itemWeight"]}
              />
            </div>
            <div className="col-md-6">
              <button
                type="button"
                className="back-btn btn btn-lg"
                onClick={() => setCurrentStep(1)}
              >
                Back
              </button>
            </div>
            <div className="col-md-6">
              <button
                type="button"
                className="continue-btn btn btn-lg"
                onClick={() => {
                  displaySummary();
                  setCurrentStep(3);
                }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ItemDescription;
