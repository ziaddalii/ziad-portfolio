"use client";
import React from "react";
import { motion } from "framer-motion";

export const Trail = ({ children, overflowHidden = true }) => {
  const items = React.Children.toArray(children);
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: 0,
      y: 20,
      rotate: 20,
      transformOrigin: "left",
    },
    animate: (index) => {
      return {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: 0,
        transition: {
          delay: 0.05 * index,
          duration: .3,
        },
      };
    },
  };
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className={`relative ${overflowHidden ? "overflow-hidden" : "overflow-visible"}`}>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={i}
          >
            {item}
          </motion.div>
        </div>
      ))}
    </>
  );
};
