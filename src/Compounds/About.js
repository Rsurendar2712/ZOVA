import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      {/* HERO SECTION */}
      <section className="about-hero">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crafting Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          We build modern, scalable and premium digital products 
          that elevate brands and businesses.
        </motion.p>
      </section>

      {/* MISSION SECTION */}
      <section className="about-mission">
        <motion.div 
          className="mission-card"
          whileHover={{ scale: 1.03 }}
        >
          <h2>Our Mission</h2>
          <p>
            To deliver high-quality digital solutions that combine design, 
            performance and innovation. We believe in creating 
            meaningful experiences that drive real impact.
          </p>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="about-stats">
        <motion.div className="stat" whileHover={{ scale: 1.1 }}>
          <h2>50+</h2>
          <p>Projects Delivered</p>
        </motion.div>

        <motion.div className="stat" whileHover={{ scale: 1.1 }}>
          <h2>100%</h2>
          <p>Client Satisfaction</p>
        </motion.div>

        <motion.div className="stat" whileHover={{ scale: 1.1 }}>
          <h2>24/7</h2>
          <p>Support Available</p>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <h2>Let’s Build Something Amazing Together</h2>
        <button>Contact Us</button>
      </section>

    </div>
  );
};

export default About;
