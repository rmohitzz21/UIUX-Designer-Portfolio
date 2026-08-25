import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <Hero />
      <TrustedBy />
      <Work />
      <About />
      <Stats />
      <Experience />
      <Skills />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
