import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { skills, tools } from "@/content/site";

export function Skills() {
  return (
    <section className="px-8 py-28 md:px-16">
      <h2 className="text-display-lg font-display font-light">Skills &amp; tools</h2>

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-6 text-xs tracking-widest text-muted uppercase">What I bring</p>
          <RevealGroup className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <RevealItem
                key={skill}
                as="div"
                className="cursor-default rounded-card border border-text/15 px-5 py-4 transition-colors duration-300 hover:bg-text hover:text-bg"
              >
                <span className="font-display text-lg">{skill}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div>
          <p className="mb-6 text-xs tracking-widest text-muted uppercase">Tools</p>
          <RevealGroup className="grid grid-cols-2 gap-3">
            {tools.map((tool) => (
              <RevealItem
                key={tool}
                as="div"
                className="group cursor-default rounded-card border border-text/15 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <span className="font-display text-lg text-muted transition-colors duration-300 group-hover:text-accent">
                  {tool}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
