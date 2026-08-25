"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** A line is either plain text, or text flagged `muted` to render in grey. */
export type RevealLine = string | { text: string; muted?: boolean };

type TextRevealProps = {
  lines: readonly RevealLine[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "blockquote" | "div";
  /** Seconds before the first word starts. */
  delay?: number;
  /** Play as soon as mounted rather than waiting to scroll into view. */
  immediate?: boolean;
  /** Flow the lines together as one paragraph instead of stacking them, so a
   *  `muted` segment can trail a full-colour lead-in on the same line. */
  inline?: boolean;
};

// Measured off the reference: words rise 10px, un-blur from 5px, over ~0.6s with a ~45ms stagger.
const DURATION = 0.6;
const STAGGER = 0.045;
const EASE = [0.16, 1, 0.3, 1] as const;
const HIDDEN = { opacity: 0, y: 10, filter: "blur(5px)" };
const SHOWN = { opacity: 1, y: 0, filter: "blur(0px)" };

function toLine(line: RevealLine) {
  return typeof line === "string" ? { text: line, muted: false } : { text: line.text, muted: !!line.muted };
}

/**
 * Word-by-word entrance: each word fades up out of a soft blur, staggered across the block.
 * Lines marked `muted` stay grey — the reference uses that to de-emphasise part of a headline.
 */
export function TextReveal({
  lines,
  className,
  as = "h2",
  delay = 0,
  immediate = false,
  inline = false,
}: TextRevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];
  const parsed = lines.map(toLine);
  const lineDisplay = inline ? "inline" : "block";

  if (reducedMotion) {
    return (
      <Component className={className}>
        {parsed.map((line, i) => (
          <span key={i} className={`${lineDisplay} ${line.muted ? "text-muted" : ""}`}>
            {line.text}
            {inline && i < parsed.length - 1 ? " " : ""}
          </span>
        ))}
      </Component>
    );
  }

  const animateProps = immediate
    ? { animate: "shown" as const }
    : { whileInView: "shown" as const, viewport: { once: true, margin: "-12% 0px -12% 0px" } };

  let wordIndex = 0;

  return (
    <Component className={className} initial="hidden" {...animateProps}>
      {parsed.map((line, li) => {
        const words = line.text.split(" ");
        return (
          <span key={li} className={`${lineDisplay} ${line.muted ? "text-muted" : ""}`}>
            {words.map((word, wi) => {
              const i = wordIndex++;
              return (
                <span key={wi} className="inline-block whitespace-pre">
                  <motion.span
                    className="inline-block"
                    variants={{ hidden: HIDDEN, shown: SHOWN }}
                    transition={{ duration: DURATION, ease: EASE, delay: delay + i * STAGGER }}
                  >
                    {word}
                    {wi < words.length - 1 || (inline && li < parsed.length - 1) ? " " : ""}
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
