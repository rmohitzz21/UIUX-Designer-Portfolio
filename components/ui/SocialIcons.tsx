"use client";

import {
  BehanceLogo,
  DribbbleLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@/components/ui/BrandIcons";
import { site } from "@/content/site";

export const siteSocials = [
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramLogo },
  { label: "Dribbble", href: site.socials.dribbble, Icon: DribbbleLogo },
  { label: "Behance", href: site.socials.behance, Icon: BehanceLogo },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinLogo },
] as const;

type Variant = "frosted" | "solid";

type SocialIconLinkProps = {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  variant?: Variant;
};

/**
 * Circular social mark with the LaunchFolio hover: icon slides up and a copy
 * slides in from below inside an overflow-hidden pill.
 */
export function SocialIconLink({
  label,
  href,
  Icon,
  variant = "frosted",
}: SocialIconLinkProps) {
  const surface =
    variant === "solid"
      ? "bg-bg text-text hover:bg-bg/90"
      : "bg-text/50 text-bg backdrop-blur-[10px] hover:bg-text/70";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`social-icon group inline-flex size-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full transition-[background-color,transform] duration-300 ease-out hover:scale-105 ${surface}`}
    >
      <span className="social-icon__track flex flex-col items-center" aria-hidden="true">
        <span className="flex size-[30px] items-center justify-center">
          <Icon className="size-3.5" />
        </span>
        <span className="flex size-[30px] items-center justify-center">
          <Icon className="size-3.5" />
        </span>
      </span>
    </a>
  );
}

type SocialIconRowProps = {
  variant?: Variant;
  className?: string;
};

export function SocialIconRow({ variant = "frosted", className = "" }: SocialIconRowProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {siteSocials.map((social) => (
        <SocialIconLink key={social.label} {...social} variant={variant} />
      ))}
    </div>
  );
}
