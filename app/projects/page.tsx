import type { Metadata } from "next";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CtaCard } from "@/components/sections/CtaCard";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { latestProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product and visual design work from Dribbble and Behance — apps, dashboards, websites and identity.",
};

export default function ProjectsPage() {
  return (
    <main id="top" className="relative z-10 flex flex-1 flex-col">
      <section className="pt-36 pb-20 md:pt-44">
        <div className="section-container text-center">
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

      <section className="border-t border-line py-24 md:py-32">
        <div className="section-container">
          <RevealGroup className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {latestProjects.map((project) => (
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
