"use client";

import { usePathname } from "next/navigation";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { site, navLinks, about } from "@/content/site";

function BackToTopButton() {
  const lenis = useLenis();
  const reducedMotion = useReducedMotion();

  function handleClick() {
    if (lenis) lenis.scrollTo(0, { duration: reducedMotion ? 0 : 1.2 });
    else window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-text/25"
    >
      Back to top
      <span className="transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}

export function Footer() {
  const isHome = usePathname() === "/";
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="border-t border-line py-16">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <a href={hrefFor("#top")} className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-text text-[11px] font-semibold text-bg"
                aria-hidden="true"
              >
                {about.initials}
              </span>
              <span className="text-base font-semibold tracking-tight">{site.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              {site.email}
            </a>
          </div>

          <nav className="flex flex-col gap-3 text-sm md:items-end">
            {navLinks.map((link) => (
              <a key={link.href} href={hrefFor(link.href)} className="text-subtle transition-colors hover:text-text">
                {link.label}
              </a>
            ))}
            <a href={hrefFor("#contact")} className="text-subtle transition-colors hover:text-text">
              Contact
            </a>
          </nav>

          <div className="flex flex-col gap-3 text-sm md:items-end">
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="text-subtle transition-colors hover:text-text">
              LinkedIn
            </a>
            <a href={site.socials.dribbble} target="_blank" rel="noreferrer" className="text-subtle transition-colors hover:text-text">
              Dribbble
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-subtle transition-colors hover:text-text"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-6 border-t border-line pt-8 md:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
