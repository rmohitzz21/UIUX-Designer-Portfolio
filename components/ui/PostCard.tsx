import Image from "next/image";
import Link from "next/link";
import { posts, site } from "@/content/site";

export type Post = (typeof posts)[number];

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function PostMeta({ post }: { post: Post }) {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-4 text-sm">
      <time dateTime={post.date} className="text-muted">
        {DATE_FORMAT.format(new Date(post.date))}
      </time>
      <span className="font-semibold">By {site.name}</span>
    </p>
  );
}

/** Cover art with the shared hover treatment: it scales and a "View Article" pill rises over it. */
export function PostCover({ post, className, sizes }: { post: Post; className?: string; sizes: string }) {
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

/** The wide lead story: art on the left, copy centred in the right half. */
export function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-2"
    >
      <PostCover post={post} className="aspect-[4/3] md:aspect-auto md:h-full" sizes="(min-width: 768px) 50vw, 100vw" />

      <div className="flex flex-col justify-center p-8 md:p-12">
        <h3 className="text-display font-display">{post.title}.</h3>
        <PostMeta post={post} />
        <p className="mt-6 leading-relaxed text-muted">{post.excerpt}</p>
      </div>
    </Link>
  );
}

export function PostCard({ post, showExcerpt = false }: { post: Post; showExcerpt?: boolean }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group block h-full overflow-hidden rounded-3xl border border-line bg-surface"
    >
      <PostCover post={post} className="aspect-[16/9] w-full" sizes="(min-width: 768px) 50vw, 100vw" />

      <div className="p-8">
        <h3 className="text-2xl font-semibold tracking-tight">{post.title}.</h3>
        <PostMeta post={post} />
        {showExcerpt && <p className="mt-5 leading-relaxed text-muted">{post.excerpt}</p>}
      </div>
    </Link>
  );
}
