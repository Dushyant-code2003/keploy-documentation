import React from "react";
import TutorialContent from "@/content/tutorial.mdx";
import { TableOfContents } from "@/components/TableOfContents";
import { Clock, ArrowDown, BookOpen } from "lucide-react";

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
              Keploy Quickstart
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#EDE6DA] dark:border-[#332F28] text-[#6B655C] dark:text-[#C5BEB5] bg-[#F4F0E8] dark:bg-[#201E1A]">
              Go
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#EDE6DA] dark:border-[#332F28] text-[#6B655C] dark:text-[#C5BEB5] bg-[#F4F0E8] dark:bg-[#201E1A]">
              Echo
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#EDE6DA] dark:border-[#332F28] text-[#6B655C] dark:text-[#C5BEB5] bg-[#F4F0E8] dark:bg-[#201E1A]">
              PostgreSQL
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border border-[#EDE6DA] dark:border-[#332F28] text-[#6B655C] dark:text-[#C5BEB5] bg-[#F4F0E8] dark:bg-[#201E1A]">
              WSL2
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight text-[#1D1B18] dark:text-[#FAF8F4] leading-[1.14]">
            Testing a Go API <span className="italic font-normal text-[#A1824F] dark:text-[#D9C6A5]">without touching PostgreSQL</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#6B655C] dark:text-[#C5BEB5] sm:text-lg">
            Record real API traffic with Keploy, then replay it as tests with auto-generated mocks, no live database required. Written from a real Windows machine, including the parts most tutorials skip.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#why-windows-users-need-a-detour"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1D1B18] dark:bg-[#CBB084] px-4 py-2.5 text-sm font-medium text-[#FAF8F4] dark:text-[#141311] shadow-xs hover:bg-[#2F2C27] dark:hover:bg-[#B89B6A] transition-colors"
            >
              <span>Start the tutorial</span>
              <ArrowDown className="size-4" />
            </a>

            <a
              href="https://keploy.io/docs/quickstart/samples-echo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] bg-white dark:bg-[#1E1C18] px-4 py-2.5 text-sm font-medium text-[#1D1B18] dark:text-[#FAF8F4] shadow-xs hover:bg-[#F4F0E8] dark:hover:bg-[#26231E] transition-colors"
            >
              <BookOpen className="size-4" />
              <span>Official quickstart</span>
            </a>
          </div>

          {/* Reading Time Meta */}
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[#8F897D]">
            <Clock className="size-3.5" />
            <span>~20 minute read · beginner friendly · no Keploy experience assumed</span>
          </p>
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
