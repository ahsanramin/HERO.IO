import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full py-32">
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Contact <span className="text-gradient">Us</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Have a question? We'd love to hear from you.</p>
      </div>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 glass p-10 md:p-16 rounded-[3rem] border border-[var(--border)] shadow-2xl">
          <div className="flex flex-col justify-center space-y-8">
             <div className="flex items-center gap-6">
               <div className="bg-indigo-500/10 p-4 rounded-full text-indigo-500"><Mail size={28} /></div>
               <div><h4 className="font-black text-xl">Email</h4><p className="text-slate-600 dark:text-slate-400 font-medium">support@hero.io</p></div>
             </div>
             <div className="flex items-center gap-6">
               <div className="bg-indigo-500/10 p-4 rounded-full text-indigo-500"><Phone size={28} /></div>
               <div><h4 className="font-black text-xl">Phone</h4><p className="text-slate-600 dark:text-slate-400 font-medium">+1 (555) 123-4567</p></div>
             </div>
             <div className="flex items-center gap-6">
               <div className="bg-indigo-500/10 p-4 rounded-full text-indigo-500"><MapPin size={28} /></div>
               <div><h4 className="font-black text-xl">Office</h4><p className="text-slate-600 dark:text-slate-400 font-medium">Silicon Valley, CA</p></div>
             </div>
          </div>
          <form className="flex flex-col gap-6">
            <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium" />
            <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium" />
            <textarea rows={5} placeholder="Your Message" className="w-full px-6 py-4 rounded-2xl bg-[var(--background)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium resize-none"></textarea>
            <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg py-5 rounded-2xl transition-colors shadow-xl shadow-indigo-600/30">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}