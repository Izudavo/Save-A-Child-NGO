"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { motion, Variants } from "framer-motion";
import { Cookie, Settings, ShieldCheck, Database } from "lucide-react";

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

export default function CookiePolicy() {
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
                <Cookie size={12} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Session Optimization Audit</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight mb-4">
                Cookie Declaration
              </h1>
              <p className="text-zinc-400 font-medium text-sm md:text-base">
                Minimal Tracking Protocol Matrix • Verified Active 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* COOKIES CONTENT MATRIX */}
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
                  <ShieldCheck size={20} className="text-[#0d472c]" /> 1. Intentional Minimalism
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  Our application design rejects third-party behavioral fingerprinting. We use technical tracking items to evaluate localized interactions, process dynamic active components inside the global interface (such as currency changes), and ensure financial security across Paystack transaction arrays.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <Database size={20} className="text-[#0d472c]" /> 2. Classification Architecture
                </h2>
                <div className="space-y-4 pt-2">
                  <div className="p-5 border border-zinc-200 rounded-2xl bg-zinc-50/50">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-950 mb-1">Essential Architecture Cookies</p>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Mandatory parameters allocated to lock security conditions, state memory execution inside the Framer Motion architecture, and payment state transfers. Disabling these via hardware adjustments degrades performance.
                    </p>
                  </div>

                  <div className="p-5 border border-zinc-200 rounded-2xl bg-zinc-50/50">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-950 mb-1">Functional Preferences Cookies</p>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Maintains your selected tracking currencies (NGN vs USD) or interface configurations across sub-directory links.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-zinc-100" />

              <div className="space-y-4">
                <h2 className="font-serif font-bold text-2xl text-zinc-950 flex items-center gap-3">
                  <Settings size={20} className="text-[#0d472c]" /> 3. System Management Rights
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                  You can purge, decline, or adjust local tracking cookies through your native browser configuration console. Note that modifying these records can break security validation sequences and dynamic parameters across our active donation panels.
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