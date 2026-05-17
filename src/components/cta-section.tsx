"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1607081692251-d6a041f0e6f3?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              Begin a Conversation
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-primary font-medium tracking-tight leading-tight">
              Request a
              <br />
              <span className="italic font-normal">sample.</span>
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-sans text-xl md:text-2xl italic text-ink-soft leading-relaxed mb-6 max-w-xl">
              For perfumers, flavour houses, attar manufacturers, aromatherapy
              formulators, and procurement teams.
            </p>
            <p className="text-ink-soft leading-relaxed mb-8 max-w-xl">
              Tell us what you&apos;re looking for and where you&apos;re
              shipping. We send samples globally with a full Certificate of
              Analysis, technical data sheet, and material safety documentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-cream text-sm font-medium tracking-wider uppercase hover:bg-primary-dark transition-colors"
              >
                Send a Request
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-primary text-primary text-sm font-medium tracking-wider uppercase hover:bg-primary hover:text-cream transition-colors"
              >
                Browse Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
