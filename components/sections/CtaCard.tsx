import { TextReveal, type RevealLine } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SocialProof } from "@/components/ui/SocialProof";
import { site, about } from "@/content/site";

/** The closing call-to-action panel: a white card holding social proof, a two-tone heading and the booking button. */
export function CtaCard({ lines, id = "contact" }: { lines: readonly RevealLine[]; id?: string }) {
  return (
    <section id={id} className="border-t border-line py-20 md:py-24">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="rounded-3xl border border-line bg-surface px-6 py-16 text-center md:px-16 md:py-20">
          <Reveal as="div">
            <SocialProof align="center" />
          </Reveal>

          <TextReveal lines={lines} className="mt-8 text-display-lg font-display" />

          <Reveal as="div" delay={0.15} className="mt-10 flex flex-col items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-text py-2 pr-6 pl-2 text-bg transition-opacity hover:opacity-85"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-[11px] font-semibold text-text">
                {about.initials}
              </span>
              <span className="text-sm font-medium">Schedule now</span>
            </a>
            <span className="text-sm text-muted">{site.email}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
