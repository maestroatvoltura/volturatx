"use client";

import { motion } from "framer-motion";
import { Mail, Globe, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-500 font-medium text-xs tracking-widest uppercase mb-4 block">
              Inquire
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-zinc-100 mb-6 tracking-tight">
              Secure Your Position
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-12 text-lg">
              Discuss acquiring premium digital assets or explore custom acquisition
              services for your organization. Our team responds within 24-48 hours.
            </p>
          </motion.div>

          {/* Action Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl backdrop-blur-sm"
          >
            <div className="flex flex-col gap-6">
              <a
                href="mailto:acquisitions@volturatx.com"
                className="group flex items-center justify-center gap-3 w-full py-4 bg-zinc-100 text-zinc-950 font-semibold text-sm rounded-lg hover:bg-white transition-all duration-200 shadow-lg shadow-zinc-950/50"
              >
                <Mail size={18} />
                <span>Inquire via Email</span>
                <ArrowRight size={16} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
              </a>
              
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Globe size={14} />
                  <span className="text-xs tracking-wide">TEXAS, USA</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs tracking-wide">RESPONSE: &lt;24H</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
