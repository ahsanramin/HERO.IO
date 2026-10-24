"use client";
import { SectionReveal } from "../ui/Motion";

export function CTA() {
  return (
    <SectionReveal className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-16 md:p-32 text-center relative z-10 shadow-2xl overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
         <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
         <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-lg">Ready to level up?</h2>
         <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">Join millions of users who have transformed their lives with HERO.IO apps. Start your journey today.</p>
         <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">Get Started for Free</button>
            <button className="bg-indigo-900/50 text-white backdrop-blur-md border border-white/20 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-lg">Talk to Sales</button>
         </div>
      </div>
    </SectionReveal>
  );
}