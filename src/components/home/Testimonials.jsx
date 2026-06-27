export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul",
      review: "Amazing rooms and service."
    },
    {
      name: "Ankit",
      review: "Best banquet hall in Patna."
    },
    {
      name: "Neha",
      review: "Very clean and affordable."
    }
  ];

  return (
    <section style={{ padding: "40px" }}>
      <h2>Guest Reviews</h2>

      {reviews.map((r, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h4>{r.name}</h4>
          <p>{r.review}</p>
        </div>
      ))}
    </section>
  );
}