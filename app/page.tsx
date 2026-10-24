import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { ProjectMorphProvider } from "@/components/motion/ProjectMorph";
import { FeaturedQuote } from "@/components/sections/FeaturedQuote";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { DesignProcess } from "@/components/sections/DesignProcess";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";
import { OrbitGallery } from "@/components/sections/OrbitGallery";
import { Faq } from "@/components/sections/Faq";
import { personalPhotos } from "@/lib/photos";

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
      <DesignProcess />
      <TrustedBy />
      <Testimonials />
      <OrbitGallery photos={personalPhotos()} />
      <Faq />
    </main>
  );
}
