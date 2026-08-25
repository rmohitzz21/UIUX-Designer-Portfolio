import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Marquee } from "@/components/motion/Marquee";
import { site, trustedBy } from "@/content/site";

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-t border-line py-16">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 flex flex-col items-center gap-1">
          <TextReveal
            as="p"
            lines={[{ text: "Trusted by", muted: true }, "many"]}
            className="text-display font-display text-center [&>span]:inline"
          />
          <Reveal as="p" delay={0.1} className="text-sm text-muted">
            {site.socialProof.count} {site.socialProof.label}
          </Reveal>
        </div>
      </div>

      <Marquee duration={30}>
        {trustedBy.map((name) => (
          <span key={name} className="mx-10 shrink-0 text-2xl font-medium text-muted md:text-3xl">
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
