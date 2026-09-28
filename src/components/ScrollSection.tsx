"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
  align?: "center" | "start";
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

export function ScrollSection({ children, align = "center" }: ScrollSectionProps) {
  const isStart = align === "start";
  
  const sectionClass = isStart 
    ? "snap-start min-h-screen flex flex-col justify-start pt-28 relative"
    : "snap-start min-h-screen flex items-center justify-center relative";
    
  const innerClass = isStart
    ? "w-full max-w-5xl mx-auto px-6 pb-16"
    : "w-full max-w-5xl mx-auto px-6 py-16";

  return (
    <motion.section
      className={sectionClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className={innerClass}>
        {children}
      </div>
    </motion.section>
  );
}
