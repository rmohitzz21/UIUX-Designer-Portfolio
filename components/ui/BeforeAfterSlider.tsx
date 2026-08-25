"use client";

import { useState } from "react";
import { ProjectArt } from "./ProjectArt";
import type { Project } from "@/content/projects";

type BeforeAfterSliderProps = {
  beforeTint: Project["thumbnail"];
  afterTint: Project["thumbnail"];
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
};

/** Drag (or arrow-key, via the native range input) to compare before/after. */
export function BeforeAfterSlider({
  beforeTint,
  afterTint,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const [percent, setPercent] = useState(50);

  return (
    <div className={`relative aspect-[4/3] overflow-hidden rounded-card ${className ?? ""}`}>
      <ProjectArt tint={afterTint} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 h-full w-full" style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
        <ProjectArt tint={beforeTint} className="absolute inset-0 h-full w-full" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-bg" style={{ left: `${percent}%` }} />
      <div
        className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bg text-text shadow-lg"
        style={{ left: `${percent}%` }}
      >
        ↔
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-bg/80 px-3 py-1 text-xs text-text">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-bg/80 px-3 py-1 text-xs text-text">
        {afterLabel}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
