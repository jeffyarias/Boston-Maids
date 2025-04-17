// app/api/admin/bookings/create.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  const { name, email, phone, roomId, cleaningId, date, status, notes, confirmationCode } = await request.json();

  try {
    const newBooking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        roomId,
        cleaningId,
        date,
        status: status || 'pending', // Default to 'pending' if no status is provided
        notes,
        confirmationCode, // Add the confirmation code
      },
    });

    return new Response(JSON.stringify(newBooking), { status: 201 });
  } catch (error) {
    console.error('❌ Error creating booking:', error);
    return new Response(JSON.stringify({ error: 'Failed to create booking' }), { status: 500 });
  }
}
