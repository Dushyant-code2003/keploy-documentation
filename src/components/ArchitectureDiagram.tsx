"use client";

import React, { useState } from "react";
import { Database, Server, Laptop, ShieldCheck, AlertCircle, Play, CheckCircle2 } from "lucide-react";

export function ArchitectureDiagram() {
  const [activeMode, setActiveMode] = useState<"record" | "test" | "regression">("record");

  return (
    <div className="my-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50/80 to-white dark:from-slate-900/80 dark:to-slate-950 p-5 md:p-6 shadow-md overflow-hidden">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
              Interactive Architecture Flow
            </span>
            <span className="text-xs text-slate-500 font-mono">v3.8.x eBPF Proxy</span>
          </div>
          <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
            How Keploy Intercepts & Mocks Go Microservices
          </h4>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl">
          <button
            onClick={() => setActiveMode("record")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeMode === "record"
                ? "bg-white dark:bg-slate-900 text-orange-600 dark:text-orange-400 shadow-sm font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            1. Record Mode
          </button>
          <button
            onClick={() => setActiveMode("test")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeMode === "test"
                ? "bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            2. Zero-DB Replay
          </button>
          <button
            onClick={() => setActiveMode("regression")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeMode === "regression"
                ? "bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-sm font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            3. Catch Bug (Diff)
          </button>
        </div>
      </div>

      {/* Visual Pipeline */}
      <div className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 items-center relative">
          {/* Node 1: Client / Traffic */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm text-center relative group">
            <div className="w-10 h-10 mx-auto rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
              <Laptop className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Traffic Source
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
              {activeMode === "record" ? "Dev cURL / Browser" : "Keploy Test Runner"}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">
              POST http://localhost:8082/url
            </div>
          </div>

          {/* Node 2: Keploy Interception Layer */}
          <div className="p-4 rounded-xl border-2 border-orange-500/50 bg-orange-50/40 dark:bg-orange-950/20 shadow-sm text-center relative">
            <div className="w-10 h-10 mx-auto rounded-lg bg-orange-500 text-white flex items-center justify-center mb-2 shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Keploy eBPF Proxy
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
              Port Hooking
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono mt-1">
              {activeMode === "record" ? "Intercepts & Records" : "Replays & Compares"}
            </div>
          </div>

          {/* Node 3: The Go Application */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm text-center relative">
            <div className="w-10 h-10 mx-auto rounded-lg bg-cyan-100 dark:bg-cyan-950/70 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-2">
              <Server className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Go Application
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
              Echo / Gin App
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">
              {activeMode === "regression" ? "handler.go (MODIFIED)" : "handler.go (UNTOUCHED)"}
            </div>
          </div>

          {/* Node 4: Database / Mocks */}
          <div className={`p-4 rounded-xl border shadow-sm text-center relative transition-all ${
            activeMode === "record"
              ? "border-emerald-500/40 bg-emerald-50/30 dark:bg-emerald-950/20"
              : activeMode === "test"
              ? "border-purple-500/40 bg-purple-50/30 dark:bg-purple-950/20"
              : "border-rose-500/40 bg-rose-50/30 dark:bg-rose-950/20"
          }`}>
            <div className={`w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-2 ${
              activeMode === "record"
                ? "bg-emerald-500 text-white"
                : activeMode === "test"
                ? "bg-purple-600 text-white"
                : "bg-rose-600 text-white"
            }`}>
              <Database className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Dependency State
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
              {activeMode === "record" ? "Live Postgres / Mongo" : "Postgres STOPPED!"}
            </div>
            <div className="text-[11px] font-mono mt-1 text-slate-600 dark:text-slate-400">
              {activeMode === "record" ? "Writes to disk" : "Served from mocks.yaml"}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Explanation Box based on activeMode */}
      <div className="mt-2 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        {activeMode === "record" && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-orange-600 dark:text-orange-400">
              <Play className="w-4 h-4" />
              <span>Record Phase: Zero Code Instrumentation</span>
            </div>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
              You execute curl requests against your local Go app. Keploy observes incoming HTTP traffic on port <code className="text-orange-600 dark:text-orange-400">8082</code> and simultaneously records the exact PostgreSQL wire packets on port <code className="text-orange-600 dark:text-orange-400">5432</code>. It auto-generates test files in <code className="text-slate-800 dark:text-slate-200 font-mono">keploy/test-set-0/tests/</code> and mocks in <code className="text-slate-800 dark:text-slate-200 font-mono">mocks.yaml</code>.
            </p>
          </div>
        )}

        {activeMode === "test" && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>The &quot;A-Ha!&quot; Moment: 100% Mocked Zero-DB Replay</span>
            </div>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
              You stop PostgreSQL (<code className="text-emerald-600 dark:text-emerald-400">docker compose stop postgres</code>) so the database is completely offline. Then run <code className="text-emerald-600 dark:text-emerald-400">keploy test</code>. When the Go binary attempts to query Postgres, Keploy intercepts the network packet and serves the response directly from <code className="text-slate-800 dark:text-slate-200 font-mono">mocks.yaml</code>. All 3 tests pass in seconds without a database!
            </p>
          </div>
        )}

        {activeMode === "regression" && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-rose-600 dark:text-rose-400">
              <AlertCircle className="w-4 h-4" />
              <span>Regression Catch: Catching Breaking Schema Changes</span>
            </div>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
              When we intentionally break the code by changing <code className="text-rose-600 dark:text-rose-400 font-mono">json:&quot;url&quot;</code> to <code className="text-rose-600 dark:text-rose-400 font-mono">json:&quot;short_url&quot;</code> in <code className="font-mono">handler.go</code>, Keploy immediately flags <code className="font-mono">post-url-1</code> as FAILED. It outputs the exact JSON key difference between expected and actual responses.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
