import fs from "node:fs";
import path from "node:path";
import type { OrbitCard } from "@/content/orbitGallery";

const DIR = path.join(process.cwd(), "public/personal");

/** Camera-roll names carry no meaning — those photos get a word from the list below instead. */
const GENERIC = /^(whatsapp|screenshot|untitled)\b|^(img|im|image|photo|dsc|pxl|dcim)[\s_-]*\d/i;

const FALLBACK_WORDS = [
  "Golden hour",
  "Out wandering",
  "Somewhere quiet",
  "Caught mid-frame",
  "Late light",
  "Field notes",
  "A good day",
  "No filter",
  "Off the clock",
  "Shot by me",
  "Blue hour",
  "Detour",
  "Slow morning",
  "Held still",
  "Between things",
  "Just looking",
];

/** Rename a file to caption it — "old-delhi.jpeg" becomes "Old delhi". */
function caption(file: string, i: number) {
  const stem = file.replace(/\.[^.]+$/, "").trim();
  if (GENERIC.test(stem)) return FALLBACK_WORDS[i % FALLBACK_WORDS.length];
  return stem.replace(/[-_]+/g, " ").replace(/^./, (c) => c.toUpperCase());
}

/** Every image sitting in public/personal — drop files in, no list to maintain. */
export function personalPhotos(): OrbitCard[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort()
    .map((f, i) => {
      const title = caption(f, i);
      return { src: `/personal/${encodeURIComponent(f)}`, title, alt: `${title} — photo by Zula` };
    });
}
