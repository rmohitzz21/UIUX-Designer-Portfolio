"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PostCard, type Post } from "@/components/ui/PostCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";
import { postCategories } from "@/content/site";

const ALL = "All";

/** Searchable, filterable archive grid — the filter bar sits above it, as on the reference. */
export function JournalArchive({ posts }: { posts: readonly Post[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL);
  const reducedMotion = useReducedMotion();

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === ALL || post.category === category;
      const matchesQuery =
        !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1 sm:max-w-xs">
          <span className="sr-only">Search articles</span>
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-2xl border border-line bg-surface py-3.5 pr-4 pl-11 text-sm outline-none placeholder:text-muted focus:border-text/25"
          />
        </label>

        <label className="relative sm:w-44">
          <span className="sr-only">Filter by category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full appearance-none rounded-2xl border border-line bg-surface py-3.5 pr-10 pl-4 text-sm font-medium outline-none focus:border-text/25"
          >
            <option value={ALL}>{ALL}</option>
            {postCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </label>
      </div>

      <motion.div layout={!reducedMotion} className="mt-8 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((post) => (
            <motion.div
              key={post.slug}
              layout={!reducedMotion}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: reducedMotion ? 0 : 0.35, ease: EASE_REVEAL }}
            >
              <PostCard post={post} showExcerpt />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-16 text-center text-muted">No articles match that search yet.</p>
      )}
    </div>
  );
}
