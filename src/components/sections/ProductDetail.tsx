"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Layout, Smartphone } from "lucide-react";

const features = [
  "Conversion-focused layout",
  "Fully responsive design",
  "Easy to customize",
  "Clean modern styling",
  "SEO optimized structure",
  "Light & Dark mode ready"
];

const techStack = [
  { name: "Figma", bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  { name: "Next.js", bg: "bg-white/10", text: "text-white", border: "border-white/20" },
  { name: "Tailwind CSS", bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" }
];

export function ProductDetail() {
  return (
    <section id="product-detail" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20">
      <div className="glass rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-hidden bg-slate-900/40">
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8">
              <Zap size={16} /> Flagship UI Kit
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight leading-tight text-white">
              Local Business Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Landing Page Template</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
              A comprehensive toolkit for creating high-converting landing pages. Designed specifically to optimize Google Maps visibility and local business services.
            </p>

            <div className="space-y-6 mb-12">
              <h3 className="text-xl font-semibold text-white">Premium Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-blue-500" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span key={tech.name} className={`px-4 py-2 rounded-full text-sm font-semibold ${tech.bg} ${tech.text} ${tech.border} border`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Product Showcase Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <Image 
              src="/business_landing_page.png"
              alt="Local Business Landing Page Details"
              fill
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

            {/* Feature Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-8 py-2 px-4 glass border border-white/20 rounded-xl shadow-xl flex items-center gap-2"
            >
              <Layout size={16} className="text-blue-400" />
              <span className="text-xs font-bold text-white">10+ Sections</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 right-8 py-2 px-4 glass border border-white/20 rounded-xl shadow-xl flex items-center gap-2"
            >
              <Smartphone size={16} className="text-blue-400" />
              <span className="text-xs font-bold text-white">Mobile Ready</span>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
