"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { experience } from "@/content/experience";

/**
 * Work history as a stacked deck that fans out into a list. Collapsed, only the most recent role
 * is readable, with the rest of the deck peeking out beneath it; "Show all" deals them into a list.
 */
export function WorkHistory() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const visible = open ? experience : experience.slice(0, 1);
  const buried = Math.min(experience.length - 1, 2);
  const ease = reducedMotion ? { duration: 0 } : { duration: 0.45, ease: EASE_REVEAL };

  return (
    <div>
      <p className="text-sm text-subtle">My work history</p>

      <div className="relative mt-4">
        {/* Slivers of the cards still in the deck. Purely decorative — the real rows are below. */}
        <AnimatePresence>
          {!open &&
            Array.from({ length: buried }).map((_, i) => (
              <motion.div
                key={i}
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-14 rounded-2xl border border-line bg-surface"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: (i + 1) * 9,
                  marginInline: (i + 1) * 12,
                }}
                exit={{ opacity: 0 }}
                style={{ zIndex: -(i + 1) }}
                transition={ease}
              />
            ))}
        </AnimatePresence>

        <motion.ul layout={!reducedMotion} className="relative flex flex-col gap-3" transition={ease}>
          <AnimatePresence initial={false}>
            {visible.map((entry, i) => (
              <motion.li
                key={entry.company}
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={
                  reducedMotion ? { duration: 0 } : { duration: 0.45, ease: EASE_REVEAL, delay: open ? i * 0.05 : 0 }
                }
                className="rounded-2xl border border-line bg-surface px-5 py-4"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold">{entry.company}</span>
                  <span className="shrink-0 text-sm text-muted">{entry.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{entry.role}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:border-text/25"
        >
          {open ? "Hide" : "Show all"}
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full bg-text text-[10px] leading-none text-bg transition-transform duration-300 motion-reduce:transition-none ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </div>
    </div>
  );
}
