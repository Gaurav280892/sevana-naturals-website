"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    category: "Mint Oils",
    description:
      "From the Bareilly-Chandausi-Sambhal belt that produces the majority of the world's natural menthol.",
    items: [
      {
        name: "Peppermint Oil",
        latin: "Mentha piperita - all grades",
        desc: "Bright, fresh and sweet-minty; clean camphoraceous top with a long cooling finish.",
        tags: ["Confectionery", "Oral Care", "Aromatherapy", "Fine Fragrance"],
      },
      {
        name: "Spearmint Oil",
        latin: "Mentha spicata",
        desc: "Soft, sweet and herbaceous-minty; warm carvone body without camphoraceous bite.",
        tags: ["Chewing Gum", "Toothpaste", "Culinary", "Flavour"],
      },
      {
        name: "Bergamot Mint Oil",
        latin: "Mentha citrata",
        desc: "Citrus-floral with a lavender-bergamot nuance over a soft minty base.",
        tags: ["Fine Fragrance", "Cosmetics", "Aromatherapy"],
      },
      {
        name: "Cornmint Oil",
        latin: "Mentha arvensis",
        desc: "Intensely cool and sharply minty; high impact, powerful diffusion.",
        tags: ["Oral Care", "Flavour", "Cooling"],
      },
      {
        name: "Dementholised Mint Oil",
        latin: "Mentha arvensis - DMO",
        desc: "Cool, minty and sweet-herbaceous with a soft camphoraceous lift.",
        tags: ["Flavour", "Oral Care", "Pharma", "Confectionery"],
      },
    ],
  },
  {
    category: "Menthol & Mint Derivatives",
    description:
      "Pure menthol crystals and advanced derivatives for pharmaceutical, cosmetic, and flavour applications.",
    items: [
      {
        name: "Menthol Crystals",
        latin: "l-Menthol - Large/Medium/Rice/Fine",
        desc: "Clean, intensely cooling and sweet-minty; no off-notes.",
        tags: ["Oral Care", "Pharma", "Confectionery", "Tobacco"],
      },
      {
        name: "Menthol Crystals, Melted",
        latin: "l-Menthol - 99+% purity",
        desc: "Powerful cooling, pure minty character; exceptionally clean.",
        tags: ["Pharma", "Oral Care", "Cosmetics"],
      },
      {
        name: "Menthol Powder",
        latin: "l-Menthol - 96+% purity",
        desc: "Cooling and minty, with an even release in dry systems.",
        tags: ["Pharma", "Balms", "Powders", "Oral Care"],
      },
      {
        name: "Menthone",
        latin: "l-Menthone - 70:30 to 98+% purity",
        desc: "Fresh minty-camphoraceous with a dry woody edge; less cooling than menthol.",
        tags: ["Fine Fragrance", "Oral Care", "Flavour"],
      },
      {
        name: "L-Menthyl Acetate",
        latin: "ex natural l-menthol, Mentha arvensis",
        desc: "Sweet, fresh and minty-fruity with a soft floral lift.",
        tags: ["Fine Fragrance", "Oral Care", "Confectionery"],
      },
      {
        name: "DL-Menthyl Acetate",
        latin: "ex dl-menthol",
        desc: "Sweet, fresh and minty-fruity; softer and rounder than the l-isomer.",
        tags: ["Fine Fragrance", "Oral Care", "Confectionery"],
      },
      {
        name: "Iso-Menthone",
        latin: "d-Isomenthone - Mentha arvensis",
        desc: "Minty-camphoraceous with a dry herbal, faintly woody character.",
        tags: ["Fine Fragrance", "Flavour", "Oral Care"],
      },
      {
        name: "Mint Terpene",
        latin: "terpene fraction - Mentha arvensis",
        desc: "Light, fresh and terpenic-minty; airy and volatile.",
        tags: ["Household", "Industrial", "Functional Fragrance"],
      },
      {
        name: "Limonene",
        latin: "l-Limonene - Mentha arvensis terpene",
        desc: "Fresh, light terpenic with a piney-citrus lift; clean and volatile.",
        tags: ["Household", "Industrial", "Flavour"],
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
