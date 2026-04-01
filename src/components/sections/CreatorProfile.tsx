"use client";

import { motion } from "framer-motion";
import { Star, Code2, DownloadCloud, Monitor, ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <section id="profile" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-white">
          Creator <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Profile</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Consistently delivering high-fidelity digital products for modern web requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 glass rounded-[2rem] border border-white/5 shadow-2xl bg-slate-900/40 text-center hover:border-blue-500/20 transition-colors"
          >
            <div className="w-16 h-16 mx-auto bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              {stat.icon}
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-slate-400 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Featured Testimonials */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-white">Client Feedback</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, index) => (
          <motion.div
            key={test.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 glass rounded-[2rem] border border-white/5 bg-slate-900/40 relative flex flex-col justify-between hover:border-blue-500/20 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
          >
            <div className="mb-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-blue-500 fill-blue-500" />
                ))}
              </div>
              <p className="text-slate-300 italic text-sm leading-relaxed font-light">
                "{test.content}"
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 relative">
                <Image src={test.image} alt={test.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm tracking-wide">{test.name}</h4>
                <p className="text-xs text-blue-400 font-medium">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-24 text-center"
      >
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-8">
          Interested in working together or purchasing a product?
        </h3>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all"
        >
          Let's Collaborate <ArrowRight size={20} />
        </a>
      </motion.div>
    </section>
  );
}
