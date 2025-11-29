// // app/startups/[id]/page.tsx
// import { startups } from '../../../data/data'
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { ArrowLeft, ExternalLink } from "lucide-react";

// // This is REQUIRED in Next.js 15+
// export const dynamicParams = true;

// // Generate all paths at build time
// export async function generateStaticParams() {
//   return startups.map((startup) => ({
//     id: startup.id,
//   }));
// }

// // params is now a Promise → we must await it
// export default async function StartupDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params; // This line fixes everything

//   const startup = startups.find((s) => s.id === id);

//   if (!startup) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-[#101010] text-white py-12 px-6">
//       <div className="max-w-5xl mx-auto">
//         <Link
//           href="/startups"
//           className="inline-flex items-center gap-2 text-[#d1d1d1] hover:text-white mb-8"
//         >
//           <ArrowLeft className="w-5 h-5" /> Back to Directory
//         </Link>

//         <div className="grid md:grid-cols-3 gap-10">
//           <div className="md:col-span-1">
//             <div className="bg-gradient-to-br from-[#1a1a] to-[#161616] rounded-3xl p-8 border border-[#252525]">
//               <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
//                 <Image
//                   src={startup.logo}
//                   alt={startup.name}
//                   width={200}
//                   height={200}
//                   className="object-contain p-4"
//                 />
//               </div>
//               <h1 className="text-4xl font-bold text-center mb-4">{startup.name}</h1>
//               <p className="text-center text-[#d1d1d1] text-lg">{startup.sector}</p>
//             </div>
//           </div>

//           <div className="md:col-span-2 space-y-8">
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Overview</h2>
//               <div className="grid grid-cols-2 gap-6 text-lg bg-[#161616]/50 rounded-2xl p-6 border border-[#252525]">
//                 <div>
//                   <p className="text-[#888]">Total Funding</p>
//                   <p className="text-3xl font-bold text-green-400">${startup.funding}M</p>
//                 </div>
//                 <div>
//                   <p className="text-[#888]">Headquarters</p>
//                   <p className="text-xl font-medium">{startup.hq}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#888]">Founded</p>
//                   <p className="text-xl font-medium">{startup.founded}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#888]">Website</p>
//                   <a
//                     href={startup.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:underline flex items-center gap-1"
//                   >
//                     Visit <ExternalLink className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-semibold mb-4">About</h2>
//               <p className="text-lg leading-relaxed text-[#d1d1d1] bg-[#161616]/50 rounded-2xl p-6 border border-[#252525]">
//                 {startup.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// app/startups/[id]/page.tsx

// "use client";

// import { startups } from "@/data/data";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { ArrowLeft, ExternalLink } from "lucide-react";
// import BgImage from '../../../assets/bgmain.svg'
// import { motion } from "framer-motion";
// import React from "react";

// export default function StartupDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>; // ← This is now a Promise!
// }) {
//   // CORRECT WAY: unwrap the Promise
//   const { id } = React.use(params);

//   const startup = startups.find((s) => s.id === id);

//   if (!startup) {
//     notFound();
//   }

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <Image
//         src={BgImage}
//         alt="background"
//         fill
//         className="object-cover -z-10 opacity-90"
//         priority
//       />

//       <div className="relative z-10 px-6 lg:px-20 py-16">
//         <Link
//           href="/startups"
//           className="inline-flex items-center gap-3 text-gray-400 hover:text-white text-lg mb-12 group"
//         >
//           <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition" />
//           Back to Directory
//         </Link>

//         <motion.div
//           initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
//           animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           transition={{ duration: 1.4, type: "spring" }}
//           className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
//         >
//           {/* Left */}
//           <div className="text-center">
//             <div className="w-96 h-96 mx-auto rounded-3xl overflow-hidden border-4 border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl shadow-2xl">
//               <Image
//                 src={startup.logo}
//                 alt={startup.name}
//                 width={500}
//                 height={500}
//                 className="object-contain p-12"
//               />
//             </div>
//             <h1 className="text-7xl lg:text-9xl font-bold mt-12 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
//               {startup.name}
//             </h1>
//             <p className="text-3xl text-gray-400 mt-4">{startup.sector}</p>
//           </div>

//           {/* Right */}
//           <div className="space-y-10">
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 }}
//               className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 text-center"
//             >
//               <p className="text-gray-400 text-xl">Total Funding</p>
//               <p className="text-8xl font-bold text-green-400 mt-4">${startup.funding}M</p>
//             </motion.div>

