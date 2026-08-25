"use client";

import { motion } from "framer-motion";
import { EASE_REVEAL } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type WordRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  as?: "p" | "h2" | "blockquote" | "div";
};

/** Word-by-word clip-mask reveal — for pull-quotes and other short, emphasis-worthy lines. */
export function WordReveal({ text, className, wordClassName, stagger = 0.04, as = "p" }: WordRevealProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");
  const Component = motion[as];

  if (reducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            variants={{ hidden: { y: "100%" }, visible: { y: "0%" } }}
            transition={{ duration: 0.6, ease: EASE_REVEAL, delay: i * stagger }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
