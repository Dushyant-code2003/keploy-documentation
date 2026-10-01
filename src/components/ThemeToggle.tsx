"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // React 19 idiom for detecting client mount without effect setState
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50" />
    );
  }

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  return (
    <button
      onClick={cycleTheme}
      title={`Current: ${theme}. Click to change theme`}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="w-4 h-4 text-orange-400 transition-transform hover:rotate-12" />
      ) : theme === "light" ? (
        <Sun className="w-4 h-4 text-amber-500 transition-transform hover:rotate-45" />
      ) : (
        <Laptop className="w-4 h-4 text-blue-500" />
      )}
    </button>
  );
}
