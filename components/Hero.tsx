"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Subtle animated glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Minimal badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Digital Infrastructure Firm
          </span>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-100 mb-6 leading-tight tracking-tight">
            Premium Digital Infrastructure
            <br />
            <span className="text-zinc-400">for the Modern Enterprise</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-500 mb-10 leading-relaxed">
            We acquire, secure, and manage strategic digital assets for global organizations.
            Your premium domain portfolio, expertly curated and maintained.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* View Portfolio Button Removed - Coming Soon */}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-zinc-100 text-zinc-950 font-medium text-sm tracking-wide hover:bg-zinc-200 transition-all duration-200 rounded-md"
            >
              Contact Team →
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
        <a href="#about" className="flex flex-col items-center text-zinc-600 hover:text-zinc-400 transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <ArrowDown size={18} />
        </a>
      </motion.div>
    </section>
  );
}
