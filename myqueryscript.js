const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const bookings = await prisma.booking.findMany({
    include: { room: true, cleaner: true }
  });
  console.log(bookings);
}

main();
