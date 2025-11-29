// // app/startups/page.tsx
// "use client";
// import { startups } from '../../data/data'
// import Image from "next/image";
// import Link from "next/link";
// import { Input } from '../components/ui/input'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
// import { Search, ArrowUpDown } from "lucide-react";
// import { useState } from "react";

// // This page is client-side only → safe to use "use client"


// export default function StartupsPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sectorFilter, setSectorFilter] = useState("all");
//   const [cityFilter, setCityFilter] = useState("all");
//   const [sortBy, setSortBy] = useState("funding_desc");

//   // Extract unique values
//   const sectors = ["all", ...Array.from(new Set(startups.map(s => s.sector)))].sort();
//   const cities = ["all", ...Array.from(new Set(startups.map(s => s.hq.split(",")[0].trim())))].sort();

//   // Filtered & sorted data
//   let filtered = startups
//     .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .filter(s => sectorFilter === "all" || s.sector === sectorFilter)
//     .filter(s => cityFilter === "all" || s.hq.split(",")[0].trim() === cityFilter);

//   // Sorting
//   filtered = [...filtered].sort((a, b) => {
//     if (sortBy === "funding_desc") return b.funding - a.funding;
//     if (sortBy === "funding_asc") return a.funding - b.funding;
//     if (sortBy === "name") return a.name.localeCompare(b.name);
//     return 0;
//   });

//   return (
//     <div className="min-h-screen bg-[#101010] text-white py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-5xl font-bold text-center mb-4 tracking-tight">
//           Top Funded Indian Startups
//         </h1>
//         <p className="text-center text-[#d1d1d1] mb-10 max-w-2xl mx-auto">
//           Discover 50+ high-growth startups across fintech, edtech, quick commerce, AI, and more.
//         </p>

//         {/* Filters Bar */}
//         <div className="flex flex-col lg:flex-row gap-4 mb-12 justify-center items-center">
//           <div className="relative w-full max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
//             <Input
//               placeholder="Search startups..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 bg-[#1a1a1a] border-[#252525] text-white placeholder:text-gray-500"
//             />
//           </div>

//           <Select value={sectorFilter} onValueChange={setSectorFilter}>
//             <SelectTrigger className="w-[200px] bg-[#1a1a1a] border-[#252525]">
//               <SelectValue placeholder="All Sectors" />
//             </SelectTrigger>
//             <SelectContent>
//               {sectors.map(sector => (
//                 <SelectItem key={sector} value={sector}>
//                   {sector === "all" ? "All Sectors" : sector}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={cityFilter} onValueChange={setCityFilter}>
//             <SelectTrigger className="w-[200px] bg-[#1a1a1a] border-[#252525]">
//               <SelectValue placeholder="All Cities" />
//             </SelectTrigger>
//             <SelectContent>
//               {cities.map(city => (
//                 <SelectItem key={city} value={city}>
//                   {city === "all" ? "All Cities" : city}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={sortBy} onValueChange={setSortBy}>
//             <SelectTrigger className="w-[220px] bg-[#1a1a1a] border-[#252525]">
//               <ArrowUpDown className="w-4 h-4 mr-2" />
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="funding_desc">Funding: High → Low</SelectItem>
//               <SelectItem value="funding_asc">Funding: Low → High</SelectItem>
//               <SelectItem value="name">Name: A → Z</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filtered.map((startup) => (
//             <Link
//               key={startup.id}
//               href={`/startups/${startup.id}`}
//               className="group border border-[#252525] rounded-2xl p-6 bg-[#161616]/50 backdrop-blur-sm hover:border-[#333] transition-all hover:-translate-y-1"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
//                   <Image
//                     src={startup.logo}
//                     alt={startup.name}
//                     width={56}
//                     height={56}
//                     className="object-contain"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold group-hover:text-white transition">
//                   {startup.name}
//                 </h3>
//               </div>

//               <div className="space-y-2 text-sm text-[#d1d1d1]">
//                 <p className="font-medium text-white">{startup.sector}</p>
//                 <p className="text-green-400 font-semibold">${startup.funding}M</p>
//                 <p className="text-xs">{startup.hq.split(",")[0]}</p>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {filtered.length === 0 && (
//           <div className="text-center py-20 text-[#888]">
//             <p className="text-2xl">No startups found</p>
//             <p>Try adjusting your filters</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { startups } from "@/data/data";
// import Image from "next/image";
// import Link from "next/link";
// import { Input } from "../components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
// import { Search } from "lucide-react";
// import BgImage from '../../assets/bgmain.svg'
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function StartupsPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sectorFilter, setSectorFilter] = useState("all");
//   const [cityFilter, setCityFilter] = useState("all");

