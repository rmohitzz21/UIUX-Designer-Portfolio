"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { SPRING } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  /** how far the button can be pulled toward the cursor, in px */
  strength?: number;
} & Omit<HTMLMotionProps<"button">, "style" | "onMouseMove" | "onMouseLeave" | "ref">;

/** A button that pulls toward the cursor on hover — one of the site's signature interactive details. */
export function MagneticButton({ children, className, strength = 24, ...rest }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
