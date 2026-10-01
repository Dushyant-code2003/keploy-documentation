"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal, FileCode } from "lucide-react";

interface CodeBlockProps {
  title?: string;
  language?: string;
  children?: React.ReactNode;
  code?: string;
}

export function CodeBlock({
  title,
  language,
  children,
  code,
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

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-700/60 bg-[#0d1117] text-slate-100 shadow-xl group">
      {/* Title / Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-slate-800 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          {isTerminal ? (
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
          )}
          <span className="font-semibold text-slate-300">
            {title || (isTerminal ? "Terminal / Shell" : finalLanguage)}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 uppercase tracking-wider">
            {finalLanguage}
          </span>
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
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto text-sm leading-relaxed font-mono">
        <pre className="m-0 p-0 bg-transparent text-slate-200 selection:bg-orange-500/30">
          {children || <code>{rawCode}</code>}
        </pre>
      </div>
    </div>
  );
}
