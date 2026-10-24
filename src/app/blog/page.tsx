import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const posts = [
    { title: "The Science of Deep Work", cat: "Productivity", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", desc: "Learn how to train your brain for intense focus." },
    { title: "Top 10 Apps for Remote Teams", cat: "Remote Work", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", desc: "Keep your team aligned and productive anywhere." },
    { title: "Mastering the Pomodoro Technique", cat: "Habits", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80", desc: "Break down big tasks into manageable chunks." },
    { title: "Designing for Distraction-Free UX", cat: "Design", img: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80", desc: "How we build interfaces that respect your attention." },
    { title: "Morning Routines of Top CEOs", cat: "Lifestyle", img: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&q=80", desc: "Start your day like the world's most successful people." },
    { title: "Why We Built HERO.IO", cat: "Company", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", desc: "The story behind our productivity suite." }
  ];

  return (
    <div className="flex flex-col w-full py-32">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Our <span className="text-gradient">Blog</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Insights, tips, and updates from the HERO.IO team.</p>
      </div>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link href="#" key={i} className="glass rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-[var(--border)] shadow-lg">
              <div className="h-56 relative overflow-hidden">
                <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{post.cat}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-3 group-hover:text-indigo-500 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium line-clamp-3">{post.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}