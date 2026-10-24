// Profile data sourced from LinkedIn, Behance, and Dribbble (Aug 2026).
export const site = {
  name: "Zula Prajapati",
  role: "UI/UX Designer & Graphic Designer",
  roles: ["UI/UX Designer", "Product Designer", "Web Design", "Mobile Design", "Graphic Design"],
  tagline: "I design digital products that feel inevitable.",
  /** Two-tone headline: first line sits in grey, second lands in black. */
  heroLines: ["Design that", "feels inevitable."],
  heroSubtextLead:
    "I'm a UI/UX Designer focused on creating intuitive interfaces, meaningful interactions, and scalable digital products that work for both people and businesses.",
  heroSubtext: "",
  location: "Ahmedabad, India",
  email: "zulaprajapati26@gmail.com",
  socialProof: { count: "16+", label: "Shots on Dribbble" },
  photo: "/about/zula.png",
  clientFaces: [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/zula26/",
    dribbble: "https://dribbble.com/Zulaprajapati",
    behance: "https://www.behance.net/zulaprajapati",
    instagram: "https://www.instagram.com/expensive_.art/",
    resume: "/zula-prajapati-resume.pdf",
  },
  contactLines: ["Let's build something", "worth using."],
  contactSubtext: "Have a project in mind, or just want to talk shop? My inbox is open.",
} as const;

export const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: site.socials.resume },
] as const;

export const servicesHeading = ["Services that", "supercharge your", "business."] as const;

export const services = [
  { title: "Product & UI Design", icon: "layout" },
  { title: "Mobile App Design", icon: "orbit" },
  { title: "Web & Landing Pages", icon: "window" },
  { title: "Design Systems", icon: "grid" },
  { title: "Prototyping", icon: "sparkle" },
  { title: "UX Consultation", icon: "panel" },
] as const;

export const techStack = [
  { name: "Figma", icon: "figma" },
  { name: "FigJam", icon: "figjam" },
  { name: "Adobe Illustrator", icon: "illustrator" },
  { name: "Canva", icon: "canva" },
  { name: "Cursor", icon: "cursor" },
  { name: "CorelDRAW", icon: "corel" },
] as const;

export const workSteps = [
  {
    icon: "chat",
    title: "Talk it through",
    description: "A short call to understand the product, the people using it, and what success looks like.",
  },
  {
    icon: "repeat",
    title: "Design in the open",
    description: "Flows, wireframes and UI shared as they happen — no reveal at the end, no surprises.",
  },
  {
    icon: "deliver",
    title: "Hand it off",
    description: "Clean Figma files, a documented system, and time set aside to support the build.",
  },
] as const;

/** The tilted black promo card that overlaps the engagement cards. */
export const workPromo = {
  badge: "Booking projects for next quarter",
  lead: "A design partner",
  emphasis: "for teams who move fast.",
  status: "Slots available",
  title: "Work with me directly",
  description: "No account managers, no relay between teams — you talk to the designer doing the work.",
} as const;

export const workModels = [
  {
    name: "Ongoing partner",
    stat: "48h",
    statNote: "average turnaround",
    descriptionLead: "Embedded design support, week after week.",
    descriptionRest: "Ideal for teams shipping continuously.",
    features: [
      "One shared request board",
      "One priority at a time",
      "Design system upkeep",
      "Async updates you can read",
      "Weekly design review",
      "UI, web & mobile design",
    ],
    cta: "Start a conversation",
  },
] as const;

export const faqs = [
  {
    question: "What do you design?",
    answer:
      "I design websites, mobile apps, SaaS products, dashboards and digital experiences — from wireframes through polished UI.",
  },
  {
    question: "What is your design process?",
    answer:
      "I typically work through discovery, research, structure, wireframes, UI design, prototyping and refinement.",
  },
  {
    question: "Do you work on UX audits?",
    answer:
      "Yes. I evaluate usability, navigation, accessibility, visual consistency, interaction and overall user experience.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Primarily Figma and FigJam, plus Adobe Illustrator, Photoshop, prototyping tools, and Cursor for design-to-build workflows.",
  },
  {
    question: "Have a project in mind?",
    answer: "Let's talk about it.",
  },
] as const;

export const journalIntro = {
  heading: ["My design insights &", "creative resources"],
  blurb:
    "A collection of pieces on design practice, process and the decisions behind the work. Written for the people who have to live with the results.",
} as const;

export const postCategories = ["Process", "Craft", "Strategy"] as const;

