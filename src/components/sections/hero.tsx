"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Content Container */}
      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text block mb-2">
                  Hi, I'm Satya
                </span>
                <span className="text-cyan-600 dark:text-cyan-400">Sarthak</span>
                <span className="text-slate-900 dark:text-white ml-2">Manohari</span>
              </h1>

              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-cyan-600 dark:text-cyan-400 font-semibold">
                  Cybersecurity · AI Research · Developer
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-lg">
                  B.Tech CSE (Cybersecurity) | Research Intern at NISER
                </p>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-md"
            >
              Building secure systems and physics-aware AI. I combine cybersecurity expertise with deep learning research to solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-500 dark:to-cyan-400 text-white dark:text-slate-950 font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800/50"
            >
              <div>
                <p className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">5+</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Projects Built</p>
              </div>
              <div>
                <p className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">NISER</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Research Intern</p>
              </div>
              <div>
                <p className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">B.Tech</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">CSE (Cybersec)</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Portrait */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:flex items-center justify-end pl-8"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-amber-500/20 rounded-full blur-xl" />

              {/* Portrait circle */}
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-xl">
                <img
                  src="/portrait.jpg"
                  alt="Satya Sarthak Manohari"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute -top-4 -right-4"
              >
                <div className="bg-white dark:bg-slate-950 border border-cyan-500/50 rounded-full px-3 py-2 text-cyan-600 dark:text-cyan-400 text-xs font-mono whitespace-nowrap shadow-lg">
                  /cybersecurity
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, linear: true }}
                className="absolute -bottom-4 -left-4"
              >
                <div className="bg-white dark:bg-slate-950 border border-cyan-500/50 rounded-full px-3 py-2 text-cyan-600 dark:text-cyan-400 text-xs font-mono whitespace-nowrap shadow-lg">
                  PINNs/Research
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
