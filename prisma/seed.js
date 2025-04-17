const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Generate random confirmation codes like "F4L9XZ"
function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

async function main() {
  console.log("🌍 Seeding database...");

  // 1️⃣ Rooms
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

  // 2️⃣ Cleaning Types
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

  // 3️⃣ Cleaners
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

  // 4️⃣ Bookings
  const existingBookings = await prisma.booking.findMany();
  if (existingBookings.length === 0) {
    await prisma.booking.createMany({
      data: [
        {
          name: "John Doe",
          address: "123 Main St, Boston, MA",
          email: "john@example.com",
          phone: "123-456-7890",
          roomId: 1,
          cleaningId: 2,
          date: "2025-04-11",
          totalPrice: 150,
          cleanerId: 1,
          status: "confirmed",
          notes: "Bring eco-friendly products",
          confirmationCode: generateCode(),
        },
        {
          name: "Jane Smith",
          address: "456 Elm St, Boston, MA",
          email: "jane@example.com",
          phone: "987-654-3210",
          roomId: 2,
          cleaningId: 1,
          date: "2025-04-12",
          totalPrice: 200,
          cleanerId: 2,
          status: "pending",
          notes: null,
          confirmationCode: generateCode(),
        },
      ],
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
