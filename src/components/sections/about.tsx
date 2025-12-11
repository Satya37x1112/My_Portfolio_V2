"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Calendar } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a B.Tech Computer Science student specializing in Cybersecurity
                at a leading Indian institution. I'm passionate about building
                secure systems and exploring the intersection of physics and
                machine learning.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Currently, I'm a research intern at NISER, working on
                Physics-Informed Neural Networks (PINNs) to solve differential
                equations and simulate physical systems. I enjoy solving Capture
                The Flag (CTF) challenges, building practical applications, and
                preparing for GATE.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding or researching, you can find me exploring new
                security vulnerabilities, contributing to open-source projects, or
                writing about technology.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <MapPin className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-200">Location</p>
                    <p className="text-slate-400">India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <Calendar className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-slate-200">Currently</p>
                    <p className="text-slate-400">B.Tech Student & Researcher</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 0 30px rgba(0, 240, 255, 0.2)" }}
              className="glass-morphism p-8 space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  Let's Connect
                </h3>
                <p className="text-slate-400">
                  Interested in collaborating or discussing cybersecurity,
                  research, or technology? I'd love to hear from you!
                </p>
              </div>

              <a
                href="mailto:satya@example.com"
                className="flex items-center gap-3 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg text-cyan-400 font-semibold transition-all duration-300 group"
              >
                <Mail size={20} />
                <span>satya@example.com</span>
                <span className="ml-auto group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </a>

              <div className="space-y-2 text-sm text-slate-400">
                <p>📍 Hiring? Let's discuss opportunities</p>
                <p>🔍 Interested in my research? Let's collaborate</p>
                <p>🛡️ Security topics? Always up for a conversation</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
