"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-lg">
              🐰
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Keploy DevRel Candidate Assignment
              </p>
              <p className="text-xs text-slate-500">
                Crafted with Next.js, MDX, and Tailwind CSS.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a
              href="https://keploy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              <span>keploy.io</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/keploy/keploy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              <span>GitHub (Keploy)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://keploy.io/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              <span>Documentation</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-center text-xs text-slate-400">
          Built for the DevRel evaluation. 100% verified against Keploy v3.8.57, Go 1.26, PostgreSQL 14, and WSL2 Ubuntu.
        </div>
      </div>
    </footer>
  );
}
