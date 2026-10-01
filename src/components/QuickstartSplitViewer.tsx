"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export function QuickstartSplitViewer() {
  const [copiedReq, setCopiedReq] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const requestSnippet = `curl -X POST http://localhost:8082/url \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://github.com"}'`;

  const responseSnippet = `{
  "status": "success",
  "http_code": 200,
  "runtime": "echo-framework-v4",
  "data": {
    "id": "4KepjkTT",
    "target_url": "https://github.com",
    "short_url": "http://localhost:8082/4KepjkTT",
    "created_at": 1790853264,
    "db_intercepted": "postgresql:5432"
  }
}`;

  const copyReq = async () => {
    await navigator.clipboard.writeText(requestSnippet);
    setCopiedReq(true);
    setTimeout(() => setCopiedReq(false), 2000);
  };

  const copyRes = async () => {
    await navigator.clipboard.writeText(responseSnippet);
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 2000);
  };

  return (
    <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left Column: Request */}
      <div className="rounded-xl border border-slate-700/60 bg-[#0d111c] text-slate-100 overflow-hidden shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141926] border-b border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 font-bold text-[11px] uppercase tracking-wider border border-blue-500/30">
              POST
            </span>
            <span className="text-slate-300 font-medium">/url</span>
          </div>
          <button
            onClick={copyReq}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 text-xs transition-colors"
            title="Copy Request"
          >
            {copiedReq ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto flex-1 text-slate-200">
          <div className="text-slate-500 mb-2"># Send live traffic to Echo backend</div>
          <pre className="m-0 text-slate-100">{requestSnippet}</pre>
          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Keploy proxy intercepting on port 8082</span>
          </div>
        </div>
      </div>

      {/* Right Column: Response */}
      <div className="rounded-xl border border-slate-700/60 bg-[#0d111c] text-slate-100 overflow-hidden shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141926] border-b border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[11px] border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              200 OK
            </span>
            <span className="text-slate-400 text-[11px]">41ms</span>
            <span className="text-slate-500 text-[10px]">application/json</span>
          </div>
          <button
            onClick={copyRes}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 text-xs transition-colors"
            title="Copy Response"
          >
            {copiedRes ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto flex-1 text-slate-200">
          <pre className="m-0 text-indigo-300">{responseSnippet}</pre>
        </div>
      </div>
    </div>
  );
}
