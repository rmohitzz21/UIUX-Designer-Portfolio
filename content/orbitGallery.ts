/**
 * The orbiting gallery runs on personal photos — drop images into `img/` and
 * `npm run sync:photos` (auto-run by dev/build) copies them into public/personal.
 */
export type OrbitCard = {
  src: string;
  alt: string;
  title: string;
};

export const orbitHeadline = ["I design products", "that feel inevitable."] as const;

/** Fallback ring size when there are fewer photos than this. */
export const ORBIT_CARD_COUNT = 25;
