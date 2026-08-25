"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { ProjectArt } from "@/components/ui/ProjectArt";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { projects } from "@/content/projects";
import { MORPH_COUNT } from "@/lib/motion";

/** Where each card sits inside the hero cluster, as a fraction of the slot, plus its tilt. */
const HERO_POSE = [
  { dx: -0.07, dy: -0.03, rot: -5, z: 2 },
  { dx: 0.05, dy: -0.08, rot: 5, z: 3 },
  { dx: -0.03, dy: 0.08, rot: 10, z: 1 },
  { dx: 0.1, dy: 0.04, rot: 15, z: 4 },
] as const;

const HERO_CARD_SCALE = 0.7;

type Rect = { left: number; top: number; width: number; height: number };

type MorphCtx = {
  setHeroSlot: (el: HTMLElement | null) => void;
  setGridSlot: (i: number) => (el: HTMLElement | null) => void;
};

const Ctx = createContext<MorphCtx | null>(null);

export function useMorphSlots() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useMorphSlots must be used inside <ProjectMorphProvider>");
  return ctx;
}

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/**
 * Renders the four project covers once, floating above the layout, and drives them from a tight
 * tilted cluster in the hero out into the projects grid as the page scrolls — the reference's
 * signature hand-off between those two sections.
 */
export function ProjectMorphProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSlotRef = useRef<HTMLElement | null>(null);
  const gridSlotRefs = useRef<(HTMLElement | null)[]>([]);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const posesRef = useRef<{ hero: Rect; grid: Rect }[]>([]);
  const containerTopRef = useRef(0);
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  const setHeroSlot = useCallback((el: HTMLElement | null) => {
    heroSlotRef.current = el;
  }, []);

  const setGridSlot = useCallback(
    (i: number) => (el: HTMLElement | null) => {
      gridSlotRefs.current[i] = el;
    },
    [],
  );

  const measure = useCallback(() => {
    const container = containerRef.current;
    const heroSlot = heroSlotRef.current;
    if (!container || !heroSlot) return;

    const cRect = container.getBoundingClientRect();
    containerTopRef.current = cRect.top + window.scrollY;

    const hRect = heroSlot.getBoundingClientRect();
    const slot = {
      left: hRect.left - cRect.left,
      top: hRect.top - cRect.top,
      width: hRect.width,
      height: hRect.height,
    };

    const cardW = slot.width * HERO_CARD_SCALE;
    const cardH = (cardW * 10) / 16;

    const next: { hero: Rect; grid: Rect }[] = [];
    for (let i = 0; i < MORPH_COUNT; i++) {
      const pose = HERO_POSE[i];
      const hero: Rect = {
        left: slot.left + slot.width / 2 - cardW / 2 + pose.dx * slot.width,
        top: slot.top + slot.height / 2 - cardH / 2 + pose.dy * slot.height,
        width: cardW,
        height: cardH,
      };

      const gEl = gridSlotRefs.current[i];
      const gRect = gEl?.getBoundingClientRect();
      const grid: Rect = gRect
        ? {
            left: gRect.left - cRect.left,
            top: gRect.top - cRect.top,
            width: gRect.width,
            height: gRect.height,
          }
        : hero;

      next.push({ hero, grid });
    }

    posesRef.current = next;
    setReady(true);
  }, []);

  const apply = useCallback(() => {
    const poses = posesRef.current;
    if (!poses.length) return;

    const range = Math.max(1, window.innerHeight * 0.8);
    const raw = (window.scrollY - containerTopRef.current) / range;
    const p = reducedMotion ? 1 : Math.min(1, Math.max(0, raw));
    // Ease-out so the cards settle into the grid rather than snapping.
    const t = 1 - Math.pow(1 - p, 3);

    for (let i = 0; i < poses.length; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;
      const { hero, grid } = poses[i];
      const rot = lerp(HERO_POSE[i].rot, 0, t);
      el.style.width = `${lerp(hero.width, grid.width, t)}px`;
      el.style.height = `${lerp(hero.height, grid.height, t)}px`;
      el.style.transform = `translate3d(${lerp(hero.left, grid.left, t)}px, ${lerp(hero.top, grid.top, t)}px, 0) rotate(${rot}deg)`;
      el.style.pointerEvents = t > 0.9 ? "auto" : "none";
    }
  }, [reducedMotion]);

  useIsomorphicLayoutEffect(() => {
    measure();
    apply();

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        apply();
      });
    };
    const onResize = () => {
      measure();
      apply();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(onResize);
    if (containerRef.current) ro.observe(containerRef.current);

    // Re-measure once webfonts settle, since they shift the grid.
    document.fonts?.ready.then(onResize).catch(() => {});

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [measure, apply]);

  return (
    <Ctx.Provider value={{ setHeroSlot, setGridSlot }}>
      <div ref={containerRef} className="relative overflow-x-clip">
        {children}

        <div className="pointer-events-none absolute inset-0 z-20" aria-hidden={!ready}>
          {projects.slice(0, MORPH_COUNT).map((project, i) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              tabIndex={-1}
              aria-label={project.title}
              className="absolute top-0 left-0 overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl will-change-transform"
              style={{ zIndex: HERO_POSE[i].z, opacity: ready ? 1 : 0 }}
            >
              <ProjectArt tint={project.thumbnail} className="h-full w-full" />
            </Link>
          ))}
        </div>
      </div>
    </Ctx.Provider>
  );
}

/** Reserves the hero cluster area; the floating cards start here. */
export function HeroMorphSlot({ className }: { className?: string }) {
  const { setHeroSlot } = useMorphSlots();
  return <div ref={setHeroSlot} className={className} aria-hidden="true" />;
}

/** Reserves one grid cell; the floating card lands exactly here. */
export function GridMorphSlot({ index, className }: { index: number; className?: string }) {
  const { setGridSlot } = useMorphSlots();
  return <div ref={setGridSlot(index)} className={className} aria-hidden="true" />;
}
