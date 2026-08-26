import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { PostCard } from "@/components/ui/PostCard";
import { CtaCard } from "@/components/sections/CtaCard";
import { posts, site } from "@/content/site";

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage(props: PageProps<"/journal/[slug]">) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main id="top" className="relative z-10 flex flex-1 flex-col">
      <section className="pt-36 pb-12 md:pt-44">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal as="p" className="text-sm font-medium text-muted">
              {post.category}
            </Reveal>

            <TextReveal
              as="h1"
              lines={[post.title + "."]}
              className="mt-4 text-display-lg font-display"
              delay={0.05}
              immediate
            />

            <Reveal as="p" delay={0.3} className="mt-6 flex flex-wrap justify-center gap-x-4 text-sm">
              <time dateTime={post.date} className="text-muted">
                {DATE_FORMAT.format(new Date(post.date))}
              </time>
              <span className="font-semibold">By {site.name}</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <Reveal as="div">
            <span className="relative block aspect-[16/9] w-full overflow-hidden rounded-3xl border border-line bg-surface">
              <Image src={post.cover} alt="" fill sizes="(min-width: 1280px) 76rem, 100vw" className="object-cover" priority />
            </span>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="mx-auto flex max-w-2xl flex-col gap-6">
            {post.body.map((paragraph, i) => (
              <Reveal as="p" key={i} delay={i * 0.05} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <TextReveal lines={[{ text: "Keep", muted: true }, "reading."]} className="text-display-lg font-display" />
            <Link href="/journal" className="group inline-flex items-center gap-2 pb-2 text-sm font-medium">
              View All
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>

          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
            {more.map((other) => (
              <RevealItem key={other.slug}>
                <PostCard post={other} showExcerpt />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaCard lines={[{ text: "Like what you read?", muted: true }, "Book a free discovery call."]} />
    </main>
  );
}
