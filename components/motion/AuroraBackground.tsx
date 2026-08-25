"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** A single soft, breathing glow that gently drifts toward the cursor — one tone, no shifting hues. */
export function AuroraBackground({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 35, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 35, damping: 18, mass: 0.6 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    const maxTravel = 70;
    rawX.set(relX * maxTravel * 2);
    rawY.set(relY * maxTravel * 2);
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className={`absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent 70%)",
          opacity: 0.08,
          x: reducedMotion ? 0 : x,
          y: reducedMotion ? 0 : y,
        }}
        animate={reducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={reducedMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
