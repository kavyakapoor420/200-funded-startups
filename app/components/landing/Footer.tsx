



"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Globe } from "lucide-react";
import Image from "next/image";
import Logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-[#252525] bg-neutral-900/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Logo + Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 aspect-square overflow-hidden relative">
                <Image
                  src={Logo}
                  alt="StartupIndia Directory"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-red-400 tracking-tighter">
               Assignment
              </span>
            </div>
            <p className="max-w-xs text-sm text-[#d1d1d1] leading-relaxed">
              Curated directory of the top funded Indian startups.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2 lg:ml-auto">
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Explore
              </h3>
              <ul className="mt-4 space-y-3">
                {["All Startups", "Fintech", "EdTech"].map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "All Startups"
                          ? "/startups"
                          : `/startups/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-[#d1d1d1] hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Project
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-[#d1d1d1] hover:text-white text-sm transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://github.com/kavyakapoor420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d1d1d1] hover:text-white text-sm transition-colors flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source Code
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[#252525] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-xs text-[#888] text-center sm:text-left">
              © 2025 • Built by{" "}
              <span className="text-red-500 font-semibold">
                Kavya Kapoor
              </span>
            </p>

            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/in/kavyakapoor420/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d1d1d1] hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>

              <Link
                href="https://github.com/kavyakapoor420"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d1d1d1] hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>

              <Link
                href="https://kavya-portfolio-theta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d1d1d1] hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Optional subtle gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80ab] to-[#ff6154] opacity-10"></div>
      </div>
    </footer>
  );
};

export default Footer;