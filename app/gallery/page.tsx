"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { X, MapPin } from "lucide-react";

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

const categories = ["All", "Education", "Healthcare", "Community", "Events"];

const galleryItems = [
  {
    id: 1,
    category: "Education",
    title: "Classroom Opening Ceremony",
    location: "Oyo State",
    image: "/images/edu-nigeria-1.jpg",
    alt: "Nigerian school children",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    category: "Healthcare",
    title: "Mobile Clinic Visit",
    location: "Niger Delta",
    image: "/images/healthcare-2.jpg",
    alt: "Healthcare support",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    category: "Community",
    title: "Village Water Borehole Launch",
    location: "Kano State",
    image: "/images/water-1.jpg",
    alt: "Water borehole",
    aspect: "aspect-[16/9]",
  },
  {
    id: 4,
    category: "Events",
    title: "Independence Day Celebration",
    location: "Lagos",
    image: "/images/nigeria-independence.jpg",
    alt: "Independence celebration",
    aspect: "aspect-[4/5]",
  },
  {
    id: 5,
    category: "Education",
    title: "Digital Literacy Workshop",
    location: "Abuja",
    image: "/images/edu-nigeria-2.jpg",
    alt: "Digital literacy",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    category: "Healthcare",
    title: "Vaccination Drive",
    location: "Borno State",
    image: "/images/healthcare-1.jpg",
    alt: "Vaccination drive",
    aspect: "aspect-[16/10]",
  },
  {
    id: 7,
    category: "Community",
    title: "Food Distribution Exercise",
    location: "Borno State",
    image: "/images/food-1.jpg",
    alt: "Food aid",
    aspect: "aspect-[3/4]",
  },
  {
    id: 8,
    category: "Education",
    title: "Literacy Program",
    location: "Lagos",
    image: "/images/joy-reading.jpg",
    alt: "Reading child",
    aspect: "aspect-[16/9]",
  },
  {
    id: 9,
    category: "Events",
    title: "Community Development Summit",
    location: "Port Harcourt",
    image: "/images/community-2.jpg",
    alt: "Community event",
    aspect: "aspect-[4/3]",
  },
  {
    id: 10,
    category: "Community",
    title: "Women's Skills Graduation",
    location: "Kaduna",
    image: "/images/women-skills.jpg",
    alt: "Women's skills",
    aspect: "aspect-[16/11]",
  },
  {
    id: 11,
    category: "Community",
    title: "Access to Safe Drinking Water",
    location: "Enugu",
    image: "/images/water-2.jpg",
    alt: "Safe drinking water",
    aspect: "aspect-[3/4]",
  },
  {
    id: 12,
    category: "Education",
    title: "Conservation Education Program",
    location: "Ibadan",
    image: "/images/edu-1.jpg",
    alt: "Education program",
    aspect: "aspect-[4/5]",
  },
  {
    id: 13,
    category: "Community",
    title: "Nutrition & Food Security",
    location: "Ogun State",
    image: "/images/food-2.jpg",
    alt: "Nutrition support",
    aspect: "aspect-[16/10]",
  },
  {
    id: 14,
    category: "Education",
    title: "Girls Empowerment Initiative",
    location: "Abeokuta",
    image: "/images/community-1.jpg",
    alt: "Empowerment program",
    aspect: "aspect-[4/3]",
  },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<any>(null);

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] text-zinc-900 antialiased">
      <Navbar />

      <PageTransition className="flex-1">
        
        {/* ─── HERO HEADER ─── */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#faf8f5]">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">Visual Stories</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-zinc-950 leading-[1.1]">
                Moments of <span className="text-emerald-700 italic font-normal">Hope & Change</span>
              </h1>

              <p className="text-zinc-600 font-medium leading-relaxed pt-4 text-base md:text-lg">
                An archival structural compilation document. Every frame tracks real resources deployed directly into systemic transformation on the ground.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── STICKY FILTER CONTROL BAR ─── */}
        <section className="py-5 bg-white/90 backdrop-blur-md border-b border-zinc-200/60 sticky top-20 z-30 transition-all">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-hide w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`shrink-0 px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    active === cat
                      ? "bg-[#0d472c] text-white shadow-md border border-[#0d472c]"
                      : "bg-white border border-zinc-200 text-zinc-600 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MASONRY DISPLAY GRID ─── */}
        <section className="py-16 bg-[#faf8f5]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="break-inside-avoid"
                >
                  <div
                    className={`relative ${item.aspect} w-full rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-200/60 shadow-sm group`}
                    onClick={() => setSelected(item)}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-75 filter grayscale-[20%] group-hover:grayscale-0"
                    />

                    {/* Gradient overlay tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/10 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Content Meta Text Block */}
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        {item.category}
                      </span>
                      <h3 className="text-white font-serif font-bold text-lg leading-snug tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-zinc-300 text-[11px] font-bold uppercase tracking-wider">
                        <MapPin size={12} className="text-amber-500" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PREMIUM ARCHIVAL LIGHTBOX OVERLAY ─── */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.96, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 15 }}
                transition={{ duration: 0.4, ease: easing }}
                className="relative bg-white border border-zinc-200 rounded-[2rem] overflow-hidden max-w-3xl w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-[450px] w-full bg-zinc-950">
                  <Image
                    src={selected.image}
                    alt={selected.alt}
                    fill
                    sizes="(max-width: 1200px) 100vw, 800px"
                    className="object-cover"
                    priority
                  />

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-5 right-5 bg-zinc-950/60 backdrop-blur-md w-11 h-11 rounded-full flex items-center justify-center text-white border border-white/10 hover:bg-zinc-900 transition-colors"
                  >
                    <X size={18} />
                  </button>
                  
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-zinc-950 text-[10px] font-black uppercase tracking-widest border border-zinc-200 shadow-sm">
                      {selected.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-serif font-bold text-zinc-950 tracking-tight">
                    {selected.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 mt-2.5">
                    <MapPin size={14} className="text-amber-600" />
                    <span>Deployment Base Location: {selected.location}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </PageTransition>
    </div>
  );
}