// Titles, descriptions and tags are taken from Zula's Figma portfolio ("Things I've Designed").
// Covers are exported from the same file and live in /public/work.
// NOTE: role, year, timeline, metrics and the problem/process/outcome narrative are NOT in the
// Figma source — they are placeholders written to fill the case-study layout. Replace before launch.
export type Metric = { label: string; value: string };
export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  /** Client or product name, as shown on the card. */
  title: string;
  /** The qualifier after the em dash on the card, e.g. "AI Dashboard". */
  kind: string;
  /** Case-study headline. Rendered two-tone: the first line sits in grey. */
  headline: [string, string];
  role: string;
  year: string;
  timeline: string;
  tools: string[];
  tags: string[];
  /** Cover image in /public/work. */
  image: string;
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
    id: "dizzo",
    title: "Dizzo",
    kind: "AI Dashboard",
    headline: ["Making an assistant", "feel effortless."],
    role: "Product Designer",
    year: "2025",
    timeline: "8 weeks",
    tools: ["Figma", "FigJam", "Cursor"],
    tags: ["Clarity", "Smart UX"],
    image: "/work/dizzo.jpg",
    featured: true,
    summary: "Smart assistant dashboard with clean, AI-powered interactions.",
    problem:
      "An assistant that can do anything is hard to start using. The first build surfaced every capability at once, and new users could not tell what the product was actually for.",
    process:
      "I cut the surface back to one primary action and let everything else reveal itself in context, then rebuilt the layout around the states people actually hit day to day.",
    outcome:
      "The dashboard now opens on a single obvious next step, and the AI's suggestions read as help rather than noise.",
    metrics: [
      { label: "Time to first action", value: "−48%" },
      { label: "Weekly active use", value: "+31%" },
      { label: "Support tickets", value: "−22%" },
      { label: "Design system components", value: "64" },
    ],
    links: [{ label: "View live site", href: "#" }],
  },
  {
    id: "myntra",
    title: "Myntra",
    kind: "Social Feature",
    headline: ["Shopping is better", "with other people."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "6 weeks",
    tools: ["Figma", "Cursor"],
    tags: ["User Engagement", "Interaction"],
    image: "/work/myntra.jpg",
    summary: "Adding social experience to make shopping more engaging.",
    problem:
      "Browsing was a solo activity in a category that is anything but. People were screenshotting products and sharing them somewhere else entirely.",
    process:
      "I designed a feed that sits alongside the catalogue rather than replacing it, so sharing a find never costs you your place in the browse.",
    outcome:
      "Shared items became a first-class object in the product instead of a screenshot in someone's camera roll.",
    metrics: [
      { label: "Items shared per session", value: "3.4×" },
      { label: "Return visits", value: "+27%" },
      { label: "Session length", value: "+19%" },
      { label: "Screens designed", value: "38" },
    ],
    links: [{ label: "View live site", href: "#" }],
  },
  {
    id: "fintech",
    title: "Fintech",
    kind: "Website",
    headline: ["Numbers that", "explain themselves."],
    role: "Product Designer",
    year: "2025",
    timeline: "5 weeks",
    tools: ["Figma", "Illustrator"],
    tags: ["Data Clarity", "UX Flow"],
    image: "/work/fintech.jpg",
    summary: "Clean financial interface with easy data understanding.",
    problem:
      "The old dashboard showed everything to everyone. Density read as sophistication internally and as confusion to every customer we watched use it.",
    process:
      "I built a hierarchy around the two questions people actually open the product to answer, and demoted the rest behind deliberate detail views.",
    outcome:
      "The same data, arranged so the answer is visible before anyone has to interpret a chart.",
    metrics: [
      { label: "Task completion", value: "+41%" },
      { label: "Time to insight", value: "−36%" },
      { label: "Chart types cut", value: "11 → 4" },
      { label: "Timeline", value: "5 weeks" },
    ],
    links: [{ label: "View live site", href: "#" }],
  },
  {
    id: "pipepros",
    title: "PipePros",
    kind: "Plumbing Website",
    headline: ["A trade site that", "actually books jobs."],
    role: "UI/UX Designer",
    year: "2024",
    timeline: "4 weeks",
    tools: ["Figma", "Webflow"],
    tags: ["Clarity", "Conversion", "Experience"],
    image: "/work/pipepros.jpg",
    summary: "A modern service website designed for plumbing solutions.",
    problem:
      "Service businesses live or die on how fast a worried customer can reach someone. The old site buried the phone number three scrolls down.",
    process:
      "I reorganised the whole site around urgency — what is broken, how soon can you come, what will it cost — and made contact reachable from every point.",
    outcome:
      "A site that answers the three questions a customer arrives with, before asking them for anything.",
    metrics: [
      { label: "Enquiries per month", value: "+62%" },
      { label: "Bounce rate", value: "−28%" },
      { label: "Pages to contact", value: "3 → 0" },
      { label: "Timeline", value: "4 weeks" },
    ],
    links: [{ label: "View live site", href: "#" }],
  },
  {
    id: "pawpal",
    title: "PawPal",
    kind: "Pet App",
    headline: ["Care that fits", "around real life."],
    role: "Product Designer",
    year: "2024",
    timeline: "7 weeks",
    tools: ["Figma", "FigJam"],
    tags: ["User-Friendly", "Emotional Design"],
    image: "/work/pawpal.jpg",
    summary: "Friendly and intuitive app for pet care and management.",
    problem:
      "Pet admin is scattered across vet portals, reminders and group chats. Owners were holding it together with memory and screenshots.",
    process:
      "I designed around the pet rather than the task list, so records, reminders and appointments all hang off the animal they belong to.",
    outcome:
      "One place that knows the pet, warm enough that people open it when nothing is wrong.",
    metrics: [
      { label: "Reminder completion", value: "+54%" },
      { label: "Day-30 retention", value: "+23%" },
      { label: "Onboarding steps", value: "9 → 4" },
      { label: "Screens designed", value: "46" },
    ],
    links: [{ label: "View live site", href: "#" }],
  },
  {
    id: "zomato",
    title: "Zomato",
    kind: "Website Redesign",
    headline: ["Finding dinner", "shouldn't take dinner."],
    role: "UI/UX Designer",
    year: "2024",
    timeline: "6 weeks",
    tools: ["Figma", "Illustrator"],
    tags: ["Usability", "Speed", "Engagement"],
    image: "/work/zomato.jpg",
    summary: "Modern redesign focused on food discovery and easy navigation.",
    problem:
      "Discovery had turned into scrolling. Plenty of restaurants, no sense of which one you actually wanted tonight.",
    process:
      "I rebuilt browse around intent — craving, speed, budget — instead of an undifferentiated grid, and made filters something you steer with rather than configure.",
    outcome:
      "A shorter path from opening the site to deciding, which is the only metric that matters here.",
    metrics: [
      { label: "Time to order", value: "−34%" },
      { label: "Search abandonment", value: "−29%" },
      { label: "Repeat orders", value: "+18%" },
      { label: "Timeline", value: "6 weeks" },
    ],
    links: [{ label: "View live site", href: "#" }],
  },
];
