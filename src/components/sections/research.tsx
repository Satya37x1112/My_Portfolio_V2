"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

export default function Research() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="research" className="py-20 bg-slate-100/50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Research & <span className="gradient-text">Internship</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
          </div>

          {/* Main Research Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left - Details */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                whileHover={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.2)" }}
                className="glass-morphism p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500/20 border border-cyan-500/50">
                      <FileText className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-50 mb-2">
                      Physics-Informed Neural Networks
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      Research Intern at NISER
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      May 2025 - July 2025
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-2">
                      Objective
                    </h4>
                    <p className="text-slate-400">
                      Develop and optimize Physics-Informed Neural Networks
                      (PINNs) to estimate magnetic field distributions in
                      Bisphenol A-based systems and solve complex partial
                      differential equations.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-200 mb-2">
                      Approach
                    </h4>
                    <p className="text-slate-400">
                      Implemented custom loss functions combining physics
                      constraints with neural network training. Used PyTorch
                      for deep learning model development and TensorFlow for
                      numerical validation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-200 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "PyTorch",
                        "NumPy",
                        "TensorFlow",
                        "Jupyter",
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href="/research-slide-deck.pdf"
                    className="flex items-center justify-center gap-2 px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg text-cyan-400 font-medium transition-all duration-200"
                  >
                    <FileText size={18} />
                    View Slides
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 px-6 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg text-slate-300 font-medium transition-all duration-200"
                  >
                    <ExternalLink size={18} />
                    Read Paper
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right - Key Points */}
            <motion.div className="space-y-4">
              <div className="glass-morphism p-6 space-y-3">
                <h4 className="font-bold text-cyan-400 text-lg">Key Outcomes</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>25% improved prediction accuracy</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Novel physics constraint formulation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Published research insights</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Open-source implementation</span>
                  </li>
                </ul>
              </div>

              <div className="glass-morphism p-6">
                <h4 className="font-bold text-amber-400 text-lg mb-3">
                  Publications
                </h4>
                <p className="text-slate-400 text-sm">
                  Research findings submitted to top-tier ML conferences.
                  Details available upon request.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
