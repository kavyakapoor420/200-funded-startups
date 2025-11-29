"use client"

import { startups } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { notFound } from 'next/navigation';
import React from "react"

function IndianText() {
  return (
    <span className="inline-flex">
      <span className="text-orange-500">In</span>
      <span className="text-white">di</span>
      <span className="text-green-500">a</span>
    </span>
  )
}

function getSectorColor(sector: string) {
  const colors: Record<string, string> = {
    "E-commerce": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Food Tech": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    EdTech: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    Mobility: "bg-green-500/20 text-green-300 border-green-500/30",
    Fintech: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    "Quick Commerce": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  }
  return colors[sector] || "bg-violet-500/20 text-violet-300 border-violet-500/30"
}



// List of valid categories that match the navbar links
const VALID_CATEGORIES = [
  'fintech',
  'edtech',
  'high-funded',
  'startups'  // for /startups route
];

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  // Properly unwrap the params promise
  const { category } = React.use(params);
  
  if (!category) {
    notFound();
  }
  
  const cat = category.toString().toLowerCase();
  
  // Check if the category is valid
  if (!VALID_CATEGORIES.includes(cat) && cat !== 'startups') {
    notFound();
  }
  
  let filtered = startups;

  if (cat === "fintech") {
    filtered = startups.filter(s => 
      s.sector.toLowerCase().includes("fintech")
    );
  } else if (cat === "edtech") {
    filtered = startups.filter(s => 
      s.sector.toLowerCase().includes("edtech")
    );
  } else if (cat === "ecommerce" || cat === "e-commerce") {
    filtered = startups.filter(s => 
      s.sector.toLowerCase().includes("e-commerce") || 
      s.sector.toLowerCase().includes("commerce")
    );
  } else if (cat === "bengaluru" || cat === "bangalore") {
    filtered = startups.filter(
      (s) => s.hq.toLowerCase().includes("bengaluru") || s.hq.toLowerCase().includes("bangalore"),
    )
  } else if (cat === "mumbai") {
    filtered = startups.filter((s) => s.hq.toLowerCase().includes("mumbai"))
  } else if (cat === "unicorn" || cat === "unicorns") {
    filtered = startups.filter((s) => s.funding >= 1000)
  } else if (cat === "high-funded") {
    filtered = startups.filter((s) => s.funding >= 500)
  }

  filtered = [...filtered].sort((a, b) => b.funding - a.funding)

  const titlesWithIndian: Record<string, boolean> = {
    fintech: true,
    edtech: true,
    unicorn: true,
    unicorns: true,
  }

  const titleTexts: Record<string, string> = {
    fintech: "Top Fintech Startups in",
    edtech: "Top EdTech Startups in",
    ecommerce: "Top E-Commerce Startups",
    "e-commerce": "Top E-Commerce Startups",
    bengaluru: "Startups from Bengaluru",
    bangalore: "Startups from Bengaluru",
    mumbai: "Startups from Mumbai",
    unicorn: "Unicorn Startups",
    unicorns: "Unicorn Startups",
    "high-funded": "High-Funded Startups",
  }

  const titleText = titleTexts[cat] || `Startups: ${category.charAt(0).toUpperCase() + category.slice(1)}`
  const showIndian = titlesWithIndian[cat] || false

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0118]">
      <Image src="/bg-main.svg" alt="background" fill className="object-cover -z-10 opacity-90" priority />

      <div className="relative z-10 px-6 lg:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-violet-200 to-violet-400">
              {titleText}
            </span>
            {showIndian && (
              <>
                {" "}
                <IndianText />
              </>
            )}
          </h1>
          <p className="text-xl lg:text-2xl text-violet-200/70 mt-6 font-light">
            {filtered.length} {filtered.length === 1 ? "startup" : "startups"} found
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filtered.map((startup, i) => (
            <motion.div
              key={startup.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/startups/${startup.id}`}>
                <div className="group relative rounded-2xl overflow-hidden border border-violet-500/20 bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl hover:border-violet-400/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                  {/* Rank badge */}
                  <div className="absolute top-4 right-4 z-20 text-sm text-violet-300/60 font-medium">#{i + 1}</div>

                  {/* Logo section */}
                  <div className="relative h-32 flex items-center justify-center bg-gradient-to-b from-violet-900/30 to-transparent p-6">
                    <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-white/10 backdrop-blur p-2">
                      <Image
                        src={startup.logo || "/placeholder.svg"}
                        alt={startup.name}
                        fill
                        className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-5 pt-2">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
                        {startup.name}
                      </h3>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border whitespace-nowrap ${getSectorColor(startup.sector)}`}
                      >
                        {startup.sector}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-violet-300/70 text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{startup.hq.split(",")[0]}</span>
                    </div>

                    <p className="text-violet-200/50 text-sm line-clamp-2 mb-4">{startup.description}</p>

                    <div className="flex items-end justify-between pt-3 border-t border-violet-500/20">
                      <div>
                        <p className="text-xs text-violet-400/60 mb-1">Total Funding</p>
                        <p className="text-2xl font-bold text-cyan-400">${startup.funding}M</p>
                      </div>
                      <span className="text-xs text-violet-400/60 bg-violet-500/10 px-3 py-1.5 rounded-full">
                        Est. {startup.founded}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-3xl text-violet-400/50 mt-32"
          >
            No startups found in this category.
          </motion.p>
        )}
      </div>

      <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-[#0a0118] via-transparent to-[#0a0118]/30 -z-10" />
    </div>
  )
}
