"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const projects = [
  {
    id: 1,
    title: "Rural Education Program",
    category: "Education",
    status: "Active",
    location: "Oyo State, Nigeria",
    goal: 5000000,
    raised: 3750000,
    currency: "₦",
    beneficiaries: 1240,
    desc: "Building and equipping primary schools in 8 rural communities where children previously had no access to formal education. The program covers construction, teacher training, and learning materials.",
    color: "bg-emerald-700",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-800",
    image: "/images/edu-nigeria-1.jpg",
    imgHeight: "h-64",
    featured: true,
  },
  {
    id: 2,
    title: "School Supplies Initiative",
    category: "Education",
    status: "Active",
    location: "Lagos & Ogun States",
    goal: 2000000,
    raised: 1800000,
    currency: "₦",
    beneficiaries: 3500,
    desc: "Providing notebooks, pens, school bags, and uniforms to children from low-income families so that financial hardship never becomes a barrier.",
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    textColor: "text-amber-800",
    image: "/images/joy-reading.jpg",
    imgHeight: "h-52",
    featured: false,
  },
  {
    id: 3,
    title: "Child Healthcare Support",
    category: "Healthcare",
    status: "Urgent",
    location: "Ido-Osi, Ekiti State",
    goal: 8000000,
    raised: 2400000,
    currency: "₦",
    beneficiaries: 890,
    desc: "Mobile medical clinics delivering vaccinations, malaria treatment, nutritional support, and pediatric care to children in remote communities without access to hospitals.",
    color: "bg-rose-600",
    lightColor: "bg-rose-50",
    textColor: "text-rose-800",
    image: "/images/healthcare-2.jpg",
    imgHeight: "h-56",
    featured: false,
  },
  {
    id: 4,
    title: "Youth Skills Development",
    category: "Empowerment",
    status: "Active",
    location: "Abuja & Kaduna",
    goal: 3500000,
    raised: 2100000,
    currency: "₦",
    beneficiaries: 620,
    desc: "Vocational training programs teaching coding, tailoring, welding, and digital literacy to young people aged 16–25, equipping them for economic independence.",
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    textColor: "text-amber-800",
    image: "/images/women-skills.jpg",
    imgHeight: "h-52",
    featured: false,
  },
  {
    id: 5,
    title: "Clean Water Initiative",
    category: "Infrastructure",
    status: "Completed",
    location: "Kano State",
    goal: 4000000,
    raised: 4000000,
    currency: "₦",
    beneficiaries: 2100,
    desc: "Drilled and installed 24 boreholes providing clean, safe drinking water to villages where children were drinking from contaminated rivers, reducing waterborne diseases by 70%.",
    color: "bg-sky-600",
    lightColor: "bg-sky-50",
    textColor: "text-sky-800",
    image: "/images/water-1.jpg",
    imgHeight: "h-64",
    featured: true,
  },
  {
    id: 6,
    title: "Community Food Support",
    category: "Nutrition",
    status: "Active",
    location: "Borno State",
    goal: 6000000,
    raised: 1500000,
    currency: "₦",
    beneficiaries: 4200,
    desc: "Monthly food packs distributed to families displaced by conflict, ensuring children receive adequate nutrition during their most vulnerable developmental years.",
    color: "bg-orange-600",
    lightColor: "bg-orange-50",
    textColor: "text-orange-800",
    image: "/images/food-1.jpg",
    imgHeight: "h-56",
    featured: false,
  },
  {
    id: 7,
    title: "Digital Learning Centers",
    category: "Education",
    status: "Active",
    location: "Abuja, Nigeria",
    goal: 7500000,
    raised: 5250000,
    currency: "₦",
    beneficiaries: 1800,
    desc: "12 computer labs equipped with reliable internet, solar power, and trained instructors — bringing 21st-century digital literacy to communities.",
    color: "bg-emerald-700",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-800",
    image: "/images/edu-nigeria-2.jpg",
    imgHeight: "h-52",
    featured: false,
  },
  {
    id: 8,
    title: "Diaspora Mentorship Network",
    category: "Empowerment",
    status: "Active",
    location: "Virtual + Lagos",
    goal: 1500000,
    raised: 900000,
    currency: "₦",
    beneficiaries: 350,
    desc: "Connecting Nigerian children with successful diaspora professionals for weekly mentorship sessions, career guidance, and scholarship opportunities abroad.",
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    textColor: "text-amber-800",
    image: "/images/community-1.jpg",
    imgHeight: "h-52",
    featured: false,
  },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-950 border-emerald-300",
  Completed: "bg-zinc-200 text-zinc-900 border-zinc-300",
  Urgent: "bg-rose-100 text-rose-950 border-rose-300 animate-pulse",
};

