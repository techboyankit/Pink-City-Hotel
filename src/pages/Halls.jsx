import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Rooms() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {

    const fetchRooms = async () => {

      const snapshot = await getDocs(
        collection(db, "halls")
      );

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setRooms(data);
    };

    fetchRooms();

  }, []);

  return (
    <div>

      <h1>Rooms</h1>

      {rooms.map(room => (
        <div key={room.id}>

          <img
            src={room.image}
            width="300"
            alt={room.name}
          />

          <h3>{room.name}</h3>

          <p>₹ {room.price}</p>

          <p>{room.description}</p>

        </div>
      ))}

    </div>
  );
}