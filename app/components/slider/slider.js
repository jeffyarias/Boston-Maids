"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./slider.module.css";
// Replace these imports with your own images
import photo1 from "./Images/01.jpg";
import photo2 from "./Images/02.jpg";
import photo3 from "./Images/03.jpg";

const Slider = () => {
  const slides = [photo1, photo2, photo3];
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
            layout="fill"        // Fill the container
            objectFit="cover"    // Crop to fit
            objectPosition="top" // Focus on the top portion
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
