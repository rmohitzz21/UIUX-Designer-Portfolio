import { site } from "@/content/site";

const FACES = ["JD", "MK", "TW", "RN", "AL"] as const;

/** Avatar stack + rating + client count. Used in the hero and in the CTA card. */
export function SocialProof({ className, align = "left" }: { className?: string; align?: "left" | "center" }) {
  return (
    <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${className ?? ""}`}>
      <span className="flex -space-x-2.5" aria-hidden="true">
        {FACES.map((initials) => (
          <span
            key={initials}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-bg bg-surface text-[10px] font-semibold text-subtle"
          >
            {initials}
          </span>
        ))}
      </span>

      <span className="flex flex-col">
        <span className="flex gap-0.5 text-xs" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </span>
        <span className="mt-0.5 text-sm font-medium text-subtle">
          {site.socialProof.count} {site.socialProof.label}
        </span>
      </span>
    </div>
  );
}
