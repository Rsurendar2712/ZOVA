import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../Data/Info";
import Navbar from "./Navbar";
import "./list.css";
import "./Navbar.css";

function Kids() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const datas = Info?.kids;
  if (!datas || !datas.categories) return <p>No data available</p>;

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const goToBooking = () => {
    navigate("/booking", { state: { cart, totalAmount } });
  };

  return (

    <div className="men-page">
      <div   className="Navbar">
      <Navbar />

      </div>


      <h1 className="page-title">{datas.title}</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {datas.categories.map((category, index) => {
        const filteredItems = category.items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

        if (filteredItems.length === 0) return null;

        return (
          <div key={index} className="category">
            <h2 className="category-title">{category.name}</h2>

            {filteredItems.map((item, i) => (
              <div key={i} className="item-card">
                <div>
                  <h3>{item.name}</h3>
                  {item.duration && <p className="duration">{item.duration}</p>}
                </div>

                <div className="item-action">
                  <span>₹{item.price}</span>
                  <button
                    className="add-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {/* BOTTOM CART */}
      {cart.length > 0 && (
        <div className="bottom-cart">
          <div className="cart-info">
            <p>{cart.length} Services Added</p>
            <strong>₹{totalAmount}</strong>
          </div>
          <button className="book-btn" onClick={goToBooking}>
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Kids;
