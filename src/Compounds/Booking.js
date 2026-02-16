import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Booking.css";
import Navbar from "./Navbar";

export default function Booking() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { cart = [] } = state || {};

  const [services] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    email: "",
    request: "",
  });

  const selectedServices = cart.length > 0 ? cart : services;
  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const tax = Math.round(total * 0.1);
  const grandTotal = total + tax;

  // Convert 24hr → 12hr format
  const formatTo12Hour = (time24) => {
    if (!time24) return "";
    const [hour, minute] = time24.split(":");
    let h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${minute} ${ampm}`;
  };

  // Handle Booking
  const handleBooking = () => {

   
   if (!date || !time || !customer.name || !customer.mobile) {
  alert("Please fill all required fields.");
  return;
}

// Get hour from time string
const hour = parseInt(time.split(":")[0]);

// Allow only between 8 AM and 10 PM
if (hour < 8 || hour > 22) {
  alert("Please select time between 8:00 AM and 10:00 PM");
  return;
}


    const message = `
🌟 ZOVA Salon Booking 🌟

Name: ${customer.name}
Mobile: ${customer.mobile}
Email: ${customer.email || "Not provided"}

Services:
${selectedServices.map((s) => `- ${s.name} (₹${s.price})`).join("\n")}

Date: ${date}
Time: ${formatTo12Hour(time)}

Special Request: ${customer.request || "None"}

Total: ₹${grandTotal}
`;

    alert(message);

    const whatsappNumber = "7397434270"; // 🔥 Change to your number
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

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

          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="booking-item">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))
          ) : (
            <div className="service-category">
              {["Men", "Women", "Kids"].map((type) => (
                <button
                  key={type}
                  className="category-btn"
                  onClick={() => navigate(`/${type.toLowerCase()}`)}
                >
                  {type} Services →
                </button>
              ))}
            </div>
          )}
        </section>

        {/* DATE */}
        <section className="card">
          <h2>Choose Date</h2>
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => {
              setDate(e.target.value);
              setTime("");
            }}
          />
        </section>

        {/* TIME */}
        <section className="card">
          <h2>Choose Time</h2>
          <input
            type="time"
            value={time}
            min="10:00"
            max="20:00"
            step="1800"
            onChange={(e) => setTime(e.target.value)}
          />

          {time && (
            <p style={{ marginTop: "10px" }}>
              Selected Time: <strong>{formatTo12Hour(time)}</strong>
            </p>
          )}
        </section>

        {/* CUSTOMER DETAILS */}
        <section className="card">
          <h2>Your Details</h2>

          <input
            placeholder="Full Name"
            value={customer.name}
            onChange={(e) =>
              setCustomer({ ...customer, name: e.target.value })
            }
          />

          <input
            placeholder="Mobile Number"
            value={customer.mobile}
            onChange={(e) =>
              setCustomer({ ...customer, mobile: e.target.value })
            }
          />

          <input
            placeholder="Email (optional)"
            value={customer.email}
            onChange={(e) =>
              setCustomer({ ...customer, email: e.target.value })
            }
          />

          <textarea
            placeholder="Special request (optional)"
            value={customer.request}
            onChange={(e) =>
              setCustomer({ ...customer, request: e.target.value })
            }
          />
        </section>

        {/* SUMMARY */}
        <section className="card">
          <h2>Booking Summary</h2>
          <p>Services: ₹{total}</p>
          <p>Tax (10%): ₹{tax}</p>
          <h3>Total: ₹{grandTotal}</h3>
          {date && time && (
            <p>
              🕒 {date} at {formatTo12Hour(time)}
            </p>
          )}
        </section>

        {/* POLICY */}
        <section className="card small">
          <p>❌ Free cancellation up to 2 hours before appointment</p>
          <p>📞 Support: +91 98765 43210</p>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="sticky">
        <span>Total: ₹{grandTotal}</span>
        <button
          // disabled={!date || !time || !customer.name || !customer.mobile}
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
      </footer>
    </>
  );
}
