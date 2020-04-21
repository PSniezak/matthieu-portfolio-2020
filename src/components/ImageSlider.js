import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesSlider = ({ images, setCursor, isFullPage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    focusOnSelect: false,
    arrows: false
  };

  //   Todo: cropping ?

  return (
    <div
      className={`imagesSliderWrapper section ${
        isFullPage ? "imagesSliderWrapper--fullPage" : ""
      }`}
    >
      <div className={`${isFullPage ? "" : "wrapper"}`}>
        <div
          className="imagesSlider"
          onMouseEnter={() => setCursor(true, "Drag")}
          onMouseLeave={() => setCursor(false, "")}
        >
          <Slider {...settings}>
            {images.map((image, index) => {
              return (
                <div key={`slider_${index}`} className="imagesSlider__image">
                  <img src={image} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImagesSlider;
