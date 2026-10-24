"use client";
import { SectionReveal, fadeUp } from "../ui/Motion";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <SectionReveal className="py-32 container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-16">Choose Your <span className="text-gradient">Plan</span></h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Basic", price: "0", features: ["Access 3 Apps", "Cloud Sync", "Basic Analytics", "Community Support"] },
          { name: "Pro", price: "12", features: ["Access All Apps", "Priority Sync", "Advanced Analytics", "24/7 Support", "No Ads"] },
          { name: "Enterprise", price: "49", features: ["Everything in Pro", "Custom Integrations", "Dedicated Manager", "SLA Guarantee"] }
        ].map((plan, i) => (
          <motion.div variants={fadeUp} key={i} className={`p-10 rounded-[3rem] border ${i===1 ? 'border-indigo-500 shadow-[0_0_50px_rgba(99,102,241,0.2)] bg-[var(--card)] relative scale-105 z-10' : 'border-[var(--border)] glass'} flex flex-col items-center group hover:-translate-y-2 transition-transform duration-300`}>
            {i===1 && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">Most Popular</span>}
            <h3 className="text-2xl font-black mb-3">{plan.name}</h3>
            <div className="text-6xl font-black mb-8">${plan.price}<span className="text-xl text-slate-500 font-medium">/mo</span></div>
            <ul className="space-y-5 mb-10 w-full text-left flex-grow">
               {plan.features.map((f, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-bold text-lg"><CheckCircle2 size={24} className="text-indigo-500 shrink-0"/> {f}</li>
               ))}
            </ul>
            <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${i===1 ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-600/30' : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'}`}>Get Started</button>
          </motion.div>
        ))}
      </div>
    </SectionReveal>
  );
}