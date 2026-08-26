import Image from "next/image";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { WorkHistory } from "@/components/sections/WorkHistory";
import {
  BehanceLogo,
  DribbbleLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@/components/ui/BrandIcons";
import { about, site } from "@/content/site";

const SOCIALS = [
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramLogo },
  { label: "Dribbble", href: site.socials.dribbble, Icon: DribbbleLogo },
  { label: "Behance", href: site.socials.behance, Icon: BehanceLogo },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinLogo },
] as const;

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <div className="section-container">
        <TextReveal
          lines={[{ text: "Designing experiences", muted: true }, "that solve real problems."]}
          className="text-display-lg font-display"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal as="div" className="relative w-full max-w-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={site.photo}
                  alt={`${site.name}, ${site.role}`}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>

              <div className="absolute right-4 bottom-4 flex items-center gap-1.5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-text/60 p-2 text-bg backdrop-blur-sm transition-colors hover:bg-text"
                  >
                    <social.Icon />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal as="div" delay={0.1} className="mt-6">
              <p className="text-2xl font-semibold tracking-tight">{site.name}</p>
              <p className="mt-1 text-sm font-medium text-muted">{site.role}</p>
            </Reveal>

            <div className="mt-14">
              <WorkHistory />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {about.bio.map((paragraph, i) => (
              <TextReveal
                key={i}
                as="p"
                inline
                lines={[paragraph.lead, { text: paragraph.rest, muted: true }]}
                className="text-lg leading-relaxed"
              />
            ))}

            <Reveal as="div" delay={0.15} className="mt-2">
              <p
                className="text-6xl leading-none text-text"
                style={{ fontFamily: "var(--font-signature)" }}
                aria-label={`${site.name}'s signature`}
              >
                {site.name}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
