/**
 * The site's link arrow. A drawn glyph rather than the ↗ character, which renders at a
 * different weight and baseline in every font and can't be stroked to match its label.
 */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-[0.85em] w-[0.85em] shrink-0 ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}

/** Back-to-top variant, same weight. */
export function ArrowUp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-[0.85em] w-[0.85em] shrink-0 ${className ?? ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 12.5v-9" />
      <path d="M4 7.5 8 3.5l4 4" />
    </svg>
  );
}
