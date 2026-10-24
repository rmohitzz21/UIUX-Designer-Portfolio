"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { orbitHeadline, ORBIT_CARD_COUNT, type OrbitCard } from "@/content/orbitGallery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLenis } from "@/hooks/useLenis";

gsap.registerPlugin(ScrollTrigger);

const ROT_START = 0;
const ROT_RANGE = 288;
const SCALE_START = 0.294;
const SCALE_RANGE = 0.516;
/** 12 o'clock card — peak of the lower ∩ arc. */
const FEATURED_ANGLE = 270;
const FEATURED_END = 0.4;
const MASCOT_AT = 0.42;
const PIN_DISTANCE = "+=165%";
const TAP_DURATION = 0.62;

/** Repeat to fill the ring, or — when there are more cards than slots — spread evenly so none is stuck off-ring. */
function fillRing(source: OrbitCard[], count: number) {
  return Array.from(
    { length: count },
    (_, i) =>
      source[
        (source.length <= count ? i : Math.round((i * source.length) / count)) % source.length
      ],
  );
}

function ringMetrics(width: number, _height: number, isMobile: boolean) {
  const radius = Math.round(
    isMobile
      ? Math.max(240, Math.min(width * 0.56, 360))
      : Math.max(480, Math.min(width * 0.55, 1054)),
  );
  const cardW = isMobile ? 128 : 170;
  const cardH = isMobile ? 160 : 212;
  return { radius, cardW, cardH, size: radius * 2 + cardH };
}

function galleryState(p: number, vh: number, radius: number) {
  const rotation = ROT_START + p * ROT_RANGE;
  const scale = SCALE_START + p * SCALE_RANGE;
  const startFeatured = vh * 0.5 - radius * SCALE_START;
  const featuredY = startFeatured + p * (vh * FEATURED_END - startFeatured);
  const translateY = featuredY - vh * 0.5 + radius * scale;
  return { rotation, scale, featuredY, translateY };
}

function applyGallery(el: HTMLElement, p: number, vh: number, radius: number, extraRot = 0) {
  const { translateY, rotation, scale } = galleryState(p, vh, radius);
  el.style.transform = `translate3d(0, ${translateY}px, 0) rotate(${rotation + extraRot}deg) scale(${scale})`;
}

function featuredIndex(p: number, count: number, extraRot = 0) {
  const rotation = ROT_START + p * ROT_RANGE + extraRot;
  const step = 360 / count;
  const i = Math.round((FEATURED_ANGLE - rotation) / step);
  return ((i % count) + count) % count;
}

/** Progress values where a card sits at 12 o'clock — upright peak of the lower arc. */
function snapPoints(count: number) {
  const step = 360 / count;
  const points: number[] = [];
  for (let i = 0; i < count; i++) {
    let rot = FEATURED_ANGLE - i * step;
    while (rot < ROT_START) rot += 360;
    while (rot > ROT_START + ROT_RANGE) rot -= 360;
    if (rot >= ROT_START && rot <= ROT_START + ROT_RANGE) {
      points.push((rot - ROT_START) / ROT_RANGE);
    }
  }
  return [...new Set(points.map((n) => Number(n.toFixed(4))))].sort((a, b) => a - b);
}

function nearestSnap(p: number, points: number[]) {
  if (points.length === 0) return p;
  return points.reduce((best, next) => (Math.abs(next - p) < Math.abs(best - p) ? next : best));
}

