// DUMMY CONTENT — replace with real case studies and imagery before launch.
// No image assets exist yet, so `thumbnail`/`cover` are gradient-tint keys consumed by
// components/ui/ProjectArt.tsx instead of image paths.
export type Metric = { label: string; value: string };
export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  /** Case-study headline. Rendered two-tone: the first line sits in grey. */
  headline: [string, string];
  role: string;
  year: string;
  timeline: string;
  tools: string[];
  tags: string[];
  thumbnail: "clay" | "sage" | "dusk" | "sand" | "moss";
  cover: "clay" | "sage" | "dusk" | "sand" | "moss";
  featured?: boolean;
  summary: string;
  problem: string;
  process: string;
  outcome: string;
  metrics: Metric[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "solace",
    title: "Solace",
    headline: ["Designing calm", "into cash flow."],
    role: "Lead Product Designer",
    year: "2025",
    timeline: "Jan – Jul 2025",
    tools: ["Figma", "Maze", "Notion"],
    tags: ["Fintech", "Design System", "0→1"],
    thumbnail: "clay",
    cover: "clay",
    featured: true,
    summary: "A calmer way to manage business cash flow, built from a blank canvas to a funded product.",
    problem:
      "Small business owners were juggling three disconnected tools to understand their own cash position, and finding out too late when something was wrong.",
    process:
      "I ran 14 owner interviews, mapped the cash-flow mental model they already had, then prototyped a single forecast view and tested it in three rounds before touching the design system.",
    outcome:
      "Shipped a unified dashboard and forecasting tool that became the product's core loop, cited in the seed round pitch as the reason early customers converted.",
    metrics: [
      { label: "Trial → paid conversion", value: "+38%" },
      { label: "Time to first insight", value: "-64%" },
      { label: "Design system components", value: "42" },
    ],
    links: [{ label: "Visit live site", href: "#" }],
  },
  {
    id: "fieldnote",
    title: "Fieldnote",
    headline: ["Research that works", "without a signal."],
    role: "Product Designer",
    year: "2024",
    timeline: "Mar – Aug 2024",
    tools: ["Figma", "Principle", "Linear"],
    tags: ["Mobile", "Research Tools"],
    thumbnail: "moss",
    cover: "moss",
    summary: "An offline-first field survey app for environmental researchers working without signal.",
    problem:
      "Researchers were losing data in the field because the existing app required a live connection and crashed silently when it dropped.",
    process:
      "Shadowed two field trips, redesigned the data model around local-first sync, then built a conflict-resolution UI researchers could trust.",
    outcome: "Zero reported data loss across the following field season, and the fastest-adopted feature in the app's history.",
    metrics: [
      { label: "Field data loss", value: "0 incidents" },
      { label: "Sync conflicts resolved", value: "self-serve" },
    ],
    links: [{ label: "Case study", href: "#" }],
  },
  {
    id: "vantage",
    title: "Vantage",
    headline: ["Untangling a decade", "of dashboard debt."],
    role: "Senior UX Designer",
    year: "2024",
    timeline: "Jan – May 2024",
    tools: ["Figma", "Airtable", "Storybook"],
    tags: ["B2B", "Analytics"],
    thumbnail: "dusk",
    cover: "dusk",
    summary: "Turning a decade of accumulated dashboard debt into a coherent analytics platform.",
    problem:
      "Nine years of feature requests had produced 40+ report types with no shared visual language, and new hires took months to get fluent.",
    process:
      "Audited every existing report, grouped them into five reusable chart primitives, and co-designed the migration path with the engineering team so nothing shipped broken.",
    outcome: "Cut onboarding time for new analysts and became the template every new report is now built from.",
    metrics: [
      { label: "Report types unified", value: "40 → 5" },
      { label: "New-hire ramp time", value: "-50%" },
    ],
    links: [{ label: "Case study", href: "#" }],
  },
  {
    id: "haven",
    title: "Haven",
    headline: ["Habits that reward", "showing up."],
    role: "Product Designer",
    year: "2023",
    timeline: "Feb – Jun 2023",
    tools: ["Figma", "Origami Studio", "Amplitude"],
    tags: ["Wellness", "iOS", "Android"],
    thumbnail: "sand",
    cover: "sand",
    summary: "A quieter kind of habit tracker, designed to reward showing up rather than streaks.",
    problem: "Streak-based habit apps were driving anxiety and abandonment the moment a user missed one day.",
    process:
      "Prototyped a non-punitive progress model, tested it against streak-based control groups, and designed the visual language to feel like a notebook, not a scoreboard.",
    outcome: "Higher 90-day retention than the team's previous streak-based version, with meaningfully fewer negative reviews.",
    metrics: [
      { label: "90-day retention", value: "+22%" },
      { label: "1-star reviews mentioning anxiety", value: "-71%" },
    ],
    links: [{ label: "Visit live site", href: "#" }],
  },
  {
    id: "northwind",
    title: "Northwind",
    headline: ["Rebuilding the last", "step of checkout."],
    role: "UX Designer",
    year: "2023",
    timeline: "Aug – Oct 2023",
    tools: ["Figma", "Hotjar", "Shopify"],
    tags: ["E-commerce", "Design System"],
    thumbnail: "sage",
    cover: "sage",
    summary: "A checkout rebuild for a mid-size retailer bleeding customers at the last step.",
    problem: "Checkout abandonment was 30% above industry benchmark, concentrated entirely on the payment step.",
    process: "Instrumented the funnel to find the exact drop-off point, then ran five rapid prototype rounds against real traffic.",
    outcome: "Recovered a substantial share of abandoned checkouts within the first month of rollout.",
    metrics: [
      { label: "Checkout abandonment", value: "-19%" },
      { label: "Mobile conversion", value: "+11%" },
    ],
    links: [{ label: "Case study", href: "#" }],
  },
];
