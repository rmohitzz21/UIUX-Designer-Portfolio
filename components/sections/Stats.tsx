import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { stats } from "@/content/site";

export function Stats() {
  return (
    <section className="border-y border-text/10 bg-surface px-8 py-20 md:px-16">
      <RevealGroup className="grid grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((stat) => (
          <RevealItem key={stat.label} as="div" className="flex flex-col gap-2">
            <p className="font-display text-5xl font-light md:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-muted">{stat.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
