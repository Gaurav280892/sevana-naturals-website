import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heritage — Sevana Naturals",
  description: "Forty-two years in the Indian mentha trade. Yadvendra Patel's story of building Sona Chemicals from a single distillation plant in 1984 — the foundation Sevana Naturals is built on.",
};

export default function HeritageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
