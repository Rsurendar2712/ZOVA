import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Booking.css";
import Navbar from "./Navbar";

export default function Booking() {
  const [services, setServices] = useState([]);
  const [staff, setStaff] = useState("Any Available");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [customer, setCustomer] = useState({});

  const navigate = useNavigate();
  const { state } = useLocation();
  const { cart = [] } = state || {};

  // use cart if available, otherwise services
  const selectedServices = cart.length > 0 ? cart : services;

  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <Navbar />
      </header>

      <main className="container">

        {/* SERVICES */}
        <section className="card">
          <h2>Choose Services</h2>

          {/* If user came from Men page */}
          {cart.length > 0 &&
            cart.map((item, index) => (
              <div key={index} className="booking-item">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}

          {/* If user opened Booking page directly */}
          {cart.length === 0 && (
            <div className="service-category">
              {["Men", "Women", "Kids"].map((type, i) => (
                <button
                  key={i}
                  className="category-btn"
                  onClick={() => navigate(`/${type.toLowerCase()}`)}
                >
                  {type} Services →
                </button>
              ))}
            </div>
          )}
        </section>

        {/* STAFF */}
        <section className="card">
          <h2>Select Professional</h2>
          <div className="options">
            {["Any Available", "Ramesh ⭐4.7", "Arun ⭐4.9"].map((s, i) => (
              <button
                key={i}
                className={staff === s ? "active" : ""}
                onClick={() => setStaff(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </section>

        {/* DATE & TIME */}
        <section className="card">
          <h2>Date & Time</h2>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <div className="options">
            {["10:00 AM", "11:00 AM", "12:30 PM", "3:00 PM"].map((t, i) => (
              <button
                key={i}
                className={time === t ? "active" : ""}
                onClick={() => setTime(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* CUSTOMER DETAILS */}
        <section className="card">
          <h2>Your Details</h2>
          <input
            placeholder="Full Name"
            onChange={(e) =>
              setCustomer({ ...customer, name: e.target.value })
            }
          />
          <input
            placeholder="Mobile Number"
            onChange={(e) =>
              setCustomer({ ...customer, mobile: e.target.value })
            }
          />
          <input placeholder="Email (optional)" />
          <textarea placeholder="Special request (optional)" />
        </section>

        {/* SUMMARY */}
        <section className="card">
          <h2>Booking Summary</h2>
          <p>Services: ₹{total}</p>
          <p>Tax: ₹{Math.round(total * 0.1)}</p>
          <h3>Total: ₹{total + Math.round(total * 0.1)}</h3>
        </section>

        {/* POLICY */}
        <section className="card small">
          <p>❌ Free cancellation up to 2 hours before appointment</p>
          <p>📞 Support: +91 98765 43210</p>
        </section>

      </main>

      {/* STICKY CTA */}
      <footer className="sticky">
        <span>Total: ₹{total}</span>
        <button onClick={() => alert("Booking Confirmed ✅")}>
          Confirm Booking
        </button>
      </footer>
    </>
  );
}
