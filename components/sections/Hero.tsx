"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL, STAGGER } from "@/lib/motion";
import { site, about } from "@/content/site";
import { projects } from "@/content/projects";

function scrollToId(id: string, reducedMotion: boolean) {
  document.querySelector(id)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
}

/** Two-tone headline: the first line stays grey, the last line lands in black. */
function Headline({ lines }: { lines: readonly string[] }) {
  const reducedMotion = useReducedMotion();
  let wordIndex = 0;

  return (
    <h1 className="text-hero font-display">
      {lines.map((line, li) => {
        const isLast = li === lines.length - 1;
        const words = line.split(" ");
        return (
          <span key={li} className={`block ${isLast ? "text-text" : "text-muted"}`}>
            {words.map((word, wi) => {
              const i = wordIndex++;
              return (
                <span key={wi} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={reducedMotion ? false : { y: "105%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={
                      reducedMotion ? { duration: 0 } : { duration: 0.8, ease: EASE_REVEAL, delay: 0.1 + i * STAGGER }
                    }
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
    </h1>
  );
}

const FAN = [
  { rotate: -14, x: "-38%", y: "6%", scale: 0.88, depth: 26, z: 1 },
  { rotate: -7, x: "-19%", y: "-1%", scale: 0.94, depth: 18, z: 2 },
  { rotate: 7, x: "19%", y: "-3%", scale: 0.97, depth: 14, z: 3 },
  { rotate: 15, x: "40%", y: "7%", scale: 0.88, depth: 26, z: 1 },
] as const;

function FanCard({
  index,
  tint,
  px,
  py,
}: {
  index: number;
  tint: "clay" | "sage" | "dusk" | "sand" | "moss";
  px: MotionValue<number>;
  py: MotionValue<number>;
}) {
  const reducedMotion = useReducedMotion();
  const spec = FAN[index];
  const x = useTransform(px, (v) => v * spec.depth);
  const y = useTransform(py, (v) => v * spec.depth);

  // Three layers so nothing fights over `transform`: static centring, cursor drift, then the fan pose.
  return (
    <div
      className="absolute top-1/2 left-1/2 aspect-[16/10] w-[62%] -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: spec.z }}
    >
      <motion.div className="h-full w-full" style={reducedMotion ? undefined : { x, y }}>
        <motion.div
          className="h-full w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
          initial={reducedMotion ? false : { opacity: 0, rotate: 0, x: 0, y: "18%", scale: 0.82 }}
          animate={{ opacity: 1, rotate: spec.rotate, x: spec.x, y: spec.y, scale: spec.scale }}
          transition={reducedMotion ? { duration: 0 } : { duration: 1, ease: EASE_REVEAL, delay: 0.35 + index * 0.09 }}
        >
          <ProjectArt tint={tint} className="h-full w-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Fanned stack of project covers — drifts gently with the cursor. */
function HeroCardFan() {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 60, damping: 20 });
  const py = useSpring(rawY, { stiffness: 60, damping: 20 });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  const covers = projects.slice(0, 4).map((p) => p.cover);

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative aspect-[4/3] w-full"
      aria-hidden="true"
    >
      {covers.map((tint, i) => (
        <FanCard key={i} index={i} tint={tint} px={px} py={py} />
      ))}
    </div>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-xs text-text">
          ★
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: reducedMotion ? { duration: 0 } : { duration: 0.7, ease: EASE_REVEAL, delay },
  });

  return (
    <section id="hero" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-10 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <div className="max-w-xl">
            <motion.span
              {...fade(0)}
              className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-2 text-sm shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-secondary" />
              {site.availability}
            </motion.span>

            <div className="mt-7">
              <Headline lines={site.heroLines} />
            </div>

            <motion.p {...fade(0.5)} className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              <span className="text-text">{site.heroSubtextLead}</span> {site.heroSubtext}
            </motion.p>

            <motion.button
              {...fade(0.6)}
              type="button"
              onClick={() => scrollToId("#contact", reducedMotion)}
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-text py-2 pr-6 pl-2 text-bg transition-opacity hover:opacity-85"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-[11px] font-semibold text-text">
                {about.initials}
              </span>
              <span className="text-sm font-medium">Book a call with me</span>
            </motion.button>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.6, ease: EASE_REVEAL, delay: 0.3 }}
          >
            <HeroCardFan />
          </motion.div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="edge-rules relative mx-auto max-w-7xl px-6 py-6 md:px-12">
          <motion.div {...fade(0.8)} className="flex items-center gap-4">
            <span className="flex -space-x-2" aria-hidden="true">
              {["JD", "MK", "TW", "RN", "AL"].map((initials) => (
                <span
                  key={initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-bg bg-surface text-[10px] font-semibold text-subtle"
                >
                  {initials}
                </span>
              ))}
            </span>
            <span className="flex flex-col">
              <Stars />
              <span className="mt-0.5 text-sm text-subtle">
                {site.socialProof.count} {site.socialProof.label}
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
