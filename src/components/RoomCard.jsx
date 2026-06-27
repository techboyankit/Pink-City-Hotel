export default function RoomCard({room}){

  return(

    <div className="card">

      <img
        src={room.image}
        alt={room.name}
      />

      <div style={{padding:"15px"}}>

        <h2>{room.name}</h2>

        <p>{room.description}</p>

        <h3>
          ₹ {room.price}
        </h3>

      </div>

    </div>

  );
}