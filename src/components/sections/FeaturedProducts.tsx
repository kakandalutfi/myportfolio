"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Finance Analytics Dashboard UI Kit",
    description: "A modern SaaS dashboard template with charts, tables, analytics, dark mode, and reusable components.",
    image: "/finance_dashboard.png",
    tags: ["Figma", "Next.js", "Dark Mode", "Responsive"],
  },
  {
    title: "Local Business Growth Landing Page Template",
    description: "A conversion-focused landing page template for Google Maps optimization and local business services.",
    image: "/business_landing_page.png",
    tags: ["Landing Page", "Next.js", "Modern", "Responsive"],
  },
  {
    title: "Recruitment SaaS Dashboard",
    description: "A clean recruitment platform dashboard for hiring management, candidates, and HR workflow.",
    image: "/recruitment_dashboard.png",
    tags: ["SaaS", "Dashboard", "Figma", "UI Kit"],
  },
];

export function FeaturedProducts() {
  return (
    <section id="products" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-lg">Premium Products</span>
          </h2>
          <p className="text-slate-400 text-lg">
            High-quality digital products designed to accelerate your workflow and elevate your digital presence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group glass rounded-[2rem] overflow-hidden border border-white/5 bg-slate-900/50 hover:bg-slate-900/80 transition-all hover:border-blue-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="p-8 pt-4 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-5">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-[11px] font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white leading-snug">{product.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {product.description}
              </p>
              
              <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-blue-600 text-white font-semibold transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-transparent group/btn">
                View Product
                <ArrowUpRight size={18} className="transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
