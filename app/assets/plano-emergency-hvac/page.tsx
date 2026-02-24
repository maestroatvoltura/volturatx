"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ThermometerSun, Wrench, Clock3 } from "lucide-react";

export default function PlanoEmergencyHVACPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-b border-zinc-800 pb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-wide uppercase border border-emerald-500/20">
                Available for Acquisition
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 text-xs font-medium tracking-wide uppercase border border-zinc-700/50">
                HVAC / Emergency Service
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              PlanoEmergencyHVAC.com
            </h1>
            <p className="text-zinc-400 text-lg">
              Exact-match emergency HVAC asset for Plano homeowners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <ThermometerSun className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">High Urgency Intent</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                When AC fails in Texas heat, customers don&apos;t browse. They search emergency HVAC and call immediately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <Clock3 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Buyer Traffic</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                This domain is built for after-hours breakdown traffic when response speed wins the job.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <Wrench className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">One Job Covers Cost</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                A single emergency repair can cover this acquisition multiple times. One-time purchase, permanent ownership.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-zinc-800 pb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Acquisition Terms</h2>
                  <p className="text-zinc-400 text-sm">Full ownership transfer via Voltura Digital Assets.</p>
                </div>
                <div className="text-right">
                  <span className="block text-sm text-zinc-500 uppercase tracking-wider font-medium mb-1">Total Valuation</span>
                  <span className="text-4xl font-bold text-white">$250.00</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-zinc-300">Instant domain transfer</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-zinc-300">Permanent traffic rights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-zinc-300">Invoice and transfer support included</span>
                </div>
              </div>

              <a
                href="mailto:acquisitions@volturatx.com?subject=Acquire PlanoEmergencyHVAC.com"
                className="block bg-white text-zinc-950 font-semibold py-4 px-6 rounded-lg text-center hover:bg-zinc-200 transition-all duration-200"
              >
                Secure This Asset Now
              </a>
            </div>
            <div className="bg-zinc-950/50 p-4 text-center border-t border-zinc-800">
              <p className="text-xs text-zinc-500">Exclusive offer to Plano HVAC operators.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
