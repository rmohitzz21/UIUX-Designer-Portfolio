"use client";

import { motion } from "framer-motion";
import { EASE_REVEAL, STAGGER } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MaskRevealProps = {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "div";
  /** Reveal word-by-word (with a blur-in) instead of a single mask per line. */
  splitWords?: boolean;
};

/** Line-by-line clip-mask reveal for display headlines. */
export function MaskReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  as = "h1",
  splitWords = false,
}: MaskRevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    return (
      <Component className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName ?? ""}`}>
            {line}
          </span>
        ))}
      </Component>
    );
  }

  if (splitWords) {
    let wordIndex = 0;
    return (
      <Component className={className}>
        {lines.map((line, li) => {
          const words = line.split(" ");
          return (
            <span key={li} className={`block ${lineClassName ?? ""}`}>
              {words.map((word, wi) => {
                const i = wordIndex++;
                return (
                  <span key={wi} className="inline-block overflow-hidden pb-[0.12em]">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
                      animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.7, ease: EASE_REVEAL, delay: delay + i * STAGGER }}
                    >
                      {word}
                      {wi < words.length - 1 ? " " : ""}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </Component>
    );
  }

  return (
    <Component className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, ease: EASE_REVEAL, delay: delay + i * STAGGER * 1.5 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
