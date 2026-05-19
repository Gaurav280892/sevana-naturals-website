"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GallerySection() {
  return (
    <section className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
            From Field to Bottle
          </span>
          <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight text-balance">
            Where our oils come from.
          </h2>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] lg:col-span-2 lg:row-span-2 group overflow-hidden"
          >
            <Image
              src="/images/hero-fields.jpg"
              alt="Vast mint fields in the Indo-Gangetic plains"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="font-sans text-2xl lg:text-3xl text-cream font-medium mb-2">
                The Mentha Belt
              </h3>
              <p className="text-cream/80 max-w-md">
                Rolling fields of mentha arvensis across the Bareilly-Chandausi-Sambhal belt — 
                producing the majority of the world&apos;s natural menthol.
              </p>
            </div>
          </motion.div>

          {/* Smaller Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-[250px] group overflow-hidden"
          >
            <Image
              src="/images/distillation.jpg"
              alt="Traditional copper distillation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h4 className="font-sans text-lg text-cream font-medium">
                Traditional Distillation
              </h4>
              <p className="text-cream/70 text-sm">
                Copper deg-bhapka method
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[250px] group overflow-hidden"
          >
            <Image
              src="/images/perfumer-evaluation.jpg"
              alt="Perfumer's evaluation bench with smelling strips"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h4 className="font-sans text-lg text-cream font-medium">
                Artisanal Quality
              </h4>
              <p className="text-cream/70 text-sm">
                Every batch evaluated
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
