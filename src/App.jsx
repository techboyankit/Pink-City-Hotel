import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Halls from "./pages/Halls";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import AdminUpload from "./pages/AdminUpload";
import RoomDetails from "./pages/RoomDetails";

export default function App() {
  return (
    <>
      <WhatsAppButton />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/halls" element={<Halls />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin/upload" element={<AdminUpload />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />

          
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
