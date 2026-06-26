"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { motion, Variants} from "framer-motion";
import { Scale, Heart, AlertCircle, HelpCircle } from "lucide-react";

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

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] antialiased text-zinc-900">
      <Navbar />
      <PageTransition className="flex-1">
        
        {/* HEADER SECTION */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full mb-6 backdrop-blur-md">
                <Scale size={12} className="text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300">Operational Mandate Accord</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight mb-4">
                Terms of Use
              </h1>
              <p className="text-zinc-400 font-medium text-sm md:text-base">
                Effective System Agreement Framework • Updated June 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* TERMS CONTENT MATRIX */}
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
                  <HelpCircle size={20} className="text-[#0d472c]" /> 1. Institutional Acceptance
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  By interfacing with the digital networks, visual asset databases, and processing hubs managed by SAVE A CHILD NGO, you voluntarily authenticate full alignment with this framework. If you find yourself in non-agreement with these operational rules, please terminate interface connections immediately.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <Heart size={20} className="text-[#0d472c]" /> 2. Philanthropic Contribution Protocols
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  All transactional processing actions executed inside this system represent finalized operational grants configured for humanitarian deployment. Given the regulatory structural distribution schedules enforced by the platform:
                </p>
                <ul className="space-y-2 pl-6 list-disc text-sm text-zinc-600 font-medium">
                  <li>Contributions represent unconditional financial assets assigned directly to field operations.</li>
                  <li>Reversals and refund queries are subject to verified system transaction error reviews via Paystack parameters within a 7-day administrative cycle.</li>
                </ul>
              </div>

              <hr className="border-zinc-100" />

              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <AlertCircle size={20} className="text-[#0d472c]" /> 3. Intellectual Domain & Usage
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  The visual narratives, archival image arrays, design systems, logos, and custom code components housed within this environment are the unique proprietary assets of SAVE A CHILD NGO. Any secondary distribution, scraping, commercial reproduction, or presentation without our explicit written consent is prohibited.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <Scale size={20} className="text-[#0d472c]" /> 4. Jurisdiction & Statutory Venue
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  These regulatory clauses are defined in strict alignment with the statutory constitutional law framework of the Federal Republic of Nigeria. Legal proceedings related to this platform fall under the exclusive jurisdiction of the judicial court networks of Lagos State.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </div>
  );
}