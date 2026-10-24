"use client";
import { SectionReveal, fadeUp } from "../ui/Motion";
import Image from "next/image";
import { motion } from "framer-motion";

export function TopExperts() {
  return (
    <SectionReveal className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Meet Our <span className="text-gradient">Top Experts</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div variants={fadeUp} key={i} className="group flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-[var(--background)] shadow-xl ring-4 ring-transparent group-hover:ring-indigo-500 transition-all duration-300">
                <Image src={`https://i.pravatar.cc/200?img=${i + 15}`} alt="Expert" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="font-black text-2xl mb-1">Alex Johnson</h4>
              <p className="text-sm font-bold text-indigo-500 uppercase tracking-wider">Lead Architect</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}