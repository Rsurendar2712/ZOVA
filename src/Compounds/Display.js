import React, { useRef } from "react";
import "./Display.css";
import video from "../asset/Fvid.mp4";

<<<<<<< HEAD
import logo1 from "../asset/im1.jpg";
import logo2 from "../asset/im2.jpg";
import logo3 from "../asset/im5.jpg";
import logo4 from "../asset/im3.jpg";
import logo5 from "../asset/im4.jpg";
import logo6 from "../asset/im6.jpg";
=======
import logo from "../asset/logo.jpg";
>>>>>>> 5d060767d82e39a89ca2bb7ef288f5a8eaf5b28a

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
<<<<<<< HEAD
        <video src={video} autoPlay muted loop />
=======
        <video src={Fvid} autoPlay muted loop />
>>>>>>> 5d060767d82e39a89ca2bb7ef288f5a8eaf5b28a


      </div>

      {/* Slider */}
      <div className="slider-container">
        <button className="arrow-left" onClick={scrollLeft}>‹</button>

        <div className="slider" ref={sliderRef}>
<<<<<<< HEAD
  {[logo1, logo2, logo3, logo4, logo5, logo6].map((img, i) => (
    <div className="offer-card" key={i}>
      <img src={img} alt={`offer-${i + 1}`} />
    </div>
  ))}
</div>
=======
          {[logo ,logo ,logo ,logo ,logo ].map((img, i) => (
            <div className="offer-card" key={i}>
              <img src={logo } alt="offer" />
            </div>
          ))}
        </div>
>>>>>>> 5d060767d82e39a89ca2bb7ef288f5a8eaf5b28a

        <button className="arrow-right" onClick={scrollRight}>›</button>
      </div>

    </div>
  );
}

export default OfferSlider;
