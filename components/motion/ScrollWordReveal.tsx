"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ScrollWordRevealProps = {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "p" | "blockquote" | "div";
  /** Opacity each word starts at before scroll brings it to full black. */
  from?: number;
};

function Word({
  progress,
  range,
  from,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  from: number;
  children: ReactNode;
}) {
  const opacity = useTransform(progress, range, [from, 1]);
  return (
    <motion.span className="inline-block" style={{ opacity }}>
      {children}
    </motion.span>
  );
}

/**
 * Words fade from light grey to solid black as the block scrolls through the viewport —
 * the signature heading treatment. Scroll-linked, so it tracks the scrubbing exactly.
 */
export function ScrollWordReveal({
  lines,
  className,
  lineClassName,
  as = "h2",
  from = 0.18,
}: ScrollWordRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });

  const Component = motion[as];
  const totalWords = lines.reduce((n, line) => n + line.split(" ").length, 0);

  if (reducedMotion) {
    return (
      <div ref={ref}>
        <Component className={className}>
          {lines.map((line, i) => (
            <span key={i} className={`block ${lineClassName ?? ""}`}>
              {line}
            </span>
          ))}
        </Component>
      </div>
    );
  }

  let wordIndex = 0;

  // The ref sits on a plain wrapper: one ref can't satisfy every element type `as` allows.
  return (
    <div ref={ref}>
      <Component className={className}>
        {lines.map((line, li) => {
          const words = line.split(" ");
          return (
            <span key={li} className={`block ${lineClassName ?? ""}`}>
              {words.map((word, wi) => {
                const i = wordIndex++;
                const start = i / totalWords;
                const end = (i + 1) / totalWords;
                return (
                  <Word key={wi} progress={scrollYProgress} range={[start, end]} from={from}>
                    {word}
                    {wi < words.length - 1 ? " " : ""}
                  </Word>
                );
              })}
            </span>
          );
        })}
      </Component>
    </div>
  );
}
