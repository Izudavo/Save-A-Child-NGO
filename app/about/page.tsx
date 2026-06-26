"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, Variants } from "framer-motion";
import { Heart, Eye, Shield, Users, Globe, BookOpen, Lightbulb, ArrowUpRight } from "lucide-react";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: easing,
    },
  }),
};

const teamMembers = [
  { name: "Dr. Amaka Osei", role: "Executive Director", bio: "20+ years in child welfare and community development across West Africa.", initial: "AO" },
  { name: "Emeka Nwosu", role: "Director of Operations", bio: "Former UNICEF program manager with expertise in sustainable NGO operations.", initial: "EN" },
  { name: "Fatima Al-Hassan", role: "Head of Education Programs", bio: "Passionate educator who has built schools in 12 rural communities.", initial: "FA" },
  { name: "Chisom Adeyemi", role: "Healthcare Director", bio: "Pediatric doctor dedicated to bringing quality healthcare to underserved children.", initial: "CA" },
  { name: "Tunde Bakare", role: "Community Engagement Lead", bio: "Bridge-builder connecting diaspora donors with grassroots Nigerian communities.", initial: "TB" },
  { name: "Ngozi Eze", role: "Finance & Compliance", bio: "Certified accountant ensuring every naira and dollar reaches those who need it most.", initial: "NE" },
];

const timeline = [
  { year: "2015", title: "Founded", desc: "SAVE A CHILD was established in Lagos by a group of 5 passionate advocates after witnessing severe educational neglect in rural communities." },
  { year: "2017", title: "First School Built", desc: "Completed our first primary school in Oyo State, providing education for 240 children who previously walked 8km to the nearest school." },
  { year: "2019", title: "Healthcare Expansion", desc: "Launched our mobile health clinic program, bringing medical care to 18 underserved communities in the Niger Delta region." },
  { year: "2021", title: "International Recognition", desc: "Received the African NGO Excellence Award and expanded our donor base to 6 countries across 3 continents." },
  { year: "2023", title: "Digital Learning Centers", desc: "Opened 12 computer literacy centers equipping youth with digital skills for the modern economy." },
  { year: "2025", title: "10 Years of Impact", desc: "Celebrating a decade of impact: 12,500+ children supported, 340+ communities reached, and still growing." },
];

