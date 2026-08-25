export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`rounded-full border px-3 py-1 text-xs ${className ?? "border-text/15 text-muted"}`}>
      {children}
    </span>
  );
}
