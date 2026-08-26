import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CtaCard } from "@/components/sections/CtaCard";
import { projects } from "@/content/projects";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: project.headline.join(" "),
    description: project.summary,
  };
}

export default async function CaseStudyPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== project.id).slice(0, 2);

  // Image + caption blocks, built from the case study's own narrative.
  const blocks = [
    { caption: ["Where it started.", ""], body: project.problem, layout: "pair" as const },
    { caption: ["How it came together.", ""], body: project.process, layout: "wide" as const },
    { caption: ["What changed.", ""], body: project.outcome, layout: "pair" as const },
  ];

  return (
    <main id="top" className="relative z-10 flex flex-1 flex-col">
      <section className="pt-36 pb-16 md:pt-44">
        <div className="section-container">
          <div className="max-w-3xl">
            <TextReveal
              as="h1"
              lines={[{ text: project.headline[0], muted: true }, project.headline[1]]}
              className="text-display-lg font-display"
              delay={0.05}
              immediate
            />

            <Reveal as="div" delay={0.3} className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <span>
                <span className="text-muted">Client</span> <span className="font-semibold">{project.title}</span>
              </span>
              <span>
                <span className="text-muted">Year</span> <span className="font-semibold">{project.year}</span>
              </span>
              <span>
                <span className="text-muted">Role</span> <span className="font-semibold">{project.role}</span>
              </span>
              <span>
                <span className="text-muted">Timeline</span>{" "}
                <span className="font-semibold">{project.timeline}</span>
              </span>
            </Reveal>

            <Reveal as="p" delay={0.35} className="mt-10 text-lg leading-relaxed">
              {project.summary}
            </Reveal>

            <div className="mt-10">
              <p className="text-sm text-muted">Scope of work</p>
              <RevealGroup className="mt-3 flex flex-wrap gap-2.5">
                {[...project.tags, ...project.tools].map((tag) => (
                  <RevealItem key={tag}>
                    <span className="inline-flex rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium">
                      {tag}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {project.links[0] && (
              <Reveal as="div" delay={0.15} className="mt-10">
                <a
                  href={project.links[0].href}
                  className="group inline-flex items-center gap-2 text-lg font-medium"
                >
                  {project.links[0].label}
                  <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="section-container">
          <Reveal as="div">
            <ProjectArt tint={project.cover} className="aspect-[16/9] w-full rounded-2xl border border-line" />
          </Reveal>
        </div>
      </section>

      {blocks.map((block, i) => (
        <section key={i} className="py-16 md:py-20">
          <div className="section-container">
            {block.layout === "pair" ? (
              <RevealGroup className="grid gap-6 sm:grid-cols-2">
                <RevealItem>
                  <ProjectArt
                    tint={project.thumbnail}
                    className="aspect-square w-full rounded-2xl border border-line"
                  />
                </RevealItem>
                <RevealItem>
                  <ProjectArt tint={project.cover} className="aspect-square w-full rounded-2xl border border-line" />
                </RevealItem>
              </RevealGroup>
            ) : (
              <Reveal as="div">
                <ProjectArt
                  tint={project.cover}
                  className="aspect-[16/9] w-full rounded-2xl border border-line"
                />
              </Reveal>
            )}

            <div className="mt-12 max-w-3xl">
              <TextReveal as="h2" lines={[block.caption[0]]} className="text-display font-display" />
              <Reveal as="p" delay={0.1} className="mt-5 text-lg leading-relaxed text-muted">
                {block.body}
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line py-24 md:py-32">
        <div className="section-container">
          <TextReveal
            as="h2"
            lines={[{ text: "By the", muted: true }, "numbers."]}
            className="text-display-lg font-display"
          />
          <RevealGroup className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <RevealItem key={metric.label}>
                <p className="text-4xl font-semibold tracking-tight">{metric.value}</p>
                <p className="mt-2 text-sm text-muted">{metric.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-line py-24 md:py-32">
        <div className="section-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <TextReveal lines={["More Projects"]} className="text-display-lg font-display" />
            <Link href="/projects" className="group inline-flex items-center gap-2 pb-2 text-sm font-medium">
              View all
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
            </Link>
          </div>

          <RevealGroup className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {others.map((other) => (
              <RevealItem key={other.id}>
                <ProjectCard project={other} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaCard lines={[{ text: "Like what you see?", muted: true }, "Book a free discovery call."]} />
    </main>
  );
}
