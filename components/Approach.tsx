"use client";

import { motion } from "framer-motion";
import { Lock, TrendingUp, Handshake } from "lucide-react";

const approachSteps = [
  {
    icon: Lock,
    title: "Acquisition",
    description:
      "We identify undervalued digital assets in high-growth Texas markets through proprietary research and market analysis. Every acquisition is vetted for commercial viability and long-term value.",
  },
  {
    icon: TrendingUp,
    title: "Development",
    description:
      "Our team secures and structures each asset for maximum commercial viability. We ensure proper DNS configuration, trademark clearance, and strategic positioning within the local market.",
  },
  {
    icon: Handshake,
    title: "Transfer",
    description:
      "We facilitate seamless, secure transfer of ownership to qualified operators. Our process ensures all legal and technical requirements are met for a smooth transition.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-600 font-medium text-sm tracking-widest uppercase mb-4">
            Our Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            A Disciplined Approach
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500">
            Three strategic phases to maximize the value of digital real estate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 border border-slate-200 hover:border-gold-500/30 transition-colors group"
            >
              <div className="w-14 h-14 bg-navy-900 flex items-center justify-center mb-6 group-hover:bg-navy-800 transition-colors">
                <step.icon size={28} className="text-white" />
              </div>

              <span className="text-gold-600 font-medium text-sm tracking-widest uppercase mb-2">
                Step {index + 1}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
