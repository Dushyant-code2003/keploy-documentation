"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, CheckCircle, ChevronRight } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
  level: number;
}

const TOC_ITEMS: TocItem[] = [
  { id: "why-keploy", label: "1. Why Keploy for Go?", level: 2 },
  { id: "architecture-overview", label: "2. How It Works (eBPF)", level: 2 },
  { id: "prerequisites", label: "3. Prerequisites & WSL Setup", level: 2 },
  { id: "setup-sample", label: "4. Setting Up Echo + Postgres", level: 2 },
  { id: "recording-tests", label: "5. Recording Live Traffic", level: 2 },
  { id: "inspecting-artifacts", label: "6. Inspecting YAML Artifacts", level: 2 },
  { id: "aha-zero-db-proof", label: "7. The A-Ha: Zero-DB Replay", level: 2 },
  { id: "catching-regressions", label: "8. Catching Breaking Regressions", level: 2 },
  { id: "real-world-gotchas", label: "9. Battle-Tested Gotchas", level: 2 },
  { id: "ci-cd-integration", label: "10. Production CI/CD Setup", level: 2 },
  { id: "conclusion", label: "11. Conclusion & Key Takeaways", level: 2 },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Find current section in view
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
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-24 space-y-5 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-orange-500" />
              Reading Progress
            </span>
            <span className="font-mono text-orange-600 dark:text-orange-400 font-semibold">
              {Math.round(readingProgress)}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-150"
              style={{ width: `${readingProgress}%` }}
            />
          </div>
        </div>

        {/* TOC Navigation List */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
            On This Page
          </div>
          <nav className="space-y-1 text-xs">
            {TOC_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center justify-between py-1.5 px-2 rounded-lg transition-colors group ${
                    isActive
                      ? "text-orange-600 dark:text-orange-400 font-bold bg-orange-50 dark:bg-orange-950/40"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  <ChevronRight
                    className={`w-3 h-3 transition-transform ${
                      isActive ? "text-orange-500 translate-x-0.5" : "opacity-0 group-hover:opacity-100 text-slate-400"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Quick Meta Badge */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>Echo + Postgres (v3.8.57)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>Zero-DB Replay Verified</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
