import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { projects } from "@/content/projects";

export function Work() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <TextReveal lines={["Latest Projects"]} className="text-display-lg font-display" />

        <RevealGroup className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <RevealItem key={project.id}>
              <Link href={`/work/${project.id}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                  <ProjectArt
                    tint={project.thumbnail}
                    className="aspect-[16/11] w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted">{project.role}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 pt-1 text-sm text-subtle transition-colors group-hover:text-text">
                    <span aria-hidden="true">↗</span>
                    View Project
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-16 flex justify-center">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          >
            View all my projects
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
