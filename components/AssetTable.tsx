"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface Asset {
  id: string;
  domain: string;
  market: string;
  category: string;
  status: "Available" | "In Negotiation" | "Acquired";
  price?: string;
}

const assets: Asset[] = [
  {
    id: "TX-DAL-09",
    domain: "FriscoEmergencyDentist.com",
    market: "Dallas-Fort Worth",
    category: "Healthcare",
    status: "Available",
    price: "$15,000",
  },
  {
    id: "TX-ATX-22",
    domain: "AustinLuxuryRoofing.com",
    market: "Austin",
    category: "Trade Services",
    status: "In Negotiation",
  },
  {
    id: "TX-HOU-15",
    domain: "HoustonCorporateLawyer.com",
    market: "Houston",
    category: "Legal",
    status: "Available",
    price: "$25,000",
  },
  {
    id: "TX-SAT-07",
    domain: "SanAntonioCommercialRealEstate.com",
    market: "San Antonio",
    category: "Real Estate",
    status: "Available",
    price: "$18,500",
  },
  {
    id: "TX-AUS-31",
    domain: "AustinMedSpa.com",
    market: "Austin",
    category: "Healthcare",
    status: "In Negotiation",
  },
  {
    id: "TX-FWT-04",
    domain: "FortWorthPersonalInjury.com",
    market: "Dallas-Fort Worth",
    category: "Legal",
    status: "Available",
    price: "$12,000",
  },
  {
    id: "TX-PL-12",
    domain: "PlanoHomeHealthCare.com",
    market: "Dallas-Fort Worth",
    category: "Healthcare",
    status: "Available",
    price: "$9,500",
  },
  {
    id: "TX-ALD-03",
    domain: "AldineCommercialPlumbing.com",
    market: "Houston",
    category: "Trade Services",
    status: "In Negotiation",
  },
];

const statusStyles = {
  Available: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    dot: "bg-green-500",
    icon: CheckCircle,
  },
  "In Negotiation": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    dot: "bg-amber-500",
    icon: Clock,
  },
  Acquired: {
    bg: "bg-slate-50",
    text: "text-slate-500",
    border: "border-slate-200",
    dot: "bg-slate-400",
    icon: CheckCircle,
  },
};

export default function AssetTable() {
  const [filter, setFilter] = useState<string>("All");
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const filteredAssets =
    filter === "All" ? assets : assets.filter((a) => a.status === filter);

  return (
    <section
      id="portfolio"
      className="py-24 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-gold-600 font-medium text-sm tracking-widest uppercase mb-4">
            Current Inventory
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Portfolio Assets
          </h2>
          <p className="text-slate-500 max-w-2xl">
            Premium digital real estate assets available for acquisition. Each
            asset has been vetted for market potential and strategic value.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["All", "Available", "In Negotiation"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={cn(
                "px-5 py-2 text-sm font-medium tracking-wide transition-colors border",
                filter === status
                  ? "bg-navy-900 text-white border-navy-900"
                  : "bg-white text-slate-600 border-slate-300 hover:border-navy-900"
              )}
            >
              {status === "All" ? "All Assets" : status}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-4 text-xs font-medium text-slate-500 tracking-widest uppercase">
                  Asset ID
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-slate-500 tracking-widest uppercase">
                  Domain
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-slate-500 tracking-widest uppercase">
                  Market
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-slate-500 tracking-widest uppercase">
                  Category
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-slate-500 tracking-widest uppercase">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-xs font-medium text-slate-500 tracking-widest uppercase">
                  Valuation
                </th>
                <th className="text-right py-4 px-4 text-xs font-medium text-slate-500 tracking-widest uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.map((asset, index) => {
                const statusStyle = statusStyles[asset.status];
                const StatusIcon = statusStyle.icon;
                const isExpanded = expandedRow === asset.id;

                return (
                  <motion.tr
                    key={asset.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={cn(
                      "border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer",
                      isExpanded && "bg-slate-50"
                    )}
                    onClick={() =>
                      setExpandedRow(isExpanded ? null : asset.id)
                    }
                  >
                    <td className="py-5 px-4">
                      <span className="font-mono text-sm text-navy-900 font-medium">
                        {asset.id}
                      </span>
                    </td>
                    <td className="py-5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-navy-900">
                          {asset.domain}
                        </span>
                        {isExpanded && (
                          <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 90 }}
                          >
                            <ArrowRight size={14} className="text-gold-600" />
                          </motion.span>
                        )}
                      </div>
                    </td>
                    <td className="py-5 px-4 text-slate-600">
                      {asset.market}
                    </td>
                    <td className="py-5 px-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600">
                        {asset.category}
                      </span>
                    </td>
                    <td className="py-5 px-4">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium border",
                          statusStyle.bg,
                          statusStyle.text,
                          statusStyle.border
                        )}
                      >
                        <span
                          className={cn("w-1.5 h-1.5 rounded-full", statusStyle.dot)}
                        />
                        <StatusIcon size={12} />
                        {asset.status}
                      </span>
                    </td>
                    <td className="py-5 px-4 font-mono text-sm text-slate-600">
                      {asset.price || "—"}
                    </td>
                    <td className="py-5 px-4 text-right">
                      <button
                        className="px-4 py-2 text-xs font-medium text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Scroll to contact form with asset pre-filled
                          const form = document.getElementById("contact-form");
                          if (form) {
                            const input = form.querySelector(
                              'input[name="asset"]'
                            ) as HTMLInputElement;
                            if (input) input.value = asset.domain;
                            form.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {asset.status === "Available"
                          ? "Inquire"
                          : asset.status === "In Negotiation"
                            ? "Waitlist"
                            : "Unavailable"}
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Looking for assets not listed here?{" "}
            <a href="#contact" className="text-gold-600 hover:underline">
              Contact us
            </a>{" "}
            for custom acquisition services.
          </p>
        </div>
      </div>
    </section>
  );
}
