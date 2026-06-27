// import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase/config";

// import { Link } from "react-router-dom";
export default function Rooms() {

  // const [rooms, setRooms] = useState([]);


  const rooms = [
  {
   id:1,
 name:"Deluxe Room",
 price:2500,
 image:"https://res.cloudinary.com/dvjsrux3e/image/upload/v1782596389/hotel3_iis9di.jpg",
 description:"",
 capacity:2,
 wifi:true,
 ac:true,
 breakfast:true
  },
  {
    id: 2,
    name: "Premium Room",
    price: 3500,
     image:"https://res.cloudinary.com/dvjsrux3e/image/upload/v1782596388/hotel2_kv7b9k.jpg",
 description:"",
 capacity:2,
 wifi:true,
 ac:true,
 breakfast:true
  },
  {
    id: 2,
    name: "Premium Room",
    price: 3500,
     image:"https://res.cloudinary.com/dvjsrux3e/image/upload/v1782596528/hotel4_s6eymi.jpg",
 description:"",
 capacity:2,
 wifi:true,
 ac:true,
 breakfast:true
  }
];

  // useEffect(() => {

  //   const fetchRooms = async () => {

  //     const snapshot = await getDocs(
  //       collection(db, "rooms")
  //     );

  //     const data = snapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));

  //     setRooms(data);
  //   };

  //   fetchRooms();

  // }, []);

  return (
    <div>

      <h1>Rooms</h1>

      {rooms.map(room => (
        <div key={room.id}>

          <img
            src={room.image}
            width="300"
            alt={room.name}
            style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
          />

          <h3>{room.name}</h3>

          <p>₹ {room.price}</p>

          <p>{room.description}</p>
          
            <p>Capacity: {room.capacity}</p>

        </div>
      ))}

      {rooms.map(room => (
  <div key={room.id}>
    {room.name}
  </div>
))}

    </div>
  );
}