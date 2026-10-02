import type { MDXComponents } from "mdx/types";
import React from "react";
import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabItem } from "@/components/Tabs";
import { Steps, Step } from "@/components/Steps";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { TestRunSimulator } from "@/components/TestRunSimulator";
import { GotchaAccordion } from "@/components/GotchaAccordion";
import { QuickstartSplitViewer } from "@/components/QuickstartSplitViewer";
import { ParametersTable } from "@/components/ParametersTable";
import { LatencyBanner } from "@/components/LatencyBanner";
import { NextStepsGrid } from "@/components/NextStepsGrid";
import { FeedbackWidget } from "@/components/FeedbackWidget";
import { EvaluationChecklist } from "@/components/EvaluationChecklist";
import { ThreeDCard } from "@/components/ThreeDCard";
import { ThreeDArchitectureVisualizer } from "@/components/ThreeDArchitectureVisualizer";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    CodeBlock,
    Tabs,
    TabItem,
    Steps,
    Step,
    ArchitectureDiagram,
    TestRunSimulator,
    GotchaAccordion,
    QuickstartSplitViewer,
    ParametersTable,
    LatencyBanner,
    NextStepsGrid,
    FeedbackWidget,
    EvaluationChecklist,
    ThreeDCard,
    ThreeDArchitectureVisualizer,

    h1: ({ children, ...props }) => (
      <h1
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1B18] dark:text-[#FAF8F4] mt-8 mb-4"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1B18] dark:text-[#FAF8F4] mt-12 mb-4 pt-4 border-t border-[#EDE6DA] dark:border-[#332F28] scroll-mt-24 group flex items-center gap-2"
        {...props}
      >
        <span>{children}</span>
        {id && (
          <a
            href={`#${id}`}
            className="opacity-0 group-hover:opacity-100 text-[#B89B6A] dark:text-[#D9C6A5] font-normal text-lg transition-opacity"
            aria-label="Link to section"
          >
            #
          </a>
        )}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1B18] dark:text-[#FAF8F4] mt-8 mb-3 scroll-mt-24"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-sm sm:text-base text-[#5C564E] dark:text-[#C5BEB5] leading-relaxed my-4" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-outside ml-6 space-y-2 text-[#5C564E] dark:text-[#C5BEB5] my-4 text-sm sm:text-base" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal list-outside ml-6 space-y-2 text-[#5C564E] dark:text-[#C5BEB5] my-4 text-sm sm:text-base" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-[#B89B6A] pl-4 py-1 italic text-[#5C564E] dark:text-[#C5BEB5] my-6 bg-[#F4F0E8]/70 dark:bg-[#1E1C18] rounded-r-lg"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ children, className, ...props }) => {
      const isInline = !className || !className.includes("language-");
      if (isInline) {
        return (
          <code
            className="px-1.5 py-0.5 rounded-md bg-[#F4F0E8] dark:bg-[#201E1A] text-[#8C6D3B] dark:text-[#D9C6A5] font-mono text-xs sm:text-sm font-medium border border-[#EDE6DA] dark:border-[#383329]"
            {...props}
          >
            {children}
          </code>
        );
      }
      return <code className={className} {...props}>{children}</code>;
    },
    pre: (props) => <CodeBlock {...props} />,
    hr: () => <hr className="my-10 border-[#EDE6DA] dark:border-[#332F28]" />,
    ...components,
  };
}
