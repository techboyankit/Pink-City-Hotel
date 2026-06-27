export const openRazorpay = ({ name, email, phone }) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,

    amount: 100 * 100, // ₹100

    currency: "INR",

    name: "Pink City Hotel",

    description: "Room Booking Advance",

    handler: function (response) {
      alert(
        `Payment Successful\nPayment ID: ${response.razorpay_payment_id}`
      );
    },

    prefill: {
      name,
      email,
      contact: phone,
    },

    theme: {
      color: "#0d6efd",
    },
  };

  const razor = new window.Razorpay(options);

  razor.open();
};