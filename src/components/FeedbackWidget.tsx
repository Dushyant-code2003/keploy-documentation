"use client";

import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, CheckCircle2 } from "lucide-react";

export function FeedbackWidget() {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null);

  return (
    <div className="my-10 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d111c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm shadow-sm">
      <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 font-medium">
        <span className="text-base">👍</span>
        <span>Was this quickstart guide helpful?</span>
      </div>

      <div className="flex items-center gap-2">
        {feedback ? (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-xs border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Thank you for your feedback!</span>
          </div>
        ) : (
          <>
            <button
              onClick={() => setFeedback("positive")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-500 transition-colors shadow-sm font-medium"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>Yes, thanks</span>
            </button>
            <button
              onClick={() => setFeedback("negative")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-amber-500 hover:text-amber-500 transition-colors shadow-sm font-medium"
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
