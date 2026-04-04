"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  "Conversion-focused layout",
  "Fully responsive design",
  "Easy to customize",
  "Clean modern styling",
  "SEO optimized structure",
  "Light & Dark mode ready"
];

const techStack = [
  { name: "Landing Page", bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
  { name: "React.js", bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
  { name: "Tailwind CSS", bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" }
];

export function ProductDetail() {
  return (
    <section id="product-detail" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="glass rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 border border-border shadow-2xl relative overflow-hidden bg-card/40">
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
          
          {/* Left: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4 md:mb-6 tracking-tight leading-tight text-foreground">
              Company Profile <br className="hidden md:block"/>
              <span className="text-gradient">Landing Page Template </span>
            </h2>
            
            <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
              A comprehensive digital solution platform for building modern websites, business systems, and SaaS experiences. Designed specifically to support business growth through creative digital services, innovative technology, and professional online presence.
            </p>

            <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Premium Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-blue-500" />
                    <span className="text-muted-foreground text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h3 className="text-[11px] md:text-sm font-bold tracking-widest uppercase text-muted-foreground/60">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {techStack.map((tech) => (
                  <span 
                    key={tech.name} 
                    className={cn("px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-sm font-semibold border", tech.bg, tech.text, tech.border)}
                  >
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
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border">
              <Image 
                src="/digintara_landingpage.png"
                alt="Local Business Landing Page Details"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>

            {/* Micro-interaction badges */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 right-8 py-2 px-4 glass border border-border rounded-xl shadow-xl flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold text-foreground">Mobile Ready</span>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
