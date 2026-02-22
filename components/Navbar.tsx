"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { href: "#about", label: "The Firm" },
  { href: "#approach", label: "Approach" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-navy-900 flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">V</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-xl font-semibold text-navy-900">
              Voltura
            </span>
            <span className="block text-xs text-slate-500 tracking-widest uppercase">
              Digital Assets
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-navy-900 transition-colors font-medium text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-navy-900 text-white font-medium text-sm tracking-wide hover:bg-navy-800 transition-colors"
          >
            Inquire
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-slate-200"
          >
            <nav className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-600 hover:text-navy-900 transition-colors font-medium py-2 border-b border-slate-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-3 bg-navy-900 text-white font-medium text-center tracking-wide hover:bg-navy-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inquire
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
