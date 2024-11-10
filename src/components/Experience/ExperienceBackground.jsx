"use client";
import { useState, useEffect, useRef, Suspense } from "react";
import BG from "@/assets/images/bg.webp";

function ExperienceBackground({ children }) {
  const [opacity, setOpacity] = useState(1);
  const backgroundRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateMaxScroll = () => {
      if (backgroundRef.current !== null) {
        const rect = backgroundRef.current.offsetTop;
        setMaxScroll(rect);
      }
    };

    updateMaxScroll();

    window.addEventListener("resize", updateMaxScroll);

    return () => window.removeEventListener("resize", updateMaxScroll);
  }, [backgroundRef.current]);

  const handleScroll = () => {
    const scrollY = window.scrollY + 300;

    if (scrollY > maxScroll) {
      const newOpacity = Math.max(1 - (scrollY - maxScroll) / 800, 0.4);
      setOpacity(newOpacity);
    } else {
      setOpacity(1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  );
}

export default ExperienceBackground;
