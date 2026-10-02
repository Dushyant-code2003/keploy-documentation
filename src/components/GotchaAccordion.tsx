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
    title: "Why Use the API Key Command Over Direct Browser Login?",
    badge: "Keploy Auth & WSL2",
    symptom: "Opening browser for authentication... Error: authentication timed out after 1 minute; unexpected status 401: invalid or expired code, or root cannot find credentials.",
    cause: "WSL2 runs headlessly without a native GUI browser callback, and Keploy commands run under 'sudo' (which isolates user credentials stored in ~/.keploy/ from root).",
    solution: "Pass your API key directly via the --api-key flag (or set KEPLOY_API_KEY). This bypasses desktop browser popups entirely and immediately authenticates the root supervisor process.",
    code: `# Option A: Direct CLI flag injection (works locally and in CI/CD)\nsudo -E PATH="$PATH" keploy record -c "./echo-psql-url-shortener" --api-key "kep_YOUR_KEY"\n\n# Option B: Environment variable injection\nexport KEPLOY_API_KEY="kep_YOUR_KEY"`,
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
    title: "Database Host: 'localhost' vs 'postgres'",
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
  {
    id: "sudo-ebpf",
    title: "Why Keploy Needs sudo & -E PATH",
    badge: "eBPF & Linux",
    symptom: "sudo: keploy: command not found, or eBPF probe attach permission denied.",
    cause: "eBPF attaches probes directly to kernel socket tracepoints which requires root privileges. However, plain 'sudo' strips user PATH environment variables, losing access to /usr/local/go/bin and Keploy.",
    solution: "Always execute with sudo -E PATH=\"$PATH\" keploy ... to preserve your active binary search paths across privilege elevation.",
    code: `sudo -E PATH="$PATH" keploy record -c "./echo-psql-url-shortener" --api-key "kep_YOUR_KEY"`,
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
        <AlertTriangle className="w-5 h-5 text-[#B89B6A]" />
        <h3 className="font-serif text-xl font-semibold text-[#1D1B18] dark:text-[#FAF8F4]">
          Real-World Dev Gotchas &amp; Battle-Tested Fixes
        </h3>
      </div>
      <p className="text-sm text-[#6B655C] dark:text-[#C5BEB5] mb-4">
        Every developer encounters hiccups when pairing WSL2, Docker, and eBPF network hooks. Here are the exact 5 friction points hit during our Echo + Postgres run and how to solve them:
      </p>

      {GOTCHAS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl border border-[#EDE6DA] dark:border-[#332F28] bg-white dark:bg-[#1C1A17] overflow-hidden transition-all shadow-xs"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F4F0E8]/70 dark:hover:bg-[#23201B] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F4F0E8] dark:bg-[#2A261F] text-[#8C6D3B] dark:text-[#D9C6A5] border border-[#EDE6DA] dark:border-[#383329]">
                  {item.badge}
                </span>
                <span className="font-medium text-sm md:text-base text-[#1D1B18] dark:text-[#FAF8F4]">
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#8F897D] transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#B89B6A]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-1 border-t border-[#EDE6DA] dark:border-[#332F28] text-sm space-y-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C24B55] dark:text-[#E57B84] mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> What Happened:
                  </div>
                  <div className="text-[#421517] dark:text-[#F7D8DA] bg-[#FAF1F1] dark:bg-[#201516] p-2.5 rounded-lg border border-[#EBB6BA] dark:border-[#491E23] font-mono text-xs">
                    {item.symptom}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8F897D] mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" /> Root Cause:
                  </div>
                  <p className="text-[#6B655C] dark:text-[#C5BEB5] text-xs md:text-sm">
                    {item.cause}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5E7E5A] dark:text-[#88AC84] mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> Solution:
                  </div>
                  <p className="text-[#6B655C] dark:text-[#C5BEB5] text-xs md:text-sm mb-2">
                    {item.solution}
                  </p>
                  {item.code && (
                    <div className="bg-[#161513] text-[#EDE7DF] p-3 rounded-lg font-mono text-xs overflow-x-auto border border-[#38332A]">
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
