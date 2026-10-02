"use client";

import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, CheckCircle2 } from "lucide-react";

export function FeedbackWidget() {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null);

  return (
    <div className="my-10 p-4 rounded-xl border border-[#EDE6DA] dark:border-[#332F28] bg-[#F4F0E8]/70 dark:bg-[#1C1A17] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm shadow-xs">
      <div className="flex items-center gap-2.5 text-[#1D1B18] dark:text-[#FAF8F4] font-medium">
        <span className="text-base">👍</span>
        <span>Was this quickstart guide helpful?</span>
      </div>

      <div className="flex items-center gap-2">
        {feedback ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E5ECE3] dark:bg-[#202E22] text-[#476644] dark:text-[#A7C8A4] font-semibold text-xs border border-[#CCD8CA] dark:border-[#2D4030]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Thank you for your feedback!</span>
          </div>
        ) : (
          <>
            <button
              onClick={() => setFeedback("positive")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] bg-white dark:bg-[#201E1A] text-[#1D1B18] dark:text-[#FAF8F4] hover:border-[#B89B6A] hover:text-[#B89B6A] transition-colors shadow-xs font-medium"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>Yes, thanks</span>
            </button>
            <button
              onClick={() => setFeedback("negative")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] bg-white dark:bg-[#201E1A] text-[#1D1B18] dark:text-[#FAF8F4] hover:border-[#A89E90] hover:text-[#A89E90] transition-colors shadow-xs font-medium"
            >
              <ThumbsDown className="w-3.5 h-3.5" />
              <span>Needs improvement</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
