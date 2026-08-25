// Motion tokens — see MASTER PROMPT §5. Single source of truth for easing/timing.
export const EASE_REVEAL = [0.16, 1, 0.3, 1] as const;

export const SPRING = { type: "spring", stiffness: 300, damping: 30 } as const;
export const SPRING_SOFT = { type: "spring", stiffness: 150, damping: 20 } as const;

export const STAGGER = 0.08;
