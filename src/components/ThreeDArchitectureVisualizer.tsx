"use client";

import React, { useState, useRef, useEffect } from "react";
import { Layers, Play, CheckCircle2, Rotate3d, Database, Cpu, Globe, ArrowDown, Sparkles } from "lucide-react";

export function ThreeDArchitectureVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(24);
  const [rotY, setRotY] = useState(-20);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeMode, setActiveMode] = useState<"record" | "replay">("record");
  const [isInteracting, setIsInteracting] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Auto-gentle float when idle
  useEffect(() => {
    let animId: number;
    let t = 0;
    const animate = () => {
      if (!isInteracting) {
        t += 0.015;
        // Subtle ambient oscillation
        setRotX(24 + Math.sin(t) * 3);
        setRotY(-20 + Math.cos(t * 0.8) * 4);
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isInteracting]);

  // Scroll visibility check
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setIsInteracting(true);
    // Constrain 3D tilt
    setRotX(Math.max(10, Math.min(45, 24 - (y / rect.height) * 30)));
    setRotY(Math.max(-45, Math.min(15, -20 + (x / rect.width) * 35)));
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="my-10 rounded-2xl border border-[#EDE6DA] dark:border-[#332F28] bg-gradient-to-b from-[#F4F0E8]/80 via-white to-[#F4F0E8]/40 dark:from-[#1C1A17] dark:via-[#161513] dark:to-[#141311] p-6 shadow-xl transition-all duration-300"
    >
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#EDE6DA] dark:border-[#332F28]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1D1B18] text-[#D9C6A5] dark:bg-[#B89B6A] dark:text-[#141311]">
              <Rotate3d className="w-3.5 h-3.5" />
              Interactive 3D Kernel Pipeline
            </span>
            <span className="text-xs text-[#8F897D] font-mono">Move mouse to tilt in 3D</span>
          </div>
          <h4 className="font-serif text-lg md:text-xl font-semibold text-[#1D1B18] dark:text-[#FAF8F4] mt-1">
            How eBPF Intercepts Wire Traffic Without Code Changes
          </h4>
        </div>

        {/* Buttons: Mode and 3D Expand toggle */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center p-1 bg-[#EDE6DA]/70 dark:bg-[#201E1A] rounded-lg text-xs font-medium">
            <button
              onClick={() => setActiveMode("record")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeMode === "record"
                  ? "bg-white dark:bg-[#2A261F] text-[#A1824F] dark:text-[#D9C6A5] shadow-xs font-semibold"
                  : "text-[#6B655C] dark:text-[#8F897D] hover:text-[#1D1B18] dark:hover:text-[#FAF8F4]"
              }`}
            >
              🔴 Record Mode
            </button>
            <button
              onClick={() => setActiveMode("replay")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeMode === "replay"
                  ? "bg-white dark:bg-[#2A261F] text-[#5E7E5A] dark:text-[#88AC84] shadow-xs font-semibold"
                  : "text-[#6B655C] dark:text-[#8F897D] hover:text-[#1D1B18] dark:hover:text-[#FAF8F4]"
              }`}
            >
              🟢 Zero-DB Replay
            </button>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] bg-white dark:bg-[#201E1A] text-xs font-medium text-[#1D1B18] dark:text-[#FAF8F4] hover:bg-[#F4F0E8] dark:hover:bg-[#26231E] transition-colors shadow-xs"
          >
            <Layers className="w-3.5 h-3.5 text-[#B89B6A]" />
            <span>{isExpanded ? "Collapse Layers" : "3D Explode"}</span>
          </button>
        </div>
      </div>

      {/* 3D Isometric Canvas Stage */}
      <div className="relative py-12 flex items-center justify-center min-h-[380px] overflow-hidden select-none">
        {/* Ambient 3D Radial Grid Floor */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 dark:opacity-20"
        >
          <div className="w-[500px] h-[500px] rounded-full border border-[#B89B6A]/30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
          <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-[#B89B6A]/40" />
        </div>

        {/* 3D Isometric Viewport Container */}
        <div
          style={{
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
          }}
          className="w-full max-w-md h-[300px] flex items-center justify-center"
        >
          <div
            style={{
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
              transformStyle: "preserve-3d",
              transition: isInteracting ? "transform 0.08s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="relative w-72 h-44 cursor-grab active:cursor-grabbing"
          >
            {/* ======================================================== */}
            {/* LAYER 1 (TOP): Application / Client (Echo Service) */}
            {/* ======================================================== */}
            <div
              style={{
                transform: `translateZ(${isExpanded ? 110 : 40}px)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="absolute inset-0 rounded-2xl border-2 border-[#D9C6A5] dark:border-[#B89B6A]/70 bg-white/90 dark:bg-[#1E1C19]/90 backdrop-blur-md p-4 shadow-[0_20px_35px_rgba(0,0,0,0.15)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF8F4] dark:bg-[#2A261F] text-[#B89B6A] flex items-center justify-center font-bold text-xs border border-[#EDE6DA] dark:border-[#383329]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A1824F] dark:text-[#D9C6A5]">
                      User Space
                    </span>
                    <h5 className="font-semibold text-xs text-[#1D1B18] dark:text-[#FAF8F4] leading-tight">
                      Echo Framework (Go)
                    </h5>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#F4F0E8] dark:bg-[#201E1A] text-[#6B655C] dark:text-[#C5BEB5] border border-[#EDE6DA] dark:border-[#332F28]">
                  :8082
                </span>
              </div>

              <div className="bg-[#FAF8F4] dark:bg-[#141311] p-2 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] text-[11px] font-mono text-[#5C564E] dark:text-[#C5BEB5] flex items-center justify-between">
                <span>POST /url</span>
                <span className="text-[#5E7E5A] dark:text-[#88AC84] font-semibold">200 OK</span>
              </div>
            </div>

            {/* Connecting Vertical 3D Light Guide 1 -> 2 */}
            <div
              style={{
                transform: `translateZ(${isExpanded ? 55 : 20}px) translateY(12px) translateX(24px)`,
                transformStyle: "preserve-3d",
              }}
              className="absolute pointer-events-none flex flex-col items-center"
            >
              <span className="w-1.5 h-12 bg-gradient-to-b from-[#B89B6A] to-[#D9C6A5] rounded-full opacity-60 animate-pulse" />
            </div>

            {/* ======================================================== */}
            {/* LAYER 2 (MIDDLE): Kernel eBPF Supervisor (The "Secret") */}
            {/* ======================================================== */}
            <div
              style={{
                transform: "translateZ(0px)",
                transformStyle: "preserve-3d",
                transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className="absolute inset-0 rounded-2xl border-2 border-[#B89B6A] dark:border-[#D9C6A5] bg-gradient-to-br from-[#F4F0E8] to-white dark:from-[#25221E] dark:to-[#1C1A17] p-4 shadow-[0_25px_45px_rgba(184,155,106,0.25)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1D1B18] text-[#D9C6A5] dark:bg-[#B89B6A] dark:text-[#141311] flex items-center justify-center font-bold text-xs shadow-xs">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A1824F] dark:text-[#D9C6A5] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Linux Kernel Level
                    </span>
                    <h5 className="font-semibold text-xs text-[#1D1B18] dark:text-[#FAF8F4] leading-tight">
                      Keploy eBPF Socket Interceptor
                    </h5>
                  </div>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#1D1B18] text-[#D9C6A5] dark:bg-[#D9C6A5] dark:text-[#141311] font-bold">
                  Kernel Hook
                </span>
              </div>

              <div className="text-[10px] leading-relaxed text-[#6B655C] dark:text-[#C5BEB5] bg-[#EDE6DA]/50 dark:bg-[#161513]/70 p-2 rounded-lg border border-[#DFD5C6] dark:border-[#383329]">
                {activeMode === "record" ? (
                  <span className="text-[#A1824F] dark:text-[#D9C6A5] font-medium">
                    ⚡ Pass-through socket sniffer: records TCP payloads & SQL statements to <code>mocks.yaml</code>
                  </span>
                ) : (
                  <span className="text-[#5E7E5A] dark:text-[#88AC84] font-medium">
                    🛡️ Mock Injection: intercepts socket read/write; returns recorded wire packets directly
                  </span>
                )}
              </div>
            </div>

            {/* Connecting Vertical 3D Light Guide 2 -> 3 */}
            <div
              style={{
                transform: `translateZ(${isExpanded ? -55 : -20}px) translateY(12px) translateX(24px)`,
                transformStyle: "preserve-3d",
              }}
              className="absolute pointer-events-none flex flex-col items-center"
            >
              <span className="w-1.5 h-12 bg-gradient-to-b from-[#B89B6A] to-[#A1824F] rounded-full opacity-60 animate-pulse" />
            </div>

            {/* ======================================================== */}
            {/* LAYER 3 (BOTTOM): Database Wire Traffic / Mocks */}
            {/* ======================================================== */}
            <div
              style={{
                transform: `translateZ(${isExpanded ? -110 : -40}px)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              className={`absolute inset-0 rounded-2xl border-2 p-4 shadow-[0_30px_60px_rgba(0,0,0,0.25)] flex flex-col justify-between transition-colors duration-300 ${
                activeMode === "record"
                  ? "border-[#EDE6DA] dark:border-[#332F28] bg-white/90 dark:bg-[#1E1C19]/90"
                  : "border-[#88AC84]/60 bg-[#F4F6F2]/90 dark:bg-[#181E19]/90 ring-2 ring-[#88AC84]/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs border ${
                      activeMode === "record"
                        ? "bg-[#FAF8F4] dark:bg-[#2A261F] text-[#6B655C] border-[#EDE6DA] dark:border-[#383329]"
                        : "bg-[#E5ECE3] dark:bg-[#202E22] text-[#476644] dark:text-[#A7C8A4] border-[#CCD8CA] dark:border-[#2D4030]"
                    }`}
                  >
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F897D]">
                      Storage Layer
                    </span>
                    <h5 className="font-semibold text-xs text-[#1D1B18] dark:text-[#FAF8F4] leading-tight">
                      {activeMode === "record" ? "PostgreSQL 14 (Docker)" : "Zero-DB Mock Engine"}
                    </h5>
                  </div>
                </div>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold ${
                    activeMode === "record"
                      ? "bg-[#F4F0E8] dark:bg-[#201E1A] text-[#6B655C] dark:text-[#C5BEB5]"
                      : "bg-[#E5ECE3] dark:bg-[#202E22] text-[#476644] dark:text-[#A7C8A4]"
                  }`}
                >
                  {activeMode === "record" ? "Port 5432 LIVE" : "DB OFFLINE (0ms)"}
                </span>
              </div>

              <div className="bg-[#FAF8F4] dark:bg-[#141311] p-2 rounded-lg border border-[#EDE6DA] dark:border-[#332F28] text-[10px] font-mono text-[#5C564E] dark:text-[#C5BEB5]">
                {activeMode === "record" ? (
                  <span>INSERT INTO urls ... [DataRow serialized]</span>
                ) : (
                  <span className="text-[#5E7E5A] dark:text-[#88AC84] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    Served from keploy/test-set-0/mocks.yaml
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption note */}
      <div className="mt-4 pt-4 border-t border-[#EDE6DA] dark:border-[#332F28] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#8F897D] gap-2">
        <p>
          Notice: In Replay mode, the <strong>PostgreSQL container is completely turned off</strong>. Keploy injects identical socket payloads directly into the app.
        </p>
        <span className="font-mono text-[#A1824F] dark:text-[#D9C6A5] font-semibold shrink-0">
          Zero Test Drift · Zero Live DB
        </span>
      </div>
    </div>
  );
}
