"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Site-wide cursor-following dot, mix-blend-difference so it reads on any background. Desktop + motion-ok only. */
export function CustomCursor() {
  const hasFinePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reducedMotion = useReducedMotion();
  const enabled = hasFinePointer && !reducedMotion;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("cursor-custom");

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button']"));
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      document.documentElement.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: hovering ? 48 : 12,
        height: hovering ? 48 : 12,
        backgroundColor: "#f3efe8",
        transition: "width 0.25s ease, height 0.25s ease",
      }}
    />
  );
}
