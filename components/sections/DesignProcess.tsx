"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { designProcess, designProcessHeading } from "@/content/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/** Scroll-driven process — the fill line and node track each stage as you move through it. */
export function DesignProcess() {
  const listRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLSpanElement>(null);
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const stepCount = designProcess.length;
  const visibleActiveIndex = reducedMotion ? stepCount - 1 : activeIndex;

  useEffect(() => {
    if (reducedMotion) return;

    const list = listRef.current;
    const line = lineRef.current;
    const head = headRef.current;
    if (!list || !line || !head) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: list,
        start: "top 72%",
        end: "bottom 38%",
        scrub: 0.65,
        onUpdate: (self) => {
          const nodes = nodeRefs.current.filter(Boolean) as HTMLSpanElement[];
          if (nodes.length === 0) return;

          const listTop = list.getBoundingClientRect().top;
          const centers = nodes.map((node) => {
            const rect = node.getBoundingClientRect();
            return rect.top + rect.height / 2 - listTop;
          });

          const start = centers[0];
          const end = centers[centers.length - 1];
          const y = start + self.progress * (end - start);

          gsap.set(line, { top: start, height: Math.max(0, y - start) });
          gsap.set(head, { top: y, opacity: 1 });

          let idx = 0;
          const threshold = 10;
          for (let i = 0; i < centers.length; i++) {
            if (y + threshold >= centers[i]) idx = i;
          }
          setActiveIndex(idx);
        },
      });
    }, list);

    return () => ctx.revert();
  }, [reducedMotion, stepCount]);

  return (
    <section id="process" className="border-t border-line py-24 md:py-32">
      <div className="section-container">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <TextReveal
              lines={[{ text: designProcessHeading[0], muted: true }, designProcessHeading[1]]}
              className="text-display-lg font-display"
            />
            <Reveal as="p" delay={0.1} className="mt-6 max-w-sm text-muted">
              A clear path from messy briefs to shipped product — research, structure, craft and validation in one loop.
            </Reveal>
          </div>

          <div ref={listRef} className="relative">
            <div
              aria-hidden="true"
              className="absolute top-4 bottom-4 left-[15px] w-[2px] rounded-full bg-line"
            />
            <div
              ref={lineRef}
              aria-hidden="true"
              className="absolute top-0 left-[15px] w-[2px] rounded-full bg-text"
              style={{ height: reducedMotion ? "100%" : 0 }}
            />
            <span
              ref={headRef}
              aria-hidden="true"
              className="process-head pointer-events-none absolute left-[16px] z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-text"
              style={{ top: 0, opacity: reducedMotion ? 0 : 0 }}
            />

            <ol className="relative flex flex-col gap-3">
              {designProcess.map((step, i) => {
                const reached = i <= visibleActiveIndex;
                const current = i === visibleActiveIndex;

                return (
                  <li key={step.number} className="relative flex items-start gap-5">
                    <span
                      ref={(el) => {
                        nodeRefs.current[i] = el;
                      }}
                      data-node
                      aria-hidden="true"
                      className={`process-node relative z-[1] mt-3 flex size-8 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold tabular-nums transition-all duration-500 ${
                        reached
                          ? "border-text bg-text text-bg"
                          : "border-line bg-surface text-muted"
                      } ${current ? "process-node--current scale-110" : "scale-100"}`}
                    >
                      {step.number}
                    </span>

                    <div
                      className={`min-w-0 flex-1 rounded-2xl border px-5 py-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        current
                          ? "translate-x-0 border-text/15 bg-surface shadow-sm"
                          : reached
                            ? "border-line bg-surface"
                            : "translate-x-1 border-transparent bg-transparent"
                      }`}
                    >
                      <p
                        className={`font-semibold tracking-tight transition-colors duration-500 ${
                          reached ? "text-text" : "text-muted/55"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`mt-1 text-sm leading-snug transition-all duration-500 ${
                          current
                            ? "max-h-12 opacity-100"
                            : "max-h-12 opacity-70 max-md:max-h-0 max-md:overflow-hidden max-md:opacity-0"
                        } ${reached ? "text-muted" : "text-muted/40"}`}
                      >
                        {step.tags}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
