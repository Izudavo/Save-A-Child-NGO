"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { motion, Variants } from "framer-motion";
import { Search, Clock, User, ArrowRight, Tag, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
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

const categories = ["All", "Education", "Healthcare", "Community", "Impact Stories", "Policy", "Volunteer"];

export const articles = [
  {
    id: 1,
    slug: "how-digital-literacy-reshaping-rural-nigeria",
    title: "How Digital Literacy is Reshaping Rural Nigeria's Next Generation",
    excerpt: "In a small classroom in Oyo State, 12-year-old Taiwo is learning Python. She has never left her village, but through our Digital Learning Center, the world is coming to her.",
    category: "Education",
    author: "Dr. Amaka Osei",
    date: "June 12, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: 2,
    slug: "hidden-cost-of-malnutrition",
    title: "The Hidden Cost of Malnutrition: What the Numbers Don't Show",
    excerpt: "Every statistic on child malnutrition hides a name, a story, a family. Our healthcare team reports from the ground in Borno State.",
    category: "Healthcare",
    author: "Dr. Chisom Adeyemi",
    date: "May 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    slug: "community-trust-real-currency",
    title: "Why Community Trust Is the Real Currency of NGO Work",
    excerpt: "After 10 years of working in communities across Nigeria, our Director of Operations shares the lesson that took the longest to learn.",
    category: "Community",
    author: "Emeka Nwosu",
    date: "May 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    slug: "diaspora-giving-surging",
    title: "From Lagos to London: How Diaspora Giving is Surging",
    excerpt: "International remittances are often personal, but a new wave of structured diaspora philanthropy is beginning to transform how Nigerians abroad give back.",
    category: "Impact Stories",
    author: "Tunde Bakare",
    date: "April 30, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1444653389962-8149286c578a?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    slug: "water-not-a-luxury",
    title: "Water Is Not a Luxury: Inside the Kano Borehole Project",
    excerpt: "24 boreholes. 2,100 people with clean water. 70% reduction in waterborne disease. The story behind our most impactful infrastructure project yet.",
    category: "Community",
    author: "Fatima Al-Hassan",
    date: "April 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    slug: "ngo-accountability-digital-age",
    title: "NGO Accountability in the Digital Age: A New Standard",
    excerpt: "Donors are demanding more transparency than ever, and we think that's a good thing. Here is how SAVE A CHILD reports every naira of your donation.",
    category: "Policy",
    author: "Ngozi Eze",
    date: "March 22, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 7,
    slug: "meet-adaeze-volunteer-to-manager",
    title: "Meet Adaeze: From Volunteer to Program Manager in Three Years",
    excerpt: "At 26, Adaeze manages healthcare logistics for 8 communities. Two years ago, she was a weekend volunteer. This is her story.",
    category: "Volunteer",
    author: "Editorial Team",
    date: "March 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140e2b8?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 8,
    slug: "science-of-hope",
    title: "The Science of Hope: What Research Says About Early Childhood Investment",
    excerpt: "Every dollar spent on early childhood development returns $7-12 to society over a lifetime. We break down the research — and what it means for our programs.",
    category: "Education",
    author: "Dr. Amaka Osei",
    date: "February 18, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

const tags = ["Nigeria", "Education", "Healthcare", "Impact", "Donation", "Children", "Community", "Volunteers", "Policy", "Africa"];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = articles.find((a) => a.featured);
  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch && !a.featured;
  });

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] text-zinc-900 antialiased">
      <Navbar />
      <PageTransition className="flex-1">
        
        {/* ─── HERO SECTION ─── */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#faf8f5]">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">Stories & Insights</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-zinc-900 leading-[1.1] tracking-tight">
                Words That <span className="text-emerald-700 italic font-normal">Move the World</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-normal pt-4 max-w-2xl">
                Dispatches from the field, policy insights, and stories of pure transformation from the communities we serve. Real people. Real change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── EDITORIAL FEATURED POST ─── */}
        {featured && (
          <section className="py-12 bg-white border-b border-zinc-200/60">
            <div className="container mx-auto px-6 max-w-7xl">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Link href={`/blog/${featured.slug}`} passHref>
                  <div className="bg-[#fdfcfb] border border-zinc-200 rounded-[2rem] overflow-hidden hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)] hover:border-emerald-600/30 transition-all duration-500 group cursor-pointer" data-testid="card-blog-featured">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="h-72 lg:h-auto min-h-[350px] overflow-hidden relative bg-zinc-900">
                        <img 
                          src={featured.image} 
                          alt={featured.title}
                          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute top-6 left-6 z-10">
                          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 text-zinc-950 text-[10px] font-black uppercase tracking-widest shadow-sm">
                            Editor's Choice
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                        <Bookmark className="absolute top-12 right-12 text-zinc-200 group-hover:text-amber-400 transition-colors duration-300" size={32} />
                        
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-md w-fit mb-5">
                          {featured.category}
                        </span>
                        
                        <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-zinc-950 mb-5 leading-[1.1] tracking-tight group-hover:text-emerald-800 transition-colors">
                          {featured.title}
                        </h2>
                        
                        <p className="text-zinc-600 leading-relaxed font-medium mb-8 text-base md:text-lg">
                          {featured.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-500 font-bold uppercase tracking-wider mb-8">
                          <span className="flex items-center gap-2"><User size={14} className="text-emerald-700" />{featured.author}</span>
                          <span className="flex items-center gap-2"><Clock size={14} className="text-amber-600" />{featured.readTime}</span>
                          <span>{featured.date}</span>
                        </div>
                        
                        <div className="self-start flex items-center gap-2 text-emerald-700 font-black uppercase tracking-widest text-xs hover:gap-3 transition-all border-b-2 border-transparent hover:border-emerald-700 pb-1">
                          Read Full Dispatch <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* ─── STICKY FILTER & SEARCH ─── */}
        <section className="py-6 bg-white/90 backdrop-blur-md border-b border-zinc-200/60 sticky top-20 z-30 transition-all">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
              
              <div className="relative w-full lg:w-96 shrink-0">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <Input
                  placeholder="Search dispatches & stories..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-11 h-12 bg-[#faf8f5] border-zinc-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-700 text-zinc-950 font-medium w-full shadow-inner"
                />
              </div>
              
              <div className="flex gap-2.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide w-full lg:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-[#0d472c] text-white shadow-md shadow-emerald-900/10 border border-[#0d472c]"
                        : "bg-white border border-zinc-200 text-zinc-600 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── ARTICLES GRID ─── */}
        <section className="py-24 bg-[#faf8f5]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article, i) => (
                <motion.div
                  key={article.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link href={`/blog/${article.slug}`} className="block h-full">
                    <div className="bg-white border border-zinc-200/80 rounded-[1.5rem] overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col h-full">
                      
                      {/* Real Image Container Component */}
                      <div className="h-52 overflow-hidden relative bg-zinc-900">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-zinc-950 text-[10px] font-black uppercase tracking-widest shadow-sm">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Payload */}
                      <div className="p-7 flex flex-col flex-1">
                        <h3 className="font-serif font-bold text-xl md:text-2xl mb-4 text-zinc-950 group-hover:text-emerald-800 transition-colors leading-tight tracking-tight">
                          {article.title}
                        </h3>
                        <p className="text-sm text-zinc-600 font-medium leading-relaxed mb-6 flex-1">
                          {article.excerpt}
                        </p>
                        
                        <div className="pt-5 border-t border-zinc-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                          <span className="flex items-center gap-1.5 text-zinc-800"><User size={13} className="text-emerald-700"/>{article.author}</span>
                          <span className="flex items-center gap-1.5"><Clock size={13} />{article.readTime}</span>
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-32 bg-white border border-dashed border-zinc-300 rounded-[2rem] max-w-2xl mx-auto">
                <Search size={40} className="mx-auto text-zinc-300 mb-4" />
                <p className="text-xl font-serif font-bold text-zinc-900 mb-2">No dispatches found.</p>
                <p className="text-zinc-500 font-medium text-sm">Try adjusting your filters or search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* ─── POPULAR TAGS ─── */}
        <section className="py-12 bg-white border-t border-zinc-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-900 mr-2">
                <Tag size={16} className="text-amber-600" /> Trend Topics:
              </span>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold tracking-wide bg-[#faf8f5] border border-zinc-200 text-zinc-600 hover:border-emerald-700 hover:text-emerald-800 transition-all shadow-sm"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </PageTransition>
    </div>
  );
}