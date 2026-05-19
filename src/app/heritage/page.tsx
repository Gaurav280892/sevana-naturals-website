"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeritagePage() {
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
              Heritage
            </span>
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl text-primary font-medium tracking-tight leading-[0.95]">
              In my father&apos;s words.
            </h1>
            <p className="mt-6 font-sans text-xl italic text-ink-soft">
              Forty-two years in the Indian mentha trade.
              <br />
              The foundation on which Sevana is built.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo and Video Section */}
      <section className="py-8 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Photo Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 mb-12"
          >
            <div className="md:w-2/5">
              <Image
                src="/images/yadvendra-patel.jpg"
                alt="Yadvendra Patel"
                width={400}
                height={533}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-3/5 flex flex-col justify-end">
              <p className="text-primary font-medium text-lg">Yadvendra Patel</p>
              <p className="text-ink-muted text-sm">
                Founder, Sona Chemicals · Bareilly · since 1984
              </p>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="aspect-video border-2 border-dashed border-secondary/40 flex items-center justify-center bg-cream-deep">
              <p className="text-ink-muted text-sm italic">Video coming soon</p>
            </div>
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
              In 1978, from February to June, no meaningful crop would grow
              on our land. So I planted mint. <em>Mentha arvensis</em> — the
              Japanese cornmint variety. I had read about it and learned it
              could be sown in February and harvested in May, just before
              the monsoon. The first season worked. For the first time,
              those four idle months had earned something.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              But growing the crop was only half the work. To turn the leaf
              into oil, you needed a steam distillation plant, and in the
              town, there were perhaps three or four. The whole mint belt
              depended on a handful of operators. You brought your harvest,
              you waited your turn, and you paid for processing.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              In one season, I took the harvest to one of these distillers
              during heavy rain. The owner was running his own crop through
              the still first. Mine was set aside. The rains continued. By
              the time the still was free, the crop had spoiled — months of
              work, lost in a few days of waiting.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              I cycled home with my father that evening. I asked him a
              question.
            </p>

            {/* Pull Quote 1 */}
            <blockquote className="my-12 pl-6 border-l-2 border-secondary">
              <p className="font-sans text-2xl md:text-3xl italic text-primary leading-snug">
                &ldquo;Can we not have our own distillation plant?&rdquo;
              </p>
            </blockquote>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              He did not answer at once. He was a careful man with money
              and with words. After some time, he nodded, and that was his
              way of saying yes. We started the next season.
            </p>

            {/* Divider */}
            <div className="my-12 flex justify-center">
              <div className="w-24 h-px bg-secondary" />
            </div>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              In 1984, the first plant came up on the outskirts of our small
              town. Over the years that followed, the number of plants grew
              from one to seven, spread across the mint belt&apos;s districts.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              Once more plants were running, we began educating farmers
              about mentha, offering free distillation, and buying oil based
              on quality. This built trust, consistency, and lasting
              relationships. Eventually, nearly 2,000 acres yielded mentha,
              giving farmers a steady income during off-crop months.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              In the late 1980s, <em>Mentha spicata</em> was introduced through
              EOAI. A small quantity of roots was received from a local
              businessman, and we cultivated them in our own fields. That
              crop still remains part of our story.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              Even today, we grow <em>Mentha arvensis</em>, <em>Mentha spicata</em>,
              <em>Mentha piperita</em>, lemongrass, and palmarosa on our land.
              Staying closely connected to cultivation gives us a deeper
              understanding of the material from its origin — and that
              remains one of our strongest advantages in the market.
            </p>

            {/* Divider */}
            <div className="my-12 flex justify-center">
              <div className="w-24 h-px bg-secondary" />
            </div>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              Over the years, farmers from across the belt began bringing
              their oil directly to me. Some have been coming for forty
              years. Some are the sons of the men who first came to my
              stills in the 1980s.
            </p>

            {/* Pull Quote 2 */}
            <blockquote className="my-12 pl-6 border-l-2 border-secondary">
              <p className="font-sans text-2xl md:text-3xl italic text-primary leading-snug">
                &ldquo;For me, these farmers are not customers. They are family.
                When they come to me with their oil — that is the most
                fulfilling part of my work in this trade.&rdquo;
              </p>
            </blockquote>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              Over forty-two years, approximately 25,000 tons of mentha
              essential oil have moved through this network — from our
              land, from our plants, from our farmers — to fragrance
              houses, flavour houses, and pharmaceutical and food
              manufacturers across India and beyond.
            </p>

            {/* Divider */}
            <div className="my-12 flex justify-center">
              <div className="w-24 h-px bg-secondary" />
            </div>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              I have dealt only in naturals. That has been my discipline
              from the start, and it has been my strength.
            </p>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-8">
              When my daughter Sheetal spoke to me about Sevana — about
              taking what we built in Bareilly and carrying it forward to
              the international fragrance and flavour trade — there was
              one thing I asked her to hold on to.
            </p>

            {/* Pull Quote 3 */}
            <blockquote className="my-12 pl-6 border-l-2 border-secondary">
              <p className="font-sans text-2xl md:text-3xl italic text-primary leading-snug">
                &ldquo;Be known for naturals. The industry will continue to
                evolve, and as research advances, new ingredients and
                innovations will emerge. But the demand for natural
                materials — with their depth, character, and authenticity —
                will always remain. Both will coexist. Keep advancing the
                knowledge, refining the technique, and never compromise
                the substance. This trade runs on trust — protect it.&rdquo;
              </p>
            </blockquote>

            <p className="text-ink-soft text-lg md:text-xl leading-relaxed mb-12">
              That is the inheritance I am passing on.
            </p>

            {/* Attribution */}
            <div className="pt-8 border-t border-border">
              <p className="text-primary font-medium text-lg">
                — Yadvendra Patel
              </p>
              <p className="text-ink-muted text-sm">
                Founder, Sona Chemicals · Bareilly · since 1984
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
