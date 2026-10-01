"use client";

import React, { useEffect, useState } from "react";
import { BookOpen, Edit3, MessageSquare } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "why-windows-users-need-a-detour", label: "Why Windows Users Need a Detour" },
  { id: "setting-up-wsl2--ubuntu", label: "Setting up WSL2 + Ubuntu" },
  { id: "installing-go", label: "Installing Go" },
  { id: "installing-keploy", label: "Installing Keploy" },
  { id: "docker-desktop--wsl-integration", label: "Docker Desktop + WSL Integration" },
  { id: "running-the-echo--postgresql-sample", label: "Running the Echo + PostgreSQL Sample" },
  { id: "recording-test-cases", label: "Recording Test Cases" },
  { id: "replaying-without-postgresql", label: "Replaying Without PostgreSQL" },
  { id: "the-bug-that-taught-me-the-most", label: "The Bug That Taught Me the Most" },
  { id: "quick-answers", label: "Quick Answers" },
  { id: "what-this-actually-buys-you", label: "What This Actually Buys You" },
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
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              Progress
            </span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
              {Math.round(readingProgress)}%
            </span>
          </div>
          <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-150"
              style={{ width: `${readingProgress}%` }}
            />
          </div>
        </div>

        {/* Section Heading matching screenshot */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
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
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50/70 dark:bg-indigo-950/30"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Action Links matching screenshot */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2.5 text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/keploy/samples-go"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5 text-slate-400" />
            <span>Edit on GitHub</span>
          </a>

          <a
            href="https://community.keploy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
            <span>Ask the Community</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
