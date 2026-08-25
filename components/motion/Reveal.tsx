"use client";

import { motion, type Variants } from "framer-motion";
import { EASE_REVEAL, STAGGER } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const variants: Variants = {
  hidden: (distance: number) => ({ opacity: 0, y: distance }),
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** y-offset in px the element travels while revealing */
  distance?: number;
  as?: "div" | "span" | "li" | "h1" | "h2" | "p";
};

/** Scroll-triggered mask/fade reveal for a single element. */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
  distance = 24,
  as = "div",
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      variants={variants}
      custom={distance}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration, ease: EASE_REVEAL, delay }}
    >
      {children}
    </Component>
  );
}

/** A single item inside a RevealGroup — inherits the "hidden"/"visible" trigger from its parent. */
export function RevealItem({ children, className, distance = 24, as = "div" }: Omit<RevealProps, "delay">) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      variants={variants}
      custom={distance}
      transition={{ duration: 0.9, ease: EASE_REVEAL }}
    >
      {children}
    </Component>
  );
}

/** Stagger container — wrap RevealItem children to reveal them in sequence on scroll into view. */
export function RevealGroup({
  children,
  className,
  stagger = STAGGER,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}
