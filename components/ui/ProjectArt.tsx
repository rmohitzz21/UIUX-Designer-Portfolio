// No image assets yet — these gradient tints stand in for project thumbnails/covers.
const TINTS = {
  clay: "radial-gradient(circle at 30% 20%, #f2eee7 0%, #c96f4a 60%, #8a5a3f 100%)",
  sage: "radial-gradient(circle at 70% 30%, #f2eee7 0%, #8a9b6e 60%, #55613f 100%)",
  dusk: "radial-gradient(circle at 40% 70%, #6b6259 0%, #1a1714 70%, #16130f 100%)",
  sand: "radial-gradient(circle at 60% 20%, #f2eee7 0%, #dcae90 55%, #c96f4a 100%)",
  moss: "radial-gradient(circle at 30% 70%, #dfe3d5 0%, #8a9b6e 55%, #4d5a3a 100%)",
} as const;

type ProjectArtProps = {
  tint: keyof typeof TINTS;
  className?: string;
};

export function ProjectArt({ tint, className }: ProjectArtProps) {
  return <div aria-hidden="true" className={className} style={{ background: TINTS[tint] }} />;
}
