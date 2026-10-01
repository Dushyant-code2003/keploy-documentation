"use client";

import React from "react";
import {
  BookOpen,
  Terminal,
  Database,
  Cpu,
  ShieldCheck,
  AlertTriangle,
  GitBranch,
  Sparkles,
  Layers,
  FileCode,
  Award,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b13] p-5 text-sm select-none">
      <div className="sticky top-20 space-y-6">
        {/* Category Header */}
        <div className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-500 uppercase">
          <span>Documentation</span>
          <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono font-semibold border border-indigo-500/20">
            Core v3.8
          </span>
        </div>

        {/* Section 1: Getting Started */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Getting Started
          </div>
          <nav className="space-y-1">
            <a
              href="#overview"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-slate-400" />
              <span>Overview</span>
            </a>

            <a
              href="#quickstart"
              className="flex items-center justify-between px-3 py-1.5 rounded-lg font-semibold text-white bg-indigo-600 dark:bg-indigo-600 shadow-sm transition-all"
            >
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-white" />
                <span>Quickstart Guide</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </a>

            <a
              href="#prerequisites"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <Cpu className="w-4 h-4 text-slate-400" />
              <span>Prerequisites &amp; WSL</span>
            </a>
          </nav>
        </div>

        {/* Section 2: Core Architecture */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Core Architecture
          </div>
          <nav className="space-y-1">
            <a
              href="#architecture-overview"
              className="flex items-center justify-between px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-slate-400" />
                <span>Zero-DB Replay</span>
              </div>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                NEW
              </span>
            </a>

            <a
              href="#recording-tests"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Traffic Capture (eBPF)</span>
            </a>

            <a
              href="#aha-zero-db-proof"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <Database className="w-4 h-4 text-slate-400" />
              <span>Postgres Mocking</span>
            </a>

            <a
              href="#catching-regressions"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <FileCode className="w-4 h-4 text-slate-400" />
              <span>Catch Regressions</span>
            </a>
          </nav>
        </div>

        {/* Section 3: Resources & Evaluation */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Resources &amp; Evaluation
          </div>
          <nav className="space-y-1">
            <a
              href="#real-world-gotchas"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Battle-Tested Gotchas</span>
            </a>

            <a
              href="#ci-cd-integration"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <GitBranch className="w-4 h-4 text-slate-400" />
              <span>CI/CD Integration</span>
            </a>

            <a
              href="#evaluation-criteria"
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
            >
              <Award className="w-4 h-4 text-indigo-500" />
              <span>Evaluation Checklist</span>
            </a>
          </nav>
        </div>

        {/* Bottom Candidate Badge */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
          <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>Candidate Submission</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              DevRel Assessment · Echo + PostgreSQL Quickstart Tutorial
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
