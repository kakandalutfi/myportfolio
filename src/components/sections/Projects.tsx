"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

const categories = ["All", "Web", "Mobile", "UI/UX"];

const projects = [
  {
    title: "Dashboard Admin",
    description: "A high-performance stock trading dashboard featuring real-time data visualization and automated portfolio management.",
    image: "/portfolio1.png",
    tags: ["Laravel", "React Js", "Tailwind"],
    category: "Web",
  },
  {
    title: "Landingpage Company Profile",
    description: "A premium e-commerce mobile experience for luxury watch collectors, focusing on micro-interactions and high-end aesthetics.",
    image: "/portfolio2.png",
    tags: ["React Js", "Tailwind", "Framer motion"],
    category: "Web",
  },
  {
    title: "Landingpage Google Maps Optimization",
    description: "A dynamic showcase for independent creative agencies, utilizing glassmorphism and advanced scroll animations.",
    image: "/portfolio3.png",
    tags: ["Next.js", "Tailwind"],
    category: "Web",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold font-heading mb-4">Selected <span className="text-gradient">Portfolio Pieces</span></h2>
          <p className="text-foreground/70">
            A curation of my finest work, blending technical excellence with artistic vision to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="flex gap-2 p-1 glass rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "hover:bg-foreground/5 text-foreground/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
