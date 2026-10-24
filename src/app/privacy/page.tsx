export default function Privacy() {
  return (
    <div className="flex flex-col w-full py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Privacy Policy & Terms</h1>
        <p className="text-slate-500 font-medium mb-12">Last updated: October 2025</p>
        
        <div className="glass p-10 md:p-16 rounded-[3rem] border border-[var(--border)] space-y-10">
          <section>
            <h2 className="text-3xl font-black mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">We only collect information that is necessary to provide you with the best possible service. This includes your email address when you create an account, and data related to how you interact with our apps (which we use to improve the user experience).</p>
          </section>
          <section>
            <h2 className="text-3xl font-black mb-4">2. How We Use Your Data</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Your data is used strictly to personalize your experience, send you relevant updates (if you opt-in), and ensure the security of our platform. We do not sell your personal information to third parties.</p>
          </section>
          <section>
            <h2 className="text-3xl font-black mb-4">3. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">We implement bank-level encryption (AES-256) to protect your data both in transit and at rest. Our infrastructure is hosted on secure, SOC 2 compliant cloud providers.</p>
          </section>
          <section>
            <h2 className="text-3xl font-black mb-4">4. Your Rights</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">You have the right to access, modify, or delete your personal data at any time. If you wish to exercise these rights, please contact us at privacy@hero.io.</p>
          </section>
        </div>
      </div>
    </div>
  );
}