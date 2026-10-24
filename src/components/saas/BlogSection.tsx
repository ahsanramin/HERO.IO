"use client";
import { SectionReveal, fadeUp } from "../ui/Motion";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function BlogSection() {
  return (
    <SectionReveal className="py-32 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">Latest <span className="text-gradient">Insights</span></h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Tips, tricks, and news from our team.</p>
        </div>
        <Link href="/blog" className="px-6 py-3 glass rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">View All Articles</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <motion.div variants={fadeUp} key={i} className="glass rounded-[2rem] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
            <div className="h-64 relative overflow-hidden">
              <Image src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80`} alt="Blog" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Productivity</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black mb-3 group-hover:text-indigo-500 transition-colors line-clamp-2">10 Ways to Maximize Your Focus Today</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium line-clamp-3 mb-6">Discover the science behind deep work and how you can train your brain to stay focused for longer periods without burning out.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionReveal>
  );
}