/** Soft bean mascot — ears, blush; squints while the ring spins. */
function CuteMascot() {
  return (
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="52" cy="38" rx="18" ry="28" fill="#F2C2A0" transform="rotate(-18 52 38)" />
      <ellipse cx="108" cy="38" rx="18" ry="28" fill="#F2C2A0" transform="rotate(18 108 38)" />
      <ellipse cx="52" cy="42" rx="10" ry="16" fill="#F8D9C4" transform="rotate(-18 52 42)" />
      <ellipse cx="108" cy="42" rx="10" ry="16" fill="#F8D9C4" transform="rotate(18 108 42)" />
      <circle cx="80" cy="92" r="52" fill="#F6CDB0" />
      <circle cx="80" cy="96" r="46" fill="#FAD9C2" />
      <circle cx="54" cy="104" r="10" fill="#F0A08A" opacity="0.55" />
      <circle cx="106" cy="104" r="10" fill="#F0A08A" opacity="0.55" />
      <g className="orbit-mascot-open">
        <circle cx="64" cy="88" r="5.5" fill="#3A2A24" />
        <circle cx="96" cy="88" r="5.5" fill="#3A2A24" />
        <circle cx="66" cy="86" r="1.7" fill="#fff" />
        <circle cx="98" cy="86" r="1.7" fill="#fff" />
      </g>
      <g className="orbit-mascot-shut">
        <path d="M58 88c4 3 8 3 12 0" fill="none" stroke="#3A2A24" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M90 88c4 3 8 3 12 0" fill="none" stroke="#3A2A24" strokeWidth="3.2" strokeLinecap="round" />
      </g>
      <path
        d="M70 112c6 8 14 8 20 0"
        fill="none"
        stroke="#3A2A24"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Happening-style orbiting work gallery.
 * Starts as a compact ring; ends as a wide fanned arc with one upright card.
 */
export function OrbitGallery({ photos = [] }: { photos?: OrbitCard[] }) {
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const lenis = useLenis();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const snappingRef = useRef(false);
  const tapAnimatingRef = useRef(false);
  const progressRef = useRef(0);
  const extraRotRef = useRef(0);
  const tapTargetRotRef = useRef<number | null>(null);
  const extraTweenRef = useRef<gsap.core.Tween | null>(null);
  const paintRef = useRef<(p: number) => void>(() => {});
  const activeRef = useRef(0);
  const mascotShownRef = useRef(false);
  const [viewport, setViewport] = useState({ w: 1440, h: 900 });
  const [mascotShown, setMascotShown] = useState(false);
  const [mascotReady, setMascotReady] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [active, setActive] = useState(0);

  const source = photos;
  // Whole-list repeats keep duplicates evenly spaced — never two of the same photo side by side.
  const reps = Math.max(1, Math.round(ORBIT_CARD_COUNT / Math.max(1, source.length)));
  const count = isMobile ? Math.min(12, source.length) : source.length * reps;
  const cards = useMemo(() => fillRing(source, count), [source, count]);
  const points = useMemo(() => snapPoints(count), [count]);
  const { radius, cardW, cardH, size } = ringMetrics(viewport.w, viewport.h, isMobile);
  const featured = cards[active] ?? cards[0];
  const cardStep = 360 / count;

  useEffect(() => {
    function measure() {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const gallery = galleryRef.current;
    const headline = headlineRef.current;
    const focus = focusRef.current;
    if (!section || !pin || !gallery) return;

    extraTweenRef.current?.kill();
    extraTweenRef.current = null;
    extraRotRef.current = 0;
    tapTargetRotRef.current = null;
    tapAnimatingRef.current = false;
    snappingRef.current = false;
    setSpinning(false);

    const paint = (p: number) => {
      const vh = window.innerHeight;
      applyGallery(gallery, p, vh, radius, extraRotRef.current);
      if (headline) {
        const fade = Math.min(1, Math.max(0, (p - 0.2) / 0.28));
        headline.style.opacity = String(1 - fade);
      }
      if (focus) {
        // Sit under the upright card, never on it — the card scales as the ring opens.
        const { scale, featuredY } = galleryState(p, vh, radius);
        focus.style.top = `${featuredY + (cardH * scale) / 2 + 16}px`;
      }

      const nextActive = featuredIndex(p, count, extraRotRef.current);
      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }

      const show = p >= MASCOT_AT;
      if (show !== mascotShownRef.current) {
        mascotShownRef.current = show;
        setMascotShown(show);
        if (!show) setMascotReady(false);
      }
    };
    paintRef.current = paint;

    if (reducedMotion) {
      paint(0.72);
      return;
    }

    paint(0);

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: PIN_DISTANCE,
        pin,
        pinSpacing: true,
        scrub: 0.55,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
          paint(self.progress);
        },
      });
      triggerRef.current = trigger;
    }, section);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      extraTweenRef.current?.kill();
      extraTweenRef.current = null;
      paintRef.current = () => {};
      triggerRef.current = null;
      ctx.revert();
    };
  }, [reducedMotion, count, size, radius, cardH]);

  useEffect(() => {
    if (reducedMotion || !lenis) return;

    let idle: number | undefined;

    function settle() {
      const trigger = triggerRef.current;
      if (!trigger || snappingRef.current || tapAnimatingRef.current || !trigger.isActive) return;

      // After taps, keep scroll alone — snap only the tap offset so the peak stays upright.
      if (Math.abs(extraRotRef.current) > 0.2) {
        const snapped = Math.round(extraRotRef.current / cardStep) * cardStep;
        if (Math.abs(snapped - extraRotRef.current) < 0.15) return;

        snappingRef.current = true;
        const proxy = { r: extraRotRef.current };
        extraTweenRef.current?.kill();
        extraTweenRef.current = gsap.to(proxy, {
          r: snapped,
          duration: 0.45,
          ease: "power3.out",
          onUpdate: () => {
            extraRotRef.current = proxy.r;
            paintRef.current(progressRef.current);
          },
          onComplete: () => {
            extraRotRef.current = snapped;
            tapTargetRotRef.current = snapped;
            paintRef.current(progressRef.current);
            snappingRef.current = false;
          },
        });
        return;
      }

      const p = progressRef.current;
      if (p < 0.14 || p > 0.96) return;

      const target = nearestSnap(p, points);
      if (Math.abs(target - p) < 0.012) return;

      const y = trigger.start + target * (trigger.end - trigger.start);
      snappingRef.current = true;
      lenis!.scrollTo(y, {
        duration: 0.7,
        easing: (t: number) => 1 - (1 - t) ** 3,
        onComplete: () => {
          window.setTimeout(() => {
            snappingRef.current = false;
          }, 100);
        },
      });
    }

    const unsub = lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      window.clearTimeout(idle);
      if (!tapAnimatingRef.current && Math.abs(velocity) > 0.35) {
        // Intentional scroll — leave tap offset, but drop the “in-flight” target lock.
        if (!snappingRef.current) tapTargetRotRef.current = extraRotRef.current;
      }
      if (Math.abs(velocity) < 0.08) {
        idle = window.setTimeout(settle, 160);
      }
    });

    return () => {
      window.clearTimeout(idle);
      unsub();
    };
  }, [lenis, points, reducedMotion, cardStep]);

  function spinToNext() {
    const step = cardStep;
    const from = tapTargetRotRef.current ?? extraRotRef.current;
    const next = from + step;

    if (reducedMotion) {
      extraRotRef.current = next;
      tapTargetRotRef.current = next;
      paintRef.current(progressRef.current);
      return;
    }

    extraTweenRef.current?.kill();
    tapTargetRotRef.current = next;
    tapAnimatingRef.current = true;
    snappingRef.current = true;
    setSpinning(true);

    const proxy = { r: extraRotRef.current };

    extraTweenRef.current = gsap.to(proxy, {
      r: next,
      duration: TAP_DURATION,
      ease: "power3.out",
      overwrite: true,
      onUpdate: () => {
        extraRotRef.current = proxy.r;
        paintRef.current(progressRef.current);
      },
      onComplete: () => {
        extraRotRef.current = next;
        paintRef.current(progressRef.current);
        setSpinning(false);
        tapAnimatingRef.current = false;
        snappingRef.current = false;
      },
    });
  }

  return (
    <section
      id="orbit"
      ref={sectionRef}
      aria-label="Orbiting work gallery"
      className="relative z-10 bg-bg border-t border-line"
    >
      <div ref={pinRef} className="orbit-stage relative isolate h-svh overflow-hidden">
        <div className="hero-stage absolute inset-0">
          <div
            className="hero-ring pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{ perspective: 3400, transformStyle: "preserve-3d" }}
          >
            <div
              ref={galleryRef}
              className="hero-ring-gallery relative will-change-transform"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transformOrigin: "center center",
                transform: `translate3d(0, 0, 0) rotate(${ROT_START}deg) scale(${SCALE_START})`,
              }}
            >
              {cards.map((card, i) => {
                const angle = (i / cards.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = Number((radius * Math.cos(rad)).toFixed(3));
                const y = Number((radius * Math.sin(rad)).toFixed(3));
                const tilt = angle + 90;
                const isFeatured = i === active;
                const image = (
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes={`${cardW}px`}
                    className="object-cover"
                    priority={i < 4}
                  />
                );

                return (
                  <div
                    key={`${card.src}-${i}`}
                    className={`hero-ring-card pointer-events-auto absolute overflow-hidden rounded-[14px] bg-surface ${isFeatured ? "is-featured" : ""}`}
                    style={{
                      width: `${cardW}px`,
                      height: `${cardH}px`,
                      left: "50%",
                      top: "50%",
                      marginLeft: `${-cardW / 2}px`,
                      marginTop: `${-cardH / 2}px`,
                      transform: `perspective(3400px) translate(${x}px, ${y}px) rotate(${tilt}deg)`,
                      transformOrigin: "50% 50%",
                      willChange: "transform",
                      zIndex: isFeatured ? 2 : 1,
                    }}
                  >
                    {image}
                  </div>
                );
              })}
            </div>
          </div>

          <h2
            ref={headlineRef}
            className="hero-headline pointer-events-none absolute inset-x-0 top-1/2 z-10 mx-auto max-w-[20rem] -translate-y-1/2 px-6 text-center text-[1.65rem] leading-[1.15] font-medium tracking-[-0.03em] text-text md:max-w-xl md:text-[2.15rem]"
          >
            <span className="block text-muted">{orbitHeadline[0]}</span>
            <span className="block">{orbitHeadline[1]}</span>
          </h2>

          <div ref={focusRef} className={`orbit-focus ${mascotShown ? "is-shown" : ""}`} aria-live="polite">
            {/* Keyed on the card, not the text — every photo shares a caption, so only a fresh key replays the animation. */}
            <p key={active} className="orbit-focus-title">
              {featured?.title}
            </p>
          </div>

          <div className={`orbit-mascot-home ${mascotShown ? "is-shown" : ""}`}>
            <button
              type="button"
              className={`orbit-mascot ${mascotShown ? "is-shown" : ""} ${mascotReady ? "is-ready" : ""} ${spinning ? "is-spinning" : ""}`}
              aria-label={`Show the next project, currently ${featured?.title ?? "work"}`}
              disabled={!mascotShown && !reducedMotion}
              onAnimationEnd={(event) => {
                if (event.animationName === "orbit-mascot-pop") setMascotReady(true);
              }}
              onClick={spinToNext}
            >
              <CuteMascot />
            </button>
            <span
              className={`orbit-mascot-hint ${mascotShown ? "is-shown" : ""} ${spinning ? "is-busy" : ""}`}
              aria-hidden="true"
            >
              Tap Me
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
