"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, TrendingUp, Clock, Globe } from "lucide-react";

export default function FriscoAssetPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Asset Header */}
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
                Healthcare / Local SEO
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
              FriscoEmergencyDentist.com
            </h1>
            <p className="text-zinc-400 text-lg">
              Premium Exact-Match Domain for Frisco, TX Dental Market
            </p>
          </motion.div>

          {/* Asset Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Defensive Asset</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Secure your brand against competitors. Prevent others from capturing high-intent "emergency" traffic in your primary service area.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">High ROI</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                One new patient covers the entire acquisition cost. Capture leads actively searching for immediate dental care.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <Globe className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant Authority</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Generic domains lack specific relevance. "FriscoEmergencyDentist.com" signals immediate relevance to search engines and users.
              </p>
            </motion.div>
          </div>

          {/* Acquisition Details */}
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
                  <span className="text-zinc-300">Instant Domain Transfer (Push to your registrar)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-zinc-300">Clean History & Ownership Verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-zinc-300">Secure Transaction Invoice provided</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:acquisitions@volturatx.com?subject=Acquire FriscoEmergencyDentist.com"
                  className="flex-1 bg-white text-zinc-950 font-semibold py-4 px-6 rounded-lg text-center hover:bg-zinc-200 transition-all duration-200"
                >
                  Secure This Asset Now
                </a>
                <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm px-4">
                  <Clock className="w-4 h-4" />
                  <span>Limited Time Offer</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-950/50 p-4 text-center border-t border-zinc-800">
              <p className="text-xs text-zinc-500">
                This asset is being offered exclusively to select partners. Availability is subject to change without notice.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
