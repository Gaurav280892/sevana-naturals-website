"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    category: "Mint Family",
    description:
      "From the Bareilly-Chandausi-Sambhal belt that produces the majority of the world's natural menthol.",
    items: [
      {
        name: "Mentha Arvensis",
        latin: "Mentha arvensis",
        desc: "Cornmint oil — the primary source of natural menthol. High menthol content, characteristically cool and herbaceous. Core material for flavour, oral care, and pharmaceutical applications.",
        tags: ["Flavour", "Oral Care", "Pharma"],
      },
      {
        name: "Mentha Piperita",
        latin: "Mentha piperita",
        desc: "True peppermint oil — steam-distilled from Indian-grown peppermint. Bright, fresh, and slightly sweet. Essential for confectionery, oral care, and aromatherapy.",
        tags: ["Aromatherapy", "Confectionery"],
      },
      {
        name: "Mentha Spicata",
        latin: "Mentha spicata",
        desc: "Spearmint oil — softer, sweeter, and more herbaceous than peppermint. Key material for chewing gum, toothpaste, and culinary applications.",
        tags: ["Flavour", "Oral Care"],
      },
      {
        name: "Menthol Crystals",
        latin: "99% purity",
        desc: "Natural menthol crystallised from Mentha arvensis. Food-grade purity, pharmaceutical applications. Available in various mesh sizes.",
        tags: ["Pharma", "Cosmetics"],
      },
    ],
  },
  {
    category: "Aromatic Grasses",
    description:
      "Steam-distilled at scale, with consistent citral and geraniol profiles for fragrance applications.",
    items: [
      {
        name: "Citronella Oil",
        latin: "Cymbopogon winterianus",
        desc: "Java-type citronella — high citronellal content, clean lemony-green profile. Core material for insect repellents, household fragrances, and industrial applications.",
        tags: ["Household", "Industrial"],
      },
      {
        name: "Lemongrass Oil",
        latin: "Cymbopogon flexuosus",
        desc: "East Indian lemongrass — high citral content, intensely fresh and lemony. Essential for fragrance compounding and flavour applications.",
        tags: ["Fragrance", "Flavour"],
      },
      {
        name: "Palmarosa Oil",
        latin: "Cymbopogon martinii",
        desc: "High-geraniol oil with a rose-like floral character. Key material for rose replacements in perfumery and cosmetic formulations.",
        tags: ["Perfumery", "Cosmetics"],
      },
    ],
  },
  {
    category: "Specialty Naturals",
    description:
      "Oils where Indian origin is irreplaceable — wild-harvested, artisanally distilled, and olfactively distinct.",
    items: [
      {
        name: "Ruh Khus",
        latin: "Vetiveria zizanioides",
        desc: "Wild-harvested North Indian vetiver root oil — traditionally distilled in copper degs. Earthy, woody, and profoundly grounding. Unlike any vetiver from other origins.",
        tags: ["Fine Fragrance", "Specialty"],
      },
      {
        name: "Davana Absolute",
        latin: "Artemisia pallens",
        desc: "Rich, fruity, and intensely aromatic. Harvested in South India during a narrow seasonal window. Essential for oriental and gourmand compositions.",
        tags: ["Fine Fragrance"],
      },
      {
        name: "Tagetes Oil",
        latin: "Tagetes minuta",
        desc: "African marigold — green, herbaceous, and slightly fruity. Used as a modifier in floral compositions and for its unique olfactive character.",
        tags: ["Perfumery"],
      },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              Portfolio
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl text-primary font-medium tracking-tight leading-[0.95]">
              Our oils &
              <br />
              <span className="italic font-normal">aromatics.</span>
            </h1>
            <p className="mt-8 text-ink-soft max-w-xl leading-relaxed">
              A focused selection of essential oils and aromatic raw
              materials — sourced from India&apos;s historic distillation regions
              and evaluated to the perfumer&apos;s standard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      {products.map((section, sectionIndex) => (
        <section
          key={section.category}
          className={`py-16 lg:py-24 ${
            sectionIndex % 2 === 0 ? "bg-cream-deep" : "bg-cream"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-sans text-3xl md:text-4xl text-primary font-medium tracking-tight mb-4">
                {section.category}
              </h2>
              <p className="text-ink-soft max-w-2xl">{section.description}</p>
            </motion.div>

            {/* Products Grid */}
            <div className="border-t border-border">
              {section.items.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-border py-8 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 items-baseline group hover:pl-2 transition-all"
                >
                  <div className="lg:col-span-1">
                    <h3 className="font-sans text-2xl text-primary font-medium group-hover:text-secondary transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-sans italic text-sm text-ink-muted block mt-1">
                      {item.latin}
                    </span>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-ink-soft leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-wider uppercase text-ink-muted px-3 py-1 border border-border bg-cream"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight mb-6">
                Looking for something specific?
              </h2>
              <p className="text-cream/80 max-w-lg leading-relaxed">
                Our portfolio represents our core offerings. If you need a
                specific varietal, a particular grade, or a custom
                specification, reach out — we can often source or develop it
                through our network.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:text-right"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-primary text-sm font-medium tracking-wider uppercase hover:bg-cream/90 transition-colors"
              >
                Request a Sample
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
