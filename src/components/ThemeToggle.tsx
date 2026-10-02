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
      <div className="w-9 h-9 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] bg-[#F4F0E8]/50 dark:bg-[#201E1A]/50" />
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
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] bg-white dark:bg-[#1E1C18] hover:bg-[#F4F0E8] dark:hover:bg-[#26231E] text-[#6B655C] dark:text-[#C5BEB5] transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B89B6A]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="w-4 h-4 text-[#D9C6A5] transition-transform hover:rotate-12" />
      ) : theme === "light" ? (
        <Sun className="w-4 h-4 text-[#A1824F] transition-transform hover:rotate-45" />
      ) : (
        <Laptop className="w-4 h-4 text-[#8F897D]" />
      )}
    </button>
  );
}
