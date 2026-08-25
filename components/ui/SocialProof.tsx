import Image from "next/image";
import { site } from "@/content/site";

/** Avatar stack + rating + client count. Used in the hero and in the CTA card. */
export function SocialProof({ className, align = "left" }: { className?: string; align?: "left" | "center" }) {
  return (
    <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${className ?? ""}`}>
      <span className="flex -space-x-2.5" aria-hidden="true">
        {site.clientFaces.map((src, i) => (
          <span
            key={src}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-bg bg-surface"
            style={{ zIndex: site.clientFaces.length - i }}
          >
            <Image src={src} alt="" fill sizes="36px" className="object-cover" />
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
