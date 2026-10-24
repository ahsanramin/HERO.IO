"use client";
import { SectionReveal, fadeUp } from "../ui/Motion";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const faqs = [
    { q: "What is HERO.IO?", a: "HERO.IO is a premium suite of productivity applications designed to streamline your workflow." },
    { q: "Are the apps free to use?", a: "We offer a generous free tier. For power users, we offer Pro and Enterprise plans." },
    { q: "How does the installation process work?", a: "Browse our apps, click 'Install', and they will be saved to your dashboard instantly." },
    { q: "Is my data secure?", a: "Absolutely. We use bank-level encryption and do not sell your personal data." },
  ];

  return (
    <SectionReveal className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div variants={fadeUp} key={i} className="glass rounded-2xl overflow-hidden border border-[var(--border)]">
              <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-8 py-6 text-left flex justify-between items-center font-black text-xl hover:text-indigo-500 transition-colors">
                {faq.q}
                <HelpCircle className={`transition-transform duration-300 ${activeFaq === i ? "rotate-180 text-indigo-500" : ""}`} />
              </button>
              <motion.div initial={false} animate={{ height: activeFaq === i ? "auto" : 0, opacity: activeFaq === i ? 1 : 0 }} className="overflow-hidden">
                <p className="px-8 pb-6 text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}