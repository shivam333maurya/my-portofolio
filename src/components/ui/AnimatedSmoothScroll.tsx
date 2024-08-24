"use client";
import React from "react";
import { motion } from "framer-motion";

interface SmoothScrollAnimationProps {
  children: React.ReactNode;
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: number;
  finalY?: number;
  finalX?: number;
  initialX?: number;
  delay?: number;
}

const SmoothScrollAnimation: React.FC<SmoothScrollAnimationProps> = ({
  children,
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = 50,
  finalY = 0,
  finalX = 0,
  initialX = 0,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: initialOpacity, y: initialY, x: initialX }}
      whileInView={{
        opacity: finalOpacity,
        y: finalY,
        x: finalX,
        transition: { duration: 0.8, delay: delay },
      }}
    >
      {children}
    </motion.div>
  );
};

export { SmoothScrollAnimation };
