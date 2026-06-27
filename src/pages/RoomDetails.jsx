import { useParams, Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 2500,
    image: "YOUR_CLOUDINARY_URL_1",
    description:
      "A spacious deluxe room with modern interiors, king-size bed, free Wi-Fi and complimentary breakfast.",
    amenities: [
      "King Size Bed",
      "Free Wi-Fi",
      "Air Conditioner",
      "Smart TV",
      "Breakfast Included",
      "24×7 Room Service"
    ]
  },

  {
    id: 2,
    name: "Executive Room",
    price: 4000,
    image: "YOUR_CLOUDINARY_URL_2",
    description:
      "Perfect for business travelers with premium comfort and workspace.",
    amenities: [
      "Queen Size Bed",
      "High-Speed Wi-Fi",
      "Mini Bar",
      "Smart TV",
      "Workspace",
      "Breakfast Included"
    ]
  },

  {
    id: 3,
    name: "Luxury Suite",
    price: 6500,
    image: "YOUR_CLOUDINARY_URL_3",
    description:
      "Luxury suite offering the best hospitality experience with premium facilities.",
    amenities: [
      "Living Room",
      "Jacuzzi",
      "King Bed",
      "Smart TV",
      "Mini Bar",
      "Free Breakfast"
    ]
  }
];

export default function RoomDetails() {

  const { id } = useParams();

  const room = rooms.find((item) => item.id === Number(id));

  if (!room) {
    return <h2 className="text-center mt-5">Room Not Found</h2>;
  }

  return (
    <div className="container py-5">

      <div className="row">

        <div className="col-md-6">
          <img
            src={room.image}
            alt={room.name}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">

          <h2>{room.name}</h2>

          <h3 className="text-success mb-3">
            ₹{room.price}/Night
          </h3>

          <p>{room.description}</p>

          <h5 className="mt-4">
            Amenities
          </h5>

          <ul>
            {room.amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <Link
            to="/booking"
            className="btn btn-primary mt-3"
          >
            Book Now
          </Link>

        </div>

      </div>

    </div>
  );
}