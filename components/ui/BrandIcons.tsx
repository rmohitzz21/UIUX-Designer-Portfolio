/**
 * Simplified brand marks, drawn rather than bundled as image assets.
 * Tool logos keep their brand colours; social marks inherit currentColor so they sit on
 * the dark buttons over the portrait.
 */

type IconProps = { className?: string };

const box = (className?: string) => `h-full w-full ${className ?? ""}`;

/* ---------------- tools ---------------- */

export function FigmaLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 36" className={box(className)} aria-hidden="true">
      <path d="M6 36a6 6 0 0 0 6-6v-6H6a6 6 0 0 0 0 12z" fill="#0ACF83" />
      <path d="M0 18a6 6 0 0 1 6-6h6v12H6a6 6 0 0 1-6-6z" fill="#A259FF" />
      <path d="M0 6a6 6 0 0 1 6-6h6v12H6A6 6 0 0 1 0 6z" fill="#F24E1E" />
      <path d="M12 0h6a6 6 0 0 1 0 12h-6V0z" fill="#FF7262" />
      <circle cx="18" cy="18" r="6" fill="#1ABCFE" />
    </svg>
  );
}

export function FigjamLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} aria-hidden="true">
      <circle cx="12" cy="6" r="5" fill="#FF7262" />
      <circle cx="6" cy="16" r="5" fill="#A259FF" />
      <circle cx="18" cy="16" r="5" fill="#1ABCFE" />
      <circle cx="12" cy="13" r="3.4" fill="#0ACF83" />
    </svg>
  );
}

export function CursorLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} aria-hidden="true">
      <path d="M12 1.6 21.4 7v10L12 22.4 2.6 17V7L12 1.6z" fill="#111" />
      <path d="M12 1.6 21.4 7 12 12.4 2.6 7 12 1.6z" fill="#555" />
      <path d="M12 12.4 21.4 7v10L12 22.4v-10z" fill="#333" />
    </svg>
  );
}

export function CanvaLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#00C4CC" />
      <path
        d="M15.4 14.6c-.9 1.5-2.3 2.5-3.8 2.5-2 0-3.2-1.6-3.2-3.9 0-3 1.9-5.8 4.1-5.8 1 0 1.6.6 1.6 1.4 0 .6-.3 1.1-.7 1.4-.2.2-.4.1-.4-.1.05-.7-.2-1.1-.7-1.1-1.1 0-2.2 2-2.2 4 0 1.4.6 2.3 1.6 2.3 1 0 1.9-.7 2.6-1.8.2-.3.6-.1.4.3z"
        fill="#fff"
      />
    </svg>
  );
}

export function IllustratorLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} aria-hidden="true">
      <rect x="0" y="0" width="24" height="24" rx="5" fill="#310000" />
      <rect x="1.5" y="1.5" width="21" height="21" rx="4" fill="#330000" />
      <text
        x="12"
        y="16.4"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
        fill="#FF9A00"
      >
        Ai
      </text>
    </svg>
  );
}

export function CorelLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#0B7A3E" />
      <path
        d="M16 15.2c-1 1.2-2.3 1.9-3.8 1.9-2.9 0-4.8-2-4.8-5.1S9.3 6.9 12.2 6.9c1.5 0 2.8.6 3.7 1.7l-1.7 1.5c-.5-.6-1.2-1-2-1-1.6 0-2.7 1.2-2.7 2.9s1.1 2.9 2.7 2.9c.8 0 1.6-.4 2.1-1l1.7 1.3z"
        fill="#fff"
      />
    </svg>
  );
}

/* ---------------- socials (inherit currentColor) ---------------- */

export function InstagramLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DribbbleLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" />
      <path d="M5 7.4c3.9 2.6 8.6 3.4 13.6 2.3" />
      <path d="M3.6 14.2c4.6-1.7 9.1-.9 12.3 3.3" />
      <path d="M9.2 3.3c3.9 4.2 6.1 9.5 6.6 16" />
    </svg>
  );
}

export function BehanceLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} fill="currentColor" aria-hidden="true">
      <path d="M2.5 5.8h5.4c2.1 0 3.5 1 3.5 2.8 0 1.2-.6 2-1.6 2.4 1.3.4 2.1 1.4 2.1 2.9 0 2.1-1.6 3.3-4 3.3H2.5V5.8zm2.4 4.4h2.5c.9 0 1.5-.4 1.5-1.2s-.6-1.2-1.5-1.2H4.9v2.4zm0 4.9h2.8c1 0 1.7-.4 1.7-1.3s-.7-1.3-1.7-1.3H4.9v2.6z" />
      <path d="M14.4 7.1h5.3v1.4h-5.3z" />
      <path d="M17.1 10c-2.2 0-3.7 1.6-3.7 3.8s1.5 3.8 3.8 3.8c1.8 0 3.1-.9 3.5-2.4h-2c-.2.5-.7.8-1.4.8-1 0-1.6-.6-1.7-1.6h5.3c.2-2.6-1.2-4.4-3.8-4.4zm-1.5 3c.2-.9.7-1.4 1.5-1.4s1.4.5 1.5 1.4h-3z" />
    </svg>
  );
}

export function LinkedinLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={box(className)} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9.7h4v11.3H3zM10 9.7h3.8v1.55h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.1c0-1.22-.02-2.78-1.75-2.78-1.75 0-2.02 1.32-2.02 2.7V21h-4z" />
    </svg>
  );
}
