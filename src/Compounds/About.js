import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Redefining Elegance</h1>
          <p>Where artistry meets relaxation.</p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="story-section">
        <div className="story-grid">
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" alt="Salon Interior" />
          </div>
          <div className="story-text">
            <span className="subtitle">Established 2018</span>
            <h2>Our Story</h2>
            <p>
              Founded with a passion for excellence, ZOVA Salon was created to provide a sanctuary 
              where clients can escape the hustle of daily life. Our mission is simple: to help 
              you discover your most confident self through personalized care and master craftsmanship.
            </p>
            <p>
              Whether you are looking for a bold transformation or a subtle refresh, our 
              expert stylists bring years of international experience to every chair.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Value Props) */}
      <section className="values-section">
        <div className="values-grid">
          <div className="value-card">
            <div className="icon">✂️</div>
            <h3>Expert Stylists</h3>
            <p>Our team undergoes monthly training to stay ahead of global trends.</p>
          </div>
          <div className="value-card">
            <div className="icon">🌿</div>
            <h3>Premium Products</h3>
            <p>We use only organic, cruelty-free formulas for your hair and skin health.</p>
          </div>
          <div className="value-card">
            <div className="icon">☕</div>
            <h3>Luxury Experience</h3>
            <p>Enjoy premium coffee and a tranquil atmosphere during your visit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;