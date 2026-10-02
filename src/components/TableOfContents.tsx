"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, Edit3, MessageSquare } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "why-windows-users-need-a-detour", label: "1. Windows eBPF Kernel Bridge" },
  { id: "setting-up-wsl2--ubuntu", label: "1.1 WSL2 Ubuntu Setup" },
  { id: "installing-go", label: "1.2 Clean Go Toolchain" },
  { id: "installing-keploy", label: "1.3 Keploy CLI & Headless Auth" },
  { id: "docker-desktop--wsl-integration", label: "1.4 Docker & WSL Networking" },
  { id: "running-the-echo--postgresql-sample", label: "2. Initializing Echo & PostgreSQL" },
  { id: "recording-test-cases", label: "3. Recording Wire Traffic" },
  { id: "replaying-without-postgresql", label: "4. Zero-DB Test Replay" },
  { id: "the-bug-that-taught-me-the-most", label: "5. Debugging & Schema Regressions" },
  { id: "quick-answers", label: "6. Real-World Dev Gotchas" },
  { id: "what-this-actually-buys-you", label: "7. Strategic CI/CD Payoff" },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("overview");
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      const headingElements = TOC_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveId(el.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden xl:block w-56 shrink-0 py-2">
      <div className="sticky top-24 space-y-6 text-xs select-none">
        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between text-[#6B655C] dark:text-[#C5BEB5] mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#B89B6A] dark:text-[#D9C6A5]" />
              Progress
            </span>
            <span className="font-mono text-[#A1824F] dark:text-[#D9C6A5] font-semibold">
              {Math.round(readingProgress)}%
            </span>
          </div>
          <div className="w-full h-1 bg-[#EDE6DA] dark:bg-[#201E1A] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#B89B6A] to-[#D9C6A5] rounded-full transition-all duration-150"
              style={{ width: `${readingProgress}%` }}
            />
          </div>
        </div>

        {/* Section Heading */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1D1B18] dark:text-[#FAF8F4] mb-3">
            <span>On this page</span>
          </div>

          <nav className="space-y-1 text-xs">
            {TOC_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-1 px-2 rounded-md transition-colors ${
                    isActive
                      ? "text-[#9F8353] dark:text-[#D9C6A5] font-semibold bg-[#F4F0E8] dark:bg-[#201E1A]"
                      : "text-[#6B655C] dark:text-[#8F897D] hover:text-[#1D1B18] dark:hover:text-[#FAF8F4]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-[#EDE6DA] dark:border-[#332F28] space-y-2.5 text-[#6B655C] dark:text-[#8F897D]">
          <a
            href="https://github.com/keploy/samples-go"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#1D1B18] dark:hover:text-[#FAF8F4] transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#8F897D]" />
            <span>Edit on GitHub</span>
          </a>

          <a
            href="https://community.keploy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#1D1B18] dark:hover:text-[#FAF8F4] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#8F897D]" />
            <span>Ask the Community</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
