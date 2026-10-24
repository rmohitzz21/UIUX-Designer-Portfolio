"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Frosted exclusion-blend cursor matching the LaunchFolio / Framer reference:
 * 16px at rest, gently enlarges over links & buttons. Desktop + fine pointer only.
 */
export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const hoverPointer = useMediaQuery("(hover: hover)");
  const enabled = !reducedMotion && finePointer && hoverPointer;
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    }

    function onLeave() {
      setVisible(false);
    }

    function isInteractive(el: Element | null) {
      if (!el) return false;
      return !!el.closest(
        "a, button, [role='button'], input, textarea, select, label, summary, [data-cursor='hover']",
      );
    }

    function onOver(e: MouseEvent) {
      setHovering(isInteractive(e.target as Element));
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] size-3.5 rounded-full mix-blend-exclusion"
      animate={{ scale: hovering ? 1.85 : 1, opacity: visible ? 1 : 0 }}
      transition={{
        scale: { type: "spring", stiffness: 380, damping: 28, mass: 0.35 },
        opacity: { duration: 0.18 },
      }}
      style={{
        left: springX,
        top: springY,
        x: "-50%",
        y: "-50%",
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(4px)",
      }}
    />
  );
}
