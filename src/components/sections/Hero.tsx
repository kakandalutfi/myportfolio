"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Premium abstract background"
          fill
          className="object-cover opacity-20 dark:opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            Available for new projects
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">Muhammad Lutfi</span> <br /> 
            QA Engineer & Fullstack Developer.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed">
            Building applications that are not only functional, but also stable, scalable, and bug-resistant through integrated development and quality assurance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">View Portfolio</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-border hover:bg-foreground/5 rounded-full font-semibold transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating elements for micro-interaction */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden lg:block -bottom-10 left-1/4 p-6 glass rounded-2xl premium-shadow"
        >
        </motion.div>
      </div>
    </section>
  );
}
