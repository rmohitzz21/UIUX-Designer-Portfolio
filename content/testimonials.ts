// DUMMY CONTENT — replace with real client testimonials before launch.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Aria has this rare ability to make a complicated system feel obvious in hindsight. Our onboarding numbers still haven't come back down.",
    name: "Priya Nathan",
    role: "Co-founder",
    company: "Solace",
    initials: "PN",
  },
  {
    quote:
      "She pushed back on scope more than any designer I've worked with — always toward the thing that actually mattered.",
    name: "Marcus Webb",
    role: "Head of Product",
    company: "Vantage",
    initials: "MW",
  },
  {
    quote:
      "We handed her a genuinely messy problem with no clean answer. She didn't just design a solution, she reframed the question.",
    name: "Dana Okafor",
    role: "Research Lead",
    company: "Fieldnote Collective",
    initials: "DO",
  },
];
