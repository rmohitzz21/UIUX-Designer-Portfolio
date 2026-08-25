"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { processSteps } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current || !progressRef.current) return;
    const tween = gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 55%",
          scrub: true,
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reducedMotion]);

  return (
    <section id="process" className="px-8 py-28 md:px-16">
      <h2 className="text-display-lg font-display font-light">How I work</h2>
      <p className="mt-4 max-w-lg text-muted">
        Four stages, in roughly this order, though the good ones always send me back a stage.
      </p>

      <div ref={containerRef} className="relative mt-20">
        <div className="absolute top-6 right-0 left-0 hidden h-px bg-text/10 md:block" />
        <div
          ref={progressRef}
          className="absolute top-6 right-0 left-0 hidden h-px origin-left bg-accent md:block"
          style={reducedMotion ? undefined : { transform: "scaleX(0)" }}
        />

        <RevealGroup className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {processSteps.map((step) => (
            <RevealItem key={step.number} as="div" className="relative flex flex-col gap-4">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-text/15 bg-bg font-display text-lg">
                {step.number}
              </span>
              <h3 className="font-display text-2xl">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
