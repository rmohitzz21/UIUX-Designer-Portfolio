"use client";

import { ScrollWordReveal } from "@/components/motion/ScrollWordReveal";
import { Reveal } from "@/components/motion/Reveal";
import { site, about } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollWordReveal
            lines={["Still not sure?", "Book a free discovery call."]}
            className="text-display-lg font-display"
          />

          <Reveal as="p" delay={0.1} className="mx-auto mt-6 max-w-lg text-lg text-muted">
            {site.contactSubtext}
          </Reveal>

          <Reveal as="div" delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-text py-2 pr-6 pl-2 text-bg transition-opacity hover:opacity-85"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bg text-[11px] font-semibold text-text">
                {about.initials}
              </span>
              <span className="text-sm font-medium">Schedule now</span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-line bg-surface px-6 py-3.5 text-sm font-medium transition-colors hover:border-text/25"
            >
              {site.email}
            </a>
          </Reveal>

          <Reveal as="p" delay={0.3} className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            {site.availability}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
