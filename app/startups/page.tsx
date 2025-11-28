// app/startups/page.tsx
"use client";
import { startups } from '../../data/data'
import Image from "next/image";
import Link from "next/link";
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, ArrowUpDown } from "lucide-react";
import { useState } from "react";

// This page is client-side only → safe to use "use client"


export default function StartupsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("funding_desc");

  // Extract unique values
  const sectors = ["all", ...Array.from(new Set(startups.map(s => s.sector)))].sort();
  const cities = ["all", ...Array.from(new Set(startups.map(s => s.hq.split(",")[0].trim())))].sort();

  // Filtered & sorted data
  let filtered = startups
    .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(s => sectorFilter === "all" || s.sector === sectorFilter)
    .filter(s => cityFilter === "all" || s.hq.split(",")[0].trim() === cityFilter);

  // Sorting
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "funding_desc") return b.funding - a.funding;
    if (sortBy === "funding_asc") return a.funding - b.funding;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#101010] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 tracking-tight">
          Top Funded Indian Startups
        </h1>
        <p className="text-center text-[#d1d1d1] mb-10 max-w-2xl mx-auto">
          Discover 50+ high-growth startups across fintech, edtech, quick commerce, AI, and more.
        </p>

        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 justify-center items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <Input
              placeholder="Search startups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-[#1a1a1a] border-[#252525] text-white placeholder:text-gray-500"
            />
          </div>

          <Select value={sectorFilter} onValueChange={setSectorFilter}>
            <SelectTrigger className="w-[200px] bg-[#1a1a1a] border-[#252525]">
              <SelectValue placeholder="All Sectors" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map(sector => (
                <SelectItem key={sector} value={sector}>
                  {sector === "all" ? "All Sectors" : sector}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={cityFilter} onValueChange={setCityFilter}>
            <SelectTrigger className="w-[200px] bg-[#1a1a1a] border-[#252525]">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              {cities.map(city => (
                <SelectItem key={city} value={city}>
                  {city === "all" ? "All Cities" : city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[220px] bg-[#1a1a1a] border-[#252525]">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="funding_desc">Funding: High → Low</SelectItem>
              <SelectItem value="funding_asc">Funding: Low → High</SelectItem>
              <SelectItem value="name">Name: A → Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((startup) => (
            <Link
              key={startup.id}
              href={`/startups/${startup.id}`}
              className="group border border-[#252525] rounded-2xl p-6 bg-[#161616]/50 backdrop-blur-sm hover:border-[#333] transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                  <Image
                    src={startup.logo}
                    alt={startup.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-white transition">
                  {startup.name}
                </h3>
              </div>

              <div className="space-y-2 text-sm text-[#d1d1d1]">
                <p className="font-medium text-white">{startup.sector}</p>
                <p className="text-green-400 font-semibold">${startup.funding}M</p>
                <p className="text-xs">{startup.hq.split(",")[0]}</p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#888]">
            <p className="text-2xl">No startups found</p>
            <p>Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}