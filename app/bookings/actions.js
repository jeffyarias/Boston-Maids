"use server";

import { db } from "@/app/lib/db"; // ✅ Database connection

// ✅ Fetch available rooms
export async function getRooms() {
  return db.prepare("SELECT * FROM rooms").all();
}

// ✅ Fetch available cleaning types
export async function getCleaningTypes() {
  return db.prepare("SELECT * FROM cleaning_types").all();
}

// ✅ Fetch available dates for a room & cleaning type
export async function getAvailableDates(roomId, cleaningId) {
  return db.prepare(
    "SELECT date FROM availability WHERE room_id = ? AND cleaning_id = ? AND slots > 0"
  ).all(roomId, cleaningId);
}

// ✅ Securely calculate total price
export async function calculateTotalPrice(roomId, cleaningId, bedrooms) {
  const room = db.prepare("SELECT base_price FROM rooms WHERE id = ?").get(roomId);
  const cleaning = db.prepare("SELECT multiplier FROM cleaning_types WHERE id = ?").get(cleaningId);

  if (!room || !cleaning) return 0;

  return (room.base_price * cleaning.multiplier) + (bedrooms * 20);
}

// ✅ Handle form submission securely
export async function submitBooking(formData) {
  const roomId = formData.get("roomId");
  const cleaningId = formData.get("cleaningId");
  const bedrooms = formData.get("bedrooms");
  const selectedDate = formData.get("date");
  const name = formData.get("name");
  const address = formData.get("address");
  const email = formData.get("email");
  const phone = formData.get("phone");

  const totalCost = await calculateTotalPrice(roomId, cleaningId, bedrooms);

  db.prepare(
    "INSERT INTO bookings (name, address, email, phone, room_id, cleaning_id, date, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  ).run(name, address, email, phone, roomId, cleaningId, selectedDate, totalCost);

  console.log(`Booking confirmed for ${name} on ${selectedDate} at $${totalCost}`);
}
