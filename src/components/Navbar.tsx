"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import {
  Search,
  Star,
  Terminal,
  User,
  Command,
} from "lucide-react";

export function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#070b13]/90 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand + Version Badge */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-base shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              🐰
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                KeployDocs
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                v3.8.57
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-400">
            <a
              href="#overview"
              className="text-slate-900 dark:text-white font-semibold transition-colors"
            >
              Guides
            </a>
            <a
              href="#prerequisites"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              API Reference
            </a>
            <a
              href="#architecture-overview"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Architecture
            </a>
            <a
              href="#aha-zero-db-proof"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              eBPF Core
            </a>
            <a
              href="#real-world-gotchas"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Troubleshooting
            </a>
            <a
              href="https://github.com/keploy/keploy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Community
            </a>
          </nav>
        </div>

        {/* Right: Search, GitHub Star, ThemeToggle, Primary Action, Profile */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Search Bar */}
          <div className="relative hidden md:block w-48 lg:w-64">
            <div
              className={`flex items-center justify-between px-3 py-1.5 rounded-lg border text-xs text-slate-500 dark:text-slate-400 bg-slate-100/70 dark:bg-slate-900/60 transition-all ${
                searchFocused
                  ? "border-indigo-500 ring-2 ring-indigo-500/20 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="bg-transparent border-none outline-none text-xs w-full text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
                />
              </div>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-200 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">
                <Command className="w-2.5 h-2.5" />K
              </kbd>
            </div>
          </div>

          {/* GitHub Star Button */}
          <a
            href="https://github.com/keploy/keploy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-semibold">12.4k</span>
          </a>

          {/* Dark / Light Mode Toggle */}
          <ThemeToggle />

          {/* Primary Action Button (Matches Screenshot) */}
          <a
            href="#quickstart"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI Quickstart</span>
          </a>

          {/* User Profile Avatar */}
          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 text-xs font-bold">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
