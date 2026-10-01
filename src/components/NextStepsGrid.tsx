"use client";

import React from "react";
import { GitBranch, CheckSquare, Gauge, Users, ArrowUpRight } from "lucide-react";

interface StepCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
}

const CARDS: StepCard[] = [
  {
    title: "Configure CI/CD Pipelines",
    description: "Run automated regression tests on every GitHub pull request in seconds with zero running database containers.",
    icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
    href: "#ci-cd-integration",
    badge: "GitHub Actions",
  },
  {
    title: "Production Readiness Checklist",
    description: "Best practices for noise filtering, committing test specs, and keeping raw binary mocks in cloud storage.",
    icon: <CheckSquare className="w-5 h-5 text-emerald-400" />,
    href: "#evaluation-criteria",
    badge: "Evaluation",
  },
  {
    title: "Battle-Tested Gotchas",
    description: "Field-tested fixes for WSL2 Docker sockets, headless browser OAuth timeouts, and CGO compilation.",
    icon: <Gauge className="w-5 h-5 text-amber-400" />,
    href: "#real-world-gotchas",
    badge: "Field Guide",
  },
  {
    title: "Developer Community",
    description: "Join thousands of Go developers discussing eBPF, zero-code mocks, and modern API testing architectures.",
    icon: <Users className="w-5 h-5 text-purple-400" />,
    href: "https://community.keploy.io",
    badge: "Join Us",
  },
];

export function NextStepsGrid() {
  return (
    <div className="my-10 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Next Steps &amp; Exploration
        </h3>
        <span className="text-xs text-slate-500 font-mono">DevRel Recommended</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CARDS.map((card, idx) => (
          <a
            key={idx}
            href={card.href}
            className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d111c] hover:border-indigo-500/50 dark:hover:border-indigo-500/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-indigo-400 transition-colors">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {card.badge}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {card.title}
              </h4>
              <p className="mt-1 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
