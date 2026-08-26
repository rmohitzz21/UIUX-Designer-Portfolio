"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

export { useLenis };
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/** Drives ScrollTrigger off Lenis's raf loop instead of the native scroll event. See MASTER PROMPT §14. */
function LenisScrollTriggerBridge() {
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;
    function update(time: number) {
      lenis!.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, [lenis]);

  return null;
}

/** Smooth scroll owner (§14: Lenis → smooth scrolling only). Falls back to native scroll under reduced motion. */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  // Always render the same tree: reduced motion switches smoothing off through options rather
  // than swapping the provider out, which would change the markup between server and client.
  return (
    <ReactLenis
      root
      options={{ autoRaf: false, smoothWheel: !reducedMotion, lerp: reducedMotion ? 1 : undefined }}
    >
      {!reducedMotion && <LenisScrollTriggerBridge />}
      {children}
    </ReactLenis>
  );
}
