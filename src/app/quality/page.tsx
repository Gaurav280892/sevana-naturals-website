"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  FileCheck,
  MapPin,
  Warehouse,
  Shield,
  Award,
} from "lucide-react";

const qualityPillars = [
  {
    icon: Beaker,
    title: "Olfactive Evaluation",
    description:
      "Every lot is evaluated by an ISIPCA-trained perfumer before it leaves India. We assess for character, purity, and formulation suitability — not just chemical compliance.",
  },
  {
    icon: FileCheck,
    title: "Lab-Verified Quality",
    description:
      "GC-MS analysis, optical rotation, refractive index, specific gravity, heavy-metals screening, and adulteration profiling on every commercial batch.",
  },
  {
    icon: MapPin,
    title: "Full Traceability",
    description:
      "Distillation date, region, varietal, and farmer aggregator documented on every shipment. You know exactly where the oil came from and when.",
  },
  {
    icon: Warehouse,
    title: "Proper Storage",
    description:
      "Food-grade SS 304 drums, nitrogen-flushed headspace, PTFE-gasketed seals, dark and temperature-stable storage. No aluminium, no plastic for aging stock.",
  },
];

const certifications = [
  {
    title: "CSIR-CIMAP",
    description:
      "Testing partnership with the Central Institute of Medicinal and Aromatic Plants, Lucknow — India's premier research institution for aromatic crops.",
  },
  {
    title: "FFDC Kannauj",
    description:
      "Analysis and certification through the Fragrance & Flavour Development Centre — the nodal agency for India's essential oil industry.",
  },
  {
    title: "ISO 9001:2015",
    description:
      "Quality management system certification ensuring consistent processes across procurement, testing, storage, and shipping.",
  },
  {
    title: "FSSAI Licensed",
    description:
      "Food Safety and Standards Authority of India licensing for oils intended for flavour and food applications.",
  },
];

const testingProfile = [
  "Gas Chromatography-Mass Spectrometry (GC-MS)",
  "Optical Rotation",
  "Refractive Index",
  "Specific Gravity",
  "Heavy Metals Screening (Pb, As, Cd, Hg)",
  "Pesticide Residue Analysis",
  "Adulteration Profiling",
  "Microbial Load Testing",
];

export default function QualityPage() {
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
                Quality
              </span>
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl text-primary font-medium tracking-tight leading-[0.95]">
                The perfumer&apos;s
                <br />
                <span className="italic font-normal">standard.</span>
              </h1>
              <p className="mt-8 font-sans text-xl italic text-ink-soft max-w-lg">
                Quality isn&apos;t just about passing tests — it&apos;s about
                olfactive integrity, traceability, and trust.
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
                src="/images/essential-oils.jpg"
                alt="Laboratory testing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-24 lg:py-32 bg-cream-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              Our Approach
            </span>
            <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight">
              Four pillars of quality assurance.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityPillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-cream border border-border hover:border-primary transition-colors group"
              >
                <pillar.icon
                  size={28}
                  className="text-secondary mb-6 group-hover:text-primary transition-colors"
                />
                <h3 className="font-sans text-xl text-primary font-medium mb-4">
                  {pillar.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">
                  {pillar.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Profile */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
                Testing Protocol
              </span>
              <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight mb-6">
                Every batch, fully profiled.
              </h2>
              <p className="text-ink-soft leading-relaxed mb-8">
                We maintain comprehensive testing protocols for every commercial
                batch. Our documentation includes full analytical reports that
                meet international standards and buyer requirements.
              </p>

              <div className="space-y-4">
                {testingProfile.map((test, index) => (
                  <motion.div
                    key={test}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 py-3 border-b border-border"
                  >
                    <span className="font-sans italic text-secondary text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink">{test}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary p-10 text-cream"
            >
              <h3 className="font-sans text-2xl font-medium mb-6">
                Documentation included with every shipment:
              </h3>
              <ul className="space-y-4 text-cream/90">
                <li className="flex items-start gap-3">
                  <span className="text-secondary">—</span>
                  Certificate of Analysis (CoA)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">—</span>
                  Technical Data Sheet (TDS)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">—</span>
                  Material Safety Data Sheet (MSDS)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">—</span>
                  GC-MS Chromatogram
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">—</span>
                  Origin & Traceability Certificate
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">—</span>
                  Allergen Declaration
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary">—</span>
                  Phytosanitary Certificate (as required)
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32 bg-cream-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              Certifications
            </span>
            <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight">
              Partnered with India&apos;s premier institutions.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-cream border border-border"
              >
                <Award size={24} className="text-secondary mb-4" />
                <h3 className="font-sans text-xl text-primary font-medium mb-3">
                  {cert.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">
                  {cert.description}
                </p>
              </motion.article>
            ))}
          </div>
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
              See our quality in action.
            </h2>
            <p className="text-ink-soft max-w-xl mx-auto mb-8">
              Request a sample and receive it with full documentation — CoA,
              TDS, GC-MS chromatogram, and traceability certificate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-cream text-sm font-medium tracking-wider uppercase hover:bg-primary-dark transition-colors"
            >
              Request a Sample
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
