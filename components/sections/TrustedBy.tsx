import { TextReveal } from "@/components/motion/TextReveal";
import { ClientLogos } from "@/components/ui/ClientLogos";

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-t border-line py-10">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <TextReveal
          as="p"
          inline
          lines={[{ text: "Trusted by", muted: true }, "many"]}
          className="text-2xl font-semibold tracking-tight"
        />
      </div>

      <ClientLogos className="mt-8" duration={40} reverse />
    </section>
  );
}
