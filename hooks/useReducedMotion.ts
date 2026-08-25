"use client";

import { useMediaQuery } from "./useMediaQuery";

/** Single source of truth for reduced-motion — every animation (Framer, GSAP, R3F) consults this. See MASTER PROMPT §11a. */
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
