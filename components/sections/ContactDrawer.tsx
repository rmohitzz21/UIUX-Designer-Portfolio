"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { site } from "@/content/site";

type DrawerVariant = "quote" | "contact";

type Ctx = { open: (variant?: DrawerVariant) => void; close: () => void };
const DrawerCtx = createContext<Ctx | null>(null);

/** Opens the right-hand enquiry drawer from anywhere (nav Contact, Get quote, Get started). */
export function useContactDrawer() {
  const ctx = useContext(DrawerCtx);
  if (!ctx) throw new Error("useContactDrawer must be used inside <ContactDrawerProvider>");
  return ctx;
}

const COPY: Record<DrawerVariant, { title: string; blurb: string }> = {
  quote: { title: "Request a quote", blurb: "Fill out the form below or" },
  contact: { title: "Let's work together", blurb: "Fill out the form below or" },
};

const BUDGETS = ["Under $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Not sure yet"] as const;

const FIELD =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-text/30";

export function ContactDrawerProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<DrawerVariant | null>(null);
  const [sent, setSent] = useState(false);
  const reducedMotion = useReducedMotion();
  const lenis = useLenis();

  const open = useCallback((v: DrawerVariant = "contact") => {
    setSent(false);
    setVariant(v);
  }, []);
  const close = useCallback(() => setVariant(null), []);

  const isOpen = variant !== null;

  useEffect(() => {
    if (isOpen) lenis?.stop();
    else lenis?.start();
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const copy = variant ? COPY[variant] : COPY.contact;

  return (
    <DrawerCtx.Provider value={{ open, close }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-text/30"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3 }}
              onClick={close}
              aria-hidden="true"
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label={copy.title}
              className="fixed inset-y-0 right-0 z-[61] flex w-full max-w-[33.75rem] flex-col overflow-y-auto bg-surface p-8 md:p-12"
              initial={reducedMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reducedMotion ? undefined : { x: "100%" }}
              transition={{ duration: reducedMotion ? 0 : 0.5, ease: EASE_REVEAL }}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-60"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>

              <h2 className="text-display font-display">{copy.title}</h2>
              <p className="mt-2 text-muted">
                {copy.blurb}{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-text underline-offset-4 hover:underline">
                  book a call.
                </a>
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full bg-bg">
                  <Image src={site.photo} alt="" fill sizes="44px" className="object-cover object-[70%_18%]" />
                </span>
                <span>
                  <span className="block font-semibold">{site.name}</span>
                  <span className="block text-sm text-muted">{site.email}</span>
                </span>
              </div>

              {sent ? (
                <div className="mt-10 rounded-2xl border border-line bg-bg p-6">
                  <p className="font-semibold">Your email client should be open.</p>
                  <p className="mt-1 text-sm text-muted">
                    Hit send and it reaches me directly — or write to{" "}
                    <a href={`mailto:${site.email}`} className="font-semibold text-text underline-offset-4 hover:underline">
                      {site.email}
                    </a>
                    . I reply to everything personally, usually within a day.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-8 flex flex-col gap-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // ponytail: no backend — hand the enquiry to the visitor's mail client so
                    // nothing is silently dropped. Swap for a POST to Resend/Formspree if you
                    // want it to land in the inbox without leaving the page.
                    const data = new FormData(e.currentTarget);
                    const body = [
                      `Name: ${data.get("name")}`,
                      `Email: ${data.get("email")}`,
                      `Budget: ${data.get("budget") || "Not specified"}`,
                      "",
                      String(data.get("message") || ""),
                    ].join("\n");
                    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
                      `${copy.title} — ${data.get("name")}`,
                    )}&body=${encodeURIComponent(body)}`;
                    setSent(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium">Name</span>
                      <input name="name" required placeholder="Name" className={FIELD} />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-medium">Email</span>
                      <input type="email" name="email" required placeholder="Email" className={FIELD} />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium">Send a message or describe your project</span>
                    <textarea name="message" rows={6} className={`${FIELD} resize-y`} />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium">What&apos;s your budget?</span>
                    <select name="budget" defaultValue="" className={FIELD}>
                      <option value="" disabled>
                        Select...
                      </option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </label>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-text py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
                  >
                    Send message
                  </button>
                </form>
              )}

              <p className="mt-8 text-xs text-muted">
                Your details are only used to reply to this enquiry.
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </DrawerCtx.Provider>
  );
}
