"use client";
import React, { useState } from "react";
import styles from "./booking.module.css";
import Extras from "../Extras/Extras";
import axios from "axios";
import Modal from "../Modal/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // Import for formatting

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    basePrice: 100,
    date: new Date(), // ✅ Holds both date & time
    extraPrice: 0,
    extras: {
      fridge: false,
      oven: false,
      move: false,
      wall: false,
    },
  });

  // ✅ Update date & time
  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date }));
  };

  // ✅ Handle input change
  const handleInputChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // ✅ Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.address) {
      document.getElementById("name").focus();
      return;
    }
    await axios.post("/api/form", formData);
    setFormData({
      ...formData,
      name: "",
      email: "",
      phone: "",
      address: "",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      date: new Date(),
    });
  };

  // ✅ Increment & Decrement values
  const handleIncrement = (field) => {
    setFormData((prev) => ({ ...prev, [field]: Math.min(prev[field] + 1, 9) }));
  };

  const handleDecrement = (field) => {
    setFormData((prev) => ({ ...prev, [field]: Math.max(prev[field] - 1, 0) }));
  };

  // ✅ Handle Extras
  const toggleExtra = (extra) => {
    setFormData((prev) => {
      const isActive = !prev.extras[extra];
      return {
        ...prev,
        extras: { ...prev.extras, [extra]: isActive },
        extraPrice: isActive ? prev.extraPrice + 25 : prev.extraPrice - 25,
      };
    });
  };

  const totalPrice =
    (formData.bedrooms + formData.bathrooms) * 20 +
    formData.basePrice +
    formData.extraPrice;

  return (
    <div className={styles.container}>
      <Modal 
        date={format(formData.date, "MM-dd-yy h:mm aa")} // ✅ Format for display
        time={format(formData.date, "h:mm aa")} // ✅ Ensures correct time format
        totalPrice={totalPrice}
        bedrooms={formData.bedrooms}
        bathrooms={formData.bathrooms}
      />
      <div className={styles.box1}>
        <div className={styles.formstyle10}>
          <h1>
            Booking Information
            <span>Enter Information for the best cleaning of your life</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.section}>First Name & Address</div>
            <div className={styles.innerwrap}>
              <label htmlFor="name">Your Full Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className={styles.section}>Email & Phone</div>
            <div className={styles.innerwrap}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.section}>Bedrooms & Bathrooms</div>
            <div className={styles.innerwrap}>
              <label htmlFor="bedrooms">Bedrooms</label>
              <div className={styles.btns}>
                <button type="button" onClick={() => handleDecrement("bedrooms")}>-</button>
                <span>{formData.bedrooms} Bedrooms</span>
                <button type="button" onClick={() => handleIncrement("bedrooms")}>+</button>
              </div>
              
              <label htmlFor="bathrooms">Bathrooms</label>
              <div className={styles.btns}>
                <button type="button" onClick={() => handleDecrement("bathrooms")}>-</button>
                <span>{formData.bathrooms} Bathrooms</span>
                <button type="button" onClick={() => handleIncrement("bathrooms")}>+</button>
              </div>
            </div>

            <div className={styles.section}>Choose Time and Date</div>
            <div className={styles.innerwrap}>
              <label htmlFor="date">Date & Time</label>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="MM-dd-yy h:mm aa" // ✅ Includes date & time
                minDate={new Date()} // ✅ Prevents past selection
                showTimeSelect // ✅ Enables time selection
                timeFormat="h:mm aa" // ✅ 12-hour format with AM/PM
                timeIntervals={15} // ✅ Allows 15-minute intervals
                placeholderText="Choose a date and time"
              />
            </div>

            <div className={styles.section}>Extras</div>
            <div className={styles.innerwrap}>
              <Extras onClick={toggleExtra} extras={formData.extras} />
            </div>

            <div className={styles.buttonsection}>
              <button className={styles.buttom} type="submit">Cash Payment</button>
              <span className="privacy-policy">
                <input id="mycheck" type="checkbox" name="checkbox" /> You agree to our Terms and Policy.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
