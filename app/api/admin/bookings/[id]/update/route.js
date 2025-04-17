import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  const bookingId = Number(params.id);

  if (isNaN(bookingId)) {
    return new Response(JSON.stringify({ error: 'Invalid booking ID' }), { status: 400 });
  }

  const body = await request.json();

  try {
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        notes: body.notes,
        status: body.status,
        cleanerId: body.cleanerId,
        roomId: body.roomId,
        cleaningId: body.cleaningId,
        date: body.date,
        availabilityId: body.availabilityId,
      },
    });

    return Response.json(updatedBooking);
  } catch (error) {
    console.error('❌ Failed to update booking:', error);
    return new Response(JSON.stringify({ error: 'Update failed' }), { status: 500 });
  }
}
