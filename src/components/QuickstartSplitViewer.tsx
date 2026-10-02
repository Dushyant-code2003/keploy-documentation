"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { ThreeDCard } from "./ThreeDCard";

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
    <ThreeDCard
      className="my-7 rounded-2xl"
      enableScrollZoom={true}
      enableTilt={true}
      depth={7}
      glare={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column: Request */}
        <div className="rounded-xl border border-[#38332A] bg-[#161513] text-[#EDE7DF] overflow-hidden shadow-md flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#1E1C19] border-b border-[#2D2923] text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#292520] text-[#D9C6A5] font-bold text-[11px] uppercase tracking-wider border border-[#3A352D]">
              POST
            </span>
            <span className="text-[#FAF8F4] font-medium">/url</span>
          </div>
          <button
            onClick={copyReq}
            className="flex items-center gap-1 text-[#8F897D] hover:text-[#FAF8F4] text-xs transition-colors"
            title="Copy Request"
          >
            {copiedReq ? (
              <Check className="w-3.5 h-3.5 text-[#B89B6A]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto flex-1 text-[#EDE7DF]">
          <div className="text-[#7A7165] mb-2"># Send live traffic to Echo backend</div>
          <pre className="m-0 text-[#FAF8F4]">{requestSnippet}</pre>
          <div className="mt-4 pt-3 border-t border-[#2D2923] text-[11px] text-[#A89E90] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#88AC84] animate-pulse" />
            <span>Keploy proxy intercepting on port 8082</span>
          </div>
        </div>
      </div>

      {/* Right Column: Response */}
      <div className="rounded-xl border border-[#38332A] bg-[#161513] text-[#EDE7DF] overflow-hidden shadow-md flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#1E1C19] border-b border-[#2D2923] text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1C261D] text-[#88AC84] font-bold text-[11px] border border-[#2D4030]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#88AC84]" />
              200 OK
            </span>
            <span className="text-[#A89E90] text-[11px]">41ms</span>
            <span className="text-[#7A7165] text-[10px]">application/json</span>
          </div>
          <button
            onClick={copyRes}
            className="flex items-center gap-1 text-[#8F897D] hover:text-[#FAF8F4] text-xs transition-colors"
            title="Copy Response"
          >
            {copiedRes ? (
              <Check className="w-3.5 h-3.5 text-[#B89B6A]" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto flex-1 text-[#EDE7DF]">
          <pre className="m-0 text-[#D9C6A5]">{responseSnippet}</pre>
        </div>
      </div>
    </div>
    </ThreeDCard>
  );
}
