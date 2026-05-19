"use client";

import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream-deep">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Quote Mark */}
          <span className="absolute -top-8 -left-4 font-sans text-8xl text-secondary/20 leading-none">
            &ldquo;
          </span>
          
          <p className="font-sans text-3xl md:text-4xl lg:text-5xl text-primary italic font-normal leading-snug tracking-tight pl-8 border-l-2 border-secondary">
            We were raised inside this trade. ISIPCA gave us the vocabulary; the
            mentha fields gave us the standard.
          </p>
          
          <footer className="mt-8 pl-8">
            <cite className="not-italic">
              <span className="block text-primary font-medium">
                Sheetal Sachan
              </span>
              <span className="text-ink-muted text-sm tracking-wide">
                Founder, Sevana Naturals
              </span>
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
