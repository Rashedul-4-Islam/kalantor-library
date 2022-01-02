import React from "react";
import "./Slider.css";

import book1 from "../../Images/unsplash/book1.jpg";
import book2 from "../../Images/unsplash/book2.jpg";
import book3 from "../../Images/unsplash/book3.jpg";

const Slider = () => {
  return (
    <div className="slider container p-0">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={book1} className="d-block w-100" alt="unsplash" />
          </div>
          <div className="carousel-item">
            <img src={book2} className="d-block w-100" alt="unsplash" />
          </div>
          <div className="carousel-item">
            <img src={book3} className="d-block w-100" alt="unsplash" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
