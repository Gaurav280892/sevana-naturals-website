"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeritageSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-cream/50 mb-4 block">
              Heritage
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-cream">
              Three generations
              <br />
              <span className="italic font-normal">in the trade.</span>
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-sans text-xl md:text-2xl italic text-cream/90 leading-relaxed mb-6 max-w-xl">
              Sevana is the next chapter of a family that has worked the Indian
              aromatics trade for over thirty years.
            </p>
            <p className="text-cream/70 leading-relaxed mb-8 max-w-xl">
              Our founder&apos;s father,{" "}
              <em className="text-cream font-sans">Yadvendra Patel</em>, founded{" "}
              <em className="text-cream font-sans">Sona Chemicals</em> in
              Bareilly more than three decades ago; her brother-in-law{" "}
              <em className="text-cream font-sans">Prateek Patel</em> runs the
              allied house{" "}
              <em className="text-cream font-sans">Sona Mint Overseas</em>. That
              procurement network — built across thirty harvests, six districts,
              and several hundred farmers and distillers — is what Sevana
              inherits and structures for export.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-cream font-medium tracking-wide hover:text-secondary transition-colors"
            >
              <span className="border-b border-current pb-1">
                Read the founder&apos;s story
              </span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-cream/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "30+", label: "Years in Trade" },
              { value: "6", label: "Districts Covered" },
              { value: "500+", label: "Farmer Partners" },
              { value: "25+", label: "Countries Served" },
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
  );
}
