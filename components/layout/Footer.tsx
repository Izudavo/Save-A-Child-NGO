"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // matching your structure
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Logo } from "@/components/layout/Navbar";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      {/* ─── SOPHISTICATED SHAPE CURVE TRANSITION ─── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%] pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12 fill-zinc-950"
        >
          <path d="M0,45 C360,15 1080,75 1440,45 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-zinc-800">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              {/* High visibility override for the inner logo typography elements */}
              <Logo className="[&_span]:text-white text-zinc-50" />
            </Link>

            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm font-normal">
              A premium, structurally transparent Nigerian NGO platform
              dedicated to resource redirection into foundational metrics,
              pediatric care, and education legacy architecture. Every child
              deserves a chance to dream.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FaFacebook, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaYoutube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-100 mb-6 border-l-2 border-emerald-500 pl-2">
              Framework
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Our Projects" },
                { href: "/gallery", label: "Visual Gallery" },
                { href: "/blog", label: "Insights Blog" },
                { href: "/contact", label: "Contact Us" },
                { href: "/donate", label: "Philanthropy Hub" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-300 hover:text-emerald-400 text-xs font-bold uppercase tracking-wider transition-colors duration-200 flex items-center gap-2.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 transition-transform group-hover:scale-125" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-100 mb-6 border-l-2 border-emerald-500 pl-2">
              Contact Base
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5 text-sm font-normal text-zinc-300 leading-relaxed">
                <MapPin size={18} className="text-amber-500 mt-0.5 shrink-0" />
                <span>
                  14 Adeniran Ogunsanya St,
                  <br />
                  Surulere, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3.5 text-sm font-normal text-zinc-300">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <a
                  href="mailto:info@saveachild.ng"
                  className="hover:text-emerald-400 transition-colors"
                >
                  info@saveachild.ng
                </a>
              </li>
              <li className="flex items-center gap-3.5 text-sm font-normal text-zinc-300">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <a
                  href="tel:+2348012345678"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +234 801 234 5678
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">
                Sovereign Affiliations
              </h4>
              <div className="flex flex-wrap gap-2">
                {["🇳🇬 Nigeria", "🇺🇸 USA", "🇬🇧 UK", "🇨🇦 Canada"].map(
                  (region) => (
                    <span
                      key={region}
                      className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 shadow-sm"
                    >
                      {region}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-100 border-l-2 border-emerald-500 pl-2">
              Systemic Briefings
            </h3>
            <p className="text-sm text-zinc-300 font-normal leading-relaxed">
              Subscribe to secure tactical update logs tracking audit statements
              and localized operations deployment files.
            </p>
            <div className="space-y-3 pt-1">
              <Input
                type="email"
                placeholder="Secure email entry..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-900 border-zinc-800 text-white rounded-xl text-sm placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-emerald-500 h-12"
                data-testid="input-newsletter-email"
              />
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl font-bold uppercase tracking-widest text-[11px] h-12 transition-all group"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe to Feed
                <ArrowRight
                  size={14}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </div>
            <p className="text-xs text-zinc-500 font-normal">
              Zero structural spam algorithms executed.
            </p>
          </div>
        </div>

        {/* BOTTOM METRICS BAR */}
        <div className="mt-12 pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs font-normal text-zinc-400 tracking-wide">
              &copy; {new Date().getFullYear()} SAVE A CHILD NGO. Corporate
              Governance Audited. RC: 1234567
            </p>

            <p className="text-xs text-zinc-500">
              Designed and built by{" "}
              <a
                href="https://davidobinta.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                David Obinta
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((policy) => (
              <Link
                key={policy.label}
                href={policy.href}
                className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-zinc-500 pb-0.5"
              >
                {policy.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
