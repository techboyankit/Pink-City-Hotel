import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { openRazorpay } from "../services/razorpay";
import { sendBookingEmail } from "../services/email";

export default function Booking() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    roomType: "Deluxe Room",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitBooking = async (e) => {
    e.preventDefault();

     openRazorpay({
    name: form.name,
    email: form.email,
    phone: form.phone,
  });


    setLoading(true);

    try {
      await addDoc(collection(db, "bookings"), {
        ...form,
        createdAt: new Date(),
      });

      alert("Booking Successful ✅");

await sendBookingEmail(form);

alert("Booking Confirmed!");

alert("Booking Confirmed!");

      setForm({
        name: "",
        phone: "",
        email: "",
        roomType: "Deluxe Room",
        checkIn: "",
        checkOut: "",
        guests: 1,
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  
 

  return (
    <div className="container py-5">
      <h2 className="mb-4">Book Your Room</h2>

      <form onSubmit={submitBooking}>
        <input
          className="form-control mb-3"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select
          className="form-control mb-3"
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
        >
          <option>Deluxe Room</option>
          <option>Executive Room</option>
          <option>Luxury Suite</option>
        </select>

        <label>Check In</label>

        <input
          type="date"
          className="form-control mb-3"
          name="checkIn"
          value={form.checkIn}
          onChange={handleChange}
          required
        />

        <label>Check Out</label>

        <input
          type="date"
          className="form-control mb-3"
          name="checkOut"
          value={form.checkOut}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          name="guests"
          min="1"
          max="6"
          value={form.guests}
          onChange={handleChange}
        />

        <button
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
}