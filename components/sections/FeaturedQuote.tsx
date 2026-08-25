import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/content/testimonials";

export function FeaturedQuote() {
  const featured = testimonials[0];

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <TextReveal
            as="blockquote"
            lines={[`“${featured.quote}”`]}
            className="text-display font-display leading-snug"
          />

          <Reveal as="div" className="mt-10 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-xs font-semibold text-subtle">
              {featured.initials}
            </span>
            <span className="text-left">
              <span className="block text-sm font-semibold">{featured.name}</span>
              <span className="block text-sm text-muted">
                {featured.role} of {featured.company}
              </span>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
