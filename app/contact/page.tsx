"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ChevronDown, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: easing },
  }),
};

const faqs = [
  { q: "How is my donation used?", a: "100% of your donation goes directly to our programs. Administrative and operational costs are covered separately by our institutional partners. Every quarter, we publish a detailed financial report on our website." },
  { q: "Can I volunteer with SAVE A CHILD?", a: "Absolutely! We welcome volunteers with diverse skills — teaching, medical, logistics, communications, and more. Visit our Contact page, fill out the form selecting 'Volunteering' as your subject, and our team will reach out within 48 hours." },
  { q: "Do you operate outside Nigeria?", a: "Our programs are 100% focused in Nigeria, but we have a growing international diaspora supporter network in the UK, USA, Canada, Germany, and South Africa who help fund and promote our work." },
  { q: "How can my organization partner with you?", a: "We welcome corporate partnerships, foundation grants, and inter-NGO collaborations. Please reach out through our contact form selecting 'Partnership Inquiry' as the subject. Our partnerships team will respond within 5 business days." },
  { q: "Is my donation tax-deductible?", a: "SAVE A CHILD is registered with the Corporate Affairs Commission of Nigeria (RC: 1234567). For donations from the USA and UK, our fiscal sponsors can issue tax-deductible receipts. Please contact us for details specific to your jurisdiction." },
  { q: "How do I know my donation is reaching children?", a: "We publish quarterly impact reports with verifiable data, GPS-tagged project photos, beneficiary testimonials, and independent audit reports. Subscribe to our newsletter to receive these reports automatically." },
  { q: "Can I visit your projects in person?", a: "Yes! We organize quarterly field visits for major donors and partners. These site visits allow you to meet the children and communities your contributions support directly. Contact us to be added to the next field visit group." },
  { q: "How do I set up a monthly recurring donation?", a: "On our Donate page, simply toggle to 'Monthly' before completing your donation. Your card will be charged on the same date each month, and you can cancel anytime by emailing us at giving@saveachild.ng." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] text-zinc-900 antialiased">
      <Navbar />
      <PageTransition className="flex-1">
        
        {/* ─── HERO SECTION ─── */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#faf8f5]">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">Get in Touch</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-zinc-900 leading-[1.1] tracking-tight">
                Let's Build Something <span className="text-emerald-700 italic font-normal">Together</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-normal pt-4 max-w-2xl">
                Whether you want to donate, volunteer, partner, or simply learn more about our foundational workflows — we would love to connect. Our team responds reliably within 24–48 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── CONTACT HUB: INFO & COMMUNICATIONS FORM ─── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto items-start">
              
              {/* Informational Columns */}
              <div className="lg:col-span-2 space-y-6">
                {[
                  { icon: MapPin, label: "Our Office Headquarters", value: "14 Adeniran Ogunsanya Street\nSurulere, Lagos, Nigeria" },
                  { icon: Mail, label: "Direct Inquiries & Grants", value: "info@saveachild.ng\ngiving@saveachild.ng" },
                  { icon: Phone, label: "Hotlines & Communications", value: "+234 801 234 5678\n+234 802 345 6789" },
                  { icon: Clock, label: "Operational Standard Hours", value: "Monday – Friday: 9am – 6pm\nSaturday: 10am – 2pm" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-5 bg-[#fdfcfb] border border-zinc-200 rounded-2xl p-6 hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:border-emerald-600/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-emerald-700" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-zinc-950 uppercase tracking-wider mb-1.5">{label}</p>
                      <p className="text-sm text-zinc-600 font-medium leading-relaxed whitespace-pre-line">{value}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Premium Foundation Card replacing inaccurate real-time map trackers */}
                <motion.div 
                  className="bg-[#faf8f5] border-2 border-dashed border-zinc-200 rounded-2xl p-6 space-y-4 relative overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-emerald-700 shrink-0" size={24} />
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-900">Verified Legal Identity</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    SAVE A CHILD is fully registered with the Corporate Affairs Commission of Nigeria <span className="text-zinc-950 font-bold">(RC: 1234567)</span>. All localized grassroot operations are thoroughly vetted and audit-compliant.
                  </p>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-lg w-max">
                    <HeartHandshake size={13} />
                    <span>Fiscal Transparency Guaranteed</span>
                  </div>
                </motion.div>
              </div>

              {/* Secure Communications Terminal Form Frame */}
              <motion.div
                className="lg:col-span-3"
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="bg-[#fdfcfb] border border-zinc-300 rounded-3xl p-8 lg:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.02)]">
                  {!submitted ? (
                    <>
                      <h2 className="font-serif font-bold text-2xl md:text-3xl tracking-tight mb-2 text-zinc-950">Send Us a Message</h2>
                      <p className="text-xs text-zinc-500 mb-8 font-medium">Fill down your details below and our management track will align your request.</p>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 mb-2 block">Full Name</label>
                            <Input
                              required
                              placeholder="Your full name"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className="h-11 bg-white border-zinc-300 rounded-xl px-4 text-sm focus:ring-2 focus:ring-emerald-700 text-zinc-950 placeholder:text-zinc-400 font-medium font-sans"
                              data-testid="input-contact-name"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 mb-2 block">Email Address</label>
                            <Input
                              required
                              type="email"
                              placeholder="your@email.com"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className="h-11 bg-white border-zinc-300 rounded-xl px-4 text-sm focus:ring-2 focus:ring-emerald-700 text-zinc-950 placeholder:text-zinc-400 font-medium font-sans"
                              data-testid="input-contact-email"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 mb-2 block">Subject Track</label>
                          <div className="relative">
                            <select
                              required
                              className="w-full h-11 px-4 rounded-xl border border-zinc-300 bg-white text-zinc-950 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-700 appearance-none transition-all cursor-pointer"
                              value={form.subject}
                              onChange={(e) => setForm({ ...form, subject: e.target.value })}
                              data-testid="select-contact-subject"
                            >
                              <option value="" disabled>Select a subject track</option>
                              <option>General Inquiry</option>
                              <option>Donation Question</option>
                              <option>Volunteering</option>
                              <option>Partnership Inquiry</option>
                              <option>Media & Press</option>
                              <option>Other</option>
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-extrabold uppercase tracking-wider text-zinc-900 mb-2 block">Message Body</label>
                          <Textarea
                            required
                            rows={5}
                            placeholder="Tell us what's on your mind..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="resize-none bg-white border-zinc-300 rounded-xl p-4 text-sm focus:ring-2 focus:ring-emerald-700 text-zinc-950 placeholder:text-zinc-400 font-medium font-sans leading-relaxed"
                            data-testid="textarea-contact-message"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-[#0d472c] text-white hover:bg-[#09331f] rounded-xl font-bold uppercase tracking-wider text-xs h-12 shadow-md transition-all duration-300"
                          data-testid="button-contact-submit"
                        >
                          Send Secure Message
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12 space-y-5">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm animate-bounce">
                        <CheckCircle2 size={32} className="text-emerald-700" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif font-bold text-2xl md:text-3xl text-zinc-950 tracking-tight">Message Encrypted & Received!</h3>
                        <p className="text-zinc-600 text-sm leading-relaxed max-w-sm mx-auto font-medium">
                          Thank you for reaching out. Our administration dispatch will process your track layout details within 24–48 hours.
                        </p>
                      </div>
                      <div className="pt-4">
                        <Button
                          variant="outline"
                          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                          className="rounded-xl border-zinc-300 hover:bg-zinc-50 font-bold uppercase tracking-wider text-xs px-6 h-10 text-zinc-700"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── PREMIUM FAQS COMPONENT ─── */}
        <section className="py-24 bg-[#faf8f5] border-t border-zinc-200/60">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center space-y-3 mb-16">
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                Got Questions?
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-950 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map(({ q, a }, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="bg-[#fdfcfb] border border-zinc-300 rounded-2xl overflow-hidden shadow-sm transition-colors duration-300"
                    data-testid={`faq-${i}`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-zinc-50/80 transition-colors group"
                    >
                      <span className="font-bold text-zinc-950 tracking-tight pr-4 text-base md:text-gap group-hover:text-emerald-800 transition-colors">
                        {q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-zinc-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-700" : ""}`}
                      />
                    </button>
                    
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3, ease: easing }}
                        className="overflow-hidden border-t border-zinc-200/60"
                      >
                        <p className="p-5 md:p-6 text-sm text-zinc-600 leading-relaxed font-normal bg-zinc-50/40">
                          {a}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </div>
  );
}