import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { GridMorphSlot } from "@/components/motion/ProjectMorph";
import { MORPH_COUNT } from "@/lib/motion";
import { projects } from "@/content/projects";

export function Work() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <TextReveal lines={["Latest Projects"]} className="text-display-lg font-display" />

        {/* The covers themselves float above the page and are driven here by ProjectMorph —
            these cells only reserve the space they land in. */}
        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.slice(0, MORPH_COUNT).map((project, i) => (
            <div key={project.id}>
              <GridMorphSlot index={i} className="aspect-[16/11] w-full" />

              <RevealGroup>
                <RevealItem>
                  <Link href={`/work/${project.id}`} className="group mt-5 flex items-start justify-between gap-6">
                    <span>
                      <span className="block text-lg font-semibold">{project.title}</span>
                      <span className="mt-1 block text-sm text-muted">{project.role}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1.5 pt-1 text-sm text-subtle transition-colors group-hover:text-text">
                      <span aria-hidden="true">↗</span>
                      View Project
                    </span>
                  </Link>
                </RevealItem>
              </RevealGroup>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
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
