import React from "react";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import "../styles/Review.css";

const Review = () => {
  return (
    <section className="container-fluid review-section">
      <div className="row">
        <div className="col-sm-12 col-md-4"></div>
        <div className="col-sm-12 col-md-4 review-hero-text">
          <h3 className="review-hero-title text-center">
            What Our Clients Say
          </h3>
          <p className="review-hero-msg text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            corrupti nemo esse reiciendis est doloremque error numquam quod
            aliquam quam. Ipsa recusandae corrupti.
          </p>
        </div>
        <div className="col-sm-12 col-md-4"></div>
      </div>

      <div className="row">
        <div
          className="col-sm-12 col-md-6"
          style={{
            borderRight: "0.5rem solid #ffffff",
          }}
        >
          <div className="text-center">
            <img src={Avatar1} className="avatar img-fluid" alt="user" />
          </div>
          <p className="review-msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio blanditiis velit omnis? Vitae ratione, possimus rerum
            labore odio commodi quis et deserunt, nisi quam facere molestias
            explicabo magnam neque.
          </p>
        </div>
        <div
          className="col-sm-12 col-md-6"
          style={{
            borderLeft: "0.5rem solid #ffffff",
          }}
        >
          <div className="text-center">
            <img src={Avatar2} className="avatar img-fluid" alt="user" />
          </div>
          <p className="review-msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio blanditiis velit omnis? Vitae ratione, possimus rerum
            labore odio commodi quis et deserunt, nisi quam facere molestias
            explicabo magnam neque.
          </p>
        </div>
      </div>
      <div className="review-slider">
        <img src={Slider1} className="slider-img" alt="review slider" />
        <img src={Slider2} className="slider-img" alt="review slider" />
        <img src={Slider3} className="slider-img" alt="review slider" />
      </div>
    </section>
  );
};

export default Review;