//             <div className="grid grid-cols-2 gap-8">
//               <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center">
//                 <p className="text-gray-400 text-lg">HQ</p>
//                 <p className="text-3xl font-bold mt-3">{startup.hq}</p>
//               </div>
//               <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 text-center">
//                 <p className="text-gray-400 text-lg">Founded</p>
//                 <p className="text-4xl font-bold mt-3">{startup.founded}</p>
//               </div>
//             </div>

//             <Link
//               href={startup.website}
//               target="_blank"
//               className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-2xl py-6 rounded-3xl transition-all hover:scale-105 shadow-2xl"
//             >
//               Visit Website <ExternalLink className="inline ml-3 w-6 h-6" />
//             </Link>

//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12"
//             >
//               <h2 className="text-4xl font-bold mb-8">About</h2>
//               <p className="text-xl leading-relaxed text-gray-300">
//                 {startup.description}
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-[#101010] via-transparent to-[#101010]/20 -z-10" />
//     </div>
//   );
// }


"use client"

import { startups } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, MapPin, Calendar, TrendingUp, Globe, Building2, Users } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"
import { Badge } from '../../../components/ui/badge'
import { Button } from  '../../../components/ui/button'
import BgMain from '../../../../assets/bgmain.svg'

function IndianText({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-orange-500">In</span>
      <span className="text-white">di</span>
      <span className="text-green-500">an</span>
    </span>
  )
}

export default function StartupDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = React.use(params)
  const startup = startups.find((s) => s.id === id)

  if (!startup) {
    notFound()
  }

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

  const relatedStartups = startups.filter((s) => s.sector === startup.sector && s.id !== startup.id).slice(0, 3)

  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Background with gradient mesh */}
      <div className="fixed inset-0 -z-10">
        <Image src={BgMain} alt="background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/60 via-transparent to-[#0a0118]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-20 py-8 lg:py-12">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/startups"
            className="inline-flex items-center gap-2 text-violet-300/70 hover:text-white text-sm font-medium mb-8 group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Directory
          </Link>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Hero Section - Purple glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-6 lg:p-10 mb-6"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Logo */}
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-white/10 border border-violet-500/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src={startup.logo || "/placeholder.svg"}
                  alt={startup.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h1 className="text-3xl lg:text-4xl font-bold text-white">{startup.name}</h1>
                  <Badge variant="outline" className={`text-sm ${getSectorColor(startup.sector)}`}>
                    {startup.sector}
                  </Badge>
                </div>

                <p className="text-lg text-violet-200/70 leading-relaxed mb-6 max-w-2xl">{startup.description}</p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-violet-600 hover:bg-violet-500 text-white font-medium">
                    <Link href={startup.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid - Purple themed stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <p className="text-xs text-violet-300/60 uppercase tracking-wide mb-1">Total Funding</p>
              <p className="text-2xl lg:text-3xl font-bold text-cyan-400">
                ${startup.funding >= 1000 ? `${(startup.funding / 1000).toFixed(1)}B` : `${startup.funding}M`}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-400" />
                </div>
              </div>
              <p className="text-xs text-violet-300/60 uppercase tracking-wide mb-1">Founded</p>
              <p className="text-2xl lg:text-3xl font-bold text-white">{startup.founded}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
              </div>
              <p className="text-xs text-violet-300/60 uppercase tracking-wide mb-1">Headquarters</p>
              <p className="text-lg lg:text-xl font-semibold text-white">{startup.hq.split(",")[0]}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <p className="text-xs text-violet-300/60 uppercase tracking-wide mb-1">Country</p>
              <p className="text-lg lg:text-xl font-semibold">
                <IndianText />
              </p>
            </motion.div>
          </div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 lg:p-8 mb-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-violet-300" />
              About {startup.name}
            </h2>
            <p className="text-violet-200/70 leading-relaxed text-base lg:text-lg">
              {startup.description} Founded in {startup.founded}, {startup.name} has raised ${startup.funding}M in
              funding and is headquartered in {startup.hq}. Operating in the {startup.sector} sector, the company
              continues to innovate and expand its reach across <IndianText /> and beyond.
            </p>
          </motion.div>

          {/* Related Startups */}
          {relatedStartups.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-white mb-4">Related Startups in {startup.sector}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedStartups.map((related) => (
                  <Link key={related.id} href={`/startups/${related.id}`} className="group">
                    <div className="bg-gradient-to-br from-violet-950/60 to-purple-950/40 backdrop-blur-xl border border-violet-500/20 rounded-xl p-4 hover:border-violet-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-white/10 border border-violet-500/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                          <Image
                            src={related.logo || "/placeholder.svg"}
                            alt={related.name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-white group-hover:text-violet-300 transition-colors truncate">
                            {related.name}
                          </h3>
                          <p className="text-sm text-cyan-400">${related.funding}M raised</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
