// DUMMY CONTENT — replace with real client testimonials before launch.
export type Testimonial = {
  quote: string;
  /** Substring of `quote` rendered in full colour; the rest sits in grey. */
  highlight: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  /** PLACEHOLDER — stock stand-in until real client photos land. */
  photo: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Zula has this rare ability to make a complicated system feel obvious in hindsight. Our onboarding numbers still haven't come back down.",
    highlight: "make a complicated system feel obvious in hindsight",
    name: "Priya Nathan",
    role: "Co-founder",
    company: "Solace",
    initials: "PN",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "She pushed back on scope more than any designer I've worked with — always toward the thing that actually mattered.",
    highlight: "always toward the thing that actually mattered",
    name: "Marcus Webb",
    role: "Head of Product",
    company: "Vantage",
    initials: "MW",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "We handed her a genuinely messy problem with no clean answer. She didn't just design a solution, she reframed the question.",
    highlight: "she reframed the question",
    name: "Dana Okafor",
    role: "Research Lead",
    company: "Fieldnote Collective",
    initials: "DO",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "The checkout rebuild paid for itself in a quarter. Drop-off at the payment step fell by a third and hasn't crept back.",
    highlight: "Drop-off at the payment step fell by a third",
    name: "Tomas Lindqvist",
    role: "Director of E-commerce",
    company: "Northwind",
    initials: "TL",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote:
      "Our design system used to be a folder of guesses. Zula turned it into something the engineers actually reach for.",
    highlight: "something the engineers actually reach for",
    name: "Elena Rossi",
    role: "Engineering Manager",
    company: "Haven",
    initials: "ER",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote:
      "She shipped with us, not at us. Sitting in our standups changed how the whole team talks about design decisions.",
    highlight: "She shipped with us, not at us.",
    name: "Ben Adeyemi",
    role: "CTO",
    company: "Ember Studio",
    initials: "BA",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];
