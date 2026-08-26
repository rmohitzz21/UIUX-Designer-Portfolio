import { TextReveal } from "@/components/motion/TextReveal";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { services, servicesHeading, techStack } from "@/content/site";

/** Simple geometric glyphs — no icon dependency, matches the mono-line look of the reference. */
const GLYPHS: Record<string, React.ReactNode> = {
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18M8 4v5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z" />
    </>
  ),
  orbit: (
    <>
      <circle cx="12" cy="12" r="4" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4.5" transform="rotate(-28 12 12)" />
    </>
  ),
  panel: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M9.5 4v16" />
    </>
  ),
};

export function Services() {
  return (
    <section id="services" className="border-t border-line py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <TextReveal
              lines={[{ text: servicesHeading[0], muted: true }, servicesHeading[1], servicesHeading[2]]}
              className="text-display-lg font-display"
            />

            <div className="mt-14">
              <p className="text-sm text-subtle">My tech stack</p>
              <RevealGroup className="mt-4 flex flex-wrap gap-2.5">
                {techStack.map((tool) => (
                  <RevealItem key={tool}>
                    <span className="inline-flex items-center rounded-xl border border-line bg-surface px-4 py-2.5 text-sm">
                      {tool}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>

          <RevealGroup className="flex flex-col gap-6">
            {services.map((service) => (
              <RevealItem key={service.title}>
                <div className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-text text-bg transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {GLYPHS[service.icon]}
                    </svg>
                  </span>
                  <span className="text-xl font-medium">{service.title}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
