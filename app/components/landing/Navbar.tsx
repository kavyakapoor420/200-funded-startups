"use client";
import React, { useState } from "react";
import PrimaryButton from '../ui/custom-button'
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Terminal, Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

 import Logo from '../../../assets/logo.svg'

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const isPricingPage = pathname === "/pricing";
  const [showNavbar, setShowNavbar] = useState(isPricingPage ? true : false);
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        (document.activeElement as HTMLElement)?.blur();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isPricingPage) {
      setShowNavbar(latest > 0);
    }
  });


  const links = [
    { name: "Home", href: "/" },
    { name: "All Startups", href: "/startups" },
    { name: "Fintech", href: "/startups/fintech" },
    { name: "EdTech", href: "/startups/edtech" },
    { name: "High Funded", href: "/startups/high-funded" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={showNavbar ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        " z-40  flex items-center justify-between px-4 py-3  bg-neutral-900/5 backdrop-blur-xl  border-white/10",
               // " z-40  flex items-center justify-between px-4 py-3  backdrop-blur-xl  border-white/10",
        isPricingPage
          ? "relative h-max md:w-full top-0 border-b"
          : "fixed rounded-3xl top-4 border w-[94%] md:w-[80%] mx-auto left-1/2 -translate-x-1/2"
      )}
    >
      <div className="flex items-center gap-3">
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className="text-xl md:text-2xl font-medium tracking-tighter flex items-center gap-2">
          <div className="w-8 md:w-10 aspect-square overflow-hidden relative">
            <Image src={Logo} alt="logo" fill className="object-cover w-full h-full" />
          </div>
          <Link href='http://localhost:3000/'>
           <span className="text-red-400 text-xl font-bold">Assignment</span>
          </Link>
         
        </div>
      </div>

      <div className="hidden md:flex items-center gap-5 tracking-tight text-lg font-light text-[#d1d1d1]">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={cn("hover:text-white", pathname === link.href && "text-white")}>
            {link.name}
          </Link>
        ))}
      </div>

      

      <div className="flex items-center gap-3">
         <Link
          href="https://github.com/kavyakapoor420"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center mr-3 gap-2 px-6 py-2.5 bg-[#0d1117] hover:bg-[#161b22] transition-colors rounded-lg border border-[#30363d] text-white"
        >
  
          <span className="text-xl font-bold text-green-500 font-medium">login</span>
        </Link>

        <Link href="/startups" className="cursor-pointer z-30">
          <PrimaryButton classname="px-3 py-2 text-sm whitespace-nowrap md:px-5 md:py-3 md:text-base">
            <Terminal className="w-4 h-4 md:w-5 md:h-5" />
            <span>Browse Directory</span>
          </PrimaryButton>
        </Link>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div className="absolute top-full mt-2 left-0 w-full bg-neutral-900/90 backdrop-blur-xl border border-white/10 md:hidden flex flex-col items-center py-5 space-y-4 z-50 rounded-3xl">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 text-lg">
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
      
  );
};

export default Navbar;


