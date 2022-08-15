import React from "react";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import "../styles/Review.css";

const Review = () => {
  return (
    <>
      <section
        className="d-flex flex-column justify-content-center align-items-center px-1 mt-5 pb-5"
        style={{
          backgroundColor: "#f3f3f3",
        }}
      >
        <div className="row d-flex flex-column justify-content-center align-items-center text-center">
          <div className="d-none col"></div>
          <div className="col-sm-12 col-md-6">
            <h3 className="review-hero-title">What Our Clients Say</h3>
            <p className="review-hero-msg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              corrupti nemo esse reiciendis est doloremque error numquam quod
              aliquam quam. Ipsa recusandae corrupti.
            </p>
          </div>
          <div className="d-none col"></div>
        </div>

        <div className="row text-center d-flex justify-content-center align-items-center">
          <div className="d-none col"></div>
          <div className="col-sm-12 col-md-8">
            <div className="row row-cols-1 row-cols-md-2 g-4 pt-4">
              <div className="col">
                <div className="card border-light pt-4">
                  <div className="card-body">
                    <img src={Avatar1} className="img-fluid" alt="..." />
                    <p className="card-text service-msg pt-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam natus, modi consequatur ipsa praesentium neque
                      sint provident ad tempore corrupti repudiandae atque
                      possimus autem nostrum nemo doloremque adipisci magnam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-light pt-4">
                  <div className="card-body">
                    <img src={Avatar2} className="img-fluid" alt="..." />
                    <p className="card-text service-msg pt-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aliquam natus, modi consequatur ipsa praesentium neque
                      sint provident ad tempore corrupti repudiandae atque
                      possimus autem nostrum nemo doloremque adipisci magnam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none col"></div>
          <div className="review-slider">
            <img
              src={Slider1}
              className="slider-img img-fluid"
              alt="review slider"
            />
            <img
              src={Slider2}
              className="slider-img img-fluid"
              alt="review slider"
            />
            <img
              src={Slider3}
              className="slider-img img-fluid"
              alt="review slider"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
