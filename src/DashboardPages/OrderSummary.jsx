import React, { useContext } from "react";
import { MainContext } from "../components/ShipContext";
import { MdEdit } from "react-icons/md";

function OrderSummary() {
  const { finalValues, setCurrentStep } = useContext(MainContext);
  return (
    <main className="container">
      <p className="main-title mt-5">Review your shipping information</p>
      <div className="card mb-3">
        <div className="card-body">
          <div>
            <h6 className="ps-4">PICKUP FROM</h6>
            <div className="mb-5">
              {finalValues.map((data) => (
                <ul
                  key={data.fullNameSender}
                  style={{ color: "rgba(62, 62, 62, 0.5)", fontWeight: "600" }}
                >
                  <li className="pb-2">{data.fullNameSender}</li>
                  <li className="pb-2">{data.addressSender}</li>
                  <li className="pb-2">{data.landMark}</li>
                  <li className="pb-2">{data.phoneNumberSender}</li>
                  <button className="change-btn">
                    Edit <MdEdit />
                  </button>
                </ul>
              ))}
            </div>
            <p className="ps-4">SHIPPING METHOD</p>
            <div>
              {finalValues.map((data) => (
                <ul
                  key={data.fullNameReceiver}
                  style={{ color: "rgba(62, 62, 62, 0.5)", fontWeight: "600" }}
                >
                  <li className="pb-2">{data.fullNameReceiver}</li>
                  <li className="pb-2">{data.addressReceiver}</li>
                  <li className="pb-2">{data.city}</li>
                  <li className="pb-2">{data.phoneNumberReceiver}</li>
                  <button className="change-btn">
                    Edit <MdEdit />
                  </button>
                </ul>
              ))}
            </div>
          </div>

          <div className="row justify-content-between border-top pt-5 pb-2">
            <div className="col">
              <h6>SHIPPING METHOD</h6>
              <p className="mt-3">Express Delivery</p>
            </div>
            <div className="col text-center">
              <h6>COST</h6>
              <p className="mt-3">&#8358;23,400</p>
            </div>
            <div className="col text-center">
              <button className="change-btn">
                Change <MdEdit />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <div className="row justify-content-between pt-3 pb-2">
            <div className="col">
              <h6>ITEM CATEGORY</h6>
              {finalValues.map((data) => (
                <p key={data.fullNameSender} className="mt-3">
                  {data.itemCategory}
                </p>
              ))}
            </div>
            <div className="col text-center">
              <h6>ITEM VALUE</h6>
              {finalValues.map((data) => (
                <p key={data.fullNameSender} className="mt-3">
                  {data.itemValue}
                </p>
              ))}
            </div>
            <div className="col text-center">
              <button className="change-btn">
                Change <MdEdit />
              </button>
            </div>
          </div>

          <div className="row justify-content-between border-top pt-3 pb-2">
            <div className="col">
              <h6>ITEM DESCRIPTION</h6>
              {finalValues.map((data) => (
                <p key={data.fullNameSender} className="mt-3">
                  {data.itemDetails}
                </p>
              ))}
            </div>
            <div className="col"></div>
            <div className="col text-center">
              <button className="change-btn">
                Change <MdEdit />
              </button>
            </div>
          </div>

          <div className="row justify-content-between border-top pt-3 pb-2">
            <div className="col">
              <h6>QUANTITY</h6>
              {finalValues.map((data) => (
                <p key={data.fullNameSender} className="mt-3">
                  {data.itemQty}
                </p>
              ))}
            </div>
            <div className="col text-center">
              <h6>WEIGHT</h6>
              {finalValues.map((data) => (
                <p key={data.fullNameSender} className="mt-3">
                  {data.itemWeight}
                </p>
              ))}
            </div>
            <div className="col text-center">
              <button className="change-btn">
                Change <MdEdit />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-between pt-3">
            <div className="col">
              <h6>COUPON</h6>
              <p className="mt-3">Got a coupon code?</p>
            </div>
            <div className="col"></div>
            <div className="col text-center">
              <button className="change-btn">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row btn-container text-center">
        <div className="col-md-6">
          <button
            type="button"
            className="back-btn btn btn-lg"
            onClick={() => setCurrentStep(2)}
          >
            Back
          </button>
        </div>
        <div className="col-md-6">
          <button
            type="button"
            className="continue-btn btn btn-lg"
            onClick={() => setCurrentStep(4)}
          >
            Payment
          </button>
        </div>
      </div>
      {/* <main className="mt-5 pt-3 px-5">
        <p className="main-title">Review your shipping information</p>
        <div>
          <p>PICKUP FROM</p>
          <div>
            {finalValues.map((data) => (
              <ul key={data.fullNameSender}>
                <li>{data.fullNameSender}</li>
                <li>{data.AddressSender}</li>
                <li>{data.landMark}</li>
                <li>{data.phoneNumberSender}</li>
                <button className="btn btn-primary">Edit</button>
              </ul>
            ))}
          </div>
          <p>SHIPPING METHOD</p>
          <div>
            {finalValues.map((data) => (
              <ul key={data.fullNameReceiver}>
                <li>{data.fullNameReceiver}</li>
                <li>{data.AddressReceiver}</li>
                <li>{data.city}</li>
                <li>{data.phoneNumberReceiver}</li>
                <button className="btn btn-primary">Edit</button>
              </ul>
            ))}
          </div>
        </div>

        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">SHIPPING METHOD</th>
              <th scope="col">COST</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Express Delivery</td>
              <td>&#8358;23,400</td>
              <td>
                <button className="btn">Change</button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">ITEM CATEGORY</th>
              <th scope="col">ITEM VALUE</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <button className="btn">Change</button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">ITEM DESCRIPTION</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <button className="btn">Change</button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">QUANTITY</th>
              <th scope="col">WEIGHT</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <button className="btn">Change</button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col">COUPON</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Got a coupon code?</td>
              <td>
                <button className="btn">Apply</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row btn-container text-center">
          <div className="col-md-6">
            <button
              type="button"
              className="back-btn btn btn-lg"
              onClick={() => setCurrentStep(2)}
            >
              Back
            </button>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="continue-btn btn btn-lg"
              onClick={() => setCurrentStep(4)}
            >
              Continue
            </button>
          </div>
        </div>
      </main> */}
    </main>
  );
}

export default OrderSummary;
