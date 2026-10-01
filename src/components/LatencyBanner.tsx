"use client";

import React from "react";
import { Zap, Database, ArrowRight } from "lucide-react";

export function LatencyBanner() {
  return (
    <div className="my-8 rounded-2xl border border-slate-700/60 bg-gradient-to-br from-[#0d1322] via-[#090e1a] to-[#060911] p-6 shadow-xl text-slate-100 overflow-hidden relative">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        {/* Left Column: Text & Metrics */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Zap className="w-3 h-3" />
            <span>Zero-Dependency Replay Engine</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Sub-Second Zero-Database Test Replay
          </h3>

          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            Every database query is intercepted by Keploy&apos;s eBPF proxy at the kernel network socket. Mocks are served directly from RAM and disk, eliminating live database network overhead, flaky connections, and transaction locking.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
            <div>
              <div className="text-2xl font-black text-white tracking-tight">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                Mock Fidelity
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-400 tracking-tight">&lt; 10.4s</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                p99 Test Suite Time
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Wireframe Nodes */}
        <div className="lg:col-span-5 p-4 rounded-xl border border-slate-800 bg-[#080c16]/90 flex items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-xs text-xs font-mono">
            {/* Client Node */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold">
                cURL
              </div>
              <span className="text-[10px] text-slate-400">Client</span>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-600 animate-pulse" />

            {/* Keploy Proxy Node */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-400/30">
                🐰
              </div>
              <span className="text-[10px] text-indigo-400 font-semibold">eBPF Proxy</span>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-600 animate-pulse" />

            {/* Mock Node (Offline DB) */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-emerald-400">Postgres Mock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
