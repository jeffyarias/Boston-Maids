import { useState } from "react";

export default function CancelBookingForm() {
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/client/cancel-booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, confirmationCode }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(`Booking canceled successfully!`);
    } else {
      setMessage(`Error: ${result.error}`);
    }
  };

  return (
    <div>
      <h1>Cancel Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmationCode">Confirmation Code:</label>
          <input
            type="text"
            id="confirmationCode"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cancel Booking</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
