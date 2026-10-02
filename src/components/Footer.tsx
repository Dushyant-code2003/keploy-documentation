"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#EDE6DA] dark:border-[#332F28] bg-[#F4F0E8] dark:bg-[#141311] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-[#EDE6DA] dark:bg-[#201E1A] flex items-center justify-center font-bold text-lg">
              🐰
            </div>
            <div>
              <p className="font-serif text-base font-semibold text-[#1D1B18] dark:text-[#FAF8F4]">
                Keploy Developer Documentation
              </p>
              <p className="text-xs text-[#8F897D]">
                Crafted with Next.js, MDX, and Tailwind CSS.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B655C] dark:text-[#C5BEB5]">
            <a
              href="https://keploy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A1824F] dark:hover:text-[#D9C6A5] transition-colors flex items-center gap-1"
            >
              <span>keploy.io</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/keploy/keploy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A1824F] dark:hover:text-[#D9C6A5] transition-colors flex items-center gap-1"
            >
              <span>GitHub (Keploy)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://keploy.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A1824F] dark:hover:text-[#D9C6A5] transition-colors flex items-center gap-1"
            >
              <span>Documentation</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#EDE6DA] dark:border-[#332F28] text-center text-xs text-[#8F897D]">
          Hands-on tested and verified against Keploy v3.8.57, Go 1.23, PostgreSQL 14, and WSL2 Ubuntu.
        </div>
      </div>
    </footer>
  );
}
