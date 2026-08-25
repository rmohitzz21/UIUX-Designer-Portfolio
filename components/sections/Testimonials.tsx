"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { testimonials } from "@/content/testimonials";

const AUTO_ROTATE_MS = 6000;
const SWIPE_THRESHOLD = 80;

export function Testimonials() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  const active = testimonials[index];

  function go(step: number) {
    setSlide(([i]) => [(i + step + testimonials.length) % testimonials.length, step]);
  }

  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(() => go(1), AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [reducedMotion, paused]);

  return (
    <section
      className="border-y border-text/10 px-8 py-28 md:px-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="mb-16 text-display-lg font-display font-light">What clients say</h2>

      <div className="relative mx-auto max-w-3xl overflow-hidden" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            drag={reducedMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) go(1);
              else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
            }}
            initial={reducedMotion ? false : { opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.5, ease: EASE_REVEAL }}
            className="flex cursor-grab flex-col items-center gap-6 text-center active:cursor-grabbing"
          >
            <PortraitPlaceholder
              initials={active.initials}
              className="h-20 w-20 rounded-full"
              textClassName="text-xl"
            />
            <p className="font-display text-2xl font-light md:text-3xl">&ldquo;{active.quote}&rdquo;</p>
            <p className="text-sm text-muted">
              {active.name} · {active.role}, {active.company}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setSlide([i, i > index ? 1 : -1])}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-text/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
