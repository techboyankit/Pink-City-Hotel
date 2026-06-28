export default function WhatsAppButton() {
  const phone = "919876543210";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "white",
        padding: "15px",
        borderRadius: "50%",
        textDecoration: "none",
        fontSize: "24px",
      }}
    >
      💬
    </a>
  );
}