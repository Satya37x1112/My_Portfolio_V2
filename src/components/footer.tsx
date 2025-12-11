"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100/50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800/50 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">Satya</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              B.Tech CSE student specializing in Cybersecurity. Research intern
              at NISER working on Physics-Informed Neural Networks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:satya@example.com"
                className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Satya Sarthak Manohari. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="/resume.pdf"
              download
              className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              Resume
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-slate-500">
              Built with Next.js, TailwindCSS & Framer Motion
            </span>
          </div>
        </div>

        {/* Accessibility Note */}
        <p className="text-slate-400 dark:text-slate-600 text-xs mt-6 text-center">
          Accessibility: This site is built with semantic HTML and keyboard
          navigation support.{" "}
          <a
            href="#accessibility"
            className="text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            Report accessibility issues
          </a>
        </p>
      </div>
    </footer>
  );
}
