"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { useContactDrawer } from "@/components/sections/ContactDrawer";
import { pricingPlans, pricingPromo, pricingSteps } from "@/content/site";

/** Mono-line step glyphs, drawn in the same style as the Services icons. */
const STEP_GLYPHS: Record<string, React.ReactNode> = {
  repeat: (
    <>
      <path d="M4 9a6 6 0 0 1 10-2.5L17 9" />
      <path d="M17 5v4h-4" />
      <path d="M20 15a6 6 0 0 1-10 2.5L7 15" />
      <path d="M7 19v-4h4" />
    </>
  ),
  chat: (
    <>
      <path d="M20 15a3 3 0 0 1-3 3H9l-4 3v-4H5a3 3 0 0 1-1-2V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z" />
    </>
  ),
  deliver: (
    <>
      <path d="M3 13.5l5-2 6.5 2.2a2 2 0 0 1-1.3 3.8L10 16.5" />
      <path d="M10 16.5l6-1.5 4 1.5" />
      <path d="M8 8.5l4-4 3 3" />
    </>
  ),
};

/** Chrome-look bolt — a gradient SVG, so there's no binary asset to ship. */
function ChromeBolt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 170" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bolt-chrome" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="28%" stopColor="#d9d9d9" />
          <stop offset="46%" stopColor="#8f8f8f" />
          <stop offset="62%" stopColor="#f2f2f2" />
          <stop offset="82%" stopColor="#9c9c9c" />
          <stop offset="100%" stopColor="#4f4f4f" />
        </linearGradient>
        <linearGradient id="bolt-edge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path d="M70 4 24 92h30l-14 74 62-96H70l14-66z" fill="url(#bolt-chrome)" />
      <path d="M70 4 24 92h30l-14 74 62-96H70l14-66z" stroke="url(#bolt-edge)" strokeWidth="1.5" />
    </svg>
  );
}

/** The tilted black card that overlaps the pricing row. */
function PromoCard() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl bg-text px-7 py-8 text-bg shadow-2xl"
      initial={reducedMotion ? false : { opacity: 0, y: 28, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
      whileHover={reducedMotion ? undefined : { y: -6, rotate: 0.5 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reducedMotion ? 0 : 0.7, ease: EASE_REVEAL }}
    >
      <span className="inline-flex rounded-full bg-bg px-4 py-2 text-sm font-medium text-text">
        {pricingPromo.badge}
      </span>

      <motion.div
        className="pointer-events-none absolute -top-2 right-4 w-28 md:w-32"
        animate={reducedMotion ? undefined : { y: [0, -10, 0], rotate: [0, -3, 0] }}
        transition={reducedMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChromeBolt className="h-auto w-full drop-shadow-2xl" />
      </motion.div>

      <p className="mt-24 text-xl leading-snug md:mt-28">
        <span className="text-bg/55">{pricingPromo.lead}</span>
        <br />
        <span className="font-semibold">{pricingPromo.emphasis}</span>
      </p>
    </motion.div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pricing() {
  const drawer = useContactDrawer();
  const [unlimited, single] = pricingPlans;

  return (
    <section id="pricing" className="border-t border-line py-24 md:py-32">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <TextReveal
            lines={[{ text: "Simple pricing.", muted: true }, "Standout designs."]}
            className="text-display-lg font-display"
          />
          <Reveal as="div" className="lg:pt-4">
            <p className="font-semibold">Clear costs, no hidden fees.</p>
            <p className="mt-1 text-muted">Select from a monthly subscription or an individual project rate.</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-20 grid gap-10 md:grid-cols-3">
          {pricingSteps.map((step) => (
            <RevealItem key={step.title}>
              <div className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {STEP_GLYPHS[step.icon]}
                </svg>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="mt-3 text-muted">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-20 grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left column: the promo card overlaps the white card beneath it. */}
          <div className="relative">
            <div className="relative z-10">
              <PromoCard />
            </div>

            <Reveal as="div" delay={0.1} className="-mt-6">
              <div className="rounded-3xl border border-line bg-surface px-7 pt-16 pb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-bg px-3.5 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  {pricingPromo.status}
                </span>
                <h3 className="mt-6 text-display font-display">{pricingPromo.title}</h3>
                <p className="mt-3 text-muted">{pricingPromo.description}</p>
              </div>
            </Reveal>
          </div>

          <Reveal as="div" delay={0.15}>
            <div className="rounded-3xl border border-line bg-surface p-8 md:p-10">
              <h3 className="text-display font-display">{unlimited.name}</h3>
              <p className="mt-4">
                {unlimited.descriptionLead} <span className="text-muted">{unlimited.descriptionRest}</span>
              </p>

              <hr className="my-8 border-line" />

              <p className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight">{unlimited.price}</span>
                <span className="text-sm text-muted">{unlimited.cadence}</span>
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {unlimited.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm font-medium">
                    <Check />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => drawer.open("quote")}
                  className="rounded-full bg-text px-7 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                >
                  {unlimited.cta}
                </button>
                <span className="text-lg font-semibold text-muted/60">stripe</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal as="div" delay={0.1} className="mt-6">
          <div className="grid items-center gap-8 rounded-3xl bg-text p-8 text-bg md:p-10 lg:grid-cols-[1fr_1fr_auto]">
            <div>
              <h3 className="text-display font-display">{single.name}</h3>
              <p className="mt-4 font-semibold">{single.descriptionLead}</p>
              <p className="text-bg/60">{single.descriptionRest}</p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {single.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm font-medium">
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => drawer.open("quote")}
              className="justify-self-start rounded-full bg-bg px-7 py-3.5 text-sm font-medium text-text transition-opacity hover:opacity-85 lg:justify-self-end"
            >
              {single.cta}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
