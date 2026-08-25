"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AvailabilityPill } from "@/components/ui/AvailabilityPill";
import { EASE_REVEAL } from "@/lib/motion";
import { site } from "@/content/site";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      // clipboard API unavailable — the address is still visible on the button
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <MagneticButton
      onClick={handleClick}
      className="relative overflow-hidden rounded-full bg-accent px-10 py-5 text-lg font-medium text-bg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "copied" : "email"}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_REVEAL }}
          className="block"
        >
          {copied ? "Copied to clipboard ✓" : site.email}
        </motion.span>
      </AnimatePresence>
    </MagneticButton>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-8 py-32 md:px-16">
      <div className="flex flex-col items-center gap-8 text-center">
        <Reveal as="div">
          <AvailabilityPill />
        </Reveal>

        <MaskReveal as="h2" lines={site.contactLines} className="text-hero font-display font-light" />

        <Reveal as="p" delay={0.3} className="max-w-md text-lg text-muted">
          {site.contactSubtext}
        </Reveal>

        <Reveal as="div" delay={0.4} className="mt-4">
          <CopyEmailButton />
        </Reveal>

        <Reveal as="div" delay={0.5} className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={site.socials.dribbble}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Dribbble
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Instagram
          </a>
          <a href={site.socials.resume} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
