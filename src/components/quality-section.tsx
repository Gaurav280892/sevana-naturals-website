"use client";

import { motion } from "framer-motion";
import { Beaker, FileCheck, MapPin, Warehouse } from "lucide-react";

const qualities = [
  {
    num: "01",
    icon: Beaker,
    title: "Olfactive Evaluation",
    description:
      "Every lot is evaluated by an ISIPCA-trained perfumer before it leaves India. We don't ship what we wouldn't formulate with.",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "Lab-Verified Quality",
    description:
      "GC-MS, optical rotation, refractive index, heavy-metals screening, and adulteration profiling on every commercial batch. Tested at CSIR-CIMAP and FFDC Kannauj.",
  },
  {
    num: "03",
    icon: MapPin,
    title: "Provenance, Documented",
    description:
      "Distillation date, region, varietal, and farmer aggregator traced on every shipment. We tell you exactly where the oil came from and when.",
  },
  {
    num: "04",
    icon: Warehouse,
    title: "Storage, Properly",
    description:
      "Food-grade SS 304 drums, nitrogen-flushed headspace, PTFE-gasketed seals, dark and temperature-stable storage. No aluminium, no plastic for aging stock.",
  },
];

export function QualitySection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
            Why Sevana
          </span>
          <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight text-balance">
            The perfumer&apos;s standard, applied at source.
          </h2>
        </motion.div>

        {/* Quality Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualities.map((quality, index) => (
            <motion.article
              key={quality.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-cream-deep border border-transparent hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="font-sans text-sm italic text-secondary">
                    {quality.num}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <quality.icon
                      size={20}
                      className="text-primary group-hover:text-secondary transition-colors"
                    />
                    <h3 className="font-sans text-xl text-primary font-medium">
                      {quality.title}
                    </h3>
                  </div>
                  <p className="text-ink-soft leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
