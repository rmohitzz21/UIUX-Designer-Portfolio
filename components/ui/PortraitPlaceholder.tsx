// No portrait photo yet — a tinted monogram card stands in. Also usable for testimonial avatars.
type PortraitPlaceholderProps = {
  initials: string;
  className?: string;
  /** Tailwind text-size utility, scaled to the placeholder's dimensions. */
  textClassName?: string;
};

export function PortraitPlaceholder({ initials, className, textClassName = "text-8xl" }: PortraitPlaceholderProps) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className ?? ""}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-accent) 25%, transparent), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-display text-text/10 select-none ${textClassName}`}>{initials}</span>
      </div>
    </div>
  );
}
