"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl gradient-text"
          >
            <span className="text-cyan-500 dark:text-cyan-400">{"</>"}</span>
            <span>Satya</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/50"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side - Theme toggle and Resume CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg text-cyan-600 dark:text-cyan-400 font-medium transition-colors duration-200"
              aria-label="Download Resume"
            >
              <Download size={16} />
              <span className="hidden md:inline">Resume</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800/50">
            <div className="space-y-1 px-2 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-cyan-600 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