const categories = ["All", "Education", "Healthcare", "Empowerment", "Infrastructure", "Nutrition"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

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
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">What We Do</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-zinc-900 leading-[1.1] tracking-tight">
                Programs That <span className="text-emerald-700 italic font-normal">Change Lives</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-normal pt-4 max-w-2xl">
                Each project is carefully co-designed with local communities to guarantee sustainable, measurable impact. From classrooms to mobile medical clinics, witness stories of pure transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── STICKY FILTER CONTROL ─── */}
        <section className="py-5 bg-white/90 backdrop-blur-md border-b border-zinc-200/60 sticky top-20 z-30 transition-all">
          <div className="container mx-auto px-6">
            <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide max-w-6xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  data-testid={`filter-${cat.toLowerCase()}`}
                  className={`shrink-0 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#0d472c] text-white shadow-md shadow-emerald-900/10"
                      : "bg-zinc-100 text-zinc-700 hover:bg-emerald-50 hover:text-emerald-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DYNAMIC IMAGE MASONRY GRID ─── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filtered.map(({ id, title, category, status, location, goal, raised, currency, beneficiaries, desc, color, lightColor, textColor, featured, image, imgHeight }, i) => {
                const progress = Math.min(Math.round((raised / goal) * 100), 100);
                return (
                  <motion.div
                    key={id}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className={`bg-[#fdfcfb] border border-zinc-300 rounded-3xl overflow-hidden hover:shadow-[0_24px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 group flex flex-col justify-between ${
                      featured && activeCategory === "All" ? "lg:col-span-2" : "col-span-1"
                    }`}
                    data-testid={`card-project-${id}`}
                  >
                    <div>
                      {/* Premium Editorial Image Header */}
                      <div className={`relative w-full ${imgHeight} overflow-hidden bg-zinc-200 group-hover:brightness-95 transition-all duration-500`}>
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        
                        {/* Floating Status Badge inside Image container */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className={`text-[11px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-sm ${statusColors[status]}`}>
                            {status}
                          </span>
                        </div>

                      
                      </div>

                      {/* Card Context Content */}
                      <div className="p-6 pt-8 pb-4">
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-200 px-2.5 py-0.5 rounded">
                            {category}
                          </span>
                          <div className="flex items-center gap-1 text-zinc-900 font-bold text-xs">
                            <MapPin size={13} className="text-emerald-700 shrink-0" />
                            <span>{location}</span>
                          </div>
                        </div>

                        <h3 className={`font-serif font-bold mb-3 text-zinc-950 group-hover:text-emerald-800 transition-colors ${
                          featured ? "text-2xl md:text-3xl tracking-tight" : "text-xl tracking-tight"
                        }`}>
                          {title}
                        </h3>
                        
                        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                          {desc}
                        </p>
                      </div>
                    </div>

                    {/* Highly Visible Solid Progress Block & Action Footer */}
                    <div className="p-5 pt-0">
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-4 mb-4 space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-zinc-600 uppercase tracking-wider text-[10px]">Funding Progress</span>
                          <span className={`font-black font-mono text-sm ${textColor}`}>{progress}%</span>
                        </div>
                        
                        <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: easing, delay: 0.1 }}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between text-xs pt-0.5 border-t border-zinc-200/60 font-medium">
                          <span className="text-zinc-900 font-bold">
                            Raised: <span className="font-mono text-zinc-950 font-black">{currency}{raised.toLocaleString()}</span>
                          </span>
                          <span className="text-zinc-600">
                            Target: <span className="font-mono text-zinc-900 font-bold">{currency}{goal.toLocaleString()}</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 px-1">
                        <span className="text-xs text-zinc-900 font-semibold">
                          Reach: <span className="font-black text-emerald-800 font-mono bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-sm">{beneficiaries.toLocaleString()}</span>
                        </span>
                        
                        <Link href="/donate" passHref>
                          <Button size="sm" variant="ghost" className={`text-xs font-extrabold uppercase tracking-widest ${textColor} hover:bg-emerald-50 border border-transparent hover:border-emerald-200 gap-1.5 rounded-xl px-3.5 h-9`}>
                            Support <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── BRAND CTA ─── */}
        <section className="py-24 bg-[#0d472c] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
                Want to Start Your Own Fundraiser?
              </h2>
              <p className="text-emerald-100/80 text-base md:text-lg leading-relaxed font-normal max-w-xl mx-auto">
                Partner with SAVE A CHILD and amplify your grassroot impact. Together we can customize structured tracks that secure the futures of vulnerable Nigerian youths.
              </p>
              <div className="pt-4">
                <Link href="/contact" passHref>
                  <Button size="lg" className="bg-amber-400 text-emerald-950 hover:bg-amber-300 rounded-full px-10 font-bold uppercase tracking-wider text-xs shadow-lg shadow-black/10">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </div>
  );
}