"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 mt-20 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="md:col-span-1">
             
             {/* UPDATED LOGO HERE */}
             <Link href="/" className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-indigo-500/20">
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
              <span className="text-2xl font-black text-white tracking-tighter">HERO.IO</span>
            </Link>

            <p className="text-slate-400 font-medium mb-6">
              Crafting innovative apps designed to make everyday life simpler, smarter, and more exciting.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/apps" className="hover:text-indigo-400 transition-colors">All Apps</Link></li>
              <li><Link href="/installations" className="hover:text-indigo-400 transition-colors">My Installations</Link></li>
              <li><Link href="/" className="hover:text-indigo-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 font-medium">
              <li><Link href="/help" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-slate-500 font-medium">
          Copyright © {mounted ? new Date().getFullYear() : 2025} HERO.IO - All right reserved
        </div>
      </div>
    </footer>
  );
}