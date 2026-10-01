"use client";

import React from "react";
import {
  Info,
  Lightbulb,
  AlertTriangle,
  Flame,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface CalloutProps {
  type?: "info" | "tip" | "warning" | "danger" | "aha" | "success";
  title?: string;
  children: React.ReactNode;
}

export function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const styles = {
    info: {
      container:
        "border-blue-500/30 bg-blue-50/70 dark:bg-blue-950/20 text-blue-900 dark:text-blue-100",
      icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />,
      defaultTitle: "Note",
      badge: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
    },
    tip: {
      container:
        "border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-100",
      icon: <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />,
      defaultTitle: "Pro Tip",
      badge: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    },
    warning: {
      container:
        "border-amber-500/30 bg-amber-50/70 dark:bg-amber-950/20 text-amber-900 dark:text-amber-100",
      icon: <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />,
      defaultTitle: "Gotcha / Warning",
      badge: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
    },
    danger: {
      container:
        "border-red-500/30 bg-red-50/70 dark:bg-red-950/20 text-red-900 dark:text-red-100",
      icon: <Flame className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />,
      defaultTitle: "Critical",
      badge: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
    },
    aha: {
      container:
        "border-orange-500/40 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent dark:bg-gradient-to-r dark:from-orange-950/30 dark:via-amber-950/20 text-orange-950 dark:text-orange-100 ring-1 ring-orange-500/20",
      icon: <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />,
      defaultTitle: "The A-Ha Moment!",
      badge: "bg-orange-500 text-white font-semibold",
    },
    success: {
      container:
        "border-teal-500/30 bg-teal-50/70 dark:bg-teal-950/20 text-teal-900 dark:text-teal-100",
      icon: <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />,
      defaultTitle: "Verified",
      badge: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300",
    },
  }[type];

  return (
    <div
      className={`my-6 p-4 rounded-xl border ${styles.container} transition-all shadow-sm`}
    >
      <div className="flex items-start gap-3">
        {styles.icon}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 font-semibold text-sm">
            <span className={`px-2 py-0.5 text-xs rounded-md uppercase tracking-wider ${styles.badge}`}>
              {title || styles.defaultTitle}
            </span>
          </div>
          <div className="text-sm leading-relaxed prose-sm dark:prose-invert">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
