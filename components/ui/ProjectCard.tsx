import Link from "next/link";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import type { Project } from "@/content/projects";

/**
 * Project cover with the hover treatment from the reference: the art scales up slightly and a
 * dark "View Project" pill rises into the lower half of the card.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
        <ProjectArt
          tint={project.thumbnail}
          className="aspect-[16/11] w-full transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none translate-y-2"
        >
          <span className="rounded-full bg-text/75 px-5 py-2.5 text-sm font-medium text-bg backdrop-blur-sm">
            View Project
          </span>
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.role}</p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 pt-1 text-sm text-subtle transition-colors group-hover:text-text">
          <ArrowUpRight />
          View Project
        </span>
      </div>
    </Link>
  );
}
