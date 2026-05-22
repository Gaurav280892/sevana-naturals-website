"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    num: "01",
    title: "Mint Family",
    description:
      "Mentha arvensis, Mentha piperita, Mentha spicata — oils, crystals, and DMO from the Bareilly-Chandausi-Sambhal belt that produces the majority of the world's natural menthol.",
    image: "/images/mint-leaves.jpg",
  },
  {
    num: "02",
    title: "Aromatic Grasses",
    description:
      "Citronella, lemongrass, palmarosa — steam-distilled at scale, with a focus on consistent citral and geraniol profiles for fragrance and flavour applications.",
    image: "/images/lemongrass.jpg",
  },
  {
    num: "03",
    title: "Specialty Naturals",
    description:
      "Ruh khus (wild-harvested North Indian vetiver), davana, geranium, lemon, and other oils where Indian origin is irreplaceable.",
    image: "/images/vetiver-plant.jpg",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
            What We Trade
          </span>
          <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight text-balance">
            A focused portfolio, anchored in the world&apos;s mentha belt.
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed">
            Our procurement is built around the families and farmers who have
            been distilling in Uttar Pradesh for generations. We supply the oils
            India does best — and a curated selection of specialty naturals
            where origin still matters.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.article
              key={category.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-cream border border-border hover:border-primary transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                <span className="absolute top-4 left-4 font-sans text-sm italic text-secondary">
                  {category.num}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-sans text-2xl text-primary font-medium mb-3">
                  {category.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 text-primary font-medium tracking-wide hover:text-secondary transition-colors"
          >
            <span className="border-b border-current pb-1">
              Explore Full Portfolio
            </span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
