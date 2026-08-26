"use client";

import { usePathname } from "next/navigation";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { site, navLinks } from "@/content/site";

export function Footer() {
  const isHome = usePathname() === "/";
  const hrefFor = (href: string) =>
    href.startsWith("/") ? href : isHome ? href : `/${href}`;

  return (
    <footer className="relative z-10 overflow-hidden bg-text text-bg">
      <div className="relative mx-auto max-w-7xl px-6 pt-24 md:px-12 md:pt-32">
        <TextReveal
          as="h2"
          lines={["Let's create", { text: "incredible work together.", muted: true }]}
          className="text-display-lg font-display"
        />

        <Reveal as="div" className="mt-16 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-sm text-bg/50">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1.5 inline-block font-medium transition-opacity hover:opacity-70"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-sm text-bg/50">Call me</p>
            <a href={hrefFor("#contact")} className="mt-1.5 inline-block font-medium transition-opacity hover:opacity-70">
              Book now
            </a>
          </div>
          <div>
            <p className="text-sm text-bg/50">Social</p>
            <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="font-medium transition-opacity hover:opacity-70">
                LinkedIn
              </a>
              <a href={site.socials.dribbble} target="_blank" rel="noreferrer" className="font-medium transition-opacity hover:opacity-70">
                Dribbble
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="font-medium transition-opacity hover:opacity-70">
                Instagram
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-bg/15 pt-10">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-sm text-bg/50">Menu</p>
              <nav className="mt-2 grid max-w-[14rem] grid-cols-2 gap-x-6 gap-y-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={hrefFor(link.href)}
                    className="text-sm font-medium transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-sm text-bg/50">Legal</p>
              <div className="mt-2 flex flex-col gap-1.5">
                <a href="#terms" className="text-sm font-medium transition-opacity hover:opacity-70">
                  Terms of service
                </a>
                <a href="#privacy" className="text-sm font-medium transition-opacity hover:opacity-70">
                  Privacy policy
                </a>
              </div>
            </div>

            <p className="text-sm text-bg/50 sm:self-end sm:text-right">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </div>
      </div>

      {/* Oversized wordmark bleeding off the bottom edge, as on the reference. */}
      <p
        aria-hidden="true"
        className="mt-10 -mb-[0.22em] w-full text-center leading-none font-semibold tracking-tighter text-bg select-none"
        style={{ fontSize: "clamp(4rem, 22vw, 20rem)" }}
      >
        {site.name.split(" ")[0]}
      </p>
    </footer>
  );
}
