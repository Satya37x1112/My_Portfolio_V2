"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Trophy } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "achievement" | "internship";
}

const timeline: TimelineEvent[] = [
  {
    year: "2024 - Present",
    title: "Research Intern - Physics-Informed Neural Networks",
    subtitle: "NISER, Odisha",
    description:
      "Working on advanced machine learning techniques for solving physics simulations",
    type: "internship",
  },
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    subtitle: "Cybersecurity Specialization",
    description: "Currently in 3rd year, maintaining 8.5+ CGPA",
    type: "education",
  },
  {
    year: "2024",
    title: "TryHackMe Hall of Fame",
    subtitle: "Ethical Hacking & Cybersecurity",
    description: "Completed 50+ security challenges and CTF competitions",
    type: "achievement",
  },
  {
    year: "2023",
    title: "Women Safety App - Award Winner",
    subtitle: "College Innovation Festival",
    description:
      "Recognized for innovative approach to safety through IoT and mobile technology",
    type: "achievement",
  },
  {
    year: "2022",
    title: "GATE Preparation",
    subtitle: "Currently Preparing",
    description: "Consistent performance in mock tests with focus on CS fundamentals",
    type: "achievement",
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <BookOpen className="w-5 h-5" />;
      case "achievement":
        return <Trophy className="w-5 h-5" />;
      case "internship":
        return <Award className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case "education":
        return "bg-blue-500/20 border-blue-500/50 text-blue-400";
      case "achievement":
        return "bg-amber-500/20 border-amber-500/50 text-amber-400";
      case "internship":
        return "bg-cyan-500/20 border-cyan-500/50 text-cyan-400";
      default:
        return "bg-slate-800/30 border-slate-700/50 text-slate-400";
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
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
              Timeline & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pb-12"
              >
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-6 top-20 h-12 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                )}

                {/* Timeline item */}
                <div className="flex gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center relative z-10 ${getColorClass(event.type)}`}
                  >
                    {getIcon(event.type)}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="glass-morphism flex-1 p-6 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-50">
                          {event.title}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-sm">
                          {event.subtitle}
                        </p>
                      </div>
                      <span className="text-sm font-mono text-slate-400 mt-2 sm:mt-0">
                        {event.year}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Years in Tech", value: "3+" },
              { label: "Projects Built", value: "10+" },
              { label: "CTF Challenges", value: "50+" },
              { label: "Research Focus", value: "PINNs" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-morphism p-6 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
