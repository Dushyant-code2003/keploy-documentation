"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, FileCode } from "lucide-react";

interface CodeBlockProps {
  title?: string;
  language?: string;
  children?: React.ReactNode;
  code?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  title,
  language,
  children,
  code,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract raw text from children or direct code prop
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (React.isValidElement(node) && node.props && (node.props as { children?: React.ReactNode }).children) {
      return extractText((node.props as { children?: React.ReactNode }).children);
    }
    return "";
  };

  // Detect language from child code element className (e.g., "language-bash")
  let detectedLang = language;
  if (!detectedLang && React.isValidElement(children) && children.props) {
    const childClass = (children.props as { className?: string }).className || "";
    const match = childClass.match(/language-(\w+)/);
    if (match) {
      detectedLang = match[1];
    }
  }

  const finalLanguage = detectedLang || "bash";
  const rawCode = (code || extractText(children) || "").trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const isTerminal =
    finalLanguage === "bash" ||
    finalLanguage === "sh" ||
    finalLanguage === "zsh" ||
    finalLanguage === "shell";

  const lines = rawCode.split("\n");
  const shouldNumber = showLineNumbers || (!isTerminal && lines.length > 2);

  return (
    <div className="my-5 rounded-xl overflow-hidden border border-slate-700/60 bg-[#0d111c] text-slate-100 shadow-xl group">
      {/* Title / Header Bar matching screenshot with 3 dots */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141926] border-b border-slate-800 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-3">
          {/* macOS 3 dots matching screenshot */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          <div className="flex items-center gap-2">
            {isTerminal ? (
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <FileCode className="w-3.5 h-3.5 text-indigo-400" />
            )}
            <span className="font-semibold text-slate-300">
              {title || (isTerminal ? "Terminal / Shell" : finalLanguage)}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 uppercase tracking-wider">
              {finalLanguage}
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-sans focus:outline-none"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200" />
              <span>Copy snippet</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area with line numbers */}
      <div className="p-4 overflow-x-auto text-xs md:text-sm leading-relaxed font-mono">
        {shouldNumber ? (
          <div className="table w-full">
            {lines.map((line, idx) => (
              <div key={idx} className="table-row hover:bg-slate-800/30">
                <span className="table-cell select-none pr-4 text-slate-600 dark:text-slate-600 text-right w-8 text-xs font-mono">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="table-cell whitespace-pre text-slate-200">
                  {line || " "}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <pre className="m-0 p-0 bg-transparent text-slate-200 selection:bg-indigo-500/30">
            {children || <code>{rawCode}</code>}
          </pre>
        )}
      </div>
    </div>
  );
}
