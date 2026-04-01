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
    <section id="contact" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Work Together</span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
            Have a project in mind? Or just want to say hi? Feel free to reach out. 
            I'm always open to new opportunities and creative collaborations.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                <p className="font-semibold text-white">m.lutfihabibunnazar@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Phone</p>
                <p className="font-semibold text-white">+6288221481972</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Location</p>
                <p className="font-semibold text-white">Grobogan</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="p-4 glass rounded-2xl border border-white/5 bg-slate-900/40 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Lutfi, saya ingin bertanya tentang layanan Anda.")}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-10 px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-[#25D366] rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.1)]"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-10 rounded-[2.5rem] border border-white/5 bg-slate-900/40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-slate-300">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-5 py-4 bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-2xl transition-all outline-none shadow-inner" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-slate-300">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-2xl transition-all outline-none shadow-inner" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1 text-slate-300">Message</label>
              <textarea 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full px-5 py-4 bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-2xl transition-all outline-none resize-none shadow-inner" 
                required
              />
            </div>
            <a
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all"
            >
              <Send size={18} /> Send Message
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
