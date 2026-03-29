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
    <section id="contact" className="scroll-mt-24 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-heading mb-6">Let's <span className="text-gradient">Work Together</span></h2>
          <p className="text-foreground/70 mb-10 text-lg">
            Have a project in mind? Or just want to say hi? Feel free to reach out. 
            I'm always open to new opportunities and creative collaborations.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="p-3 glass rounded-xl text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Email</p>
                <p className="font-semibold">m.lutfihabibunnazar@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 glass rounded-xl text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Phone</p>
                <p className="font-semibold">+6288221481972</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 glass rounded-xl text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Location</p>
                <p className="font-semibold">Grobogan</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="p-4 glass rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Lutfi, saya ingin bertanya tentang layanan Anda.")}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition-all"
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
          className="glass p-10 rounded-3xl premium-shadow"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-5 py-4 bg-foreground/5 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-2xl transition-all outline-none" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-5 py-4 bg-foreground/5 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-2xl transition-all outline-none" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Message</label>
              <textarea 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full px-5 py-4 bg-foreground/5 border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-2xl transition-all outline-none resize-none" 
                required
              />
            </div>
            <a
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
            <Send size={18} /> Send Message
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
