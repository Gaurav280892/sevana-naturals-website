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
                Sheetal Sachan
              </h2>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary block mb-6">
                Founder & Perfumer
              </span>
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
                I grew up surrounded by the scent of mint and wet vetiver —
                earthy, woody, mossy, with a warmth that still feels familiar
                to me today.
              </p>

              <p>
                Our warehouse was filled with drums of aromatic raw materials, 
                and even my school bag carried the scent of mint so strongly 
                that my friends would often point it out. In many ways, that 
                was my first perfume.
              </p>

              <p>
                I also grew up watching farmers line up outside my father&apos;s
                office, waiting to sell the oils they had worked hard to
                produce. What my father built over four decades was never just 
                a business — it was a relationship of trust between the land, 
                the farmer, and the material itself.
              </p>

              <p>
                Although I was always surrounded by natural aromatic materials,
                it was only later, while studying perfumery and working in fine
                fragrance evaluation and development internationally, that I
                truly understood the scale and beauty of this industry. That 
                experience made one thing very clear to me: natural materials 
                bring a depth, texture, and emotional character to fragrance 
                that cannot simply be replicated.
              </p>

              <p>
                Sevana was built at the intersection of two worlds: the
                inherited depth of Indian aromatic sourcing and the precision
                of international perfumery standards. Our purpose is to bring 
                Indian aromatic materials to the world stage with the refinement, 
                transparency, and technical understanding they deserve.
              </p>

              <div className="pt-8">
                <Link
                  href="/founders-desk"
                  className="group inline-flex items-center gap-3 text-primary font-medium tracking-wide hover:text-secondary transition-colors"
                >
                  <span className="border-b border-current pb-1">
                    Read the full founder&apos;s message
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
              The family has been in the Indian aromatics trade since 1978.
              My father, <em className="text-cream">Yadvendra Patel</em>, founded
              Sona Chemicals in Bareilly — building a network of farmers and 
              distillers across the mentha belt over forty-two years.
            </p>
            <p className="text-cream/80 leading-relaxed">
              My brother-in-law, <em className="text-cream">Prateek Patel</em>,
              now runs Sona Mint Overseas, expanding the family&apos;s reach into
              international markets. Sevana is the third chapter — built on the
              same procurement network, but structured specifically for
              quality-first buyers who need documentation, traceability, and
              olfactive integrity at the source.
            </p>

            <div className="pt-8">
              <Link
                href="/heritage"
                className="group inline-flex items-center gap-3 text-cream font-medium tracking-wide hover:text-secondary transition-colors"
              >
                <span className="border-b border-current pb-1">
                  Read the heritage story
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
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
                { value: "42+", label: "Years in Industry" },
                { value: "500+", label: "Farmer Partners" },
                { value: "3", label: "Generations" },
                { value: "25,000+", label: "Tons Sold" },
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
            <p className="text-ink-soft max-w-2xl mx-auto mb-8">
              Whether you&apos;re a consumer, perfumer, fragrance or flavour
              house, aromatherapy brand, wellness company, cosmetic
              manufacturer, retailer, wholesaler, distributor, or private
              label brand, we&apos;d love to hear about your requirements.
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
