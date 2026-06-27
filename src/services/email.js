import emailjs from "@emailjs/browser";

export const sendBookingEmail = async (booking) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      {
        name: booking.name,
        email: booking.email,
        room: booking.roomType,
        checkin: booking.checkIn,
        checkout: booking.checkOut,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    console.log("Email Sent Successfully");
  } catch (error) {
    console.error("Email Error:", error);
  }
};