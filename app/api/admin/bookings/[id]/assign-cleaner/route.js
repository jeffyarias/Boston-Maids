import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  const bookingId = Number(params.id);
  const { cleanerId } = await request.json();

  if (!cleanerId || isNaN(bookingId)) {
    return new Response(
      JSON.stringify({ error: "Missing or invalid cleanerId or bookingId" }),
      { status: 400 }
    );
  }

  try {
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: { cleanerId: Number(cleanerId) },
    });

    return Response.json(updatedBooking);
  } catch (error) {
    console.error("❌ Failed to assign cleaner:", error);
    return new Response(
      JSON.stringify({ error: "Could not assign cleaner" }),
      { status: 500 }
    );
  }
}