export const posts = [
  {
    title: "How designers and engineers can actually collaborate",
    date: "2026-03-06",
    category: "Process",
    excerpt:
      "Handoff isn't a document, it's a habit. What changed for us when I stopped throwing files over the wall and started sitting in on standups.",
    slug: "designers-and-engineers",
    /** PLACEHOLDER — stock stand-in until real article art lands. */
    cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    body: [
      "For most of my first two years I treated handoff as a delivery problem. Tidier files, better annotations, a longer spec. None of it moved the needle, because the gap was never about documentation — it was about the fact that engineers were meeting my decisions for the first time after they were already final.",
      "The change was unglamorous. I started going to standup. Not to present anything, just to hear what was hard that week. Within a month I was designing around constraints I'd previously have discovered in a review, and the review itself stopped being adversarial.",
      "If your handoff feels heavy, the document usually isn't the problem. Ask when the engineers first see the work, and how much of it is still negotiable at that point.",
    ],
  },
  {
    title: "Why faster isn't always better",
    date: "2026-04-22",
    category: "Process",
    excerpt:
      "Shipping speed is a proxy metric. Here's what I measure instead when a team says it feels slow, and why the answer is rarely more velocity.",
    slug: "why-faster-isnt-better",
    cover: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
    body: [
      "Every team that tells me they're slow is measuring cycle time. Almost none of them are measuring rework — how often a shipped thing comes back within a quarter because it didn't do what anyone actually needed.",
      "Rework is where the time goes. A team that ships in three days and revisits the same surface four times has spent longer than one that took two weeks and got it right, and it has spent that time in the most demoralising way possible.",
      "So when someone asks me to make design faster, my first question is what fraction of last quarter's work is still standing. If it's low, speed isn't the constraint.",
    ],
  },
  {
    title: "Designing for human connection",
    date: "2026-05-01",
    category: "Craft",
    excerpt:
      "The small interface decisions that make software feel like it was made by people, for people — and the ones that quietly undo that.",
    slug: "designing-for-connection",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    body: [
      "Warmth in an interface is rarely the illustration or the rounded corner. It's whether the product seems to understand what you were trying to do when something went wrong.",
      "An error state that names the actual problem, a confirmation that tells you what will happen next, an empty state that assumes you're capable — these read as care because they cost someone thought.",
      "The inverse is just as legible. Every cheerful microcopy line sitting on top of a dead end reads as a company that had budget for tone but not for the fix.",
    ],
  },
  {
    title: "Beyond minimalism: what comes next",
    date: "2026-06-11",
    category: "Craft",
    excerpt:
      "Stripping things back stopped being a differentiator a decade ago. What's left when everyone's interface is already clean?",
    slug: "beyond-minimalism",
    cover: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
    body: [
      "Minimalism won so completely that it stopped saying anything. When every product is a white page with a sans-serif and generous spacing, restraint is no longer a signal — it's the floor.",
      "What reads as considered now is specificity: interfaces that look like they were built for one job rather than adapted from a template. That usually means more opinion, not less.",
      "This isn't an argument for decoration. It's an argument for the parts of a product that couldn't belong to anyone else.",
    ],
  },
  {
    title: "When to rebrand, and when not to",
    date: "2026-07-03",
    category: "Strategy",
    excerpt:
      "Most rebrands solve a problem the brand didn't have. A short list of the signals that actually justify one.",
    slug: "when-to-rebrand",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
    body: [
      "A rebrand is worth it when the identity is actively misrepresenting the company — when you've moved market, merged, or the name is doing damage. Those are structural problems and a new mark genuinely helps.",
      "It is not worth it when leadership is bored, when a competitor shipped something nice, or when the real issue is that the product is hard to use. New colours will not fix a broken onboarding flow, and shipping them buys about a quarter of internal goodwill.",
      "The cheapest test I know: write down what will be measurably different in six months. If the list is all adjectives, don't do it.",
    ],
  },
] as const;

export const about = {
  initials: "ZP",
  /** Each paragraph opens with a full-colour lead, then drops to grey — matching the reference. */
  bio: [
    {
      lead: "I love turning messy ideas into interfaces people can use without thinking.",
      rest: "Based in Ahmedabad, I design as a UI/UX and Product Designer at UX Pacific — and take on freelance work for teams that need clear, user-centered digital products.",
    },
    {
      lead: "I design for real users — not just for the screen.",
      rest: "From research and wireframes to UI and prototyping, I focus on making websites, apps and dashboards feel simple, even when the problem behind them isn't.",
    },
    {
      lead: "I care about the details that earn their place.",
      rest: "Whether I'm shaping a parking app, an AI dashboard, or a brand landing page, my goal is work that helps people and businesses move forward.",
    },
  ],
  pullQuote: "Good design makes complex things feel simple.",
} as const;

export const stats = [
  { value: 2, suffix: "+", label: "Years designing" },
  { value: 16, suffix: "+", label: "Dribbble shots" },
  { value: 1842, suffix: "", label: "Behance project views" },
  { value: 91, suffix: "", label: "Appreciations" },
] as const;

export const skills = [
  "User Interface Design",
  "User Experience Design",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Visual Design",
  "Web Design",
  "Mobile Design",
] as const;

export const tools = [
  "Figma",
  "FigJam",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "CorelDRAW",
  "HTML5",
  "Cursor",
  "Canva",
] as const;

export const designProcessHeading = ["How I turn problems", "into products."] as const;

export const designProcess = [
  { number: "01", title: "Discover", tags: "Research · Analytics · Interviews" },
  { number: "02", title: "Define", tags: "User Journey · Problems · Opportunities" },
  { number: "03", title: "Explore", tags: "Flows · Wireframes · Experiments" },
  { number: "04", title: "Design", tags: "UI · Interaction · Prototyping" },
  { number: "05", title: "Validate", tags: "Testing · Iteration · Analytics" },
  { number: "06", title: "Ship", tags: "Developer Handoff · QA · Optimization" },
] as const;

/** Hero marquee — skills & services instead of client names. */
export const heroSkills = [
  "User Interface Design",
  "Wireframing",
  "User Flows",
  "Design Systems",
  "UX Research",
  "Visual Design",
  "Information Architecture",
  "Interaction Design",
  "Usability Testing",
  "Accessibility",
  "Prototyping",
  "Branding",
] as const;

/** Industries & products from published Behance / Dribbble work. */
export const trustedBy = [
  "ParkEase",
  "Dizzo",
  "Myntra",
  "Zomato",
  "PawPal",
  "SkyHive",
  "TruePath Legal",
  "Finovate",
  "Mayora",
  "PipePros",
  "Calmaura",
  "MediSphere",
] as const;
