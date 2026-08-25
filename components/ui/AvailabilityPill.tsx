import { site } from "@/content/site";

export function AvailabilityPill({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-text/15 px-4 py-1.5 text-sm text-muted ${className ?? ""}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
      {site.availability}
    </span>
  );
}
