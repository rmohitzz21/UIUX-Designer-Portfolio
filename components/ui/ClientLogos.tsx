import { Marquee } from "@/components/motion/Marquee";
import { trustedBy } from "@/content/site";

/** Placeholder marks — no logo assets yet, so each client gets a simple geometric glyph. */
const MARKS = [
  <circle key="a" cx="12" cy="12" r="7" />,
  <rect key="b" x="5" y="5" width="14" height="14" rx="3" />,
  <path key="c" d="M12 4l8 16H4z" />,
  <path key="d" d="M12 3l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" />,
  <path key="e" d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0M12 4v16" />,
  <rect key="f" x="4" y="4" width="16" height="16" rx="8" ry="4" />,
];

function Logo({ name, index }: { name: string; index: number }) {
  return (
    <span className="mx-8 flex shrink-0 items-center gap-2.5 text-muted transition-colors duration-300 hover:text-text motion-reduce:transition-none">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {MARKS[index % MARKS.length]}
      </svg>
      <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{name}</span>
    </span>
  );
}

/**
 * Continuously scrolling strip of client wordmarks. Pauses on hover, and the edges fade out
 * so logos slide in and out rather than popping at a hard boundary.
 */
export function ClientLogos({
  className,
  duration = 32,
  reverse = false,
}: {
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div
      className={className}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      aria-label="Selected clients"
    >
      <Marquee duration={duration} reverse={reverse}>
        {trustedBy.map((name, i) => (
          <Logo key={name} name={name} index={i} />
        ))}
      </Marquee>
    </div>
  );
}
