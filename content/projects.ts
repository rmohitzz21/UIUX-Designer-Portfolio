// Every project here is a published gallery on behance.net/zulaprajapati.
// Copy, tools, dates and numbers are taken from the case-study boards themselves.
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
  /** Extra shots shown on the case-study page. */
  gallery?: string[];
  featured?: boolean;
  summary: string;
  problem: string;
  process: string;
  outcome: string;
  metrics: Metric[];
  links: ProjectLink[];
  location?: string;
  services?: string;
  pricing?: string;
  feedback?: { quote: string; author: string }[];
};

export const projects: Project[] = [
  {
    id: "dizzo",
    title: "Dizzo",
    kind: "AI Assistant Dashboard",
    headline: ["Smart AI that manages", "your day before you ask."],
    role: "UI/UX Designer (with Aradhya Satghare)",
    year: "2026",
    timeline: "April 2026",
    tools: ["Figma", "FigJam", "Adobe Photoshop", "Adobe Illustrator", "Google Forms"],
    tags: ["AI Dashboard", "Accessibility", "SaaS"],
    image: "/work/dizzo.jpg",
    featured: true,
    summary:
      "An AI-powered personal assistant dashboard built around clarity, accessibility and emotional well-being rather than another task list.",
    problem:
      "Modern productivity tools focus on efficiency but ignore accessibility, cognitive load and well-being. Users — especially those with visual or cognitive challenges — struggle with cluttered interfaces, poor clarity and no support for non-visual interaction. Research backed it up: people felt overwhelmed by juggling multiple apps, had trouble tracking tasks, and wanted personalised suggestions in a simple, clean interface.",
    process:
      "Research and behaviour interviews pointed at one direction: keep the UI minimal and distraction-free, focus on speed and clarity, add smart AI suggestions, and reduce the effort of deciding what to do next. From there I built the information architecture around a single dashboard — header, accessibility, focus mode, dark/light mode, quick glance — and a design system in DM Sans with a deep-navy palette that holds up in both modes.",
    outcome:
      "A modular dashboard with six core capabilities: accessibility-first design, an emotion-aware AI assistant, smart task management, AI insights, deep work mode, and voice & audio interaction. WCAG-compliant controls and adaptive UI make it read as a calm digital companion instead of a control panel.",
    metrics: [
      { label: "Core features designed", value: "6" },
      { label: "Research stages", value: "3" },
      { label: "Typeface", value: "DM Sans" },
      { label: "Published on Behance", value: "Apr 2026" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/27235703-Dizzo-AI-Personal-Assistant-Dashboard",
      },
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/246810911/Dizzo-AI-Personal-Assistant-Case-Study",
      },
    ],
  },
  {
    id: "myntra",
    title: "Myntra",
    kind: "Social Shopping Feature",
    headline: ["Bridging the gap between", "inspiration and action."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "February 2025",
    tools: ["Figma", "Adobe Photoshop", "Google Forms"],
    tags: ["E-commerce", "Social Feature", "UX Case Study"],
    image: "/work/myntra.jpg",
    summary:
      "A social media feature inside Myntra that redefines online fashion shopping by combining social engagement, user-generated content and e-commerce in one feed.",
    problem:
      "Fashion shopping is inspired socially but transacted alone. The brief was to design a social layer that lets people upload and share outfit pictures and video, gives them a reason to post through rewards and recognition, and lets everyone else explore influencer content for style inspiration — without breaking the shopping flow.",
    process:
      "I ran a survey, then benchmarked five competitors — Meesho, Amazon Fashion, Ajio, H&M and Flipkart Fashion — across social shopping community, influencer and live shopping, AI fit and sizing, and virtual try-on. The persona, Sana Kapoor, is a micro-influencer who relies on inconsistent Instagram partnerships. Her needs shaped three additions: live fashion trends, easier returns and exchanges, and virtual try-on with AI fit assistance.",
    outcome:
      "Shoppable posts and videos where every piece of content carries its product link, so a saved look is one tap from the bag instead of a screenshot in someone's camera roll.",
    metrics: [
      { label: "Competitors benchmarked", value: "5" },
      { label: "User needs addressed", value: "3" },
      { label: "Research method", value: "Survey" },
      { label: "Published on Behance", value: "Feb 2025" },
    ],
    links: [
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/220004583/Social-media-feauture-in-Myntra-app",
      },
    ],
  },
  {
    id: "parkease",
    title: "ParkEase",
    kind: "Smart Parking Mobile App UI/UX Case Study",
    headline: ["Smart parking for", "seamless events."],
    role: "UI/UX Case Study Designer",
    year: "2026",
    timeline: "June 2026",
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["UI/UX", "Web Design", "Landing Page", "Mobile App", "UX Design", "Parking App"],
    image: "/work/parkease.jpg",
    gallery: ["/work/parkease-case-study.jpg"],
    featured: true,
    summary:
      "ParkEase is a modern smart parking mobile application designed to help users quickly find, reserve and navigate to nearby parking spaces through real-time availability, seamless booking, secure payments and smart navigation.",
    problem:
      "Finding parking in busy urban areas has become frustrating and time consuming. People spend several minutes searching for an available space, which adds to congestion, fuel waste, delays and stress. Existing solutions lack real-time availability, seamless navigation and a simple booking process, so drivers arrive late to events or miss the opening entirely.",
    process:
      "I anchored the work in Priyanka, an event visitor who loses 20+ minutes hunting for a spot near venues and worries about inconsistent prices and poorly lit lots. From her goals I mapped the user flow and an information architecture across five areas — home, search & booking, my bookings, payments & wallet, profile & settings — wireframed eight core screens, then built the brand around the pin-and-P mark, IBM Plex Sans Devanagari with Open Sans, and a #2563EB primary.",
    outcome:
      "The app opens on a live map with transport-type filters and nearby parking cards showing distance, rating and price per hour. From there a spot moves through floor selection, date and time, and payment in a few taps, and ends on a QR e-ticket with turn-by-turn navigation to the entry — real-time availability, pre-booking, secure payments and navigation in one flow.",
    metrics: [
      { label: "Product areas mapped", value: "5" },
      { label: "Screens wireframed", value: "8" },
      { label: "Vehicle types supported", value: "4" },
      { label: "Published on Behance", value: "Jun 2026" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/27480478-ParkEase-Smart-Parking-Mobile-App",
      },
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/251269575/ParkEase-Smart-Parking-Mobile-App-UIUX-Case-Study",
      },
    ],
    location: "Ahmedabad, India",
    services: "UI/UX Case Study Design",
    pricing: "Starting from US$450",
    feedback: [
      {
        quote: "Really inspiring work. The flow feels intuitive, the architecture is well structured, and every screen appears to have a clear purpose.",
        author: "Parthiv Vala",
      },
      {
        quote: "The visual hierarchy here is really strong and clear.",
        author: "Dmytro Babanov",
      },
    ],
  },
  {
    id: "pawpal",
    title: "PawPal",
    kind: "Pet Adoption & Care App",
    headline: ["Every pet deserves", "a loving home."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "February 2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Pet Adoption", "Pet Care", "Branding"],
    image: "/work/pawpal.png",
    gallery: ["/work/pawpal-landing.png"],
    featured: true,
    summary:
      "A pet adoption and care app — plus its landing page — built on one belief: every pet deserves a loving home, and every pet parent deserves proper support.",
    problem:
      "Adopting is an emotional decision made on thin information. Listings sit on classifieds with no story, no way to meet the animal first, and nothing that connects a new owner to care or community once the paperwork is done.",
    process:
      "I designed around the animal rather than the listing: pet categories, profiles that lead with a photo, age, gender and breed, then the story of where they came from. Appointment booking lets someone pick a date, a time slot and a meeting type — in-person visit or video call — before committing. The system runs on a 4-column, 375px grid with IBM Plex Sans Devanagari and a warm yellow-and-lilac palette.",
    outcome:
      "Adoption, appointments and a community of pet lovers in one warm, low-anxiety flow, with a matching landing page that carries the same identity to the web.",
    metrics: [
      { label: "Layout grid", value: "4 col" },
      { label: "Meeting types", value: "2" },
      { label: "Typeface", value: "IBM Plex Sans" },
      { label: "Published on Behance", value: "Feb 2025" },
    ],
    links: [
      {
        label: "View app on Dribbble",
        href: "https://dribbble.com/shots/25741622-Pet-Aopation-Care-PawPal-Application-Design",
      },
      {
        label: "View landing page on Dribbble",
        href: "https://dribbble.com/shots/25742859-PawPal-App-Landing-Page-Design",
      },
      {
        label: "View app case study",
        href: "https://www.behance.net/gallery/220317959/Pawpal-Pet-Adopation-App-Ui-Design",
      },
    ],
  },
  {
    id: "finovate",
    title: "Finovate",
    kind: "Fintech Dashboard",
    headline: ["Empower your finances,", "simplified insights."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "March 2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Fintech", "Dashboard", "Data Visualisation"],
    image: "/work/finovate.png",
    gallery: ["/work/fintech-web.png"],
    featured: true,
    summary:
      "A fintech dashboard that simplifies financial tracking and improves decision-making — user-friendly on the surface, dense enough underneath.",
    problem:
      "Financial dashboards drown people in charts before answering the question they opened the app for: where do I stand this month?",
    process:
      "I led with three status cards — total income, outcome and savings, each with its change on the month — then layered detail behind them: a year of income-versus-outcome bars, transaction history by category, card balance with request and transfer, and a spending-efficiency ring. Navigation stays short: dashboard, transactions, analytics, budget & goals, investments, settings.",
    outcome:
      "A violet, high-contrast dashboard that answers the headline question in the first screenful and holds up when someone digs into the detail.",
    metrics: [
      { label: "Navigation sections", value: "6" },
      { label: "Summary cards", value: "3" },
      { label: "Data views", value: "4" },
      { label: "Published on Behance", value: "Mar 2025" },
    ],
    links: [
      {
        label: "View dashboard on Dribbble",
        href: "https://dribbble.com/shots/25736002-Fintech-Dashboard-Design-A-Dreamy-Digital-Experience",
      },
      {
        label: "View web design on Dribbble",
        href: "https://dribbble.com/shots/25735142-Fintech-Web-Design-Simple-Fast-Secure",
      },
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/220566045/Finovate-Fintech-Dashboard-UI-Design",
      },
    ],
  },
  {
    id: "zomato",
    title: "Zomato",
    kind: "Website & App Redesign",
    headline: ["Your cravings,", "delivered hot & fresh."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "March 2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Food Delivery", "Landing Page", "Mobile App"],
    image: "/work/zomato.png",
    summary:
      "A landing page and app home-screen redesign for Zomato, built around one job: get from craving to order without scrolling for ten minutes.",
    problem:
      "Discovery had turned into scrolling. Plenty of restaurants, no sense of which one you actually wanted tonight, and no clear path from landing on the page to placing an order.",
    process:
      "The web hero opens on location plus search with social proof underneath — 20.3M+ monthly customers, 4.5 average review. Ordering is spelled out as four steps: discover restaurants, choose food, pay online, get it delivered. Dish cards carry rating, locality, delivery time, discount and price so a decision needs one card, not a comparison. The app home reworks the same logic for mobile: location bar, veg mode toggle, offer carousel, a 'What's on your mind?' category row, then restaurants.",
    outcome:
      "Two surfaces sharing one hierarchy — where you are, what you feel like, what it costs, how fast it arrives — in Zomato's red without losing the brand's energy.",
    metrics: [
      { label: "Steps to order", value: "4" },
      { label: "Surfaces redesigned", value: "2" },
      { label: "Behance appreciations", value: "8" },
      { label: "Published on Behance", value: "Mar 2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25731929-Zomato-Website-Redesign",
      },
      {
        label: "View website redesign",
        href: "https://www.behance.net/gallery/220570523/zomato-Website-redesign",
      },
      {
        label: "View app home",
        href: "https://www.behance.net/gallery/220576647/Zomato-App-Home-Screen-Redesign",
      },
    ],
  },
  {
    id: "mayora",
    title: "Mayora",
    kind: "Fashion Shopping App",
    headline: ["Shopping that stays", "out of its own way."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "March 2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["E-commerce", "Mobile App", "Minimal UI"],
    image: "/work/mayora.jpg",
    summary:
      "A women's clothing platform designed for exploring, shopping and discovering trendy pieces without the usual retail-app clutter.",
    problem:
      "Fashion apps compete by adding surface — banners on banners, badges on badges — until browsing feels like work and the clothes come second.",
    process:
      "I stripped the interface back to a minimalist aesthetic and let product photography carry the page: a single spring-discount promo, a new-arrivals rail with price and rating, and category browsing that stays one tap away. The identity runs on Lora with a four-tone brown palette (#432F22, #704F38, #5A3F2D, #8A6D5A) over a warm off-white.",
    outcome:
      "A calm, editorial shopping experience that reads as a boutique rather than a marketplace.",
    metrics: [
      { label: "Brand palette", value: "4 tones" },
      { label: "Typeface", value: "Lora" },
      { label: "Platform", value: "iOS" },
      { label: "Published on Behance", value: "Mar 2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25731908-Minimalist-Fashion-App-Design-MAYORA",
      },
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/220750981/Clothing-Mayora-Application-Design",
      },
    ],
  },
  {
    id: "skyhive",
    title: "SkyHive",
    kind: "Drone eCommerce Website",
    headline: ["Fly high, see more,", "do more."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "February 2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["eCommerce", "Landing Page", "High-Tech"],
    image: "/work/skyhive.jpg",
    summary:
      "A high-tech eCommerce landing page for a drone store selling to hobbyists, professionals and the merely curious.",
    problem:
      "Drone shops sell on spec sheets. A first-time buyer cannot tell a racing quad from a camera drone, and a professional cannot find the one detail that matters to them — so both bounce.",
    process:
      "I built the page around purpose rather than model numbers: a product-led hero over the word DRONE, an about section that states the four things a buyer actually weighs — top-quality drones, expert support, fast and secure shipping, affordable pricing — then category browsing and support. Acid-lime accents on white keep it technical without going dark-and-generic.",
    outcome:
      "A store front that reads as high-performance kit rather than a parts catalogue, with contact and shop CTAs reachable from every section.",
    metrics: [
      { label: "Buying factors surfaced", value: "4" },
      { label: "Customers claimed", value: "3000+" },
      { label: "Page type", value: "Full landing" },
      { label: "Published on Behance", value: "Feb 2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25736220-Drone-Shop-Website-Clean-Responsive-Future-Ready-UI-UX",
      },
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/218352485/Drone-Store-Website-Design-High-Tech-eCommerce-UIUX",
      },
    ],
  },
  {
    id: "truepath",
    title: "TruePath Legal",
    kind: "Law Firm Website",
    headline: ["Your case.", "Our commitment."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "February 2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Website Design", "Trust", "Lead Generation"],
    image: "/work/truepath.png",
    summary:
      "A website for a law firm whose clients arrive stressed — designed so credibility lands before the copy does.",
    problem:
      "Legal matters are complex and overwhelming, and most firm sites make that worse: dense practice-area text, no proof, and an enquiry form buried at the bottom.",
    process:
      "I opened with the promise and a single appointment CTA, then put the proof directly under it as a dark stat band — 25+ years of experience, 500 satisfied clients, 30+ awards, 40 expert lawyers, 4.8 average rating. Services, credentials and the blog follow, in a serif-led palette of navy and rust that reads as established rather than corporate.",
    outcome:
      "A site where a worried client can see who they'd be trusting, and book, without reading a page of law.",
    metrics: [
      { label: "Years of experience shown", value: "25+" },
      { label: "Trust stats in hero", value: "5" },
      { label: "Clicks to appointment", value: "1" },
      { label: "Published on Behance", value: "Feb 2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25694013-Law-Firm-Website-Design-Trusted-Professional-Modern",
      },
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/220106283/Law-Firm-Ux-Website-Design",
      },
    ],
  },
  {
    id: "logofolio",
    title: "Logofolio 2025",
    kind: "Brand Identity Collection",
    headline: ["Marks that say it", "in one shape."],
    role: "Graphic Designer",
    year: "2025",
    timeline: "March 2025",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    tags: ["Logo Design", "Wordmark", "Identity"],
    image: "/work/logofolio.jpg",
    summary:
      "A year of logo work — wordmarks and minimal marks built for apps, tech products and property brands.",
    problem:
      "A logo has to survive being small, single-colour and out of context. Most early concepts fail one of those three.",
    process:
      "Each mark starts as a wordmark and only earns a symbol when the name cannot carry the idea alone — Furnevo's lowercase 'f' curling into furniture, Nature Glow's leaf inside the U. Every one is drawn in Illustrator and tested flat before any colour goes near it.",
    outcome:
      "Nine identities across furniture, organic, tech and property, each with its own tagline and a mark that holds at any size.",
    metrics: [
      { label: "Identities in the set", value: "9" },
      { label: "Style", value: "Wordmark-led" },
      { label: "Drawn in", value: "Illustrator" },
      { label: "Published on Behance", value: "Mar 2025" },
    ],
    links: [
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/222541637/Logofolio-2025-A-Collection-of-Unique-Logo-Designs",
      },
    ],
  },
  {
    id: "pipepros",
    title: "PipePros",
    kind: "Plumbing Website",
    headline: ["Reliable plumbing,", "without the guesswork."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Website Design", "Services", "Lead Generation"],
    image: "/work/pipepros.png",
    summary:
      "A service-site for a plumbing company that has to earn trust fast — quote, proof and 24/7 availability in the first screen.",
    problem:
      "Local service sites bury the quote form and lead with stock photos. A leaking pipe does not wait for someone to read an about page.",
    process:
      "The hero opens on 'Reliable Plumbing Solutions' with a Get a Quote CTA, then three reasons to stay: trusted expertise, 24/7 availability, upfront pricing. A navy stat band — 16+ years, 500+ clients, 900+ jobs, 16 expert plumbers — sits under the fold. Services (water heaters, drain cleaning, commercial) and a Gujarat-area contact form with map finish the path.",
    outcome:
      "A high-contrast navy, white and orange site where a stressed homeowner can see who is coming, what it costs, and send a quote request without hunting.",
    metrics: [
      { label: "Years of experience shown", value: "16+" },
      { label: "Trust stats in hero", value: "4" },
      { label: "Service categories", value: "3" },
      { label: "Published on Dribbble", value: "2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25721774-Pipepros-Plumbing-Website-Design",
      },
    ],
  },
  {
    id: "medisphere",
    title: "MediSphere",
    kind: "Healthcare Website",
    headline: ["Comprehensive care,", "anytime, anywhere."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Healthcare", "Landing Page", "Telemedicine"],
    image: "/work/healthcare.jpg",
    summary:
      "A medical website designed around access — mental health, emergency and telemedicine reachable from the hero, not buried in a sitemap.",
    problem:
      "Hospital sites organise around departments. Patients organise around 'I need help now.' The two rarely meet on the first screen.",
    process:
      "I led with 'Comprehensive Care, Anytime, Anywhere' and three quick-access cards: mental health support, emergency service and telemedicine. Offer cards (personalised care, expert consults, 24/7 support) and a why-choose-us band with patient-success stats sit above pharmacy, specialist and diagnostics detail.",
    outcome:
      "A navy-and-sky clinical UI that reads as a partner in lifelong health rather than a brochure of departments.",
    metrics: [
      { label: "Quick-access services", value: "3" },
      { label: "Patient success shown", value: "95%" },
      { label: "Service categories", value: "3" },
      { label: "Published on Dribbble", value: "2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25736130-Health-Care-Website-Design-Modern-Clean-User-Centered-UI-Ux",
      },
    ],
  },
  {
    id: "calmaura",
    title: "Calmaura",
    kind: "Luxury Spa Website",
    headline: ["Indulge in", "tranquility."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Luxury", "Wellness", "Landing Page"],
    image: "/work/spa.png",
    summary:
      "A spa site that has to feel like the treatment — serif headlines, olive and cream, photography that does the selling.",
    problem:
      "Wellness brands often look like clinics. The booking CTA competes with stock zen imagery and the service list reads as a menu, not an invitation.",
    process:
      "The hero is a single promise — Indulge in Tranquility — over a portrait, with Explore Our Service and Book Now as the only two actions. Navigation stays short: home, about, services, blog, contact. Leaf motifs and a forest-green primary keep it natural without going botanical-template.",
    outcome:
      "An editorial luxury surface where booking is one click and the brand feels like a retreat rather than a salon listing.",
    metrics: [
      { label: "Primary CTAs", value: "2" },
      { label: "Palette", value: "Olive + cream" },
      { label: "Page type", value: "Full landing" },
      { label: "Published on Dribbble", value: "2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25732124-Luxury-Spa-Website-Design-Beautiful-Functional-UI",
      },
    ],
  },
  {
    id: "rewedding",
    title: "re-Wedding",
    kind: "Wedding Website",
    headline: ["Dream wedding,", "perfectly planned."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Wedding", "Landing Page", "Editorial"],
    image: "/work/wedding.png",
    summary:
      "A planner site for couples who arrive overwhelmed — services, proof and a start-your-journey CTA before the moodboards.",
    problem:
      "Wedding sites drown in galleries. Couples cannot tell what the studio actually does, or whether they can afford it, until page four.",
    process:
      "I opened on 'Dream Wedding Perfectly Planned' with View Our Services and Start Your Journey. About ('Turning Moments into Memories') carries 500+ clients, 900+ projects, 16+ experts. Service cards cover event styling, pre-wedding and destination weddings on a cream-and-brown serif system.",
    outcome:
      "A warm, uncluttered path from first visit to enquiry that still feels like a celebration, not a vendor catalogue.",
    metrics: [
      { label: "Satisfied clients shown", value: "500+" },
      { label: "Service categories", value: "3" },
      { label: "Hero CTAs", value: "2" },
      { label: "Published on Dribbble", value: "2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25732191-Beautiful-Pre-Wedding-Website-A-Dreamy-Digital-Experience",
      },
    ],
  },
  {
    id: "greenfood",
    title: "Greenfood Organic",
    kind: "Organic Food Hero",
    headline: ["Breakfast,", "whenever you want it."],
    role: "UI/UX Designer",
    year: "2025",
    timeline: "2025",
    tools: ["Figma", "Adobe Photoshop"],
    tags: ["Hero Section", "Food & Drink", "eCommerce"],
    image: "/work/organic.png",
    summary:
      "A hero for an organic food brand: one dish, one order button, and a leafy green that does not fight the photography.",
    problem:
      "Food homepages stack offers until the product is a thumbnail. The thing you actually eat never gets to be the headline.",
    process:
      "Split layout — circular salad photography on the left, 'Do you eat Breakfast at any time' on the right, Order Now in leaf green. Nav stays at shop, recipes, features, contact. Decorative leaves sit in the margin so the bowl stays the focal point.",
    outcome:
      "A single-screen pitch that reads as a fresh kitchen, not a grocery grid — ready to drop into a larger store later.",
    metrics: [
      { label: "Primary CTA", value: "Order Now" },
      { label: "Layout", value: "Split hero" },
      { label: "Type pairing", value: "Serif + sans" },
      { label: "Published on Dribbble", value: "2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25735218-Organic-Food-Hero-Section-Design",
      },
    ],
  },
  {
    id: "irctc",
    title: "IRCTC",
    kind: "Web Banner Design",
    headline: ["Smart railway,", "clear booking."],
    role: "Graphic Designer",
    year: "2025",
    timeline: "2025",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
    tags: ["OOH", "Banner", "Travel"],
    image: "/work/irctc.png",
    summary:
      "An out-of-home banner for IRCTC's Smart Railway Conclave — logo, promise, three proofs and a Book Now CTA that reads at street distance.",
    problem:
      "Transit ads for rail still look like timetables. Passengers need one reason to book, not a paragraph of scheme names.",
    process:
      "Left column: IRCTC mark, SMART RAILWAY CONCLAVE, Book Now, then dedicated support, lowest price and railway-authorised ID. Right column: an angular crop of a train at platform. App-store badges and a QR close the loop for phones in the queue.",
    outcome:
      "A corporate, high-contrast billboard mock that carries the brand without the visual noise of a typical government campaign.",
    metrics: [
      { label: "Proof points", value: "3" },
      { label: "Format", value: "OOH billboard" },
      { label: "Primary CTA", value: "Book Now" },
      { label: "Published on Dribbble", value: "2025" },
    ],
    links: [
      {
        label: "View on Dribbble",
        href: "https://dribbble.com/shots/25744410-IRCTC-Web-Banner-Design",
      },
    ],
  },
];

const FEATURED_IDS = ["parkease", "dizzo", "pawpal", "finovate"] as const;

export const latestProjects = [
  ...FEATURED_IDS.map((id) => projects.find((p) => p.id === id)!),
  ...projects.filter((p) => !FEATURED_IDS.includes(p.id as (typeof FEATURED_IDS)[number])),
];
