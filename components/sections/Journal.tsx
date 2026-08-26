import Image from "next/image";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { posts, site } from "@/content/site";

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

type Post = (typeof posts)[number];

function Meta({ post }: { post: Post }) {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 text-sm">
      <time dateTime={post.date} className="text-muted">
        {DATE_FORMAT.format(new Date(post.date))}
      </time>
      <span className="font-semibold">By {site.name}</span>
    </p>
  );
}

/** Shared hover treatment: the art lifts slightly and a "View Article" pill rises over it. */
function CoverArt({ post, className, sizes }: { post: Post; className?: string; sizes: string }) {
  return (
    <span className={`relative block overflow-hidden bg-bg ${className ?? ""}`}>
      <Image
        src={post.cover}
        alt=""
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-8 flex translate-y-2 justify-center opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
      >
        <span className="rounded-full bg-text/75 px-5 py-2.5 text-sm font-medium text-bg backdrop-blur-sm">
          View Article
        </span>
      </span>
    </span>
  );
}

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
          <a href="#journal" className="group inline-flex items-center gap-2 pb-2 text-sm font-medium">
            View All
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        {/* Lead story: art on the left, copy centred in the right half. */}
        <Reveal as="div" className="mt-14">
          <a
            href={`#${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-2"
          >
            <CoverArt post={featured} className="aspect-[4/3] md:aspect-auto md:h-full" sizes="(min-width: 768px) 50vw, 100vw" />

            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="text-display font-display">{featured.title}.</h3>
              <Meta post={featured} />
              <p className="mt-6 leading-relaxed text-muted">{featured.excerpt}</p>
            </div>
          </a>
        </Reveal>

        <RevealGroup className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <RevealItem key={post.slug}>
              <a
                href={`#${post.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-line bg-surface"
              >
                <CoverArt post={post} className="aspect-[16/9] w-full" sizes="(min-width: 768px) 50vw, 100vw" />

                <div className="p-8">
                  <h3 className="text-2xl font-semibold tracking-tight">{post.title}.</h3>
                  <Meta post={post} />
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
