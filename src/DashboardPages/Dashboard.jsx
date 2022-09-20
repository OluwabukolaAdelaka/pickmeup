import React from "react";
import DashboardNav from "../components/DashboardNav";
import { Link } from "react-router-dom";
import WalletIcon from "../assets/wallet.png";
import FundWalletIcon from "../assets/fundwallet.png";
import TransactionIcon from "../assets/transaction.png";
import HeroImg from "../assets/hero-img.png";
import PlaneIcon from "../assets/international.png";
import CargoIcon from "../assets/cargo.png";
import ImportIcon from "../assets/import.png";
import ShipmentIcon from "../assets/shipment.png";
import EstimatorIcon from "../assets/estimator.png";
import ConverterIcon from "../assets/converter.png";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <main className="container">
      <DashboardNav />
      {/* Hero Container */}
      <h3 className="text-start hero-title pt-2">Welcome Back!</h3>
      <div className="row row-cols-1 row-cols-lg-2 g-4">
        <div className="col h-100">
          <div
            className="card border-light mt-4"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fcee21 0%, #fcee21 100%)",
              borderRadius: "1.5rem",
            }}
          >
            <div className="card-body">
              <div className="d-flex bal-cont">
                <div className="me-5 my-0">
                  <h5 className="card-title bal-text">Balance</h5>
                  <p className="text-center my-0">
                    <span className="bal-sign">$</span>
                    <span className="bal-val">0</span>
                  </p>
                </div>
                <div>
                  <h5 className="card-title bal-text">Balance</h5>
                  <p className="text-center my-0">
                    <span className="bal-sign">&#8358;</span>
                    <span className="bal-val">0</span>
                  </p>
                </div>
              </div>
              <div className="text-end pe-4">
                <img src={WalletIcon} className="img-fluid" alt="" />
              </div>
              <>
                <button type="button" className="db-hero-btn">
                  <Link className="text-decoration-none hero-btn-link" to="/">
                    <img
                      src={FundWalletIcon}
                      className="img-fluid pe-2"
                      alt="account icon"
                    />
                    Fund wallet
                  </Link>
                </button>
                <button type="button" className="db-hero-btn">
                  <Link className="text-decoration-none hero-btn-link" to="/">
                    <img
                      src={TransactionIcon}
                      className="img-fluid pe-2"
                      alt="account icon"
                    />
                    Transaction
                  </Link>
                </button>
              </>
            </div>
          </div>
        </div>
        <div className="col h-100">
          <div className="card border-light pt-3">
            <div className="card-body">
              <img src={HeroImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section */}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3 ">
        <div className="col">
          <div className="card p-4 border-light section-card h-100">
            <div className="card-body">
              <div className="text-end">
                <img src={PlaneIcon} className="img-fluid" alt="..." />
              </div>
              <h5 className="card-title section-title">International</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card p-4 border-light section-card h-100">
            <div className="card-body">
              <div className="text-end">
                <img src={CargoIcon} className="img-fluid" alt="..." />
              </div>
              <h5 className="card-title section-title">Cargo</h5>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card p-4 border-light section-card h-100">
            <div className="card-body">
              <div className="text-end">
                <img src={ImportIcon} className="img-fluid" alt="..." />
              </div>
              <h5 className="card-title section-title">Import</h5>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card p-4 border-light section-card h-100">
            <div className="card-body">
              <div className="text-end">
                <img src={ShipmentIcon} className="img-fluid" alt="..." />
              </div>
              <h5 className="card-title section-title">Track Shipment</h5>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card p-4 border-light section-card h-100">
            <div className="card-body">
              <div className="text-end">
                <img src={EstimatorIcon} className="img-fluid" alt="..." />
              </div>
              <h5 className="card-title section-title">Delivery Estimator</h5>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card p-4 border-light section-card h-100">
            <div className="card-body">
              <div className="text-end">
                <img src={ConverterIcon} className="img-fluid" alt="..." />
              </div>
              <h5 className="card-title section-title">Currency Converter</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Section */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </main>
  );
}

export default Dashboard;
