import React from "react";

function SenderDetails() {
  return (
    <main className="mt-5 pt-3 px-5">
      <form className="row g-4">
        <div className="col">
          <p className="main-title">Pickup Details</p>
          <div className="col">
            <label htmlFor="fullName" className="form-label label">
              Sender
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Name &amp; Surname"
              id="fullName"
            />
          </div>
          <div className="col">
            <label htmlFor="address" className="form-label label">
              Address
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Street name, number, &amp; other details"
              id="address"
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
              id="landmark"
            />
          </div>
          <div className="col">
            <label htmlFor="addInfo" className="form-label label">
              Additional Info - Optional
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Name or number"
              id="addInfo"
            />
          </div>
          <div className="col">
            <label htmlFor="phoneNumber" className="form-label label">
              Phone number
            </label>
            <input
              type="tel"
              className="form-control main-input"
              id="phoneNumber"
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
              id="country"
              placeholder="Country"
            />
          </div>
          <div className="col">
            <label htmlFor="receiver" className="form-label label">
              Receiver
            </label>
            <input
              type="text"
              className="form-control main-input"
              id="receiver"
              placeholder="Name &amp; Surname"
            />
          </div>
          <div className="col">
            <label htmlFor="address" className="form-label label">
              Address
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Street name, number, &amp; other details"
              id="address"
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
                id="zipCode"
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
                id="city"
                placeholder="Paris"
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="addInfo" className="form-label label">
              Additional Info - Optional
            </label>
            <input
              type="text"
              className="form-control main-input"
              placeholder="Name or number"
              id="addInfo"
            />
          </div>

          <div className="col">
            <label htmlFor="phoneNumber" className="form-label label">
              Phone number
            </label>
            <div className="col input-group mb-3">
              <div class="input-group-prepend ">
                <span className="" id="basic-addon3">
                  <select className="form-select">
                    <option selected>+33</option>
                    <option value="+234">+234</option>
                    <option value="+233">+233</option>
                    <option value="+33">+33</option>
                  </select>
                </span>
              </div>

              <input
                type="tel"
                class="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default SenderDetails;
