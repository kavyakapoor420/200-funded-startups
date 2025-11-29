"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Home, Search, ArrowLeft, Rocket } from "lucide-react"
import BgImage from '../assets/bgmain.svg'
function IndianText({ text, className = "" }: { text: string; className?: string }) {
  const parts = text.split(/(Indian)/gi)
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.toLowerCase() === "indian" ? (
          <span key={i}>
            <span className="text-orange-500">In</span>
            <span className="text-white">di</span>
            <span className="text-green-500">an</span>
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  )
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <Image src={BgImage} alt="background" fill className="object-cover -z-10 opacity-90" priority />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-20 opacity-20"
        >
          <Rocket className="w-16 h-16 text-violet-400" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-20 opacity-20"
        >
          <Rocket className="w-12 h-12 text-cyan-400" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center max-w-2xl"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter bg-gradient-to-b from-violet-400 via-purple-500 to-violet-900 bg-clip-text text-transparent drop-shadow-2xl">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Startup Not Found</h2>
            <p className="text-lg md:text-xl text-violet-200/70 mb-2">
              Looks like this startup hasn&apos;t launched yet, or the page you&apos;re looking for doesn&apos;t exist.
            </p>
            <p className="text-violet-300/50">
              <IndianText text="Explore other amazing Indian startups instead!" />
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/25"
            >
              <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <Link
              href="/startups"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-violet-950/50 hover:bg-violet-900/50 border border-violet-500/30 hover:border-violet-400/50 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-xl"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Browse Startups
            </Link>
          </motion.div>

          {/* Go Back Link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-violet-300/60 hover:text-violet-200 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Go back to previous page
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[500px] h-[500px] border border-violet-500/10 rounded-full" />
          <div className="absolute w-[600px] h-[600px] border border-violet-500/5 rounded-full" />
          <div className="absolute w-[700px] h-[700px] border border-violet-500/[0.02] rounded-full" />
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0118] to-transparent pointer-events-none z-20" />
    </div>
  )
}
