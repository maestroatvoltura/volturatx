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

          {/* Stats - Replaced with Core Values to remove fake numbers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-lg backdrop-blur-sm">
              <div className="space-y-8">
                <div className="border-b border-zinc-800 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">Discretion</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    We operate with complete confidentiality. Your acquisitions and strategic moves remain private until you choose to announce them.
                  </p>
                </div>
                
                <div className="border-b border-zinc-800 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">Security</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Our transfer protocols utilize escrow-grade security to ensure asset integrity and seamless ownership migration.
                  </p>
                </div>

                <div className="pb-2">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">Speed</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Digital markets move instantly. Our acquisition pipeline is built for rapid execution and immediate asset deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle glow accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