//   const sectors = ["all", ...new Set(startups.map(s => s.sector))].sort();
//   const cities = ["all", ...new Set(startups.map(s => s.hq.split(",")[0].trim()))].sort();

//   const filtered = startups
//     .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     .filter(s => sectorFilter === "all" || s.sector === sectorFilter)
//     .filter(s => cityFilter === "all" || s.hq.split(",")[0].trim() === cityFilter)
//     .sort((a, b) => b.funding - a.funding);

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <Image
//         src={BgImage}
//         alt="bg"
//         fill
//         className="object-cover -z-10 opacity-90"
//         priority
//       />

//       <div className="relative z-10 px-6 lg:px-20 py-16 lg:py-24">
//         <motion.div
//           initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
//           animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           transition={{ duration: 1.2, type: "spring" }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
//             Indian Startups
//           </h1>
//           <p className="text-xl lg:text-2xl text-[#e1e1e1] font-light max-w-3xl mx-auto">
//             Explore the most funded and fastest-growing companies in India
//           </p>
//         </motion.div>

//         {/* Filters */}
//         <div className="max-w-full max-w-5xl mx-auto mb-20 flex flex-col md:flex-row gap-5">
//           <div className="relative flex-1">
//             <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
//             <Input
//               placeholder="Search by name..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-14 h-16 text-lg bg-black/40 backdrop-blur-xl border border-[#252525] text-white placeholder:text-gray-500 rounded-2xl"
//             />
//           </div>
//           <Select value={sectorFilter} onValueChange={setSectorFilter}>
//             <SelectTrigger className="w-full md:w-64 h-16 bg-black/40 backdrop-blur-xl border-[#252525] rounded-2xl">
//               <SelectValue placeholder="All Sectors" />
//             </SelectTrigger>
//             <SelectContent>
//               {sectors.map(s => <SelectItem key={s} value={s}>{s === "all" ? "All Sectors" : s}</SelectItem>)}
//             </SelectContent>
//           </Select>
//           <Select value={cityFilter} onValueChange={setCityFilter}>
//             <SelectTrigger className="w-full md:w-64 h-16 bg-black/40 backdrop-blur-xl border-[#252525] rounded-2xl">
//               <SelectValue placeholder="All Cities" />
//             </SelectTrigger>
//             <SelectContent>
//               {cities.map(c => <SelectItem key={c} value={c}>{c === "all" ? "All Cities" : c}</SelectItem>)}
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {filtered.map((startup, i) => (
//             <motion.div
//               key={startup.id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.08 }}
//             >
//               <Link href={`/startups/${startup.id}`}>
//                 <div className="group relative h-80 rounded-3xl overflow-hidden border border-[#252525] bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-2xl">
//                   <Image
//                     src={startup.logo}
//                     alt={startup.name}
//                     fill
//                     className="object-contain p-10 grayscale group-hover:grayscale-0 transition-all duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
//                   <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
//                     <h3 className="text-2xl font-bold mb-2">{startup.name}</h3>
//                     <p className="text-lg text-gray-300 mb-4">{startup.sector}</p>
//                     <div className="flex justify-between items-end">
//                       <span className="text-4xl font-bold text-green-400">${startup.funding}M</span>
//                       <span className="text-sm bg-white/10 backdrop-blur px-3 py-1 rounded-full">
//                         {startup.hq.split(",")[0]}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-[#101010] via-transparent to-[#101010]/30 -z-10" />
//     </div>
//   );
// }



"use client"

import { startups } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Search, TrendingUp, MapPin, Globe, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "../components/ui/badge"
import BgMain from '../../assets/bgmain.svg'


function IndianText({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-orange-500">In</span>
      <span className="text-white">di</span>
      <span className="text-green-500">an</span>
    </span>
  )
}

export default function StartupsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sectorFilter, setSectorFilter] = useState("all")
  const [cityFilter, setCityFilter] = useState("all")

  const sectors = ["all", ...new Set(startups.map((s) => s.sector))].sort()
  const cities = ["all", ...new Set(startups.map((s) => s.hq.split(",")[0].trim()))].sort()

  const filtered = startups
    .filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((s) => sectorFilter === "all" || s.sector === sectorFilter)
    .filter((s) => cityFilter === "all" || s.hq.split(",")[0].trim() === cityFilter)
    .sort((a, b) => b.funding - a.funding)

  const totalFunding = filtered.reduce((acc, s) => acc + s.funding, 0)

  const getSectorColor = (sector: string) => {
    const colors: Record<string, string> = {
      "E-commerce": "bg-blue-500/20 text-blue-300 border-blue-400/40",
      "Food Tech": "bg-orange-500/20 text-orange-300 border-orange-400/40",
      EdTech: "bg-violet-500/20 text-violet-300 border-violet-400/40",
      Mobility: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
      Fintech: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
      "Quick Commerce": "bg-pink-500/20 text-pink-300 border-pink-400/40",
    }
    return colors[sector] || "bg-gray-500/20 text-gray-300 border-gray-400/40"
  }

  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Background with gradient mesh */}
      <div className="fixed inset-0 -z-10">
        <Image src={BgMain} alt="background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/60 via-transparent to-[#0a0118]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-20 py-8 lg:py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm text-violet-200 font-medium">{filtered.length} Startups Listed</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <IndianText /> <span className="text-white">Startups</span>
          </h1>
          <p className="text-lg lg:text-xl text-violet-200/70 font-normal max-w-2xl mx-auto leading-relaxed">
            Discover the most funded and fastest-growing companies shaping <IndianText className="font-semibold" />
            's future
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-violet-300" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">${(totalFunding / 1000).toFixed(1)}B</p>
                <p className="text-xs text-violet-300/70">Total Funding</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-violet-300" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">{sectors.length - 1}</p>
                <p className="text-xs text-violet-300/70">Sectors</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-violet-300" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">{cities.length - 1}</p>
                <p className="text-xs text-violet-300/70">Cities</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-5xl mx-auto mb-12 lg:mb-16"
        >
          <div className="flex flex-col lg:flex-row gap-3 p-4 rounded-2xl bg-violet-950/40 backdrop-blur-xl border border-violet-500/20">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-300/60 w-5 h-5" />
              <Input
                placeholder="Search startups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-base bg-violet-950/50 border-violet-500/30 text-white placeholder:text-violet-300/50 rounded-xl focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/50"
              />
            </div>
            <Select value={sectorFilter} onValueChange={setSectorFilter}>
              <SelectTrigger className="w-full lg:w-52 h-12 bg-violet-950/50 border-violet-500/30 rounded-xl text-white">
                <SelectValue placeholder="All Sectors" />
              </SelectTrigger>
              <SelectContent className="bg-violet-950/95 backdrop-blur-xl border-violet-500/30">
                {sectors.map((s) => (
                  <SelectItem key={s} value={s} className="text-violet-100 focus:bg-violet-500/20 focus:text-white">
                    {s === "all" ? "All Sectors" : s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={cityFilter} onValueChange={setCityFilter}>
              <SelectTrigger className="w-full lg:w-52 h-12 bg-violet-950/50 border-violet-500/30 rounded-xl text-white">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent className="bg-violet-950/95 backdrop-blur-xl border-violet-500/30">
                {cities.map((c) => (
                  <SelectItem key={c} value={c} className="text-violet-100 focus:bg-violet-500/20 focus:text-white">
                    {c === "all" ? "All Cities" : c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {filtered.map((startup, i) => (
            <motion.div
              key={startup.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
            >
              <Link href={`/startups/${startup.id}`} className="block group">
                <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 hover:border-violet-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  {/* Logo Section */}
                  <div className="relative h-32 bg-gradient-to-br from-violet-900/30 to-purple-900/20 flex items-center justify-center border-b border-violet-500/20 p-6">
                    <div className="relative w-16 h-16 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={startup.logo || "/placeholder.svg"}
                        alt={startup.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-mono text-violet-300/70 bg-violet-950/60 px-2 py-1 rounded-md border border-violet-500/20">
                        #{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                          {startup.name}
                        </h3>
                        <p className="text-sm text-violet-300/60 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {startup.hq.split(",")[0]}
                        </p>
                      </div>
                      <Badge variant="outline" className={`text-xs font-medium ${getSectorColor(startup.sector)}`}>
                        {startup.sector}
                      </Badge>
                    </div>

                    <p className="text-sm text-violet-200/50 line-clamp-2 mb-4 leading-relaxed">
                      {startup.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-violet-500/20">
                      <div>
                        <p className="text-xs text-violet-300/60">Funding</p>
                        <p className="text-xl font-bold text-cyan-400">
                          ${startup.funding >= 1000 ? `${(startup.funding / 1000).toFixed(1)}B` : `${startup.funding}M`}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-violet-300/60">Est. {startup.founded}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-violet-500/10 via-transparent to-transparent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-violet-950/60 border border-violet-500/30 flex items-center justify-center">
              <Search className="w-10 h-10 text-violet-300/50" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No startups found</h3>
            <p className="text-violet-300/60">Try adjusting your filters or search term</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
