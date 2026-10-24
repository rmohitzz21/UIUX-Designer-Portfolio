"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

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

const DURATION = 0.6;
const STAGGER = 0.045;
const EASE = [0.16, 1, 0.3, 1] as const;

function toLine(line: RevealLine) {
  return typeof line === "string" ? { text: line, muted: false } : { text: line.text, muted: !!line.muted };
}

function computeLinesWithOffsets(lines: readonly RevealLine[]) {
  const parsed = lines.map(toLine);
  let offset = 0;
  return parsed.map((line) => {
    const words = line.text.split(" ");
    const startOffset = offset;
    offset += words.length;
    return { ...line, words, startOffset };
  });
}

/**
 * Word-by-word entrance: each word fades up out of a soft blur, staggered across the block.
 * Lines marked `muted` stay grey — the reference uses that to de-emphasise part of a headline.
 *
 * Animations start only after mount so SSR HTML matches the first client paint (no hydration mismatch).
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
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const Component = motion[as];
  const lineDisplay = inline ? "inline" : "block";
  const linesWithOffsets = computeLinesWithOffsets(lines);

  const canAnimate = mounted && !reducedMotion;
  const animateProps = !canAnimate
    ? { initial: false as const }
    : immediate
      ? { initial: "hidden" as const, animate: "shown" as const }
      : {
          initial: "hidden" as const,
          whileInView: "shown" as const,
          viewport: { once: true, margin: "-12% 0px -12% 0px" },
        };

  const hidden = { opacity: 0, y: 10, filter: "blur(5px)" };
  const shown = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <Component className={className} {...animateProps}>
      {linesWithOffsets.map((line, li) => (
        <span key={li} className={`${lineDisplay} ${line.muted ? "text-muted" : ""}`}>
          {line.words.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-pre">
              <motion.span
                className="inline-block"
                variants={canAnimate ? { hidden, shown } : undefined}
                transition={{
                  duration: canAnimate ? DURATION : 0,
                  ease: EASE,
                  delay: canAnimate ? delay + (line.startOffset + wi) * STAGGER : 0,
                }}
              >
                {word}
                {wi < line.words.length - 1 || (inline && li < linesWithOffsets.length - 1) ? " " : ""}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
