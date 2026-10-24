import { Hero } from "@/components/saas/Hero";
import { Stats } from "@/components/saas/Stats";
import { Trending } from "@/components/saas/Trending";
import { HowItWorks } from "@/components/saas/HowItWorks";
import { Categories } from "@/components/saas/Categories";
import { Features } from "@/components/saas/Features";
import { TopExperts } from "@/components/saas/TopExperts";
import { Testimonials } from "@/components/saas/Testimonials";
import { BlogSection } from "@/components/saas/BlogSection";
import { Pricing } from "@/components/saas/Pricing";
import { FAQ } from "@/components/saas/FAQ";
import { Newsletter } from "@/components/saas/Newsletter";
import { CTA } from "@/components/saas/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <Stats />
      <Trending />
      <HowItWorks />
      <Categories />
      <Features />
      <TopExperts />
      <Testimonials />
      <BlogSection />
      <Pricing />
      <FAQ />
      <Newsletter />
      <CTA />
    </div>
  );
}