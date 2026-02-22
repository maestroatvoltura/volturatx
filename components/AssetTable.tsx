"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, ExternalLink } from "lucide-react";
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
    id: "GLB-TEC-001",
    domain: "CloudInfrastructure.ai",
    market: "Global",
    category: "Technology",
    status: "Available",
    price: "$85,000",
  },
  {
    id: "NAM-FIN-042",
    domain: "PrivateWealthManagement.com",
    market: "North America",
    category: "Financial Services",
    status: "In Negotiation",
  },
  {
    id: "EUR-HEA-018",
    domain: "TelemedicinePlatform.eu",
    market: "Europe",
    category: "Healthcare",
    status: "Available",
    price: "$45,000",
  },
  {
    id: "APAC-LEG-007",
    domain: "CorporateGovernance.asia",
    market: "Asia-Pacific",
    category: "Legal Services",
    status: "Available",
    price: "$32,000",
  },
  {
    id: "GLB-LUX-023",
    domain: "PrivateAviation.net",
    market: "Global",
    category: "Luxury Services",
    status: "In Negotiation",
  },
  {
    id: "NAM-TEC-089",
    domain: "EnterpriseSecurity.io",
    market: "North America",
    category: "Technology",
    status: "Available",
    price: "$125,000",
  },
  {
    id: "EUR-RET-015",
    domain: "SustainableRetail.eu",
    market: "Europe",
    category: "Retail",
    status: "Available",
    price: "$28,000",
  },
  {
    id: "GLB-HEA-031",
    domain: "ClinicalResearch.net",
    market: "Global",
    category: "Healthcare",
    status: "In Negotiation",
  },
];

const statusStyles = {
  Available: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    dot: "bg-emerald-500",
    icon: CheckCircle,
  },
  "In Negotiation": {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    dot: "bg-blue-500",
    icon: Clock,
  },
  Acquired: {
    bg: "bg-zinc-800/50",
    text: "text-zinc-500",
    border: "border-zinc-700",
    dot: "bg-zinc-600",
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
      className="py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-zinc-500 font-medium text-xs tracking-widest uppercase mb-4">
            Current Inventory
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 mb-4 tracking-tight">
            Portfolio Assets
          </h2>
          <p className="text-zinc-500 max-w-2xl">
            Premium digital assets available for acquisition. All assets have been
            evaluated for strategic market positioning and brand authority.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Available", "In Negotiation"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={cn(
                "px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 border rounded-md",
                filter === status
                  ? "bg-zinc-100 text-zinc-950 border-zinc-100"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300"
              )}
            >
              {status === "All" ? "All Assets" : status}
            </button>
          ))}
        </div>

        {/* Table - Financial Terminal Style */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 tracking-wider uppercase">
                  Asset ID
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 tracking-wider uppercase">
                  Domain
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 tracking-wider uppercase">
                  Market
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 tracking-wider uppercase">
                  Category
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 tracking-wider uppercase">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 tracking-wider uppercase">
                  Valuation
                </th>
                <th className="text-right py-3 px-4 text-xs font-medium text-zinc-500 tracking-wider uppercase">
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
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className={cn(
                      "border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors cursor-pointer",
                      isExpanded && "bg-zinc-900/30"
                    )}
                    onClick={() =>
                      setExpandedRow(isExpanded ? null : asset.id)
                    }
                  >
                    <td className="py-4 px-4">
                      <span className="terminal-font text-xs text-zinc-500">
                        {asset.id}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-200 font-medium">
                          {asset.domain}
                        </span>
                        {isExpanded && (
                          <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight size={12} className="text-zinc-400" />
                          </motion.span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-zinc-400">
                      {asset.market}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex px-2.5 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded">
                        {asset.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium border rounded-md",
                          statusStyle.bg,
                          statusStyle.text,
                          statusStyle.border
                        )}
                      >
                        <span
                          className={cn("w-1.5 h-1.5 rounded-full", statusStyle.dot)}
                        />
                        <StatusIcon size={10} />
                        {asset.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 terminal-font text-xs text-zinc-400">
                      {asset.price || "—"}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 hover:text-zinc-100 transition-all duration-200 rounded-md"
                        onClick={(e) => {
                          e.stopPropagation();
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
                        <ExternalLink size={10} />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-zinc-500 text-sm">
            Seeking assets not listed here?{" "}
            <a href="#contact" className="text-zinc-300 hover:text-zinc-100 transition-colors">
              Contact our acquisition team
            </a>{" "}
            for custom opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
