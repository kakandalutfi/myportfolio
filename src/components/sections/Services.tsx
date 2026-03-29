"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Layout, BarChart3, Search, Share2 } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building high-performance, scalable web applications using the latest technologies and frameworks.",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user interfaces focusing on user experience and brand identity.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "Mobile Optimization",
    description: "Ensuring your digital presence is perfectly optimized for all devices and screen sizes.",
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds and smooth interactions to keep your users engaged.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "SEO Strategy",
    description: "Improving your search engine visibility and driving organic traffic to your platform.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Digital Branding",
    description: "Creating cohesive digital brand experiences that resonate with your target audience.",
    icon: <Share2 className="w-8 h-8" />,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold font-heading mb-4">Strategic <span className="text-gradient">Digital Services</span></h2>
        <p className="text-foreground/70">
          I provide a comprehensive suite of digital services designed to help your business thrive in the modern web landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 glass rounded-3xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
