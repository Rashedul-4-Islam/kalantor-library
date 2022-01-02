import React from "react";
import "./WriterSlider.css";
import Slider from "react-slick";
import writers from "../../Data/Writer/Writer";
import Writer from "./Writer";
const WriterSlider = () => {
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
    <div className="container p-0 bg-light p-3 my-3">
      <h2>Top writer</h2>
      <div className="row preOrder px-2">
        <Slider {...settings}>
          {writers.map((writer) => (
            <Writer key={writer.id} writer={writer}></Writer>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WriterSlider;
