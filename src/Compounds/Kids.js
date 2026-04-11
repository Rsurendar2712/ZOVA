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

  // Fetching Women specific data
  const datas = Info?.kids;
const pageTitle = datas.title || "Women Services";
  if (!datas || !datas.categories) return <p>No data available</p>;

  // ADD SERVICE
  const addToCart = (item, category, title) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) =>
          i.name === item.name &&
          i.category === category &&
          i.title === title
      );

      if (existing) {
        return prev.map((i) =>
          i.name === item.name &&
          i.category === category &&
          i.title === title
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...prev, { ...item, category, title, qty: 1 }];
    });
  };

  // REMOVE SERVICE
  const removeItem = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  // DECREASE QTY
  const decreaseQty = (name) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // TOTAL PRICE
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const goToBooking = () => {
    navigate("/booking", { state: { cart, totalAmount } });
  };

  return (
    /* Keeping 'men-page' class as requested, though this is Women component */
    <div className="men-page"> 
      <header className="navbar-fixed-top">
        <Navbar cartCount={cart.length} />
      </header>

      <h1 className="page-title">{pageTitle}</h1>

      {/* --- IMPROVED SEARCH BOX --- */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for services or categories (e.g. Facial)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* --- SMART FILTERING SERVICES --- */}
      {datas.categories.map((category, index) => {
        const searchTerm = search.toLowerCase();
        
        // Check if search matches category name
        const isCategoryMatch = category.name.toLowerCase().includes(searchTerm);

        // Filter items: show item if its name matches OR if the category name matches
        const filteredItems = category.items.filter((item) => {
          const isItemMatch = item.name.toLowerCase().includes(searchTerm);
          return isItemMatch || isCategoryMatch;
        });

        if (filteredItems.length === 0) return null;

        return (
          <div key={index} className="category">
            <h2 className="category-title">{category.name}</h2>

            {filteredItems.map((item, i) => (
              <div key={i} className="item-card">
                <div>
                  <h3>{item.name}</h3>
                  {item.duration && (
                    <p className="duration">{item.duration}</p>
                  )}
                </div>

                <div className="item-action">
                  <span>₹{item.price}</span>
                  <button
                    className="add-btn"
                    /* UPDATED: Dynamic title "Women" instead of hardcoded "Men" */
                    onClick={() => addToCart(item, category.name, "Kids")} 
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {/* CART LIST (EDIT BOOKING) */}
      {cart.length > 0 && (
        <div className="cart-list" id='Cart'>
          <h2>Cart 🛒</h2>

          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-controls">
                <button onClick={() => decreaseQty(item.name)}>-</button>
                <b>{item.category}</b><br/>
                <span>{item.name}</span>
                <span>{item.qty}</span>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.name)}
                >
                  ❌
                </button>
              </div>

              <strong>₹{item.price * item.qty}</strong>
            </div>
          ))}
        </div>
      )}

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
