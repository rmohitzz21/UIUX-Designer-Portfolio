import type { Metadata } from "next";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CtaCard } from "@/components/sections/CtaCard";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product design work — case studies across fintech, health and developer tools.",
};

export default function ProjectsPage() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <section className="pt-36 pb-20 md:pt-44">
        <div className="edge-rules relative mx-auto max-w-7xl px-6 text-center md:px-12">
          <TextReveal
            as="h1"
            lines={["My most", "recent work"]}
            className="text-hero font-display"
            delay={0.05}
            immediate
          />
          <Reveal as="p" delay={0.35} className="mx-auto mt-6 max-w-md text-lg text-muted">
            No fluff, just work that had to earn its place.
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-24">
        <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
          <RevealGroup className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {projects.map((project) => (
              <RevealItem key={project.id}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <TrustedBy />

      <CtaCard
        lines={[{ text: "Like what you see?", muted: true }, "Book a free discovery call."]}
      />
    </main>
  );
}
