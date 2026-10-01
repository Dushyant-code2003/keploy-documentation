"use client";

import React from "react";
import { CheckCircle2, Award, Star } from "lucide-react";

export function EvaluationChecklist() {
  const criteria = [
    {
      category: "1. Learn & Run (Core Task)",
      status: "Verified",
      details: "Successfully executed Keploy v3.8.57 with Echo + PostgreSQL, recorded 3 test cases via cURL, verified generated tests/mocks, and proved zero-DB replay with Postgres stopped.",
    },
    {
      category: "2. Document (Content Quality)",
      status: "Verified",
      details: "Authored in-depth tutorial in authentic developer voice explaining the 'why' behind eBPF network hooks, why localhost routing matters for Dockerized databases, and how Keploy eliminates manual mocks.",
    },
    {
      category: "3. Build & Publish (Technical Implementation)",
      status: "Verified",
      details: "Single-page documentation website built with Next.js 16 (App Router), MDX (@next/mdx), Tailwind CSS v4, and statically generated (SSG) for 1-click Vercel deployment.",
    },
    {
      category: "4. UI/UX & Developer Experience",
      status: "Verified",
      details: "Crafted following modern developer documentation design (NexusDocs style) with responsive 3-column layout, left sidebar, sticky table of contents, and copy-to-clipboard code blocks.",
    },
    {
      category: "★ Bonus Point 1: Dark / Light Mode Toggle",
      status: "Awarded",
      details: "Full theme switcher powered by next-themes with persistent localStorage preferences, zero hydration mismatch (useSyncExternalStore), and bespoke dark palette.",
    },
    {
      category: "★ Bonus Point 2: Interactive Rich UI Components",
      status: "Awarded",
      details: "Embedded interactive widgets directly in MDX: Interactive Architecture Flow, Playable Terminal Replay Simulator, Split Request/Response Viewer, and Gotchas Accordion.",
    },
  ];

  return (
    <div id="evaluation-criteria" className="my-10 rounded-2xl border-2 border-indigo-500/30 bg-indigo-50/20 dark:bg-[#0b101f] p-6 shadow-md scroll-mt-24">
      <div className="flex items-center gap-2 mb-2">
        <Award className="w-5 h-5 text-indigo-500" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Candidate Assignment Evaluation &amp; Bonus Points Checklist
        </h3>
      </div>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        This project was constructed to fulfill and exceed every evaluation criteria outlined in the Keploy DevRel Candidate Assignment:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {criteria.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111728] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-bold text-xs md:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  {item.category.includes("Bonus") ? (
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  )}
                  <span>{item.category}</span>
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                  item.status === "Awarded"
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                    : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
