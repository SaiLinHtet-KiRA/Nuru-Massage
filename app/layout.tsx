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
    "Discover M&M | Nuru Massage & Bar in Bangkok, near Kasap Road.Best Massage in Thailand .Enjoy a welcoming atmosphere and a relaxing massage experience in a comfortable setting. Perfect for visitors looking to unwind and enjoy a memorable experience in Bangkok.Girls are waiting for you guys",
  keywords: [
    "Molly Nuru Massage & Bar",
    "M&M Nuru Massage & Bar",
    "Thai Massage Therapist",
    "Molly",
    "M&M",
    "Massage",
    "Massage Therpist",
    "NO1 Massage Therpist",
    "Top 1 Massage in Thai",
    "Best Massage in Thai",
    "Thai Massages",
    "Massages in Bangkok ",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tangerine.variable} ${parisienne.variable}  h-full antialiased`}
    >
      <head>
        <meta name="google" content="translate" />
      </head>
      <body className="min-h-full flex flex-col">
        <Analytics />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
