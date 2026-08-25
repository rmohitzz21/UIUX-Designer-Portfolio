"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CounterProps = {
  value: number;
  className?: string;
  suffix?: string;
  duration?: number;
};

/** Animated count-up, triggered once the number scrolls into view. */
export function Counter({ value, className, suffix = "", duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reducedMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (!isInView) return;
    motionValue.set(reducedMotion ? value : value);
  }, [isInView, motionValue, value, reducedMotion]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });
    return unsubscribe;
  }, [spring, suffix]);

  if (reducedMotion) {
    return (
      <span className={className}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  );
}
