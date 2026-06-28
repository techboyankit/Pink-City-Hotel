import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right,#7c3aed,#a855f7)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Pink City Hotel</h1>

      <h3>
        Luxury Rooms & Grand Banquet Halls
      </h3>

      <Link
        to="/booking"
        style={{
          background: "white",
          color: "#7c3aed",
          padding: "12px 25px",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Book Now
      </Link>
    </section>
  );
}