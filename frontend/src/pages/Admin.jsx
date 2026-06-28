import { useEffect, useState } from "react";
import {
  collection,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase/config";

export default function Admin() {

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    const loadBookings = async () => {

      const snapshot = await getDocs(
        collection(db, "bookings")
      );

      setBookings(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };

    loadBookings();

  }, []);

  return (
    <div>

      <h1>Admin Dashboard</h1>

      <h2>Total Bookings</h2>

      {bookings.map((b) => (
        <div key={b.id}>
          {b.name} - {b.phone}
        </div>
      ))}

    </div>
  );
}