'use client';

import { useState, useEffect } from 'react';
import styles from './AdminBookingsPage.module.css';

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState([]); // Initialize bookings as an empty array
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchParams, setSearchParams] = useState({
    name: '',
    email: '',
    date: '',
  });

  // Fetch bookings based on search and pagination
  useEffect(() => {
    const { name, email, date } = searchParams;
    fetch(
      `/api/admin/bookings?page=${currentPage}&limit=${limit}&name=${name}&email=${email}&date=${date}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log response for debugging
        setBookings(data.bookings || []); // Ensure bookings is always an array
        setTotalPages(data.totalPages);
      })
      .catch((err) => {
        console.error('❌ Failed to fetch bookings:', err);
        setBookings([]); // Fallback to empty array on error
      });
  }, [currentPage, limit, searchParams]);

  // Handle pagination button clicks
  const handlePagination = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Handle changes in search fields
  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🧾 Admin Booking Dashboard</h1>

      {/* Search Inputs */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          name="name"
          placeholder="Search by name"
          value={searchParams.name}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Search by email"
          value={searchParams.email}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <input
          type="date"
          name="date"
          value={searchParams.date}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>

      {/* Bookings Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Room</th>
            <th>Cleaning Type</th>
            <th>Cleaner</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.date}</td>
                <td>{booking.room?.name}</td>
                <td>{booking.cleaningType?.name}</td>
                <td>{booking.cleaner?.name ?? 'Unassigned'}</td>
                <td>{booking.status}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePagination(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
