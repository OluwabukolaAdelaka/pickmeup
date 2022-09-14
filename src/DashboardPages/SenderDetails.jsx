import React, { useContext } from "react";
import { MainContext } from "../components/ShipContext";

function SenderDetails() {
  const { values, setValues, setCurrentStep } = useContext(MainContext);

  return (
    <main className="container mt-5">
      <form className="row g-4">
        <div className="col">
          <p className="main-title">Pickup Details</p>
          <div className="col">
            <label htmlFor="fullNameSender" className="form-label label">
              Sender
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Name &amp; Surname"
              name="fullNameSender"
              onChange={(e) =>
                setValues({ ...values, fullNameSender: e.target.value })
              }
              value={values["fullNameSender"]}
            />
          </div>
          <div className="col">
            <label htmlFor="addressSender" className="form-label label">
              Address
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Street name, number, &amp; other details"
              name="addressSender"
              onChange={(e) =>
                setValues({ ...values, addressSender: e.target.value })
              }
              value={values["addressSender"]}
            />
          </div>
          <div className="col">
            <label htmlFor="landmark" className="form-label label">
              Nearest busstop/Landmark
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Busstop or Landmark"
              name="landMark"
              onChange={(e) =>
                setValues({ ...values, landMark: e.target.value })
              }
              value={values["landMark"]}
            />
          </div>
          <div className="col">
            <label htmlFor="addInfoSender" className="form-label label">
              Additional Info - Optional
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Name or number"
              name="addInfoSender"
              onChange={(e) =>
                setValues({ ...values, addInfoSender: e.target.value })
              }
              value={values["addInfoSender"]}
            />
          </div>
          <div className="col">
            <label htmlFor="phoneNumberSender" className="form-label label">
              Phone number
            </label>
            <input
              type="tel"
              className="form-control main-input"
              name="phoneNumberSender"
              onChange={(e) =>
                setValues({ ...values, phoneNumberSender: e.target.value })
              }
              value={values["phoneNumberSender"]}
            />
          </div>
        </div>
        <div className="col">
          <p className="main-title">Delivery Details</p>
          <div className="col">
            <label htmlFor="country" className="form-label label">
              Country
            </label>
            <input
              type="text"
              className="form-control main-input"
              name="country"
              onChange={(e) =>
                setValues({ ...values, country: e.target.value })
              }
              value={values["country"]}
              placeholder="Country"
            />
          </div>
          <div className="col">
            <label htmlFor="fullNameReceiver" className="form-label label">
              Receiver
            </label>
            <input
              type="text"
              className="form-control main-input"
              name="fullnameReceiver"
              onChange={(e) =>
                setValues({ ...values, fullNameReceiver: e.target.value })
              }
              value={values["fullNameReceiver"]}
              placeholder="Name &amp; Surname"
            />
          </div>
          <div className="col">
            <label htmlFor="addressReceiver" className="form-label label">
              Address
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Street name, number, &amp; other details"
              name="addressReceiver"
              onChange={(e) =>
                setValues({ ...values, addressReceiver: e.target.value })
              }
              value={values["addressReceiver"]}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="zipCode" className="form-label label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control main-input"
                onChange={(e) =>
                  setValues({ ...values, zipCode: e.target.value })
                }
                value={values["zipCode"]}
                placeholder="75002"
              />
            </div>
            <div className="col-6">
              <label htmlFor="city" className="form-label label">
                Town/City
              </label>
              <input
                type="text"
                className="form-control main-input"
                onChange={(e) => setValues({ ...values, city: e.target.value })}
                value={values["city"]}
                placeholder="Paris"
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="addInfoReceiver" className="form-label label">
              Additional Info - Optional
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Name or number"
              name="addInfoReceiver"
              onChange={(e) =>
                setValues({ ...values, addInfoReceiver: e.target.value })
              }
              value={values["addInfoReceiver"]}
            />
          </div>

          <div className="col">
            <label htmlFor="phoneNumberReceiver" className="form-label label">
              Phone number
            </label>
            <div className="col input-group mb-3">
              <div className="input-group-prepend ">
                <span className="" id="basic-addon3">
                  <select className="form-select">
                    <option defaultValue={+33}>+33</option>
                    <option value="+234">+234</option>
                    <option value="+233">+233</option>
                    <option value="+44">+44</option>
                  </select>
                </span>
              </div>

              <input
                type="tel"
                name="phoneNumberReceiver"
                onChange={(e) =>
                  setValues({ ...values, phoneNumberReceiver: e.target.value })
                }
                value={values["phoneNumberReceiver"]}
                className="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="continue-btn btn btn-lg"
              onClick={() => setCurrentStep(2)}
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default SenderDetails;
