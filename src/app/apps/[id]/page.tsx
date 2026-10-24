"use client";
import { useEffect, useState, Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { appsData } from "@/data/apps";
import { Download, Star, MessageSquare, ArrowLeft, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import Link from "next/link";
import { motion } from "framer-motion";

// 1. Move the component that uses useParams into a separate child component
function AppDetailsContent() {
  const { id } = useParams();
  const router = useRouter();
  const [isInstalled, setIsInstalled] = useState(false);

  const app = appsData.find((a) => a.id === Number(id));

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (installedApps.includes(Number(id))) setIsInstalled(true);
  }, [id]);

  const handleInstall = () => {
    if (!app) return;
    const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success(`${app.title} installed successfully!`, { icon: '🚀' });
    }
  };

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="text-9xl mb-8 animate-bounce">😿</div>
        <h1 className="text-5xl font-black mb-6">Oops! App Not Found</h1>
        <p className="text-xl text-slate-500 mb-10 max-w-md">The App you are requesting is not found on our system. Please try another app.</p>
        <button onClick={() => router.push("/apps")} className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Go Back!</button>
      </div>
    );
  }

  const chartData = [...app.ratings].reverse().map(r => ({ name: r.name.replace(" star", ""), count: r.count }));

  return (
    <div className="container mx-auto px-4 py-32 max-w-6xl">
      <Link href="/apps" className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-slate-500 hover:text-indigo-500 mb-12 transition-colors font-bold shadow-sm">
        <ArrowLeft size={20} /> Back to Apps
      </Link>
      
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row gap-12 glass p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden border border-[var(--border)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="w-full lg:w-1/3 shrink-0 relative z-10">
           <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
             <Image src={app.image} alt={app.title} fill className="object-cover" priority />
           </div>
        </div>
        
        <div className="flex-grow flex flex-col justify-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight tracking-tight">{app.title}</h1>
          <p className="text-slate-500 text-xl mb-10 font-medium">Developed by <span className="text-indigo-500 font-bold">{app.companyName}</span></p>
          
          <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-[var(--border)]">
            <div>
              <Download className="text-emerald-500 mb-3" size={32} />
              <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Downloads</p>
              <p className="text-4xl font-black">{(app.downloads / 1000000).toFixed(1)}M</p>
            </div>
            <div>
              <Star className="text-amber-500 mb-3" size={32} />
              <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Rating</p>
              <p className="text-4xl font-black">{app.ratingAvg}</p>
            </div>
            <div>
              <MessageSquare className="text-blue-500 mb-3" size={32} />
              <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Reviews</p>
              <p className="text-4xl font-black">{(app.reviews / 1000).toFixed(0)}K</p>
            </div>
          </div>

          <button onClick={handleInstall} disabled={isInstalled} className={`w-full md:w-auto px-14 py-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 ${isInstalled ? "bg-slate-200 dark:bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 hover:scale-105"}`}>
            {isInstalled ? <><CheckCircle2 /> Installed</> : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 glass p-10 md:p-14 rounded-[3rem] border border-[var(--border)] shadow-xl">
          <h2 className="text-3xl font-black mb-10">Rating Distribution</h2>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="var(--border)" />
                <XAxis type="number" stroke="var(--foreground)" tick={{fill: 'currentColor', opacity: 0.5, fontWeight: 'bold'}} />
                <YAxis dataKey="name" type="category" stroke="var(--foreground)" tick={{fill: 'currentColor', opacity: 0.8, fontWeight: 'bold'}} width={40} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '16px', backdropFilter: 'blur(10px)', fontWeight: 'bold' }} cursor={{fill: 'var(--border)', opacity: 0.1}} />
                <Bar dataKey="count" fill="var(--color-primary)" radius={[0, 12, 12, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass p-10 md:p-14 rounded-[3rem] border border-[var(--border)] shadow-xl">
          <h2 className="text-3xl font-black mb-8">Description</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg whitespace-pre-line font-medium">{app.description}</p>
        </motion.div>
      </div>
    </div>
  );
}

// 2. The main Page component wraps the content in <Suspense>
export default function AppDetails() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-slate-500 animate-pulse">Loading app details...</div>
      </div>
    }>
      <AppDetailsContent />
    </Suspense>
  );
}