import Image from "next/image";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SocialProof } from "@/components/ui/SocialProof";
import { testimonials, type Testimonial } from "@/content/testimonials";

function QuoteMark() {
  return (
    <svg viewBox="0 0 24 18" className="h-4 w-5 text-text" fill="currentColor" aria-hidden="true">
      <path d="M0 18V9.6C0 4.3 3 .8 8.2 0l.9 2.6C6.3 3.4 4.8 5 4.7 7.4H8.4V18zm13.6 0V9.6c0-5.3 3-8.8 8.2-9.6l.9 2.6c-2.8.8-4.3 2.4-4.4 4.8H22V18z" />
    </svg>
  );
}

/** Renders the quote with its highlighted clause in full colour and the rest in grey. */
function Quote({ testimonial }: { testimonial: Testimonial }) {
  const { quote, highlight } = testimonial;
  const at = quote.indexOf(highlight);

  if (at === -1) {
    return <span className="text-text">{quote}</span>;
  }

  return (
    <>
      <span className="text-muted">{quote.slice(0, at)}</span>
      <span className="font-semibold text-text">{highlight}</span>
      <span className="text-muted">{quote.slice(at + highlight.length)}</span>
    </>
  );
}

export function Testimonials() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <TextReveal
            lines={[{ text: "Hear from what my", muted: true }, "clients have to say."]}
            className="text-display-lg font-display"
          />
          <Reveal as="div" delay={0.15} className="pb-2">
            <SocialProof />
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                <QuoteMark />

                <blockquote className="mt-5 flex-1 leading-relaxed">
                  <Quote testimonial={t} />
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-bg">
                    <Image src={t.photo} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted">
                      {t.role} at {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
