"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Muhammad Nabil Musyarof",
    role: "Work Partner",
    content: "Working with Lutfi was a game-changer for our brand. The attention to detail and technical expertise is unmatched.",
    image: "/fotonabil.jpeg",
  },
  {
    name: "Afif Khisnandya Putra",
    role: "Work Partner",
    content: "The portfolio Lutfi built for us is not just a website; it's a piece of art that actually converts visitors into clients.",
    image: "/fotoapip.jpeg",
  },
  {
    name: "Nurakhmad Adi Saputra",
    role: "Work Partner",
    content: "Incredible design sense combined with flawless execution. A true professional who delivers beyond expectations.",
    image: "/fotoputra.jpeg",
  },
];

export function Testimonials() {
  return (
    <section className="scroll-mt-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold font-heading mb-4">Testimoni</h2>
        <p className="text-foreground/70">
          What they say about the way I work and collaborate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((test, index) => (
          <motion.div
            key={test.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 glass rounded-3xl premium-shadow flex flex-col justify-between"
          >
            <p className="text-foreground/80 italic mb-8 leading-relaxed">
              "{test.content}"
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <Image src={test.image} alt={test.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{test.name}</h4>
                <p className="text-xs text-foreground/50">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
