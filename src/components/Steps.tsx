"use client";

import React from "react";

interface StepsProps {
  children: React.ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div className="relative pl-6 md:pl-8 my-8 border-l-2 border-orange-500/30 dark:border-orange-500/20 space-y-8">
      {children}
    </div>
  );
}

interface StepProps {
  number: number | string;
  title: string;
  children: React.ReactNode;
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="relative group">
      {/* Number Badge positioned on the border */}
      <div className="absolute -left-[35px] md:-left-[43px] top-0 flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold text-xs md:text-sm shadow-md ring-4 ring-white dark:ring-slate-950">
        {number}
      </div>

      <div className="pt-0.5">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          {title}
        </h3>
        <div className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
