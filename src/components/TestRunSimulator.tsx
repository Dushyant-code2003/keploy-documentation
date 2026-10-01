"use client";

import React, { useState } from "react";
import { Terminal, Database } from "lucide-react";

export function TestRunSimulator() {
  const [selectedRun, setSelectedRun] = useState<"record" | "test-normal" | "test-zero-db" | "regression">("test-zero-db");

  const simulations = {
    record: {
      title: "keploy record -c './echo-psql-url-shortener'",
      status: "3 tests captured",
      statusColor: "text-orange-400",
      dbStatus: "Postgres Online (Port 5432)",
      logs: [
        "🐰 Keploy: Starting Keploy version 3.8.57",
        "API key verified successfully! ✅",
        "🐰 Keploy: Keploy agent is ready to record test cases and mocks.",
        "🐰 Keploy: Starting Application : ./echo-psql-url-shortener",
        "   ⇨ http server started on :8082",
        "--- Ingesting traffic via curl ---",
        "POST /url  -> 200 OK  [{\"ts\":1790853264, \"url\":\"http://localhost:8082/4KepjkTT\"}]",
        "🐰 Keploy: 🟠 Captured testcase: post-url-1",
        "GET /4KepjkTT -> 307 Temporary Redirect -> https://github.com",
        "🐰 Keploy: 🟠 Captured testcase: get-url-1",
        "GET /doesnotexist -> 404 Not Found",
        "🐰 Keploy: 🟠 Captured testcase: get-not-found-1",
        "Stopping recording (Ctrl+C)...",
        "Saved 3 testcases to keploy/test-set-0/tests/",
        "Saved PostgreSQL queries to keploy/test-set-0/mocks.yaml",
      ],
      summary: "Recorded 3 HTTP endpoints & captured all SQL transactions into mocks.yaml.",
    },
    "test-normal": {
      title: "keploy test -c './echo-psql-url-shortener' --delay 10",
      status: "3 Passed / 0 Failed",
      statusColor: "text-emerald-400",
      dbStatus: "Postgres Online (Port 5432)",
      logs: [
        "🐰 Keploy: Starting Keploy in Test Mode (version 3.8.57)",
        "🐰 Keploy: starting test for: post-url-1 (test-set-0)",
        "🐰 Keploy: result -> post-url-1 PASSED (200 OK, payload matched)",
        "🐰 Keploy: starting test for: get-url-1 (test-set-0)",
        "🐰 Keploy: result -> get-url-1 PASSED (307 Redirect matched)",
        "🐰 Keploy: starting test for: get-not-found-1 (test-set-0)",
        "🐰 Keploy: result -> get-not-found-1 PASSED (404 Not Found matched)",
        "--------------------------------------------------",
        "TESTRUN SUMMARY. For test-set: test-set-0",
        "  Total tests:       3",
        "  Total test passed: 3",
        "  Total test failed: 0",
        "  Time Taken:        10.42 s",
        "--------------------------------------------------",
      ],
      summary: "Baseline pass: The app correctly interacts with PostgreSQL and satisfies all assertions.",
    },
    "test-zero-db": {
      title: "docker compose stop postgres && keploy test",
      status: "3 Passed / 0 Failed (NO DATABASE!)",
      statusColor: "text-emerald-400 font-bold",
      dbStatus: "Postgres STOPPED (Port 5432 Offline)",
      logs: [
        "$ docker ps | grep postgres  # (Returned nothing - DB is DOWN)",
        "🐰 Keploy: Starting Keploy in Test Mode (version 3.8.57)",
        "🐰 Keploy: Outgoing dependency mock mode ACTIVE",
        "🐰 Keploy: starting test for: post-url-1",
        "  [App dials localhost:5432 -> Keploy proxy intercepts TCP connection]",
        "  [Keploy injects recorded PostgreSQL handshake & INSERT response]",
        "🐰 Keploy: result -> post-url-1 PASSED (status: 200 OK)",
        "🐰 Keploy: starting test for: get-url-1",
        "  [Keploy injects SELECT query mock from mocks.yaml]",
        "🐰 Keploy: result -> get-url-1 PASSED (status: 307 Redirect)",
        "🐰 Keploy: starting test for: get-not-found-1",
        "🐰 Keploy: result -> get-not-found-1 PASSED (status: 404)",
        "--------------------------------------------------",
        "TESTRUN SUMMARY. All tests passed with ZERO database dependencies!",
        "  Passed: 3 / 3 | Failed: 0",
        "--------------------------------------------------",
      ],
      summary: "✨ The A-Ha Moment! Keploy completely replaces the live Postgres instance with wire-level mocks without changing a single line of application code.",
    },
    regression: {
      title: "Mutate handler.go (json:\"url\" -> json:\"short_url\")",
      status: "2 Passed / 1 FAILED (Regression Caught!)",
      statusColor: "text-rose-400 font-bold",
      dbStatus: "Postgres Mocked",
      logs: [
        "$ CGO_ENABLED=0 go build -o echo-psql-url-shortener .",
        "$ keploy test -c './echo-psql-url-shortener' --delay 10",
        "🐰 Keploy: starting test for: post-url-1",
        "❌ Keploy: result -> post-url-1 FAILED",
        "   DIFF IN RESPONSE BODY:",
        "   - Expected: {\"ts\": 1790853264, \"url\": \"http://localhost:8082/4KepjkTT\"}",
        "   + Actual:   {\"ts\": 1790853264, \"short_url\": \"http://localhost:8082/4KepjkTT\"}",
        "   Mismatch: Key 'url' missing in actual body; unexpected key 'short_url' found.",
        "🐰 Keploy: starting test for: get-url-1",
        "🐰 Keploy: result -> get-url-1 PASSED",
        "🐰 Keploy: starting test for: get-not-found-1",
        "🐰 Keploy: result -> get-not-found-1 PASSED",
        "--------------------------------------------------",
        "TESTRUN SUMMARY: 2 passed, 1 FAILED",
        "--------------------------------------------------",
      ],
      summary: "Regression caught! Keploy proved that an unintentional struct tag rename breaks API clients before reaching production.",
    },
  };

  const current = simulations[selectedRun];

  return (
    <div className="my-8 rounded-2xl border border-slate-700/60 bg-[#0d1117] text-slate-100 shadow-xl overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
            Keploy Test Harness Replay Simulator
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <Database className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-slate-400">{current.dbStatus}</span>
        </div>
      </div>

      {/* Interactive Scenario Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-2 bg-[#090d16] border-b border-slate-800/80 text-xs">
        <button
          onClick={() => setSelectedRun("record")}
          className={`px-3 py-2 rounded-lg text-left transition-all ${
            selectedRun === "record"
              ? "bg-slate-800 text-orange-400 font-semibold"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          1. Record Traffic
        </button>
        <button
          onClick={() => setSelectedRun("test-normal")}
          className={`px-3 py-2 rounded-lg text-left transition-all ${
            selectedRun === "test-normal"
              ? "bg-slate-800 text-emerald-400 font-semibold"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          2. Normal Replay
        </button>
        <button
          onClick={() => setSelectedRun("test-zero-db")}
          className={`px-3 py-2 rounded-lg text-left transition-all ${
            selectedRun === "test-zero-db"
              ? "bg-slate-800 text-emerald-400 font-semibold ring-1 ring-emerald-500/30"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          3. Zero-DB Replay ⭐
        </button>
        <button
          onClick={() => setSelectedRun("regression")}
          className={`px-3 py-2 rounded-lg text-left transition-all ${
            selectedRun === "regression"
              ? "bg-slate-800 text-rose-400 font-semibold"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
          }`}
        >
          4. Mutate &amp; Break
        </button>
      </div>

      {/* Terminal Screen */}
      <div className="p-4 md:p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto space-y-1 bg-[#0d1117] min-h-[260px]">
        <div className="text-slate-500 text-xs mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
          <span>$ {current.title}</span>
          <span className={current.statusColor}>{current.status}</span>
        </div>

        {current.logs.map((line, idx) => {
          const isError = line.includes("FAILED") || line.includes("DIFF IN") || line.includes("Mismatch") || line.startsWith("- Expected") || line.startsWith("+ Actual");
          const isPass = line.includes("PASSED") || line.includes("verified successfully");
          const isKeploy = line.startsWith("🐰 Keploy:");
          const isSummary = line.includes("TESTRUN SUMMARY");

          return (
            <div
              key={idx}
              className={`${
                isError
                  ? "text-rose-400 font-semibold bg-rose-950/20 px-1 rounded"
                  : isPass
                  ? "text-emerald-400 font-medium"
                  : isKeploy
                  ? "text-orange-300"
                  : isSummary
                  ? "text-amber-300 font-bold mt-2"
                  : "text-slate-300"
              }`}
            >
              {line}
            </div>
          );
        })}
      </div>

      {/* Explanatory Footer */}
      <div className="px-4 py-3 bg-[#161b22] border-t border-slate-800 text-xs text-slate-300 flex items-center gap-2">
        <span className="font-semibold text-orange-400">Takeaway:</span>
        <span>{current.summary}</span>
      </div>
    </div>
  );
}
