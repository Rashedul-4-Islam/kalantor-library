import React from "react";
import Rating from "react-rating";
import "./ReviewsRatings.css";
const ReviewsRatings = () => {
  return (
    <div>
      <hr />
      <h3>Reviews and Ratings</h3>
      <div className="after_reviews_login">
        <span>Please login to rating & write review </span>
        <button className="custom_btn_outline ms-2">Login</button>
      </div>

      <div className="reviews_ratings_area d-flex justify-content-between">
        <div className="ratings_area d-flex align-items-center mt-3">
          <p className="me-3 fs-2">5.0</p>
          <div className="ratings">
            <p>5 Ratings</p>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <button className="custom_btn_outline">Write a Review</button>
      </div>
      <div className="write_review border p-3 my-3">
        <div>
          <textarea
            placeholder="Please write your honest opinion and giv a rating"
            className=" border-0 mt-3 ms-3"
            rows="2"
          ></textarea>
          <hr />
          <Rating
            emptySymbol="far fa-star rating_icon"
            fullSymbol="fas fa-star rating_icon"
            initialRating={3}
            readonly
          />
          <button className="custom_btn_outline ms-5">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsRatings;
