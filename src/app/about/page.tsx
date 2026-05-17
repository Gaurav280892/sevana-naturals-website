"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
                About
              </span>
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl text-primary font-medium tracking-tight leading-[0.95]">
                The story behind
                <br />
                <span className="italic font-normal">our oils.</span>
              </h1>
              <p className="mt-8 font-sans text-xl italic text-ink-soft max-w-lg">
                From Bareilly&apos;s mentha fields to the world&apos;s finest
                perfume houses.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <Image
                src="/images/distillation.jpg"
                alt="Essential oil distillation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 lg:py-32 bg-cream-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start"
            >
              <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight mb-2">
                Sheetal Patel
              </h2>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary block mb-6">
                Founder & Perfumer
              </span>

              <ul className="mt-8 pt-8 border-t border-border space-y-4 text-sm">
                <li className="flex gap-4 text-ink-soft border-b border-border/50 border-dotted pb-4">
                  <span className="font-sans italic text-ink-muted w-16">
                    2018
                  </span>
                  ISIPCA, France — Advanced Perfumery
                </li>
                <li className="flex gap-4 text-ink-soft border-b border-border/50 border-dotted pb-4">
                  <span className="font-sans italic text-ink-muted w-16">
                    2019
                  </span>
                  Symrise, Paris — Fragrance Evaluation
                </li>
                <li className="flex gap-4 text-ink-soft border-b border-border/50 border-dotted pb-4">
                  <span className="font-sans italic text-ink-muted w-16">
                    2020
                  </span>
                  Founded Sevana Naturals
                </li>
                <li className="flex gap-4 text-ink-soft">
                  <span className="font-sans italic text-ink-muted w-16">
                    2024
                  </span>
                  30+ Countries Served
                </li>
              </ul>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 space-y-6 text-ink-soft leading-relaxed"
            >
              <p className="font-sans text-xl italic text-primary leading-relaxed">
                I grew up in the aromatics trade — not by choice, but by osmosis.
                My father ran a distillery in Bareilly when I was a child; my
                earliest memories include the sharp green of spearmint and the
                earthy damp of ruh khus lifted out of copper degs.
              </p>

              <p>
                After a business degree and a few years in corporate finance, I
                found myself drawn back. I enrolled at ISIPCA in Versailles —
                the premier school for perfumery — not to become a fine-fragrance
                perfumer but to understand the language and the standards of the
                people we sell to. That training changed everything.
              </p>

              <p>
                What I learned in France — about evaluation, about documentation,
                about the trust deficit international buyers face with Indian
                supply — shaped the way Sevana operates. We don&apos;t just test
                for adulterants; we test for olfactive integrity. We don&apos;t
                just ship documents; we ship the story of every batch.
              </p>

              <p>
                Sevana was founded in 2020, during a time when global supply
                chains were breaking and traceability suddenly mattered more than
                ever. We were ready. Our procurement network — built across three
                generations — was already structured for the transparency that
                buyers began demanding.
              </p>

              <p>
                Today we supply perfumers, aromatherapists, and flavour houses
                across twenty-five countries. Every shipment carries my personal
                evaluation. If I wouldn&apos;t formulate with it, we don&apos;t
                ship it.
              </p>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-primary font-medium tracking-wide hover:text-secondary transition-colors"
                >
                  <span className="border-b border-current pb-1">
                    Connect with me on LinkedIn
                  </span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 lg:py-32 bg-primary text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-cream/50 mb-4 block">
              Family Heritage
            </span>
            <h2 className="font-sans text-4xl md:text-5xl font-medium tracking-tight leading-tight text-cream mb-8">
              Three generations of Indian aromatics.
            </h2>
            <p className="text-cream/80 leading-relaxed mb-6">
              The Patel family has been in the Indian aromatics trade since 1986.
              My father, <em className="text-cream">Yadvendra Patel</em>, founded
              Sona Chemicals in Bareilly — one of the first companies in the
              region to move from crude distillation to refined, export-grade
              production.
            </p>
            <p className="text-cream/80 leading-relaxed">
              My brother-in-law, <em className="text-cream">Prateek Patel</em>,
              now runs Sona Mint Overseas, expanding the family&apos;s reach into
              international markets. Sevana is the third chapter — built on the
              same procurement network, but structured specifically for
              quality-first buyers who need documentation, traceability, and
              olfactive integrity at the source.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-cream/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1986", label: "Family Trade Started" },
                { value: "6", label: "Districts Covered" },
                { value: "500+", label: "Farmer Partners" },
                { value: "3", label: "Generations" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-secondary pl-6"
                >
                  <span className="block font-sans text-4xl md:text-5xl font-medium text-cream tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-widest uppercase text-cream/50 mt-2 block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight mb-6">
              Ready to work with us?
            </h2>
            <p className="text-ink-soft max-w-xl mx-auto mb-8">
              Whether you&apos;re a perfumer, flavour house, or aromatherapy
              brand, we&apos;d love to hear about your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-cream text-sm font-medium tracking-wider uppercase hover:bg-primary-dark transition-colors"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
