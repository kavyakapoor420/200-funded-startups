"use client";

import { startups } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Search } from "lucide-react";
import BgImage from '../../../assets/bgmain.svg'
import { motion } from "framer-motion";
import { useState } from "react";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.toLowerCase();

  // Pre-filter based on category
  let filtered = startups;
  if (category === "fintech") {
    filtered = startups.filter(s => s.sector.toLowerCase() === "fintech");
  } else if (category === "edtech") {
    filtered = startups.filter(s => s.sector.toLowerCase() === "edtech");
  } else if (category === "bengaluru") {
    filtered = startups.filter(s => s.hq.toLowerCase().includes("bengaluru"));
  } else if (category === "high-funded") {
    filtered = startups.filter(s => s.funding > 1000);
  } else {
    // Fallback to all if category not recognized
    filtered = startups;
  }

  filtered = filtered.sort((a, b) => b.funding - a.funding);

  const title = {
    fintech: "Top Fintech Startups",
    edtech: "Top EdTech Startups",
    bengaluru: "Startups in Bengaluru",
    "high-funded": "High Funded Startups (> $1B)",
  }[category] || "Top Startups";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        src={BgImage}
        alt="bg"
        fill
        className="object-cover -z-10 opacity-90"
        priority
      />

      <div className="relative z-10 px-6 lg:px-20 py-16 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-5xl lg:text-8xl font-medium tracking-tighter mb-8"
        >
          {title}
        </motion.h1>
        <p className="text-2xl text-[#e1e1e1] font-light mb-16 max-w-3xl">
          Curated selection from India's startup ecosystem
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {filtered.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-[#252525] rounded-3xl p-6 hover:scale-105 transition"
            >
              <Image src={s.logo} alt={s.name} width={80} height={80} className="rounded-full mb-4 mx-auto" />
              <h2 className="text-2xl font-bold mb-2 text-center">{s.name}</h2>
              <p className="text-[#e1e1e1] mb-1 text-center">{s.sector}</p>
              <p className="text-green-400 font-bold text-center">${s.funding}M</p>
              <p className="text-gray-400 text-sm text-center">{s.hq}</p>
              <p className="text-gray-500 text-xs text-center mt-2">Founded: {s.founded}</p>
              <Link href={s.website} target="_blank" className="block text-blue-400 mt-4 text-center hover:underline">
                Website
              </Link>
              <Link href={`/startups/${s.id}`} className="block text-white mt-2 font-medium text-center hover:underline">
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-2xl text-gray-500 mt-20">No startups in this category.</p>
        )}
      </div>
      <div className="absolute h-[50%] w-full bg-gradient-to-t from-[#101010] via-transparent to-transparent bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  );
}