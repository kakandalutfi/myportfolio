"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Globe, Trophy, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React Js", level: 85, icon: <Code2 size={20} /> },
  { name: "Laravel", level: 85, icon: <Code2 size={20} /> },
  { name: "Next Js", level: 85, icon: <Code2 size={20} /> },
  { name: "Tailwind CSS", level: 85, icon: <Palette size={20} /> },
  { name: "UI UX Design", level: 90, icon: <Palette size={20} /> },
  { name: "Quality Assurance", level: 90, icon: <Globe size={20} /> },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Digintara.Id",
    period: "January 2026 - Present",
    description: "Junior Fullstack Developer with experience in building web applications using React and Next.js for frontend, and Laravel for backend. Familiar with developing responsive and functional systems, with a focus on clean code, continuous learning, and improving user experience.",
  },
  {
    title: "HR Recruitment",
    company: "PT Dibuiltadi Solusi Teknologi",
    period: "March 2025 - December 2025",
    description: "Experienced in end-to-end recruitment processes, including sourcing, screening, and interviewing candidates. Skilled in identifying talent that aligns with company needs and culture, with a focus on efficient hiring and strong candidate experience.",
  },
  {
    title: "QA Engineer",
    company: "PT Dibuiltadi Solusi Teknologi",
    period: "February 2024 - February 2025",
    description: "Detail-oriented QA with experience in manual, exploratory, and automation testing. Skilled in test case creation, bug tracking, and ensuring product quality through a strong understanding of SDLC and agile workflows. Focused on delivering reliable, user-friendly products and smooth release processes.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Bio & Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold font-heading mb-8">
            Solving problems through <span className="text-gradient">thoughtful design</span> and clean code.
          </h2>
          <p className="text-foreground/70 mb-12 leading-relaxed text-lg">
            I am a passionate developer with a keen eye for design. With years of experience in the industry, 
            I specialize in creating websites that are not only visually stunning but also highly functional 
            and user-centric. My goal is to bridge the gap between aesthetics and performance.
          </p>

          <div className="space-y-6">
            <h3 className="text-xl font-bold font-heading mb-4">Core Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="p-4 glass rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary">{skill.icon}</span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                  <div className="w-full bg-foreground/5 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      className="bg-primary h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold font-heading mb-10 flex items-center gap-3">
            <Calendar className="text-primary" /> Experience Journey
          </h3>
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border/50 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-1 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 transition-transform hover:scale-110">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{exp.period}</span>
                  <h4 className="text-xl font-bold mt-1">{exp.title}</h4>
                  <p className="text-sm font-medium text-foreground/60 mb-3">{exp.company}</p>
                  <p className="text-foreground/70 leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
