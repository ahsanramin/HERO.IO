"use client";
import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="bg-indigo-600 text-white py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {[
            { label: "Total Downloads", value: "29.6M", sub: "21% More Than Last Month" },
            { label: "Total Reviews", value: "906K", sub: "46% More Than Last Month" },
            { label: "Active Apps", value: "132+", sub: "31 More Will Launch" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }} className="py-8 md:py-0">
              <p className="text-sm font-bold text-white/70 uppercase tracking-[0.2em] mb-4">{stat.label}</p>
              <p className="text-7xl md:text-8xl font-black mb-4 drop-shadow-xl tracking-tighter">{stat.value}</p>
              <p className="text-sm font-bold text-white/80">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}