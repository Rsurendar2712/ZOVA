import React from 'react';
import './About.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <span className="subtitle">Get in Touch</span>
        <h1>We’d Love to See You</h1>
      </div>

      <div className="contact-main-grid">
        {/* Column 1: Visit & Hours */}
        <div className="info-column">
          <div className="info-card">
            <div className="card-title">
              <FaMapMarkerAlt className="gold-icon" />
              <h3>Visit Us</h3>
            </div>

            <p>   Old no. 656, New no. 438, A-4, <br />Thiruvottiyur High Rd,
Tondiarpet,<br /> Chennai, Tamil Nadu 600081</p>
         
            
          </div>

          <div className="info-card">
            <div className="card-title">
              <FaClock className="gold-icon" />
              <h3>Hours</h3>
            </div>
            <div className="hours-list">
              <div className="hour-item"><span>Mon - Fri:</span> <span>9:00 AM - 8:00 PM</span></div>
              <div className="hour-item"><span>Saturday:</span> <span>10:00 AM - 6:00 PM</span></div>
              <div className="hour-item"><span>Sunday:</span> <span className="closed-tag">Closed</span></div>
            </div>
          </div>
        </div>

        {/* Column 2: Direct Contact & Socials */}
        <div className="info-column">
          <div className="info-card">
            <div className="card-title">
              <FaEnvelope className="gold-icon" />
              <h3>Contact Details</h3>
            </div>
            <p className="contact-text">+91 78718 10137</p>
            <p className="contact-text">hello@zova-salon.com</p>
          </div>

          <div className="social-connect-card">
            <h3>Follow Our Style</h3>
            <div className="social-btn-group">
              <a href="https://instagram.com" className="social-pill instagram">
                <FaInstagram /> Instagram
              </a>
              <a href="https://facebook.com" className="social-pill facebook">
                <FaFacebookF /> Facebook
              </a>
            </div>
            
            <div className="booking-divider">
              <span>Quick Booking</span>
            </div>

            <a href="https://wa.me/919876543210" className="whatsapp-action-btn">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;