const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const bookings = await prisma.booking.findMany({
    include: { room: true, cleaner: true, cleaningType: true }
  });

  console.log("🧾 Current bookings in DB:");
  console.log(bookings);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error("❌ Error:", e);
    prisma.$disconnect();
    process.exit(1);
  });
