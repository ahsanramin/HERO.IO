"use client";
import { SectionReveal, fadeUp } from "../ui/Motion";
import { motion } from "framer-motion";

export function Categories() {
  const cats = ["Productivity", "Health & Fitness", "Education", "Finance", "Entertainment", "Social", "Utilities", "Photography", "Music"];
  return (
    <SectionReveal className="py-32 container mx-auto px-4 text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6">Explore <span className="text-gradient">Categories</span></h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {cats.map((cat, i) => (
          <motion.span variants={fadeUp} whileHover={{ scale: 1.05, y: -5 }} key={i} className="px-8 py-4 glass rounded-2xl font-bold text-lg hover:border-indigo-500 cursor-pointer transition-colors shadow-sm hover:shadow-lg">
            {cat}
          </motion.span>
        ))}
      </div>
    </SectionReveal>
  );
}