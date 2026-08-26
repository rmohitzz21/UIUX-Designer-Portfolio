"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TextReveal } from "@/components/motion/TextReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { faqs, site } from "@/content/site";

/** A plus that becomes a minus: the vertical bar rotates away and fades. */
function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true">
      <span className="absolute h-[1.5px] w-4 rounded-full bg-text" />
      <span
        className={`absolute h-[1.5px] w-4 rounded-full bg-text transition-all duration-300 motion-reduce:transition-none ${
          open ? "rotate-0 opacity-0" : "rotate-90 opacity-100"
        }`}
      />
    </span>
  );
}

function FaqItem({
  index,
  question,
  answer,
  open,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const reducedMotion = useReducedMotion();
  const ease = reducedMotion ? { duration: 0 } : { duration: 0.35, ease: EASE_REVEAL };

  return (
    <li className="overflow-hidden rounded-2xl border border-line bg-surface">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center gap-4 px-6 py-5 text-left"
        >
          {/* The number gives way to the question once the card opens. */}
          <AnimatePresence initial={false}>
            {!open && (
              <motion.span
                key="n"
                initial={reducedMotion ? false : { opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={reducedMotion ? undefined : { opacity: 0, width: 0 }}
                transition={ease}
                className="overflow-hidden text-sm text-muted tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            )}
          </AnimatePresence>

          <motion.span layout={!reducedMotion} transition={ease} className="flex-1 font-semibold">
            {question}
          </motion.span>

          <PlusMinus open={open} />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reducedMotion ? { height: "auto" } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reducedMotion ? { height: "auto" } : { height: 0, opacity: 0 }}
            transition={ease}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 leading-relaxed text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/** The booking card that sits alongside the questions, as on the reference.
 *  It scrolls 1:1 like the rest of the page — the emphasis is all in its arrival. */
function DiscoveryCard() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      id="contact"
      className="rounded-3xl border border-line bg-surface p-8 md:p-10"
      initial={reducedMotion ? false : { opacity: 0, y: 56, scale: 0.95, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.95, ease: EASE_REVEAL }}
    >
      <span className="relative block h-16 w-16 overflow-hidden rounded-full bg-bg">
        <Image src={site.photo} alt="" fill sizes="64px" className="object-cover" />
      </span>

      <p className="mt-8 text-display font-display">
        <span className="block text-muted">Still not sure?</span>
        <span className="block">Book a free discovery call.</span>
      </p>

      <p className="mt-4 max-w-sm text-muted">{site.contactSubtext}</p>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2.5 rounded-full bg-text px-6 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="3" />
            <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
          </svg>
          Schedule now
        </a>
        <span className="text-lg font-medium text-muted/60">{site.email}</span>
      </div>
    </motion.div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <TextReveal
              lines={["Your questions", { text: "answered.", muted: true }]}
              className="text-display-lg font-display"
            />

            <ul className="mt-12 flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  index={i}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </ul>
          </div>

          {/* Sticks below the nav and rides the scroll, releasing level with the last question. */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <DiscoveryCard />
          </div>
        </div>
      </div>
    </section>
  );
}
