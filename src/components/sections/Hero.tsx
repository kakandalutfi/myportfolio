"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0,rgba(15,23,42,1)_100%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-block py-1.5 px-5 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wide mb-6">
            UI Creator & Frontend Developer
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight leading-[1.1] text-white">
            Designing premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-lg">digital products</span> for modern businesses.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I craft high-quality SaaS dashboards, landing page templates, and clean UI kits that elevate your brand's digital presence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#products"
              className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold overflow-hidden transition-all hover:pr-12 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">View Products</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-full font-semibold transition-all text-white"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Hero Mockup */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, x: 20 }}
           animate={{ opacity: 1, scale: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="flex-1 relative w-full aspect-[4/3] lg:aspect-square max-w-2xl mx-auto mt-12 lg:mt-0 hidden md:block"
        >
           <div className="absolute inset-0 bg-blue-500/5 rounded-[2.5rem] blur-3xl transform rotate-3"></div>
           <motion.div
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative w-full h-[80%] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mt-10"
           >
              <Image 
                src="/hero_mockup.png"
                alt="Premium SaaS Dashboard Mockup"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
           </motion.div>
           
           {/* Floating elements for micro-interaction */}
           <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -left-6 p-4 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
           >
             <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
               <Download size={20} />
             </div>
             <div>
               <p className="text-base font-bold text-white">100+ Sales</p>
               <p className="text-xs text-slate-400 font-medium">on UI8 Marketplace</p>
             </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
