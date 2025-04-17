"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./slider.module.css";
// Import images
import photo1 from "./images/01.jpg";
import photo2 from "./images/02.jpg";
import photo3 from "./images/03.jpg";

const Slider = () => {
  const slides = [photo1, photo2, photo3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const auto = true; // Auto-scroll toggle
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
    <div className={styles.sliderContainer}>
      {/* Slider */}
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
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Blinking Downward Arrow */}
      <div className={styles.arrowContainer}>
        <a href="#content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.blinkingArrow}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Slider;
