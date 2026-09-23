import React, { useRef } from "react";
import "./Display.css";

import video from "../asset/Fvid.mp4";
import logo1 from "../asset/im1.jpg";
import logo2 from "../asset/im2.jpg";
import logo3 from "../asset/im5.jpg";
import logo4 from "../asset/im3.jpg";
import logo5 from "../asset/im4.jpg";
import logo6 from "../asset/im6.jpg";

function OfferSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const offers = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="offer-wrapper">
      {/* Video Banner */}
      <div className="offer-video">
        <video src={video} autoPlay muted loop />
      </div>

      {/* Slider */}
      <div className="slider-container">
        <button
          className="arrow-left"
          onClick={scrollLeft}
          aria-label="Previous offers"
        >
          ‹
        </button>

        <div className="slider" ref={sliderRef}>
          {offers.map((img, i) => (
            <div className="offer-card" key={i}>
              <img src={img} alt={`offer-${i + 1}`} />
            </div>
          ))}
        </div>

        <button
          className="arrow-right"
          onClick={scrollRight}
          aria-label="Next offers"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default OfferSlider;