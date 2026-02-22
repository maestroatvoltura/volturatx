"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cream to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-gold-600 uppercase bg-gold-500/10 border border-gold-500/20">
            Texas Digital Real Estate
          </span>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-6 leading-tight">
            Strategic Digital Infrastructure
            <br />
            <span className="text-navy-700">for Texas Enterprise</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
            We acquire, secure, and develop premium digital real estate for the
            state&apos;s leading industries. Your digital territory, expertly
            managed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-navy-900 text-white font-medium tracking-wide hover:bg-navy-800 transition-colors"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-navy-900 text-navy-900 font-medium tracking-wide hover:bg-navy-900 hover:text-white transition-colors"
            >
              Contact Broker
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#about" className="flex flex-col items-center text-slate-400 hover:text-navy-900 transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
