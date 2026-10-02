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
    <div className="my-5 rounded-xl overflow-hidden border border-[#38332A] bg-[#161513] text-[#EDE7DF] shadow-md group">
      {/* Title / Header Bar with 3 dots */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1E1C19] border-b border-[#2D2923] text-xs font-mono text-[#A89E90]">
        <div className="flex items-center gap-3">
          {/* macOS 3 dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E06C75]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5C07B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#98C379]/80" />
          </div>

          <div className="flex items-center gap-2">
            {isTerminal ? (
              <Terminal className="w-3.5 h-3.5 text-[#B89B6A]" />
            ) : (
              <FileCode className="w-3.5 h-3.5 text-[#D9C6A5]" />
            )}
            <span className="font-medium text-[#FAF8F4]">
              {title || (isTerminal ? "Terminal / Shell" : finalLanguage)}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-[#292520] border border-[#3A352D] text-[10px] text-[#D9C6A5] uppercase tracking-wider">
              {finalLanguage}
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#27241F] hover:bg-[#332E27] text-[#C5BEB5] hover:text-[#FAF8F4] border border-[#38332A] transition-all text-xs font-sans focus:outline-none"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#B89B6A]" />
              <span className="text-[#B89B6A] font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#8F897D] group-hover:text-[#FAF8F4]" />
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
              <div key={idx} className="table-row hover:bg-[#201D1A]/50">
                <span className="table-cell select-none pr-4 text-[#7A7165] text-right w-8 text-xs font-mono">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="table-cell whitespace-pre text-[#EDE7DF]">
                  {line || " "}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <pre className="m-0 p-0 bg-transparent text-[#EDE7DF] selection:bg-[#B89B6A]/30">
            {children || <code>{rawCode}</code>}
          </pre>
        )}
      </div>
    </div>
  );
}
