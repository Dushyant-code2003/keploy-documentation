"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#EDE6DA] dark:border-[#332F28] bg-[#FAF8F4]/85 dark:bg-[#141311]/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand */}
        <Link href="#top" className="flex items-center gap-2.5 group">
          <div className="relative size-7 overflow-hidden rounded-lg border border-[#EDE6DA] dark:border-[#332F28] bg-white dark:bg-[#1D1B18] p-0.5 shadow-xs group-hover:scale-105 transition-transform flex items-center justify-center">
            <Image
              src="/keploy-logo.png"
              alt="Keploy Logo"
              width={24}
              height={24}
              className="rounded object-contain"
            />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#1D1B18] dark:text-[#FAF8F4]">
            Keploy <span className="text-[#8F897D] font-normal">Tutorial</span>
          </span>
        </Link>

        {/* Right Action Icons: Badge, GitHub, ThemeToggle */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center rounded-full border border-[#EDE6DA] dark:border-[#332F28] bg-[#F4F0E8] dark:bg-[#201E1A] px-2.5 py-0.5 text-xs font-mono font-medium text-[#6B655C] dark:text-[#C5BEB5]">
            Go · Echo · PostgreSQL
          </span>

          <a
            href="https://github.com/keploy/keploy"
            target="_blank"
            rel="noreferrer"
            aria-label="Keploy on GitHub"
            className="inline-flex size-8 items-center justify-center rounded-lg text-[#6B655C] dark:text-[#C5BEB5] hover:bg-[#EDE6DA]/60 dark:hover:bg-[#201E1A] hover:text-[#1D1B18] dark:hover:text-[#FAF8F4] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
