// DUMMY CONTENT — replace with real copy before launch.
export const site = {
  name: "Aria Sen",
  role: "Product & UI/UX Designer",
  roles: ["Product Designer", "UI/UX Designer", "Design Systems", "Interaction Design"],
  tagline: "I design digital products that feel inevitable.",
  /** Two-tone headline: first line sits in grey, second lands in black. */
  heroLines: ["Design that", "feels inevitable."],
  heroSubtextLead: "Strategic design that earns its keep, not just its likes.",
  heroSubtext:
    "I build the product surfaces your users reach for without thinking — and the systems that keep them consistent.",
  location: "Brooklyn, NY",
  email: "hello@ariasen.design",
  availability: "Available for September '26",
  socialProof: { count: "40+", label: "Happy clients" },
  /** PLACEHOLDER — stock stand-ins until real photography lands. */
  photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
  clientFaces: [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
  ],
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
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Journal", href: "#journal" },
] as const;

export const servicesHeading = ["Services that", "supercharge your", "business."] as const;

export const services = [
  { title: "Product & UI Design", icon: "layout" },
  { title: "Design Systems", icon: "grid" },
  { title: "Landing Pages", icon: "window" },
  { title: "Motion & Interaction", icon: "sparkle" },
  { title: "Prototyping", icon: "orbit" },
  { title: "UX Consultation", icon: "panel" },
] as const;

export const techStack = ["Figma", "Framer", "Webflow", "Rive", "Blender", "Linear"] as const;

export const pricingSteps = [
  {
    icon: "repeat",
    title: "Subscribe",
    description: "Pick a plan and start queuing requests on your own board the same day.",
  },
  {
    icon: "chat",
    title: "Request",
    description: "Ask for anything I offer, from a single landing page to a whole design system.",
  },
  {
    icon: "deliver",
    title: "Receive",
    description: "Work comes back inside 48 hours on average, revised until it's right.",
  },
] as const;

/** The tilted black promo card that overlaps the pricing cards. */
export const pricingPromo = {
  badge: "Pause or cancel anytime",
  lead: "Subscription design services",
  emphasis: "for teams who move fast.",
  status: "Slots available",
  title: "Hire me today",
  description: "Skip the agency markup and work directly with the designer doing the work.",
} as const;

export const pricingPlans = [
  {
    name: "Unlimited Design",
    price: "$6,500",
    cadence: "/ month",
    descriptionLead: "One flat monthly rate for unlimited design requests.",
    descriptionRest: "Ideal for ongoing design requirements.",
    features: [
      "No contracts or commitments",
      "Pause or cancel anytime",
      "Multiple brands",
      "Unlimited requests",
      "Avg 48 hour turnaround",
      "Framer & Webflow build-out",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Single Project",
    price: "Custom",
    cadence: "quote",
    descriptionLead: "Comprehensive design services for any project scope.",
    descriptionRest: "Ideal for one-time launches or individual tasks.",
    features: ["Clearly defined scope", "Fixed timeline", "3 revision rounds", "Milestone updates"],
    cta: "Get quote",
    featured: false,
  },
] as const;

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "A landing page is usually one to two weeks. A full product surface with a design system runs four to eight, depending on how much research we need up front.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Yes, and I prefer to. I'll audit what you have, keep what's working, and only propose changes where the current system is actively costing you clarity.",
  },
  {
    question: "What makes your process different?",
    answer:
      "Every project gets one sentence that defines success. If a screen doesn't serve that sentence it doesn't ship in v1 — which is why my scopes tend to shrink rather than grow.",
  },
  {
    question: "Do you support the work after launch?",
    answer:
      "Every engagement includes 30 days of post-launch support. Subscription clients get ongoing iteration as part of the plan.",
  },
  {
    question: "Who owns the work?",
    answer:
      "You do, fully, on final payment. Source files, components, and documentation all transfer to you.",
  },
] as const;

export const posts = [
  {
    title: "How designers and engineers can actually collaborate",
    date: "2026-03-06",
    excerpt:
      "Handoff isn't a document, it's a habit. What changed for us when I stopped throwing files over the wall and started sitting in on standups.",
    slug: "designers-and-engineers",
    /** PLACEHOLDER — stock stand-in until real article art lands. */
    cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  },
  {
    title: "Why faster isn't always better",
    date: "2026-04-22",
    excerpt:
      "Shipping speed is a proxy metric. Here's what I measure instead when a team says it feels slow, and why the answer is rarely more velocity.",
    slug: "why-faster-isnt-better",
    cover: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  },
  {
    title: "Designing for human connection",
    date: "2026-05-01",
    excerpt:
      "The small interface decisions that make software feel like it was made by people, for people — and the ones that quietly undo that.",
    slug: "designing-for-connection",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
  },
] as const;

export const about = {
  initials: "AS",
  /** Each paragraph opens with a full-colour lead, then drops to grey — matching the reference. */
  bio: [
    {
      lead: "I love turning tangled problems into something people barely notice.",
      rest: "It started as a habit of redrawing forms I found annoying, and turned into a career once I realised the redrawing was the easy part.",
    },
    {
      lead: "I focus on interfaces that serve a real purpose —",
      rest: "not just ones that photograph well. A founder once told me our onboarding was beautiful and useless, and it reset how I work.",
    },
    {
      lead: "I'm a perfectionist about the small stuff,",
      rest: "but only where it earns its keep. That care is usually why clients come back, and why my scopes tend to shrink rather than grow.",
    },
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
