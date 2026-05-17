import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sevana Naturals - Indian Essential Oils & Aromatic Raw Materials",
  description:
    "Sevana Naturals supplies premium natural essential oils and aromatic raw materials from the Indo-Gangetic plain. Bareilly distilled. ISIPCA trained. Globally delivered.",
  keywords:
    "essential oils India, ruh khus, vetiver oil, mentha oil, peppermint oil, lemongrass oil, citronella oil, fragrance raw materials, India export",
  openGraph: {
    title: "Sevana Naturals - Indian Essential Oils for the World's Perfumers",
    description: "Bareilly distilled. ISIPCA trained. Globally delivered.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1A4D2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} bg-background`}
    >
      <body className="min-h-screen font-mono antialiased">{children}</body>
    </html>
  );
}
