import type { Metadata } from "next";
import { Mrs_Saint_Delafield } from "next/font/google";
import { SmoothScrollProvider } from "@/hooks/useLenis";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/content/site";
import "@/styles/globals.css";

/** Used only for the handwritten signature in the About section. */
const signature = Mrs_Saint_Delafield({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
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
    // Lenis adds classes to <html> after mount, which React otherwise reports as a
    // hydration attribute mismatch on the root element.
    <html lang="en" className={`${signature.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-text font-body">
        {/* Container hairlines, drawn once behind the whole page. */}
        <div className="page-rules" aria-hidden="true">
          <div />
        </div>

        <SmoothScrollProvider>
          <Nav />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
