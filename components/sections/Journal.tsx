import { ScrollWordReveal } from "@/components/motion/ScrollWordReveal";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { posts } from "@/content/site";

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function Journal() {
  return (
    <section id="journal" className="border-t border-line py-24 md:py-32">
      <div className="edge-rules relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollWordReveal
            lines={["From my journal,", "design insights."]}
            className="text-display-lg font-display"
          />
          <a href="#journal" className="group inline-flex items-center gap-2 pb-2 text-sm font-medium">
            View all
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-text/20 motion-reduce:transition-none">
                <time dateTime={post.date} className="text-sm text-muted">
                  {DATE_FORMAT.format(new Date(post.date))}
                </time>
                <h3 className="mt-3 text-xl font-semibold leading-snug">{post.title}</h3>
                <p className="mt-3 flex-1 text-muted">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-subtle transition-colors group-hover:text-text">
                  Read article
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
