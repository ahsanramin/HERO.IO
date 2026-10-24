import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden mesh-bg">
      <div className="relative z-10 glass p-12 md:p-24 rounded-[3rem] shadow-2xl max-w-2xl w-full border border-[var(--border)]">
        {/* Safe Inline SVG instead of Ghost icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100" 
          height="100" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="mx-auto text-indigo-500 mb-10 animate-bounce"
        >
          <path d="M9 10h.01"/>
          <path d="M15 10h.01"/>
          <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/>
        </svg>
        
        <h1 className="text-8xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 drop-shadow-sm leading-none">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-black mb-6">Oops, page not found!</h2>
        <p className="text-slate-600 dark:text-slate-400 text-xl mb-12 font-medium">
          The page you are looking for is not available. It might have been moved or deleted.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl"
        >
          <ArrowLeft size={24} /> Go Back Home!
        </Link>
      </div>
    </div>
  );
}