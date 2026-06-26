"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

// Reusable Unique Premium Logo Component
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-[#0d472c] shadow-[0_4px_12px_rgba(13,71,44,0.15)] group-hover:scale-105 transition-transform duration-500 overflow-hidden">
        {/* Elegant Abstract Layering */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-transparent opacity-40" />
        <div className="w-3.5 h-3.5 border-2 border-white rounded-full translate-x-[-2px] translate-y-[-2px]" />
        <div className="w-3.5 h-3.5 border-2 border-amber-400 rounded-full absolute translate-x-[3px] translate-y-[3px] mix-blend-screen" />
      </div>

      <span className="font-serif font-black text-xl tracking-tight text-zinc-950">
        SAVE<span className="text-[#0d472c] font-normal italic">a</span>CHILD
      </span>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 md:px-6 pointer-events-none">
      <header className="w-full bg-white/80 backdrop-blur-md border border-zinc-200/80 rounded-2xl md:rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-300 pointer-events-auto">
        <div className="px-6 h-16 md:h-14 flex items-center justify-between">
          
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Nav Floating Pill Controls */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-50 border border-zinc-100 p-1 rounded-full relative">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 rounded-full ${
                    isActive ? "text-white" : "text-zinc-500 hover:text-zinc-950"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-[#0d472c] rounded-full z-0 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Alignment */}
          <div className="hidden md:flex items-center">
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold px-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Shell Controls */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl h-9 w-9 text-zinc-800">
                <Menu size={20} />
              </Button>
            </SheetTrigger>

            <SheetContent side="top" className="flex flex-col pt-20 pb-8 bg-white border-b border-zinc-100 rounded-b-3xl">
              <nav className="flex flex-col gap-4">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-serif font-bold py-1 border-b border-transparent transition-colors ${
                        isActive ? "text-[#0d472c] border-zinc-950" : "text-zinc-500"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="mt-6">
                  <Link href="/donate" onClick={() => setIsOpen(false)}>
                    <Button
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold"
                    >
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}