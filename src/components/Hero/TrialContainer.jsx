"use client";
import React, { useState, useEffect, useRef } from "react";
import { Trail } from "../animations/Trial";

function TrailContainer({ children, className }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top + 200 <= window.innerHeight && rect.bottom >= 0) {
          setOpen(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={className} ref={containerRef}>
      <Trail open={open}>{children}</Trail>
    </div>
  );
}

export default TrailContainer;
