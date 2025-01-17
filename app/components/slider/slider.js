"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./slider.module.css";
// Replace these imports with your own images
import photo1 from "./images/01.jpg";
import photo2 from "./images/02.jpg";
import photo3 from "./images/03.jpg";

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
            fill // New syntax replaces `layout="fill"`
            style={{
              objectFit: "cover", // New syntax replaces `objectFit`
              objectPosition: "top", // New syntax replaces `objectPosition`
            }}
            priority={index === 0} // Keeps the first image prioritized
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
