import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Chip } from "@/components/ui/Chip";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { CoverParallax } from "@/components/case-study/CoverParallax";
import { projects, type Project } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata(props: PageProps<"/work/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      type: "article",
      title: `${project.title} — ${site.name}`,
      description: project.summary,
    },
  };
}

function contrastTint(tint: Project["cover"]) {
  return tint === "dusk" ? "sand" : "dusk";
}

const BLOCKS = (project: Project) =>
  [
    { label: "01 — Problem", body: project.problem },
    { label: "02 — Process", body: project.process },
    { label: "03 — Solution", body: project.outcome },
  ] as const;

export default async function CaseStudyPage(props: PageProps<"/work/[id]">) {
  const { id } = await props.params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="flex flex-1 flex-col">
      <div className="px-8 pt-28 pb-6 md:px-16">
        <Link href="/#work" className="group inline-flex items-center gap-2 text-sm text-muted">
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to work
        </Link>
      </div>

      <section className="relative mx-4 h-[60vh] overflow-hidden rounded-card md:mx-16 md:h-[70vh]">
        <CoverParallax tint={project.cover} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-16">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag} className="border-bg/30 text-bg">
                {tag}
              </Chip>
            ))}
          </div>
          <h1 className="text-display-lg font-display font-light text-bg">{project.title}</h1>
          <p className="mt-2 max-w-lg text-bg/80">{project.summary}</p>
        </div>
      </section>

      <Reveal as="div" className="grid grid-cols-2 gap-8 px-8 py-16 md:grid-cols-4 md:px-16">
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Role</p>
          <p className="mt-2 font-display text-xl">{project.role}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Timeline</p>
          <p className="mt-2 font-display text-xl">{project.timeline}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Tools</p>
          <p className="mt-2 font-display text-xl">{project.tools.join(", ")}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted uppercase">Year</p>
          <p className="mt-2 font-display text-xl">{project.year}</p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-16 px-8 py-16 md:px-16">
        {BLOCKS(project).map((block) => (
          <Reveal key={block.label} as="div" className="grid gap-4 md:grid-cols-[200px_1fr]">
            <p className="text-sm tracking-widest text-accent uppercase">{block.label}</p>
            <p className="max-w-2xl font-display text-2xl leading-snug font-light md:text-3xl">{block.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal as="div" className="px-8 py-16 md:px-16">
        <p className="mb-6 text-xs tracking-widest text-muted uppercase">Before &amp; after</p>
        <BeforeAfterSlider
          beforeTint={contrastTint(project.cover)}
          afterTint={project.cover}
          beforeLabel="Legacy"
          afterLabel={project.title}
          className="max-w-3xl"
        />
      </Reveal>

      <RevealGroup className="grid grid-cols-1 gap-8 border-y border-text/10 px-8 py-16 sm:grid-cols-3 md:px-16">
        {project.metrics.map((metric) => (
          <RevealItem key={metric.label} as="div">
            <p className="font-display text-5xl text-accent">{metric.value}</p>
            <p className="mt-2 text-sm text-muted">{metric.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Link
        href={`/work/${nextProject.id}`}
        className="group flex flex-col items-center gap-4 px-8 py-24 text-center md:px-16"
      >
        <p className="text-xs tracking-widest text-muted uppercase">Next project</p>
        <h2 className="text-display-lg font-display font-light transition-transform group-hover:-translate-y-1">
          {nextProject.title} →
        </h2>
      </Link>
    </main>
  );
}
