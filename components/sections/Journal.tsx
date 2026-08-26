import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { FeaturedPostCard, PostCard } from "@/components/ui/PostCard";
import { posts } from "@/content/site";

export function Journal() {
  const [featured, ...rest] = posts;

  return (
    <section id="journal" className="border-t border-line py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <TextReveal
            lines={[{ text: "From my journal,", muted: true }, "design insights."]}
            className="text-display-lg font-display"
          />
          <Link href="/journal" className="group inline-flex items-center gap-2 pb-2 text-sm font-medium">
            View All
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        <Reveal as="div" className="mt-14">
          <FeaturedPostCard post={featured} />
        </Reveal>

        <RevealGroup className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.slice(0, 2).map((post) => (
            <RevealItem key={post.slug}>
              <PostCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
