"use client";
import { motion } from "framer-motion";

export function TextReveal({ text, className = "" }: { text: string, className?: string }) {
  const words = text.split(" ");
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.05 } }, hidden: {} }} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } } }} className="mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}