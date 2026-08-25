import { Reveal } from "@/components/motion/Reveal";
import { WordReveal } from "@/components/motion/WordReveal";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="about" className="px-8 py-28 md:px-16">
      <div className="grid gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-20">
        <Reveal as="div">
          <PortraitPlaceholder initials={about.initials} className="aspect-[3/4] w-full max-w-sm rounded-card" />
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal as="p" className="text-xs tracking-widest text-muted uppercase">
            About
          </Reveal>

          <div className="flex max-w-2xl flex-col gap-6">
            {about.bio.map((paragraph, i) => (
              <Reveal key={paragraph} as="p" delay={i * 0.1} className="text-xl text-muted md:text-2xl">
                {paragraph}
              </Reveal>
            ))}
          </div>

          <WordReveal
            as="blockquote"
            text={about.pullQuote}
            className="max-w-xl border-l-2 border-accent pl-6 font-display text-3xl font-light text-text italic md:text-4xl"
          />
        </div>
      </div>
    </section>
  );
}
