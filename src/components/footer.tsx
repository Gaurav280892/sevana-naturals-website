import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.svg"
                alt="Sevana Naturals"
                width={200}
                height={200}
                className="h-12 w-auto invert"
              />
            </Link>
            <p className="mt-4 text-cream/70 font-sans italic text-lg">
              India distilled. ISIPCA trained. Globally delivered.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-cream/80">
              <a
                href="mailto:hello@sevananaturals.com"
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Mail size={16} />
                hello@sevananaturals.com
              </a>
              <a
                href="tel:+919004550675"
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Phone size={16} />
                +91 90045 50675
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Turbhe MIDC, Navi Mumbai
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-cream/50 mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/heritage", label: "Heritage" },
                { href: "/founders-desk", label: "Founder's Desk" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/quality", label: "Quality" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-cream/50 mb-6">
              Products
            </h4>
            <ul className="space-y-4">
              {[
                "Mint Family",
                "Aromatic Grasses",
                "Specialty Naturals",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/portfolio"
                    className="text-cream/80 hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-cream/50 mb-6">
              Stay Updated
            </h4>
            <p className="text-cream/70 text-sm mb-4">
              Receive updates on new harvests, seasonal availability, and
              industry insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent border border-cream/30 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/60 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-cream text-primary hover:bg-cream/90 transition-colors"
              >
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
            <p>&copy; 2026 Sevana Naturals Private Limited. All rights reserved.</p>
            <p>Mumbai &middot; Bareilly &middot; India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
