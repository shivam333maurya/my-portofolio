"use client";
import React from "react";
import { motion } from "framer-motion";

interface SmoothScrollAnimationProps {
  children: React.ReactNode;
  initialOpacity?: number;
  finalOpacity?: number;
  initialY?: number;
  finalY?: number;
  delay?: number;
}

const SmoothScrollAnimation: React.FC<SmoothScrollAnimationProps> = ({
  children,
  initialOpacity = 0,
  finalOpacity = 1,
  initialY = 50,
  finalY = 0,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: initialOpacity, y: initialY }}
      whileInView={{
        opacity: finalOpacity,
        y: finalY,
        transition: { duration: 0.8, delay: delay },
      }}
    >
      {children}
    </motion.div>
  );
};

export { SmoothScrollAnimation };
