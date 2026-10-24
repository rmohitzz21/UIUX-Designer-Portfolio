"use client";

import { usePathname } from "next/navigation";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SocialIconRow } from "@/components/ui/SocialIcons";
import { site, navLinks } from "@/content/site";

/** Oversized first-name wordmark — letters lift under the cursor, neighbours follow. */
function FooterWordmark() {
  const name = site.name.split(" ")[0].toUpperCase();

  return (
    <p
      aria-hidden="true"
      className="footer-mark mt-10 -mb-[0.22em] w-full text-center leading-none font-semibold tracking-tighter text-bg select-none"
      style={{ fontSize: "clamp(4rem, 22vw, 20rem)" }}
    >
      {[...name].map((letter, i) => (
        <span key={i}>{letter}</span>
      ))}
    </p>
  );
}

export function Footer() {
  const isHome = usePathname() === "/";
  const hrefFor = (href: string) =>
    href.startsWith("/") ? href : isHome ? href : `/${href}`;

  return (
    <footer className="relative z-10 overflow-hidden bg-text text-bg">
      <div className="section-container pt-24 md:pt-32">
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
            <SocialIconRow variant="solid" className="mt-2" />
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
              <p className="text-sm text-bg/50">Based in</p>
              <p className="mt-2 text-sm font-medium">{site.location}</p>
            </div>

            <p className="text-sm text-bg/50 sm:self-end sm:text-right">
              © 2026 {site.name}
            </p>
          </div>
        </div>
      </div>

      <FooterWordmark />
    </footer>
  );
}
