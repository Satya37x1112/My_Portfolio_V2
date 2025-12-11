"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "TailwindCSS", level: 85 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    name: "Cybersecurity",
    skills: [
      { name: "Linux", level: 85 },
      { name: "Network Security", level: 80 },
      { name: "Web Security", level: 85 },
      { name: "Cryptography", level: 75 },
      { name: "CTF/Hacking", level: 80 },
    ],
  },
  {
    name: "Machine Learning",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "NumPy/Pandas", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "NLP", level: 70 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 85 },
      { name: "AWS", level: 65 },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Tools</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
            <p className="text-slate-400 mt-4 max-w-2xl">
              A comprehensive toolkit developed through academic projects, internships,
              and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={categoryVariants}
                className="glass-morphism p-6 space-y-4 h-full"
              >
                <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                  <CheckCircle size={20} />
                  {category.name}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden border border-slate-700/50">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            variants={categoryVariants}
            className="mt-12 glass-morphism p-8"
          >
            <h3 className="text-2xl font-bold text-slate-50 mb-6">
              Other <span className="gradient-text">Expertise</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "MITRE ATT&CK",
                "Wireshark",
                "Burp Suite",
                "Firebase",
                "MongoDB",
                "PostgreSQL",
                "REST APIs",
                "GraphQL",
                "Jupyter",
                "Pandas",
                "OpenCV",
                "dlib",
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-3 bg-slate-800/30 border border-slate-700/50 rounded-lg text-slate-300 text-center font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
