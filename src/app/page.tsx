import React from "react";
import TutorialContent from "@/content/tutorial.mdx";
import { Sidebar } from "@/components/Sidebar";
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
      <div className="max-w-[1600px] mx-auto flex">
        {/* Left Column: Documentation Sidebar */}
        <Sidebar />

        {/* Center Column: Documentation Body */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 max-w-4xl mx-auto">
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

          {/* Header Badges matching screenshot */}
          <div id="overview" className="space-y-4 mb-8 scroll-mt-24">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Getting Started
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                Core v3.8.57
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Quickstart: Test Echo + Postgres in under 5 minutes
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Learn how to authenticate, record real API calls and PostgreSQL wire mocks, and replay tests with zero running databases.
            </p>

            {/* Quick Meta Chips matching screenshot */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>Estimated time: 5 min</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                <Key className="w-3.5 h-3.5 text-emerald-500" />
                <span>Prerequisite: Free Keploy API Key</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-medium">
                <Layers className="w-3.5 h-3.5 text-purple-500" />
                <span>Supported: Go (Echo), PostgreSQL, WSL2</span>
              </div>
            </div>

            {/* 3 Quick Action Cards (Grid of 3 matching screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              <a
                href="#recording-tests"
                className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#0d111c] hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono font-bold text-xs flex items-center justify-center border border-indigo-500/20">
                    01
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h4 className="font-bold text-xs md:text-sm text-slate-900 dark:text-slate-100">
                  Record Traffic
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Capture live HTTP &amp; PostgreSQL network packets without code changes.
                </p>
              </a>

              <a
                href="#aha-zero-db-proof"
                className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#0d111c] hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs flex items-center justify-center border border-emerald-500/20">
                    02
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h4 className="font-bold text-xs md:text-sm text-slate-900 dark:text-slate-100">
                  Zero-DB Replay
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Stop Postgres and run tests purely against recorded mocks.
                </p>
              </a>

              <a
                href="#catching-regressions"
                className="group p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#0d111c] hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono font-bold text-xs flex items-center justify-center border border-purple-500/20">
                    03
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h4 className="font-bold text-xs md:text-sm text-slate-900 dark:text-slate-100">
                  Catch Regressions
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  Mutate Go struct tags and watch Keploy pinpoint schema diffs.
                </p>
              </a>
            </div>
          </div>

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
