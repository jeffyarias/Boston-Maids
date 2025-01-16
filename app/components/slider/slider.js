"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./slider.module.css";

const Slider = () => {
  // Use public folder paths for images
  const slides = ["/Images/01.jpg", "/Images/02.jpg", "/Images/03.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const auto = true; // Toggle for auto-scroll
  const intervalTime = 3000; // Interval in ms

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    if (auto) {
      const slideInterval = setInterval(nextSlide, intervalTime);
      return () => clearInterval(slideInterval);
    }
  }, [auto, intervalTime]);

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.current : ""
          }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill" // Fill the container
            objectFit="cover" // Crop to fit
            objectPosition="top" // Focus on the top portion
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;