"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Magnetic } from "./ui/Magnetic";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Apps", href: "/apps" },
    { name: "Installations", href: "/installations" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[60]" style={{ scaleX }} />
      <header className={`fixed top-1 w-full z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between glass rounded-full w-[95%] max-w-7xl py-2 px-6 border border-[var(--border)]">
          
          {/* UPDATED LOGO HERE */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 transform group-hover:rotate-[15deg] transition-transform duration-300 shadow-lg shadow-indigo-500/30 rounded-xl overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="64" height="64" fill="url(#paint0_linear)"/>
                <path d="M18 46V18H26V28H38V18H46V46H38V36H26V46H18Z" fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6366F1"/>
                    <stop offset="1" stop-color="#A855F7"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter">HERO.IO</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative px-4 py-2 text-sm font-bold rounded-full transition-colors ${pathname === link.href ? "text-indigo-600 dark:text-indigo-400" : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"}`}
              >
                {pathname === link.href && (
                  <motion.div 
                    layoutId="nav-pill" 
                    className="absolute inset-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-full" 
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Magnetic>
              <a href="https://github.com/ahsanramin" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full text-sm font-black hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C4.8 1.3 3.6 1.7 3.6 1.7a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 2 9.3c0 4.9 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/>
                </svg>
                Contribute
              </a>
            </Magnetic>
          </div>
        </div>
      </header>
    </>
  );
}