"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Project } from "@/content/projects";

gsap.registerPlugin(ScrollTrigger);

/** Scroll-linked parallax on the cover art — GSAP ScrollTrigger owns scroll-driven effects per MASTER PROMPT §14. */
export function CoverParallax({ tint }: { tint: Project["cover"] }) {
  const artRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !artRef.current) return;
    const tween = gsap.to(artRef.current, {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: artRef.current.parentElement,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reducedMotion]);

  return (
    <div ref={artRef} className="absolute inset-0 h-[130%] w-full">
      <ProjectArt tint={tint} className="h-full w-full" />
    </div>
  );
}
