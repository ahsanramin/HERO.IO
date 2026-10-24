"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10"></div>;
  return (
    <motion.button whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2.5 rounded-full glass hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors shadow-sm">
      {theme === "dark" ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-indigo-600" />}
    </motion.button>
  );
}