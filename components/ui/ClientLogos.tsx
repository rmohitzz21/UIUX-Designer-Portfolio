import { Marquee } from "@/components/motion/Marquee";
import { heroSkills, trustedBy } from "@/content/site";

/** Placeholder marks for client names only. */
const MARKS = [
  <circle key="a" cx="12" cy="12" r="7" />,
  <rect key="b" x="5" y="5" width="14" height="14" rx="3" />,
  <path key="c" d="M12 4l8 16H4z" />,
  <path key="d" d="M12 3l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" />,
  <path key="e" d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0M12 4v16" />,
  <rect key="f" x="4" y="4" width="16" height="16" rx="8" ry="4" />,
];

function Logo({ name, index, showMark }: { name: string; index: number; showMark: boolean }) {
  return (
    <span className="mx-8 flex shrink-0 items-center gap-2.5 text-muted transition-colors duration-300 hover:text-text motion-reduce:transition-none">
      {showMark ? (
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
      ) : null}
      <span className="text-lg font-semibold tracking-tight whitespace-nowrap">{name}</span>
    </span>
  );
}

/**
 * Continuously scrolling strip. Pauses on hover, and the edges fade out
 * so items slide in and out rather than popping at a hard boundary.
 */
export function ClientLogos({
  className,
  duration = 32,
  reverse = false,
  variant = "clients",
}: {
  className?: string;
  duration?: number;
  reverse?: boolean;
  /** Hero shows skills; TrustedBy keeps client names. */
  variant?: "clients" | "skills";
}) {
  const items = variant === "skills" ? heroSkills : trustedBy;
  const label = variant === "skills" ? "Design skills and services" : "Selected clients";
  const showMark = variant === "clients";

  return (
    <div
      className={className}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      aria-label={label}
    >
      <Marquee duration={duration} reverse={reverse}>
        {items.map((name, i) => (
          <Logo key={name} name={name} index={i} showMark={showMark} />
        ))}
      </Marquee>
    </div>
  );
}
