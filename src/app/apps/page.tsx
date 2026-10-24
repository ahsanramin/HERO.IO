"use client";
import { useState, useEffect } from "react";
import { appsData } from "@/data/apps";
import { AppCard } from "@/components/AppCard";
import { Search, Loader2, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/components/ui/Motion";

export default function AllApps() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"default" | "high-low" | "low-high">("default");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [searchTerm, sortOrder]);

  let filteredApps = appsData.filter((app) => app.title.toLowerCase().includes(searchTerm.toLowerCase()));
  if (sortOrder === "high-low") filteredApps.sort((a, b) => b.downloads - a.downloads);
  else if (sortOrder === "low-high") filteredApps.sort((a, b) => a.downloads - b.downloads);

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Our All <span className="text-gradient">Applications</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">Explore All Apps on the Market developed by us. We code for Millions.</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6 glass p-4 rounded-3xl shadow-lg border border-[var(--border)]">
        <h2 className="text-xl font-bold bg-white dark:bg-slate-800 px-8 py-4 rounded-2xl shadow-sm w-full lg:w-auto text-center border border-[var(--border)]">
          <span className="text-indigo-500 text-2xl">({filteredApps.length})</span> Apps Found
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="relative w-full sm:w-80 group">
            <input type="text" placeholder="Search apps..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm font-medium transition-shadow group-hover:shadow-md" />
            <Search className="absolute left-4 top-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={22} />
          </div>
          
          <div className="relative w-full sm:w-auto">
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as any)} className="w-full sm:w-auto appearance-none pl-12 pr-12 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm font-bold cursor-pointer">
              <option value="default">Sort By Size</option>
              <option value="high-low">Downloads: High-Low</option>
              <option value="low-high">Downloads: Low-High</option>
            </select>
            <SlidersHorizontal className="absolute left-4 top-4 text-slate-400" size={22} />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-40">
          <Loader2 className="animate-spin text-indigo-500 mb-8" size={80} />
          <p className="text-2xl font-black text-slate-500 tracking-widest uppercase">Searching...</p>
        </div>
      ) : filteredApps.length > 0 ? (
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => <AppCard key={app.id} app={app} />)}
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-40 glass rounded-[3rem]">
          <div className="text-9xl mb-8">👽</div>
          <h3 className="text-4xl font-black mb-4">No App Found</h3>
          <p className="text-xl text-slate-500">We couldn't find any apps matching "{searchTerm}".</p>
        </motion.div>
      )}
    </div>
  );
}