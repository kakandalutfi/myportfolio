"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "SaaSify - Productivity SaaS Landing Page",
    description: "SaaSify is a high-end SaaS landing page template crafted for startups, AI tools, and productivity platforms. Featuring a polished hero section, animated dashboard previews, pricing tables, testimonials, responsive layouts, and dark mode, this template is ready to launch and easy to customize.",
    image: "/saas_landingpage.png",
    tags: ["Landing Page", "Next.js", "Dark Mode", "White Mode", "Responsive"],
    link: "https://saas-landing-page-smoky-delta.vercel.app/",
  },
  {
    title: "Landingpage Company Profile",
    description: "Modern company profile and SaaS landing page for Digintara.Id. Designed to showcase digital services, website development, business systems, and modern SaaS solutions with a professional dark theme, responsive layout, smooth animations, and a clean business-focused interface.",
    image: "/digintara_landingpage.png",
    tags: ["Landing Page", "Saas", "React.js", "Modern", "Responsive"],
    link: "https://digintara.id",
  },
  {
    title: "Maps Optima",
    description: "Professional landing page for Google Maps optimization and local business growth services. Designed to help businesses improve their visibility on Google Maps, attract more customers, and strengthen their online presence through SEO-focused strategies, responsive design, and clear call-to-action sections.",
    image: "/jasagooglemaps_landingpage.png",
    tags: ["Landing Page", "Next.Js", "Modern", "Responsive"],
    link: "https://landingpage-jasagooglemaps.vercel.app/",
  },
];

export function FeaturedProducts() {
  return (
    <section id="products" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col items-center text-center mb-16 gap-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4 md:mb-6 tracking-tight text-foreground">
            Featured <span className="text-gradient">Premium Products</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
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
            className="group glass rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-border bg-card/40 hover:bg-card/80 transition-all hover:border-blue-500/30 shadow-premium hover:shadow-blue-500/15 flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="p-5 md:p-8 pt-2 md:pt-4 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 md:px-3 md:py-1 bg-blue-500/10 text-blue-600 dark:text-blue-300 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-foreground leading-snug">{product.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                {product.description}
              </p>
              
              <Link 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 md:py-4 rounded-xl bg-accent hover:bg-blue-600 hover:text-white text-foreground font-semibold transition-all flex items-center justify-center gap-2 border border-border hover:border-transparent group/btn text-sm md:text-base"
              >
                View Product
                <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px] transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
