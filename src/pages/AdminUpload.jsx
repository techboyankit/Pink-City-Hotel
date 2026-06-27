import { useState } from "react";
import { uploadImage } from "../services/cloudinary";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AdminUpload() {
  const [image, setImage] = useState(null);

  const [form, setForm] = useState({
    roomName: "",
    price: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadImage(image);

      await addDoc(collection(db, "rooms"), {
        ...form,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Room Added Successfully!");

      setForm({
        roomName: "",
        price: "",
        description: "",
      });

      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="container py-5">

      <h2 className="mb-4">Add New Room</h2>

      <input
        className="form-control mb-3"
        placeholder="Room Name"
        name="roomName"
        value={form.roomName}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Price"
        name="price"
        value={form.price}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-3"
        placeholder="Description"
        rows="4"
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <input
        type="file"
        className="form-control mb-4"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Save Room"}
      </button>

    </div>
  );
}