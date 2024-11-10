"use client";
import { useState, useEffect, useRef } from "react";
import BG from "@/assets/images/bg.webp";

function ExperienceBackground({ children }) {
  const [opacity, setOpacity] = useState(1); // Set initial opacity to 1 (100%)
  const backgroundRef = useRef(null); // Ref for the ExperienceBackground component
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (backgroundRef.current !== null) {
        const rect = backgroundRef.current.offsetTop;
        setMaxScroll(rect); // Set maxScroll to the offset top position of the div
      }
    };
  
    updateMaxScroll(); // Run initially
  
    // Add resize event listener
    window.addEventListener("resize", updateMaxScroll);
  
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, [backgroundRef.current]);

  const handleScroll = () => {
    const scrollY = window.scrollY + 300;

    if (scrollY > maxScroll) {
      const newOpacity = Math.max(1 - (scrollY - maxScroll) / 800, 0.4); // Smoothly fades out
      setOpacity(newOpacity);
    } else {
      // Reset opacity to 1 when above maxScroll
      setOpacity(1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      ref={backgroundRef}
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        background: `url(${BG.src}) no-repeat fixed center`,
        backgroundSize: "cover",
        backdropFilter: "brightness(0.5)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: `rgba(0, 0, 0, ${opacity})`,
          zIndex: 1,
        }}
      ></div>
      {children}
    </div>
  );
}

export default ExperienceBackground;
