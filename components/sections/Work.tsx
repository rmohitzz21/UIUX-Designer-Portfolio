import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { Chip } from "@/components/ui/Chip";
import { projects } from "@/content/projects";

// bento spans by index — asymmetric grid per MASTER PROMPT §6
const SPANS: Record<number, string> = {
  0: "lg:col-span-2 lg:row-span-2",
  3: "lg:row-span-2",
  4: "lg:col-span-2",
};

export function Work() {
  return (
    <section id="work" className="px-8 py-28 md:px-16">
      <div className="mb-16 flex items-end justify-between gap-8">
        <div>
          <h2 className="text-display-lg font-display font-light">Selected work</h2>
        </div>
        <p className="hidden max-w-xs text-muted md:block">
          A handful of projects where the interesting part wasn&apos;t the pixels — it was getting to the right
          problem.
        </p>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]">
        {projects.map((project, i) => (
          <RevealItem key={project.id} as="div" className={SPANS[i] ?? ""}>
            <Link href={`/work/${project.id}`} className="group block h-full">
              <TiltCard className="relative h-full min-h-[220px] overflow-hidden rounded-card">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                  <ProjectArt tint={project.thumbnail} className="h-full w-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <div className="mb-3 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.tags.map((tag) => (
                      <Chip key={tag} className="border-bg/30 text-bg">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl text-bg">{project.title}</h3>
                  <p className="text-sm text-bg/70">
                    {project.role} · {project.year}
                  </p>
                </div>
              </TiltCard>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
