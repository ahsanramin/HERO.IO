"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { appsData } from "@/data/apps";
import { Download, Star, Trash2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { AppData } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

export default function Installations() {
  const [installedApps, setInstalledApps] = useState<AppData[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); loadInstalledApps(); }, []);

  const loadInstalledApps = () => {
    const storedIds: number[] = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(appsData.filter((app) => storedIds.includes(app.id)));
  };

  const handleUninstall = (id: number, title: string) => {
    const storedIds: number[] = JSON.parse(localStorage.getItem("installedApps") || "[]");
    localStorage.setItem("installedApps", JSON.stringify(storedIds.filter((appId) => appId !== id)));
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
    toast.error(`${title} uninstalled!`, { icon: '🗑️' });
  };

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen max-w-4xl">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Your <span className="text-gradient">Installed Apps</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Manage your installed applications easily.</p>
      </div>

      <div className="flex justify-between items-center mb-8 border-b border-[var(--border)] pb-6">
        <h2 className="text-3xl font-black">{installedApps.length} Apps Found</h2>
      </div>

      <AnimatePresence>
        {installedApps.length > 0 ? (
          <motion.div layout className="flex flex-col gap-6">
            {installedApps.map((app) => (
              <motion.div layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, x: -50 }} key={app.id} className="flex flex-col sm:flex-row items-center gap-8 p-6 glass rounded-[2rem] hover:shadow-xl transition-shadow relative overflow-hidden group border border-[var(--border)]">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <Link href={`/apps/${app.id}`} className="relative w-full sm:w-36 h-36 shrink-0 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-md">
                  <Image src={app.image} alt={app.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </Link>
                
                <div className="flex-grow text-center sm:text-left relative z-10">
                  <Link href={`/apps/${app.id}`}><h3 className="text-3xl font-black hover:text-indigo-500 transition-colors mb-3">{app.title}</h3></Link>
                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-sm font-bold text-slate-500">
                    <span className="flex items-center gap-1.5 text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-lg"><Download size={16} /> {(app.downloads / 1000000).toFixed(0)}M</span>
                    <span className="flex items-center gap-1.5 text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg"><Star size={16} /> {app.ratingAvg}</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">{app.size} MB</span>
                  </div>
                </div>

                <button onClick={() => handleUninstall(app.id, app.title)} className="relative z-10 px-8 py-4 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl font-black transition-all shrink-0 flex items-center gap-2 hover:scale-105">
                  <Trash2 size={20} /> Uninstall
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-40 glass rounded-[3rem] border-2 border-dashed border-[var(--border)]">
            <div className="text-9xl mb-8">📭</div>
            <h3 className="text-4xl font-black mb-4">No Apps Installed</h3>
            <p className="text-xl text-slate-500 mb-10">You haven't installed any apps yet. Explore our collection!</p>
            <Link href="/apps" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-indigo-600/30">
              Browse Apps <ArrowRight size={24} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}