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
  const [mobileError, setMobileError] = useState(false);
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

   
  if (!date || !time || !customer.name || !/^[6-9]\d{9}$/.test(customer.mobile)) {
  alert("Enter valid mobile number");
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
${selectedServices
  .map(
    (s) =>
      `- ${s.title} | ${s.category} | ${s.name} (₹${s.price})`
  )
  .join("\n")}

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


   mobileError && (
  <p style={{ color: "red", fontSize: "12px" }}>
    Enter valid 10-digit mobile number
  </p>
)

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <Navbar />
      </header>

      <main className="container">

        {/* SERVICES */}
        <section className="card">
         

          {cart.length > 0 ? (
            <div>
  <h2>Services</h2>

  {cart.map((item, index) => (
    <div key={index} className="booking-item">
      <b>{item.title}</b>
      <p>{item.category}</p>
      <span>{item.name}</span>
      <span>₹{item.price}</span>
    </div>
  ))}
</div>
          ) : (
            <div className="service-category">
               <h2>Choose Services</h2>
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
  onChange={(e) => {
    const value = e.target.value;

    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setCustomer({ ...customer, mobile: value });

      // Validate (10 digits)
      if (value.length === 10) {
        setMobileError(false);
      } else {
        setMobileError(true);
      }
    }
  }}
  className={mobileError ? "input-error" : ""}
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
  
{selectedServices.length > 0 ? (
  <footer className="sticky">
    <span>Total: ₹{grandTotal}</span>
    <button onClick={handleBooking}>
      Confirm Booking
    </button>
  </footer>
) : (
  <footer className="sticky">
    <span style={{ color: "yellow" }}>
      ⚠ Please choose services to continue
    </span>
  </footer>
)}

    </>
  );
}
