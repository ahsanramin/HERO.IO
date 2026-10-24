import Image from "next/image";
import { Play, Target, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full overflow-hidden py-32">
      <div className="container mx-auto px-4 text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">About <span className="text-gradient">HERO.IO</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">We are a team of passionate developers, designers, and productivity nerds building the tools we wish we had.</p>
      </div>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="glass rounded-[3rem] p-12 md:p-20 mb-24 flex flex-col md:flex-row gap-12 items-center border border-[var(--border)] shadow-2xl">
          <div className="w-full md:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" fill className="object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-black mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">We believe that technology should work for you, not the other way around. Our mission is to build tools that reduce cognitive load, eliminate distractions, and help you achieve deep focus.</p>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Since 2020, we've helped over 50,000 professionals reclaim their time.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[{icon: Target, title: "Our Vision", desc: "A world where everyone can focus on what matters most."}, {icon: Users, title: "Our Team", desc: "20+ experts across engineering, design, and psychology."}, {icon: Zap, title: "Our Impact", desc: "Over 29 million downloads and counting globally."}].map((item, i) => (
            <div key={i} className="glass p-8 rounded-3xl text-center border border-[var(--border)]">
              <item.icon className="mx-auto text-indigo-500 mb-4" size={40} />
              <h3 className="text-2xl font-black mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}