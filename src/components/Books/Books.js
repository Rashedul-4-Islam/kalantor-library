import React from "react";
import "./Books.css";
// import BookList from "../../Data/BookData/BookData";
import Book from "./Book";
// import Slider from "react-slick";

import PreOrder from "../../Data/PreOrder/PreOrder";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// import book1 from "../../Images/kalantorImg/salafder-foriyad_md.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Books = () => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" py-4">
      <div className="container books_items py-3 px-0">
        <div className="top_item d-flex justify-content-between">
          <h3>প্রি-অর্ডার</h3>
          <Link to="/preOrderAllItem">
            <button className="btn btn-info">View All</button>
          </Link>
        </div>
        <div className="row preOrder px-2">
          <Slider {...settings}>
            {PreOrder.map((order) => (
              <Book key={order.id} order={order}></Book>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Books;
