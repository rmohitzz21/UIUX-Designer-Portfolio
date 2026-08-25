// Motion tokens — see MASTER PROMPT §5. Single source of truth for easing/timing.
export const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;

export const SPRING = { type: "spring", stiffness: 300, damping: 30 } as const;
export const SPRING_SOFT = { type: "spring", stiffness: 150, damping: 20 } as const;

export const STAGGER = 0.08;

/** How many project covers take part in the hero-to-grid morph.
 *  Lives here, not in ProjectMorph.tsx: that module is "use client", so a server component
 *  importing this from there would receive a client-reference proxy instead of the number. */
export const MORPH_COUNT = 4;
