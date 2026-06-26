"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { articles } from "../page";

// Extending the articles array with rich text content for the dynamic view.
// In a production environment, this would be fetched from a CMS or parsed from .md files.
const articleContents: Record<string, React.ReactNode> = {
  "how-digital-literacy-reshaping-rural-nigeria": (
    <>
      <p>The gentle hum of solar-powered generators forms the backdrop to an entirely new kind of sound in Oyo State: the rapid tapping of keyboards. For 12-year-old Taiwo, this sound represents a bridge between her quiet village and the global digital economy.</p>
      <p>Before the SAVE A CHILD Digital Learning Center opened its doors, less than 5% of the community's youth had ever interacted with a computer. Today, over 200 students are enrolled in basic computer literacy, advanced typing, and foundational coding (Python and HTML).</p>
      <h3>Beyond the Screen</h3>
      <p>Digital literacy here is not just about writing lines of code; it is about cognitive expansion. "When they learn programming logic, they are actually learning advanced problem-solving," explains Dr. Amaka Osei. "They learn to break large, overwhelming problems in their community into small, manageable functions."</p>
      <blockquote>"The computer does not care where I was born. It only cares if my code works. That makes me feel powerful." — Taiwo, 12</blockquote>
      <p>The impact is already spilling over into local micro-economies. Older students are helping local farmers track yields on Excel, and local tailors are using basic internet search to find new patterns and global fashion trends. The infrastructure is working exactly as intended.</p>
    </>
  ),
  "hidden-cost-of-malnutrition": (
    <>
      <p>When we look at ledgers and national healthcare statistics, it's easy to become numb to the numbers. A 3% rise in Severe Acute Malnutrition (SAM) is just a decimal on a spreadsheet. But on the ground in Borno State, that 3% has a devastatingly human face.</p>
      <h3>The First 1,000 Days</h3>
      <p>The critical window of human development occurs in the first 1,000 days of life. Nutritional deficits during this period do not just stunt physical growth—they fundamentally alter neurological architecture. Children who survive severe malnutrition often face lifelong cognitive deficits.</p>
      <p>Our mobile healthcare clinics have pivoted to treat malnutrition not just as a hunger issue, but as a severe medical emergency. We deploy Ready-to-Use Therapeutic Food (RUTF), essentially a fortified peanut paste that packs a massive caloric and micronutrient punch.</p>
      <p>Last month, we reached 420 children on the brink. The visual transformation after just two weeks of RUTF treatment is miraculous. A lethargic, unresponsive child suddenly has the energy to cry, to play, and to demand attention. But the goal is prevention, not just rescue. True victory means the clinic stays empty.</p>
    </>
  ),
  "community-trust-real-currency": (
    <>
      <p>You can arrive in a village with a truckload of supplies, a team of international experts, and millions in funding. But if you do not have the trust of the local elders, the mothers, and the youth leaders—you have nothing.</p>
      <p>Ten years ago, we learned this the hard way. We built a beautiful, modern school in a rural community. Six months later, it was nearly empty. Why? Because we didn't ask the community when their harvest season was. The children were needed in the fields, and our strict attendance policies alienated the families.</p>
      <h3>The Co-Creation Model</h3>
      <p>Today, SAVE A CHILD operates strictly on a co-creation model. We do not dictate solutions; we facilitate them.</p>
      <ul>
        <li><strong>Step 1:</strong> Months of listening sessions with community leaders.</li>
        <li><strong>Step 2:</strong> Appointing local liaisons to manage the project roadmap.</li>
        <li><strong>Step 3:</strong> Sourcing local labor and materials to boost the micro-economy.</li>
      </ul>
      <p>When a community builds its own water borehole, they protect it. When they select the teachers for the new school, they respect them. Trust is the invisible infrastructure holding all our projects together. It cannot be bought; it must be earned, day by day, promise by promise.</p>
    </>
  ),
};

export default function ArticleReadPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Find the basic meta data from the original array
  const meta = articles.find((a) => a.slug === slug);
  
  // Find the rich HTML/JSX content (fallback if not written yet)
  const content = articleContents[slug] || (
    <>
      <p className="text-xl text-zinc-500 font-serif italic mb-6">
        Full dispatch content is currently being digitized by our editorial team. Please check back later.
      </p>
      <p>{meta?.excerpt}</p>
    </>
  );

  if (!meta) {
    return (
      <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb]">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-serif font-bold text-zinc-900 mb-4">Article Not Found</h1>
          <p className="text-zinc-600 mb-8">The dispatch you are looking for has been moved or does not exist.</p>
          <Link href="/blog" className="text-emerald-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Hub
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#fdfcfb] text-zinc-900 antialiased selection:bg-emerald-200">
      <Navbar />
      <PageTransition className="flex-1">
        
        {/* ─── EDITORIAL HEADER ─── */}
        <section className="pt-32 pb-16 bg-[#faf8f5] border-b border-zinc-200/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-700 transition-colors mb-10">
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-md">
                  {meta.category}
                </span>
                <span className="text-sm font-bold text-zinc-400">{meta.date}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-zinc-950 leading-[1.1] tracking-tight mb-8">
                {meta.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between py-6 border-t border-b border-zinc-200/80 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-serif font-bold text-xl">
                    {meta.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 uppercase tracking-wider">{meta.author}</p>
                    <p className="text-xs font-medium text-zinc-500 flex items-center gap-1.5 mt-0.5">
                      <Clock size={12} /> {meta.readTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mr-2">Share</span>
                  <button className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors shadow-sm"><FaFacebook size={14} /></button>
                  <button className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors shadow-sm"><FaTwitter size={14} /></button>
                  <button className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors shadow-sm"><FaLinkedin size={14} /></button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── PREMIUM READING BODY ─── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg md:prose-xl prose-zinc max-w-none
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-zinc-950 prose-headings:tracking-tight
                prose-p:text-zinc-700 prose-p:leading-[1.8] prose-p:font-medium
                prose-a:text-emerald-700 prose-a:font-bold prose-a:no-underline hover:prose-a:text-emerald-800
                prose-blockquote:border-l-4 prose-blockquote:border-amber-400 prose-blockquote:bg-[#faf8f5] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-serif prose-blockquote:text-zinc-900 prose-blockquote:rounded-r-2xl prose-blockquote:shadow-sm
                prose-li:text-zinc-700 prose-li:font-medium
                prose-strong:text-zinc-950 prose-strong:font-bold"
            >
              {/* Inject rich content here */}
              {content}
            </motion.div>

            {/* Read Complete Footer */}
            <div className="mt-20 pt-10 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#faf8f5] p-8 rounded-[2rem]">
              <div>
                <h4 className="font-serif font-bold text-2xl text-zinc-950 mb-2">Inspired by this dispatch?</h4>
                <p className="text-zinc-600 text-sm font-medium">Your contribution helps us write the next success story.</p>
              </div>
              <Link href="/donate" passHref>
                <button className="shrink-0 bg-[#0d472c] text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-[#09331f] hover:-translate-y-1 transition-all duration-300">
                  Support Our Work
                </button>
              </Link>
            </div>
          </div>
        </section>

      </PageTransition>
      <Footer />
    </div>
  );
}