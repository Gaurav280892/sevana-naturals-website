import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From the Founder's Desk — Sevana Naturals",
  description: "Sheetal Sachan on the origins of Sevana Naturals — childhood in the aromatics trade, training in fine fragrance, and the inheritance of natural materials from the Indian aromatics belt.",
};

export default function FoundersDeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