const values = [
  { icon: Heart, label: "Compassion", desc: "Every action we take is driven by genuine love for children and communities." },
  { icon: Shield, label: "Integrity", desc: "Transparent operations with full accountability on every donation received." },
  { icon: Users, label: "Community First", desc: "We build with communities, not for them. Local leadership is central to every program." },
  { icon: Globe, label: "Sustainability", desc: "Programs designed to outlast our direct involvement and empower self-sufficiency." },
  { icon: BookOpen, label: "Education", desc: "We believe education is the most powerful tool for breaking cycles of poverty." },
  { icon: Lightbulb, label: "Innovation", desc: "Constantly seeking smarter, more effective approaches to child welfare challenges." },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] text-zinc-900 antialiased">
      <Navbar />
      <PageTransition className="flex-1">
        
        {/* ─── HERO SPLIT LAYOUT (REDUCED IMAGE SCALE) ─── */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-[#faf8f5]">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
              
              <motion.div 
                variants={fadeUp} 
                initial="hidden" 
                animate="visible" 
                className="lg:col-span-8 space-y-6 max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Our Heritage</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-zinc-900 leading-[1.1] tracking-tight">
                  A Movement Born From <span className="text-emerald-700 italic font-normal">Purpose</span>
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-normal pt-2">
                  SAVE A CHILD began with a simple belief: that geography should never determine a child's destiny. Founded in 2015 in Lagos, Nigeria, we have grown from a small volunteer group into a recognized force for change — touching the lives of over 12,500 children across Nigeria and beyond.
                </p>
              </motion.div>

              {/* Compressed image frame layout (lg:col-span-4) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: easing, delay: 0.2 }}
                className="lg:col-span-4 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[10/12] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              >
                <Image 
                  src="/images/nigeria-independence.jpg" 
                  alt="SAVE A CHILD community movement baseline impact"
                  fill
                  priority
                  className="object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-white/80 p-4 rounded-xl border border-white/40 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Headquarters</p>
                    <p className="text-sm font-serif font-bold text-zinc-900">Lagos, Nigeria</p>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/50 px-2 py-0.5 rounded-md">Est. 2015</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── MISSION / VISION PANELS ─── */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
              
              <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-[1px] bg-zinc-200/60 -translate-x-1/2" />

              {[
                {
                  icon: Heart,
                  label: "Our Mission",
                  accent: "text-emerald-700 bg-emerald-50/60 border-emerald-100",
                  number: "01",
                  text: "To provide holistic support — education, healthcare, and community empowerment — to vulnerable children and families across Nigeria, creating pathways out of poverty that are sustainable and dignified.",
                },
                {
                  icon: Eye,
                  label: "Our Vision",
                  accent: "text-amber-600 bg-amber-50/60 border-amber-100",
                  number: "02",
                  text: "A Nigeria — and ultimately an Africa — where every child has access to quality education, healthcare, and the opportunity to live a full, safe, and meaningful life regardless of where they were born.",
                },
              ].map(({ icon: Icon, label, accent, number, text }, i) => (
                <motion.div
                  key={label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative p-10 md:p-12 flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-10">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm ${accent}`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-4xl font-serif font-light text-zinc-200 group-hover:text-zinc-300 tracking-tight transition-colors">
                        {number}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold mb-5 text-zinc-900 tracking-tight">
                      {label}
                    </h3>
                    <p className="text-zinc-600 text-[16px] leading-relaxed font-normal max-w-xl">
                      {text}
                    </p>
                  </div>

                  <div className="w-12 h-[2px] bg-zinc-200 mt-10 group-hover:w-20 group-hover:bg-zinc-900 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CORE VALUES GRID ─── */}
        <section className="py-32 bg-[#faf8f5] border-y border-zinc-200/50 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
                What Drives Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mt-4 tracking-tight">
                Our Core Values
              </h2>
              <div className="h-1 w-16 bg-amber-500 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
              {values.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative flex flex-col items-start bg-transparent p-4 rounded-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-zinc-200/60 flex items-center justify-center mb-5 group-hover:border-emerald-600/30 group-hover:shadow-md transition-all duration-300">
                    <Icon size={20} className="text-emerald-700" />
                  </div>
                  
                  <div className="relative pl-0 space-y-2">
                    <h4 className="font-serif font-bold text-xl text-zinc-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                      {label}
                    </h4>
                    <p className="text-[14px] text-zinc-500 leading-relaxed font-normal">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TIMELINE ─── */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeader title="Our Journey" subtitle="A Decade of Impact" centered />
            <div className="relative max-w-3xl mx-auto mt-16">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 md:-translate-x-px" />
              {timeline.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                    <div className="bg-white border border-zinc-200/70 rounded-2xl p-6 hover:shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow">
                      <span className="text-emerald-700 font-bold text-sm font-mono tracking-wider">{year}</span>
                      <h4 className="font-serif font-bold text-lg mt-1 mb-2 text-zinc-900">{title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-emerald-700 shadow-sm z-10" />
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SOLID LUXURY EXECUTIVE TEAM GRID (SOLID SOLID BACKGROUNDS) ─── */}
        <section className="py-32 bg-[#0d472c] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-emerald-950 rounded-full blur-3xl opacity-50 pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-24">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-950/60 border border-emerald-900/60 px-3 py-1.5 rounded-full">
                The Governance
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 tracking-tight">
                Meet Our Leadership Team
              </h2>
              <div className="mt-4 h-1 w-20 bg-amber-400 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
              {teamMembers.map(({ name, role, bio, initial }, i) => (
                <motion.div
                  key={name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative bg-[#125334] border border-[#16633e] rounded-[2rem] p-8 pt-12 hover:bg-[#155d3b] hover:border-emerald-600/40 shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500 flex flex-col justify-between"
                  data-testid={`card-team-${i}`}
                >
                  <div className="absolute -top-7 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-emerald-950 font-serif font-bold text-lg flex items-center justify-center shadow-lg transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                    {initial}
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-2xl text-white tracking-tight leading-snug">
                          {name}
                        </h4>
                        <p className="text-amber-400 font-medium text-xs uppercase tracking-widest mt-1">
                          {role}
                        </p>
                      </div>
                      <ArrowUpRight size={16} className="text-white/20 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    
                    <p className="text-emerald-100/80 text-[14px] leading-relaxed font-normal mt-6 border-t border-emerald-800/60 pt-5">
                      {bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </div>
  );
}