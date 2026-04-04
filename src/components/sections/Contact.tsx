"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Github, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const whatsappNumber = "6288221481972";

  const getWhatsAppUrl = () => {
    const text = `Halo, saya ${formData.name || "[Nama]"} (${formData.email || "[Email]"}).\n\n${formData.message}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 md:mb-6 tracking-tight text-foreground">
            Let's <span className="text-gradient">Collaborate</span> Now.
          </h2>
          <p className="text-muted-foreground mb-8 md:mb-10 text-base md:text-lg leading-relaxed max-w-md">
            Interested in high-end digital products or custom web development? Feel free to reach out for inquiries or collaborations.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold text-muted-foreground/60 uppercase tracking-widest mb-0.5 md:mb-1">Email</p>
                <p className="text-sm md:text-base font-semibold text-foreground">m.lutfihabibunnazar@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <Phone size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold text-muted-foreground/60 uppercase tracking-widest mb-0.5 md:mb-1">WhatsApp</p>
                <p className="text-sm md:text-base font-semibold text-foreground">+6288221481972</p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <MapPin size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold text-muted-foreground/60 uppercase tracking-widest mb-0.5 md:mb-1">Location</p>
                <p className="text-sm md:text-base font-semibold text-foreground">Grobogan, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            {[Github, Linkedin, Instagram].map((Icon, i) => (
              <button
                key={i}
                className="p-3.5 md:p-4 glass rounded-xl md:rounded-2xl border border-border bg-card/40 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300"
              >
                <Icon size={18} className="md:w-5 md:h-5" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Decorative mesh */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-50 dark:opacity-20" />

          <div className="glass p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-border bg-card/40 shadow-2xl relative overflow-hidden">
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Lutfi Nazar"
                    className="w-full px-5 py-4 bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-2xl transition-all outline-none shadow-inner"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/80 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="lutfi@example.com"
                    className="w-full px-5 py-4 bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-2xl transition-all outline-none shadow-inner"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-input/50 border border-border text-foreground placeholder:text-muted-foreground/50 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-2xl transition-all outline-none resize-none shadow-inner"
                  required
                ></textarea>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all"
              >
                Send Message <Send size={18} />
              </a>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} export const techStack = [
  { name: "Landing Page", bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
  { name: "React.js", bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
  { name: "Tailwind CSS", bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
  { name: "Responsive", bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
];

