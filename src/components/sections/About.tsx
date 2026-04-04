"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-32 max-w-4xl mx-auto text-center py-12 md:py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-6 md:mb-8 text-foreground leading-tight">
          Crafting <span className="text-gradient">digital experiences</span> that convert.
        </h2>
        <p className="text-muted-foreground text-base md:text-2xl leading-relaxed font-light">
          I create premium digital products with a strong focus on usability, clean design, and scalable frontend development. My work combines modern UI aesthetics with real-world product thinking.
        </p>
      </motion.div>
    </section>
  );
}
