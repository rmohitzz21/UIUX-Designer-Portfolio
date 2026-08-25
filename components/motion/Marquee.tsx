"use client";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  /** seconds for one full loop */
  duration?: number;
  reverse?: boolean;
};

/** Infinite CSS-driven marquee. Duplicates children once so the loop is seamless. */
export function Marquee({ children, className, duration = 30, reverse = false }: MarqueeProps) {
  return (
    <div className={`group overflow-hidden ${className ?? ""}`}>
      <div
        className="flex w-max motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
