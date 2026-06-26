"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  BookOpen,
  Heart,
  Droplets,
  Utensils,
  Zap,
  Users,
  ArrowRight,
  Globe,
} from "lucide-react";

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

function CounterStat({
  target,
  suffix,
  label,
  className = "text-center",
  numberClass = "text-3xl md:text-4xl font-bold text-zinc-950 mb-1",
  labelClass = "text-zinc-500 font-medium text-xs tracking-wider uppercase"
}: {
  target: number;
  suffix: string;
  label: string;
  className?: string;
  numberClass?: string;
  labelClass?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const duration = 1600;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className={className}>
      <div className={numberClass}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className={labelClass}>
        {label}
      </div>
    </div>
  );
}

const projects = [
  {
    icon: BookOpen,
    title: "Rural Education Program",
    desc: "Building schools in 8 communities with no prior access to formal education.",
    color: "text-emerald-700 bg-emerald-50 border-emerald-100",
    hoverBg: "hover:border-emerald-500/30 group-hover:bg-emerald-700 group-hover:text-white",
  },
  {
    icon: Heart,
    title: "Child Healthcare Support",
    desc: "Mobile clinics bringing vaccinations and pediatric care to remote areas.",
    color: "text-rose-700 bg-rose-50 border-rose-100",
    hoverBg: "hover:border-rose-500/30 group-hover:bg-rose-500 group-hover:text-white",
  },
  {
    icon: BookOpen,
    title: "School Supplies Initiative",
    desc: "Providing stationery and uniforms so finances never block attendance.",
    color: "text-amber-700 bg-amber-50 border-amber-100",
    hoverBg: "hover:border-amber-500/30 group-hover:bg-amber-600 group-hover:text-white",
  },
  {
    icon: Zap,
    title: "Youth Skills Development",
    desc: "Coding, tailoring, and digital literacy for young people aged 16–25.",
    color: "text-indigo-700 bg-indigo-50 border-indigo-100",
    hoverBg: "hover:border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white",
  },
  {
    icon: Droplets,
    title: "Clean Water Initiative",
    desc: "24 boreholes delivering safe drinking water to 2,100+ people.",
    color: "text-sky-700 bg-sky-50 border-sky-100",
    hoverBg: "hover:border-sky-500/30 group-hover:bg-sky-500 group-hover:text-white",
  },
  {
    icon: Utensils,
    title: "Community Food Support",
    desc: "Monthly food packs for conflict-displaced families in Borno State.",
    color: "text-orange-700 bg-orange-50 border-orange-100",
    hoverBg: "hover:border-orange-500/30 group-hover:bg-orange-500 group-hover:text-white",
  },
];

const missions = [
  {
    title: "Education That Empowers",
    desc: "We build classrooms, train teachers, and put textbooks in children's hands — because the future belongs to those who learn.",
    icon: BookOpen,
    stat: "8 schools built",
    image: "/images/edu-nigeria-1.jpg",
    imageAlt: "Nigerian school children learning in a classroom",
  },
  {
    title: "Healthcare That Heals",
    desc: "Our mobile clinics bring vaccinations, malaria treatment, and pediatric care directly to communities that have never seen a doctor.",
    icon: Heart,
    stat: "890 children treated",
    image: "/images/healthcare-1.jpg",
    imageAlt: "Healthcare workers providing medical care to African children",
  },
  {
    title: "Community That Thrives",
    desc: "We partner with local leaders, not around them. Every program is designed by and for the communities we serve.",
    icon: Users,
    stat: "340+ communities",
    image: "/images/community-1.jpg",
    imageAlt: "Community development program in rural Africa",
  },
];

