import React from "react";
import TutorialContent from "@/content/tutorial.mdx";
import { TableOfContents } from "@/components/TableOfContents";
import { Clock, ArrowDown, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070b13] text-slate-900 dark:text-slate-100 transition-colors">
      {/* Hero Section: Full width container with centered content matching benchmark */}
      <section id="top" className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,oklch(0.67_0.2_41/0.12),transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.25] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        />

        <div className="mx-auto max-w-3xl px-4 pt-14 pb-12 text-center sm:px-6 sm:pt-20 sm:pb-16">
          {/* Stack Badges */}
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-xs">
              Keploy Quickstart
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60">
              Go
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60">
              Echo
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60">
              PostgreSQL
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60">
              WSL2
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Testing a Go API <span className="text-indigo-600 dark:text-indigo-400">without touching PostgreSQL</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Record real API traffic with Keploy, then replay it as tests with auto-generated mocks, no live database required. Written from a real Windows machine, including the parts most tutorials skip.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#why-windows-users-need-a-detour"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
            >
              <span>Start the tutorial</span>
              <ArrowDown className="size-4" />
            </a>

            <a
              href="https://keploy.io/docs/quickstart/samples-echo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <BookOpen className="size-4" />
              <span>Official quickstart</span>
            </a>
          </div>

          {/* Reading Time Meta */}
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Clock className="size-3.5" />
            <span>~20 minute read · beginner friendly · no Keploy experience assumed</span>
          </p>
        </div>
      </section>

      {/* Main Content & Sticky TOC Container (Maximized 6xl layout) */}
      <div className="mx-auto flex max-w-6xl gap-12 px-4 py-12 sm:px-6">
        <article className="mx-auto w-full min-w-0 max-w-3xl">
          <TutorialContent />
        </article>

        {/* Right Sticky Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  );
}
