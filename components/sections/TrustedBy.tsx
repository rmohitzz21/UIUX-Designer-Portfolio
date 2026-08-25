import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { site, trustedBy } from "@/content/site";

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-t border-line py-16">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <Reveal as="div" className="mb-10 flex flex-col items-center gap-1">
          <p className="text-display font-display">Trusted by many</p>
          <p className="text-sm text-muted">
            {site.socialProof.count} {site.socialProof.label}
          </p>
        </Reveal>
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
