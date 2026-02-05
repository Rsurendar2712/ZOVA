import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
import men from "../asset/men.jpg";
import women from "../asset/wemen.jpg";
import kids from "../asset/Haircut.jpg";



function Service() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const categories = [
    { name: "Men", img: men, path: "../Men" },
    { name: "Women", img: women, path: "/services/women" },
    { name: "Kids", img: kids, path: "/services/kids" },
  ];

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <section className="service-options">
      <h2>Choose Your Service</h2>

      {/* wrapper for arrow */}
      <div className="slider-wrapper">
      <button className="mobile-arrow" onClick={scrollRight}>
          ›
        </button>
        <div className="options-grid" ref={scrollRef}>
          {categories.map((c, i) => (
            <div
              className="option-card"
              key={i}
              onClick={() => navigate(c.path)}
            >
              <img src={c.img} alt={c.name} />
              <div className="overlay">
                <h3>{c.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* right arrow (mobile only) */}
       
      </div>
    </section>
  );
}

export default Service;
