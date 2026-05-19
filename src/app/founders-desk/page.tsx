"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function FoundersDeskPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              From the Founder&apos;s Desk
            </span>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl text-primary font-medium tracking-tight leading-[0.95]">
              Sevana began long before it had a name.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              I grew up surrounded by the scent of mint and wet vetiver —
              earthy, woody, mossy, with a warmth that still feels familiar
              to me today. Our warehouse was filled with drums of aromatic
              raw materials, and even my school bag carried the scent of mint
              so strongly that my friends would often point it out. In many
              ways, that was my first perfume.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              I also grew up watching farmers line up outside my father&apos;s
              office, waiting to sell the oils they had worked hard to
              produce. Some arrived carrying small blue cans; others came
              with larger quantities after an entire season&apos;s harvest. What
              my father built over four decades was never just a business —
              it was a relationship of trust between the land, the farmer,
              and the material itself.
            </p>

            {/* Divider */}
            <div className="my-12 flex justify-center">
              <div className="w-24 h-px bg-secondary" />
            </div>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              Although I was always surrounded by natural aromatic materials,
              it was only later, while studying perfumery and working in fine
              fragrance evaluation and development internationally, that I
              truly understood the scale and beauty of this industry. I had
              the opportunity to work on hundreds of fragrances across global
              markets, comparing compositions across suppliers, styles, and
              price points. That experience made one thing very clear to me:
              natural materials bring a depth, texture, and emotional
              character to fragrance that cannot simply be replicated.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              That realization became the foundation of Sevana.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              Sevana was built at the intersection of two worlds: the
              inherited depth of Indian aromatic sourcing and the precision
              of international perfumery standards.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              Our purpose is not only to preserve a legacy built over
              generations, but to bring Indian aromatic materials to the
              world stage with the refinement, transparency, and technical
              understanding they deserve. We work closely at origin, source
              directly, evaluate with a perfumer&apos;s eye, and remain deeply
              connected to the farmers and land behind every material.
            </p>

            {/* Divider */}
            <div className="my-12 flex justify-center">
              <div className="w-24 h-px bg-secondary" />
            </div>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              To me, Sevana should stand for one thing above all else:
              trust. Trust in quality. Trust in olfactive integrity. Trust
              in sourcing. Trust that what reaches a perfumer&apos;s palette is
              exactly what it claims to be.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              My father often says:
            </p>

            {/* Pull Quote */}
            <blockquote className="my-12 pl-6 border-l-2 border-secondary">
              <p className="font-sans text-2xl md:text-3xl italic text-primary leading-snug">
                &ldquo;The industry will continue to evolve, and new ingredients
                will always emerge. But the demand for naturals — with their
                depth, character, and authenticity — will always remain.
                Keep advancing the knowledge, refining the technique, and
                never compromise the substance. This trade runs on trust —
                protect it.&rdquo;
              </p>
            </blockquote>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-12">
              That is the inheritance I am carrying forward through Sevana.
            </p>

            {/* Attribution */}
            <div className="pt-8 border-t border-border">
              <p className="text-primary font-medium text-lg">
                — Sheetal Sachan
              </p>
              <p className="text-ink-muted text-sm">
                Founder & Managing Director, Sevana Naturals
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
