"use client";
import { SectionReveal, fadeUp } from "../ui/Motion";
import { Zap, Shield, LayoutGrid, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <SectionReveal className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Built for <span className="text-gradient">Excellence</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <motion.div variants={fadeUp} className="md:col-span-2 glass rounded-[2.5rem] p-12 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Zap className="text-indigo-500 mb-6" size={56} />
            <div>
              <h3 className="text-4xl font-black mb-4">Lightning Fast Performance</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-lg text-xl font-medium">Our apps are optimized for maximum performance, ensuring a seamless, 60fps experience on every device.</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-[2.5rem] p-12 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/50 transition-colors duration-500">
            <Shield className="text-emerald-500 mb-6" size={56} />
            <div>
              <h3 className="text-3xl font-black mb-4">Bank-Level Security</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Your data is encrypted end-to-end.</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="glass rounded-[2.5rem] p-12 flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/50 transition-colors duration-500">
            <Users className="text-amber-500 mb-6" size={56} />
            <div>
              <h3 className="text-3xl font-black mb-4">50K+ Happy Users</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">Join a thriving community.</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-2 glass rounded-[2.5rem] p-12 flex flex-col justify-between relative overflow-hidden group hover:border-pink-500/50 transition-colors duration-500">
             <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <TrendingUp className="text-pink-500 mb-6" size={56} />
            <div>
              <h3 className="text-4xl font-black mb-4">Track Your Growth</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-lg text-xl font-medium">Advanced analytics dashboards to help you understand your productivity patterns.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}