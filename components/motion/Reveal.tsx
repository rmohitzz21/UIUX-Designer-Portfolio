"use client";

import { useSyncExternalStore } from "react";
import { motion, type Variants } from "framer-motion";
import { EASE_REVEAL, STAGGER } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const variants: Variants = {
  hidden: (distance: number) => ({ opacity: 0, y: distance, filter: "blur(5px)" }),
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
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
  duration = 0.6,
  distance = 12,
  as = "div",
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const Component = motion[as];

  const canAnimate = mounted && !reducedMotion;

  return (
    <Component
      className={className}
      variants={canAnimate ? variants : undefined}
      custom={distance}
      initial={canAnimate ? "hidden" : false}
      whileInView={canAnimate ? "visible" : undefined}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: canAnimate ? duration : 0,
        ease: EASE_REVEAL,
        delay: canAnimate ? delay : 0,
      }}
    >
      {children}
    </Component>
  );
}

/** A single item inside a RevealGroup — inherits the "hidden"/"visible" trigger from its parent. */
export function RevealItem({ children, className, distance = 12, as = "div" }: Omit<RevealProps, "delay">) {
  const reducedMotion = useReducedMotion();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const Component = motion[as];

  const canAnimate = mounted && !reducedMotion;

  return (
    <Component
      className={className}
      variants={canAnimate ? variants : undefined}
      custom={distance}
      transition={{ duration: canAnimate ? 0.6 : 0, ease: EASE_REVEAL }}
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
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const canAnimate = mounted && !reducedMotion;

  return (
    <motion.div
      className={className}
      initial={canAnimate ? "hidden" : false}
      whileInView={canAnimate ? "visible" : undefined}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ staggerChildren: canAnimate ? stagger : 0 }}
    >
      {children}
    </motion.div>
  );
}
