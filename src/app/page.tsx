import React from "react";
import TutorialContent from "@/content/tutorial.mdx";
import { TableOfContents } from "@/components/TableOfContents";
import { Clock, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-orange-500/5 via-amber-500/5 to-transparent dark:from-orange-950/20 dark:via-slate-900/40 dark:to-transparent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-700 dark:bg-orange-950/80 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                <Sparkles className="w-3.5 h-3.5" />
                DevRel Hands-On Tutorial
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
                Go + Echo
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300">
                PostgreSQL
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300">
                Zero-DB Replay
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Mastering Zero-Mock Testing in Go with Keploy
            </h1>

            <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              A developer&apos;s guide to capturing live network traffic, generating automatic PostgreSQL mocks, and replaying integration tests with the database powered down.
            </p>

            {/* Author & Reading Time Bar */}
            <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  DP
                </div>
                <span>Dushyant Patel</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>12 min read</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Verified with Keploy v3.8.57</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Article + Sticky Table of Contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Main Tutorial Reader */}
          <article className="w-full flex-1 min-w-0 prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-h1:hidden prose-pre:p-0 prose-pre:bg-transparent">
            <TutorialContent />
          </article>

          {/* Sticky Table of Contents Sidebar */}
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
