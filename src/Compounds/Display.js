import React, { useRef } from "react";
import "./Display.css";
import video from "../asset/nature.mp4";

import logo from "../asset/logo.jpg";

function OfferSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="offer-wrapper">

      {/* Video Banner */}
      <div className="offer-video">
        <video src={video} autoPlay muted loop />
      </div>

      {/* Slider */}
      <div className="slider-container">
        <button className="arrow-left" onClick={scrollLeft}>‹</button>

        <div className="slider" ref={sliderRef}>
          {[logo ,logo ,logo ,logo ,logo ].map((img, i) => (
            <div className="offer-card" key={i}>
              <img src={logo } alt="offer" />
            </div>
          ))}
        </div>

        <button className="arrow-right" onClick={scrollRight}>›</button>
      </div>

    </div>
  );
}

export default OfferSlider;
