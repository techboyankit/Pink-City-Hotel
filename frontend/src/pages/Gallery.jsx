export default function Gallery() {
  const images = [
    "https://picsum.photos/500?1",
    "https://picsum.photos/500?2",
    "https://picsum.photos/500?3",
    "https://picsum.photos/500?4",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt=""
            style={{ width: "100%" }}
          />
        ))}
      </div>
    </div>
  );
}