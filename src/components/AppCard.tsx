import Link from "next/link";
import Image from "next/image";
import { Download, Star } from "lucide-react";
import { AppData } from "@/types";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export function AppCard({ app }: { app: AppData }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }} className="group relative h-full perspective-1000">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-[2rem] blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
      <div className="relative h-full glass rounded-[2rem] p-5 flex flex-col shadow-sm group-hover:shadow-2xl transition-all duration-300">
        <Link href={`/apps/${app.id}`} className="flex-grow">
          <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-5 bg-slate-100 dark:bg-slate-800">
            <Image src={app.image} alt={app.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="font-black text-xl leading-tight line-clamp-2 mb-4 group-hover:text-indigo-500 transition-colors px-1">{app.title}</h3>
        </Link>
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-[var(--border)] px-1">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-xl text-sm font-black">
            <Download size={16} /> {(app.downloads / 1000000).toFixed(0)}M
          </div>
          <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-2 rounded-xl text-sm font-black">
            <Star size={16} className="fill-amber-500" /> {app.ratingAvg}
          </div>
        </div>
      </div>
    </motion.div>
  );
}