"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const oilOptions = [
  "Mentha arvensis (cornmint)",
  "Mentha piperita (peppermint)",
  "Mentha spicata (spearmint)",
  "Menthol crystals",
  "Citronella oil",
  "Lemongrass oil",
  "Palmarosa oil",
  "Ruh khus (Indian vetiver)",
  "Davana absolute",
  "Tagetes oil",
  "Rose attar (Kannauj)",
  "Jasmine sambac",
  "Tuberose absolute",
  "Mitti attar",
  "Other — please describe",
];

const processSteps = [
  {
    num: "i",
    title: "We reply within two working days.",
    description:
      "A founder-led reply — no auto-responders, no junior pipeline. We will tell you straight if we can serve your brief well.",
  },
  {
    num: "ii",
    title: "We send the documentation first.",
    description:
      "A recent Certificate of Analysis for the oil you're interested in, the technical data sheet, and current commercial terms. So you can decide whether to evaluate further before any sample ships.",
  },
  {
    num: "iii",
    title: "Then the sample, with full paperwork.",
    description:
      "5-25ml samples shipped via DHL or FedEx, with the full document pack and customs declarations sorted from our side. We pay sample freight for serious enquiries.",
  },
  {
    num: "iv",
    title: "If it lands, we discuss commercial terms.",
    description:
      "If the sample evaluates well, we move to commercial. Pricing, lot sizes, packaging, payment terms, shipping incoterm — all discussed openly. We work in lots from 1kg upwards.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    oil: "",
    quantity: "",
    application: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    const mailtoLink = `mailto:hello@sevananaturals.com?subject=Sample Request from ${formData.name} at ${formData.company}&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nCountry: ${formData.country}\nOil of Interest: ${formData.oil}\nQuantity: ${formData.quantity}\nApplication: ${formData.application}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              Contact
            </span>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl text-primary font-medium tracking-tight leading-[0.95]">
              Begin a
              <br />
              <span className="italic font-normal">conversation.</span>
            </h1>
            <p className="mt-8 text-ink-soft max-w-xl leading-relaxed">
              For perfumers, flavour houses, attar manufacturers, aromatherapy
              formulators, and procurement teams — tell us what you&apos;re
              looking for and we will reply within two working days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
                Sample Request
              </span>
              <h2 className="font-sans text-3xl text-primary font-medium mb-8">
                Tell us about your application.
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-cream focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-cream focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-cream focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-cream focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                      Oil of Interest
                    </label>
                    <select
                      value={formData.oil}
                      onChange={(e) =>
                        setFormData({ ...formData, oil: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-cream focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select — or describe below</option>
                      {oilOptions.map((oil) => (
                        <option key={oil} value={oil}>
                          {oil}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                      Indicative Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5 kg, 50 kg, 200 kg"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-cream focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                    End-Use Application
                  </label>
                  <input
                    type="text"
                    placeholder="Fine fragrance, oral care, aromatherapy, attar compounding, etc."
                    value={formData.application}
                    onChange={(e) =>
                      setFormData({ ...formData, application: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border bg-cream focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project, timeline, and any specific quality requirements."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border bg-cream focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-cream text-sm font-medium tracking-wider uppercase hover:bg-primary-dark transition-colors"
                >
                  Send Request
                  <ArrowRight size={16} />
                </button>

                <p className="text-sm text-ink-muted">
                  The form opens your email client. If it doesn&apos;t, write to
                  us directly at{" "}
                  <a
                    href="mailto:hello@sevananaturals.com"
                    className="text-primary border-b border-primary"
                  >
                    hello@sevananaturals.com
                  </a>
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
                Direct Contact
              </span>
              <h2 className="font-sans text-3xl text-primary font-medium mb-8">
                Or reach us directly.
              </h2>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:hello@sevananaturals.com"
                    className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
                  >
                    <Mail size={18} />
                    hello@sevananaturals.com
                  </a>
                  <p className="text-sm text-ink-muted mt-1">
                    For all sample, sourcing, and trade enquiries.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                    Phone & WhatsApp
                  </h4>
                  <a
                    href="tel:+919004550675"
                    className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
                  >
                    <Phone size={18} />
                    +91 90045 50675
                  </a>
                  <p className="text-sm text-ink-muted mt-1">
                    Mon-Sat, 10:00 to 18:30 IST. WhatsApp preferred for
                    international time zones.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                    Office
                  </h4>
                  <div className="flex items-start gap-3 text-ink-soft">
                    <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      Sevana Naturals Private Limited
                      <br />
                      Plot PAP-D/43-44, Turbhe MIDC
                      <br />
                      Navi Mumbai — 400705
                      <br />
                      Maharashtra, India
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                    Procurement & Distillation Base
                  </h4>
                  <p className="text-ink-soft">
                    Bareilly, Uttar Pradesh, India
                    <br />
                    <span className="text-sm text-ink-muted">
                      (Family operations — visits by appointment)
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-medium tracking-wider uppercase text-ink-muted mb-2">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/sheetal-patel-april"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    linkedin.com/in/sheetal-patel-april
                  </a>
                  <p className="text-sm text-ink-muted mt-1">
                    Connect with our founder for direct conversation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-cream-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-secondary mb-4 block">
              What Happens Next
            </span>
            <h2 className="font-sans text-4xl md:text-5xl text-primary font-medium tracking-tight leading-tight">
              From first message to sample in your hand.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-12 gap-6 py-8 border-b border-border items-baseline"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="font-sans text-2xl md:text-3xl italic text-secondary">
                    {step.num}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="font-sans text-xl text-primary font-medium mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink-soft leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
