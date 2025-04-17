const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const existingCleaners = await prisma.cleaner.findMany();

  if (existingCleaners.length === 0) {
    await prisma.cleaner.createMany({
      data: [
        { id: 1, name: 'Carlos Cleaner', phone: '555-111-2222' },
        { id: 2, name: 'Ana Sparkle', phone: '555-333-4444' },
      ],
    });

    console.log("✅ Cleaners seeded!");
  } else {
    console.log("✅ Cleaners already exist, skipping...");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    prisma.$disconnect();
    process.exit(1);
  });

