import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Bar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M&M | Nuru Massage & Bar",
  description:
    "Discover M&M | Nuru Massage & Bar in Bangkok, near Khaosan Road. Enjoy a welcoming atmosphere and a relaxing massage experience in a comfortable setting. Perfect for visitors looking to unwind and enjoy a memorable experience in Bangkok.Girls are waiting for you guys",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
