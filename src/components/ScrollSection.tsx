"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollSectionProps {
  children: ReactNode;
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

export function ScrollSection({ children }: ScrollSectionProps) {
  return (
    <motion.section
      className="snap-start min-h-screen flex flex-col justify-start pt-28 pb-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className="w-full max-w-5xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
}
