import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cleaners = await prisma.cleaner.findMany({
      orderBy: { name: 'asc' }
    });

    return Response.json(cleaners);
  } catch (error) {
    console.error('❌ Failed to fetch cleaners:', error);
    return new Response(JSON.stringify({ error: 'Could not get cleaners' }), {
      status: 500,
    });
  }
}
