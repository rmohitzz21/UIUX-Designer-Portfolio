// DUMMY CONTENT — replace with real copy before launch.
export const site = {
  name: "Aria Sen",
  role: "Product & UI/UX Designer",
  roles: ["Product Designer", "UI/UX Designer", "Design Systems", "Interaction Design"],
  tagline: "I design digital products that feel inevitable.",
  heroLines: ["Design that feels", "inevitable."],
  heroSubtext:
    "I'm a product designer who turns ambiguous problems into interfaces people reach for without thinking.",
  location: "Brooklyn, NY",
  email: "hello@ariasen.design",
  availability: "Open to select freelance & full-time roles",
  socials: {
    linkedin: "https://linkedin.com/in/ariasen",
    dribbble: "https://dribbble.com/ariasen",
    instagram: "https://instagram.com/ariasen.design",
    resume: "/aria-sen-resume.pdf",
  },
  contactLines: ["Let's build something", "worth using."],
  contactSubtext: "Have a project in mind, or just want to talk shop? My inbox is open.",
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const about = {
  initials: "AS",
  bio: [
    "I spent my first year out of school assuming good design meant more polish. It took a founder telling me our onboarding was “beautiful and useless” to learn otherwise.",
    "Now I start every project by finding the one decision that actually matters, and I'm suspicious of any deliverable that doesn't trace back to it. Outside of work I'm usually failing to finish a puzzle.",
  ],
  pullQuote: "The best interface is the one nobody notices.",
} as const;

export const stats = [
  { value: 2, suffix: "+", label: "Years in product design" },
  { value: 24, suffix: "", label: "Projects shipped" },
  { value: 12, suffix: "", label: "Happy clients" },
  { value: 3, suffix: "", label: "Design awards" },
] as const;

export const skills = [
  "Product Strategy",
  "Interaction Design",
  "Design Systems",
  "Prototyping",
  "User Research",
  "Accessibility",
  "Motion Design",
  "Design Leadership",
] as const;

export const tools = [
  "Figma",
  "Framer",
  "Principle",
  "Notion",
  "Linear",
  "Maze",
  "Origami Studio",
  "Webflow",
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I start by getting uncomfortable with how little I know — interviews, support tickets, whatever data already exists — until the real problem surfaces.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Every project gets one sentence that describes success. If a feature doesn't serve that sentence, it doesn't ship in v1.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Low-fidelity first, always. I'd rather throw away three rough concepts in a day than fall in love with one polished mockup.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Ship, watch, adjust. The design isn't done when it's shipped — it's done when the data says it worked.",
  },
] as const;

export const trustedBy = [
  "Northwind",
  "Solace Labs",
  "Vantage",
  "Fieldnote",
  "Origin & Co",
  "Haven",
  "Ember Studio",
  "Greyline",
] as const;
