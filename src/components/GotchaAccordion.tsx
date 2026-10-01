"use client";

import React, { useState } from "react";
import { ChevronDown, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

interface GotchaItem {
  id: string;
  title: string;
  badge: string;
  symptom: string;
  cause: string;
  solution: string;
  code?: string;
}

const GOTCHAS: GotchaItem[] = [
  {
    id: "docker-perms",
    title: "Docker Permission Denied on WSL2 Ubuntu",
    badge: "WSL2 & Docker",
    symptom: "Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock.",
    cause: "By default in fresh Ubuntu/WSL2 installations, the current user is not part of the 'docker' usergroup, so non-root commands cannot access the docker daemon.",
    solution: "Add your user to the docker group and restart the WSL session so the group permissions take effect.",
    code: `sudo usermod -aG docker $USER\n# In Windows PowerShell, restart WSL:\nwsl --shutdown\n# Re-enter Ubuntu and verify:\ngroups  # should include 'docker'`,
  },
  {
    id: "browser-auth",
    title: "Headless Browser OAuth Timeout in WSL2",
    badge: "Keploy Auth",
    symptom: "Opening browser for authentication... Error: authentication timed out after 1 minute; unexpected status 401: invalid or expired code.",
    cause: "WSL2 running in a headless CLI cannot automatically open your Windows default browser to complete the interactive OAuth callback.",
    solution: "Use the non-interactive manual login flag or pass your Keploy API key directly via the --api-key flag in recording and testing commands.",
    code: `# Option A: Interactive manual login prompt\nkeploy login --manual-login\n\n# Option B: Direct CLI flag injection\nkeploy record -c "./echo-psql-url-shortener" --api-key "kep_YOUR_KEY"`,
  },
  {
    id: "cgo-compile",
    title: "CGO Compilation Failure (Missing errno.h / pthread.h)",
    badge: "Go & Linux",
    symptom: "fatal error: errno.h: No such file or directory / stdint.h: No such file or directory during 'go build'.",
    cause: "When building Go applications with CGO enabled by default on minimal WSL/Ubuntu systems lacking full libc6-dev headers, the C compiler fails.",
    solution: "Disable CGO explicitly during the build step. This produces a pure, statically-linked Go binary with zero external C library dependencies.",
    code: `CGO_ENABLED=0 go build -o echo-psql-url-shortener .\n# Verify static binary:\nls -lh echo-psql-url-shortener`,
  },
  {
    id: "host-networking",
    title: "Database Host: 'localhost' vs 'postgres' / 'mongoDb'",
    badge: "Networking",
    symptom: "Application fails to connect to database: connection refused at 'postgres:5432'.",
    cause: "When the Go app runs inside Docker, it uses Docker's internal DNS network ('postgres'). But when running natively on the host/WSL2 and talking to Dockerized Postgres with port 5432 published, the host must be 'localhost'.",
    solution: "Update the connection string in main.go from 'host=postgres' to 'host=localhost' for local binary execution.",
    code: `sed -i 's/host=postgres/host=localhost/' main.go\n# Verify line:\ngrep -n -i "host" main.go`,
  },
  {
    id: "clean-prerecorded",
    title: "Accidentally Testing Against Sample's Pre-Recorded Mocks",
    badge: "Keploy Best Practice",
    symptom: "Keploy shows tests created in 2024 or reports 'no new test sets recorded this session'.",
    cause: "The official sample repository comes bundled with pre-existing recordings in the 'keploy/' directory, leading to confusion about which tests you actually generated.",
    solution: "Move the original keploy folder aside before recording your own live traffic so your recording is 100% fresh and clean.",
    code: `mv keploy keploy-sample-original\n# After recording, verify timestamps are fresh (current year):\nhead -40 keploy/test-set-0/tests/post-url-1.yaml`,
  },
];

export function GotchaAccordion() {
  const [openId, setOpenId] = useState<string | null>("docker-perms");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="my-8 space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="w-5 h-5 text-amber-500" />
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Real-World Dev Gotchas &amp; Battle-Tested Fixes
        </h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        Every developer encounters hiccups when pairing WSL2, Docker, and eBPF network hooks. Here are the exact 5 friction points hit during our initial Gin + Mongo run and how they paved the way for our seamless Echo + Postgres implementation:
      </p>

      {GOTCHAS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden transition-all shadow-sm"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300">
                  {item.badge}
                </span>
                <span className="font-semibold text-sm md:text-base text-slate-900 dark:text-slate-100">
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-orange-500" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800/80 text-sm space-y-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> What Happened:
                  </div>
                  <div className="text-slate-600 dark:text-slate-300 bg-rose-50/50 dark:bg-rose-950/20 p-2.5 rounded-lg border border-rose-200/40 dark:border-rose-900/30 font-mono text-xs">
                    {item.symptom}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Root Cause:
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm">
                    {item.cause}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> Solution:
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm mb-2">
                    {item.solution}
                  </p>
                  {item.code && (
                    <div className="bg-[#0d1117] text-slate-200 p-3 rounded-lg font-mono text-xs overflow-x-auto border border-slate-800">
                      <pre className="m-0">{item.code}</pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
