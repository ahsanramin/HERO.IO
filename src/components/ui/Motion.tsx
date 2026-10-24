"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
export function SectionReveal({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className={className}>
      {children}
    </motion.section>
  );
}