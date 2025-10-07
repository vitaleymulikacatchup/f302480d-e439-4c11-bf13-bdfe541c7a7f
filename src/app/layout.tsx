import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Peak - Futuristic Apple-Inspired Meme Hub for Fans Everywhere",
  description: "Peak brings a sleek, Apple-inspired meme hub with crisp visuals and a community vibe. Simple sections for hero, about, how to buy, and tokenomics.",
  keywords: ["peak", "meme site", "apple-inspired", "futuristic", "memes", "community", "landing page", "tokenomics", "how to buy", "ux design"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peak - Futuristic Apple-Inspired Meme Hub for Fans Everywhere",
    description: "Peak brings a sleek, Apple-inspired meme hub with crisp visuals and a community vibe. Simple sections for hero, about, how to buy, and tokenomics.",
    type: "website",
    url: "/",
    siteName: "Peak",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/tmp/sleek-futuristic-background-in-16-9-prem-1759176609355-5ad24126.jpg",
      width: 1200,
      height: 630,
      alt: "Peak - Futuristic Apple-Inspired Meme Hub"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peak - Futuristic Apple-Inspired Meme Hub for Fans Everywhere",
    description: "Peak brings a sleek, Apple-inspired meme hub with crisp visuals and a community vibe. Simple sections for hero, about, how to buy, and tokenomics.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/tmp/sleek-futuristic-background-in-16-9-prem-1759176609355-5ad24126.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}> 
        {children}
      </body>
    </html>
  );
}