import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/hooks/useLenis";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { site } from "@/content/site";
import "@/styles/globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ariasen.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: ["product design", "UI/UX design", "design systems", site.name],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-body">
        <SmoothScrollProvider>
          <Nav />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <CustomCursor />
      </body>
    </html>
  );
}
