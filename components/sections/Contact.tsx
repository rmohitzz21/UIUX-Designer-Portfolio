import { CtaCard } from "@/components/sections/CtaCard";

export function Contact() {
  return (
    <CtaCard lines={[{ text: "Still not sure?", muted: true }, "Book a free discovery call."]} />
  );
}
