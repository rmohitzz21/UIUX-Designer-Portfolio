import type { Metadata } from "next";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { FeaturedPostCard } from "@/components/ui/PostCard";
import { JournalArchive } from "@/components/sections/JournalArchive";
import { CtaCard } from "@/components/sections/CtaCard";
import { journalIntro, posts } from "@/content/site";

export const metadata: Metadata = {
  title: "Journal",
  description: journalIntro.blurb,
};

export default function JournalPage() {
  const [featured, ...rest] = posts;

  return (
    <main id="top" className="relative z-10 flex flex-1 flex-col">
      <section className="pt-36 pb-16 md:pt-44">
        <div className="section-container text-center">
          <TextReveal
            as="h1"
            lines={[...journalIntro.heading]}
            className="text-hero font-display"
            delay={0.05}
            immediate
          />
          <Reveal as="p" delay={0.35} className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            {journalIntro.blurb}
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="section-container">
          <Reveal as="div">
            <FeaturedPostCard post={featured} />
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-container">
          <JournalArchive posts={rest} />
        </div>
      </section>

      <CtaCard lines={[{ text: "Like what you read?", muted: true }, "Book a free discovery call."]} />
    </main>
  );
}
