"use client";

import { motion } from "framer-motion";
import { Globe2, BarChart3, Shield } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="flex items-center gap-2 text-emerald-500 font-medium text-xs tracking-widest uppercase mb-4">
              <Globe2 size={14} />
              About
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 mb-8 leading-tight tracking-tight">
              Strategic Digital Asset Management
            </h2>

            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                Voltura specializes in the acquisition and management of high-value digital assets.
                We serve as strategic partners for organizations seeking premium domain portfolios
                that reflect their market position and brand authority.
              </p>
              <p>
                Our global approach spans key markets across North America, Europe, and Asia-Pacific.
                We identify, evaluate, and secure digital assets that deliver long-term value
                for enterprise clients in technology, financial services, healthcare, and professional services.
              </p>
              <p>
                Beyond acquisition, we provide comprehensive portfolio management ensuring
                your digital infrastructure remains secure, properly configured, and aligned
                with your organizational objectives.
              </p>
            </div>

            {/* Value propositions */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-200 font-medium text-sm">Secure Transfer</span>
                  <span className="text-zinc-500 text-xs">Escrow & escrow-free options</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-zinc-200 font-medium text-sm">Valuation</span>
                  <span className="text-zinc-500 text-xs">Market-based pricing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-lg">
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div className="border-b border-zinc-800 pb-4">
                  <span className="block text-3xl md:text-4xl font-semibold text-zinc-100 mb-1">
                    $100M+
                  </span>
                  <span className="text-zinc-500 text-xs tracking-wide uppercase">
                    Assets Under Management
                  </span>
                </div>
                <div className="border-b border-zinc-800 pb-4">
                  <span className="block text-3xl md:text-4xl font-semibold text-zinc-100 mb-1">
                    2,500+
                  </span>
                  <span className="text-zinc-500 text-xs tracking-wide uppercase">
                    Domains Secured
                  </span>
                </div>
                <div className="border-b border-zinc-800 pb-4">
                  <span className="block text-3xl md:text-4xl font-semibold text-zinc-100 mb-1">
                    25+
                  </span>
                  <span className="text-zinc-500 text-xs tracking-wide uppercase">
                    Global Markets
                  </span>
                </div>
                <div className="border-b border-zinc-800 pb-4">
                  <span className="block text-3xl md:text-4xl font-semibold text-zinc-100 mb-1">
                    2018
                  </span>
                  <span className="text-zinc-500 text-xs tracking-wide uppercase">
                    Founded
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle glow accent */}
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
