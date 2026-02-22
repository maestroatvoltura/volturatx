"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white border-t border-slate-100"
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
            <span className="flex items-center gap-2 text-gold-600 font-medium text-sm tracking-widest uppercase mb-4">
              <Building2 size={16} />
              The Firm
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-8 leading-tight">
              Custodians of Digital Territory
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Voltura Digital Assets specializes in the acquisition of
                high-value, geo-specific domain names. We act as custodians of
                digital territory, ensuring that local market leaders own the
                virtual real estate that defines their industry.
              </p>
              <p>
                Based in Texas, we understand the unique dynamics of local
                markets—from the bustling tech corridors of Austin to the
                energy-driven industries of Houston. Our portfolio represents
                strategic positions in key sectors: healthcare, legal services,
                trade professions, and luxury services.
              </p>
              <p>
                We don&apos;t just sell domains. We facilitate the secure transfer
                of digital assets to qualified operators who understand the
                value of premium digital real estate.
              </p>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-navy-900 p-8 md:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center border-r border-navy-700">
                  <span className="block font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                    $50M+
                  </span>
                  <span className="text-slate-400 text-sm tracking-wide uppercase">
                    Assets Under Management
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                    500+
                  </span>
                  <span className="text-slate-400 text-sm tracking-wide uppercase">
                    Texas Domains
                  </span>
                </div>
                <div className="text-center border-r border-navy-700">
                  <span className="block font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                    15+
                  </span>
                  <span className="text-slate-400 text-sm tracking-wide uppercase">
                    Metro Markets
                  </span>
                </div>
                <div className="text-center">
                  <span className="block font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                    2018
                  </span>
                  <span className="text-slate-400 text-sm tracking-wide uppercase">
                    Founded
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500 -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
