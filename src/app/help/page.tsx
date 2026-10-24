import { Search, BookOpen, MessageSquare, LifeBuoy } from "lucide-react";

export default function Help() {
  return (
    <div className="flex flex-col w-full py-32">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Help & <span className="text-gradient">Support</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-10">How can we help you today?</p>
        <div className="relative max-w-2xl mx-auto">
          <input type="text" placeholder="Search for articles, guides, or FAQs..." className="w-full pl-14 pr-6 py-5 rounded-3xl bg-[var(--background)] border border-[var(--border)] focus:outline-none focus:ring-4 focus:ring-indigo-500/20 shadow-xl font-medium text-lg" />
          <Search className="absolute left-5 top-5.5 text-slate-400" size={24} />
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: "Documentation", desc: "Detailed guides on how to use all our apps." },
            { icon: MessageSquare, title: "Community Forum", desc: "Ask questions and share tips with other users." },
            { icon: LifeBuoy, title: "Contact Support", desc: "Can't find what you need? Our team is here 24/7." }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-[2rem] text-center border border-[var(--border)] hover:border-indigo-500 transition-colors cursor-pointer group">
              <div className="w-16 h-16 mx-auto bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-black mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}