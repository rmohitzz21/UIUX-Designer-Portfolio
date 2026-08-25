import { ScrollWordReveal } from "@/components/motion/ScrollWordReveal";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <ScrollWordReveal
          lines={["Hear what my", "clients have to say."]}
          className="text-display-lg font-display"
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                <blockquote className="flex-1 leading-relaxed text-subtle">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-xs font-semibold text-subtle">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted">
                      {t.role}, {t.company}
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
