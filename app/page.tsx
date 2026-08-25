import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { FeaturedQuote } from "@/components/sections/FeaturedQuote";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Journal } from "@/components/sections/Journal";

export default function Home() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <Hero />
      <Work />
      <FeaturedQuote />
      <Services />
      <About />
      <Pricing />
      <TrustedBy />
      <Testimonials />
      <Faq />
      <Contact />
      <Journal />
    </main>
  );
}
