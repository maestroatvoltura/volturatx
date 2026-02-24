"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Siren, HeartPulse, Clock3 } from "lucide-react";

export default function PhoenixEmergencyVetPage() {
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
                Veterinary / Emergency
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              PhoenixEmergencyVet.com
            </h1>
            <p className="text-zinc-400 text-lg">
              Exact-match emergency pet intent asset for one Phoenix operator.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <Siren className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">700/mo Core Demand</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Core emergency-vet searches in Phoenix are ~<strong>700/month</strong> for primary terms. This is active buyer intent, not casual browsing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <Clock3 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ad Cost Killer</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Emergency-vet CPC is ~<strong>$5.65</strong> on head terms. Stop renting clicks and own an exact-match emergency asset.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <HeartPulse className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">High Urgency Traffic</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Pet emergencies convert fast. Owners search now, call now, and book now. Domain match increases trust and click-through.
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
                  <p className="text-zinc-400 text-sm">One-time transfer via Voltura Digital Assets.</p>
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
                  <span className="text-zinc-300">Permanent ownership and traffic rights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-zinc-300">Invoice + transfer support included</span>
                </div>
              </div>

              <a
                href="mailto:acquisitions@volturatx.com?subject=Acquire PhoenixEmergencyVet.com"
                className="block bg-white text-zinc-950 font-semibold py-4 px-6 rounded-lg text-center hover:bg-zinc-200 transition-all duration-200"
              >
                Secure This Asset Now
              </a>
            </div>
            <div className="bg-zinc-950/50 p-4 text-center border-t border-zinc-800">
              <p className="text-xs text-zinc-500">Offered to select Phoenix emergency veterinary operators.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
