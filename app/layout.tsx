import type { Metadata } from "next";
import { Tangerine, Parisienne } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Bar/NavBar";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import GoogleTranslate from "@/components/GoogleTranslate";

const tangerine = Tangerine({
  weight: ["400", "700"],
  variable: "--font-tangerine",
  subsets: ["latin"],
});
const parisienne = Parisienne({
  weight: ["400"],
  variable: "--font-parisienne",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "M&M | Nuru Massage & Bar",
  description:
    "M&M is the best Nuru Massage place in Bangkok, near Kasap Road.Best Massage in Thailand .Enjoy a welcoming atmosphere and a relaxing massage experience in a comfortable setting. Perfect for visitors looking to unwind and enjoy a memorable experience in Bangkok.Girls are waiting for you guys",
  keywords: [
    "Miss Molly Nuru Massage & Bar",
    "M&M Nuru Massage & Bar",
    "Thai Massage Therapist",
    "Miss Molly",
    "M&M",
    "Massage",
    "Massage Therpist",
    "NO1 Massage Therpist",
    "Top 1 Massage in Thailand",
    "Best Massage in Thailand",
    "Thai Massages",
    "Massages in Bangkok",
    "massages near me",
    "massage in Kasap Road",
  ],
  icons: { icon: "/icon.webp", shortcut: "/icon.webp", apple: "/icon.webp" },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Miss Molly Nuru Massage & Bar",
  url: "https://www.missmollybar.site",
  logo: "https://www.missmollybar.site/logo.webp",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tangerine.variable} ${parisienne.variable}  h-full antialiased`}
    >
      <head>
        <meta name="google" content="translate" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div id="google_translate_element" className="hiddens" />
        <GoogleTranslate />
        <Analytics />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
