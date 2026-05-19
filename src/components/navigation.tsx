"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/heritage", label: "Heritage" },
  { href: "/founders-desk", label: "Founder's Desk" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f8f6f1]/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="transition-all duration-300"
            >
              <Image
                src="/images/logo.svg"
                alt="Sevana Naturals"
                width={280}
                height={280}
                className={`h-20 w-auto transition-all duration-300 ${
                  scrolled || isOpen ? "" : "invert"
                }`}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wider uppercase link-underline transition-colors duration-300 ${
                    scrolled ? "text-ink" : "text-cream/90 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden lg:block"
          >
            <Link
              href="/contact"
              className={`text-xs font-medium tracking-widest uppercase px-6 py-3 border transition-all duration-300 ${
                scrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-cream"
                  : "border-cream/50 text-cream hover:bg-cream hover:text-primary"
              }`}
            >
              Request Sample
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-50 p-2 transition-colors duration-300 ${
              scrolled || isOpen ? "text-primary" : "text-cream"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cream z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-sans text-4xl text-primary hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-medium tracking-widest uppercase px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-cream transition-all"
                >
                  Request Sample
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
