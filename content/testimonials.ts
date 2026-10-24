// Placeholder social proof until real client quotes are collected.
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
      "Dedicated to thoughtful UI/UX design, Zula turns complex product ideas into clear, intuitive experiences. Her work brings structure, purpose, and polish to every client project.",
    highlight: "thoughtful UI/UX design",
    name: "Priya Mehta",
    role: "Product Manager",
    company: "Client project",
    initials: "P",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Working through case studies like ParkEase and Dizzo showed how thoughtfully she balances research, flow and polish.",
    highlight: "balances research, flow and polish",
    name: "Rohan Desai",
    role: "Founder",
    company: "Startup brief",
    initials: "RD",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "She brings energy into workshops and make-a-thons — explaining Figma and design thinking in a way juniors actually remember.",
    highlight: "in a way juniors actually remember",
    name: "Ananya Shah",
    role: "Junior designer",
    company: "Ahmedabad community",
    initials: "AS",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "From wireframes to final UI, Zula keeps the focus on the user. Dashboards and mobile flows come out clean and usable.",
    highlight: "keeps the focus on the user",
    name: "Vikram Patel",
    role: "Engineering lead",
    company: "Product team",
    initials: "VP",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote:
      "Her Behance and Dribbble work is consistent — web, mobile and branding all with the same care for hierarchy and clarity.",
    highlight: "the same care for hierarchy and clarity",
    name: "Neha Kapoor",
    role: "Creative director",
    company: "Design network",
    initials: "NK",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote:
      "Reliable, collaborative, and fast on iterations. Exactly the designer you want when a launch date is real.",
    highlight: "Exactly the designer you want",
    name: "Aarav Joshi",
    role: "Client",
    company: "Freelance project",
    initials: "AJ",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];
