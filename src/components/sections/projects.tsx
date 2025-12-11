"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Network Intrusion Detection System",
    description:
      "ML-powered system to detect and classify network attacks in real-time. Built with Python, Scikit-learn, and deployed using Flask API for enterprise security monitoring.",
    image: "/project1.jpg",
    tags: ["Python", "Machine Learning", "Cybersecurity", "Flask"],
    githubUrl: "https://github.com/username/network-ids",
  },
  {
    title: "Physics-Informed Neural Network (PINN)",
    description:
      "Deep learning model for estimating magnetic field distributions in BH systems. Research project at NISER combining physics constraints with neural networks.",
    image: "/project2.jpg",
    tags: ["Python", "PyTorch", "Physics", "Deep Learning"],
    githubUrl: "https://github.com/username/pinn-research",
  },
  {
    title: "Face Recognition System",
    description:
      "Real-time face detection and recognition system using dlib and OpenCV. Features face verification, attendance automation, and secure database management.",
    image: "/project3.jpg",
    tags: ["Python", "OpenCV", "dlib", "Computer Vision"],
    githubUrl: "https://github.com/username/face-recognition",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl">
              A selection of my most impactful projects showcasing skills in
              cybersecurity, machine learning, and system design.
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group glass-morphism overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-500/10"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 dark:text-slate-400 font-mono text-sm">
                    [{project.image}]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-slate-950 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-600 dark:text-cyan-400 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg text-cyan-600 dark:text-cyan-400 font-medium transition-all duration-200"
                      >
                        <ExternalLink size={16} />
                        <span className="hidden sm:inline">Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 border border-slate-300 dark:border-slate-700/50 rounded-lg text-slate-700 dark:text-slate-300 font-medium transition-all duration-200"
                    >
                      <Github size={16} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div
            variants={cardVariants}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/username?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 border border-slate-300 dark:border-slate-700/50 rounded-lg text-slate-700 dark:text-slate-300 font-medium transition-all duration-200 group"
            >
              View All Projects on GitHub
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