const regions = [
  { flag: "🇳🇬", name: "Nigeria", count: "8,200+", label: "primary beneficiaries" },
  { flag: "🇺🇸", name: "United States", count: "420+", label: "diaspora donors" },
  { flag: "🇬🇧", name: "United Kingdom", count: "310+", label: "active supporters" },
  { flag: "🇨🇦", name: "Canada", count: "180+", label: "monthly donors" },
  { flag: "🇩🇪", name: "Germany", count: "95+", label: "corporate partners" },
  { flag: "🇿🇦", name: "South Africa", count: "140+", label: "regional advocates" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] text-zinc-900 antialiased">
      <Navbar />
      <PageTransition className="flex-1">
        
        {/* ─── PREMIUM CINEMATIC DARK HERO ─── */}
        <section className="relative overflow-hidden pt-48 pb-32 min-h-[90vh] flex items-center bg-[#09090b] text-white">
          
          {/* Immersive Background Image Configuration */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
              alt="Premium Community Background Infrastructure"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-35 brightness-[0.5] contrast-[1.05]"
            />
            {/* Elegant luxury vignette gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/85 to-transparent hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-[#09090b]/90" />
          </div>

          <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <div className="max-w-4xl space-y-6 text-left">
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-widest text-[10px]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Empowering African Communities Since 2015
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight"
              >
                Every Child Deserves a{" "}<br />
                <span className="text-emerald-400 italic font-normal relative inline-block">
                  Chance to Dream
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-amber-500"
                    viewBox="0 0 300 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,12 Q75,18 150,12 Q225,6 300,12"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={1}
                initial="hidden"
                animate="visible"
                className="text-base md:text-lg text-zinc-300 font-medium leading-relaxed max-w-2xl pt-2"
              >
                Providing institutional educational infrastructure, pediatric healthcare networks, structural resource management, and lifelines to vulnerable children across Nigerian communities.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={2}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-amber-500 text-zinc-950 hover:bg-amber-400 rounded-full font-bold uppercase tracking-wider text-xs px-8 h-12 shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <Link href="/donate">
                    <Heart size={14} className="mr-2 fill-current" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full font-bold uppercase tracking-wider text-xs px-8 h-12 border-white/30 text-white hover:bg-white hover:text-zinc-950 transition-colors"
                >
                  <Link href="/contact">Become a Volunteer</Link>
                </Button>
              </motion.div>

              {/* Sophisticated Glass-Morphic Metrics Hub */}
              <motion.div
                variants={fadeUp}
                custom={3}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center justify-start gap-3 pt-8"
              >
                {[
                  { target: 12500, suffix: "+", label: "Supported" },
                  { target: 340, suffix: "+", label: "Communities" },
                  { target: 450, suffix: "M+", label: "₦ Donated" },
                ].map(({ target, suffix, label }) => (
                  <CounterStat
                    key={label}
                    target={target}
                    suffix={suffix}
                    label={label}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 shadow-md"
                    numberClass="font-bold font-mono text-sm text-emerald-400"
                    labelClass="text-zinc-400 text-[10px] font-bold uppercase tracking-wider"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── MAIN HUB STATS BAR ─── */}
        <section className="py-20 bg-[#0d472c] text-white relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <CounterStat
                target={12500}
                suffix="+"
                label="Children Supported"
                numberClass="text-4xl md:text-5xl font-bold text-amber-400 mb-2 tracking-tight font-serif"
                labelClass="text-emerald-100 font-bold uppercase tracking-widest text-[11px]"
              />
              <CounterStat
                target={340}
                suffix="+"
                label="Communities Reached"
                numberClass="text-4xl md:text-5xl font-bold text-amber-400 mb-2 tracking-tight font-serif"
                labelClass="text-emerald-100 font-bold uppercase tracking-widest text-[11px]"
              />
              <CounterStat 
                target={1800} 
                suffix="+" 
                label="Active Volunteers" 
                numberClass="text-4xl md:text-5xl font-bold text-amber-400 mb-2 tracking-tight font-serif"
                labelClass="text-emerald-100 font-bold uppercase tracking-widest text-[11px]"
              />
              <CounterStat
                target={450}
                suffix="M+"
                label="₦ Donations Received"
                numberClass="text-4xl md:text-5xl font-bold text-amber-400 mb-2 tracking-tight font-serif"
                labelClass="text-emerald-100 font-bold uppercase tracking-widest text-[11px]"
              />
            </div>
          </div>
        </section>

        {/* ─── MISSION STRUCTURE ─── */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeader title="How We Create Change" subtitle="Our Mission" centered />
            <div className="space-y-20 max-w-5xl mx-auto mt-16">
              {missions.map((mission, i) => {
                const Icon = mission.icon;
                return (
                  <motion.div
                    key={mission.title}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
                  >
                    <div className="flex-1 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        <Icon size={22} className="text-[#0d472c]" />
                      </div>
                      <h3 className="font-serif font-bold text-3xl text-zinc-950 tracking-tight">
                        {mission.title}
                      </h3>
                      <p className="text-zinc-600 leading-relaxed text-[15px] font-normal">
                        {mission.desc}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-[#0d472c] text-xs font-bold uppercase tracking-wider">
                        {mission.stat}
                      </div>
                    </div>
                    <div className="flex-1 w-full">
                      <div className="aspect-[16/10] rounded-3xl overflow-hidden relative border border-zinc-200/60 shadow-md">
                        <Image
                          src={mission.image}
                          alt={mission.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── LIVE ACTIVE PROGRAMS GRID ─── */}
        <section className="py-28 bg-[#faf8f5] relative overflow-hidden border-y border-zinc-200/50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mt-4 tracking-tight">
                Our Active Programs
              </h2>
              <div className="h-1 w-16 bg-amber-500 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map(({ icon: Icon, title, desc, color, hoverBg }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm ${color} ${hoverBg}`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-zinc-400">
                        TRACK_0{i + 1}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-xl mb-2.5 text-zinc-950 group-hover:text-[#0d472c] transition-colors">
                      {title}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-zinc-300 hover:border-[#0d472c] bg-transparent text-zinc-800 hover:bg-[#0d472c] hover:text-white transition-all duration-300 px-10 h-12 text-xs font-bold uppercase tracking-wider"
              >
                <Link href="/projects">
                  View All Live Programs
                  <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ─── GLOBAL ECOSYSTEM SUPPORT ─── */}
        <section className="py-28 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
                Global Community
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mt-4 tracking-tight">
                Support Coming From Around the World
              </h2>
              <div className="h-1 w-16 bg-[#0d472c] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {regions.map(({ flag, name, count, label }, i) => (
                <motion.div
                  key={name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative bg-[#fbfaf7] rounded-2xl p-6 border border-zinc-200/60 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl bg-white p-2 rounded-xl shadow-sm border border-zinc-100">
                      {flag}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-zinc-900 tracking-tight">
                        {name}
                      </h4>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                        {label}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="block font-sans font-black text-2xl text-[#0d472c] tracking-tight">
                      {count}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 mt-14 bg-zinc-50 w-fit mx-auto px-6 py-2.5 rounded-full border border-zinc-200 shadow-sm">
              <Globe size={14} className="text-[#0d472c] animate-[spin_12s_linear_infinite]" />
              <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                Together across borders, united for one cause
              </span>
            </div>
          </div>
        </section>

        {/* ─── FOOTER SYSTEM CTA ─── */}
        <section className="py-24 bg-[#0d472c] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 max-w-xl mx-auto">
              <h2 className="text-4xl font-serif font-bold tracking-tight">
                Ready to Change a Life?
              </h2>
              <p className="text-zinc-200 text-sm leading-relaxed font-normal">
                Every contribution — no matter the size — moves a child closer to the life they deserve. Join thousands of supporters today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-500 text-zinc-950 hover:bg-amber-400 rounded-full font-bold uppercase tracking-wider text-xs px-10 h-12 shadow-lg"
                >
                  <Link href="/donate">Donate Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full font-bold uppercase tracking-wider text-xs px-10 h-12 border-2 border-white text-white hover:bg-white hover:text-zinc-950 transition-colors"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </div>
  );
}