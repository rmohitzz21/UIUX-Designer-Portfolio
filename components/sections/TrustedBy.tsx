import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { trustedBy } from "@/content/site";

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-y border-text/10 py-14">
      <Reveal as="p" className="mb-8 px-8 text-center text-xs tracking-widest text-muted uppercase md:px-16">
        Trusted by teams at
      </Reveal>

      <Marquee duration={28}>
        {trustedBy.map((name) => (
          <span key={name} className="mx-10 shrink-0 font-display text-2xl text-muted/70 md:text-3xl">
            {name}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
