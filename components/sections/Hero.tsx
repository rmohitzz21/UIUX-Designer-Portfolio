"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { HeroMorphSlot } from "@/components/motion/ProjectMorph";
import { SocialProof } from "@/components/ui/SocialProof";
import { ClientLogos } from "@/components/ui/ClientLogos";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { site, about } from "@/content/site";

function scrollToId(id: string, reducedMotion: boolean) {
  document.querySelector(id)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reducedMotion ? { duration: 0 } : { duration: 0.7, ease: EASE_REVEAL, delay },
  });

  return (
    <section id="hero" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-10 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <div className="max-w-xl">
            <motion.span
              {...fade(0)}
              className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-2 text-sm shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-secondary" />
              {site.availability}
            </motion.span>

            <TextReveal
              as="h1"
              lines={[{ text: site.heroLines[0], muted: true }, site.heroLines[1]]}
              className="mt-7 text-hero font-display"
              delay={0.1}
              immediate
            />

            <motion.p {...fade(0.5)} className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              <span className="text-text">{site.heroSubtextLead}</span> {site.heroSubtext}
            </motion.p>

            <motion.button
              {...fade(0.6)}
              type="button"
              onClick={() => scrollToId("#contact", reducedMotion)}
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-text py-2 pr-6 pl-2 text-bg transition-opacity hover:opacity-85"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-[11px] font-semibold text-text">
                {about.initials}
              </span>
              <span className="text-sm font-medium">Book a call with me</span>
            </motion.button>
          </div>
          <HeroMorphSlot className="aspect-[4/3] w-full" />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="relative mx-auto max-w-7xl px-6 py-6 md:px-12">
          <motion.div {...fade(0.8)} className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <SocialProof className="shrink-0" />
            <ClientLogos className="min-w-0 flex-1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
