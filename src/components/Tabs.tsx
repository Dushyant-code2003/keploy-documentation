"use client";

import React, { useState } from "react";

interface TabItemProps {
  label: string;
  id?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function TabItem({ children }: TabItemProps) {
  return <div className="pt-2">{children}</div>;
}

interface TabsProps {
  defaultTab?: string;
  children: React.ReactElement<TabItemProps>[] | React.ReactElement<TabItemProps>;
}

export function Tabs({ defaultTab, children }: TabsProps) {
  const items = React.Children.toArray(children) as React.ReactElement<TabItemProps>[];
  const initialIndex = defaultTab
    ? Math.max(0, items.findIndex((i) => i.props.label === defaultTab || i.props.id === defaultTab))
    : 0;

  const [activeTab, setActiveTab] = useState(initialIndex);

  return (
    <div className="my-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-sm">
      {/* Tab bar header */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 px-2 pt-2 gap-1 overflow-x-auto scrollbar-none">
        {items.map((tab, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium rounded-t-lg transition-all border-b-2 -mb-[1px] ${
                isActive
                  ? "border-orange-500 text-orange-600 dark:text-orange-400 bg-white dark:bg-slate-950 font-semibold shadow-sm"
                  : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              {tab.props.icon}
              <span>{tab.props.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-4 md:p-5">
        {items[activeTab] ? items[activeTab].props.children : null}
      </div>
    </div>
  );
}
