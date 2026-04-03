"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with theme-aware overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)/0.03_0,var(--color-background)_100%)]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] opacity-50 dark:opacity-20" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-30 dark:opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-10">
        <div className="flex-1 text-center lg:text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wider uppercase mb-6 border border-blue-500/20">
              Premium UI Creator & Developer
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight leading-[1.1] text-foreground"
          >
            Crafting <span className="text-gradient">Digital Excellence</span> for the Future.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Empowering brands with high-end digital products, premium UI kits, and cutting-edge web experiences that convert.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link 
              href="#products"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              Explore Products
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-4 bg-transparent border border-border hover:bg-accent rounded-full font-semibold transition-all text-foreground"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 relative w-full aspect-[4/3] lg:aspect-square max-w-2xl mx-auto flex items-center justify-center"
        >
          {/* Decorative halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[120px] rounded-full z-0 animate-pulse" />
          
          <div className="relative w-full h-[85%] rounded-[2rem] overflow-hidden border border-border shadow-2xl glass p-2">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-border">
              <Image
                src="/saas_landingpage.png"
                alt="Premium Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-20 -left-6 md:-left-12 p-4 glass border border-border rounded-2xl shadow-2xl flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
               <span className="font-bold text-xs">UI8</span>
            </div>
            <div>
               <p className="text-base font-bold text-foreground leading-tight">100+ Sales</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
