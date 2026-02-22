"use client";

import { motion } from "framer-motion";
import { Lock, TrendingUp, Handshake } from "lucide-react";

const approachSteps = [
  {
    icon: Lock,
    title: "Acquisition",
    description:
      "We identify undervalued digital assets in high-growth markets through proprietary analysis and market research. Every acquisition is vetted for commercial viability and long-term strategic value.",
  },
  {
    icon: TrendingUp,
    title: "Development",
    description:
      "Our team secures and structures each asset for maximum commercial viability. We ensure proper configuration, trademark clearance, and strategic positioning within target markets.",
  },
  {
    icon: Handshake,
    title: "Transfer",
    description:
      "We facilitate secure, seamless transfer of ownership to qualified operators. Our process ensures all legal, technical, and administrative requirements are met for a smooth transition.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-zinc-500 font-medium text-xs tracking-widest uppercase mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 mb-4 tracking-tight">
            A Disciplined Approach
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500">
            Three strategic phases to maximize the value of digital asset portfolios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/30 border border-zinc-800 p-8 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-zinc-700 transition-colors">
                <step.icon size={22} className="text-zinc-300" />
              </div>

              <span className="text-zinc-600 font-medium text-xs tracking-widest uppercase mb-2">
                Step {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-zinc-200 mb-4">
                {step.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
