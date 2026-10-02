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
        "border-[#D9C6A5]/60 bg-[#F4F0E8]/75 dark:bg-[#1E1C18] text-[#1D1B18] dark:text-[#FAF8F4]",
      icon: <Info className="w-5 h-5 text-[#A1824F] dark:text-[#D9C6A5] shrink-0 mt-0.5" />,
      defaultTitle: "Note",
      badge: "bg-[#EDE6DA] dark:bg-[#2A261F] text-[#8C6D3B] dark:text-[#D9C6A5] border border-[#DFD5C6] dark:border-[#3A352D]",
    },
    tip: {
      container:
        "border-[#A1B39D]/50 bg-[#F4F6F2] dark:bg-[#181E19] text-[#1E2B1E] dark:text-[#E2EBE2]",
      icon: <Lightbulb className="w-5 h-5 text-[#5E7E5A] dark:text-[#88AC84] shrink-0 mt-0.5" />,
      defaultTitle: "Pro Tip",
      badge: "bg-[#E5ECE3] dark:bg-[#202E22] text-[#476644] dark:text-[#A7C8A4] border border-[#CCD8CA] dark:border-[#2D4030]",
    },
    warning: {
      container:
        "border-[#E5C07B]/50 bg-[#FAF5EC] dark:bg-[#201C15] text-[#3D2C10] dark:text-[#F3E7D3]",
      icon: <AlertTriangle className="w-5 h-5 text-[#C4882F] dark:text-[#E5B564] shrink-0 mt-0.5" />,
      defaultTitle: "Gotcha / Warning",
      badge: "bg-[#F5E8D0] dark:bg-[#2D2415] text-[#915B10] dark:text-[#E5B564] border border-[#E9D4B0] dark:border-[#42341D]",
    },
    danger: {
      container:
        "border-[#E06C75]/40 bg-[#FAF1F1] dark:bg-[#201516] text-[#421517] dark:text-[#F7D8DA]",
      icon: <Flame className="w-5 h-5 text-[#C24B55] dark:text-[#E57B84] shrink-0 mt-0.5" />,
      defaultTitle: "Critical",
      badge: "bg-[#F8DADB] dark:bg-[#321719] text-[#93252E] dark:text-[#EFA4AA] border border-[#EBB6BA] dark:border-[#491E23]",
    },
    aha: {
      container:
        "border-[#B89B6A]/50 bg-gradient-to-r from-[#B89B6A]/15 via-[#D9C6A5]/10 to-transparent dark:from-[#B89B6A]/20 dark:via-[#201E1A] dark:to-[#141311] text-[#1D1B18] dark:text-[#FAF8F4] ring-1 ring-[#B89B6A]/30",
      icon: <Sparkles className="w-5 h-5 text-[#A1824F] dark:text-[#D9C6A5] shrink-0 mt-0.5" />,
      defaultTitle: "The A-Ha Moment!",
      badge: "bg-[#1D1B18] dark:bg-[#CBB084] text-[#D9C6A5] dark:text-[#141311] font-semibold",
    },
    success: {
      container:
        "border-[#88AC84]/40 bg-[#F4F6F2] dark:bg-[#181E19] text-[#1E2B1E] dark:text-[#E2EBE2]",
      icon: <CheckCircle2 className="w-5 h-5 text-[#5E7E5A] dark:text-[#88AC84] shrink-0 mt-0.5" />,
      defaultTitle: "Verified",
      badge: "bg-[#E5ECE3] dark:bg-[#202E22] text-[#476644] dark:text-[#A7C8A4] border border-[#CCD8CA] dark:border-[#2D4030]",
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
