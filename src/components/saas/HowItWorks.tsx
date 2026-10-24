"use client";
import { SectionReveal, fadeUp } from "../ui/Motion";
import { motion } from "framer-motion";
import { LayoutGrid, Shield, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    { step: "01", title: "Browse Apps", desc: "Find the perfect app for your needs from our extensive catalog.", icon: LayoutGrid },
    { step: "02", title: "Install Securely", desc: "Download and install with one click. No hidden fees.", icon: Shield },
    { step: "03", title: "Boost Productivity", desc: "Customize settings, integrate workflows, and watch your output soar.", icon: Zap },
  ];
  return (
    <SectionReveal className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">How It <span className="text-gradient">Works</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-indigo-500/20 via-indigo-500 to-indigo-500/20 -translate-y-1/2 z-0 border-t border-dashed border-indigo-400"></div>
          {steps.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center bg-[var(--background)] p-10 rounded-[2rem] border border-[var(--border)] shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              <div className="w-20 h-20 bg-indigo-500/10 text-indigo-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <item.icon size={40} />
              </div>
              <div className="absolute -top-6 -right-6 text-7xl font-black text-slate-100 dark:text-slate-800 select-none z-[-1]">{item.step}</div>
              <h4 className="font-black text-2xl mb-3">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}