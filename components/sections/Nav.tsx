"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { site, navLinks } from "@/content/site";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const lenis = useLenis();
  const isHome = usePathname() === "/";
  const router = useRouter();
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    function onScroll() {
      setScrolled((prev) => {
        const next = window.scrollY > 80;
        return prev === next ? prev : next;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    return () => {
      lenis?.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function goToContact() {
    if (isHome) {
      document.querySelector("#contact")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    } else {
      router.push("/#contact");
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-4 md:top-5 md:px-8">
        <div
          className={`nav-glass relative mx-auto flex max-w-3xl items-center justify-between rounded-full px-4 py-2.5 transition-[background,box-shadow] duration-500 motion-reduce:transition-none md:px-5 md:py-3.5 ${
            scrolled ? "nav-glass-scrolled" : ""
          }`}
        >
          <a href={hrefFor("#top")} className="font-body text-base font-semibold tracking-tight">
            {site.name}
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={hrefFor(link.href)} className="group relative text-sm font-medium">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 motion-reduce:transition-none group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton
              className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-bg md:inline-flex"
              onClick={goToContact}
            >
              Let&apos;s talk
            </MagneticButton>

            <button
              type="button"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`h-px w-5 bg-text transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-5 bg-text transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-8 md:hidden"
            initial={reducedMotion ? { opacity: 1 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reducedMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reducedMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reducedMotion ? 0.15 : 0.6, ease: EASE_REVEAL }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <li key={link.href} className="flex items-baseline gap-4">
                  <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <a
                    href={hrefFor(link.href)}
                    className="font-body text-4xl font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
