import React from "react";
import TutorialContent from "@/content/tutorial.mdx";
import { TableOfContents } from "@/components/TableOfContents";
import { ArrowDown, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] dark:bg-[#141311] text-[#1D1B18] dark:text-[#FAF8F4] transition-colors">
      {/* Hero Section: Full width container with centered content matching editorial benchmark */}
      <section id="top" className="relative overflow-hidden border-b border-[#EDE6DA] dark:border-[#332F28]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(184,155,106,0.18),transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(184,155,106,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,155,106,0.06)_1px,transparent_1px)] bg-[size:52px_52px] opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        />

        <div className="mx-auto max-w-3xl px-4 pt-14 pb-12 text-center sm:px-6 sm:pt-20 sm:pb-16">
          {/* Stack Badges */}
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1D1B18] text-[#D9C6A5] dark:bg-[#B89B6A] dark:text-[#141311] shadow-xs">
              Keploy Deep Dive
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#EDE6DA] dark:border-[#332F28] text-[#6B655C] dark:text-[#C5BEB5] bg-[#F4F0E8] dark:bg-[#201E1A]">
              Go 1.23
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#EDE6DA] dark:border-[#332F28] text-[#6B655C] dark:text-[#C5BEB5] bg-[#F4F0E8] dark:bg-[#201E1A]">
              Echo Framework
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#EDE6DA] dark:border-[#332F28] text-[#6B655C] dark:text-[#C5BEB5] bg-[#F4F0E8] dark:bg-[#201E1A]">
              PostgreSQL 14
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#EDE6DA] dark:border-[#332F28] text-[#6B655C] dark:text-[#C5BEB5] bg-[#F4F0E8] dark:bg-[#201E1A]">
              WSL2 Linux
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight text-[#1D1B18] dark:text-[#FAF8F4] leading-[1.14]">
            Zero-Code Testing for Go APIs
            <span className="block mt-2 font-serif italic font-normal text-[#A1824F] dark:text-[#D9C6A5]">
              Mocking PostgreSQL at the Kernel Level
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6B655C] dark:text-[#C5BEB5] sm:text-lg">
            How to record live HTTP &amp; SQL interactions with Keploy on WSL2, auto-generate byte-accurate wire mocks, and replay complete regression suites in milliseconds — without running Docker or touching live databases.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#why-windows-users-need-a-detour"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1D1B18] dark:bg-[#CBB084] px-5 py-2.5 text-sm font-medium text-[#FAF8F4] dark:text-[#141311] shadow-xs hover:bg-[#2F2C27] dark:hover:bg-[#B89B6A] transition-all hover:scale-[1.02]"
            >
              <span>Explore the Walkthrough</span>
              <ArrowDown className="size-4" />
            </a>

            <a
              href="https://github.com/keploy/samples-go/tree/main/echo-sql"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] bg-white dark:bg-[#1E1C18] px-5 py-2.5 text-sm font-medium text-[#1D1B18] dark:text-[#FAF8F4] shadow-xs hover:bg-[#F4F0E8] dark:hover:bg-[#26231E] transition-all hover:scale-[1.02]"
            >
              <BookOpen className="size-4" />
              <span>Sample Codebase</span>
            </a>
          </div>

          {/* Unique Key Metrics Ribbon */}
          <div className="mt-10 mx-auto max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="rounded-xl border border-[#EDE6DA] dark:border-[#332F28] bg-white/70 dark:bg-[#1C1A17]/70 p-3 shadow-xs">
              <div className="text-[11px] uppercase tracking-wider text-[#8F897D] font-mono">Mocks Written</div>
              <div className="text-base font-bold text-[#1D1B18] dark:text-[#FAF8F4] mt-0.5">0 lines</div>
            </div>
            <div className="rounded-xl border border-[#EDE6DA] dark:border-[#332F28] bg-white/70 dark:bg-[#1C1A17]/70 p-3 shadow-xs">
              <div className="text-[11px] uppercase tracking-wider text-[#8F897D] font-mono">Capture Layer</div>
              <div className="text-base font-bold text-[#A1824F] dark:text-[#D9C6A5] mt-0.5">eBPF Sockets</div>
            </div>
            <div className="rounded-xl border border-[#EDE6DA] dark:border-[#332F28] bg-white/70 dark:bg-[#1C1A17]/70 p-3 shadow-xs">
              <div className="text-[11px] uppercase tracking-wider text-[#8F897D] font-mono">Replay DB</div>
              <div className="text-base font-bold text-[#5E7E5A] dark:text-[#88AC84] mt-0.5">Zero Live DB</div>
            </div>
            <div className="rounded-xl border border-[#EDE6DA] dark:border-[#332F28] bg-white/70 dark:bg-[#1C1A17]/70 p-3 shadow-xs">
              <div className="text-[11px] uppercase tracking-wider text-[#8F897D] font-mono">Host Machine</div>
              <div className="text-base font-bold text-[#1D1B18] dark:text-[#FAF8F4] mt-0.5">WSL2 Ubuntu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky TOC Container (Maximized 6xl layout) */}
      <div className="mx-auto flex max-w-6xl gap-12 px-4 py-12 sm:px-6">
        <article className="mx-auto w-full min-w-0 max-w-3xl">
          <TutorialContent />
        </article>

        {/* Right Sticky Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  );
}
