"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { motion, Variants } from "framer-motion";
import { Shield, Eye, Lock, RefreshCw, FileText } from "lucide-react";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: easing,
    },
  }),
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] antialiased text-zinc-900">
      <Navbar />
      <PageTransition className="flex-1">
        
        {/* HEADER SECTION */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full mb-6 backdrop-blur-md">
                <Shield size={12} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Data Governance Framework</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-zinc-400 font-medium text-sm md:text-base">
                Last Operational Revision: June 2026 • Compliant with NDPA & Global Privacy Standards
              </p>
            </motion.div>
          </div>
        </section>

        {/* POLICY CONTENT ELEMENT MATRIX */}
        <section className="py-20 bg-[#faf8f5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-zinc-200/80 shadow-[0_30px_80px_rgba(0,0,0,0.02)] rounded-[2rem] p-8 md:p-12 space-y-10 text-zinc-800"
            >
              
              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <Eye size={20} className="text-[#0d472c]" /> 1. Operational Transparency
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  SAVE A CHILD NGO operates under rigorous data management frameworks to safeguard the sovereign identification metrics of our international donor base, field volunteers, and institutional partners. This document outlines how structural inputs are managed when interacting with our digital interfaces.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <FileText size={20} className="text-[#0d472c]" /> 2. Information We Compile
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  When executing a donation process or interacting with secure database forms, we process specific variables required to establish verifiable records:
                </p>
                <ul className="space-y-2 pl-6 list-disc text-sm text-zinc-600 font-medium">
                  <li><strong>Identity Metrics:</strong> Legal names, organizational structures, and corporate matching parameters.</li>
                  <li><strong>Contact Portals:</strong> Secure email communication targets and verification contact configurations.</li>
                  <li><strong>Financial Indexing:</strong> Secure payload tokens parsed seamlessly by our payment gateways (Paystack/SSL). Core institutional banking metrics are never cached or archived directly inside our records.</li>
                </ul>
              </div>

              <hr className="border-zinc-100" />

              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <Lock size={20} className="text-[#0d472c]" /> 3. Architectural Encryption & Storage
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  All metrics passed through our digital ecosystem are managed with end-to-end 256-bit automated cryptographic security architectures. Access to raw platform statistics is strictly ring-fenced to approved security personnel subjected to binding confidentiality regulations.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <RefreshCw size={20} className="text-[#0d472c]" /> 4. Third-Party Allocations
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  SAVE A CHILD NGO guarantees a zero-monetization policy. We will never sell, lease, or distribute data assets to tracking arrays or advertising companies. Distribution strictly occurs under legal compliance mandates or system actions handled through banking systems to confirm your financial transaction.
                </p>
              </div>

              <blockquote className="border-l-4 border-amber-500 bg-amber-50/50 p-5 rounded-r-xl text-xs font-medium text-zinc-600 leading-relaxed">
                For administrative optimization questions regarding file updates, right-to-be-forgotten requests, or compliance reviews, please reach out directly to our Data Protection Officer via <a href="mailto:privacy@saveachild.ng" className="text-[#0d472c] font-bold underline">privacy@saveachild.ng</a>.
              </blockquote>

            </motion.div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </div>
  );
}