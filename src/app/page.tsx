import React from "react";
import TutorialContent from "@/content/tutorial.mdx";
import { TableOfContents } from "@/components/TableOfContents";
import {
  Clock,
  Key,
  Layers,
  ChevronRight,
  Edit3,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070b13] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-8">
        {/* Center Column: Documentation Body */}
        <main className="flex-1 min-w-0 max-w-3xl">
          {/* Breadcrumb & GitHub Edit Bar matching screenshot */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 mb-6 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">
                Docs
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">
                Getting Started
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 dark:text-slate-200 font-semibold">
                Quickstart Guide
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Updated yesterday
              </span>
              <a
                href="https://github.com/keploy/samples-go"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Edit3 className="w-3 h-3" />
                <span>Edit on GitHub</span>
              </a>
            </div>
          </div>

          {/* Hero Section matching benchmark id="top" */}
          <section id="top" className="space-y-5 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800 scroll-mt-24 text-center sm:text-left">
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-xs">
                Keploy Quickstart
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                Go
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                Echo
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                PostgreSQL
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                WSL2
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Testing a Go API <span className="text-indigo-600 dark:text-indigo-400">without touching PostgreSQL</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              Record real API traffic with Keploy, then replay it as tests with auto-generated mocks, no live database required. Written from a real Windows machine, including the parts most tutorials skip.
            </p>

            {/* CTA Buttons matching benchmark */}
            <div className="flex flex-wrap items-center gap-3 pt-2 justify-center sm:justify-start">
              <a
                href="#why-windows-users-need-a-detour"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow-sm transition-all"
              >
                <span>Start the tutorial</span>
                <ChevronRight className="w-4 h-4 rotate-90" />
              </a>

              <a
                href="https://keploy.io/docs/quickstart/samples-echo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all"
              >
                <span>Official quickstart</span>
              </a>
            </div>

            {/* Meta chip matching benchmark */}
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 justify-center sm:justify-start">
              <Clock className="w-3.5 h-3.5" />
              <span>~20 minute read · beginner friendly · no Keploy experience assumed</span>
            </div>
          </section>

          <hr className="my-8 border-slate-200 dark:border-slate-800" />

          {/* Main Tutorial Body (MDX) */}
          <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-h1:hidden prose-pre:p-0 prose-pre:bg-transparent">
            <TutorialContent />
          </article>
        </main>

        {/* Right Column: Sticky Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  );
}
