import { TextReveal } from "@/components/motion/TextReveal";

/**
 * A slim divider band carrying nothing but the two-tone wordmark, matching the reference —
 * measured there at 99px tall with no logos inside.
 */
export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-t border-line py-8">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <TextReveal
          as="p"
          inline
          lines={[{ text: "Trusted by", muted: true }, "many"]}
          className="text-2xl font-semibold tracking-tight"
        />
      </div>
    </section>
  );
}
