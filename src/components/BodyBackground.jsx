"use client";
import { useState, useEffect } from "react";

function BodyBackground({ children }) {
  const [opacity, setOpacity] = useState(0.4);

  useEffect(() => {
    const calculateOpacity = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400;
      return Math.min(0.4 + (scrollY / maxScroll) * 0.5, 1);
    };

    setOpacity(calculateOpacity());

    const handleScroll = () => {
      setOpacity(calculateOpacity());
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full z-10 overflow-hidden"
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    >
      {children}
    </div>
  );
}

export default BodyBackground;
