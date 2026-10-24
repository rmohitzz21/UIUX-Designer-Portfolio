"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { site, navLinks, about } from "@/content/site";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { useContactDrawer } from "@/components/sections/ContactDrawer";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function Avatar({ size = 32 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-text text-[11px] font-semibold text-bg"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {about.initials}
    </span>
  );
}

export function Nav() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const reducedMotion = useReducedMotion();
  const lenis = useLenis();
  const isHome = usePathname() === "/";
  const drawer = useContactDrawer();
  const hrefFor = (href: string) =>
    href.startsWith("/") ? href : isHome ? href : `/${href}`;

  // Collapse to the dots on the way down, bring the links back on the way up.
  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      const delta = y - lastY;
      // Ignore sub-pixel jitter and rubber-banding so the pill doesn't flicker.
      if (Math.abs(delta) < 6) return;
      lastY = y;
      setCollapsed(y > 140 && delta > 0);
    }

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
    drawer.open("contact");
  }

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
        <motion.div
          layout={mounted && !reducedMotion}
          transition={reducedMotion || !mounted ? { duration: 0 } : { duration: 0.5, ease: EASE_REVEAL }}
          className="nav-glass pointer-events-auto flex items-center gap-3 p-3 md:gap-6"
        >
          <a href={hrefFor("#top")} className="flex shrink-0 items-center gap-2.5 pl-1">
            <Avatar />
            <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{site.name}</span>
          </a>

          <AnimatePresence mode="popLayout" initial={false}>
            {collapsed ? (
              <motion.button
                key="dots"
                type="button"
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: EASE_REVEAL }}
                onClick={() => setCollapsed(false)}
                aria-label="Show navigation"
                className="flex h-9 w-11 items-center justify-center gap-1.5 rounded-full"
              >
                <span className="h-[6px] w-[6px] rounded-full bg-muted" />
                <span className="h-[6px] w-[6px] rounded-full bg-muted" />
                <span className="h-[6px] w-[6px] rounded-full bg-muted" />
              </motion.button>
            ) : (
              <motion.div
                key="links"
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_REVEAL }}
                className="flex items-center gap-3 md:gap-6"
              >
                <nav className="hidden items-center gap-6 md:flex">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={hrefFor(link.href)}
                      className="nav-link text-sm font-semibold whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <button
                  type="button"
                  onClick={goToContact}
                  className="hidden h-8 items-center rounded-3xl bg-bg px-3 text-sm font-semibold whitespace-nowrap shadow-sm transition-shadow hover:shadow md:inline-flex"
                >
                  Contact
                </button>

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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
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
                  <a href={hrefFor(link.href)} className="text-display" onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                goToContact();
              }}
              className="mt-12 self-start rounded-full bg-text px-6 py-3 text-sm font-medium text-bg"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
