"use client";
import { SectionReveal, fadeUp } from "../ui/Motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <SectionReveal className="py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-24">Client <span className="text-gradient">Testimonials</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
             <motion.div variants={fadeUp} key={i} className="bg-slate-800/50 border border-slate-700/50 p-10 rounded-[2.5rem] relative backdrop-blur-md hover:border-indigo-500/50 transition-colors duration-300">
                <Quote className="absolute top-8 right-8 text-indigo-500/20" size={64} />
                <div className="flex items-center gap-2 text-amber-400 mb-8">
                  <Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/><Star fill="currentColor" size={20}/>
                </div>
                <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium">"HERO.IO has completely transformed how I manage my daily tasks. The apps are intuitive, beautiful, and incredibly fast."</p>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden relative border-2 border-indigo-500">
                    <Image src={`https://i.pravatar.cc/150?img=${i+10}`} alt="User" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-white">Sarah Doe</h4>
                    <p className="text-sm font-bold text-indigo-400">Product Manager</p>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}