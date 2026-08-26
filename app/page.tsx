import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { ProjectMorphProvider } from "@/components/motion/ProjectMorph";
import { FeaturedQuote } from "@/components/sections/FeaturedQuote";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Journal } from "@/components/sections/Journal";

export default function Home() {
  return (
    <main id="top" className="relative z-10 flex flex-1 flex-col">
      <ProjectMorphProvider>
        <Hero />
        <Work />
      </ProjectMorphProvider>
      <FeaturedQuote />
      <Services />
      <About />
      <Pricing />
      <TrustedBy />
      <Testimonials />
      <Faq />
      <Journal />
    </main>
  );
}
