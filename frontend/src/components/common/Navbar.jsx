import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#7c3aed",
        color: "white",
        padding: "15px"
      }}
    >
      <h2>Pink City Hotel</h2>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/rooms">Rooms</Link>{" "}
        <Link to="/halls">Halls</Link>{" "}
        <Link to="/gallery">Gallery</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/booking">Book</Link>
      </div>
    </nav>
  );
}