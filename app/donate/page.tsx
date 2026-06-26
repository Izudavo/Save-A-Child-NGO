"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield, Heart, BookOpen, Droplets, CheckCircle2, Star, ArrowRight } from "lucide-react";
import { Variants } from "framer-motion"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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

const ngnAmounts = [5000, 10000, 25000, 50000];
const usdAmounts = [10, 25, 50, 100];

const impactNGN = [
  { amount: "₦5,000", icon: BookOpen, label: "Feeds a child for a month", badge: "Critical Care" },
  { amount: "₦10,000", icon: Heart, label: "Provides basic healthcare for one child", badge: "Medical Support" },
  { amount: "₦25,000", icon: BookOpen, label: "Covers school supplies for an entire year", badge: "Academic Legacy" },
  { amount: "₦50,000", icon: Droplets, label: "Funds a community water purification filter", badge: "Infrastructure" },
];

const impactUSD = [
  { amount: "$10", icon: BookOpen, label: "Buys textbooks for 2 children", badge: "Literacy" },
  { amount: "$25", icon: Heart, label: "Provides a full medical checkup for a child", badge: "Clinical Care" },
  { amount: "$50", icon: BookOpen, label: "Supports healthcare for a child for 3 months", badge: "Sustained Aid" },
  { amount: "$100", icon: Droplets, label: "Sponsors a child's education for a full term", badge: "Foundational Gift" },
];

