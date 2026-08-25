"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/motion/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { experience } from "@/content/experience";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current || !progressRef.current) return;
    const tween = gsap.fromTo(
      progressRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 70%",
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
    <section className="px-8 py-28 md:px-16">
      <h2 className="text-display-lg font-display font-light">Experience</h2>

      <div ref={containerRef} className="relative mt-16 max-w-3xl">
        <div className="absolute top-0 left-0 h-full w-px bg-text/10" />
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-full w-px origin-top bg-accent"
          style={reducedMotion ? undefined : { transform: "scaleY(0)" }}
        />

        <ul className="flex flex-col gap-16">
          {experience.map((item) => (
            <Reveal key={item.company} as="li" className="relative pl-10">
              <span className="absolute top-1.5 left-[-4.5px] h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-xs tracking-widest text-muted uppercase">{item.period}</p>
              <h3 className="mt-1 font-display text-2xl">
                {item.role} · {item.company}
              </h3>
              <p className="mt-2 max-w-xl text-muted">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
