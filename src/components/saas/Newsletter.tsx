"use client";
import { SectionReveal } from "../ui/Motion";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <SectionReveal className="py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-[var(--border)] shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-20 h-20 mx-auto bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-8">
          <Mail size={40} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Subscribe to our Newsletter</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10">Get the latest updates, productivity tips, and exclusive offers straight to your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email address" className="flex-grow px-6 py-4 rounded-2xl bg-[var(--background)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium" required />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition-transform hover:scale-105 shadow-xl shadow-indigo-600/30">Subscribe</button>
        </form>
      </div>
    </SectionReveal>
  );
}