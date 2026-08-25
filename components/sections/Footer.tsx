"use client";

import { usePathname } from "next/navigation";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { site, navLinks } from "@/content/site";

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
      className="group flex items-center gap-2 rounded-full border border-text/15 px-4 py-2 text-xs tracking-widest uppercase transition-colors hover:border-accent hover:text-accent"
    >
      Back to top
      <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
    </button>
  );
}

export function Footer() {
  const isHome = usePathname() === "/";
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="border-t border-text/10 px-8 py-12 md:px-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <a href={hrefFor("#top")} className="font-display text-xl italic">
            {site.name}
          </a>
          <p className="mt-2 max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm md:items-end">
          {navLinks.map((link) => (
            <a key={link.href} href={hrefFor(link.href)} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={site.socials.dribbble} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            Dribbble
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-text/10 pt-8 md:flex-row">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Three.js &amp; Framer Motion.
        </p>
        <BackToTopButton />
      </div>
    </footer>
  );
}
