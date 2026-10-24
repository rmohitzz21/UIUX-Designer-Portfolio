import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import Image from "next/image";
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

  const shots = [project.image, ...(project.gallery ?? [])].filter(
    (src, i, all) => all.indexOf(src) === i,
  );
  const others = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <main id="top" className="relative z-10 flex flex-1 flex-col">
      <section className="pt-36 pb-12 md:pt-44">
        <div className="section-container">
          <div className="max-w-3xl">
            <TextReveal
              as="h1"
              lines={[{ text: project.headline[0], muted: true }, project.headline[1]]}
              className="text-display-lg font-display"
              delay={0.05}
              immediate
            />

            <Reveal as="p" delay={0.3} className="mt-8 text-lg leading-relaxed text-muted">
              {project.summary}
            </Reveal>

            {project.links.length > 0 && (
              <Reveal as="div" delay={0.4} className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-lg font-medium"
                  >
                    {link.label}
                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                  </a>
                ))}
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <RevealGroup className="flex flex-col gap-6">
            {shots.map((src, i) => (
              <RevealItem key={src}>
                <span className="relative block aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 62rem, 100vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </span>
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
