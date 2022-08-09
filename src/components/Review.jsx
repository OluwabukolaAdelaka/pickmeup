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
      <div className="review-hero-text">
        <h3 className="review-hero-title">What Our Clients Say</h3>
        <p className="review-hero-msg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          suscipit excepturi rerum asperiores esse culpa deleniti quam eos, quos
          unde!
        </p>
      </div>
      <div className="row gx-4">
        <div className="col review-card">
          <img src={Avatar1} className="avatar" alt="user" />
          <p className="review-msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            distinctio blanditiis velit omnis? Vitae ratione, possimus rerum
            labore odio commodi quis et deserunt, nisi quam facere molestias
            explicabo magnam neque.
          </p>
        </div>
        <div className="col review-card">
          <img src={Avatar2} className="avatar" alt="user" />
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
