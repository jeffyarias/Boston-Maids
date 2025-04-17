import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '10');
  const name = url.searchParams.get('name') || '';
  const email = url.searchParams.get('email') || '';
  const date = url.searchParams.get('date') || '';

  try {
    const bookings = await prisma.booking.findMany({
      where: {
        name: {
          contains: name, // Filter by name
        },
        email: {
          contains: email, // Filter by email
        },
        date: {
          contains: date, // Filter by date
        },
      },
      skip: (page - 1) * limit,
      take: limit,
      include: {
        room: true,
        cleaner: true,
        cleaningType: true,
      },
      orderBy: {
        date: 'asc',
      },
    });

    const totalBookings = await prisma.booking.count({
      where: {
        name: {
          contains: name,
        },
        email: {
          contains: email,
        },
        date: {
          contains: date,
        },
      },
    });

    const totalPages = Math.ceil(totalBookings / limit);

    return new Response(JSON.stringify({ bookings, totalPages, currentPage: page }));
  } catch (error) {
    console.error('❌ Error fetching bookings:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch bookings' }), { status: 500 });
  }
}