export default function Donate() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const amounts = currency === "NGN" ? ngnAmounts : usdAmounts;
  const symbol = currency === "NGN" ? "₦" : "$";
  const impacts = currency === "NGN" ? impactNGN : impactUSD;

  const displayAmount = customAmount ? `${symbol}${Number(customAmount).toLocaleString()}` : (selectedAmount ? `${symbol}${selectedAmount.toLocaleString()}` : "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] antialiased text-zinc-900">
      <Navbar />
      <PageTransition className="flex-1">
        
        {/* ─── HERO SECTION ─── */}
        <section className="relative pt-36 pb-24 overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Philanthropy Portal</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-6">
                Your Gift Changes <br />
                <span className="text-emerald-400 italic font-normal">a Child's Story</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-normal max-w-2xl">
                Every contribution transfers capital directly into foundational infrastructure and care for youth. Guided by structural radical transparency, zero overhead deductions, and auditable metrics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── DONATION COMPONENT MATRIX ─── */}
        <section className="py-20 bg-[#faf8f5]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* MAIN FORM PANEL */}
              <motion.div
                className="lg:col-span-7"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div 
                      key="form-panel"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white border border-zinc-200 shadow-[0_30px_80px_rgba(0,0,0,0.03)] rounded-[2rem] p-8 md:p-10"
                    >
                      <h2 className="font-serif font-bold text-2xl md:text-3xl mb-8 text-zinc-950 tracking-tight">Select Contribution Framework</h2>

                      {/* Config Options Row */}
                      <div className="flex flex-wrap gap-4 items-center justify-between mb-8 pb-6 border-b border-zinc-100">
                        {/* Currency Toggle */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2.5">Preferred Currency</p>
                          <div className="flex items-center gap-1.5 p-1 bg-zinc-50 border border-zinc-200 rounded-xl w-fit">
                            {(["NGN", "USD"] as const).map((cur) => (
                              <button
                                key={cur}
                                onClick={() => { setCurrency(cur); setSelectedAmount(null); setCustomAmount(""); }}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                  currency === cur
                                    ? "bg-[#0d472c] text-white shadow-sm"
                                    : "text-zinc-500 hover:text-zinc-950"
                                  }`}
                              >
                                {cur === "NGN" ? "₦ NGN" : "$ USD"}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Donation Cadence */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2.5">Frequency Cycle</p>
                          <div className="flex items-center gap-1.5 p-1 bg-zinc-50 border border-zinc-200 rounded-xl w-fit">
                            {([
                              { value: "one-time" as const, label: "One-Time" },
                              { value: "monthly" as const, label: "Monthly Support" },
                            ]).map(({ value, label }) => (
                              <button
                                key={value}
                                onClick={() => setDonationType(value)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                  donationType === value
                                    ? "bg-amber-700 text-white shadow-sm"
                                    : "text-zinc-500 hover:text-zinc-950"
                                }`}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Preset Tiers */}
                      <p className="text-xs font-black uppercase tracking-widest text-zinc-950 mb-3.5">Curated Tiers</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {amounts.map((amount) => (
                          <motion.button
                            key={amount}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                            className={`py-4 rounded-xl text-center font-serif font-bold text-lg border transition-all duration-300 ${
                              selectedAmount === amount && !customAmount
                                ? "border-[#0d472c] bg-emerald-50/50 text-[#0d472c] ring-2 ring-[#0d472c]/10"
                                : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400"
                            }`}
                          >
                            {symbol}{amount.toLocaleString()}
                          </motion.button>
                        ))}
                      </div>

                      {/* Custom Amount Entry */}
                      <div className="relative mb-8">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-serif font-bold text-lg">{symbol}</span>
                        <Input
                          type="number"
                          placeholder="Enter tailored custom denomination amount"
                          value={customAmount}
                          onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                          className="pl-9 h-14 text-base border-zinc-200 rounded-xl placeholder:text-zinc-400 focus:ring-2 focus:ring-[#0d472c]"
                        />
                      </div>

                      {/* Donor Payload Credentials Form */}
                      <p className="text-xs font-black uppercase tracking-widest text-zinc-950 mb-4">Patron Identification</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            required
                            placeholder="Full Name / Corporate Entity"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="h-12 border-zinc-200 rounded-xl"
                          />
                          <Input
                            required
                            type="email"
                            placeholder="Secure Email Address"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="h-12 border-zinc-200 rounded-xl"
                          />
                        </div>
                        <Textarea
                          placeholder="Optional dedication narrative or corporate matching index logs..."
                          rows={3}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="resize-none border-zinc-200 rounded-xl p-4"
                        />

                        {/* Standard Premium Protection Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-zinc-100 my-6">
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                            <Lock size={14} className="text-[#0d472c]" />
                            <span>SSL Security Secured</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                            <Shield size={14} className="text-[#0d472c]" />
                            <span>256-Bit Bank Level Encryption</span>
                          </div>
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                            <Star size={14} className="text-amber-600" />
                            <span>Verified 501(c) Status</span>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={!displayAmount}
                          className="w-full bg-[#0d472c] text-white hover:bg-emerald-900 rounded-xl font-bold h-14 text-sm uppercase tracking-widest transition-all duration-300 shadow-md disabled:bg-zinc-100 disabled:text-zinc-400 group"
                        >
                          <Heart size={16} className="mr-2 fill-current text-amber-400" />
                          Initiate Donation {displayAmount} via Paystack
                          <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <p className="text-center text-[10px] text-zinc-400 font-medium">
                          Secure gateway systems provided seamlessly by Paystack. Proprietary account metrics are never archived.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success-panel"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white border border-zinc-200 rounded-[2rem] p-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.03)]"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={36} className="text-[#0d472c]" />
                      </div>
                      <h3 className="font-serif font-bold text-3xl text-zinc-950 mb-3">Sincere Appreciation, {form.name || "Patron"}</h3>
                      <p className="text-zinc-600 font-medium mb-6 max-w-md mx-auto">
                        Your transaction contribution asset of <span className="font-serif font-bold text-[#0d472c] text-xl">{displayAmount}</span> has processed successfully. An institutional certificate and receipt have been dispatched to <span className="text-zinc-950 font-semibold">{form.email}</span>.
                      </p>
                      <div className="h-[1px] bg-zinc-100 w-24 mx-auto mb-8" />
                      <Button
                        variant="outline"
                        className="rounded-xl border-zinc-300 font-bold uppercase text-xs tracking-widest px-6 h-12"
                        onClick={() => { setSubmitted(false); setSelectedAmount(null); setCustomAmount(""); setForm({ name: "", email: "", message: "" }); }}
                      >
                        Execute Another Framework
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* IMPACT & PROMISE SIDEBAR */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Dynamic Metrics Vector */}
                <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h3 className="font-serif font-bold text-xl mb-5 text-zinc-950 tracking-tight">Allocation Output Vectors</h3>
                  <div className="space-y-4">
                    {impacts.map(({ amount, icon: Icon, label, badge }, i) => (
                      <div
                        key={i}
                        className="group flex gap-4 p-5 bg-white border border-zinc-200/80 rounded-2xl shadow-sm hover:border-zinc-400 transition-all duration-300"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#faf8f5] border border-zinc-200 flex items-center justify-center shrink-0 group-hover:bg-[#0d472c] group-hover:text-white transition-colors duration-300">
                          <Icon size={16} />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-base text-zinc-950">{amount}</span>
                            <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-zinc-600">{badge}</span>
                          </div>
                          <p className="text-xs font-medium text-zinc-500 leading-relaxed">{label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Editorial Promise Card */}
                <motion.div
                  variants={fadeUp}
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-zinc-950 text-white rounded-[1.5rem] p-8 relative overflow-hidden"
                >
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                  <h4 className="font-serif font-bold text-xl mb-4 text-white tracking-tight">Our Institutional Promise</h4>
                  <ul className="space-y-3.5">
                    {[
                      "100% of deployment capital logs target programs directly",
                      "Quarterly itemized structural transparency metrics reports",
                      "Independent ecosystem accounting annual corporate audits",
                      "Guaranteed zero advertising spam communications protocols",
                    ].map((promise, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-zinc-400 font-medium leading-relaxed">
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{promise}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Global Sovereign Footprint Tracker */}
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white border border-zinc-200 rounded-2xl p-6 text-center"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3.5">Sovereign Giving Footprint Networks</p>
                  <div className="flex items-center justify-center gap-4 flex-wrap text-2xl filter drop-shadow-sm">
                    {["🇳🇬", "🇺🇸", "🇬🇧", "🇨🇦", "🇩🇪", "🇿🇦"].map((flag) => (
                      <span key={flag} className="hover:scale-110 transition-transform duration-300 cursor-default">{flag}</span>
                    ))}
                  </div>
                </motion.div>
                
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </div>
  );
}