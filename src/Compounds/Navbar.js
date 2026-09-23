import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

/* Assets & Styles */
import logo from "../asset/logo.jpg";
import "./Navbar.css";
import "./list.css";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Condition: Show cart on Men, Women, Kids, and Booking pages
  const showCartOnPages = ["/men", "/women", "/kids", "/booking"];
  
  // Checking lowercase to ensure it matches regardless of how the user types the URL
  const isTargetPage = showCartOnPages.includes(location.pathname.toLowerCase());
const handleCartClick = (e) => {
  e.preventDefault();
  setMenuOpen(false); 

  if (cartCount === 0) {
    alert("Please select at least one service to view your cart!");
    return;
  }

  // Get the current path (e.g., /Men, /Women, /Kids)
  const currentPath = location.pathname;

  // 1. If the user is already on a service page, just scroll down to the cart
  const cartElement = document.getElementById("Cart");
  if (cartElement) {
    cartElement.scrollIntoView({ behavior: "smooth" });
  } else {
    // 2. If for some reason the ID isn't found, 
    // navigate to the current page's cart hash
    navigate(`${currentPath}#Cart`);
  }
};


  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* --- Logo --- */}
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Salon Logo" />
          </Link>
        </div>
        {/* --- Dynamic Conditional Cart Icon --- */}
{isTargetPage && (
  <li className="cart-item-wrapper">
    <Link 
      to={`${location.pathname}#Cart`} 
      className="nav-cart-link" 
      onClick={handleCartClick}
    >
      🛒 <span className="nav-cart-badge">{cartCount}</span>
    </Link>
  </li>
)}

        {/* --- Navigation Links --- */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/Mainpage#mp1" className="btn" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Mainpage#about-us" className="btn" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Mainpage#service-options" className="btn" onClick={() => setMenuOpen(false)}>
              Service
            </Link>
          </li>
          <li>
            <Link to="/Mainpage#Contact" className="btn" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Booking" className="booking-btn" onClick={() => setMenuOpen(false)}>
              Booking
            </Link>
          </li>

          
        </ul>

        {/* --- Mobile Menu Icon --- */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;