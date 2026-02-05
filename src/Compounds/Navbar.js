import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../asset/logo.jpg";

import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">
  <img src={logo} alt="logo" />
</div>


        {/* Menu */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="/Main_page" className="btn">Home</Link></li>
          <li><Link to="/About Us" className="btn">About Us</Link></li>


          <li><Link to="/service-options" className="btn">Service</Link></li>


          
          <li>
          <Link to="/Booking" className="booking-btn">
    Booking   </Link>
</li>
        </ul>

        {/* Mobile Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
