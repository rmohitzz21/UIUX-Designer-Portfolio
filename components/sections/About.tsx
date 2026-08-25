"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { about, site } from "@/content/site";
import { experience } from "@/content/experience";

const COLLAPSED_COUNT = 2;

export function About() {
  const [showAll, setShowAll] = useState(false);
  const reducedMotion = useReducedMotion();
  const visible = showAll ? experience : experience.slice(0, COLLAPSED_COUNT);

  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <TextReveal
          lines={[{ text: "Designing experiences", muted: true }, "that solve real problems."]}
          className="text-display-lg font-display"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal as="div">
              <PortraitPlaceholder
                initials={about.initials}
                className="aspect-[4/3] w-full max-w-md rounded-2xl"
              />
            </Reveal>

            <Reveal as="div" delay={0.1} className="mt-6">
              <p className="text-xl font-semibold">{site.name}</p>
              <p className="mt-1 text-sm text-muted">{site.role}</p>
            </Reveal>

            <div className="mt-12">
              <p className="text-sm text-subtle">My work history</p>

              <ul className="mt-4 flex flex-col gap-3">
                <AnimatePresence initial={false}>
                  {visible.map((entry) => (
                    <motion.li
                      key={entry.company}
                      layout={!reducedMotion}
                      initial={reducedMotion ? false : { opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: EASE_REVEAL }}
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
              </ul>

              {experience.length > COLLAPSED_COUNT && (
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAll((v) => !v)}
                    aria-expanded={showAll}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-text/25"
                  >
                    {showAll ? "Show less" : "Show all"}
                    <span
                      className={`transition-transform duration-300 motion-reduce:transition-none ${showAll ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      ⌄
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {about.bio.map((paragraph, i) => (
              <TextReveal key={i} as="p" lines={[paragraph]} className="text-lg leading-relaxed text-muted" />
            ))}

            <TextReveal as="p" lines={[about.pullQuote]} className="mt-4 text-display font-display" />
          </div>
        </div>
      </div>
    </section>
  );
}
