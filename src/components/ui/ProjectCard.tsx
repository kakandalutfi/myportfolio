"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  className?: string;
}

export function ProjectCard({ title, description, image, tags, link, github, className }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("group glass rounded-3xl overflow-hidden premium-shadow w-full", className)}
    >
      <div className="relative aspect-video overflow-hidden w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
              <ExternalLink size={20} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
