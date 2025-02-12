"use client";
import React from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css"; // Ensures styles load correctly

const TimePickerComponent = ({ selectedTime, onChange }) => {
  return (
    <div>
      <label>Select Time:</label>
      <TimePicker
        onChange={onChange}
        value={selectedTime}
        disableClock={true} // Removes the clock UI
        format="hh:mm a" // 12-hour format with AM/PM
        clearIcon={null} // Removes the clear button
      />
    </div>
  );
};

export default TimePickerComponent;
