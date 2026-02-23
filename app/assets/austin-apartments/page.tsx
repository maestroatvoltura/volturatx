"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, Search, DollarSign, Crown } from "lucide-react";

export default function AustinApartmentsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest uppercase border border-amber-500/20 shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]">
              <Crown size={14} />
              Premium Asset
            </span>
          </motion.div>

          {/* Asset Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
              AustinApartmentsForRent.com
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              The #1 Exact-Match Domain for Austin's Rental Market.
              <br />
              <span className="text-zinc-500 text-base">Command the search results. Own the category.</span>
            </p>
          </motion.div>

          {/* The Data Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Search size={100} />
              </div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Monthly Search Volume</h3>
              <div className="text-5xl font-bold text-white mb-2">10,700</div>
              <p className="text-zinc-400 text-sm">
                People search this <strong>exact phrase</strong> every month. It is the highest-volume rental keyword in Austin.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <DollarSign size={100} />
              </div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Commission Value</h3>
              <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
              <p className="text-zinc-400 text-sm">
                Apartment locators earn 50-100% of first month's rent. <strong>Two leases</strong> pays for this entire asset.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 size={100} />
              </div>
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">SEO Authority</h3>
              <div className="text-5xl font-bold text-blue-400 mb-2">Top</div>
              <p className="text-zinc-400 text-sm">
                Exact Match Domains (EMD) have a massive advantage in ranking for their specific keyword.
              </p>
            </motion.div>
          </div>

          {/* Acquisition Details */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Asset Valuation</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-zinc-200 font-medium">Premium .COM Extension</span>
                      <span className="text-zinc-500 text-sm">The gold standard for trust and authority.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-zinc-200 font-medium">Instant Lead Generation</span>
                      <span className="text-zinc-500 text-sm">Redirect to your IDX or booking page immediately.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-zinc-200 font-medium">Tax Deductible Asset</span>
                      <span className="text-zinc-500 text-sm">100% write-off as a marketing expense.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950/50 p-8 rounded-xl border border-zinc-800 text-center">
                <span className="block text-sm text-zinc-500 uppercase tracking-wider font-medium mb-2">Buy It Now Price</span>
                <span className="block text-6xl font-bold text-white mb-8 tracking-tight">$2,950</span>
                
                <a 
                  href="mailto:acquisitions@volturatx.com?subject=Premium Asset: AustinApartmentsForRent.com"
                  className="block w-full bg-amber-500 text-zinc-950 font-bold py-4 px-6 rounded-lg text-center hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20"
                >
                  Acquire Asset
                </a>
                <p className="mt-4 text-xs text-zinc-500">
                  Escrow.com available for secure transaction.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
