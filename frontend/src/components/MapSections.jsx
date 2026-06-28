export default function MapSection() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Find Us</h2>

      <iframe
        title="map"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        src="https://maps.google.com/maps?q=Patna&t=&z=13&ie=UTF8&iwloc=&output=embed"
      />
    </div>
  );
}