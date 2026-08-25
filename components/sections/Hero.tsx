"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AuroraBackground } from "@/components/motion/AuroraBackground";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { site } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

function scrollToId(id: string, reducedMotion: boolean) {
  document.querySelector(id)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
}

function RoleSwap({ roles }: { roles: readonly string[] }) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, [reducedMotion, roles.length]);

  if (reducedMotion) {
    return <span className="text-accent">{roles[0]}</span>;
  }

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="block text-accent"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_REVEAL }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const restRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    const scrollTrigger = {
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
    };
    const headlineTween = gsap.to(headlineRef.current, { yPercent: -12, ease: "none", scrollTrigger });
    const restTween = gsap.to(restRef.current, { yPercent: -26, opacity: 0.4, ease: "none", scrollTrigger });
    return () => {
      headlineTween.scrollTrigger?.kill();
      headlineTween.kill();
      restTween.scrollTrigger?.kill();
      restTween.kill();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden px-8 pt-32 pb-10 text-center md:px-16"
    >
      <AuroraBackground className="-z-10" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center">
        <motion.div
          ref={headlineRef}
          initial={{ fontWeight: 300 }}
          animate={reducedMotion ? undefined : { fontWeight: [300, 520, 300] }}
          transition={
            reducedMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
          }
        >
          <MaskReveal as="h1" lines={site.heroLines} className="text-hero font-display" delay={0.1} splitWords />
        </motion.div>

        <div ref={restRef} className="flex flex-col items-center">
          <div className="mt-6 flex items-center justify-center gap-3 text-2xl font-display text-muted md:text-3xl">
            <span>I design</span>
            <RoleSwap roles={site.roles} />
          </div>

          <Reveal as="p" delay={0.15} duration={0.5} className="mx-auto mt-8 max-w-md text-lg text-muted">
            {site.heroSubtext}
          </Reveal>

          <Reveal as="div" delay={0.35} className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <MagneticButton
              className="rounded-full bg-accent px-8 py-4 font-medium text-bg"
              onClick={() => scrollToId("#work", reducedMotion)}
            >
              View my work
            </MagneticButton>
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium">
              Get in touch
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
