"use client";
import { useState, useEffect, Suspense } from "react";

function NavbarBackground({ children }) {
  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const calculateBlurAndOpacity = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.min(scrollY / maxScroll, 0.15);
      const newBlur = Math.min((scrollY / maxScroll) * 6, 6);
      return { newBlur, newOpacity };
    };

    const { newBlur, newOpacity } = calculateBlurAndOpacity();
    setBlur(newBlur);
    setOpacity(newOpacity);

    const handleScroll = () => {
      const { newBlur, newOpacity } = calculateBlurAndOpacity();
      setBlur(newBlur);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Suspense fallback={<></>}>

    <header
      className="fixed top-0 px-8 w-full z-50"
      style={{ backdropFilter: `blur(${blur}px)`, backgroundColor: `rgba(19, 19, 19, ${opacity})` }}
    >
      {children}
    </header>
    </Suspense>
  );
}

export default NavbarBackground;
