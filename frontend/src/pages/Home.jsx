import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";



export default function Home() {
  return (
     <>
         <Hero/>
   

    <div>
      <section
        style={{
          background:
            "linear-gradient(to right,#7c3aed,#a855f7)",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1>Pink City Hotel</h1>

        <p>
          Luxury Rooms, Banquet Halls & Premium Hospitality
        </p>

        <Link
          to="/booking"
          style={{
            background: "white",
            color: "#7c3aed",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
        
          Book Now
        </Link>
      </section>
    </div>
      </>
  );
}