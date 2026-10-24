"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Sparkles, TrendingUp, Star } from "lucide-react";
import { fadeUp, staggerContainer } from "../ui/Motion";
import { Magnetic } from "../ui/Magnetic";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "We Build Productive Apps",
    subtitle: "At HERO.IO, we craft innovative applications designed to make everyday life simpler, smarter, and more exciting.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    id: 2,
    title: "Achieve Deep Focus Daily",
    subtitle: "Eliminate distractions and train your brain to enter flow states effortlessly with our scientifically proven timers.",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
  },
  {
    id: 3,
    title: "Track Your Habits Seamlessly",
    subtitle: "Build life-changing routines with beautifully designed habit trackers that keep you motivated every single day.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  },
  {
    id: 4,
    title: "Boost Your Team's Output",
    subtitle: "Collaborate effectively with your team using our integrated workspaces, task managers, and communication tools.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: 5,
    title: "Master Your Time Management",
    subtitle: "Take control of your schedule. Plan your day, prioritize tasks, and achieve a perfect work-life balance.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center px-4 mesh-bg min-h-screen">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center w-full">
        
        {/* Badge */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-10 text-sm font-bold text-indigo-600 dark:text-indigo-400 shadow-sm border border-[var(--border)]">
          <Sparkles size={16} /> <span>Voted #1 Productivity Suite of 2025</span>
        </motion.div>

        {/* Sliding Text Content */}
        <div className="w-full flex justify-center text-center mb-10 min-h-[220px] md:min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
                {slides[currentSlide].title.split(" ").map((word, i) => {
                  const isLastWord = i === slides[currentSlide].title.split(" ").length - 1;
                  return (
                    <span key={i} className={isLastWord ? "text-gradient drop-shadow-sm block sm:inline" : "mr-2"}>
                      {word}
                    </span>
                  );
                })}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Magnetic>
            <a href="https://play.google.com" target="_blank" rel="noreferrer" className="group relative flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl hover:scale-105 transition-all shadow-xl font-black text-base sm:text-lg w-full sm:w-auto justify-center overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Play size={20} className="text-emerald-400 dark:text-emerald-600 relative z-10" /> <span className="relative z-10">Google Play</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="https://appstore.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-8 py-4 glass hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl hover:scale-105 transition-all font-black text-base sm:text-lg w-full sm:w-auto justify-center shadow-lg border border-[var(--border)]">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg> App Store
            </a>
          </Magnetic>
        </motion.div>

        {/* Phone Mockup Section */}
        <div className="mt-20 relative w-full max-w-[280px] mx-auto flex justify-center">
          
          {/* Floating Badge 1 (Left) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
            className="absolute -left-20 top-20 glass p-3 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-3 border border-white/20"
          >
            <div className="bg-emerald-500/20 p-2 rounded-full"><TrendingUp className="text-emerald-500" size={20}/></div>
            <div><p className="text-xs font-bold text-slate-500">Downloads</p><p className="font-black text-lg leading-none">29.6M</p></div>
          </motion.div>

          {/* Floating Badge 2 (Right) */}
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} 
            className="absolute -right-20 top-40 glass p-3 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-3 border border-white/20"
          >
            <div className="bg-amber-500/20 p-2 rounded-full"><Star className="text-amber-500 fill-amber-500" size={20}/></div>
            <div><p className="text-xs font-bold text-slate-500">Rating</p><p className="font-black text-lg leading-none">4.9/5</p></div>
          </motion.div>

          {/* The Phone */}
          <div className="relative w-full h-[550px] rounded-[2.5rem] border-[8px] border-slate-900 dark:border-slate-700 overflow-hidden shadow-2xl bg-slate-900 ring-1 ring-white/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image 
                  src={slides[currentSlide].image} 
                  alt="App Preview" 
                  fill 
                  className="object-cover opacity-90" 
                  priority 
                />
              </motion.div>
            </AnimatePresence>
            {/* Dynamic Island / Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 border border-white/10"></div>
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 via-transparent to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Slide Navigation Dots */}
        <div className="flex gap-2 mt-10 z-20 relative">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-indigo-600 w-8" 
                  : "bg-slate-300 dark:bg-slate-700 w-2.5 hover:bg-indigo-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}