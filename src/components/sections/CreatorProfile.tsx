"use client";

import { motion } from "framer-motion";
import { Star, Code2, DownloadCloud, Monitor, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  { icon: <Code2 size={24} />, label: "Projects Completed", value: "10+" },
  { icon: <DownloadCloud size={24} />, label: "Premium Products", value: "3" },
  { icon: <Monitor size={24} />, label: "Responsive Layouts", value: "100%" }
];

const testimonials = [
  {
    name: "Muhammad Nabil Musyarof",
    role: "Digital Partner",
    content: "Working with Lutfi was a game-changer for our brand. The attention to detail and technical expertise is unmatched.",
    image: "/fotonabil.jpeg",
  },
  {
    name: "Afif Khisnandya Putra",
    role: "Digital Partner",
    content: "The portfolio and products built by Lutfi are not just functional; they are pieces of digital art that actively convert visitors into clients.",
    image: "/fotoapip.jpeg",
  },
  {
    name: "Nurakhmad Adi Saputra",
    role: "Digital Partner",
    content: "Incredible design sense combined with flawless execution. A true professional who delivers beyond expectations.",
    image: "/fotoputra.jpeg",
  },
];

export function CreatorProfile() {
  return (
    <section id="profile" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-32">
      <div className="flex flex-col gap-16 items-center mb-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground">
            Meet the <span className="text-gradient">Creator Profile</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            I am a UI/UX expert and frontend developer specializing in creating high-end digital products for the UI8 marketplace and modern SaaS platforms.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="p-8 glass rounded-[2rem] border border-border shadow-2xl bg-card/40 text-center hover:border-blue-500/20 transition-colors"
              >
                <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-24 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-10">Client Feedback</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 glass rounded-[2rem] border border-border bg-card/40 relative flex flex-col justify-between hover:border-blue-500/20 shadow-premium text-left"
            >
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-sm">"{test.content}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-border relative">
                  <Image src={test.image} alt={test.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm tracking-wide">{test.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-[10px] uppercase font-bold tracking-widest">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass rounded-[3rem] p-12 md:p-20 text-center border border-border bg-card/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5" />
        <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-8 relative z-10">
          Ready to elevate <span className="text-gradient">your digital presence?</span>
        </h3>
        <a 
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all relative z-10 cursor-pointer"
        >
          Let's Collaborate <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
