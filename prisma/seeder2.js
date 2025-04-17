const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Generate random confirmation codes like "F4L9XZ"
function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Format date as MM-DD-YYYY
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Ensure month is 2 digits
  const day = date.getDate().toString().padStart(2, "0"); // Ensure day is 2 digits
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
}

async function main() {
  console.log("🌍 Seeding database...");

  // Insert Rooms if not already present
  const existingRooms = await prisma.room.findMany();
  if (existingRooms.length === 0) {
    await prisma.room.createMany({
      data: [
        { name: "Standard Room", basePrice: 100 },
        { name: "Deluxe Room", basePrice: 150 },
      ],
    });
    console.log("✅ Rooms Seeded!");
  } else {
    console.log("✅ Rooms already exist, skipping...");
  }

  // Insert Cleaning Types if not already present
  const existingCleaningTypes = await prisma.cleaningType.findMany();
  if (existingCleaningTypes.length === 0) {
    await prisma.cleaningType.createMany({
      data: [
        { name: "Basic Cleaning", multiplier: 1.0 },
        { name: "Deep Cleaning", multiplier: 1.5 },
      ],
    });
    console.log("✅ Cleaning Types Seeded!");
  } else {
    console.log("✅ Cleaning Types already exist, skipping...");
  }

  // Insert Cleaners if not already present
  const existingCleaners = await prisma.cleaner.findMany();
  if (existingCleaners.length === 0) {
    await prisma.cleaner.createMany({
      data: [
        { name: "Carlos Cleaner", phone: "555-111-2222" },
        { name: "Ana Sparkle", phone: "555-333-4444" },
      ],
    });
    console.log("✅ Cleaners Seeded!");
  } else {
    console.log("✅ Cleaners already exist, skipping...");
  }

  // Insert Bookings if not already present (Create 50 bookings with auto-generated IDs)
  const existingBookings = await prisma.booking.findMany();
  if (existingBookings.length === 0) {
    const bookingData = [];
    for (let i = 1; i <= 50; i++) {
      const booking = {
        name: `Booking ${i}`,
        address: `${i} Main St, Boston, MA`,
        email: `booking${i}@example.com`,
        phone: `123-456-${i}`,
        roomId: i % 2 === 0 ? 1 : 2, // Alternate room 1 and 2
        cleaningId: i % 2 === 0 ? 1 : 2, // Alternate cleaning types
        date: formatDate(`2025-04-${i % 30 + 1}`), // Use MM-DD-YYYY format
        totalPrice: i * 50, // Just an example price
        cleanerId: i % 2 === 0 ? 1 : 2, // Alternate cleaners
        status: i % 2 === 0 ? "confirmed" : "pending", // Alternate booking status
        notes: `Notes for booking ${i}`,
        confirmationCode: generateCode(),
      };
      bookingData.push(booking);
    }

    await prisma.booking.createMany({
      data: bookingData,
    });

    console.log("✅ Bookings Seeded!");
  } else {
    console.log("✅ Bookings already exist, skipping...");
  }

  console.log("🌱 Seeding complete!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    prisma.$disconnect();
    process.exit(1);
  });
