"use client";

import { ScrollWordReveal } from "@/components/motion/ScrollWordReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { pricingPlans, pricingSteps } from "@/content/site";

function scrollToContact(reducedMotion: boolean) {
  document.querySelector("#contact")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
}

export function Pricing() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="pricing" className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <ScrollWordReveal
            lines={["Simple pricing.", "Standout designs."]}
            className="text-display-lg font-display"
          />
          <Reveal as="div" className="lg:pt-4">
            <p className="text-xl font-semibold">Clear costs, no hidden fees.</p>
            <p className="mt-2 text-lg text-muted">
              Select from a monthly subscription or an individual project rate.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-20 grid gap-8 md:grid-cols-3">
          {pricingSteps.map((step) => (
            <RevealItem key={step.number}>
              <div className="flex flex-col gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-text text-sm font-semibold text-bg">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-20 grid items-start gap-6 lg:grid-cols-2">
          {pricingPlans.map((plan) => {
            const dark = !plan.featured;
            return (
              <RevealItem key={plan.name}>
                <div
                  className={`flex h-full flex-col rounded-3xl border p-8 md:p-10 ${
                    dark ? "border-text bg-text text-bg" : "border-line bg-surface"
                  }`}
                >
                  <h3 className="text-display font-display">{plan.name}</h3>

                  <p className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                    <span className={`text-sm ${dark ? "text-bg/60" : "text-muted"}`}>{plan.cadence}</span>
                  </p>

                  <p className={`mt-4 ${dark ? "text-bg/70" : "text-muted"}`}>{plan.description}</p>

                  <ul className="mt-8 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
                            dark ? "bg-bg text-text" : "bg-text text-bg"
                          }`}
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => scrollToContact(reducedMotion)}
                    className={`mt-10 w-full rounded-full py-3.5 text-sm font-medium transition-opacity hover:opacity-85 ${
                      dark ? "bg-bg text-text" : "bg-text text-bg"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
