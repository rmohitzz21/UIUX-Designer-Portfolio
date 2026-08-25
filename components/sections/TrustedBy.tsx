import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ClientLogos } from "@/components/ui/ClientLogos";
import { site } from "@/content/site";

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

      {/* Reverse direction from the hero strip so the two don't read as the same band scrolling twice. */}
      <ClientLogos duration={40} reverse />
    </section>
  );
}
