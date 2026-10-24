"use client";
import Link from "next/link";
import { appsData } from "@/data/apps";
import { AppCard } from "../AppCard";
import { SectionReveal, fadeUp } from "../ui/Motion";
import { TextReveal } from "../ui/TextReveal";
import { Magnetic } from "../ui/Magnetic";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Trending() {
  const topApps = appsData.slice(0, 8);
  return (
    <SectionReveal className="py-32 container mx-auto px-4">
      <div className="text-center mb-24">
        <TextReveal text="Trending Apps" className="text-5xl md:text-7xl font-black mb-6 justify-center tracking-tight" />
        <motion.p variants={fadeUp} className="text-xl text-slate-600 dark:text-slate-400 font-medium">Explore All Trending Apps on the Market developed by us</motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topApps.map((app) => <AppCard key={app.id} app={app} />)}
      </div>
      <div className="text-center mt-20">
        <Magnetic>
          <Link href="/apps" className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all shadow-2xl">
            Show All Apps <ChevronRight size={28} />
          </Link>
        </Magnetic>
      </div>
    </SectionReveal>
  );
}