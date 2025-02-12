"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // Import for formatting

const DatePickerComponent = ({ selectedDate, onChange }) => {
  return (
    <div>
      <label>Select Date & Time:</label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MM-dd-yy h:mm aa" // ✅ Includes time with AM/PM
        minDate={new Date()} // Prevent selecting past dates
        showTimeSelect // ✅ Enables time selection
        timeFormat="h:mm aa" // ✅ 12-hour format with AM/PM
        timeIntervals={15} // ✅ Time selection every 15 minutes
        placeholderText="Choose a date and time"
      />
    </div>
  );
};

export default DatePickerComponent;
