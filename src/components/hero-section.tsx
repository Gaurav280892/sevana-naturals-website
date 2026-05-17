"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-fields.jpg"
        >
          <source
            src="https://player.vimeo.com/external/363916621.sd.mp4?s=4a8aeaf7aaf4e15c0c81e2a3a8cb54b4b19ba7d0&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/60 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-12 h-px bg-secondary" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-cream/80">
              Essential Oils &middot; Aromatics
            </span>
            <span className="w-12 h-px bg-secondary" />
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl text-cream font-medium tracking-tight leading-[0.95] text-balance">
            Indian naturals,
            <br />
            <span className="italic font-normal text-cream/90">
              properly understood.
            </span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 font-sans text-xl md:text-2xl italic text-cream/80 max-w-xl mx-auto"
          >
            Bareilly distilled. ISIPCA trained. Globally delivered.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-cream/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Sevana Naturals supplies essential oils and aromatic raw
            materials sourced from the Indo-Gangetic plain &mdash; the historic
            heartland of Indian mentha, vetiver, and floral perfumery.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 px-8 py-4 bg-cream text-primary text-sm font-medium tracking-wider uppercase hover:bg-cream/90 transition-all"
            >
              View Portfolio
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-8 py-4 border border-cream/50 text-cream text-sm font-medium tracking-wider uppercase hover:bg-cream/10 transition-all"
            >
              Request a Sample
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-cream/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-cream/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
