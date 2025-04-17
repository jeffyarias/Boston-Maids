import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, confirmationCode } = await request.json();

    // Basic validation
    if (!email || !confirmationCode) {
      return new Response(
        JSON.stringify({ error: 'Email and confirmation code are required.' }),
        { status: 400 }
      );
    }

    // Find booking
    const booking = await prisma.booking.findFirst({
      where: {
        email,
        confirmationCode,
        status: { not: 'canceled' },
      },
    });

    // Booking not found or already canceled
    if (!booking) {
      return new Response(
        JSON.stringify({ error: 'Booking not found or already canceled.' }),
        { status: 404 }
      );
    }

    // Update booking status to canceled
    const canceled = await prisma.booking.update({
      where: { id: booking.id },
      data: { status: 'canceled' },
    });

    // Return confirmation
    return new Response(
      JSON.stringify({
        message: 'Booking canceled successfully.',
        bookingId: canceled.id,
        status: canceled.status,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Failed to cancel booking:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500 }
    );
  }
}
