import { TextReveal } from "@/components/motion/TextReveal";
import { ClientLogos } from "@/components/ui/ClientLogos";

/**
 * Slim divider band. The reference keeps the right-hand side empty; the client marquee sits
 * there instead so the band stays the same height rather than growing a second row.
 */
export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-t border-line py-8">
      <div className="section-container flex flex-col gap-5 md:flex-row md:items-center md:gap-12">
        <TextReveal
          as="p"
          inline
          lines={[{ text: "Trusted by", muted: true }, "many"]}
          className="shrink-0 text-2xl font-semibold tracking-tight"
        />

        <ClientLogos className="min-w-0 flex-1" duration={40} reverse />
      </div>
    </section>
  );
}
